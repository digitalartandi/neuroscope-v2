import { useEffect, useState } from "react";

// true am Handy (schmaler Bildschirm). Dort zeigen wir Tiefe nur auf Wunsch.
const ABFRAGE = "(max-width: 48rem)";
export function useMobil(): boolean {
  const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia(ABFRAGE).matches);
  useEffect(() => {
    const q = window.matchMedia(ABFRAGE);
    const neu = () => setM(q.matches);
    q.addEventListener("change", neu);
    return () => q.removeEventListener("change", neu);
  }, []);
  return m;
}

// Beim Drucken alles aufklappen.
export function useDruck(): boolean {
  const [d, setD] = useState(false);
  useEffect(() => {
    const an = () => setD(true), aus = () => setD(false);
    window.addEventListener("beforeprint", an); window.addEventListener("afterprint", aus);
    return () => { window.removeEventListener("beforeprint", an); window.removeEventListener("afterprint", aus); };
  }, []);
  return d;
}

export const ankerJetzt = () => window.location.hash.split("#")[2] ?? "";
