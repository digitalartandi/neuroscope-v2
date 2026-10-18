// Speicher nur für diese Browser-Sitzung (sessionStorage): übersteht ein
// Neuladen, ist weg, sobald der Tab geschlossen wird. Nichts verlässt den Browser.
export function sitzungLesen<T>(key: string, fallback: T): T {
  try {
    const roh = window.sessionStorage.getItem("ns2:" + key);
    return roh ? (JSON.parse(roh) as T) : fallback;
  } catch { return fallback; }
}
export function sitzungSchreiben(key: string, wert: unknown) {
  try { window.sessionStorage.setItem("ns2:" + key, JSON.stringify(wert)); } catch { /* privat-Modus: egal */ }
}
export function sitzungLoeschen() {
  try {
    Object.keys(window.sessionStorage).filter((k) => k.startsWith("ns2:")).forEach((k) => window.sessionStorage.removeItem(k));
  } catch { /* nichts */ }
}

// Bestwerte der Spiele: nur mit ausdrücklicher Zustimmung dauerhaft auf dem Gerät.
export function geraetLesen<T>(key: string, fallback: T): T {
  try {
    const roh = window.localStorage.getItem("ns2:" + key);
    return roh ? (JSON.parse(roh) as T) : fallback;
  } catch { return fallback; }
}
export function geraetSchreiben(key: string, wert: unknown) {
  try { window.localStorage.setItem("ns2:" + key, JSON.stringify(wert)); } catch { /* nichts */ }
}
export function geraetLoeschen() {
  try {
    Object.keys(window.localStorage).filter((k) => k.startsWith("ns2:")).forEach((k) => window.localStorage.removeItem(k));
  } catch { /* nichts */ }
}

// Entfernt nur ausgewählte Einträge vom Gerät (z. B. nur Spiele oder nur „Mein Bereich“).
export function geraetEntfernen(passt: (key: string) => boolean) {
  try {
    Object.keys(window.localStorage).filter((k) => k.startsWith("ns2:") && passt(k.slice(4))).forEach((k) => window.localStorage.removeItem(k));
  } catch { /* nichts */ }
}
