import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Antworten } from "./spiegel";
import { geraetEntfernen, geraetLesen, geraetSchreiben, sitzungLesen, sitzungSchreiben, sitzungLoeschen } from "./speicher";
import { EINSTELLUNGEN_START, type Einstellungen, type Eintrag, type RadStand } from "./ich";

export type Land = "AT" | "DE";
export type Markierung = "beschaeftigt" | "kraft";

interface Zustand {
  land: Land;
  setLand: (l: Land) => void;
  antworten: Antworten;
  antworte: (key: string, wert: number | undefined) => void;
  notizen: Record<string, string>;
  notiere: (themaId: string, text: string) => void;
  markierungen: Record<string, Markierung[]>;
  markiere: (themaId: string, m: Markierung) => void;
  gespraech: string;
  setGespraech: (t: string) => void;
  plan: string[];
  setPlan: (p: string[]) => void;
  region: string;
  setRegion: (r: string) => void;
  ichMerken: boolean;
  setIchMerken: (m: boolean) => void;
  eintraege: Eintrag[];
  setEintraege: (f: (alt: Eintrag[]) => Eintrag[]) => void;
  rad: RadStand[];
  setRad: (f: (alt: RadStand[]) => RadStand[]) => void;
  einstellungen: Einstellungen;
  setEinstellungen: (aenderung: Partial<Einstellungen>) => void;
  ichLoeschen: () => void;
  allesLoeschen: () => void;
  laden: (d: Sicherung) => void;
  sicherung: () => Sicherung;
}

export interface Sicherung {
  version: 1;
  antworten: Antworten;
  notizen: Record<string, string>;
  markierungen: Record<string, Markierung[]>;
  gespraech: string;
  plan: string[];
  eintraege?: Eintrag[];
  rad?: RadStand[];
  einstellungen?: Einstellungen;
}

const Ctx = createContext<Zustand | null>(null);

function startLand(): Land {
  const l = (navigator.language || "").toLowerCase();
  return l.endsWith("-de") ? "DE" : "AT";
}

function useSitzung<T>(key: string, start: T) {
  const [wert, setWert] = useState<T>(() => sitzungLesen(key, start));
  useEffect(() => { sitzungSchreiben(key, wert); }, [key, wert]);
  return [wert, setWert] as const;
}

// „Mein Bereich“: im Sitzungsspeicher, oder nach ausdrücklicher Zustimmung dauerhaft auf dem Gerät.
function useIch<T>(key: string, merken: boolean, start: T) {
  const [wert, setWert] = useState<T>(() => (merken ? geraetLesen(key, start) : sitzungLesen(key, start)));
  useEffect(() => {
    if (merken) geraetSchreiben(key, wert); else sitzungSchreiben(key, wert);
  }, [key, wert, merken]);
  return [wert, setWert] as const;
}

