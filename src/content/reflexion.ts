// Fragen der Selbstreflexion.
// Eigene Formulierungen zu Alltagserleben. Bewusst KEINE Items aus klinischen
// Fragebögen, KEINE Fragen zu Suizid, Psychose, Trauma oder Medikation.
// Antworten werden nie verrechnet, summiert oder mit Schwellen verglichen.

export const ZEITRAUM = "in letzter Zeit";

export const HAEUFIGKEIT = ["nie", "selten", "manchmal", "oft", "fast immer"] as const;
export type Haeufigkeit = (typeof HAEUFIGKEIT)[number];

export interface Frage {
  id: string;
  frage: string;
  /** Satz für den Spiegel. {h} wird durch die gewählte Häufigkeit ersetzt. */
  spiegel: string;
}

export interface Thema {
  id: string;
  titel: string;
  einleitung: string;
  fragen: Frage[];
  wissen: string; // id der Wissensseite
  uebung?: string; // id einer passenden Übung
}

export const THEMEN: Thema[] = [
  {
    id: "schlaf",
    titel: "Schlaf und Erholung",
    einleitung: "Wie du schläfst und ob du tagsüber zur Ruhe kommst.",
    wissen: "schlaf",
    uebung: "abendroutine",
    fragen: [
      { id: "stunden", frage: "Wie oft hast du so viele Stunden geschlafen, wie du dir vorgenommen hattest?", spiegel: "Du hast {h} so viele Stunden geschlafen, wie du dir vorgenommen hattest." },
      { id: "einschlafen", frage: "Wie oft bist du gut eingeschlafen?", spiegel: "Du bist {h} gut eingeschlafen." },
      { id: "gedanken", frage: "Wie oft sind dir abends im Bett noch viele Gedanken durch den Kopf gegangen?", spiegel: "Abends im Bett sind dir {h} noch viele Gedanken durch den Kopf gegangen." },
      { id: "rhythmus", frage: "Wie oft bist du ungefähr zur gleichen Zeit schlafen gegangen?", spiegel: "Du bist {h} ungefähr zur gleichen Zeit schlafen gegangen." },
      { id: "durchatmen", frage: "Wie oft hattest du tagsüber Zeit zum Durchatmen?", spiegel: "Du hattest {h} tagsüber Zeit zum Durchatmen." },
      { id: "bildschirm-abend", frage: "Wie oft hast du in der letzten Stunde vor dem Schlafen noch auf einen Bildschirm geschaut?", spiegel: "In der letzten Stunde vor dem Schlafen hast du {h} noch auf einen Bildschirm geschaut." },
    ],
  },
  {
    id: "energie",
    titel: "Energie und Körper",
    einleitung: "Bewegung, Tageslicht und wie du dich in deinem Körper fühlst.",
    wissen: "energie",
    uebung: "atmung",
    fragen: [
      { id: "trinken", frage: "Wie oft hast du über den Tag genug Wasser getrunken?", spiegel: "Du hast {h} über den Tag genug Wasser getrunken." },
      { id: "bewegung", frage: "Wie oft hast du dich mindestens eine halbe Stunde bewegt?", spiegel: "Du hast dich {h} mindestens eine halbe Stunde bewegt." },
      { id: "tageslicht", frage: "Wie oft warst du bei Tageslicht draußen?", spiegel: "Du warst {h} bei Tageslicht draußen." },
      { id: "essen", frage: "Wie oft hast du in Ruhe gegessen?", spiegel: "Du hast {h} in Ruhe gegessen." },
      { id: "anspannung", frage: "Wie oft hast du Anspannung im Körper gespürt, etwa im Nacken oder im Kiefer?", spiegel: "Du hast {h} Anspannung im Körper gespürt." },
      { id: "wohlfuehlen", frage: "Wie oft hast du dich in deinem Körper wohlgefühlt?", spiegel: "Du hast dich {h} in deinem Körper wohlgefühlt." },
    ],
  },
  {
    id: "stress",
    titel: "Stress und Belastung",
    einleitung: "Was dich fordert und wie viel Spielraum du dabei hast.",
    wissen: "stress",
    uebung: "atmung",
    fragen: [
      { id: "zu-viel", frage: "Wie oft hattest du das Gefühl, dass dir alles zu viel wird?", spiegel: "Du hattest {h} das Gefühl, dass dir alles zu viel wird." },
      { id: "abschalten", frage: "Wie oft konntest du nach deinen Verpflichtungen abschalten?", spiegel: "Du konntest {h} nach deinen Verpflichtungen abschalten." },
      { id: "zeitdruck", frage: "Wie oft standest du unter Zeitdruck?", spiegel: "Du standest {h} unter Zeitdruck." },
      { id: "einfluss", frage: "Wie oft hattest du das Gefühl, Dinge beeinflussen zu können, die dir wichtig sind?", spiegel: "Du hattest {h} das Gefühl, Dinge beeinflussen zu können, die dir wichtig sind." },
      { id: "sorgen", frage: "Wie oft haben dich Sorgen beschäftigt?", spiegel: "Sorgen haben dich {h} beschäftigt." },
      { id: "nein-sagen", frage: "Wie oft konntest du Nein sagen, wenn dir etwas zu viel war?", spiegel: "Du konntest {h} Nein sagen, wenn dir etwas zu viel war." },
    ],
  },
  {
    id: "stimmung",
    titel: "Stimmung und Gefühle",
    einleitung: "Wie du dich in letzter Zeit gefühlt hast, mit allem, was dazugehört.",
    wissen: "stimmung",
    uebung: "wochenrueckblick",
    fragen: [
      { id: "freude", frage: "Wie oft konntest du dich über Kleinigkeiten freuen?", spiegel: "Du konntest dich {h} über Kleinigkeiten freuen." },
      { id: "gefuehle-reden", frage: "Wie oft hast du mit jemandem darüber gesprochen, wie es dir geht?", spiegel: "Du hast {h} mit jemandem darüber gesprochen, wie es dir geht." },
      { id: "vergnuegen", frage: "Wie oft hast du etwas nur zum Vergnügen gemacht?", spiegel: "Du hast {h} etwas nur zum Vergnügen gemacht." },
      { id: "gereizt", frage: "Wie oft warst du schnell gereizt?", spiegel: "Du warst {h} schnell gereizt." },
      { id: "hobby", frage: "Wie oft hast du dir Zeit für ein Hobby genommen?", spiegel: "Du hast dir {h} Zeit für ein Hobby genommen." },
      { id: "zuversicht", frage: "Wie oft hast du zuversichtlich nach vorne geschaut?", spiegel: "Du hast {h} zuversichtlich nach vorne geschaut." },
    ],
  },
  {
    id: "beziehungen",
    titel: "Beziehungen und Zugehörigkeit",
    einleitung: "Die Menschen um dich herum und wie verbunden du dich fühlst.",
    wissen: "beziehungen",
    uebung: "staerken",
    fragen: [
      { id: "gespraech", frage: "Wie oft hattest du ein Gespräch, das dir gutgetan hat?", spiegel: "Du hattest {h} ein Gespräch, das dir gutgetan hat." },
      { id: "einsam", frage: "Wie oft hast du dich einsam gefühlt?", spiegel: "Du hast dich {h} einsam gefühlt." },
      { id: "verstanden", frage: "Wie oft hast du dich verstanden gefühlt?", spiegel: "Du hast dich {h} verstanden gefühlt." },
      { id: "fragen-koennen", frage: "Wie oft hattest du das Gefühl, jemanden um Hilfe bitten zu können?", spiegel: "Du hattest {h} das Gefühl, jemanden um Hilfe bitten zu können." },
      { id: "spannungen", frage: "Wie oft haben dich Spannungen mit anderen Menschen belastet?", spiegel: "Spannungen mit anderen Menschen haben dich {h} belastet." },
      { id: "zeit-fuer", frage: "Wie oft hattest du Zeit für Menschen, die dir wichtig sind?", spiegel: "Du hattest {h} Zeit für Menschen, die dir wichtig sind." },
    ],
  },
  {
    id: "alltag",
    titel: "Arbeit und Alltag",
    einleitung: "Deine Aufgaben, ob in Beruf, Ausbildung, Familie oder Haushalt.",
    wissen: "alltag",
    uebung: "wochenrueckblick",
    fragen: [
      { id: "sinnvoll", frage: "Wie oft hat sich das, was du tust, sinnvoll angefühlt?", spiegel: "Das, was du tust, hat sich {h} sinnvoll angefühlt." },
      { id: "konzentration", frage: "Wie oft konntest du dich gut auf eine Sache konzentrieren?", spiegel: "Du konntest dich {h} gut auf eine Sache konzentrieren." },
      { id: "geschafft", frage: "Wie oft hast du geschafft, was du dir vorgenommen hast?", spiegel: "Du hast {h} geschafft, was du dir vorgenommen hast." },
      { id: "erreichbar", frage: "Wie oft warst du auch in deiner freien Zeit für Verpflichtungen erreichbar?", spiegel: "Du warst {h} auch in deiner freien Zeit für Verpflichtungen erreichbar." },
      { id: "aufschieben", frage: "Wie oft hast du Dinge aufgeschoben, die dir wichtig waren?", spiegel: "Du hast {h} Dinge aufgeschoben, die dir wichtig waren." },
      { id: "anerkennung", frage: "Wie oft hast du Anerkennung für deinen Einsatz erlebt?", spiegel: "Du hast {h} Anerkennung für deinen Einsatz erlebt." },
    ],
  },
  {
    id: "gewohnheiten",
    titel: "Gewohnheiten",
    einleitung: "Kleine Gewohnheiten, die sich auf dein Wohlbefinden auswirken können.",
    wissen: "gewohnheiten",
    uebung: "abendroutine",
    fragen: [
      { id: "handy", frage: "Wie oft hast du mehr Zeit am Handy verbracht, als du wolltest?", spiegel: "Du hast {h} mehr Zeit am Handy verbracht, als du wolltest." },
      { id: "auszeit", frage: "Wie oft hast du dir bewusst eine Auszeit ohne Bildschirm genommen?", spiegel: "Du hast dir {h} bewusst eine Auszeit ohne Bildschirm genommen." },
      { id: "alkohol", frage: "Wie oft hast du am Abend Alkohol getrunken?", spiegel: "Du hast {h} am Abend Alkohol getrunken." },
      { id: "rauchen", frage: "Wie oft hast du geraucht oder gedampft?", spiegel: "Du hast {h} geraucht oder gedampft." },
      { id: "koffein", frage: "Wie oft hast du am Nachmittag oder Abend noch Kaffee oder Energydrinks getrunken?", spiegel: "Du hast {h} am Nachmittag oder Abend noch Kaffee oder Energydrinks getrunken." },
      { id: "guttun", frage: "Wie oft hast du etwas getan, das dir auf Dauer guttut?", spiegel: "Du hast {h} etwas getan, das dir auf Dauer guttut." },
    ],
  },
  {
    id: "staerken",
    titel: "Stärken und Kraftquellen",
    einleitung: "Was dir gelingt und was dir Kraft gibt.",
    wissen: "staerken",
    uebung: "staerken",
    fragen: [
      { id: "gelungen", frage: "Wie oft hast du bemerkt, dass dir etwas gut gelungen ist?", spiegel: "Du hast {h} bemerkt, dass dir etwas gut gelungen ist." },
      { id: "kraft", frage: "Wie oft hast du dir Zeit für etwas genommen, das dir Kraft gibt?", spiegel: "Du hast dir {h} Zeit für etwas genommen, das dir Kraft gibt." },
      { id: "dankbar", frage: "Wie oft hast du an etwas gedacht, wofür du dankbar bist?", spiegel: "Du hast {h} an etwas gedacht, wofür du dankbar bist." },
      { id: "lachen", frage: "Wie oft konntest du über etwas lachen?", spiegel: "Du konntest {h} über etwas lachen." },
      { id: "umgehen", frage: "Wie oft hattest du das Gefühl, mit Schwierigem umgehen zu können?", spiegel: "Du hattest {h} das Gefühl, mit Schwierigem umgehen zu können." },
      { id: "freundlich", frage: "Wie oft warst du freundlich zu dir selbst?", spiegel: "Du warst {h} freundlich zu dir selbst." },
    ],
  },
];
