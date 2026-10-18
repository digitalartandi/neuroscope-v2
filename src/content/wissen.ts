// Wissensseiten. Eigene Zusammenfassungen öffentlicher Gesundheitsportale
// (gesundheit.gv.at, gesund.bund.de u. a.), abgerufen am 18.10.2026.
// Allgemeine Information, nie auf die Antworten der Person bezogen.
export interface Quelle { text: string; url: string }
export interface WissenSeite {
  id: string;
  titel: string;
  kurz: string; // für „Mehr über …“
  einleitung: string;
  hilft: string[];
  wannHilfe: string[];
  quellen: Quelle[];
}

export const WISSEN: WissenSeite[] = [
  {
    id: "schlaf",
    titel: "Schlaf und Erholung",
    kurz: "Schlaf und Erholung",
    einleitung:
      "Guter Schlaf hängt oft an kleinen Gewohnheiten. Ein gleichmäßiger Rhythmus und ein ruhiger Abend helfen dem Körper, zur Ruhe zu kommen. Wie viel Schlaf jemand braucht, ist von Mensch zu Mensch verschieden.",
    hilft: [
      "Ungefähr zur gleichen Zeit schlafen gehen und aufstehen, auch am Wochenende. Ein kleines Abendritual hilft beim Umschalten.",
      "Das Schlafzimmer eher kühl, dunkel und ruhig halten. Bildschirme vor dem Schlafen ausschalten und möglichst aus dem Schlafzimmer verbannen.",
      "Ab dem frühen Nachmittag keinen Kaffee, Cola oder Energydrinks mehr. Abends leicht essen und wenig Alkohol trinken.",
      "Gedanken und Erledigungen für morgen vorher aufschreiben. Wer lange wach liegt, steht auf und macht etwas Ruhiges, bis die Müdigkeit kommt.",
      "Morgens ans Tageslicht, tagsüber bewegen. Ein Nickerchen höchstens etwa 20 Minuten.",
    ],
    wannHilfe: [
      "wenn du über mehrere Wochen schlecht schläfst oder tagsüber oft müde bist",
      "wenn jemand bei dir Atemaussetzer im Schlaf bemerkt",
      "Ein paar Wochen Notizen zu deinem Schlaf sind für den Termin hilfreich.",
    ],
    quellen: [
      { text: "Gut schlafen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/gehirn-nerven/schlafstoerungen/gut-schlafen.html" },
      { text: "Schlafstörungen – gesund.bund.de", url: "https://gesund.bund.de/schlafstoerungen" },
    ],
  },
  {
    id: "energie",
    titel: "Energie und Körper",
    kurz: "Bewegung und Wohlbefinden",
    einleitung:
      "Körper und Wohlbefinden hängen eng zusammen. Regelmäßige Bewegung kann die Stimmung heben, Anspannung abbauen und beim Schlafen helfen. Dafür braucht es keinen Sport im Verein, auch Alltagsbewegung zählt.",
    hilft: [
      "Als Richtwert für Erwachsene gelten 150 bis 300 Minuten Bewegung pro Woche, bei der man etwas schneller atmet, dazu zweimal pro Woche Übungen für die Muskeln.",
      "Bewegung in den Alltag einbauen: Treppe statt Lift, eine Station früher aussteigen, beim Telefonieren gehen, Spaziergang in der Mittagspause.",
      "Tageslicht nutzen: Ein Teil der Bewegung im Freien tut doppelt gut.",
      "In Ruhe essen und genug trinken. Beides gibt dem Tag Struktur.",
    ],
    wannHilfe: [
      "wenn du dich über längere Zeit ohne erkennbaren Grund erschöpft fühlst",
      "wenn du eine chronische Erkrankung hast und mehr Bewegung planst, sprich vorher mit deiner Ärztin oder deinem Arzt",
    ],
    quellen: [
      { text: "Gesunde Bewegung im Alltag – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/bewegung/gesunde-bewegung/alltag.html" },
      { text: "Nutzen von Bewegung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/bewegung/koerper/nutzen-vorteile.html" },
      { text: "Gesund durch Bewegung – gesund.bund.de", url: "https://gesund.bund.de/gesund-durch-bewegung" },
    ],
  },
  {
    id: "stress",
    titel: "Stress und Belastung",
    kurz: "Stress und Belastung",
    einleitung:
      "Stress gehört zum Leben und ist kurzfristig oft sogar nützlich. Belastend wird er, wenn er lange anhält und kaum Erholung dazwischen bleibt. Dann lohnt es sich, genauer hinzuschauen, was ihn auslöst.",
    hilft: [
      "Auslöser erkennen und, wo es geht, verringern. Zum Beispiel das Handy in der Freizeit stumm schalten.",
      "Kurze Pausen einbauen: tief durchatmen, ein paar Schritte gehen. Pausen und Freizeit wie Termine in den Kalender eintragen.",
      "Ändern, was sich ändern lässt, und annehmen, was sich nicht ändern lässt. Prioritäten setzen hilft beim Unterscheiden.",
      "Mit vertrauten Menschen über das reden, was dich beschäftigt.",
      "Ein Entspannungsverfahren lernen, etwa Atemübungen oder Muskelentspannung. Alkohol oder Rauchen als Ausgleich helfen auf Dauer nicht.",
    ],
    wannHilfe: [
      "wenn Stress über lange Zeit anhält und du dich kaum mehr erholst",
      "wenn du nicht mehr weiterweißt. Mögliche Wege: Hausarztpraxis, Gesundheitspsychologie, Psychotherapie oder eine Selbsthilfegruppe",
    ],
    quellen: [
      { text: "Stress bewältigen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/stress/entspannt-bleiben.html" },
      { text: "Stress: Auswirkungen auf Körper und Psyche – gesund.bund.de", url: "https://gesund.bund.de/stress" },
    ],
  },
  {
    id: "stimmung",
    titel: "Stimmung und Gefühle",
    kurz: "Stimmung und Gefühle",
    einleitung:
      "Traurige, gereizte oder antriebslose Phasen kennt jeder Mensch. Sie gehören zum Leben und gehen meist wieder vorüber. Gefühle sind Signale: Sie zeigen, was uns wichtig ist und was gerade fehlt.",
    hilft: [
      "Gefühle benennen, zum Beispiel in ein paar Sätzen am Abend. Das schafft Abstand.",
      "Mit jemandem reden, dem du vertraust. Du musst nicht alles allein tragen.",
      "Kleine angenehme Dinge bewusst einplanen, auch wenn die Lust gerade fehlt.",
      "Auf die Grundlagen achten: Schlaf, Bewegung, Tageslicht, regelmäßiges Essen.",
    ],
    wannHilfe: [
      "wenn Niedergeschlagenheit, Freudlosigkeit oder Antriebslosigkeit über mehr als zwei Wochen anhalten und deinen Alltag bestimmen",
      "Früh Hilfe zu holen ist kein Zeichen von Schwäche. Für ein erstes Gespräch in der Psychotherapie brauchst du in Deutschland keine Überweisung.",
      "Wenn du daran denkst, dir etwas anzutun: sofort Hilfe holen, Notruf 144 bzw. 112 oder Telefonseelsorge.",
    ],
    quellen: [
      { text: "Ich fühle mich psychisch nicht wohl – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/lebenslagen/ich-fuehle-mich-psychisch-nicht-wohl-n.html" },
      { text: "Niedergeschlagenheit und Depression – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/depression/depression-was-ist-das.html" },
      { text: "Depression – gesund.bund.de", url: "https://gesund.bund.de/depression" },
    ],
  },
  {
    id: "beziehungen",
    titel: "Beziehungen und Zugehörigkeit",
    kurz: "Beziehungen und Einsamkeit",
    einleitung:
      "Menschen brauchen Verbindung. Einsamkeit ist ein Gefühl, das auch unter vielen Menschen auftreten kann, und gelegentlich einsam zu sein ist normal. In Österreich fühlt sich rund jede vierte Person zumindest manchmal einsam.",
    hilft: [
      "Ein Gespräch suchen, auch ein kurzes. Eine Nachricht an jemanden, an den du gerade denkst, ist ein Anfang.",
      "Kleine, machbare Schritte wählen: ein Kurs, ein Verein, ein Ehrenamt, ein regelmäßiger Spaziergang mit jemandem.",
      "Freundlich mit dir selbst sein. Ständiges Vergleichen, etwa in sozialen Medien, macht es eher schwerer.",
      "Gesprächsangebote nutzen: in Österreich zum Beispiel das Plaudernetz der Caritas, in Deutschland das Silbertelefon für Menschen ab 60 (0800 4 70 80 90, täglich 8 bis 22 Uhr).",
    ],
    wannHilfe: [
      "wenn du dich über lange Zeit einsam fühlst und es dich stark belastet",
      "wenn Spannungen in Beziehungen dich nicht mehr loslassen. Auch Familien- und Paarberatungsstellen helfen weiter.",
    ],
    quellen: [
      { text: "Einsamkeit bewältigen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/lebenswelt/soziale-netzwerke/soziale-beziehungen/einsamkeit-ursachen-bewaeltigung.html" },
      { text: "Gegen Einsamkeit vorgehen – Bundesregierung Deutschland", url: "https://www.bundesregierung.de/breg-de/aktuelles/strategie-gegen-einsamkeit-2248862" },
    ],
  },
  {
    id: "alltag",
    titel: "Arbeit und Alltag",
    kurz: "Arbeit, Alltag und Erholung",
    einleitung:
      "Ob Beruf, Ausbildung, Familie oder Haushalt: Aufgaben geben Struktur und Sinn, können aber auch erschöpfen. Wichtig ist das Gleichgewicht zwischen Einsatz und Erholung.",
    hilft: [
      "Arbeit und Freizeit trennen. Die eigene Erreichbarkeit bewusst einschränken, auch bei E-Mails.",
      "Realistisch planen, Prioritäten setzen und Nein sagen, wenn es zu viel wird. Perfektionismus hinterfragen.",
      "Nach jeder größeren Tätigkeit eine kurze Pause machen, gern mit Bewegung.",
      "Erholung bewusst einplanen und Beziehungen pflegen, die dir guttun.",
      "Wenn dir das Abschalten in der Freizeit schwerfällt, ist das ein Hinweis, genauer hinzuschauen.",
    ],
    wannHilfe: [
      "wenn du dich über längere Zeit erschöpft fühlst, dich zurückziehst oder schlecht schläfst",
      "wenn Menschen in deinem Umfeld dich darauf ansprechen",
      "Erste Anlaufstelle ist die Hausarztpraxis. Im Betrieb können auch Betriebsrat oder betriebliche Gesundheitsangebote helfen.",
    ],
    quellen: [
      { text: "Burnout vorbeugen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/burnout.html" },
      { text: "Erholung im Alltag und Urlaub – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/stress/urlaub.html" },
      { text: "Psychische Gesundheit am Arbeitsplatz – gesund.bund.de", url: "https://gesund.bund.de/psychische-gesundheit-am-arbeitsplatz" },
    ],
  },
  {
    id: "gewohnheiten",
    titel: "Gewohnheiten",
    kurz: "Gewohnheiten im Alltag",
    einleitung:
      "Kleine Gewohnheiten prägen, wie es uns geht. Bildschirmzeit, Alkohol, Nikotin und Koffein sind oft gerade dann Begleiter, wenn der Alltag anstrengend ist. Es lohnt sich, ab und zu hinzuschauen, ohne sich selbst zu verurteilen.",
    hilft: [
      "Bildschirmfreie Zeiten festlegen, etwa beim Essen und vor dem Schlafen. App-Limits nutzen, Autoplay und unnötige Benachrichtigungen ausschalten.",
      "Alkohol: In Österreich gelten als Grenzmenge pro Tag 16 Gramm reiner Alkohol für Frauen und 24 Gramm für Männer, dazu mindestens zwei alkoholfreie Tage pro Woche. Ein halber Liter Bier enthält etwa 20 Gramm. In Deutschland lautet die Empfehlung: Weniger ist besser.",
      "Rauchen aufhören: Ein festes Datum und Unterstützung helfen. Kostenlose Beratung gibt es beim Rauchfrei Telefon in Österreich (0800 810 013, Mo bis Fr 10 bis 18 Uhr) und beim Rauchfrei-Telefon des BIÖG in Deutschland (0800 8 31 31 31).",
      "Koffein ab dem frühen Nachmittag weglassen, wenn der Schlaf leidet.",
    ],
    wannHilfe: [
      "wenn dir Pausen von Bildschirm, Alkohol oder Nikotin schwerfallen oder sie zur Flucht vor Stress werden",
      "Erste Anlaufstellen: Hausarztpraxis, 1450 in Österreich, Beratungsstellen für Alkohol- und Medienfragen in deiner Region",
    ],
    quellen: [
      { text: "Was risikoarmer Alkoholkonsum bedeutet – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/news/aktuelles/aktuell-2026/was-risikoarmer-alkoholkonsum-bedeutet.html" },
      { text: "Mythos risikoarmer Alkoholkonsum – kenn-dein-limit.de (BIÖG)", url: "https://www.kenn-dein-limit.de/fakten-ueber-alkohol/mythos-risikoarmer-alkoholkonsum/" },
      { text: "Gesunder Umgang mit digitalen Medien – gesund.bund.de", url: "https://gesund.bund.de/umgang-digitale-medien" },
      { text: "Rauchfrei Telefon – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/news/aktuelles/aktuell-2026/rauchfrei-telefon-20.html" },
      { text: "Themendossier Rauchstopp 2025 – BIÖG", url: "https://www.bioeg.de/fileadmin/user_upload/PDF/medienservice/Themendossier_Rauchstopp_2025_BIOEG.pdf" },
    ],
  },
  {
    id: "staerken",
    titel: "Stärken und Kraftquellen",
    kurz: "Stärken und Kraftquellen",
    einleitung:
      "Psychische Widerstandskraft, oft Resilienz genannt, ist keine feste Eigenschaft. Sie lässt sich stärken, vor allem durch gute Beziehungen, realistische Ziele und den Blick auf das, was schon gelungen ist.",
    hilft: [
      "Dich an eigene Stärken und frühere Erfolge erinnern und mit anderen darüber sprechen. Was hat dir in schwierigen Zeiten schon einmal geholfen?",
      "Auf das konzentrieren, was du beeinflussen kannst. Viele kleine, erreichbare Ziele statt eines großen.",
      "Beziehungen pflegen. Anderen zu helfen, etwa im Ehrenamt, stärkt auch dich selbst.",
      "Erholung, Schlaf, Bewegung und Essen ernst nehmen. Sie sind die Grundlage.",
      "Gedanken, die alles schwarz malen, hinterfragen: Stimmt das wirklich immer?",
    ],
    wannHilfe: [
      "wenn du eine Krise nicht mehr allein bewältigen kannst oder der Alltag nicht mehr gelingt",
      "In akuten Krisen mit starker innerer Unruhe sind Meditation und lange Stille-Übungen nicht immer hilfreich. Dann ist ein Gespräch der bessere Weg.",
    ],
    quellen: [
      { text: "Die Psyche stärken mit Resilienz – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/psyche-seele/praevention/psyche-staerken.html" },
      { text: "Resilienz: psychische Widerstandskraft – gesund.bund.de", url: "https://gesund.bund.de/resilienz" },
    ],
  },
];
