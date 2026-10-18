// Vertiefungen zu den Verstehen-Seiten (Teil 1). Recherche 18.10.2026.
// Alle Quellen wurden bei der Recherche geöffnet. Keine Diagnose, keine Selbsttests.

interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }
export interface Ergaenzung { absaetze: Abschnitt[]; irrtuemer: Irrtum[]; angehoerige: string[]; quellen: Quelle[] }

// Gemeinsame Hinweise zum Weg in die Behandlung
const ZUGANG_DE = "In Deutschland führt der erste Schritt in die Psychotherapie über die psychotherapeutische Sprechstunde. Dafür braucht es keine Überweisung. Die Terminservicestelle unter 116117 hilft bei der Suche. Sie muss innerhalb einer Woche einen Termin vermitteln, der höchstens vier Wochen in der Zukunft liegt. Bei akuter Belastung sind bis zu zwölf Gespräche als Akutbehandlung möglich, ohne Antrag bei der Krankenkasse. Nach einigen probatorischen Sitzungen zum Kennenlernen folgt bei Bedarf eine Kurzzeittherapie mit 12 bis 24 Stunden oder eine Langzeittherapie mit je nach Verfahren etwa 30 bis 60 Stunden.";
const ZUGANG_AT = "In Österreich gilt bei der ÖGK: Psychotherapie bei Vertragspartnern ist eine Sachleistung, die Kontakte der vermittelnden Stellen nennt die jeweilige Landesstelle. Bei Wahltherapeutinnen und Wahltherapeuten ohne Kassenvertrag zahlt man zunächst selbst und bekommt einen fixen Kostenzuschuss. Vor der zweiten Sitzung ist eine ärztliche Untersuchung nötig, ab der elften Sitzung eine Bewilligung. Seit 2026 gibt es außerdem klinisch-psychologische Behandlung auf Kassenkosten für Versicherte von ÖGK, SVS und BVAEB. Die Anmeldung läuft über die Servicestelle psyhelp unter 0800 10 02 03.";

const Q_116117: Quelle = { text: "Psychotherapie: Wie komme ich an einen Termin? 116117.de (KBV)", url: "https://www.116117.de/de/psychotherapie.php" };
const Q_OEGK: Quelle = { text: "Psychische Gesundheit: Psychotherapie, Kostenzuschuss. Österreichische Gesundheitskasse", url: "https://oegk.at/psyche" };
const Q_OESTERREICH: Quelle = { text: "Psychosoziale Gesundheit: psyhelp und Hilfsangebote. oesterreich.gv.at", url: "https://www.oesterreich.gv.at/de/themen/hilfe_und_finanzielle_unterstuetzung_erhalten/2/psychosoziale-gesundheit" };
const Q_PSYHELP: Quelle = { text: "Klinisch-psychologische Behandlung ab sofort kostenlos (Bericht vom 28.01.2026). vienna.at", url: "https://www.vienna.at/klinisch-psychologische-behandlung-ab-sofort-kostenlos/9952946" };
export const ZUGANG = { de: ZUGANG_DE, at: ZUGANG_AT, quellen: [Q_116117, Q_OEGK, Q_OESTERREICH, Q_PSYHELP] as Quelle[] };

const Q_NVL: Quelle = { text: "Patientenleitlinie Depression, Version 3 (2024). Nationale VersorgungsLeitlinien", url: "https://www.leitlinien.de/themen/depression/patientenleitlinie/depression-pll_v3_2024.pdf" };
const Q_ANGST_PLL: Quelle = { text: "Patientenleitlinie zur S3-Leitlinie Behandlung von Angststörungen (2022). AWMF", url: "https://register.awmf.org/assets/guidelines/051-028p_S3_Behandlung-von-Angststoerungen_2022-07.pdf" };

