// „Psychische Gesundheit verstehen“: allgemeine Information zu Krankheitsbildern nach ICD-11.
// Nie mit den Antworten der Person verknüpft. Kein Selbsttest, keine Kriterienliste.
import type { Quelle } from "./wissen";

export interface VerstehenSeite {
  id: string;
  titel: string;
  gruppe: string;
  icd?: { code: string; titel: string; url?: string };
  einleitung: string;
  absaetze: { titel: string; text: string[] }[];
  hilft: string[];
  wannHilfe: string[];
  quellen: Quelle[];
}

export const ICD_INFO = {
  text: "", // wird mit der Recherche befüllt
  quellen: [] as Quelle[],
};

export const VERSTEHEN: VerstehenSeite[] = [];