export function ZustandProvider({ children }: { children: ReactNode }) {
  const [land, setLand] = useSitzung<Land>("land", startLand());
  const [antworten, setAntworten] = useSitzung<Antworten>("antworten", {});
  const [notizen, setNotizen] = useSitzung<Record<string, string>>("notizen", {});
  const [markierungen, setMarkierungen] = useSitzung<Record<string, Markierung[]>>("markierungen", {});
  const [gespraech, setGespraech] = useSitzung<string>("gespraech", "");
  const [plan, setPlan] = useSitzung<string[]>("plan", []);
  const [region, setRegion] = useSitzung<string>("region", "");
  const [ichMerken, setIchMerkenState] = useState<boolean>(() => geraetLesen("ich-merken", false));
  const [eintraege, setEintraege] = useIch<Eintrag[]>("ich-eintraege", ichMerken, []);
  const [rad, setRad] = useIch<RadStand[]>("ich-rad", ichMerken, []);
  const [einstellungenRoh, setEinstellungenRoh] = useIch<Einstellungen>("ich-einstellungen", ichMerken, EINSTELLUNGEN_START);
  const einstellungen: Einstellungen = { ...EINSTELLUNGEN_START, ...einstellungenRoh, bereiche: { ...EINSTELLUNGEN_START.bereiche, ...einstellungenRoh.bereiche } };

  // Gemerktes Land und Bundesland für „Hilfe finden“ übernehmen (einmal beim Start).
  useEffect(() => {
    if (einstellungen.land) setLand(einstellungen.land);
    if (einstellungen.region) setRegion(einstellungen.region);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Schriftgröße und ruhige Darstellung gelten für die ganze App.
  useEffect(() => {
    const h = document.documentElement;
    if (einstellungen.schrift === "gross") h.dataset.schrift = "gross"; else delete h.dataset.schrift;
    if (einstellungen.ruhig) h.dataset.ruhig = "ja"; else delete h.dataset.ruhig;
  }, [einstellungen.schrift, einstellungen.ruhig]);

  const wert: Zustand = {
    land, setLand,
    antworten,
    antworte: (key, w) => setAntworten((a) => {
      const neu = { ...a };
      if (w === undefined) delete neu[key]; else neu[key] = w;
      return neu;
    }),
    notizen,
    notiere: (id, text) => setNotizen((n) => ({ ...n, [id]: text })),
    markierungen,
    markiere: (id, m) => setMarkierungen((alt) => {
      const liste = alt[id] ?? [];
      return { ...alt, [id]: liste.includes(m) ? liste.filter((x) => x !== m) : [...liste, m] };
    }),
    gespraech, setGespraech,
    plan, setPlan,
    region, setRegion,
    ichMerken,
    // Einschalten legt die bisherigen Einträge auf dem Gerät ab, Ausschalten entfernt sie dort wieder (in der Sitzung bleiben sie).
    setIchMerken: (m) => {
      setIchMerkenState(m);
      if (m) {
        geraetSchreiben("ich-merken", true);
        // Browser um dauerhafte Speicherung bitten (Chrome, Firefox, Edge halten sich daran, Safari nur eingeschränkt).
        try { void navigator.storage?.persist?.(); } catch { /* egal */ }
      } else geraetEntfernen((k) => k.startsWith("ich-"));
    },
    eintraege, setEintraege,
    rad, setRad,
    einstellungen,
    setEinstellungen: (a) => setEinstellungenRoh((alt) => ({ ...alt, ...a })),
    ichLoeschen: () => {
      geraetEntfernen((k) => k.startsWith("ich-"));
      setIchMerkenState(false); setEintraege(() => []); setRad(() => []); setEinstellungenRoh(EINSTELLUNGEN_START);
    },
    allesLoeschen: () => {
      sitzungLoeschen();
      geraetEntfernen((k) => k.startsWith("ich-"));
      setIchMerkenState(false);
      setAntworten({}); setNotizen({}); setMarkierungen({}); setGespraech(""); setPlan([]); setEintraege(() => []); setRad(() => []); setEinstellungenRoh(EINSTELLUNGEN_START);
    },
    sicherung: () => ({ version: 1, antworten, notizen, markierungen, gespraech, plan, eintraege, rad, einstellungen }),
    laden: (d) => {
      setAntworten(d.antworten ?? {}); setNotizen(d.notizen ?? {}); setMarkierungen(d.markierungen ?? {});
      setGespraech(d.gespraech ?? ""); setPlan(Array.isArray(d.plan) ? d.plan : []);
      if (Array.isArray(d.eintraege)) setEintraege(() => d.eintraege!);
      if (Array.isArray(d.rad)) setRad(() => d.rad!);
      if (d.einstellungen && typeof d.einstellungen === "object") setEinstellungenRoh({ ...EINSTELLUNGEN_START, ...d.einstellungen });
    },
  };
  return <Ctx.Provider value={wert}>{children}</Ctx.Provider>;
}

export function useZustand(): Zustand {
  const z = useContext(Ctx);
  if (!z) throw new Error("ZustandProvider fehlt");
  return z;
}