export const VERTIEFUNG_1: Record<string, Ergaenzung> = {
  depression: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Viele Menschen beschreiben eine Depression nicht als Traurigkeit, sondern als Leere. Als läge eine graue Schicht über allem. Was früher Freude gemacht hat, fühlt sich fremd an. Duschen, Einkaufen oder eine Nachricht beantworten kostet plötzlich enorme Kraft. Manche merken es zuerst am Körper: Schwere in Armen und Beinen, Erschöpfung trotz Schlaf, kein Appetit.",
        "Oft wird auch das Denken langsamer und dunkler. Gedanken kreisen um Schuld und Versagen, die Zukunft wirkt verschlossen. Viele ziehen sich zurück und sprechen kaum darüber, aus Sorge, als schwach oder „verrückt“ zu gelten. Das macht zusätzlich einsam. Wichtig zu wissen: Diese düstere Sicht gehört zur Erkrankung. Sie ist kein nüchterner Blick auf die Wirklichkeit, und sie verändert sich mit der Behandlung.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Meist gibt es nicht die eine Ursache, sondern mehrere Dinge kommen zusammen. Eine gewisse Verletzlichkeit kann in der Familie liegen. Wer schon einmal eine depressive Phase hatte, ist anfälliger für eine weitere. Dazu können körperliche Erkrankungen, hormonelle Umbrüche, belastende Lebensereignisse oder lang anhaltender Stress kommen.",
        "Umgekehrt gibt es Schutzfaktoren, etwa eine vertrauensvolle Partnerschaft oder eine sichere berufliche Lage. Eine Depression ist deshalb keine Frage von Schuld oder fehlender Willenskraft, genauso wenig wie eine körperliche Erkrankung. Sie entsteht aus einem Zusammenspiel, das niemand bewusst steuert.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Am Anfang steht ein ausführliches Gespräch, in der Hausarztpraxis, bei einer Fachärztin oder einem Facharzt für Psychiatrie oder in einer psychotherapeutischen Praxis. Es geht darum, wie lange die Beschwerden schon bestehen, wie stark sie sind und wie der Alltag aussieht. Wenn nötig, werden körperliche Ursachen untersucht, und eingenommene Medikamente werden erfasst. Danach legt man gemeinsam Ziele fest und entscheidet, welche Behandlung passt. Gerade am Anfang sind regelmäßige, eng getaktete Kontrolltermine vorgesehen.",
        "Medikamente verschreiben dürfen nur Ärztinnen und Ärzte. Antidepressiva wirken nicht sofort: Eine erste Besserung kann sich nach etwa zwei Wochen zeigen, die volle Wirkung tritt meist nach drei bis vier Wochen ein. Auch nach einer Besserung wird die Behandlung in der Regel etwa sechs bis zwölf Monate fortgesetzt, weil ein zu frühes Absetzen einen Rückfall begünstigen kann.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Hilfe zur Selbsthilfe gehört laut Patientenleitlinie zu jeder Behandlung dazu. Dazu zählen gute Selbsthilfebücher, beratende Gespräche und Selbsthilfegruppen. Auch Bewegung ist ein fester Baustein. Es muss kein Sport sein, kleine regelmäßige Schritte zählen.",
        "Für leichte depressive Beschwerden gibt es das kostenlose Online-Programm iFightDepression der Stiftung Deutsche Depressionshilfe. Es besteht aus sechs Workshops und richtet sich an Erwachsene und Jugendliche ab 15 Jahren. Gedacht ist es mit fachlicher Begleitung, etwa durch die Hausärztin oder den Psychotherapeuten. Das gilt für digitale Programme allgemein: Ohne Begleitung wirken sie oft weniger.",
        "Fragen rund um Depression beantwortet in Deutschland das kostenlose Info-Telefon Depression der Deutschen Depressionshilfe unter 0800 33 44 533. Große Entscheidungen, etwa über Beruf oder Beziehung, lassen sich oft besser treffen, wenn es wieder besser geht, denn eine Depression färbt den Blick auf die eigene Lage.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Eine Depression ist einfach eine starke Traurigkeit.", richtig: "Traurigkeit gehört zum Leben und klingt meist wieder ab. Bei einer Depression bleiben Niedergeschlagenheit und Interessenverlust lange bestehen, und auch Antrieb, Schlaf, Denken und Körpergefühl verändern sich." },
      { irrtum: "Wer sich zusammenreißt, kommt da wieder raus.", richtig: "Eine Depression ist keine Frage von Willenskraft oder Schuld. Aufforderungen wie „Reiß dich zusammen“ verstärken eher die Schuldgefühle." },
      { irrtum: "Antidepressiva wirken sofort, oder sie wirken gar nicht.", richtig: "Sie brauchen Zeit. Eine erste Besserung zeigt sich oft nach etwa zwei Wochen, die volle Wirkung meist nach drei bis vier Wochen." },
      { irrtum: "Antidepressiva machen abhängig.", richtig: "Antidepressiva machen nicht abhängig. Absetzen sollte man sie trotzdem nicht auf eigene Faust, sondern in Absprache mit der Ärztin oder dem Arzt." },
    ],
    angehoerige: [
      "Ermutige zu professioneller Hilfe und biete an, einen Termin mit zu vereinbaren oder mitzukommen. Wenn die Person ablehnt, bleib dran: Du kannst auch einfach sagen, dass du dir Sorgen machst, und einen Check-up in der Hausarztpraxis vorschlagen.",
      "Bleib geduldig, auch wenn die Person abweisend reagiert. Schuldgefühle und düstere Gedanken sind Teil der Erkrankung. Es hilft wenig, über sie zu diskutieren.",
      "Verzichte auf gut gemeinte Ratschläge wie „Reiß dich zusammen“ oder „Mach mal Urlaub“. Unterstütze stattdessen jede kleine Eigeninitiative.",
      "Achte auf dich selbst: Pflege eigene Kontakte, kenne deine Grenzen und hol dir Unterstützung, etwa in Angehörigengruppen oder mit dem Online-Programm familiencoach-depression.de.",
      "Nimm lebensmüde Äußerungen immer ernst, sprich sie offen an und hol schnell Hilfe, im Notfall über 144 (AT) oder 112 (DE).",
    ],
    quellen: [
      Q_NVL,
      { text: "Patientenleitlinie Depression: Übersicht. leitlinien.de", url: "https://www.leitlinien.de/themen/depression/patientenleitlinie" },
      { text: "iFightDepression-Tool. Stiftung Deutsche Depressionshilfe und Suizidprävention", url: "https://www.deutsche-depressionshilfe.de/unsere-angebote/fuer-betroffene-und-angehoerige/ifightdepression-tool" },
      { text: "Rat für Angehörige. Stiftung Deutsche Depressionshilfe und Suizidprävention", url: "https://www.deutsche-depressionshilfe.de/depression-infos-und-hilfe/rat-fuer-angehoerige" },
      Q_ANGST_PLL,
    ],
  },

  bipolar: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Menschen mit einer bipolaren Erkrankung beschreiben oft, dass sie ohne erkennbaren Grund von einem Extrem ins andere geraten. In einer gehobenen Phase fühlt sich zunächst vieles großartig an. Die Gedanken sind schnell, Ideen sprudeln, Schlaf scheint kaum nötig. Manche werden aber auch gereizt und ungeduldig mit anderen. Pläne werden größer, Geld wird schneller ausgegeben, der Kalender füllt sich. Wer mittendrin steckt, erlebt das oft gar nicht als Problem. Das Umfeld bemerkt die Veränderung meist früher.",
        "Auf eine solche Zeit folgt oft eine depressive Phase, mit Müdigkeit, Rückzug und Grübeln, manchmal auch mit Scham über das, was vorher passiert ist. Manchmal mischen sich beide Zustände: innere Getriebenheit und tiefe Niedergeschlagenheit zugleich. Solche Mischzustände sind besonders belastend und gefährlich. Zwischen den Phasen können aber auch Jahre liegen, in denen es Menschen ganz gut geht.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Die Veranlagung spielt bei der bipolaren Erkrankung eine große Rolle. In Familien von Betroffenen tritt sie gehäuft auf. Es ist aber keine klassische Erbkrankheit: Viele Gene tragen jeweils ein wenig bei. Im Gehirn scheint das Gleichgewicht mehrerer Botenstoffe verändert zu sein.",
        "Ob und wann sich die Erkrankung zeigt, hängt auch von Belastungen ab. Fachleute nutzen dafür das Vulnerabilitäts-Stress-Modell. Gemeint ist: Eine angeborene oder erworbene Verletzlichkeit trifft auf Auslöser wie Stress, belastende Lebensereignisse, zu wenig Schlaf, Alkohol oder Drogen. Auch körperliche Erkrankungen, etwa der Schilddrüse, und manche Medikamente können Stimmungsschwankungen auslösen. Deshalb gehört eine körperliche Untersuchung dazu. Niemand verursacht diese Erkrankung durch eigenes Fehlverhalten.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Die Diagnose stellen in der Regel Fachärztinnen und Fachärzte für Psychiatrie oder Neurologie. Sie fragen ausführlich nach der Lebensgeschichte, nach früheren Phasen und danach, ob ähnliche Erkrankungen in der Familie vorkommen. Dazu kommt eine körperliche Untersuchung. Es kann helfen, wenn Angehörige mit Einverständnis ihre Beobachtungen schildern, denn gehobene Phasen werden von innen oft anders erlebt als von außen.",
        "Die Behandlung hat zwei Teile. In der Akutbehandlung geht es darum, die aktuelle Phase zu beenden und den Leidensdruck zu senken. Danach folgt die Vorbeugung neuer Phasen, Phasenprophylaxe genannt. Stimmungsstabilisierende Medikamente sind dabei meist zentral. Weil die Veranlagung bleibt, ist die Behandlung in der Regel langfristig, oft lebenslang angelegt. Die Medikamente werden aber auf das Maß angepasst, das für Stabilität nötig ist.",
        "Psychoedukation, also gut verständliche Information über die Erkrankung, und kognitive Verhaltenstherapie haben sich bewährt. Auch Familientherapie gilt als wirksam. Ziel ist, mit der Erkrankung leben zu lernen und beginnende Phasen früh zu erkennen. Bei früher Erkennung und passender Behandlung lassen sich neue Phasen oft hinauszögern oder vermeiden.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Viele Menschen mit bipolarer Erkrankung lernen mit der Zeit ihre persönlichen Frühwarnzeichen kennen. Bei manchen ist es weniger Schlafbedürfnis, bei anderen eine immer längere Liste von Plänen oder ungewohnt hohe Ausgaben. Es lohnt sich, die eigenen Zeichen gemeinsam mit Behandelnden und Vertrauenspersonen aufzuschreiben.",
        "Ein Krisenplan hält fest, wen man bei einer beginnenden Phase anruft, welche Klinik erreichbar ist, was für den Notfall mit der Ärztin oder dem Arzt vereinbart wurde und welche Warnzeichen gelten. Er entsteht am besten in einer stabilen Zeit, zusammen mit den Menschen, die darin vorkommen.",
        "Feste Schlafens- und Essenszeiten geben dem inneren Rhythmus Halt. Bei ersten Anzeichen einer gehobenen Phase hilft es, Reize zu verringern, also weniger Termine und weniger Trubel, Aufgaben abzugeben und bewusst zur Ruhe zu kommen. Alkohol und Drogen können die Stimmung zusätzlich durcheinanderbringen.",
        "Selbsthilfegruppen bieten Information und Austausch, auch für Angehörige. In Deutschland findet man Gruppen über die Datenbank der NAKOS und über die Deutsche Gesellschaft für Bipolare Störungen (DGBS).",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Bipolar heißt einfach launisch.", richtig: "Gemeint sind ausgeprägte Phasen, die den Alltag stark verändern und länger anhalten. Zwischen den Phasen kann es lange stabile Zeiten geben. Alltägliche Stimmungsschwankungen sind etwas anderes." },
      { irrtum: "In einer Manie geht es Menschen einfach richtig gut.", richtig: "Gehobene Phasen gehen oft mit Gereiztheit, riskanten Entscheidungen und Folgen für Beziehungen, Arbeit und Finanzen einher. In Mischzuständen ist das Risiko für Suizidgedanken besonders hoch." },
      { irrtum: "Wenn es mir gut geht, brauche ich keine Medikamente mehr.", richtig: "Die vorbeugende Behandlung soll gerade in stabilen Zeiten neue Phasen verhindern. Änderungen sollten immer gemeinsam mit der Ärztin oder dem Arzt besprochen werden." },
      { irrtum: "Die Erkrankung ist vererbt, da kann man nichts machen.", richtig: "Die Veranlagung erhöht das Risiko, bestimmt aber nicht den Verlauf. Behandlung, Selbstbeobachtung und ein stabiler Rhythmus können neue Phasen hinauszögern oder verhindern." },
    ],
    angehoerige: [
      "Informiere dich über die Erkrankung. Psychoedukation und Familientherapie richten sich ausdrücklich auch an Angehörige.",
      "Erstellt einen Krisenplan gemeinsam in einer stabilen Zeit. Haltet darin auch fest, wie du beobachtete Frühwarnzeichen ansprechen darfst und was dann passieren soll.",
      "Wisse, dass die Behandlung meist langfristig angelegt ist. Das ist kein Zeichen, dass sie nicht wirkt, sondern Teil der Vorbeugung.",
      "Such dir eigene Unterstützung, etwa in Selbsthilfegruppen oder Beratungsangeboten für Angehörige. Eine bipolare Erkrankung kann das Familienleben stark belasten.",
      "Nimm Äußerungen über Suizid immer ernst und hol Hilfe, im Notfall über 144 (AT) oder 112 (DE).",
    ],
    quellen: [
      { text: "Bipolare Störung. Deutsche Gesellschaft für Bipolare Störungen (DGBS)", url: "https://dgbs.de/bipolare-stoerung" },
      { text: "Therapie der Bipolaren Störung. DGBS", url: "https://dgbs.de/bipolare-stoerung/therapie" },
      { text: "Ursachen der Bipolaren Störung. DGBS", url: "https://dgbs.de/bipolare-stoerung/ursachen" },
      { text: "Pfennig, Stolpp u. a. (2010): Was tun bei Vorboten der Manie? Workshop, DGBS-Jahrestagung", url: "https://dgbs.de/fileadmin/cust/jahrestagung/2010/DGBS_JT2010_Pfennig_Stolpp_Freitag_Workshop_1_Was_tun_bei_Vorboten_der_Manie.pdf" },
      { text: "Bipolare Störung. gesund.bund.de", url: "https://gesund.bund.de/bipolare-stoerung" },
      { text: "Möhlenkamp (2006): Rezension zu Meyer, Manisch-depressiv? Was Betroffene und Angehörige wissen sollten. Deutsches Ärzteblatt PP", url: "https://www.aerzteblatt.de/archiv/manisch-depressiv-was-betroffene-und-angehoerige-wissen-sollten-19b9fcfa-b09e-4b49-9f0b-17616823c181" },
    ],
  },

  angst: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Viele beschreiben ihre erste Panikattacke als einen der schlimmsten Momente ihres Lebens. Mitten im Supermarkt oder im Bus rast plötzlich das Herz, die Luft wird knapp, die Hände zittern. Innerhalb von Minuten wächst die Gewissheit, gleich umzufallen, die Kontrolle zu verlieren oder zu sterben. Danach bleibt oft die Angst vor der nächsten Attacke. Orte, an denen es passiert ist, werden gemieden, und das Leben wird nach und nach enger.",
        "Andere erleben Angst leiser, aber dauerhaft: ein ständiges inneres Angespanntsein, Sorgen, die von einem Thema zum nächsten springen, schlechter Schlaf, wenig Konzentration. Oft lässt sich gar nicht genau sagen, wovor man Angst hat. Bei sozialer Angst kreist alles um den Blick der anderen, um Erröten, Zittern oder darum, etwas Falsches zu sagen. Von außen sieht man davon oft wenig. Viele schämen sich, weil sie spüren, dass die Angst größer ist als die Gefahr.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Auch bei Angsterkrankungen wirken mehrere Dinge zusammen. Vermutlich spielen Erbfaktoren eine Rolle, ebenso Veränderungen im Botenstoff Serotonin. Dazu kommen Erfahrungen: belastende Erlebnisse in der Kindheit, der Erziehungsstil, Verluste, Trennungen oder starker Stress in Familie und Beruf. Auch andere psychische oder körperliche Erkrankungen können Ängste begünstigen.",
        "Aufrechterhalten wird Angst oft durch Denkmuster und durch Vermeiden. Wer gefürchtete Situationen meidet, ist kurz erleichtert, macht aber nie die Erfahrung, dass sie zu bewältigen wären. So kann die Angst mit der Zeit wachsen. Das ist kein Zeichen von Schwäche, sondern ein sehr menschlicher Lernvorgang, und genau dort setzt die Behandlung an.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Am Anfang steht ein ausführliches Gespräch, oft ergänzt durch Fragebögen. Weil Herzrasen oder Atemnot auch körperliche Gründe haben können, gehört eine körperliche Untersuchung dazu, meist mit Blutwerten und EKG. Gefragt wird auch nach Niedergeschlagenheit oder Suchtproblemen, die häufig mit Angst einhergehen. Eine vertraute Person darf zu den Gesprächen mitkommen.",
        "Empfohlen wird vor allem kognitive Verhaltenstherapie, außerdem psychodynamische Therapie und in bestimmten Fällen systemische Therapie. In der Verhaltenstherapie prüft man belastende Gedanken und übt, gefürchtete Situationen gezielt aufzusuchen, gut vorbereitet und Schritt für Schritt. Diese Übungen heißen Exposition. Sie sind anstrengend, aber oft der Punkt, an dem sich am meisten verändert. Eine schnelle Heilung ist nicht zu erwarten, eine gute Behandlung bessert die Beschwerden aber oft schon nach einigen Wochen spürbar.",
        "Bestimmte Antidepressiva können zusätzlich helfen. Sie brauchen manchmal Wochen, bis sie wirken, und in den ersten Tagen kann die Unruhe sogar zunehmen. Sie machen nicht abhängig. Beruhigungsmittel aus der Gruppe der Benzodiazepine werden zur Behandlung von Angststörungen nicht empfohlen, weil bei längerer Einnahme eine Abhängigkeit droht.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Ausdauersport kann Angstbeschwerden lindern. Die Patientenleitlinie nennt als Beispiel regelmäßiges Laufen, etwa dreimal pro Woche. Allein reicht Sport aber meist nicht aus.",
        "Entspannungsverfahren wie die Progressive Muskelentspannung, bei der man Muskelgruppen nacheinander an- und entspannt, können hilfreich sein. Bei manchen Menschen verstärken sie die Angst allerdings. Dann ist es in Ordnung, etwas anderes zu probieren.",
        "Internetbasierte Programme auf Grundlage der Verhaltenstherapie können die Wartezeit bis zum Therapiebeginn überbrücken oder eine Behandlung begleiten. Eine Behandlung ersetzen sie nicht. Selbsthilfegruppen werden in der Leitlinie ausdrücklich empfohlen.",
        "Jede Situation, der man trotz Angst nicht ausweicht, ist ein Schritt aus dem Kreislauf des Vermeidens. Wie groß diese Schritte sein sollen, lässt sich am besten mit der Therapeutin oder dem Therapeuten planen.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Menschen mit Angsterkrankungen stellen sich nur an.", richtig: "Angsterkrankungen sind ernsthafte Erkrankungen und keine Charakterschwäche. Die Angst ist echt, auch wenn die Gefahr von außen klein wirkt." },
      { irrtum: "Das geht von allein wieder weg.", richtig: "Angststörungen bilden sich nur selten von selbst zurück. Eine Ausnahme sind einfache Ängste bei Kindern. Mit Behandlung sind die Aussichten gut." },
      { irrtum: "Alle Medikamente gegen Angst machen abhängig.", richtig: "Antidepressiva machen nicht abhängig. Bei Benzodiazepinen besteht bei längerer Einnahme die Gefahr einer Abhängigkeit, deshalb werden sie dafür nicht empfohlen." },
      { irrtum: "Alternative Mittel wie Homöopathie helfen gut gegen Angst.", richtig: "Für Homöopathie gibt es laut Leitlinie keine Belege für eine Wirksamkeit bei Angststörungen." },
    ],
    angehoerige: [
      "Nimm die Angst ernst, auch wenn du sie nicht nachvollziehen kannst. Sätze wie „Stell dich nicht so an“ verstärken Scham.",
      "Biete an, zu einem ärztlichen Gespräch oder zur ersten Therapiestunde mitzukommen.",
      "Ermutige zu kleinen Schritten, statt alles abzunehmen, was Angst macht. Wie du die Übungen aus der Therapie am besten unterstützt, lässt sich mit Einverständnis gemeinsam mit der Therapeutin oder dem Therapeuten besprechen.",
      "Auch für Angehörige gibt es eigene Gruppen. Dort findest du Austausch und Entlastung.",
    ],
    quellen: [
      Q_ANGST_PLL,
      { text: "Generalisierte Angststörung. gesund.bund.de", url: "https://gesund.bund.de/generalisierte-angststoerung" },
    ],
  },

  zwang: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Menschen mit Zwängen erzählen oft von einem Gedanken, der sich festhakt. „Was, wenn ich den Herd nicht ausgemacht habe?“ „Was, wenn an meinen Händen etwas ist und ich jemanden anstecke?“ Der Gedanke kommt mit großer Anspannung, manchmal auch mit Ekel, Wut oder Schuld. Ein Ritual verschafft kurz Erleichterung: noch einmal kontrollieren, noch einmal waschen, zählen, eine bestimmte Reihenfolge einhalten, jemanden fragen, ob alles in Ordnung ist. Doch die Erleichterung hält nicht lange, und der Zweifel kommt zurück.",
        "Viele wissen genau, dass ihre Befürchtungen übertrieben sind, und fühlen sich trotzdem gefangen. Rituale können Stunden am Tag kosten, die Haut wird vom vielen Waschen wund, Termine werden verpasst. Besonders quälend sind aufdrängende Gedanken, die den eigenen Werten widersprechen, etwa durch eigenes Handeln ein Unglück auszulösen. Weil sich das alles schwer erklären lässt, verheimlichen viele ihre Zwänge lange, auch vor engen Menschen.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Zwänge entstehen aus einem Zusammenspiel. Sie treten in Familien gehäuft auf, ein einzelnes verantwortliches Gen wurde aber nicht gefunden. Im Gehirn scheinen bestimmte Regelkreise überaktiv zu sein, Fachleute sprechen anschaulich von einer Zwangsschleife. Bei etwa der Hälfte der Betroffenen finden sich belastende Lebensereignisse, und Stress kann Zwänge verstärken.",
        "Aufrechterhalten werden Zwänge durch Lernerfahrungen. Das Ritual senkt kurzfristig die Angst. Dadurch lernt das Gehirn, dass es nötig war, und der Drang meldet sich beim nächsten Mal wieder. Auch gut gemeinte Hilfe kann das unbeabsichtigt verstärken, etwa wenn eine Familie ihren Alltag nach den Zwängen ausrichtet. Das ist niemandes Schuld, aber ein wichtiger Ansatzpunkt für die Behandlung.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Ein erstes Gespräch kann in einer psychotherapeutischen oder psychiatrischen Praxis stattfinden. Es hilft, offen zu erzählen, auch über Gedanken, die peinlich oder erschreckend wirken. Fachleute kennen sie. Die Deutsche Gesellschaft Zwangserkrankungen (DGZ) bietet eine Suche nach Therapeutinnen und Therapeuten mit Erfahrung bei Zwängen an.",
        "Mittel der ersten Wahl ist kognitive Verhaltenstherapie mit Exposition und Reaktionsmanagement. Man stellt sich der auslösenden Situation, verzichtet auf das Ritual und hält die Anspannung aus, bis sie von selbst nachlässt. Die ersten Übungen finden gemeinsam mit der Therapeutin oder dem Therapeuten statt, oft auch zu Hause, wo die Zwänge am stärksten sind. Später übt man allein weiter. Wirksam ist das vor allem, wenn regelmäßig und konsequent geübt wird. Behandelt wird ambulant, per Video, in einer Tagesklinik oder stationär. Eine übliche ambulante Therapie dauert oft viele Monate bis ein bis zwei Jahre, intensivere Formen wirken schneller.",
        "Bestimmte Antidepressiva können Zwänge lindern. Ihre Wirkung setzt frühestens nach etwa vier Wochen ein und ist meist nach sechs bis acht Wochen deutlich. Bei gutem Ansprechen wird empfohlen, sie ein bis zwei Jahre weiter einzunehmen und dann sehr langsam auszuschleichen. Allein eingesetzt kommen sie vor allem in Frage, wenn Verhaltenstherapie nicht ausreicht, nicht verfügbar ist oder abgelehnt wird. Beruhigungsmittel werden nicht empfohlen.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Wartezeiten auf einen Therapieplatz sind häufig. Selbsthilfe und Online-Angebote können die Zeit überbrücken. Die DGZ bietet eine Liste von Selbsthilfegruppen in Deutschland und Online-Gruppen, auch für Angehörige. Telefonisch ist sie unter 040 689 13 700 erreichbar.",
        "Sport wird empfohlen, weil er Angst und gedrückte Stimmung günstig beeinflusst. Hilfreich ist außerdem, Rituale nicht zu verstecken, sondern sie in der Behandlung offen zu benennen. Je genauer die Therapeutin oder der Therapeut sie kennt, desto gezielter kann geübt werden.",
        "Nach einer erfolgreichen Behandlung lohnt sich ein Plan gegen Rückfälle: Welche frühen Warnzeichen gibt es, und welche Übungen helfen dann? Rückfälle sind häufig und kein Scheitern. Mit einem solchen Plan lassen sie sich früher erkennen.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Zwang heißt, besonders ordentlich oder sauber zu sein.", richtig: "Eine Zwangserkrankung ist keine Charaktereigenschaft. Sie geht mit großer Anspannung und Angst einher, kostet viel Zeit und zeigt sich in vielen Formen, etwa als Kontrollieren, Zählen, Fragen oder Sammeln." },
      { irrtum: "Nachgeben sorgt für Ruhe.", richtig: "Kurzfristig lässt die Anspannung nach. Langfristig stärkt jedes ausgeführte Ritual den Zwang. Deshalb übt man in der Therapie, auf Rituale zu verzichten." },
      { irrtum: "Menschen mit Zwängen werden irgendwann verrückt.", richtig: "Diese Befürchtung ist in den allermeisten Fällen unbegründet. Betroffene erkennen meist selbst, dass ihre Gedanken übertrieben sind." },
      { irrtum: "Das verschwindet schon, wenn man es nicht beachtet.", richtig: "Ohne Behandlung werden Zwänge oft nicht besser. Mit Verhaltenstherapie sind die Aussichten deutlich besser." },
    ],
    angehoerige: [
      "Ermutige zu professioneller Hilfe. Sich mit den Zwängen zu verstecken, macht es auf Dauer schwerer.",
      "Nimm die Not ernst, lass dich aber nicht vom Zwang bestimmen. Mitmachen bei Ritualen oder ständige Rückversicherungen geben kurzfristig Ruhe, stärken den Zwang aber. Am besten sprecht ihr gemeinsam mit der Therapie ab, wie du reagierst.",
      "Stell Rituale nicht frontal in Frage und vermeide Kritik. Das kann überfordern und Entscheidungen noch schwerer machen.",
      "Denk an die Scham. Ein offenes, nicht verurteilendes Klima macht es leichter, über Zwänge zu sprechen.",
      "Hol dir selbst Unterstützung. Die DGZ bietet Online-Gruppen speziell für Angehörige an.",
    ],
    quellen: [
      { text: "Patientenleitlinie zur S3-Leitlinie Zwangsstörungen (2026). AWMF", url: "https://register.awmf.org/assets/guidelines/038_017p1_S3_Zwangsstoerungen_2026-04.pdf" },
      { text: "Deutsche Gesellschaft Zwangserkrankungen (DGZ)", url: "https://www.zwaenge.de" },
      { text: "Tipps für Angehörige. DGZ", url: "https://www.zwaenge.de/betroffene_und_angehorige/tipps/" },
    ],
  },

  trauer: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Trauer kommt oft in Wellen. Es gibt ruhigere Momente, und dann reißt ein Lied, ein Geruch oder ein Jahrestag alles wieder auf. Das ist normal, auch noch nach Jahren. Bei einer anhaltenden Trauer ist es anders. Menschen beschreiben, dass die Zeit stehen geblieben ist. Die Sehnsucht nach dem verstorbenen Menschen ist ständig da, Tag für Tag, und lässt kaum Raum für anderes.",
        "Manche können den Tod auch nach langer Zeit nicht wirklich fassen. Schuldgefühle tauchen auf: „Ich hätte es verhindern können.“ Freude fühlt sich wie Verrat an. Viele meiden Orte, die erinnern, oder grübeln stundenlang über das Geschehene. Und das Umfeld, das anfangs Anteil genommen hat, erwartet irgendwann, dass es „wieder geht“. Das macht die Trauer zusätzlich einsam.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Ob Trauer mit der Zeit leichter wird oder festgefahren bleibt, hängt von vielem ab. Die Umstände des Todes spielen eine Rolle: Nach einem plötzlichen, unerwarteten Tod, etwa durch einen Unfall oder Suizid, kommt anhaltende Trauer häufiger vor. Auch wie nah die Beziehung war und welche Bedeutung der Mensch im eigenen Leben hatte, prägt die Trauer.",
        "Dazu kommt, wie man mit dem Verlust umgeht. Gesunde Trauer ist eine Art Pendeln, zwischen der Auseinandersetzung mit dem Verlust und dem Weiterleben im Alltag. Wer Gedanken an den verstorbenen Menschen ganz vermeidet, aber auch wer ununterbrochen grübelt, kommt schwerer weiter. Manche Gedanken halten fest, etwa: „Wenn ich weiterlebe, verrate ich meine Liebe.“ Das sind keine Fehler, sondern verständliche Versuche, mit einem großen Schmerz umzugehen. Kultur und Religion prägen zudem, wie Trauer sich zeigt und was als übliche Trauerzeit gilt.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Trauer an sich braucht keine Behandlung. Oft hilft Begleitung: Trauergruppen, Trauercafés oder Trauerbegleitung. Wenn die Belastung auch nach etwa einem halben Jahr nicht abnimmt und der Alltag kaum gelingt, kann psychotherapeutische Unterstützung sinnvoll sein. Ansprechpersonen sind die Hausarztpraxis, Psychiaterinnen und Psychiater sowie Psychotherapeutinnen und Psychotherapeuten.",
        "In der Therapie geht es nicht darum, den verstorbenen Menschen loszulassen oder zu vergessen. Ziel ist, den Verlust annehmen zu können und den Trennungsschmerz zu verringern, während die innere Verbindung erhalten bleibt. Dazu gehört oft, über die Umstände des Todes und über Schuldgefühle zu sprechen. Entwickelt sich zusätzlich eine Depression, wird diese eigens behandelt, je nach Lage auch mit Medikamenten.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Trauer zulassen, aber nicht nur trauern. Das klingt widersprüchlich, beschreibt aber gut, was hilft: Raum für Erinnerungen und Tränen und daneben Freundschaften, angenehme Aktivitäten und den Alltag weiter pflegen.",
        "Hilfreich ist eine achtsame, annehmende Haltung gegenüber den eigenen Gefühlen. Auch Orte, die an den verstorbenen Menschen erinnern, müssen nicht für immer gemieden werden. Manchen gibt ein Gedanke Halt wie: „Sie hätte mir gewünscht, dass ich glücklich weiterlebe.“",
        "Für schwere Tage wie Jahrestage oder Feiertage kann es helfen, vorher zu überlegen, mit wem man sie verbringt. In Deutschland vermittelt unter anderem der Malteser Hilfsdienst Trauergruppen, Trauercafés und Trauerbegleitung. In einer akuten Krise ist die Telefonseelsorge rund um die Uhr erreichbar.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Trauer verläuft in festen Phasen und ist nach einem Jahr vorbei.", richtig: "Trauer folgt keinem festen Zeitplan. Was als übliche Trauerzeit gilt, unterscheidet sich von Mensch zu Mensch und von Kultur zu Kultur." },
      { irrtum: "Wer wieder Freude hat, vergisst den verstorbenen Menschen.", richtig: "Weiterleben und Verbundenheit schließen sich nicht aus. Auch in der Therapie soll die innere Bindung erhalten bleiben." },
      { irrtum: "Am besten denkt man gar nicht mehr daran.", richtig: "Ganz zu vermeiden erschwert die Verarbeitung, genauso wie ständiges Grübeln. Hilfreich ist ein Wechsel zwischen beidem." },
      { irrtum: "Starke Trauer ist eine Krankheit.", richtig: "Trauer ist eine natürliche Antwort auf Verlust. Die Diagnose der anhaltenden Trauerstörung ist nur für sehr belastende, festgefahrene Verläufe gedacht." },
    ],
    angehoerige: [
      "Bleib da, auch nach Monaten. Gerade wenn die erste Anteilnahme abklingt, ist Kontakt besonders wertvoll.",
      "Weiche nicht aus, wenn die trauernde Person über den verstorbenen Menschen sprechen möchte. Zuhören hilft oft mehr als Trost.",
      "Gib keinen Zeitplan vor. Sätze wie „Jetzt muss es doch langsam gehen“ setzen unter Druck.",
      "Biete konkrete Hilfe im Alltag an und lade zu gemeinsamen Aktivitäten ein, ohne zu drängen.",
      "Achte auf dich selbst, vor allem wenn du selbst mittrauerst. Bei Hoffnungslosigkeit oder Suizidgedanken hol Hilfe, im Notfall über 144 (AT) oder 112 (DE).",
    ],
    quellen: [
      { text: "Wenn ein geliebter Mensch stirbt: Mit Trauer umgehen. gesund.bund.de", url: "https://gesund.bund.de/mit-trauer-umgehen" },
    ],
  },

  anpassung: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Nach einer Trennung, einer Kündigung oder einer schweren Diagnose beschreiben viele, dass sich der Boden unter den Füßen verschoben hat. Die Gedanken kehren immer wieder zu dem Ereignis zurück, beim Einschlafen, beim Aufwachen, mitten im Gespräch. Man fragt sich, wie es weitergehen soll, und findet keine Antwort.",
        "Dazu kommen Gefühle, die schwer zu sortieren sind: Niedergeschlagenheit, Unruhe, Angst, manchmal Gereiztheit. Dinge, die früher selbstverständlich waren, gelingen nicht mehr, ob Arbeit, Haushalt oder Treffen mit Freunden. Viele sind enttäuscht von sich, weil sie meinen, sie müssten längst darüber hinweg sein. Dabei ist die Reaktion verständlich. Sie ist nur stärker oder hält länger an, als es guttut.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Auslöser ist immer eine erkennbare Belastung. Das kann ein einzelnes Ereignis sein, mehrere hintereinander oder eine dauernde Belastung, etwa die Pflege eines schwer kranken Angehörigen. Auch an sich erfreuliche Veränderungen wie Elternwerden können überfordern. Manchmal trifft eine Belastung eine ganze Familie oder Gemeinschaft.",
        "Wie stark jemand reagiert, hängt vom Zusammenspiel ab: Wie viele Belastungen kommen gleichzeitig? Wie sicher ist die Lebenslage? Gibt es Menschen, die stützen? Auch die eigene Gesundheit und die Kraft, die gerade zur Verfügung steht, spielen mit. Wer wenig Rückhalt hat, braucht oft mehr Zeit. Das ist kein persönliches Versagen.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Oft klingt eine Anpassungsstörung mit der Zeit ab, meist innerhalb von etwa sechs Monaten nach dem Ende der Belastung, häufig mit Unterstützung von Familie und Freunden. Manche Verläufe dauern aber länger.",
        "Ein erstes Gespräch kann in der Hausarztpraxis, bei Klinischen Psychologinnen und Psychologen oder in einer psychotherapeutischen Praxis stattfinden. Am Anfang geht es meist um Entlastung: Druck, Schuldgefühle und Ängste dürfen ausgesprochen werden. Weil Krisen sich zuspitzen können, wird auch behutsam nach Gedanken an Suizid gefragt. Danach geht es darum, die Lage zu ordnen und Wege zu finden, mit der Veränderung umzugehen. Häufig genügt eine eher kurze Begleitung, etwa mit Methoden aus der Krisenintervention oder der Verhaltenstherapie.",
        "Medikamente stehen nicht im Vordergrund, ihre Wirksamkeit bei Anpassungsstörungen ist wenig untersucht. Manchmal werden vorübergehend Medikamente gegen Schlafprobleme, Angst oder depressive Beschwerden eingesetzt.",
        "In Österreich arbeiten Klinische Psychologinnen und Psychologen ausdrücklich auch mit Menschen in Lebenskrisen. Das passt gut zu dieser Situation.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Den Körper nicht vergessen: regelmäßig essen, sich bewegen, ausreichend schlafen. Beruhigungsmittel und Alkohol, wenn überhaupt, nur sehr zurückhaltend.",
        "Ein gewohnter Tagesablauf gibt Halt, gerade wenn vieles im Umbruch ist. Hobbys und angenehme Dinge behalten ihren Platz, auch wenn die Lust fehlt. Kontakt zu Familie und Freunden halten hilft, Nachrichten eher begrenzen.",
        "Bei anhaltenden Bedrohungen, etwa Gewalt in der Partnerschaft, steht die eigene Sicherheit an erster Stelle. Dafür gibt es spezialisierte Beratung, die dabei hilft, sich zu schützen.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Wer an einer Lebenskrise so leidet, ist einfach nicht belastbar.", richtig: "Eine Anpassungsstörung ist eine Reaktion auf eine echte Belastung. Sie kann jeden Menschen treffen, besonders wenn mehrere Belastungen zusammenkommen." },
      { irrtum: "Das ist doch keine richtige Erkrankung.", richtig: "Die Belastung kann sehr groß sein, und das Risiko für Suizidgedanken ist erhöht. Es lohnt sich, sie ernst zu nehmen und Unterstützung zu suchen." },
      { irrtum: "Das vergeht immer von allein.", richtig: "Oft klingt die Reaktion mit der Zeit ab. Manche Verläufe dauern aber länger als ein halbes Jahr, und frühe Unterstützung kann den Weg erleichtern." },
    ],
    angehoerige: [
      "Hör zu, ohne gleich Lösungen anzubieten. Oft hilft es schon, dass jemand die Belastung anerkennt.",
      "Biete praktische Hilfe an, etwa bei Behördenwegen, Kinderbetreuung oder Erledigungen. Das schafft Luft für das Wesentliche.",
      "Lade zu gewohnten gemeinsamen Aktivitäten ein. Ein Stück Normalität gibt Halt.",
      "Wenn du Hoffnungslosigkeit bemerkst, sprich sie offen an und hol Hilfe, im Notfall über 144 (AT) oder 112 (DE).",
      "Achte auch auf deine eigenen Kräfte, besonders wenn die Krise dich selbst mitbetrifft.",
    ],
    quellen: [
      { text: "Anpassungsstörung. MSD Manual, Ausgabe für Patienten", url: "https://www.msdmanuals.com/de-de/heim/psychische-gesundheitsstörungen/angststörungen-und-stressbezogene-erkrankungen/anpassungsstörung" },
      { text: "Anpassungsstörungen: Wenig beachtet und kaum untersucht (2007). Deutsches Ärzteblatt PP", url: "https://www.aerzteblatt.de/archiv/55204/Anpassungsstoerungen-Wenig-beachtet-und-kaum-untersucht" },
      { text: "Klinische Psychologie. gesundheit.gv.at", url: "https://www.gesundheit.gv.at/gesundheitsleistungen/berufe/therapie-beratung/klinische-psychologie" },
    ],
  },

  koerperbeschwerden: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Viele Menschen mit belastenden Körperbeschwerden haben einen langen Weg hinter sich. Rückenschmerzen, Magen-Darm-Probleme, Herzklopfen oder Erschöpfung sind echt und spürbar, oft jeden Tag. Untersuchung folgt auf Untersuchung, und die Befunde sind unauffällig. Statt Erleichterung bleibt Frust. Sätze wie „Sie haben nichts“ oder „Das bilden Sie sich ein“ treffen tief, denn die Beschwerden sind ja da.",
        "Mit der Zeit kreisen die Gedanken immer mehr um den Körper. Jedes Ziehen wird geprüft, Aktivitäten werden aus Sorge vor einer Verschlechterung eingeschränkt, Pläne abgesagt. Manche suchen stundenlang im Internet nach Erklärungen und fühlen sich danach noch unsicherer. Das Leben wird enger, und gleichzeitig fühlen sich viele mit ihren Beschwerden allein und nicht ernst genommen.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Bei funktionellen Beschwerden sind die Organe meist intakt, aber ihr Zusammenspiel ist gestört. Die Patientenleitlinie vergleicht das mit einem verstimmten Klavier: Alle Teile sind in Ordnung, und trotzdem klingt es nicht richtig. Körper und Psyche sind über Hormone und das unwillkürliche Nervensystem eng verbunden. Deshalb wirken Stress und Sorgen bis in die Organe hinein.",
        "Meist wirken mehrere Dinge zusammen: eine eigene Empfindsamkeit, Stress, frühere Erkrankungen und Sorgen um die Gesundheit. Aufmerksamkeit und Verhalten können die Beschwerden dann verstärken. Wer aus Angst vor Schmerzen viel schont, verliert Kraft und Ausdauer, und schon kleine Belastungen fallen schwerer. So entsteht ein Kreislauf, für den niemand etwas kann, aus dem man aber wieder herausfinden kann.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Am besten beginnt alles bei einer vertrauten Hausärztin oder einem vertrauten Hausarzt. Sie oder er behält den Überblick, koordiniert nötige Facharzttermine und wirkt wie ein Lotse. Grundlage sind ein ausführliches Gespräch und eine gründliche körperliche Untersuchung. Weitere Tests werden gezielt eingesetzt, denn unnötige Untersuchungen können auch schaden. Oft ist ein „wachsames Offenhalten“ der richtige Weg: Man beobachtet den Verlauf gemeinsam, statt bei jeder Schwankung neu zu suchen.",
        "Rund zwei Drittel der Menschen mit funktionellen Beschwerden geht es mit einfachen Maßnahmen schon bald besser. Bei einem Teil bleiben die Beschwerden hartnäckiger. Die Behandlung beginnt mit Information und Selbsthilfe. Für die meisten steht dabei schrittweise mehr körperliche Aktivität im Mittelpunkt. Bei stärkeren Verläufen wird Psychotherapie empfohlen. Das heißt nicht, dass die Beschwerden eingebildet sind, sondern dass Therapie hilft, Kreisläufe zu durchbrechen und besser mit den Beschwerden zu leben. Reicht die ambulante Behandlung nicht aus, gibt es Programme in Kliniken, die mehrere Ansätze verbinden.",
        "Medikamente können manchmal helfen, einen Kreislauf zu unterbrechen. Ihre Wirkung ist aber begrenzt und oft vorübergehend, und sie haben Nebenwirkungen. Starke Schmerzmittel aus der Gruppe der Opioide und Beruhigungsmittel sollten nur sehr begrenzt eingesetzt werden.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "So aktiv bleiben, wie es vernünftig möglich ist, und die Aktivität in kleinen Schritten steigern. Aktivität und Pausen abwechseln. Zu viel Schonung schadet genauso wie Überforderung.",
        "Ein Beschwerdetagebuch kann Zusammenhänge sichtbar machen, etwa mit Stress, Schlaf oder bestimmten Situationen. Es sollte aber nicht dazu führen, den Körper ständig zu beobachten. Ein regelmäßiger Tagesrhythmus, weniger anregende Genussmittel sowie Kontakte und Hobbys tun ebenfalls gut.",
        "Vorsicht mit stundenlanger Suche nach Diagnosen im Internet und mit teuren Angeboten, deren Wirksamkeit nicht belegt ist.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Die Beschwerden sind eingebildet.", richtig: "Die Beschwerden werden wirklich erlebt. Menschen mit funktionellen Beschwerden spielen nichts vor und bilden sich nichts ein." },
      { irrtum: "Wenn alle Befunde unauffällig sind, ist da nichts.", richtig: "Ein unauffälliger Befund heißt nicht, dass die Beschwerden unwichtig sind. Er zeigt vor allem, dass die Organe intakt sind, während ihr Zusammenspiel gestört sein kann." },
      { irrtum: "Bewegung schadet, wenn es wehtut.", richtig: "Aktivität ist in der Regel hilfreich. Schrittweise mehr Bewegung ist für die meisten der wichtigste Baustein der Behandlung." },
      { irrtum: "Wer zur Psychotherapie geschickt wird, gilt als verrückt.", richtig: "Psychotherapie ist ein anerkannter Weg, besser mit den Beschwerden umzugehen. Sie sagt nichts darüber aus, ob die Beschwerden echt sind." },
    ],
    angehoerige: [
      "Nimm die Beschwerden ernst und tu sie nicht als eingebildet ab. Das schafft Vertrauen.",
      "Unterstütze kleine Schritte zu mehr Aktivität, etwa mit gemeinsamen Spaziergängen, statt alles abzunehmen.",
      "Sprich auch über anderes als die Beschwerden. Ständiges Nachfragen kann die Aufmerksamkeit unbeabsichtigt noch stärker auf den Körper lenken.",
      "Biete an, zu Arztterminen mitzukommen, wenn das gewünscht ist.",
      "Achte auf deine eigenen Grenzen. Lange Krankheitsphasen belasten auch das Umfeld.",
    ],
    quellen: [
      { text: "Patientenleitlinie zur S3-Leitlinie Funktionelle Körperbeschwerden (2020). AWMF", url: "https://register.awmf.org/assets/guidelines/051-001p1_S3_Funktionelle_Koerperbeschwerden_2020-01.pdf" },
    ],
  },

  essen: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Viele erzählen, dass es harmlos begann: eine Diät, ein paar Kilo weniger, vielleicht Lob von anderen. Nach und nach nehmen Gedanken an Essen, Gewicht und Figur immer mehr Raum ein. Für manche gibt das Einschränken ein Gefühl von Kontrolle und Stärke, gerade wenn sich anderes im Leben unkontrollierbar anfühlt. Das macht es so schwer, davon zu lassen.",
        "Andere erleben Essanfälle, bei denen sie die Kontrolle verlieren, und danach Scham, Ekel und Schuld. Fast alle verbindet die Heimlichkeit: Mahlzeiten werden vermieden oder versteckt, Ausreden erfunden, und die Angst, die Familie zu enttäuschen, ist groß. Von außen ist eine Essstörung oft lange nicht zu erkennen.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Eine Essstörung hat fast nie nur eine Ursache. Meist sind mehrere Faktoren beteiligt, etwa erbliche Einflüsse, ein geringes Selbstwertgefühl, sehr hohe Ansprüche an sich selbst, belastende Lebensereignisse und der gesellschaftliche Druck, schlank zu sein.",
        "Oft entwickelt sich die Erkrankung schleichend. Was als Versuch beginnt, sich besser zu fühlen oder Kontrolle zu gewinnen, verselbständigt sich mit der Zeit. Niemand sucht sich das aus, und auch Eltern oder Partner tragen daran keine Schuld.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Erste Anlaufstellen sind die Hausarztpraxis, bei Kindern und Jugendlichen die Kinderarztpraxis, eine psychotherapeutische Praxis oder eine Spezialambulanz. Wem dieser Schritt zu groß ist, kann sich zuerst an eine Beratungsstelle wenden. Zu Beginn wird der Körper gründlich untersucht, etwa Gewicht, Kreislauf, Herz, Blut- und Urinwerte. So lassen sich Folgen der Essstörung erkennen und andere Erkrankungen ausschließen.",
        "Kern der Behandlung ist Psychotherapie. Sie kann ambulant, in einer Tagesklinik oder stationär stattfinden, je nach Schwere und körperlichem Zustand. Eine ambulante Therapie umfasst meist 25 bis 50 Sitzungen. Bei Jugendlichen wird die Familie eng einbezogen. Entscheidungen werden gemeinsam getroffen, und wenn die Zusammenarbeit mit der Therapeutin oder dem Therapeuten nicht passt, ist ein Wechsel möglich.",
        "Medikamente spielen bei Essstörungen eine Nebenrolle. Sie kommen vor allem in bestimmten Fällen zum Einsatz, etwa wenn zusätzlich eine Depression oder eine Angststörung besteht.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Angeleitete Selbsthilfe, also die Arbeit mit einem Selbsthilfebuch und regelmäßiger Rückmeldung durch eine Fachperson, hat sich als hilfreich gezeigt, wirkt aber weniger stark als Psychotherapie. Selbsthilfegruppen können eine Behandlung unterstützen, aber nicht ersetzen.",
        "Kostenlose und anonyme Beratung gibt es in Österreich bei der Hotline für Essstörungen der Wiener Gesundheitsförderung unter 0800 20 11 20, für Betroffene, Angehörige und Bezugspersonen. Das Netzwerk Essstörungen berät österreichweit unter 0512 57 60 26. In Deutschland ist das Beratungstelefon des BIÖG unter 0221 892031 erreichbar. Auf essstoerungen.bioeg.de gibt es außerdem eine Datenbank mit Beratungsstellen.",
        "Beratungsstellen sind auch für erste, unverbindliche Fragen da. Man muss nicht warten, bis es „schlimm genug“ ist.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Man muss sich nur zusammenreißen und normal essen.", richtig: "Eine Essstörung ist eine ernsthafte Erkrankung. Aufforderungen zum Zusammenreißen helfen nicht und halten eher davon ab, Hilfe zu suchen." },
      { irrtum: "Essstörungen betreffen nur junge Mädchen.", richtig: "Sie beginnen oft im Jugendalter und betreffen Frauen häufiger, kommen aber in allen Altersgruppen und bei allen Geschlechtern vor." },
      { irrtum: "Wenn die erste Behandlung nicht reicht, ist es hoffnungslos.", richtig: "Rückfälle oder ein erster Behandlungsversuch, der nicht genügt hat, sind kein persönliches Versagen. Ein neuer Anlauf lohnt sich." },
      { irrtum: "Die Pille bringt bei Magersucht die Periode wieder in Ordnung.", richtig: "Die Pille normalisiert den Zyklus nicht. Für Jugendliche mit Magersucht, die keine Verhütung brauchen, wird sie nicht empfohlen." },
    ],
    angehoerige: [
      "Informiere dich und hol dir selbst Beratung. Die Beratungstelefone in Österreich und Deutschland sind ausdrücklich auch für Angehörige da.",
      "Sprich deine Sorge in Ruhe an, ohne Vorwürfe und ohne über Gewicht oder Aussehen zu urteilen.",
      "Dräng nicht zum „Zusammenreißen“. Ermutige stattdessen zu einem ersten Termin, etwa in der Hausarztpraxis oder einer Beratungsstelle.",
      "Bei Minderjährigen werden Eltern ausführlich informiert und in die Behandlung einbezogen. Nimm dieses Angebot an.",
      "Gefühle von Hilflosigkeit und Überforderung sind häufig. Such dir eine eigene Anlaufstelle, damit du nicht allein damit bist.",
    ],
    quellen: [
      { text: "Patientenleitlinie Diagnostik und Behandlung der Essstörungen. AWMF", url: "https://register.awmf.org/assets/guidelines/051-026p_Essstoerungen_2024-01.pdf" },
      { text: "Essstörungen: Hilfsangebote. Sozialministerium Österreich", url: "https://www.sozialministerium.gv.at/Themen/Gesundheit/Drogen-und-Sucht/Essst%C3%B6rungen.html" },
      { text: "Essstörungen: Hilfe für Betroffene. Bundesministerium für Gesundheit", url: "https://www.bundesgesundheitsministerium.de/themen/praevention/gesundheitsgefahren/essstoerungen/hilfe-fuer-betroffene.html" },
    ],
  },

  insomnie: {
    absaetze: [
      { titel: "Wie es sich anfühlen kann", text: [
        "Viele kennen den Moment, in dem der Blick auf die Uhr zeigt: schon wieder drei Uhr. Bei anhaltenden Schlafproblemen wird daraus ein Muster. Man liegt müde im Bett und ist trotzdem hellwach. Die Gedanken springen zwischen dem Tag, der war, und dem Tag, der kommt. Je mehr man schlafen will, desto weniger gelingt es.",
        "Mit der Zeit wird schon der Abend zur Anspannung. Die Sorge, wie der nächste Tag ohne Schlaf zu schaffen ist, ist oft lauter als die Müdigkeit. Tagsüber fühlen sich viele erschöpft, gereizt und unkonzentriert. Manche sagen Verabredungen ab, um Kraft zu sparen, und das Leben richtet sich immer mehr nach der Nacht.",
      ] },
      { titel: "Wie es dazu kommen kann", text: [
        "Fachleute erklären anhaltende Schlafprobleme oft mit drei Arten von Einflüssen, die zusammenwirken. Manche Menschen bringen eine Neigung zu leichterem Schlaf oder stärkerer Anspannung mit. Ein Auslöser wie Stress, Sorgen, Krankheit, Lärm oder Schichtarbeit bringt den Schlaf dann aus dem Takt. Und schließlich halten Gedanken und Gewohnheiten das Problem am Laufen, auch wenn der Auslöser längst vorbei ist.",
        "Typisch dafür sind die Angst vor den Folgen schlechten Schlafs, nächtliches Grübeln und eine erhöhte innere Anspannung. Auch Alkohol als Einschlafhilfe kann den Schlaf auf Dauer verschlechtern. Manchmal tragen körperliche Ursachen bei, etwa Atemaussetzer im Schlaf, unruhige Beine, Schmerzen oder Erkrankungen von Schilddrüse, Herz oder Lunge, ebenso Ängste, Depressionen oder bestimmte Medikamente.",
      ] },
      { titel: "Wie eine Behandlung abläuft", text: [
        "Am Anfang steht meist ein ärztliches Gespräch, oft in der Hausarztpraxis. Gefragt wird nach Schlafgewohnheiten, Medikamenten, Alkohol und Kaffee, Stress und Erkrankungen. Dazu kommen eine körperliche Untersuchung und eine Blutabnahme. Hilfreich ist ein Schlaftagebuch über ein bis zwei Wochen. Eine Untersuchung im Schlaflabor ist nur in bestimmten Fällen nötig, etwa bei Verdacht auf eine andere Schlafstörung oder wenn die Behandlung nicht anschlägt.",
        "Mittel der ersten Wahl ist die kognitive Verhaltenstherapie für Insomnie, kurz KVT-I. Sie verbindet Wissen über Schlaf, Entspannung und Techniken gegen das Grübeln mit zwei zentralen Bausteinen. Stimuluskontrolle heißt, das Bett wieder fest mit Schlafen zu verbinden. Bettzeitrestriktion heißt, die Zeit im Bett vorübergehend zu verkürzen, damit der Schlaf tiefer und zusammenhängender wird. Das macht anfangs müder. Vorsicht ist daher beim Autofahren geboten, und bei manchen Erkrankungen, etwa einer bipolaren Erkrankung oder Epilepsie, braucht es besondere Absprache.",
        "KVT-I wirkt einzeln, in Gruppen und digital, digital besonders gut mit persönlicher Begleitung. In Deutschland gibt es dafür zugelassene digitale Gesundheitsanwendungen (DiGA). Ärztinnen, Ärzte und Psychotherapeutinnen können sie verordnen, die gesetzlichen Krankenkassen übernehmen die Kosten.",
        "Schlafmittel kommen erst in Frage, wenn KVT-I nicht ausreichend wirkt oder nicht möglich ist. Klassische Schlafmittel sind nur für wenige Wochen geeignet, eine Langzeiteinnahme wird nicht empfohlen. Pflanzliche Mittel wie Baldrian und sedierende Antihistaminika empfiehlt die aktuelle Leitlinie nicht.",
      ] },
      { titel: "Was du selbst tun kannst", text: [
        "Ein Schlaftagebuch zeigt, wie viel man tatsächlich schläft, und macht Veränderungen sichtbar.",
        "Bewährte Gewohnheiten sind leichte Mahlzeiten am Abend, weniger Alkohol und Kaffee, das Bett nur zum Schlafen zu nutzen und erst bei echter Müdigkeit schlafen zu gehen. Entspannungsverfahren wie Progressive Muskelentspannung, autogenes Training oder Atemübungen helfen beim Abschalten. Auch Bewegung, etwa ein Abendspaziergang, Yoga oder Tai-Chi, kann den Schlaf unterstützen.",
        "Wissen über guten Schlaf allein reicht bei anhaltenden Problemen meist nicht aus. KVT-I gibt es aber auch als Selbsthilfe, etwa in Büchern oder Programmen, und sie hat sich in dieser Form als wirksam gezeigt.",
        "Gelassenheit gegenüber einzelnen schlechten Nächten hilft: Eine halbe Stunde bis zum Einschlafen gilt als normal, und wie viel Schlaf ein Mensch braucht, ist sehr verschieden.",
      ] },
    ],
    irrtuemer: [
      { irrtum: "Jeder Mensch braucht acht Stunden Schlaf.", richtig: "Der Schlafbedarf ist individuell verschieden. Für Erwachsene werden im Durchschnitt etwa sieben Stunden genannt." },
      { irrtum: "Wer schlecht schläft, sollte früher ins Bett gehen und länger liegen bleiben.", richtig: "Das verstärkt die Probleme oft. In der Behandlung wird die Bettzeit sogar vorübergehend verkürzt, damit der Schlaf tiefer wird." },
      { irrtum: "Ein Glas Wein hilft beim Einschlafen.", richtig: "Alkohol wird häufig als Schlafhilfe genutzt, ist aber eine ungünstige Selbstbehandlung und kann zu Schlafproblemen beitragen." },
      { irrtum: "Schlafmittel sind die beste Lösung.", richtig: "Mittel der ersten Wahl ist die Verhaltenstherapie für Insomnie. Schlafmittel sind nur kurz und nur in bestimmten Fällen sinnvoll, weil sie abhängig machen können." },
    ],
    angehoerige: [
      "Wenn dir im Schlaf Atemaussetzer oder lautes, unregelmäßiges Schnarchen auffallen, sprich es an. Das ist ein wichtiger Hinweis für die ärztliche Abklärung.",
      "Mach keinen Druck mit Fragen nach jeder Nacht. Gelassenheit im Umfeld hilft, die Anspannung rund um den Schlaf zu senken.",
      "Unterstütze die Behandlung, etwa mit gemeinsamen Abendaktivitäten, wenn die Bettzeit verkürzt wird und Wachbleiben schwerfällt.",
      "Übernimm in der ersten, müden Phase der Behandlung wenn möglich Autofahrten.",
      "Schütze auch deinen eigenen Schlaf, zum Beispiel mit Absprachen über Licht und Geräusche im Schlafzimmer.",
    ],
    quellen: [
      { text: "S3-Leitlinie Insomnie bei Erwachsenen, Update 2025. AWMF", url: "https://register.awmf.org/assets/guidelines/063-003l_S3_Insomnie-bei-Erwachsenen_2025-04.pdf" },
      { text: "Schlafstörungen. gesund.bund.de", url: "https://gesund.bund.de/schlafstoerungen" },
      { text: "Digitale Gesundheitsanwendungen (DiGA): Apps auf Rezept. gesund.bund.de", url: "https://gesund.bund.de/digitale-gesundheitsanwendungen-diga" },
    ],
  },
};
