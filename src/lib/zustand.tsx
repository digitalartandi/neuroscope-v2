import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Antworten } from "./spiegel";
import { sitzungLesen, sitzungSchreiben, sitzungLoeschen } from "./speicher";

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
  allesLoeschen: () => void;
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

export function ZustandProvider({ children }: { children: ReactNode }) {
  const [land, setLand] = useSitzung<Land>("land", startLand());
  const [antworten, setAntworten] = useSitzung<Antworten>("antworten", {});
  const [notizen, setNotizen] = useSitzung<Record<string, string>>("notizen", {});
  const [markierungen, setMarkierungen] = useSitzung<Record<string, Markierung[]>>("markierungen", {});
  const [gespraech, setGespraech] = useSitzung<string>("gespraech", "");

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
    allesLoeschen: () => {
      sitzungLoeschen();
      setAntworten({}); setNotizen({}); setMarkierungen({}); setGespraech("");
    },
  };
  return <Ctx.Provider value={wert}>{children}</Ctx.Provider>;
}

export function useZustand(): Zustand {
  const z = useContext(Ctx);
  if (!z) throw new Error("ZustandProvider fehlt");
  return z;
}
