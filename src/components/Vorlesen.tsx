// Vorlesen mit den Stimmen des Geräts (Web Speech API).
// Bevorzugt deutsche Stimmen, die direkt auf dem Gerät laufen: Der Text verlässt das Gerät dann nicht.
import { useEffect, useRef, useState } from "react";
import { useZustand } from "../lib/zustand";

const WEIBLICH = /anna|petra|helena|hedda|katja|marlene|vicki|sabine|seraphina|amala|katharina|yvonne|female|frau|weiblich/i;

export function deutscheStimmen(): SpeechSynthesisVoice[] {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("de"));
}

// Wahl: gespeicherte Stimme, sonst lokale Frauenstimme, sonst irgendeine lokale deutsche Stimme.
export function stimmeWaehlen(name?: string): SpeechSynthesisVoice | undefined {
  const alle = deutscheStimmen();
  const lokal = alle.filter((v) => v.localService);
  return (name && alle.find((v) => v.name === name)) || lokal.find((v) => WEIBLICH.test(v.name)) || lokal[0];
}

export function useStimmen() {
  const [stimmen, setStimmen] = useState<SpeechSynthesisVoice[]>(() => deutscheStimmen());
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const neu = () => setStimmen(deutscheStimmen());
    window.speechSynthesis.addEventListener("voiceschanged", neu);
    neu();
    return () => window.speechSynthesis.removeEventListener("voiceschanged", neu);
  }, []);
  return stimmen;
}

const AUSLASSEN = ".quellen, nav, .sprungmarken, .inhaltsverzeichnis, .vorlesen, button, .zurueck, [data-nicht-vorlesen], .wissen-karten";

function bloecke(wurzel: HTMLElement): HTMLElement[] {
  return Array.from(wurzel.querySelectorAll<HTMLElement>("h1, h2, h3, p, li"))
    .filter((el) => !el.closest(AUSLASSEN) && !el.querySelector("p, li") && (el.textContent ?? "").trim().length > 1);
}

export function Vorlesen() {
  const { einstellungen } = useZustand();
  const stimmen = useStimmen();
  const [stand, setStand] = useState<"aus" | "laeuft" | "pause">("aus");
  const ref = useRef<HTMLDivElement>(null);
  const liste = useRef<HTMLElement[]>([]);
  const index = useRef(0);
  const aktiv = useRef<HTMLElement | null>(null);
  const moeglich = "speechSynthesis" in window;
  const [geprueft, setGeprueft] = useState(false);
  useEffect(() => { const t = window.setTimeout(() => setGeprueft(true), 1500); return () => window.clearTimeout(t); }, []);
  const stimme = stimmeWaehlen(einstellungen.stimme);

  const markieren = (el: HTMLElement | null) => {
    aktiv.current?.classList.remove("wird-gelesen");
    aktiv.current = el;
    if (el) {
      el.classList.add("wird-gelesen");
      const r = el.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight - 100) el.scrollIntoView({ block: "center", behavior: einstellungen.ruhig ? "auto" : "smooth" });
    }
  };
  const stopp = () => {
    window.speechSynthesis?.cancel();
    markieren(null);
    setStand("aus");
  };
  const sprich = (i: number) => {
    const el = liste.current[i];
    if (!el) { stopp(); return; }
    index.current = i;
    markieren(el);
    const u = new SpeechSynthesisUtterance((el.textContent ?? "").replace(/\s+/g, " ").trim());
    u.lang = "de-DE";
    if (stimme) u.voice = stimme;
    u.rate = einstellungen.tempo ?? 1;
    u.onend = () => { if (index.current === i) sprich(i + 1); };
    u.onerror = (e) => { if (e.error !== "interrupted" && e.error !== "canceled") stopp(); };
    window.speechSynthesis.speak(u);
  };
  const start = () => {
    const wurzel = ref.current?.closest("article, .spalte") as HTMLElement | null;
    if (!wurzel) return;
    liste.current = bloecke(wurzel);
    window.speechSynthesis.cancel();
    setStand("laeuft");
    sprich(0);
  };
  const pause = () => { window.speechSynthesis.pause(); setStand("pause"); };
  const weiter = () => { window.speechSynthesis.resume(); setStand("laeuft"); };
  const springen = (d: number) => {
    const ziel = Math.min(Math.max(index.current + d, 0), liste.current.length - 1);
    index.current = -1; // laufende Äußerung soll nicht weiterzählen
    window.speechSynthesis.cancel();
    setStand("laeuft");
    window.setTimeout(() => sprich(ziel), 60);
  };

  // Beim Verlassen der Seite verstummen.
  useEffect(() => () => { window.speechSynthesis?.cancel(); aktiv.current?.classList.remove("wird-gelesen"); }, []);

  if (!moeglich) return null;
  // Stimmen laden manche Browser verzögert. Erst nach kurzer Wartezeit „keine Stimme“ melden.
  const keineStimme = !stimme && (stimmen.length > 0 || geprueft);

  return (
    <div className="vorlesen" ref={ref} data-stand={stand}>
      {stand === "aus" ? (
        <button type="button" className="vorlesen__start" onClick={start} disabled={keineStimme}>
          <Lautsprecher />Vorlesen
        </button>
      ) : (
        <div className="vorlesen__leiste" role="group" aria-label="Vorlesen steuern">
          <button type="button" onClick={() => springen(-1)} aria-label="Vorheriger Absatz"><Pfeil links /></button>
          {stand === "laeuft"
            ? <button type="button" className="vorlesen__haupt" onClick={pause} aria-label="Pause"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5" width="3.5" height="14" rx="1" /><rect x="13.5" y="5" width="3.5" height="14" rx="1" /></svg></button>
            : <button type="button" className="vorlesen__haupt" onClick={weiter} aria-label="Weiter vorlesen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" /></svg></button>}
          <button type="button" onClick={() => springen(1)} aria-label="Nächster Absatz"><Pfeil /></button>
          <button type="button" onClick={stopp} aria-label="Vorlesen beenden"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2" /></svg></button>
          <span className="vorlesen__welle" aria-hidden="true"><i /><i /><i /><i /></span>
        </div>
      )}
      {keineStimme && <p className="hinweis-feld">Auf diesem Gerät ist keine deutsche Stimme installiert, die ohne Internet arbeitet.</p>}
    </div>
  );
}

function Lautsprecher() {
  return (
    <svg className="symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}
function Pfeil({ links }: { links?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" style={links ? { transform: "scaleX(-1)" } : undefined}><path d="M6 5.5v13l8.5-6.5zM16 5.5h2.5v13H16z" /></svg>;
}
