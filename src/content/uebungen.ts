// Kurze Übungen zur Selbstfürsorge. Allgemeine Anregungen, keine Therapie.
export interface Uebung {
  id: string;
  titel: string;
  dauer: string;
  kurz: string;
  art: "atmung" | "checkliste" | "schreiben";
  einleitung: string[];
  punkte?: string[];      // Checkliste
  impulse?: string[];     // Schreibimpulse
  quellen: { text: string; url: string }[];
}

export const UEBUNGEN: Uebung[] = [
  {
    id: "atmung",
    titel: "Ruhig atmen",
    dauer: "3 Minuten",
    kurz: "Langsam ein- und ausatmen, im Takt eines Kreises.",
    art: "atmung",
    einleitung: [
      "Langsames Atmen kann helfen, kurz zur Ruhe zu kommen.",
      "Atme ein, während der Kreis größer wird, und aus, während er kleiner wird. Das sind etwa sechs Atemzüge pro Minute. Wenn dir das zu langsam ist, atme in deinem eigenen Tempo. Wenn dich die Übung unruhiger macht, hör einfach auf.",
    ],
    quellen: [
      { text: "Stress bewältigen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/stress/entspannt-bleiben.html" },
      { text: "Zaccaro u. a. (2018): How Breath-Control Can Change Your Life. Frontiers in Human Neuroscience", url: "https://www.frontiersin.org/articles/10.3389/fnhum.2018.00353/full" },
    ],
  },
  {
    id: "abendroutine",
    titel: "Abendroutine",
    dauer: "5 Minuten",
    kurz: "Eine Liste kleiner Gewohnheiten für einen ruhigeren Abend.",
    art: "checkliste",
    einleitung: [
      "Kleine Gewohnheiten am Abend können helfen, zur Ruhe zu kommen. Hake an, was du ausprobieren möchtest. Die Liste bleibt nur in diesem Tab.",
    ],
    punkte: [
      "Ungefähr zur gleichen Zeit schlafen gehen und aufstehen, auch am Wochenende",
      "Ein kleines Abendritual, das jeden Tag gleich abläuft",
      "Eine Stunde vor dem Schlafen Bildschirme weglegen",
      "Ab dem frühen Nachmittag auf Kaffee, Cola und Energydrinks verzichten",
      "Abends leicht essen und keinen Alkohol als Einschlafhilfe",
      "Das Schlafzimmer ruhig, dunkel und eher kühl halten",
      "Gedanken für morgen auf einen Zettel schreiben, damit sie aus dem Kopf sind",
      "Bei langem Wachliegen aufstehen und etwas Ruhiges tun, bis die Müdigkeit kommt",
      "Tagsüber bei Tageslicht nach draußen gehen und sich bewegen",
    ],
    quellen: [
      { text: "Gut schlafen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/gehirn-nerven/schlafstoerungen/gut-schlafen.html" },
    ],
  },
  {
    id: "staerken",
    titel: "Stärken sammeln",
    dauer: "10 Minuten",
    kurz: "Drei Fragen, die den Blick auf das lenken, was gelingt.",
    art: "schreiben",
    einleitung: [
      "Der Blick fällt oft auf das, was fehlt. Diese Übung lenkt ihn auf das, was da ist. Schreib so viel oder so wenig, wie du willst.",
    ],
    impulse: [
      "Was ist dir in letzter Zeit gelungen, auch wenn es klein war?",
      "Welche Menschen, Orte oder Tätigkeiten geben dir Kraft?",
      "Wofür bist du heute dankbar?",
    ],
    quellen: [
      { text: "Die Psyche stärken mit Resilienz – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/psyche-seele/praevention/psyche-staerken.html" },
      { text: "Seligman u. a. (2005): Positive Psychology Progress. American Psychologist 60, 410–421", url: "https://psykologtidsskriftet.no/asset/article/2005/09/Positive-Psychology-Progress-Empirical-Validation-of-Interventions/Positive-Psychology-Progress-Empirical-Validation-of-Interventions.pdf" },
    ],
  },
  {
    id: "wochenrueckblick",
    titel: "Wochenrückblick",
    dauer: "10 Minuten",
    kurz: "Die Woche ordnen und einen kleinen nächsten Schritt finden.",
    art: "schreiben",
    einleitung: [
      "Einmal pro Woche kurz innehalten hilft, den Überblick zu behalten. Die Fragen sind ein Vorschlag, keine Pflicht.",
    ],
    impulse: [
      "Was hat mir diese Woche gutgetan?",
      "Was war anstrengend?",
      "Was möchte ich nächste Woche anders machen, in einem kleinen Schritt?",
      "Welche Pause oder welche schöne Sache trage ich mir für nächste Woche fix ein?",
    ],
    quellen: [
      { text: "Resilienz – gesund.bund.de", url: "https://gesund.bund.de/resilienz" },
      { text: "Gesund mit Entspannung – gesund.bund.de", url: "https://gesund.bund.de/gesund-mit-entspannung" },
    ],
  },
];
