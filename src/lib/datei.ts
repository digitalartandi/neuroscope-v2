// Verschlüsselte Sicherungsdatei: bleibt bei der Person, nur mit ihrem Passwort lesbar.
// PBKDF2 (SHA-256, 310 000 Runden) leitet aus dem Passwort einen AES-GCM-Schlüssel (256 Bit) ab.
import type { Sicherung } from "./zustand";

const RUNDEN = 310_000;
const b64 = (u: Uint8Array) => btoa(String.fromCharCode(...u));
const ub64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function schluessel(passwort: string, salz: Uint8Array) {
  const roh = await crypto.subtle.importKey("raw", new TextEncoder().encode(passwort), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt: salz, iterations: RUNDEN, hash: "SHA-256" }, roh, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}

export async function verschluesseln(daten: Sicherung, passwort: string): Promise<string> {
  const salz = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const k = await schluessel(passwort, salz);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, k, new TextEncoder().encode(JSON.stringify(daten))));
  return JSON.stringify({ format: "neuroscope-sicherung", v: 1, salz: b64(salz), iv: b64(iv), daten: b64(ct) });
}

export async function entschluesseln(text: string, passwort: string): Promise<Sicherung> {
  let h: { format?: string; salz: string; iv: string; daten: string };
  try { h = JSON.parse(text); } catch { throw new Error("Das ist keine Neuroscope-Sicherung."); }
  if (h.format !== "neuroscope-sicherung") throw new Error("Das ist keine Neuroscope-Sicherung.");
  try {
    const k = await schluessel(passwort, ub64(h.salz));
    const klar = await crypto.subtle.decrypt({ name: "AES-GCM", iv: ub64(h.iv) }, k, ub64(h.daten));
    return JSON.parse(new TextDecoder().decode(klar)) as Sicherung;
  } catch {
    throw new Error("Das Passwort passt nicht zu dieser Datei.");
  }
}

export function herunterladen(inhalt: string, name: string) {
  const url = URL.createObjectURL(new Blob([inhalt], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
