// Soziale Angst. Recherche 18.10.2026. Alle Quellen wurden geöffnet.
// Häufigkeit Deutschland: DEGS1-MH, 12 Monate, Erwachsene 18–79, Wert nach Erratum (2,8 %; Original 2,7 %).
// ICD-11-Code bewusst weggelassen: 6B04 nur auf einer kommerziellen Kodierseite gefunden, WHO-Seiten waren nicht abrufbar.

interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }

export const SOZIALE_ANGST: { id: "sozialeangst"; titel: string; gruppe: "Angst und Zwang"; stichworte: string[]; icd?: { code: string; titel: string }; einleitung: string; absaetze: Abschnitt[]; vertiefung: Abschnitt[]; hilft: string[]; wannHilfe: string[]; irrtuemer: Irrtum[]; angehoerige: string[]; quellen: Quelle[] } = {
  id: "sozialeangst",
  titel: "Soziale Angst",
  gruppe: "Angst und Zwang",
  stichworte: ["Schüchtern", "schüchtern", "Lampenfieber", "Rot werden", "Erröten", "Small Talk", "Präsentation", "Referat", "Prüfungsangst", "Telefonangst", "Sozialphobie", "soziale Phobie", "Angst vor Menschen", "Blamage", "peinlich"],
  einleitung: "Fast alle kennen das flaue Gefühl vor einem Referat oder beim ersten Treffen mit Fremden. Bei sozialer Angst ist die Furcht, von anderen negativ bewertet zu werden oder sich zu blamieren, aber so stark, dass sie den Alltag bestimmt. Anders als bei Schüchternheit führt sie oft dazu, dass Situationen gemieden oder nur unter großer Qual durchgestanden werden.",
  absaetze: [
    { titel: "Was Fachleute darunter verstehen", text: [
      "Fachleute sprechen von einer sozialen Angststörung, früher meist soziale Phobie genannt. Im Mittelpunkt steht die Angst in Situationen, in denen man sich von anderen beobachtet oder beurteilt fühlt. Das kann ein Gespräch mit Vorgesetzten sein, eine Prüfung, eine Rede oder ein Essen im Restaurant. Häufig kommen körperliche Zeichen dazu, etwa Erröten, Zittern der Hände, Übelkeit oder Harndrang.",
      "Ängste in sozialen Situationen sind bis zu einem gewissen Grad ganz normal. Von einer Erkrankung spricht man erst, wenn die Angst dauerhaft, übertrieben und so stark ist, dass sie das Leben deutlich einschränkt.",
      "In Deutschland erfüllen innerhalb eines Jahres etwa 2,8 Prozent der Erwachsenen die Kriterien einer sozialen Phobie, Frauen fast doppelt so oft wie Männer. Die Angst beginnt meist früh: In drei von vier Fällen zeigt sie sich vor dem 16. Lebensjahr. Ohne Behandlung bleibt sie oft über viele Jahre bestehen. Für Österreich liegen keine eigenen vergleichbaren Zahlen vor.",
    ] },
    { titel: "Wie es sich anfühlen kann", text: [
      "Das Telefon klingelt, und der Magen zieht sich zusammen. Vielleicht lässt man es läuten und schreibt später lieber eine Nachricht.",
      "Im Meeting liegt ein Gedanke auf der Zunge, aber er bleibt unausgesprochen. Was, wenn die Stimme zittert? Was, wenn alle merken, wie rot das Gesicht wird? Schon die Angst vor dem Erröten macht es heißer. Beim gemeinsamen Mittagessen fühlt sich jeder Bissen beobachtet, die Hände wirken ungeschickt, das Glas soll bloß nicht wackeln.",
      "Small Talk in der Kaffeeküche fühlt sich an wie eine Prüfung ohne Vorbereitung. Während andere plaudern, läuft innen ein Kommentar mit: Das war seltsam. Jetzt schweige ich zu lange. Die halten mich sicher für komisch.",
      "Und wenn alles vorbei ist, beginnt oft der zweite Teil. Abends im Bett wird das Gespräch noch einmal abgespielt, Satz für Satz, und jedes Mal wirkt es peinlicher. Von außen bemerkt davon meist niemand etwas. Viele Betroffene wissen sogar, dass ihre Angst übertrieben ist, und schämen sich zusätzlich dafür.",
    ] },
    { titel: "Der Teufelskreis", text: [
      "Die Psychologen Clark und Wells haben 1995 ein Modell beschrieben, das erklärt, warum soziale Angst sich so hartnäckig hält.",
      "Selbstaufmerksamkeit: In der gefürchteten Situation richtet sich die Aufmerksamkeit stark nach innen, auf Herzklopfen, Hitze im Gesicht und die eigenen Worte. Dabei entsteht ein inneres Bild davon, wie man auf andere wirkt, oft wie von außen betrachtet und meist viel negativer als die Wirklichkeit. Gleichzeitig fehlt die Aufmerksamkeit für das, was tatsächlich passiert, etwa ein freundliches Nicken des Gegenübers.",
      "Sicherheitsverhalten: Um eine Blamage zu verhindern, greift man zu kleinen Schutzstrategien. Man hält das Glas mit beiden Händen, trägt einen hohen Kragen, sagt wenig oder probt Sätze im Kopf. Diese Strategien können die Beschwerden verstärken oder sogar erst auslösen.",
      "Vermeidung: Wer Situationen ganz meidet, ist kurz erleichtert. Die Erfahrung, dass es auch gut gehen kann, bleibt aber aus.",
      "Grübeln vorher und nachher: Schon vor einer Situation wird das Scheitern im Kopf durchgespielt. Danach folgt die nachträgliche Verarbeitung, das Grübeln, bei dem vor allem die vermeintlichen Fehler hängen bleiben. So bestätigt jede Begegnung scheinbar die Angst, und der Kreis schließt sich.",
    ] },
    { titel: "Wie es dazu kommen kann", text: [
      "Meist wirken mehrere Dinge zusammen. Soziale Ängste treten in manchen Familien gehäuft auf, und vermutlich spielt eine angeborene Empfindlichkeit eine Rolle. Manche Menschen waren schon als Kinder schüchtern.",
      "Dazu kommen Erfahrungen: ausgelacht oder gehänselt zu werden, etwa in der Schule, oder ein sehr kritischer oder überbehütender Erziehungsstil. Fehlen später Gelegenheiten, soziale Situationen gut zu erleben, kann sich die Angst festsetzen. Häufig treten zusätzlich Niedergeschlagenheit, andere Ängste oder ein problematischer Umgang mit Alkohol auf. Niemand ist an sozialer Angst selbst schuld.",
    ] },
    { titel: "Schüchternheit, Introversion oder soziale Angst?", text: [
      "Schüchternheit ist ein Wesenszug. Wer schüchtern ist, braucht vielleicht etwas länger, um mit Fremden warm zu werden, kommt aber im Alltag zurecht. Soziale Angst wird anfangs oft mit starker Schüchternheit verwechselt. Der Unterschied liegt in der Stärke der Angst und darin, wie sehr sie das Leben einschränkt.",
      "Introversion beschreibt eine Vorliebe: Manche Menschen tanken eher allein oder in kleiner Runde Kraft und mögen große Gruppen weniger. Das ist keine Angst. Bei sozialer Angst wünschen sich viele Betroffene sogar mehr Kontakt, trauen sich aber nicht.",
      "Auch Lampenfieber vor einem Auftritt ist normal und oft sogar hilfreich. Ob Unsicherheit, Wesenszug oder Erkrankung, lässt sich nicht an einzelnen Merkmalen festmachen. Das klärt am besten ein Gespräch mit einer Fachperson.",
    ] },
    { titel: "Neu in der ICD-11", text: [
      "In der ICD-11, der aktuellen internationalen Klassifikation der Weltgesundheitsorganisation, heißt das Krankheitsbild soziale Angststörung. Die ältere Bezeichnung soziale Phobie ist weiterhin üblich.",
    ] },
  ],
  vertiefung: [
    { titel: "Wie eine Behandlung abläuft", text: [
      "Soziale Angst ist gut behandelbar. Die deutsche S3-Leitlinie zur Behandlung von Angststörungen, also die Leitlinie mit dem höchsten wissenschaftlichen Standard, empfiehlt Psychotherapie und Medikamente. Unter den Psychotherapien hat die kognitive Verhaltenstherapie die stärkste Empfehlung. Psychodynamische Therapie kommt in Frage, wenn Verhaltenstherapie nicht hilft, nicht verfügbar ist oder gewünscht wird.",
      "In der kognitiven Therapie nach dem Modell von Clark und Wells lernt man zuerst, wie der Teufelskreis funktioniert. In Übungen wird erlebbar, wie Selbstaufmerksamkeit und Sicherheitsverhalten die Angst verstärken. Beim Videofeedback sieht man sich in einem Gespräch auf Video und vergleicht das mit dem inneren Bild. Im Aufmerksamkeitstraining übt man, den Blick nach außen auf das Gegenüber zu richten.",
      "Dazu kommen Verhaltensexperimente und Expositionen: Man sucht gefürchtete Situationen gezielt auf und prüft, ob die befürchteten Folgen wirklich eintreten. Auch das Grübeln vor und nach Situationen wird bearbeitet. In einer großen deutschen Studie, SOPHO-NET, besserte sich die Angst bei 60 Prozent der Menschen mit kognitiver Therapie und bei 52 Prozent mit psychodynamischer Therapie deutlich, gegenüber 15 Prozent in der Wartegruppe.",
      "Bestimmte Antidepressiva sind ebenfalls wirksam. Sie brauchen einige Wochen, bis sie wirken, und machen nicht abhängig. Betablocker werden manchmal vor einzelnen belastenden Situationen eingesetzt. Sie dämpfen körperliche Zeichen wie Zittern, nicht aber die Angst selbst. Hilft eine Behandlungsform nicht ausreichend, soll laut Leitlinie die andere angeboten werden.",
    ] },
    { titel: "Was du selbst tun kannst", text: [
      "Jede Situation, der du trotz Angst nicht ausweichst, ist ein Schritt aus dem Teufelskreis. Hilfreich ist, große Herausforderungen in kleine Schritte zu zerlegen: erst eine kurze Frage an der Kasse, später ein Anruf, irgendwann ein Beitrag im Meeting.",
      "Versuche in Gesprächen, die Aufmerksamkeit bewusst nach außen zu lenken, auf das Gesicht und die Worte deines Gegenübers statt auf deine Wangen. Achte auch darauf, welche kleinen Schutzstrategien du nutzt, und lass sie probeweise einmal weg.",
      "Grübeln nach einer Begegnung lässt sich nicht einfach abstellen. Es kann helfen, belastende Gedanken aufzuschreiben und mit etwas Abstand zu fragen, was tatsächlich passiert ist.",
      "Internetbasierte Programme auf Grundlage der Verhaltenstherapie können die Wartezeit bis zur Therapie überbrücken oder eine Behandlung begleiten, sie aber nicht ersetzen. In Deutschland gibt es für soziale Angst geprüfte digitale Gesundheitsanwendungen, kurz DiGA, die Ärztinnen, Ärzte und Psychotherapeutinnen und Psychotherapeuten verordnen können. Die Kosten trägt dann die gesetzliche Krankenkasse. Unabhängige Informationen und eine Checkliste zur Prüfung solcher Angebote bietet psychenet.de.",
      "Selbsthilfegruppen werden in der Leitlinie ausdrücklich empfohlen. In Deutschland vermitteln die Deutsche Angst-Hilfe und die NAKOS Gruppen, auch online. In Österreich findest du Gruppen über die Gesundheitssuche auf gesundheit.gv.at.",
    ] },
  ],
  hilft: [
    "Kognitive Verhaltenstherapie mit Übungen in echten Situationen ist am besten untersucht.",
    "Bestimmte Antidepressiva können zusätzlich oder alternativ helfen.",
    "Kleine, regelmäßige Schritte statt Vermeiden.",
    "Selbsthilfegruppen und geprüfte Online-Programme als Ergänzung.",
  ],
  wannHilfe: [
    "wenn du wichtige Situationen wie Prüfungen, Arzttermine, Bewerbungen oder Treffen regelmäßig meidest",
    "wenn die Angst Schule, Ausbildung, Beruf oder Beziehungen spürbar einschränkt",
    "wenn du Alkohol oder Beruhigungsmittel brauchst, um soziale Situationen auszuhalten",
    "wenn zur Angst Niedergeschlagenheit oder Hoffnungslosigkeit kommen",
    "Wenn du daran denkst, dir etwas anzutun: sofort Hilfe holen. Telefonseelsorge 142 (AT) oder 0800 111 0 111 (DE), bei akuter Gefahr 144 bzw. 112.",
  ],
  irrtuemer: [
    { irrtum: "Das ist doch nur Schüchternheit.", richtig: "Schüchternheit ist ein Wesenszug. Soziale Angst ist eine ernsthafte, behandelbare Erkrankung, die das Leben deutlich einschränken kann." },
    { irrtum: "Das wächst sich von allein aus.", richtig: "Soziale Angst beginnt oft in der Jugend und hält ohne Behandlung häufig über viele Jahre an. Je früher Hilfe kommt, desto besser." },
    { irrtum: "Alle sehen sofort, wie nervös ich bin.", richtig: "Von außen ist meist viel weniger zu sehen, als es sich innen anfühlt. Genau das zeigt in der Therapie oft das Videofeedback." },
    { irrtum: "Wer Angst vor Menschen hat, will allein sein.", richtig: "Viele Betroffene wünschen sich Nähe und Kontakt. Die Angst steht ihnen dabei im Weg, nicht der fehlende Wunsch." },
  ],
  angehoerige: [
    "Nimm die Angst ernst, auch wenn die Situation für dich harmlos wirkt. Sätze wie „Stell dich nicht so an“ verstärken die Scham.",
    "Übernimm nicht dauerhaft alle Anrufe oder Gespräche. Ermutige lieber zu kleinen Schritten und würdige sie.",
    "Lenke nach einem Treffen den Blick auf das, was gut lief, statt gemeinsam über vermeintliche Fehler zu grübeln.",
    "Biete an, bei der Suche nach Hilfe zu unterstützen. Auch für Angehörige gibt es Selbsthilfegruppen und Beratung.",
  ],
  quellen: [
    { text: "Patientenleitlinie zur S3-Leitlinie Behandlung von Angststörungen (2022). AWMF", url: "https://register.awmf.org/assets/guidelines/051-028p_S3_Behandlung-von-Angststoerungen_2022-07.pdf" },
    { text: "Jacobi u. a. (2014, korrigiert 2016): Psychische Störungen in der Allgemeinbevölkerung (DEGS1-MH). Der Nervenarzt", url: "https://www.psychologische-hochschule.de/wp-content/uploads/2019/07/jacobi-degs-praevalenzen-nervenarzt_2014_incl-erratum.pdf" },
    { text: "Angststörung: Diagnose und Therapie. gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/neurose/angststoerung-diagnose.html" },
    { text: "Soziale Angststörung. MSD Manual, Ausgabe für Patienten", url: "https://www.msdmanuals.com/de/heim/psychische-gesundheitsstörungen/angststörungen-und-belastungsstörungen/soziale-angststörung" },
    { text: "Heidenreich und Stangier (2004): Hoffentlich spricht mich niemand an. Soziale Phobien. Forschung Frankfurt, Goethe-Universität", url: "https://www.uni-frankfurt.de/36050305/forschung-frankfurt-ausgabe-1-2004-hoffentlich-spricht-mich-niemand-an-soziale-phobien-wenn-angste-vor-anderen-menschen-krank-machen.pdf" },
    { text: "Spurr und Stopa (2002): Self-focused attention in social phobia and social anxiety. Clinical Psychology Review", url: "https://eprints.soton.ac.uk/18449" },
    { text: "NICE Guideline CG159: Social anxiety disorder. Recognition, assessment and treatment", url: "https://www.nice.org.uk/guidance/cg159/chapter/Recommendations" },
    { text: "Stangier, Clark, Ginzburg und Ehlers (2016): Soziale Angststörung. Fortschritte der Psychotherapie. Hogrefe", url: "https://www.hogrefe.com/de/shop/soziale-angststoerung-75073.html" },
    { text: "Psychotherapie wirkt bei sozialer Phobie (SOPHO-NET, 2013). Deutsches Ärzteblatt", url: "https://www.aerzteblatt.de/nachrichten/55037/Psychotherapie-wirkt-bei-sozialer-Phobie" },
    { text: "Soziale Phobie. BARMER", url: "https://www.barmer.de/gesundheit-verstehen/psyche/angst/soziale-phobie-1334208" },
    { text: "Soziale Phobie. DocCheck Flexikon", url: "https://flexikon.doccheck.com/de/Soziale_Phobie" },
    { text: "Was sind Online-Interventionen? psychenet.de", url: "https://www.psychenet.de/images/Online_Interventionen/Was%20sind%20Online%20Interventionen_07_2026.pdf" },
    { text: "Deutsche Angst-Hilfe e. V. (DASH)", url: "https://www.angstselbsthilfe.de/" },
    { text: "NAKOS. Bundesweite Informations- und Vermittlungsstelle für Selbsthilfe", url: "https://www.nakos.de/" },
    { text: "Selbsthilfe in Österreich. gesundheit.gv.at", url: "https://www.gesundheit.gv.at/gesundheitssystem/institutionen/arge-selbsthilfe" },
  ],
};
