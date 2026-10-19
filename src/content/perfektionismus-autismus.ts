// Zwei Seiten für „Psychische Gesundheit verstehen“, recherchiert am 19.10.2026.
// Wo Quellen sich widersprechen, steht keine Zahl.
import type { VerstehenSeite } from "./verstehen";

const KRISE = "Wenn du daran denkst, dir etwas anzutun: sofort Hilfe holen. Telefonseelsorge 142 (AT) oder 0800 111 0 111 (DE), bei akuter Gefahr 144 bzw. 112.";

export const PERFEKTIONISMUS: VerstehenSeite = {
  id: "perfektionismus",
  titel: "Perfektionismus",
  gruppe: "Entwicklung, Persönlichkeit und Wahrnehmung",
  stichworte: ["Leistungsdruck", "Angst vor Fehlern", "Selbstkritik", "hohe Ansprüche", "Aufschieben", "Prokrastination", "gut genug", "Selbstmitgefühl", "Kontrolle"],
  einleitung:
    "Perfektionismus heißt: sehr hohe Ansprüche an sich selbst stellen und streng mit sich sein, wenn man sie nicht erfüllt. Perfektionismus ist keine Krankheit und keine Diagnose. Hohe Ansprüche können antreiben. Belastend wird es, wenn die Angst vor Fehlern das Denken bestimmt.",
  absaetze: [
    {
      titel: "Zwei Seiten von Perfektionismus",
      text: [
        "Die Forschung beschreibt Perfektionismus nicht als eine einzige Eigenschaft, sondern mit mehreren Seiten. Vereinfacht gibt es zwei. Die eine ist das Streben: hohe Ziele haben und gute Arbeit machen wollen. Die andere sind die Sorgen: Angst vor Fehlern, ständiges Zweifeln und das Gefühl, nur mit Leistung etwas wert zu sein.",
        "Manche Menschen haben zusätzlich das Gefühl, dass andere Perfektion von ihnen verlangen. Das Streben allein kann mit Motivation einhergehen. Die Sorgen hängen dagegen fast immer mit Belastung zusammen.",
      ],
    },
    {
      titel: "Wie es sich im Alltag zeigen kann",
      text: [
        "Aufgaben werden aufgeschoben, weil sie nicht gut genug werden könnten. Oder man arbeitet viel länger als nötig an einer Sache. Lob kommt kaum an, Kritik bleibt lange hängen. Ein kleiner Fehler fühlt sich an wie ein großes Versagen.",
        "Das betrifft nicht nur Arbeit oder Schule. Es kann auch das Aussehen, den Sport, das Essen, den Haushalt oder Beziehungen betreffen.",
      ],
    },
    {
      titel: "Wie Perfektionismus entstehen kann",
      text: [
        "Es gibt nicht die eine Ursache. Vermutlich wirken Veranlagung, Erfahrungen in der Kindheit und das Umfeld zusammen, etwa sehr hohe Erwartungen oder Anerkennung, die vor allem an Leistung hängt. Belegt ist das nur teilweise. Niemand ist schuld.",
        "Auch die Gesellschaft spielt wohl eine Rolle. Eine große Auswertung zeigt: Junge Erwachsene in den USA, Kanada und Großbritannien berichten heute mehr Perfektionismus als Ende der 1980er-Jahre. Am stärksten gestiegen ist das Gefühl, dass andere Perfektion erwarten.",
      ],
    },
    {
      titel: "Perfektionismus und psychische Gesundheit",
      text: [
        "Eine Übersichtsarbeit über 284 Studien zeigt: Perfektionismus hängt mit Depression, Ängsten, Zwang und Essstörungen zusammen. Bei Erschöpfung im Beruf zeigt sich ein klares Muster: Die Sorgen-Seite hängt deutlich damit zusammen, das Streben allein kaum.",
        "Ein Zusammenhang heißt nicht, dass Perfektionismus allein diese Probleme auslöst. Er kann aber ein guter Ansatzpunkt sein.",
      ],
    },
  ],
  hilft: [
    "Bemerken, wann der eigene Anspruch hilft und wann er nur noch Druck macht.",
    "„Gut genug“ üben: eine Aufgabe in einer festen Zeit fertig machen und dann loslassen.",
    "Kleine Fehler bewusst zulassen und beobachten, was wirklich passiert. Meist viel weniger als befürchtet.",
    "Freundlich mit sich reden, so wie mit einer guten Freundin oder einem guten Freund. Fachleute nennen das Selbstmitgefühl. Die Übung „Selbstmitgefühl-Pause“ in Neuroscope ist ein Anfang.",
    "Kognitive Verhaltenstherapie mit Schwerpunkt Perfektionismus. Studien zeigen, dass sie Perfektionismus verringert und auch bei Niedergeschlagenheit, Ängsten und Essproblemen hilft.",
  ],
  wannHilfe: [
    "wenn der Druck dich über Wochen erschöpft, du schlecht schläfst oder dich kaum noch freuen kannst",
    "wenn Essen, Sport oder Kontrolle deinen Alltag bestimmen",
    KRISE,
  ],
  irrtuemer: [
    { irrtum: "Perfektionismus ist eine gute Eigenschaft.", richtig: "Hohe Ziele können hilfreich sein. Die Angst vor Fehlern und strenge Selbstkritik belasten aber." },
    { irrtum: "Perfektionisten sind besonders erfolgreich.", richtig: "Aufschieben und Grübeln bremsen die Leistung oft sogar." },
    { irrtum: "Wer Perfektionismus abbaut, wird faul.", richtig: "Es geht nicht darum, Ziele aufzugeben, sondern den eigenen Wert nicht an Leistung zu knüpfen." },
  ],
  angehoerige: [
    "Einsatz und Mut anerkennen, nicht nur Ergebnisse.",
    "Selbst offen mit eigenen Fehlern umgehen.",
    "Den Druck nicht kleinreden („Ist doch egal“), sondern nachfragen, was dahintersteckt.",
  ],
  quellen: [
    { text: "Limburg u. a. (2017): The Relationship Between Perfectionism and Psychopathology. Journal of Clinical Psychology", url: "https://research-repository.uwa.edu.au/en/publications/the-relationship-between-perfectionism-and-psychopathology-a-meta/" },
    { text: "Curran & Hill (2019): Perfectionism Is Increasing Over Time. Psychological Bulletin", url: "https://researchportal.bath.ac.uk/en/publications/perfectionism-is-increasing-over-time-a-meta-analysis-of-birth-co/" },
    { text: "Hill & Curran (2016): Multidimensional Perfectionism and Burnout. Personality and Social Psychology Review", url: "https://eprints.lse.ac.uk/101361/" },
    { text: "Galloway u. a. (2022): Efficacy of CBT for Perfectionism. Cognitive Behaviour Therapy", url: "https://doi.org/10.1080/16506073.2021.1952302" },
    { text: "Stoeber & Otto (2006): Positive Conceptions of Perfectionism. Personality and Social Psychology Review", url: "https://doi.org/10.1207/s15327957pspr1004_2" },
  ],
};

