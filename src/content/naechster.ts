// „Nächster guter Schritt“: genau ein Vorschlag am Ende einer Seite.
// u: = Übung, h: = Hilfe/Termin. Für Themen, bei denen Selbsthilfe nicht reicht, führt er zur Fachhilfe.
export const NACH_WISSEN: Record<string, string> = {
  schlaf: "u:muskelentspannung", energie: "u:schoenes", stress: "u:sinne", stimmung: "u:gefuehle",
  beziehungen: "u:selbstmitgefuehl", alltag: "u:sorgenzeit", gewohnheiten: "u:schoenes", staerken: "u:staerken",
  transgenerational: "u:schreiben", depression: "u:schoenes", angst: "u:atmung", sozialeangst: "u:gedanken",
  zwang: "h:termin", trauma: "u:sinne", ptbs: "u:sinne", kptbs: "u:sinne", trauer: "u:schreiben",
  anpassung: "u:sorgenzeit", koerperbeschwerden: "u:koerperreise", essen: "h:termin", insomnie: "u:muskelentspannung",
  adhs: "u:schoenes", autismus: "u:sinne", perfektionismus: "u:selbstmitgefuehl", persoenlichkeit: "u:gefuehle",
  psychose: "h:termin", bipolar: "h:termin", alkohol: "h:termin", drogen: "h:termin", gaming: "h:termin", burnout: "u:sorgenzeit",
};
