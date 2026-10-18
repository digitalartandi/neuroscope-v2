// Krisennummern und Hilfe-Wege. Vor jedem Release neu prüfen.
// Geprüft am: 18.10.2026 (offizielle Seiten der jeweiligen Anbieter).
export const GEPRUEFT_AM = "18.10.2026";

export interface Nummer {
  was: string;
  nummer: string;
  tel: string;
  wann: string;
  quelle: string;
}

export const KRISE: Record<"AT" | "DE", Nummer[]> = {
  AT: [
    { was: "Rettung", nummer: "144", tel: "144", wann: "Bei akuter Gefahr, rund um die Uhr", quelle: "https://www.gesundheit.gv.at/leben/suizidpraevention/anlaufstellen/notrufnummern.html" },
    { was: "Telefonseelsorge", nummer: "142", tel: "142", wann: "Rund um die Uhr, kostenlos und vertraulich", quelle: "https://www.telefonseelsorge.at/" },
    { was: "Rat auf Draht, für Kinder und Jugendliche", nummer: "147", tel: "147", wann: "Rund um die Uhr, anonym", quelle: "https://www.rataufdraht.at/" },
    { was: "Krisenhotline Pro Mente Salzburg", nummer: "0662 43 33 51", tel: "+43662433351", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.promentesalzburg.at/fileadmin/user_upload/2026_Ambulante_Krisenintervention.pdf" },
    { was: "Sozialpsychiatrischer Notdienst Wien", nummer: "01 31330", tel: "+43131330", wann: "Rund um die Uhr", quelle: "https://psd-wien.at/information/sozialpsychiatrischer-notdienst" },
    { was: "Männerberatung", nummer: "0800 400 777", tel: "+43800400777", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.gesundheit.gv.at/leben/suizidpraevention/betroffene/krisentelefonnummern.html" },
    { was: "Frauenhelpline gegen Gewalt", nummer: "0800 222 555", tel: "+43800222555", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.gesundheit.gv.at/leben/suizidpraevention/betroffene/krisentelefonnummern.html" },
    { was: "Gesundheitsnummer", nummer: "1450", tel: "1450", wann: "Rund um die Uhr, Beratung am Telefon", quelle: "https://www.1450.at/" },
  ],
  DE: [
    { was: "Notruf", nummer: "112", tel: "112", wann: "Bei akuter Gefahr, rund um die Uhr", quelle: "https://www.116117.de/" },
    { was: "TelefonSeelsorge", nummer: "0800 111 0 111", tel: "08001110111", wann: "Rund um die Uhr, kostenlos und anonym", quelle: "https://www.telefonseelsorge.de/" },
    { was: "TelefonSeelsorge, zweite Leitung", nummer: "0800 111 0 222", tel: "08001110222", wann: "Rund um die Uhr, kostenlos und anonym", quelle: "https://www.telefonseelsorge.de/" },
    { was: "Nummer gegen Kummer, für Kinder und Jugendliche", nummer: "116 111", tel: "116111", wann: "Montag bis Samstag, 14 bis 20 Uhr", quelle: "https://www.nummergegenkummer.de/" },
    { was: "Ärztlicher Bereitschaftsdienst", nummer: "116 117", tel: "116117", wann: "Rund um die Uhr, wenn die Praxis geschlossen ist", quelle: "https://www.116117.de/" },
  ],
};

export const KRISEN_UEBERSICHT_AT = "https://www.gesundheit.gv.at/leben/suizidpraevention/betroffene/krisentelefonnummern.html";

export interface Weg { titel: string; text: string; link?: { text: string; url: string } }

export const WEGE: Record<"AT" | "DE", Weg[]> = {
  AT: [
    { titel: "Hausärztin oder Hausarzt", text: "Die erste Anlaufstelle, auch bei seelischen Belastungen. Dort können auch körperliche Ursachen abgeklärt werden." },
    { titel: "Gesundheitsnummer 1450", text: "Rund um die Uhr telefonische Beratung, welche Hilfe gerade passt. Kostenlos, es fällt nur der normale Telefontarif an.", link: { text: "1450 – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/service/notruf/hotline.html" } },
    { titel: "Psychotherapie finden", text: "Die Liste des Gesundheitsministeriums enthält alle eingetragenen Psychotherapeutinnen und Psychotherapeuten, mit Suche nach Ort, Sprache und Methode.", link: { text: "Psychotherapeut:innen-Liste", url: "http://psychotherapie.ehealth.gv.at/" } },
    { titel: "Klinische Psychologie finden", text: "Klinische Psychologinnen und Psychologen bieten Beratung und Behandlung. Auch dafür gibt es eine offizielle Liste.", link: { text: "Liste Klinische Psycholog:innen", url: "http://klinischepsychologie.ehealth.gv.at" } },
    { titel: "Kosten und Krankenkasse", text: "Psychotherapie gibt es bei Vertragspartnern der ÖGK als Kassenleistung oder mit Kostenzuschuss. Klinisch-psychologische Behandlung ist seit 2026 ebenfalls Kassenleistung. Servicestelle dafür: 0800 10 02 03, Mo bis Fr 9 bis 17 Uhr.", link: { text: "Psychische Gesundheit – ÖGK", url: "https://oegk.at/psyche" } },
    { titel: "Helpline des Berufsverbands der Psycholog:innen", text: "Psychologische Beratung am Telefon unter 01 504 8000, Mo bis Fr 9 bis 20 Uhr." },
    { titel: "Psychosoziale Dienste", text: "In jedem Bundesland gibt es psychosoziale Dienste mit Beratung und Begleitung, meist kostenlos.", link: { text: "Übersicht nach Bundesland – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/service/beratungsstellen/krankheiten/psyche/psychosozialer-dienst.html" } },
    { titel: "Alle Anlaufstellen im Überblick", text: "Das Gesundheitsportal erklärt, welche Stelle wobei hilft.", link: { text: "Wenn die Psyche Hilfe braucht – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/psyche-seele/krisenintervention/psyche-anlaufstellen.html" } },
  ],
  DE: [
    { titel: "Hausärztin oder Hausarzt", text: "Die erste Anlaufstelle, auch bei seelischen Belastungen. Dort können auch körperliche Ursachen abgeklärt werden." },
    { titel: "Psychotherapeutische Sprechstunde", text: "Für ein erstes Gespräch brauchst du keine Überweisung. Termine vermittelt die 116117, telefonisch oder online.", link: { text: "Psychotherapie – 116117.de", url: "https://www.116117.de/de/psychotherapie.php" } },
    { titel: "Psychotherapie in deiner Nähe", text: "Die Arztsuche der Kassenärztlichen Vereinigungen findet Praxen mit Kassenzulassung.", link: { text: "Arztsuche 116117", url: "https://arztsuche.116117.de/" } },
    { titel: "So läuft eine Psychotherapie ab", text: "Von der Sprechstunde über Probesitzungen bis zum Antrag bei der Krankenkasse, verständlich erklärt.", link: { text: "Psychotherapeutische Versorgung – gesund.bund.de", url: "https://gesund.bund.de/wege-im-gesundheitswesen/erwachsenenleben/alter/psychische-gesundheit/psychotherapeutische-versorgung" } },
    { titel: "Ratgeber der Bundespsychotherapeutenkammer", text: "Antworten auf häufige Fragen rund um den Weg in die Psychotherapie.", link: { text: "Wege zur Psychotherapie", url: "https://www.wege-zur-psychotherapie.org/" } },
    { titel: "Sozialpsychiatrischer Dienst", text: "Kostenlose Beratung, meist beim Gesundheitsamt, auch mit Hausbesuchen.", link: { text: "Sozialpsychiatrischer Dienst – gesund.bund.de", url: "https://gesund.bund.de/sozialpsychiatrischer-dienst" } },
    { titel: "TelefonSeelsorge auch per Chat und Mail", text: "Wenn Telefonieren schwerfällt, geht es auch schriftlich. Anonym und kostenlos.", link: { text: "telefonseelsorge.de", url: "https://www.telefonseelsorge.de/" } },
    { titel: "Anlaufstellen bei Krisen", text: "Überblick über Krisendienste und Kliniken.", link: { text: "Anlaufstellen bei psychischen Krisen – gesund.bund.de", url: "https://gesund.bund.de/wege-im-gesundheitswesen/erwachsenenleben/psychische-gesundheit/anlaufstellen-bei-psychischen-krisen" } },
  ],
};

// Regionale Krisendienste. Wird nach der Recherche je Bundesland befüllt.
export interface Region { name: string; eintraege: Nummer[]; hinweis?: string }
export const REGIONEN: Record<"AT" | "DE", Region[]> = { AT: [], DE: [] };
