// „Mein Bereich“: eigene Einträge der Person, nur dargestellt, nie ausgewertet.
// Keine Summen, keine Durchschnitte, keine Schwellen. Ein Test prüft das.

export interface Eintrag { datum: string; stimmung: number; energie: number; wort?: string }
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