export const AUTISMUS: VerstehenSeite = {
  id: "autismus",
  titel: "Autismus",
  gruppe: "Entwicklung, Persönlichkeit und Wahrnehmung",
  stichworte: ["Autismus-Spektrum", "Asperger", "autistisch", "Masking", "Neurodiversität", "Reizempfindlichkeit", "Reizüberflutung", "Spätdiagnose", "Autismus Erwachsene"],
  icd: { code: "6A02", titel: "Autism spectrum disorder" },
  einleitung:
    "Autismus ist eine angeborene Besonderheit in der Entwicklung des Gehirns. Sie betrifft vor allem, wie ein Mensch mit anderen in Kontakt tritt, kommuniziert und Reize wahrnimmt. Autismus zeigt sich bei jedem Menschen anders. Darum spricht man von einem Spektrum.",
  absaetze: [
    {
      titel: "Was Fachleute darunter verstehen",
      text: [
        "Typisch sind zwei Bereiche. Erstens fällt das Hin und Her in Gesprächen und im Miteinander schwerer. Zweitens gibt es feste Gewohnheiten, wiederkehrende Abläufe oder sehr starke Interessen. Viele autistische Menschen nehmen Geräusche, Licht, Gerüche oder Berührungen stärker oder schwächer wahr als andere.",
        "Autismus ist nicht selten. Die Gesundheitsportale in Österreich und Deutschland gehen von etwa einem von hundert Menschen aus.",
      ],
    },
    {
      titel: "Neu in der ICD-11",
      text: [
        "Früher gab es getrennte Namen wie „frühkindlicher Autismus“ oder „Asperger-Syndrom“. Die ICD-11 fasst sie zu einem Spektrum zusammen. Zusätzlich wird beschrieben, ob eine intellektuelle Beeinträchtigung vorliegt und wie gut die Sprache im Alltag funktioniert.",
      ],
    },
    {
      titel: "Späte Diagnose und Masking",
      text: [
        "Viele Menschen erfahren erst als Erwachsene, dass sie autistisch sind. Ein Grund: Manche haben gelernt, ihre Besonderheiten zu verstecken oder auszugleichen. Das nennt man Masking. Es kann sehr anstrengend sein.",
        "Bei Buben und Männern wird Autismus häufiger festgestellt, bei Mädchen und Frauen öfter übersehen. Manchmal sehen auch andere Belastungen ähnlich aus, etwa Ängste. Das macht die Abklärung bei Erwachsenen schwieriger.",
      ],
    },
    {
      titel: "Zwei Sichtweisen",
      text: [
        "Die Medizin beschreibt Autismus als Diagnose. Sie kann wichtig sein, um Unterstützung und Hilfen in Schule und Beruf zu bekommen. Die Neurodiversitäts-Bewegung sieht Autismus als eine natürliche Art, wie ein Gehirn arbeiten kann. Sie betont Stärken und die Frage, wie gut die Umgebung passt. Beide Sichtweisen haben ihren Platz.",
        "Manche sagen „autistische Menschen“, andere „Menschen mit Autismus“. Beides ist gebräuchlich. Am besten fragt man die Person selbst.",
      ],
    },
    {
      titel: "Was oft dazukommt",
      text: [
        "Autismus tritt öfter zusammen mit ADHS, Ängsten, Niedergeschlagenheit, Schlafproblemen oder Epilepsie auf. Diese Begleitbeschwerden lassen sich gut behandeln. Darum lohnt es sich, sie anzuschauen.",
      ],
    },
  ],
  hilft: [
    "Autismus ist nicht heilbar und muss auch nicht geheilt werden. Ziel ist ein guter Alltag und Teilhabe.",
    "Wissen über Autismus, etwa in Gruppen oder im Austausch mit anderen autistischen Menschen in der Selbsthilfe.",
    "Anpassungen in Schule und Beruf: ein ruhiger Arbeitsplatz, klare Absprachen, schriftliche Informationen, Pausen.",
    "Psychotherapie, besonders bei Ängsten, Niedergeschlagenheit oder Erschöpfung.",
    "Gegen Autismus selbst gibt es kein Medikament. Bei Begleitbeschwerden wie ADHS, Schlafproblemen oder Ängsten können Medikamente helfen.",
  ],
  wannHilfe: [
    "wenn dich soziale Situationen, Reize oder Veränderungen über längere Zeit stark erschöpfen und du das verstehen möchtest. Erste Wege: Hausarztpraxis, Fachärztin oder Facharzt für Psychiatrie, in Deutschland auch spezialisierte Ambulanzen. Rechne mit Wartezeiten.",
    "Wenn Angst, Niedergeschlagenheit oder Erschöpfung sehr stark werden, warte nicht auf die Abklärung. Hol dir zuerst Hilfe für diese Belastung.",
    KRISE,
  ],
  irrtuemer: [
    { irrtum: "Impfungen verursachen Autismus.", richtig: "Große Studien mit über einer Million Kindern zeigen keinen Zusammenhang. Die Studie, die das behauptet hatte, war gefälscht und wurde zurückgezogen." },
    { irrtum: "Autismus kommt von falscher Erziehung.", richtig: "Autismus ist angeboren. Die Erziehung ist nicht die Ursache." },
    { irrtum: "Autistische Menschen haben kein Mitgefühl.", richtig: "Viele fühlen stark mit. Schwerer fällt oft, Gefühle an Gesicht oder Tonfall abzulesen oder eigene so zu zeigen, wie andere es erwarten." },
    { irrtum: "Autismus gibt es nur bei Kindern.", richtig: "Autismus bleibt ein Leben lang. Viele erfahren erst als Erwachsene davon." },
  ],
  angehoerige: [
    "Klar und direkt sprechen und Änderungen früh ankündigen.",
    "Rückzug und Ruhe nach anstrengenden Situationen ernst nehmen.",
    "Auch für Angehörige gibt es Beratung und Selbsthilfe, etwa bei der Österreichischen Autistenhilfe, bei autismus Deutschland oder bei Aspies e.V.",
  ],
  weiter: [
    { text: "Österreichische Autistenhilfe", url: "https://www.autistenhilfe.at" },
    { text: "autismus Deutschland e.V.", url: "https://www.autismus.de" },
    { text: "Aspies e.V. – Selbsthilfe von und für autistische Menschen", url: "https://aspies.de" },
  ],
  quellen: [
    { text: "Autismus und Asperger-Syndrom – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/autismus-asperger.html" },
    { text: "Autismus – gesund.bund.de", url: "https://gesund.bund.de/autismus" },
    { text: "WHO: Autism, Fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
    { text: "Taylor u. a. (2014): Vaccines are not associated with autism. Vaccine", url: "https://doi.org/10.1016/j.vaccine.2014.04.085" },
  ],
};
