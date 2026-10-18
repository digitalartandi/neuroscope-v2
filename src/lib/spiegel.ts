// Persönlicher Spiegel: gibt die eigenen Antworten als Sätze zurück.
// Bewusst OHNE Bewertung: keine Summen, keine Schwellen, keine Sortierung nach
// Häufigkeit. Die Reihenfolge ist immer die Reihenfolge der Fragen.
import { HAEUFIGKEIT, type Thema } from "../content/reflexion";

export type Antworten = Record<string, number>; // Schlüssel "thema.frage" -> Index in HAEUFIGKEIT

export const schluessel = (themaId: string, frageId: string) => `${themaId}.${frageId}`;

export interface SpiegelSatz {
  frageId: string;
  vor: string;
  haeufigkeit: string;
  nach: string;
}

export function spiegelSaetze(thema: Thema, antworten: Antworten): SpiegelSatz[] {
  const saetze: SpiegelSatz[] = [];
  for (const f of thema.fragen) {
    const i = antworten[schluessel(thema.id, f.id)];
    if (i === undefined || i < 0 || i >= HAEUFIGKEIT.length) continue;
    const [vor, nach = ""] = f.spiegel.split("{h}");
    saetze.push({ frageId: f.id, vor, haeufigkeit: HAEUFIGKEIT[i], nach });
  }
  return saetze;
}

export function anzahlBeantwortet(thema: Thema, antworten: Antworten): number {
  return thema.fragen.filter((f) => antworten[schluessel(thema.id, f.id)] !== undefined).length;
}

// Für die Gesprächsvorbereitung: Spiegel-Sätze in der Ich-Form.
const ICH: Record<string, string> = {
  du: "ich", dich: "mich", dir: "mir", dein: "mein", deine: "meine", deinen: "meinen", deiner: "meiner", deinem: "meinem", deines: "meines",
  hattest: "hatte", bist: "bin", hast: "habe", konntest: "konnte", warst: "war", standest: "stand", tust: "tue", wolltest: "wollte",
};
export function ichForm(text: string): string {
  return text.replace(/[A-Za-zÄÖÜäöüß]+/g, (w) => {
    const r = ICH[w.toLowerCase()];
    if (!r) return w;
    return w[0] === w[0].toUpperCase() ? r[0].toUpperCase() + r.slice(1) : r;
  });
}
