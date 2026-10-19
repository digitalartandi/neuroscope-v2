// „Mein Krisenplan“: eigener Plan für schwere Momente. Angelehnt an den Sicherheitsplan
// nach Stanley und Brown (2012), in eigenen Worten. Wird nie ausgewertet.
export interface Kontakt { name: string; nummer: string }
export interface Krisenplan {
  warnzeichen: string[];
  selbst: string[];
  orte: string[];
  menschen: Kontakt[];
  fachleute: Kontakt[];
  sicher: string[];
  wichtig: string[];
}
export const KRISENPLAN_LEER: Krisenplan = { warnzeichen: [], selbst: [], orte: [], menschen: [], fachleute: [], sicher: [], wichtig: [] };

export interface PlanSchritt {
  id: keyof Krisenplan;
  titel: string;
  frage: string;
  hinweis: string;
  ideen: string[];
  kontakte?: boolean;
}

export const PLAN_SCHRITTE: PlanSchritt[] = [
  {
    id: "warnzeichen", titel: "Meine Warnzeichen", frage: "Woran merke ich, dass es schwer wird?",
    hinweis: "Gedanken, Gefühle, Verhalten oder Situationen, die eine Krise ankündigen.",
    ideen: ["Ich ziehe mich von allen zurück", "Ich schlafe kaum noch", "Der Gedanke: Es hat alles keinen Sinn", "Ich trinke mehr als sonst", "Alles fühlt sich leer an"],
  },
  {
    id: "selbst", titel: "Was ich selbst tun kann", frage: "Was hilft mir allein, damit es etwas leichter wird?",
    hinweis: "Kleine Dinge, die du auch ohne andere Menschen tun kannst.",
    ideen: ["Eine Runde spazieren gehen", "Lieblingsmusik hören", "Warm duschen", "Die Atemübung in Neuroscope machen", "Etwas aufschreiben", "Ein Haustier streicheln"],
  },
  {
    id: "orte", titel: "Menschen und Orte, die mir guttun", frage: "Wo und bei wem komme ich auf andere Gedanken?",
    hinweis: "Hier musst du nicht über deine Krise reden. Es geht um Gesellschaft und Ablenkung.",
    ideen: ["Ins Café gehen", "In den Park oder Wald", "Eine Freundin besuchen", "In die Bibliothek", "Zur Familie fahren"],
  },
  {
    id: "menschen", titel: "Wen ich um Hilfe bitten kann", frage: "Mit wem kann ich offen reden, wenn es mir schlecht geht?",
    hinweis: "Menschen, denen du vertraust. Mit Telefonnummer, damit du sie schnell erreichst.",
    ideen: [], kontakte: true,
  },
  {
    id: "fachleute", titel: "Fachleute und Krisendienste", frage: "Welche Fachleute kann ich erreichen?",
    hinweis: "Zum Beispiel deine Hausärztin, dein Therapeut oder eine Beratungsstelle. Die wichtigsten Krisennummern stehen schon da.",
    ideen: [], kontakte: true,
  },
  {
    id: "sicher", titel: "Meine Umgebung sicherer machen", frage: "Was kann ich tun, damit ich in einer Krise sicherer bin?",
    hinweis: "Dinge, die in einer Krise gefährlich werden können, aus der Reichweite bringen. Das kann auch jemand für dich übernehmen.",
    ideen: ["Medikamente nur in kleiner Menge daheim haben", "Gefährliche Dinge jemandem zur Aufbewahrung geben", "Keinen Alkohol im Haus haben", "Nicht allein bleiben"],
  },
  {
    id: "wichtig", titel: "Was mir wichtig ist", frage: "Wofür lohnt es sich für mich?",
    hinweis: "Menschen, Tiere, Pläne, Erinnerungen. Das, was dich hält.",
    ideen: ["Meine Kinder", "Mein Hund", "Die Reise im Sommer", "Meine beste Freundin"],
  },
];

export const KRISENPLAN_QUELLEN = [
  { text: "Stanley & Brown (2012): Safety Planning Intervention. Cognitive and Behavioral Practice 19, 256–264", url: "https://doi.org/10.1016/j.cbpra.2011.01.001" },
  { text: "Warnsignale und Krisenplan – therapie.de", url: "https://www.therapie.de/psyche/info/index/diagnose/depression/warnsignale-krise-erste-hilfe/" },
];
