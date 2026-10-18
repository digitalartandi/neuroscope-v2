// Blendet den Preloader aus index.html sanft aus.
// Beim ersten Öffnen in einer Sitzung läuft die Logo-Animation fertig, danach nur noch kurz.
const SCHLUESSEL = "ns2:lader";

export function laderAusblenden() {
  const el = document.getElementById("lader");
  if (!el) return;
  let schonGesehen = false;
  try { schonGesehen = sessionStorage.getItem(SCHLUESSEL) === "1"; sessionStorage.setItem(SCHLUESSEL, "1"); } catch { /* ohne Speicher: volle Animation */ }
  const ruhig = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (schonGesehen) el.classList.add("kurz");
  const mindestens = schonGesehen ? 250 : ruhig ? 700 : 1900;
  const warten = Math.max(0, mindestens - performance.now());
  window.setTimeout(() => {
    el.classList.add("fertig");
    window.setTimeout(() => el.remove(), 700);
  }, warten);
}
