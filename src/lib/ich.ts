// „Mein Bereich“: eigene Einträge der Person, nur dargestellt, nie ausgewertet.
// Keine Summen, keine Durchschnitte, keine Schwellen. Ein Test prüft das.

export interface Eintrag { datum: string; stimmung: number; energie?: number; wort?: string }
export interface GefuehlEintrag { datum: string; woerter: string[] }
export interface RadStand { datum: string; werte: Record<string, number> }

export const STIMMUNG = ["sehr schwer", "eher schwer", "mittel", "eher gut", "sehr gut"];
export const ENERGIE = ["sehr wenig", "eher wenig", "mittel", "eher viel", "sehr viel"];

export function tagText(d: Date) {
  const z = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
export const heute = () => tagText(new Date());

export function tageZurueck(anzahl: number, bis = new Date()): string[] {
  const liste: string[] = [];
  for (let i = anzahl - 1; i >= 0; i--) {
    const d = new Date(bis.getFullYear(), bis.getMonth(), bis.getDate() - i);
    liste.push(tagText(d));
  }
  return liste;
}

export function datumLang(tag: string) {
  const [j, m, t] = tag.split("-").map(Number);
  return new Date(j, m - 1, t).toLocaleDateString("de-AT", { weekday: "short", day: "numeric", month: "short" });
}
export function datumKurz(tag: string) {
  const [, m, t] = tag.split("-").map(Number);
  return `${t}.${m}.`;
}

// Ein Eintrag pro Tag: ein neuer ersetzt den des gleichen Tages.
export function eintragen(liste: Eintrag[], neu: Eintrag): Eintrag[] {
  return [...liste.filter((e) => e.datum !== neu.datum), neu].sort((a, b) => a.datum.localeCompare(b.datum));
}

export type Farbe = "standard" | "meer" | "wald" | "abendrot" | "lavendel" | "graphit";
export const FARBEN: { id: Farbe; name: string; von: string; bis: string }[] = [
  { id: "standard", name: "Morgenlicht", von: "#2563eb", bis: "#7c3aed" },
  { id: "meer", name: "Meer", von: "#1d4ed8", bis: "#0e7490" },
  { id: "wald", name: "Wald", von: "#047857", bis: "#0f766e" },
  { id: "abendrot", name: "Abendrot", von: "#be123c", bis: "#c2410c" },
  { id: "lavendel", name: "Lavendel", von: "#7c3aed", bis: "#a21caf" },
  { id: "graphit", name: "Graphit", von: "#1e293b", bis: "#475569" },
];

// Persönliche Einstellungen. Liegen wie alle Einträge nur im Browser
// (Sitzung, oder mit Zustimmung dauerhaft auf dem Gerät).
export interface Einstellungen {
  name: string;
  bereiche: { checkin: boolean; verlauf: boolean; gefuehle: boolean; hilft: boolean; rad: boolean; muster: boolean };
  energie: boolean;
  wort: boolean;
  zeitraum: 7 | 14 | 30;
  achsen: string[]; // Lebensbereiche im Netz
  schrift: "normal" | "gross";
  farbe: Farbe;
  ruhig: boolean;
  stimme?: string; // Name der Vorlese-Stimme
  nurGeraetestimme?: boolean; // nur Stimmen, die auf dem Gerät laufen
  tempo: number; // Vorlesetempo
  intro: boolean; // Einführung schon gesehen
  land?: "AT" | "DE";
  region?: string;
}
export const EINSTELLUNGEN_START: Einstellungen = {
  name: "",
  bereiche: { checkin: true, verlauf: true, gefuehle: true, hilft: true, rad: true, muster: true },
  energie: true,
  wort: true,
  zeitraum: 14,
  achsen: ["schlaf", "energie", "stress", "stimmung", "beziehungen", "alltag", "gewohnheiten", "staerken"],
  schrift: "normal",
  farbe: "standard",
  ruhig: false,
  tempo: 1,
  intro: false,
};

// Kalender-Erinnerung als .ics-Datei. Entsteht im Browser, wird nirgends hingeschickt.
export function erinnerungIcs(uhrzeit: string, adresse: string): string {
  const [h, m] = uhrzeit.split(":").map(Number);
  const d = new Date();
  const z = (n: number) => String(n).padStart(2, "0");
  const start = `${d.getFullYear()}${z(d.getMonth() + 1)}${z(d.getDate())}T${z(h)}${z(m)}00`;
  const jetzt = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
  return [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Neuroscope//Erinnerung//DE", "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:neuroscope-erinnerung-${jetzt}@neuroscope.at`,
    `DTSTAMP:${jetzt}`,
    `DTSTART:${start}`,
    "DURATION:PT5M",
    "RRULE:FREQ=DAILY",
    "SUMMARY:Kurz bei mir nachspüren",
    `DESCRIPTION:Wie geht es dir heute? ${adresse}`,
    `URL:${adresse}`,
    "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:Kurz bei mir nachspüren", "TRIGGER:PT0M", "END:VALARM",
    "END:VEVENT", "END:VCALENDAR", "",
  ].join("\r\n");
}
