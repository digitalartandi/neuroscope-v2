// Krankheitsbilder nach ICD-11, allgemein erklärt. Recherche 18.10.2026.
// Häufigkeiten Deutschland: DEGS1-MH (Jacobi u. a. 2014, korrigiert 2016), 12 Monate, Erwachsene 18–79, nach DSM-IV-TR.
import type { VerstehenSeite } from "./verstehen";

const DEGS = { text: "Jacobi u. a. (2014, korrigiert 2016): Psychische Störungen in der Allgemeinbevölkerung (DEGS1-MH). Der Nervenarzt", url: "https://www.psychologische-hochschule.de/wp-content/uploads/2019/07/jacobi-degs-praevalenzen-nervenarzt_2014_incl-erratum.pdf" };
const WHO_MD = { text: "WHO: Mental disorders, Fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/mental-disorders" };
const NOT = "Wenn du daran denkst, dir etwas anzutun: sofort Hilfe holen. Telefonseelsorge 142 (AT) oder 0800 111 0 111 (DE), bei akuter Gefahr 144 bzw. 112.";
const LAENGER = "wenn Beschwerden über Wochen anhalten, belasten oder den Alltag einschränken";

export const SEITEN: VerstehenSeite[] = [
  {
    id: "depression", stichworte: ["niedergeschlagen", "traurig", "Antriebslosigkeit", "Freudlosigkeit", "Antidepressiva", "Tief"], gruppe: "Stimmung", titel: "Depression",
    icd: { code: "6A7", titel: "Depressive disorders" },
    einleitung: "Eine Depression ist mehr als eine traurige Phase. Sie prägt über längere Zeit Stimmung, Antrieb, Denken und Körpergefühl. Freude und Interesse gehen verloren, und auch kleine Aufgaben werden schwer.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Traurigkeit und Antriebslosigkeit kennt jeder Mensch. Von einer Depression sprechen Fachleute, wenn mehrere solcher Veränderungen über mindestens zwei Wochen anhalten und den Alltag deutlich beeinträchtigen. Sie kann einmal auftreten oder wiederkehren.", "Depressionen sind häufig: In Österreich sind rund 6,5 Prozent der Erwachsenen betroffen, in Deutschland erfüllen innerhalb eines Jahres etwa 8 Prozent die Kriterien einer depressiven Erkrankung."] },
      { titel: "Neu in der ICD-11", text: ["Depressive Störungen stehen in der ICD-11 im Kapitel der affektiven Störungen und werden nach Verlauf und Schwere beschrieben."] },
    ],
    hilft: ["Depressionen sind gut behandelbar. Je nach Schwere helfen Psychotherapie, vor allem kognitive Verhaltenstherapie, und Medikamente (Antidepressiva), bei schweren Verläufen meist beides zusammen.", "Bei leichteren Formen können Information, Begleitung und Bewegung schon viel bewirken.", "Körperliche Ursachen sollten ärztlich abgeklärt werden."],
    wannHilfe: [LAENGER, "für ein erstes Gespräch in der Psychotherapie braucht es in Deutschland keine Überweisung", NOT],
    quellen: [
      { text: "Depression: Was ist das? – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/depression/depression-was-ist-das.html" },
      { text: "Depression: Diagnose und Therapie – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/depression/diagnose-therapie.html" },
      { text: "Depression – gesund.bund.de", url: "https://gesund.bund.de/depression" }, DEGS, WHO_MD,
    ],
  },
  {
    id: "bipolar", stichworte: ["Manie", "manisch", "manisch-depressiv", "Stimmungsschwankungen", "Hypomanie"], gruppe: "Stimmung", titel: "Bipolare Erkrankung",
    icd: { code: "6A6", titel: "Bipolar or related disorders" },
    einleitung: "Bei einer bipolaren Erkrankung wechseln sich depressive Phasen mit Phasen ab, in denen Stimmung und Antrieb krankhaft gehoben sind. Dazwischen kann es lange stabile Zeiten geben.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["In den gehobenen Phasen, Manie oder abgeschwächt Hypomanie genannt, sind Energie und Tatendrang stark gesteigert, das Schlafbedürfnis sinkt, Entscheidungen werden riskanter. Die Erkrankung beginnt meist im jungen Erwachsenenalter und verläuft oft in wiederkehrenden Phasen.", "In Deutschland sind innerhalb eines Jahres etwa 1,5 Prozent der Erwachsenen betroffen."] },
      { titel: "Neu in der ICD-11", text: ["Bipolar Typ II ist eine eigene Diagnose. Für die Manie gilt neben der Stimmung auch die gesteigerte Aktivität als Kernmerkmal."] },
    ],
    hilft: ["Behandelt wird die jeweilige Phase. Danach geht es darum, neuen Phasen vorzubeugen, meist mit stimmungsstabilisierenden Medikamenten.", "Psychoedukation, Psychotherapie und der Einbezug der Familie ergänzen die Behandlung.", "Ein regelmäßiger Schlaf-Wach-Rhythmus ist besonders wichtig."],
    wannHilfe: ["wenn sich Phasen mit ungewöhnlich viel Energie und wenig Schlafbedürfnis mit niedergeschlagenen Zeiten abwechseln", "Wer wegen Niedergeschlagenheit Hilfe sucht, sollte auch von solchen Phasen erzählen. Das ist für die Wahl der Behandlung wichtig.", NOT],
    quellen: [
      { text: "Bipolare Störung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/depression/bipolare-stoerung-symptome.html" },
      { text: "Bipolare Störung – gesund.bund.de", url: "https://gesund.bund.de/bipolare-stoerung" }, DEGS, WHO_MD,
    ],
  },
  {
    id: "angst", stichworte: ["Panik", "Panikattacke", "Phobie", "Sorgen", "soziale Angst", "Herzrasen", "Prüfungsangst", "Flugangst"], gruppe: "Angst und Zwang", titel: "Angsterkrankungen",
    icd: { code: "6B0", titel: "Anxiety or fear-related disorders" },
    einleitung: "Angst ist ein wichtiges Schutzsignal. Bei einer Angsterkrankung ist sie aber so stark, so häufig oder so wenig begründet, dass sie das Leben einschränkt, oft verbunden mit Vermeiden.",
    absaetze: [
      { titel: "Verschiedene Formen", text: ["Bei einer Panikstörung kommen wiederholt heftige Angstanfälle, scheinbar aus dem Nichts, und mit ihnen die Sorge vor dem nächsten Anfall. Bei der generalisierten Angst kreisen anhaltende, schwer zu stoppende Sorgen um viele Lebensbereiche. Bei der sozialen Angst steht die Furcht im Mittelpunkt, von anderen bewertet oder beschämt zu werden. Dazu kommen spezifische Ängste, etwa vor Tieren, Höhe oder Spritzen.", "Angsterkrankungen gehören zu den häufigsten psychischen Erkrankungen: In Deutschland sind innerhalb eines Jahres rund 15 Prozent der Erwachsenen betroffen, Frauen etwa doppelt so oft wie Männer."] },
      { titel: "Neu in der ICD-11", text: ["Angst- und furchtbezogene Störungen bilden einen gemeinsamen Block. Trennungsangst kann nun auch bei Erwachsenen beschrieben werden."] },
    ],
    hilft: ["Am wirksamsten ist Psychotherapie, vor allem kognitive Verhaltenstherapie, in der man sich der Angst schrittweise stellt.", "Je nach Form können zusätzlich bestimmte Antidepressiva helfen.", "Beruhigungsmittel aus der Gruppe der Benzodiazepine nur in Ausnahmefällen und kurz, weil sie abhängig machen können."],
    wannHilfe: ["wenn Angst dazu führt, dass du Orte, Menschen oder Situationen meidest", LAENGER, "Bei Herzrasen oder Atemnot zum ersten Mal: körperliche Ursachen ärztlich abklären lassen."],
    quellen: [
      { text: "Angststörung: Diagnose und Therapie – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/neurose/angststoerung-diagnose.html" },
      { text: "Generalisierte Angststörung – gesund.bund.de", url: "https://gesund.bund.de/generalisierte-angststoerung" }, DEGS, WHO_MD,
    ],
  },
  {
    id: "zwang", stichworte: ["Zwangsgedanken", "Kontrollieren", "Waschen", "Rituale", "Grübeln"], gruppe: "Angst und Zwang", titel: "Zwangserkrankung",
    icd: { code: "6B20", titel: "Obsessive-compulsive disorder" },
    einleitung: "Bei einer Zwangserkrankung drängen sich immer wieder belastende Gedanken, Bilder oder Impulse auf. Um die Anspannung zu lindern, fühlen sich Betroffene gedrängt, bestimmte Handlungen oder gedankliche Rituale auszuführen.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Typisch ist, dass Betroffene meist wissen, dass ihre Gedanken und Handlungen übertrieben sind, und sich trotzdem kaum entziehen können. Zwänge kosten viel Zeit und Kraft und werden oft lange verheimlicht, aus Scham.", "In Deutschland sind innerhalb eines Jahres etwa 3,6 Prozent der Erwachsenen betroffen."] },
      { titel: "Neu in der ICD-11", text: ["Zwangserkrankungen bilden eine eigene Gruppe, gemeinsam mit verwandten Erkrankungen wie der Körperdysmorphen Störung oder dem krankhaften Horten."] },
    ],
    hilft: ["Mittel der ersten Wahl ist kognitive Verhaltenstherapie mit Exposition: Man stellt sich begleitet den auslösenden Situationen, ohne das Ritual auszuführen.", "Zusätzlich können bestimmte Antidepressiva helfen."],
    wannHilfe: ["wenn Gedanken oder Rituale viel Zeit kosten oder den Alltag bestimmen", "Scham ist häufig. Fachleute kennen Zwänge gut und urteilen nicht."],
    quellen: [
      { text: "Zwangsstörung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/neurose/zwang-was-ist-das.html" },
      { text: "Zwangsstörung – gesund.bund.de", url: "https://gesund.bund.de/zwangsstoerung" }, DEGS,
    ],
  },
  {
    id: "ptbs", stichworte: ["Trauma", "Flashback", "Albträume", "Unfall", "Gewalt", "Überfall"], gruppe: "Belastung, Trauma und Verlust", titel: "Posttraumatische Belastungsstörung",
    icd: { code: "6B40", titel: "Post traumatic stress disorder" },
    einleitung: "Nach einem extrem bedrohlichen oder entsetzlichen Erlebnis reagieren fast alle Menschen zunächst stark. Bei manchen klingt diese Reaktion nicht ab. Dann sprechen Fachleute von einer Posttraumatischen Belastungsstörung, kurz PTBS.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Das Erlebte drängt sich in der Gegenwart wieder auf, etwa als lebhafte Erinnerungen oder Albträume, als wäre es jetzt. Betroffene meiden alles, was daran erinnert, und fühlen sich dauerhaft bedroht und angespannt.", "Die meisten Menschen entwickeln nach einem schweren Erlebnis keine PTBS. In Deutschland sind nach ICD-11-Kriterien etwa 1,5 Prozent der Bevölkerung betroffen."] },
      { titel: "Neu in der ICD-11", text: ["Die Diagnose ist auf wenige Kernmerkmale konzentriert: Wiedererleben, Vermeiden und anhaltendes Bedrohungsgefühl. Neu dazugekommen ist die Komplexe PTBS."] },
    ],
    hilft: ["Am besten belegt ist traumafokussierte Psychotherapie, etwa traumafokussierte kognitive Verhaltenstherapie oder EMDR.", "Medikamente kommen nur in bestimmten Situationen in Frage.", "Stabilität im Alltag, Schlaf und verlässliche Menschen unterstützen die Behandlung."],
    wannHilfe: ["wenn ein belastendes Erlebnis dich nach einigen Wochen noch stark verfolgt", LAENGER, NOT],
    quellen: [
      { text: "Posttraumatische Belastungsstörung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/trauma/posttraumatische-belastungsstoerung.html" },
      { text: "Posttraumatische Belastungsstörung – gesund.bund.de", url: "https://gesund.bund.de/posttraumatische-belastungsstoerung" },
      { text: "Maercker u. a. (2018): PTBS und Komplexe PTBS in Deutschland nach ICD-11 (Bericht)", url: "https://www.sciencedaily.com/releases/2018/01/180131124623.htm" },
      { text: "WHO: Post-traumatic stress disorder, Fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder" },
    ],
  },
  {
    id: "kptbs", stichworte: ["Trauma", "Kindheit", "Missbrauch", "Gewalt", "Vernachlässigung"], gruppe: "Belastung, Trauma und Verlust", titel: "Komplexe Posttraumatische Belastungsstörung",
    icd: { code: "6B41", titel: "Complex post traumatic stress disorder" },
    einleitung: "Die Komplexe PTBS ist neu in der ICD-11. Sie entsteht meist nach lang andauernden oder wiederholten Traumatisierungen, denen man kaum entkommen konnte, etwa Gewalt in der Kindheit, Missbrauch oder Folter.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Zu den Merkmalen der PTBS kommen tiefgreifende Schwierigkeiten hinzu: Gefühle lassen sich schwer regulieren, das eigene Selbstbild ist von Wertlosigkeit, Scham oder Schuld geprägt, und Beziehungen sind schwer zu halten.", "In Deutschland sind etwa 0,5 Prozent der Bevölkerung betroffen."] },
      { titel: "Neu in der ICD-11", text: ["Die Komplexe PTBS ist eine eigenständige Diagnose. In der ICD-10 gab es dafür keine passende Kategorie."] },
    ],
    hilft: ["Traumafokussierte Psychotherapie, oft ergänzt um Bausteine zur Gefühlsregulation und zur Gestaltung von Beziehungen.", "Die Behandlung braucht häufig mehr Zeit und eine stabile, vertrauensvolle Beziehung zur Therapeutin oder zum Therapeuten."],
    wannHilfe: ["wenn frühere, wiederholte Gewalterfahrungen dein heutiges Leben und deine Beziehungen stark prägen", NOT],
    quellen: [
      { text: "Maercker u. a. (2018): PTBS und Komplexe PTBS in Deutschland nach ICD-11 (Bericht)", url: "https://www.sciencedaily.com/releases/2018/01/180131124623.htm" },
      { text: "Posttraumatische Belastungsstörung – gesund.bund.de", url: "https://gesund.bund.de/posttraumatische-belastungsstoerung" },
    ],
  },
  {
    id: "trauer", stichworte: ["Tod", "Verlust", "Trauern", "Hinterbliebene", "Sterben"], gruppe: "Belastung, Trauma und Verlust", titel: "Anhaltende Trauer",
    icd: { code: "6B42", titel: "Prolonged grief disorder" },
    einleitung: "Trauer ist keine Krankheit, sondern eine natürliche Antwort auf Verlust. Bei einem kleinen Teil der Trauernden bleibt sie aber über lange Zeit so intensiv, dass das Leben kaum weitergeht.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Bei der anhaltenden Trauerstörung bleiben starke Sehnsucht nach der verstorbenen Person oder ständiges gedankliches Kreisen um sie bestehen, begleitet von tiefem Schmerz. Die Trauer geht deutlich über das hinaus, was im eigenen sozialen, kulturellen oder religiösen Umfeld üblich ist.", "In Deutschland betrifft das etwa 1,5 Prozent der Bevölkerung und rund 4 Prozent der Menschen, die einen Verlust erlebt haben."] },
      { titel: "Neu in der ICD-11", text: ["Die anhaltende Trauerstörung ist eine neue Diagnose. Sie ist fachlich umstritten, weil Trauer nicht zur Krankheit gemacht werden soll. Gedacht ist sie nur für sehr belastende, festgefahrene Verläufe."] },
    ],
    hilft: ["Trauerbegleitung, Trauergruppen und Gespräche mit vertrauten Menschen.", "Bei festgefahrener Trauer spezielle Psychotherapie, die hilft, den Verlust anzunehmen, ohne die Verbindung zur verstorbenen Person aufzugeben."],
    wannHilfe: ["wenn du nach etwa einem halben Jahr noch stark beeinträchtigt bist und kaum in den Alltag findest", NOT],
    quellen: [
      { text: "Mit Trauer umgehen – gesund.bund.de", url: "https://gesund.bund.de/mit-trauer-umgehen" },
      { text: "Rosner u. a. (2021): Prevalence of prolonged grief disorder in Germany. Journal of Affective Disorders", url: "https://edoc.ku.de/id/eprint/27485/" },
    ],
  },
  {
    id: "anpassung", stichworte: ["Trennung", "Scheidung", "Jobverlust", "Lebenskrise", "Krise", "Umzug"], gruppe: "Belastung, Trauma und Verlust", titel: "Anpassungsstörung",
    icd: { code: "6B43", titel: "Adjustment disorder" },
    einleitung: "Trennung, Krankheit, Jobverlust oder ein Umzug können das Leben aus dem Gleichgewicht bringen. Gelingt es über längere Zeit nicht, sich an die neue Lage anzupassen, sprechen Fachleute von einer Anpassungsstörung.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Die Gedanken kreisen ständig um das Ereignis, und der Alltag fällt schwer. Meist klingt die Reaktion innerhalb einiger Monate ab, wenn die Belastung nachlässt oder man einen Umgang damit findet.", "In Deutschland ist knapp 1 Prozent der Bevölkerung betroffen."] },
      { titel: "Neu in der ICD-11", text: ["Die Anpassungsstörung ist erstmals über eigene Kernmerkmale beschrieben, das gedankliche Kreisen und die Anpassungsschwierigkeiten."] },
    ],
    hilft: ["Unterstützung durch vertraute Menschen und praktische Hilfe bei der veränderten Lage.", "Kurze psychologische oder psychotherapeutische Begleitung kann helfen, die Situation zu ordnen und neue Wege zu finden."],
    wannHilfe: ["wenn ein einschneidendes Ereignis dich auch nach Wochen nicht loslässt und der Alltag kaum gelingt"],
    quellen: [
      { text: "Maercker u. a. (2012): Adjustment disorders in the general population. Social Psychiatry and Psychiatric Epidemiology", url: "https://www.proquest.com/docview/1112334555" },
    ],
  },
  {
    id: "koerperbeschwerden", stichworte: ["Schmerzen", "psychosomatisch", "somatoform", "Bauchschmerzen", "Kopfschmerzen", "Erschöpfung"], gruppe: "Körper, Essen und Schlaf", titel: "Belastende Körperbeschwerden",
    icd: { code: "6C20", titel: "Bodily distress disorder" },
    einleitung: "Körperliche Beschwerden wie Schmerzen, Erschöpfung oder Verdauungsprobleme können so belastend werden, dass sie Gedanken und Alltag bestimmen, auch wenn Untersuchungen nicht dauerhaft beruhigen.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Entscheidend ist die Belastung durch die Beschwerden und wie sehr sie Aufmerksamkeit und Leben einnehmen. Ob es eine körperliche Erklärung gibt, spielt für die Einordnung keine Rolle mehr. Die Beschwerden sind echt und nicht eingebildet.", "Funktionelle Körperbeschwerden sind häufig, Schätzungen sprechen von etwa jeder zehnten Person."] },
      { titel: "Neu in der ICD-11", text: ["Die „Körperliche Belastungsstörung“ ersetzt die früheren somatoformen Störungen. Die Bedingung „medizinisch nicht erklärt“ entfällt."] },
    ],
    hilft: ["Eine feste hausärztliche Begleitung als zentrale Anlaufstelle, statt vieler Einzeluntersuchungen.", "Aktivität und Bewegung, verständliche Information, weniger Überlastung.", "Bei anhaltenden oder starken Beschwerden Psychotherapie."],
    wannHilfe: [LAENGER, "Neue oder sich verändernde Beschwerden immer ärztlich abklären lassen."],
    quellen: [
      { text: "Funktionelle Beschwerden – gesund.bund.de", url: "https://gesund.bund.de/funktionelle-beschwerden" },
      { text: "Hüsing & Löwe (2025): Der Abschied von den somatoformen Störungen. Verhaltenstherapie", url: "https://karger.com/ver/article/35/1/15/925316/Der-Abschied-von-den-somatoformen-Storungen" }, DEGS,
    ],
  },
  {
    id: "essen", stichworte: ["Magersucht", "Anorexie", "Bulimie", "Essanfälle", "Binge", "Gewicht", "Figur", "Diät"], gruppe: "Körper, Essen und Schlaf", titel: "Essstörungen",
    icd: { code: "6B8", titel: "Feeding or eating disorders" },
    einleitung: "Bei Essstörungen sind das Essen und die Gedanken über Essen, Gewicht und Figur so verändert, dass Gesundheit und Lebensqualität leiden.",
    absaetze: [
      { titel: "Verschiedene Formen", text: ["Dazu gehören starkes Untergewicht durch Einschränken des Essens (Magersucht), Essanfälle mit anschließenden Gegenmaßnahmen wie Erbrechen (Bulimie) und wiederkehrende Essanfälle ohne Gegenmaßnahmen (Binge-Eating). Essstörungen können lebensbedrohlich werden, Magersucht hat unter den psychischen Erkrankungen die höchste Sterblichkeit.", "Essstörungen beginnen oft im Jugendalter und betreffen Frauen häufiger, kommen aber in allen Altersgruppen und bei allen Geschlechtern vor."] },
      { titel: "Neu in der ICD-11", text: ["Binge-Eating und die vermeidend-restriktive Essstörung (ARFID) sind eigene Diagnosen. Die Kategorien gelten für alle Altersgruppen gemeinsam."] },
    ],
    hilft: ["Kern der Behandlung ist Psychotherapie, bei Jugendlichen oft mit der Familie.", "Dazu kommen Ernährungsberatung, bei Untergewicht die schrittweise Gewichtszunahme und bei schweren Verläufen eine stationäre Behandlung.", "Je früher die Behandlung beginnt, desto besser sind die Aussichten."],
    wannHilfe: ["wenn Essen, Gewicht oder Figur deine Gedanken stark bestimmen", "wenn du dir um einen nahestehenden Menschen Sorgen machst: Auch Angehörige finden Beratung"],
    quellen: [
      { text: "Essstörungen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/essstoerungen.html" },
      { text: "Essstörungen – gesund.bund.de", url: "https://gesund.bund.de/essstoerungen" }, DEGS, WHO_MD,
    ],
  },
  {
    id: "insomnie", stichworte: ["Schlaflosigkeit", "Einschlafen", "Durchschlafen", "Schlafstörung", "nachts wach"], gruppe: "Körper, Essen und Schlaf", titel: "Anhaltende Schlafprobleme",
    icd: { code: "7A00", titel: "Chronic insomnia" },
    einleitung: "Schlecht schlafen kennt fast jede und jeder. Fällt das Ein- oder Durchschlafen aber über Monate schwer, obwohl genug Zeit zum Schlafen da ist, und leidet der Tag darunter, sprechen Fachleute von einer chronischen Insomnie.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Etwa ein Drittel der Menschen hat zumindest zeitweise Ein- oder Durchschlafprobleme. Rund 6 Prozent haben anhaltende Schlafprobleme mit spürbaren Folgen am Tag, wie Erschöpfung und Konzentrationsproblemen."] },
      { titel: "Neu in der ICD-11", text: ["Schlafstörungen stehen nicht mehr im Kapitel der psychischen Erkrankungen, sondern in einem eigenen Kapitel für Schlaf-Wach-Störungen."] },
    ],
    hilft: ["Mittel der ersten Wahl ist eine spezielle Verhaltenstherapie für Schlafprobleme (KVT-I). Es gibt sie auch in Gruppen und als geprüfte digitale Programme.", "Schlafmittel nur kurzzeitig, weil sie abhängig machen können.", "Gewohnheiten rund um den Schlaf helfen als Basis, siehe Wissensseite „Schlaf und Erholung“."],
    wannHilfe: ["wenn du über mehr als einen Monat an mehreren Nächten pro Woche schlecht schläfst und es dich belastet", "wenn jemand bei dir Atemaussetzer im Schlaf bemerkt"],
    quellen: [
      { text: "Schlafstörungen – gesund.bund.de", url: "https://gesund.bund.de/schlafstoerungen" },
      { text: "Schlack u. a. (2013): Häufigkeit von Schlafstörungen in Deutschland (DEGS1). Bundesgesundheitsblatt", url: "https://edoc.rki.de/handle/176904/1502" },
    ],
  },
  {
    id: "adhs", stichworte: ["ADS", "ADHD", "Konzentration", "Aufmerksamkeit", "Hyperaktivität", "Unruhe", "Zappelig"], gruppe: "Entwicklung, Persönlichkeit und Wahrnehmung", titel: "ADHS",
    icd: { code: "6A05", titel: "Attention deficit hyperactivity disorder" },
    einleitung: "ADHS ist eine Besonderheit in der Entwicklung des Gehirns, die in der Kindheit beginnt. Sie zeigt sich in anhaltenden Schwierigkeiten mit der Aufmerksamkeit und oft in Unruhe und Impulsivität.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Die Ausprägung verändert sich mit dem Alter. Bei Erwachsenen tritt die äußere Unruhe oft in den Hintergrund, Probleme mit Organisation, Ablenkbarkeit und Gefühlsschwankungen bleiben. ADHS beeinflusst Schule, Arbeit und Beziehungen und geht oft mit besonderen Stärken einher.", "Bei etwa 5 Prozent der Kinder in Deutschland wird ADHS festgestellt. Bei Erwachsenen in wohlhabenden Ländern geht man von rund 4 Prozent aus."] },
      { titel: "Neu in der ICD-11", text: ["ADHS gehört zu den Entwicklungsstörungen des Nervensystems und wird nach dem vorherrschenden Erscheinungsbild beschrieben."] },
    ],
    hilft: ["Am Anfang stehen Information und Beratung. Bei Kindern helfen Elterntraining und Unterstützung in Schule und Familie, bei Erwachsenen vor allem Verhaltenstherapie.", "Medikamente können die Aufmerksamkeit deutlich verbessern und werden nach sorgfältiger Abklärung eingesetzt."],
    wannHilfe: ["wenn Schwierigkeiten mit Konzentration, Organisation oder Impulsivität seit der Kindheit bestehen und dich heute deutlich einschränken", "Eine sorgfältige Abklärung braucht Zeit. Online-Fragebögen können sie nicht ersetzen."],
    quellen: [
      { text: "ADHS bei Erwachsenen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/adhs-erwachsene.html" },
      { text: "ADHS bei Kindern – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/adhs-kinder.html" },
      { text: "ADHS – gesund.bund.de", url: "https://gesund.bund.de/adhs" },
    ],
  },
  {
    id: "persoenlichkeit", stichworte: ["Borderline", "Narzissmus", "Persönlichkeit", "Gefühlsschwankungen"], gruppe: "Entwicklung, Persönlichkeit und Wahrnehmung", titel: "Persönlichkeitsstörungen",
    icd: { code: "6D10", titel: "Personality disorder" },
    einleitung: "Jeder Mensch hat eine eigene Persönlichkeit mit Ecken und Kanten. Von einer Persönlichkeitsstörung sprechen Fachleute, wenn lang anhaltende Muster im Erleben von sich selbst und im Umgang mit anderen viel Leid verursachen.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Betroffen sind vor allem das Selbstbild, etwa Selbstwert und Identität, und Beziehungen zu anderen Menschen. Diese Muster zeigen sich in vielen Lebensbereichen und nicht nur in einzelnen Situationen."] },
      { titel: "Neu in der ICD-11", text: ["Die ICD-11 hat die festen Typen der ICD-10 abgeschafft. Sie beschreibt zuerst, wie stark die Beeinträchtigung ist, leicht, mittelgradig oder schwer, und dann, welche Persönlichkeitszüge sie prägen. Ein Borderline-Muster kann zusätzlich angegeben werden. Das ist einer der größten Umbrüche der neuen Klassifikation."] },
    ],
    hilft: ["Hauptbehandlung ist Psychotherapie. Für das Borderline-Muster gibt es spezielle, gut untersuchte Verfahren wie die Dialektisch-Behaviorale Therapie (DBT).", "Medikamente nur gegen einzelne Beschwerden, nicht als eigentliche Behandlung.", "Viele Betroffene erleben mit Behandlung über die Jahre deutliche Verbesserungen."],
    wannHilfe: ["wenn ähnliche Konflikte, starke Gefühlsschwankungen oder Probleme in Beziehungen dich immer wieder einholen", NOT],
    quellen: [
      { text: "Persönlichkeitsstörungen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/persoenlichkeitsstoerungen.html" },
      { text: "Borderline – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/borderline.html" },
    ],
  },
  {
    id: "psychose", stichworte: ["Stimmen hören", "Wahn", "Paranoia", "Schizophrenie", "Halluzination"], gruppe: "Entwicklung, Persönlichkeit und Wahrnehmung", titel: "Psychosen und Schizophrenie",
    icd: { code: "6A20", titel: "Schizophrenia" },
    einleitung: "Bei einer Psychose verändern sich Wahrnehmung, Denken und Erleben so stark, dass der Bezug zur gemeinsamen Wirklichkeit zeitweise verloren geht. Die Schizophrenie ist die bekannteste Form.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Möglich sind etwa Stimmenhören, Wahnvorstellungen, ungeordnetes Denken oder ein deutlicher Rückzug mit wenig Antrieb. Die Erkrankung verläuft oft in Episoden, und viele Menschen erholen sich weitgehend."] },
      { titel: "Neu in der ICD-11", text: ["Die früheren Unterformen entfallen. Stattdessen werden die betroffenen Symptombereiche beschrieben."] },
    ],
    hilft: ["Medikamente (Antipsychotika) lindern akute Beschwerden und beugen Rückfällen vor.", "Dazu kommen Psychotherapie, Information für Betroffene und Angehörige, soziale Unterstützung und ein gemeinsamer Krisenplan.", "Je früher die Behandlung beginnt, desto besser."],
    wannHilfe: ["wenn sich Wahrnehmung oder Denken bei dir oder einem nahestehenden Menschen auffällig verändern", "In akuten Krisen sofort Hilfe holen: psychiatrische Krisendienste, 144 bzw. 112."],
    quellen: [
      { text: "Schizophrenie – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/schizophrenie1.html" },
      { text: "Schizophrenie – gesund.bund.de", url: "https://gesund.bund.de/schizophrenie" }, WHO_MD,
    ],
  },
  {
    id: "alkohol", stichworte: ["Sucht", "Trinken", "Abhängigkeit", "Entzug", "Rausch", "Bier", "Wein"], gruppe: "Konsum und Verhalten", titel: "Probleme mit Alkohol",
    icd: { code: "6C40", titel: "Disorders due to use of alcohol" },
    einleitung: "Alkohol ist in Österreich und Deutschland Alltag. Problematisch wird er, wenn er Körper, Psyche oder Beziehungen schadet, oder wenn man die Kontrolle über das Trinken verliert.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Fachleute unterscheiden ein schädliches Konsummuster von der Abhängigkeit. Bei der Abhängigkeit wird Alkohol immer wichtiger als andere Dinge, die Kontrolle schwindet, und der Körper gewöhnt sich daran, bis hin zu Entzugserscheinungen.", "In Deutschland erfüllen innerhalb eines Jahres etwa 3 Prozent der Erwachsenen die Kriterien einer Abhängigkeit. Für Österreich nennen offizielle Seiten unterschiedliche Zahlen, deshalb steht hier keine."] },
      { titel: "Neu in der ICD-11", text: ["Der „schädliche Gebrauch“ heißt nun „schädliches Konsummuster“. Die Abhängigkeit wird über wenige Kernmerkmale beschrieben."] },
    ],
    hilft: ["Weniger trinken lohnt sich in jedem Fall. Hilfreich sind feste alkoholfreie Tage und ehrliches Mitzählen.", "Bei Abhängigkeit: einen ärztlich begleiteten Entzug machen. Ein abrupter Entzug ohne Begleitung kann gefährlich sein.", "Danach helfen Entwöhnungsbehandlung, Beratungsstellen und Selbsthilfegruppen."],
    wannHilfe: ["wenn es dir schwerfällt, weniger zu trinken, oder andere sich Sorgen machen", "Erste Anlaufstellen: Hausarztpraxis, regionale Beratungsstellen, in Österreich auch 1450"],
    quellen: [
      { text: "Alkoholismus – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/alkoholismus.html" },
      { text: "Dialogwoche Alkohol 2025 – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/news/aktuelles/aktuell-2025/dialogwoche-alkohol-2025.html" },
      { text: "Alkohol – gesund.bund.de", url: "https://gesund.bund.de/alkohol" }, DEGS,
    ],
  },
  {
    id: "gaming", stichworte: ["Sucht", "Zocken", "Computerspiele", "Handy", "Internet", "Online", "Smartphone", "Medien"], gruppe: "Konsum und Verhalten", titel: "Wenn Spielen zum Problem wird",
    icd: { code: "6C51", titel: "Gaming disorder" },
    einleitung: "Computerspiele gehören für viele Menschen zum Alltag und machen Spaß. Nur bei einem kleinen Teil der Spielenden wird daraus ein Problem, das Fachleute als Computerspielstörung bezeichnen.",
    absaetze: [
      { titel: "Was Fachleute darunter verstehen", text: ["Gemeint ist ein Spielverhalten, über das man die Kontrolle verliert. Spielen hat Vorrang vor anderen Interessen und Pflichten und wird trotz deutlicher Nachteile fortgesetzt, meist über mindestens ein Jahr, mit spürbaren Folgen für Familie, Ausbildung oder Beruf."] },
      { titel: "Neu in der ICD-11", text: ["Die Computerspielstörung ist eine neue, eigenständige Diagnose."] },
    ],
    hilft: ["Psychotherapie, vor allem verhaltenstherapeutisch, oft mit Einbezug der Familie.", "Ziel ist meist ein kontrollierter Umgang, nicht unbedingt völliger Verzicht.", "Begleitende Belastungen wie Ängste oder Niedergeschlagenheit mitbehandeln."],
    wannHilfe: ["wenn Spielen wichtiger geworden ist als Schlaf, Schule, Arbeit oder Freundschaften und Aufhören kaum gelingt"],
    quellen: [
      { text: "WHO: Addictive behaviours: Gaming disorder", url: "https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder" },
      { text: "Internetsucht – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/internetsucht.html" },
    ],
  },
  {
    id: "burnout", stichworte: ["Burnout", "Ausgebrannt", "Erschöpfung", "Überlastung", "Job", "Stress"], gruppe: "Arbeit", titel: "Burn-out",
    icd: { code: "QD85", titel: "Burnout" },
    einleitung: "Burn-out ist in aller Munde. Die WHO beschreibt es ausdrücklich nicht als Krankheit, sondern als arbeitsbezogenes Phänomen, das aus chronischem Stress am Arbeitsplatz entsteht.",
    absaetze: [
      { titel: "Was die WHO darunter versteht", text: ["Burn-out zeigt sich in drei Bereichen: tiefe Erschöpfung, innerer Abstand oder Zynismus gegenüber der Arbeit und das Gefühl, weniger leisten zu können. Der Begriff gilt nur für den beruflichen Zusammenhang.", "Weil es keine einheitliche Definition gibt, gibt es auch keine verlässlichen Zahlen. Online-Fragebögen eignen sich nicht, um ein Burn-out festzustellen."] },
      { titel: "Einordnung in der ICD-11", text: ["Burn-out steht im Kapitel der Faktoren, die die Gesundheit beeinflussen, nicht bei den Krankheiten. Es ist dort genauer beschrieben als in der ICD-10."] },
    ],
    hilft: ["Wichtig ist, andere Erkrankungen abklären zu lassen, besonders Depression und Angst. Sie brauchen eine eigene Behandlung.", "Belastungen bei der Arbeit verringern, Grenzen setzen, Erholung einplanen, Bewegung.", "Bei Bedarf psychologische oder psychotherapeutische Unterstützung. Siehe auch die Wissensseite „Arbeit und Alltag“."],
    wannHilfe: ["wenn Erschöpfung auch nach Erholungsphasen bleibt oder du dich zunehmend zurückziehst"],
    quellen: [
      { text: "WHO (2019): Burn-out an occupational phenomenon", url: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases" },
      { text: "Burnout – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/burnout.html" },
      { text: "Burn-out-Syndrom – gesund.bund.de", url: "https://gesund.bund.de/burn-out-syndrom" },
    ],
  },
];
