// Hilfsfunktionen für die Konzentrationsspiele.
// Zeitmessung: Event-Zeitstempel (event.timeStamp) gegen Reizbeginn aus
// requestAnimationFrame, beide auf derselben Zeitbasis wie performance.now().
import { useEffect, useState } from "react";
import { geraetEntfernen, geraetLesen, geraetSchreiben, sitzungLesen, sitzungSchreiben } from "./speicher";

export function mischen<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

export function median(xs: number[]): number | null {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

export const warte = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

/** Wartet auf den nächsten Frame und liefert dessen Zeitstempel (Reizbeginn). */
export const naechsterFrame = () => new Promise<number>((r) => requestAnimationFrame((t) => r(t)));

export function geraetTyp(): string {
  const grob = window.matchMedia?.("(pointer: coarse)").matches;
  return grob ? "Touch" : "Maus oder Tastatur";
}

export const sek = (ms: number) => (ms / 1000).toLocaleString("de-AT", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " s";
export const msText = (ms: number | null) => (ms == null ? "–" : Math.round(ms).toLocaleString("de-AT") + " ms");
export const prozent = (x: number) => Math.round(x * 100) + " %";

// Bestwerte: standardmäßig nur für diesen Tab, dauerhaft nur mit Zustimmung.
export function useBestwert(spiel: string, besser: "kleiner" | "groesser") {
  const [merken, setMerkenState] = useState<boolean>(() => geraetLesen("merken", false));
  const [best, setBest] = useState<number | null>(() =>
    merken ? geraetLesen<number | null>("best-" + spiel, null) : sitzungLesen<number | null>("best-" + spiel, null));

  useEffect(() => {
    if (merken) geraetSchreiben("best-" + spiel, best); else sitzungSchreiben("best-" + spiel, best);
  }, [merken, best, spiel]);

  // Abwählen löscht alle Bestmarken auf dem Gerät und hinterlässt nichts.
  const setMerken = (m: boolean) => {
    setMerkenState(m);
    if (m) geraetSchreiben("merken", true); else geraetEntfernen((k) => k === "merken" || k.startsWith("best-"));
  };
  const melden = (wert: number) => {
    const neu = best == null || (besser === "kleiner" ? wert < best : wert > best);
    if (neu) setBest(wert);
    return neu;
  };
  return { best, melden, merken, setMerken };
}
