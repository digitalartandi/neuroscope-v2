// Wegweiser „Was brauchst du gerade?“: Die Person wählt selbst, was gerade passt.
// Neuroscope schlägt dazu passende Übungen und Seiten vor. Es wird nichts eingeschätzt.
export interface Ziel { art: "uebung" | "wissen" | "seite"; id: string; titel?: string; text: string }
export interface Weg { id: string; titel: string; symbol: string; ziele: Ziel[]; hilfe?: boolean }

export const WEGE: Weg[] = [
  {
    id: "unruhig", titel: "Ich bin unruhig", symbol: "ruhe",
    ziele: [
      { art: "uebung", id: "atmung", text: "Langsam ausatmen beruhigt den Körper. Drei Minuten." },
      { art: "uebung", id: "sinne", text: "Die Sinne holen dich ins Hier und Jetzt. Zwei Minuten." },
      { art: "wissen", id: "angst#teufelskreis", titel: "Der Teufelskreis der Angst", text: "Zum Antippen: wie Unruhe sich hochschaukelt und wo du aussteigen kannst." },
    ],
  },
  {
    id: "grueble", titel: "Mein Kopf hört nicht auf", symbol: "gedanken",
    ziele: [
      { art: "uebung", id: "sorgenzeit", text: "Sorgen aufschreiben und auf später verschieben." },
      { art: "uebung", id: "gedanken", text: "Einen Gedanken in Ruhe von mehreren Seiten anschauen." },
      { art: "uebung", id: "koerperreise", text: "Mit der Aufmerksamkeit raus aus dem Kopf, hinein in den Körper." },
    ],
  },
  {
    id: "zuviel", titel: "Alles ist zu viel", symbol: "sinne",
    ziele: [
      { art: "uebung", id: "sinne", text: "Erst einmal ankommen. Zwei Minuten." },
      { art: "uebung", id: "atmung", text: "Ein paar ruhige Atemzüge." },
      { art: "wissen", id: "stress", text: "Was bei Stress im Körper passiert und was entlastet." },
    ],
  },
  {
    id: "leer", titel: "Ich fühle mich leer", symbol: "schoenes",
    ziele: [
      { art: "uebung", id: "schoenes", text: "Eine kleine gute Sache fix einplanen. Oft kommt die Lust erst beim Tun." },
      { art: "uebung", id: "selbstmitgefuehl", text: "So freundlich mit dir sein wie mit einer guten Freundin." },
      { art: "wissen", id: "stimmung", text: "Wann Niedergeschlagenheit normal ist und wann ein Gespräch hilft." },
    ],
  },
  {
    id: "schlaf", titel: "Ich kann nicht schlafen", symbol: "schlaf",
    ziele: [
      { art: "uebung", id: "muskelentspannung", text: "Muskeln anspannen und loslassen. Gut im Bett." },
      { art: "uebung", id: "koerperreise", text: "Langsam durch den Körper wandern." },
      { art: "wissen", id: "schlaf", text: "Was beim Einschlafen wirklich hilft." },
    ],
  },
  {
    id: "gereizt", titel: "Ich bin gereizt", symbol: "gefuehle",
    ziele: [
      { art: "uebung", id: "gefuehle", text: "Ein Wort für das finden, was da gerade ist." },
      { art: "uebung", id: "muskelentspannung", text: "Die Spannung über den Körper ablassen." },
      { art: "uebung", id: "schreiben", text: "Aufschreiben, was dich beschäftigt." },
    ],
  },
  {
    id: "verstehen", titel: "Ich will mich besser verstehen", symbol: "reflexion",
    ziele: [
      { art: "seite", id: "/reflexion", titel: "Selbstreflexion", text: "Kurze Fragen zu acht Lebensthemen. Jede lässt sich überspringen." },
      { art: "uebung", id: "gefuehle", text: "Gefühle benennen und in Mein Bereich festhalten." },
      { art: "seite", id: "/ich", titel: "Mein Bereich", text: "Deine Einträge über die Zeit, als Bild." },
    ],
  },
  {
    id: "reden", titel: "Ich brauche jemanden", symbol: "hilfe", hilfe: true,
    ziele: [
      { art: "seite", id: "/hilfe/krisenplan", titel: "Mein Krisenplan", text: "Was dir hilft und wen du anrufen kannst, an einem Ort." },
      { art: "seite", id: "/hilfe", titel: "Hilfe finden", text: "Beratung, Hausarzt, Psychotherapie und Anlaufstellen in deinem Bundesland." },
    ],
  },
];
