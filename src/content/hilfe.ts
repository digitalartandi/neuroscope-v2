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
    { was: "Männerinfo, Krisenhelpline für Männer", nummer: "0800 400 777", tel: "+43800400777", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.maennerinfo.at" },
    { was: "Männernotruf", nummer: "05 76 77", tel: "+43057677", wann: "Rund um die Uhr", quelle: "https://www.maennernotruf.at" },
    { was: "Frauenhelpline gegen Gewalt", nummer: "0800 222 555", tel: "+43800222555", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.frauenhelpline.at" },
    { was: "Gesundheitsnummer", nummer: "1450", tel: "1450", wann: "Rund um die Uhr, Beratung am Telefon", quelle: "https://www.1450.at/" },
  ],
  DE: [
    { was: "Notruf", nummer: "112", tel: "112", wann: "Bei akuter Gefahr, rund um die Uhr", quelle: "https://www.116117.de/" },
    { was: "TelefonSeelsorge", nummer: "0800 111 0 111", tel: "08001110111", wann: "Rund um die Uhr, kostenlos und anonym", quelle: "https://www.telefonseelsorge.de/" },
    { was: "TelefonSeelsorge, zweite Leitung", nummer: "0800 111 0 222", tel: "08001110222", wann: "Rund um die Uhr, kostenlos und anonym", quelle: "https://www.telefonseelsorge.de/" },
    { was: "Nummer gegen Kummer, für Kinder und Jugendliche", nummer: "116 111", tel: "116111", wann: "Montag bis Samstag, 14 bis 20 Uhr", quelle: "https://www.nummergegenkummer.de/" },
    { was: "Hilfetelefon Gewalt gegen Frauen", nummer: "116 016", tel: "116016", wann: "Rund um die Uhr, in 18 Sprachen", quelle: "https://www.hilfetelefon.de" },
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
const RUFNOT_AT = "Außerhalb dieser Zeiten: Telefonseelsorge 142, bei akuter Gefahr 144.";
const SPDI = "Keine landesweite Krisennummer. Hilfe gibt es beim Sozialpsychiatrischen Dienst deines Gesundheitsamts, über 116 117 und rund um die Uhr bei der TelefonSeelsorge. Bei akuter Gefahr 112.";

export const REGIONEN: Record<"AT" | "DE", Region[]> = {
  AT: [
    { name: "Burgenland", eintraege: [
      { was: "Krisentelefon Psychosozialer Dienst Burgenland", nummer: "05 09 44 4444", tel: "+43509444444", wann: "Zu Bürozeiten", quelle: "https://www.soziale-dienste-burgenland.at/krisenintervention/" },
    ], hinweis: "Im Burgenland gibt es keinen Krisendienst rund um die Uhr. " + RUFNOT_AT },
    { name: "Kärnten", eintraege: [
      { was: "Psychiatrischer Not- und Krisendienst Ost (Klagenfurt)", nummer: "0664 300 70 07", tel: "+436643007007", wann: "Rund um die Uhr", quelle: "https://www.lkh-vil.or.at/fileadmin/user_upload/lkhvillach/Klinische_Psychologie/Beratungs-HOTLINES.pdf" },
      { was: "Psychiatrischer Not- und Krisendienst West (Villach)", nummer: "0664 300 90 03", tel: "+436643009003", wann: "Rund um die Uhr", quelle: "https://www.lkh-vil.or.at/fileadmin/user_upload/lkhvillach/Klinische_Psychologie/Beratungs-HOTLINES.pdf" },
    ] },
    { name: "Niederösterreich", eintraege: [], hinweis: "In Niederösterreich gibt es keine eigene psychiatrische Krisenhotline. In akuten Krisen hilft das AKUTteam NÖ über den Notruf 144, rund um die Uhr. Sonst: Telefonseelsorge 142 oder Gesundheitsnummer 1450." },
    { name: "Oberösterreich", eintraege: [
      { was: "Krisenhilfe OÖ", nummer: "0732 2177", tel: "+437322177", wann: "Rund um die Uhr", quelle: "https://www.krisenhilfeooe.at" },
    ] },
    { name: "Salzburg", eintraege: [
      { was: "Krisenhotline Pro Mente Salzburg", nummer: "0662 43 33 51", tel: "+43662433351", wann: "Rund um die Uhr, kostenlos und anonym", quelle: "https://www.promentesalzburg.at/fileadmin/user_upload/2026_Ambulante_Krisenintervention.pdf" },
      { was: "Krisenintervention Pongau (St. Johann)", nummer: "06412 200 33", tel: "+43641220033", wann: "Regionale Beratungsstelle", quelle: "https://www.promentesalzburg.at/fileadmin/user_upload/2026_Ambulante_Krisenintervention.pdf" },
      { was: "Krisenintervention Pinzgau (Zell am See)", nummer: "06542 72 600", tel: "+43654272600", wann: "Regionale Beratungsstelle", quelle: "https://www.promentesalzburg.at/fileadmin/user_upload/2026_Ambulante_Krisenintervention.pdf" },
    ] },
    { name: "Steiermark", eintraege: [
      { was: "PsyNot, Psychosozialer Notdienst Steiermark", nummer: "0800 44 99 33", tel: "+43800449933", wann: "Rund um die Uhr, kostenlos", quelle: "https://psynot-stmk.at" },
    ] },
    { name: "Tirol", eintraege: [
      { was: "Psychosozialer Krisendienst Tirol", nummer: "0800 400 120", tel: "+43800400120", wann: "Täglich 9 bis 19 Uhr, kostenlos", quelle: "https://www.krisendienst.tirol" },
    ], hinweis: RUFNOT_AT },
    { name: "Vorarlberg", eintraege: [
      { was: "Telefonseelsorge Vorarlberg", nummer: "142", tel: "142", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.telefonseelsorge.at/vorarlberg" },
    ], hinweis: "In Vorarlberg gibt es keinen eigenen Krisendienst rund um die Uhr. Bei akuter Gefahr 144, für Beratung 1450." },
    { name: "Wien", eintraege: [
      { was: "Sozialpsychiatrischer Notdienst (PSD Wien)", nummer: "01 31330", tel: "+43131330", wann: "Rund um die Uhr", quelle: "https://psd-wien.at/information/sozialpsychiatrischer-notdienst" },
      { was: "Kriseninterventionszentrum Wien", nummer: "01 406 95 95", tel: "+4314069595", wann: "Montag bis Freitag, 8 bis 17 Uhr", quelle: "https://www.kriseninterventionszentrum.at" },
    ] },
  ],
  DE: [
    { name: "Baden-Württemberg", eintraege: [], hinweis: SPDI },
    { name: "Bayern", eintraege: [
      { was: "Krisendienste Bayern", nummer: "0800 655 3000", tel: "08006553000", wann: "Rund um die Uhr, kostenlos, bei Anruf aus Bayern", quelle: "https://www.krisendienste.bayern" },
    ] },
    { name: "Berlin", eintraege: [
      { was: "Berliner Krisendienst, Mitte und Friedrichshain-Kreuzberg", nummer: "030 390 63 10", tel: "+49303906310", wann: "Rund um die Uhr, kostenlos", quelle: "https://www.berliner-krisendienst.de/ich-brauche-hilfe/" },
    ], hinweis: "Der Berliner Krisendienst hat neun regionale Standorte mit eigenen Nummern (030 390 63 10 bis 90). Die Nummer für deinen Bezirk steht auf berliner-krisendienst.de." },
    { name: "Brandenburg", eintraege: [], hinweis: SPDI },
    { name: "Bremen", eintraege: [], hinweis: SPDI },
    { name: "Hamburg", eintraege: [
      { was: "Hamburgisches Krisentelefon", nummer: "040 428 11 3000", tel: "+4940428113000", wann: "Abends, nachts und am Wochenende (Zeiten auf der Website)", quelle: "https://www.hamburg.de/politik-und-verwaltung/bezirke/altona/themen/gesundheit/krisentelefon-61202" },
    ], hinweis: "Tagsüber helfen die Sozialpsychiatrischen Dienste der Bezirke. Rund um die Uhr: TelefonSeelsorge 0800 111 0 111, bei akuter Gefahr 112." },
    { name: "Hessen", eintraege: [], hinweis: "Keine landesweite Krisennummer, aber regionale Krisendienste, etwa in Frankfurt. " + SPDI },
    { name: "Mecklenburg-Vorpommern", eintraege: [], hinweis: SPDI },
    { name: "Niedersachsen", eintraege: [], hinweis: SPDI },
    { name: "Nordrhein-Westfalen", eintraege: [], hinweis: SPDI },
    { name: "Rheinland-Pfalz", eintraege: [], hinweis: SPDI },
    { name: "Saarland", eintraege: [], hinweis: SPDI },
    { name: "Sachsen", eintraege: [], hinweis: SPDI },
    { name: "Sachsen-Anhalt", eintraege: [], hinweis: SPDI },
    { name: "Schleswig-Holstein", eintraege: [], hinweis: SPDI },
    { name: "Thüringen", eintraege: [], hinweis: SPDI },
  ],
};
