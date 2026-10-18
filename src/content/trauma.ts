interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }
export interface Seite {
  id: string; titel: string; gruppe: string; stichworte: string[];
  icd?: { code: string; titel: string };
  einleitung: string; absaetze: Abschnitt[]; irrtuemer: Irrtum[]; angehoerige: string[];
  hilft: string[]; wannHilfe: string[]; quellen: Quelle[];
}

// ---------------------------------------------------------------------------
// Geöffnete Quellen (URLs exakt wie aufgerufen)
// ---------------------------------------------------------------------------
const Q = {
  whoPtbs: {
    text: "WHO: Post-traumatic stress disorder, Fact sheet",
    url: "https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder",
  },
  whoGewaltFrauen: {
    text: "WHO: Violence against women, Fact sheet",
    url: "https://www.who.int/news-room/fact-sheets/detail/violence-against-women",
  },
  gesundBund: {
    text: "gesund.bund.de (Bundesministerium für Gesundheit): Posttraumatische Belastungsstörung",
    url: "https://gesund.bund.de/posttraumatische-belastungsstoerung",
  },
  degptTrauma: {
    text: "DeGPT: Was ist ein Trauma?",
    url: "https://www.degpt.de/hilfe-fuer-betroffene/was-ist-ein-trauma",
  },
  degptFolgen: {
    text: "DeGPT: Wie äußern sich Traumafolgestörungen?",
    url: "https://www.degpt.de/hilfe-fuer-betroffene/wie-aeussern-sich-traumafolgestoerungen",
  },
  degptHilfe: {
    text: "DeGPT: Wann brauche ich professionelle Hilfe?",
    url: "https://www.degpt.de/hilfe-fuer-betroffene/wann-brauche-ich-professionelle-hilfe",
  },
  degptQA: {
    text: "DeGPT (2022): Qualifikationsanforderungen Psychotraumatologie (u. a. Typ-I/Typ-II-Trauma, kPTBS, Entwicklungstrauma)",
    url: "https://www.degpt.de/DeGPT-Dateien/QA%20Psychotraumatologie.pdf",
  },
  degptKptbs: {
    text: "DeGPT: Stellungnahme zum Welttag für psychische Gesundheit, Komplexe PTBS",
    url: "https://www.degpt.de/archiv/upload/Stellungnahmen/10-%20Oktober%20-%20Welttag%20fu%CC%88r%20psychische%20Gesundheit-%20Komplexe%20PTBS.pdf",
  },
  s3Patient: {
    text: "S3-Leitlinie PTBS (AWMF 155-001, Version 2026), Informationsblatt für Betroffene",
    url: "https://www.dgppn.de/_Resources/Persistent/a4b7e92e343eaef4d100c293bd3113653e86f628/155-001p1__S3_Posttraumatische-Belastungsstoerung_2026-05.pdf",
  },
  s3Lang: {
    text: "S3-Leitlinie Posttraumatische Belastungsstörung (AWMF 155-001), Langfassung, Stand 27.02.2026",
    url: "https://www.dgppn.de/_Resources/Persistent/aba0fa4ffff4a44e780f5985c1d86f91496d8d07/155-001l_S3_Posttraumatische-Belastungsstoerung_2026-05.pdf",
  },
  aerzteblattS3: {
    text: "Deutsches Ärzteblatt (27.05.2026): S3-Leitlinie zu posttraumatischen Belastungsstörungen aktualisiert und erweitert",
    url: "https://www.aerzteblatt.de/news/s3-leitlinie-zu-posttraumatischen-belastungsstorungen-aktualisiert-und-erweitert",
  },
  nhsUrsachen: {
    text: "NHS: Post-traumatic stress disorder, Causes",
    url: "https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/causes/",
  },
  nhsKomplex: {
    text: "NHS: Complex PTSD",
    url: "https://www.nhs.uk/mental-health/conditions/post-traumatic-stress-disorder-ptsd/complex/",
  },
  mindTrauma: {
    text: "Mind (UK): About trauma",
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/trauma/about-trauma/",
  },
  mindFolgen: {
    text: "Mind (UK): Effects of trauma",
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/trauma/effects-of-trauma/",
  },
  mindUrsachen: {
    text: "Mind (UK): Causes of PTSD",
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/post-traumatic-stress-disorder-ptsd-and-complex-ptsd/causes-of-ptsd/",
  },
  mindKomplex: {
    text: "Mind (UK): Complex PTSD",
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/post-traumatic-stress-disorder-ptsd-and-complex-ptsd/complex-ptsd/",
  },
  mindDissoziation: {
    text: "Mind (UK): About dissociation",
    url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/dissociation-and-dissociative-disorders/about-dissociation/",
  },
  vaPtbs: {
    text: "U.S. Department of Veterans Affairs, National Center for PTSD: PTSD Basics",
    url: "https://www.ptsd.va.gov/understand/what/ptsd_basics.asp",
  },
  lortye2024: {
    text: "Lortye, S. A. et al. (2024): Types of childhood maltreatment as predictors of PTSD severity and complex PTSD in patients with substance use disorders. European Journal of Psychotraumatology 15(1)",
    url: "https://pure.uva.nl/ws/files/197494472/Types_of_childhood_maltreatment_as_predictors_of_posttraumatic_stress_disorder_severity_and_complex_posttraumatic_stress_disorder_in_patients_with_sub.pdf",
  },
  eidhof2019: {
    text: "Eidhof, M. B. et al. (2019): Complex posttraumatic stress disorder in patients exposed to emotional neglect and traumatic events. Journal of Traumatic Stress 32(1)",
    url: "https://researchinformation.umcutrecht.nl/en/publications/complex-posttraumatic-stress-disorder-in-patients-exposed-to-emot/",
  },
  choi2021: {
    text: "Choi, H., Lee, W. & Hyland, P. (2021): ICD-11 complex PTSD in a South Korean general population sample with adverse childhood experiences. Child Abuse & Neglect 114",
    url: "https://mural.maynoothuniversity.ie/16768/1/PhilipHylandChild2021.pdf",
  },
  nielsen2015: {
    text: "Nielsen, M. B. et al. (2015): Post-traumatic stress disorder as a consequence of bullying at work and at school. A literature review and meta-analysis. Aggression and Violent Behavior 21",
    url: "https://stami.no/en/publication/post-traumatic-stress-disorder-as-a-consequence-of-bullying-at-work-and-at-school-a-literature-review-and-meta-analysis/",
  },
  beutler2021: {
    text: "Beutler, D. (2021): Kinder als Zeugen häuslicher Gewalt. Pädiatrie 3/2021",
    url: "https://www.rosenfluh.ch/media/paediatrie/2021/03/Kinder-als-Zeugen-haeuslicher-Gewalt.pdf",
  },
  sonnenmoser2010: {
    text: "Sonnenmoser, M. (2010): Sekundäre Traumatisierung: Mythos oder Realität? Deutsches Ärzteblatt PP 3/2010",
    url: "https://www.aerzteblatt.de/archiv/68022/Sekundaere-Traumatisierung-Mythos-oder-Realitaet",
  },
  ehlersClark: {
    text: "Ehlers, A. & Clark, D. M. (2000): A cognitive model of posttraumatic stress disorder. Behaviour Research and Therapy 38(4)",
    url: "https://ora.ox.ac.uk/objects/uuid:f225e001-8a1a-4939-b055-82d3fe48b25a",
  },
  psychologyToolsPtbs: {
    text: "Psychology Tools: Understanding PTSD (Erklärung nach Ehlers & Clark)",
    url: "https://www.psychologytools.com/resource/understanding-ptsd",
  },
} satisfies Record<string, Quelle>;

// ---------------------------------------------------------------------------
// Neues Kapitel: Trauma verstehen
// ---------------------------------------------------------------------------
export const TRAUMA: Seite = {
  id: "trauma",
  titel: "Trauma verstehen",
  gruppe: "Belastung, Trauma und Verlust",
  stichworte: [
    "Trauma", "Schocktrauma", "Unfall", "Geburtserlebnis", "medizinischer Notfall",
    "Bindungstrauma", "Entwicklungstrauma", "Vernachlässigung", "emotionale Gewalt",
    "Abwertung", "Demütigung", "Mobbing", "Cybermobbing", "Beziehungstrauma",
    "psychische Gewalt", "Kontrolle", "sexualisierte Gewalt", "häusliche Gewalt miterleben",
    "Flucht", "Krieg", "sekundäre Traumatisierung", "Helfende", "Scham", "Dissoziation",
    "Trigger", "Resilienz", "Erholung",
  ],
  einleitung:
    "Hier geht es um belastende Erfahrungen. Du kannst jederzeit pausieren und später weiterlesen. " +
    "Das Wort Trauma kommt aus dem Griechischen und bedeutet „Wunde“. Gemeint ist eine seelische Verletzung. " +
    "Sie kann entstehen, wenn sich ein Mensch bedroht, hilflos oder ungeschützt fühlt und keinen Weg sieht, damit fertigzuwerden. " +
    "Trauma hat viele Gesichter. Es geht nicht nur um Gewalt, Missbrauch oder Folter. " +
    "Auch was von außen „nicht schlimm genug“ wirkt, kann tiefe Spuren hinterlassen.",
  absaetze: [
    {
      titel: "Das Erleben zählt, nicht der Vergleich",
      text: [
        "Es gibt keine feste Liste, welche Erfahrungen traumatisch sind. Entscheidend ist, wie ein Mensch etwas erlebt hat und wie es ihn beeinflusst.",
        "Zwei Menschen können Ähnliches erleben und ganz unterschiedlich darauf reagieren. Niemand von außen kann sagen, ob etwas für dich zu viel war.",
        "Viele vergleichen sich mit anderen und denken: „Anderen ging es viel schlechter.“ Dieser Vergleich hilft selten. Deine Belastung ist echt, auch wenn andere Schwereres erlebt haben.",
      ],
    },
    {
      titel: "Einmalige Ereignisse",
      text: [
        "Manchmal ist es ein einzelnes, plötzliches Ereignis. Fachleute sprechen dann von einem Schocktrauma oder Typ-I-Trauma.",
        "Beispiele sind ein schwerer Unfall, ein Überfall, eine Naturkatastrophe, der plötzliche Tod eines nahen Menschen oder die Nachricht davon.",
        "Auch medizinische Erfahrungen können traumatisch sein: ein Notfall, eine Zeit auf der Intensivstation, eine Operation oder ein Eingriff. Das gilt auch für eine schwierige Geburt, für die Gebärende und für Menschen, die dabei sind.",
      ],
    },
    {
      titel: "Wenn es immer wieder passiert",
      text: [
        "Andere Belastungen dauern lange oder wiederholen sich. Fachleute nennen das Typ-II-Trauma. Beispiele sind andauernde Gewalt in der Kindheit, Krieg oder Folter.",
        "Besonders schwer wiegt es, wenn man nicht entkommen konnte und wenn das Verletzende von Menschen kam, denen man vertrauen wollte oder musste.",
      ],
    },
    {
      titel: "Frühe Beziehungserfahrungen",
      text: [
        "Kinder brauchen Schutz, Zuwendung und Menschen, die verlässlich da sind. Fehlt das über lange Zeit, kann das die Entwicklung prägen.",
        "Dazu gehört Vernachlässigung: körperlich, etwa wenn Essen, Pflege oder Schutz fehlen, und emotional, wenn niemand Trost gibt, zuhört oder Gefühle ernst nimmt.",
        "Begriffe wie „Bindungstrauma“ oder „Entwicklungstrauma“ sind keine eigenen Diagnosen in der ICD-11, dem Diagnosesystem der WHO. Sie beschreiben aber reale, gut untersuchte Belastungen. Die deutschsprachige Fachgesellschaft DeGPT hält fest, dass eine ernsthafte Unterbrechung der schützenden und fürsorglichen Versorgung durch die wichtigsten Bezugspersonen in Kindheit und Jugend langfristige Folgen haben kann.",
      ],
    },
    {
      titel: "Emotionale Gewalt und ständige Abwertung",
      text: [
        "Nicht jede Gewalt hinterlässt sichtbare Spuren. Ständiges Kritisieren, Lächerlichmachen, Demütigen, Drohen oder das Gefühl, nie zu genügen, können tief verletzen.",
        "Die Forschung dazu wächst. In einer Studie aus den Niederlanden mit Menschen in Suchtbehandlung hing emotionale Gewalt in der Kindheit von allen untersuchten Formen am stärksten mit einer Komplexen PTBS zusammen. Die Fachleute empfehlen deshalb, gezielt danach zu fragen, weil emotionale Gewalt oft übersehen wird.",
        "Solche Studien zeigen Zusammenhänge, keine sicheren Ursachen. Sie machen aber deutlich: Seelische Gewalt ist kein „kleineres“ Thema.",
      ],
    },
    {
      titel: "Mobbing in Schule, Arbeit und im Netz",
      text: [
        "Mobbing heißt, über längere Zeit gezielt schikaniert, ausgegrenzt oder bloßgestellt zu werden. Das kann in der Schule, am Arbeitsplatz oder online passieren.",
        "Eine Übersichtsarbeit aus Norwegen fand bei Kindern und Erwachsenen einen deutlichen Zusammenhang zwischen Mobbing und posttraumatischen Beschwerden. Die Studien waren aber nur Momentaufnahmen.",
        "Fachlich gilt Mobbing im engen Sinn nicht als Auslöser einer PTBS. Es kann aber typische Beschwerden hervorrufen, etwa Albträume, Anspannung oder Vermeidung. Das Leid ist real, auch ohne Diagnose.",
      ],
    },
    {
      titel: "Gewalt und Kontrolle in Beziehungen",
      text: [
        "Gewalt in Paarbeziehungen ist nicht nur körperlich. Die WHO zählt auch psychische Gewalt und kontrollierendes Verhalten dazu, etwa Überwachen, Manipulieren oder Abschneiden von Freundinnen, Freunden und Familie.",
        "Zu den möglichen Folgen zählt die WHO unter anderem Depression, posttraumatischen Stress, Angst und Schlafprobleme. Manche sprechen von „Beziehungstrauma“. Auch das ist keine ICD-Diagnose, beschreibt aber eine ernst zu nehmende Erfahrung.",
      ],
    },
    {
      titel: "Sexualisierte Gewalt",
      text: [
        "Sexualisierte Gewalt ist jede sexuelle Handlung gegen den eigenen Willen. Nach solchen Erfahrungen sind Traumafolgen laut WHO besonders häufig.",
        "Viele Betroffene schämen sich oder geben sich selbst die Schuld. Die Verantwortung liegt immer bei der Person, die Gewalt ausübt.",
      ],
    },
    {
      titel: "Miterleben und Mittragen",
      text: [
        "Man muss etwas nicht selbst erleiden, um belastet zu sein. Auch wer miterlebt, wie anderen etwas geschieht, kann Traumafolgen entwickeln.",
        "Kinder, die Gewalt zwischen Eltern miterleben, sind mitbetroffen. Fachleute ordnen das als Form psychischer Gewalt ein. Die Folgen können denen nach direkter Gewalt ähneln. Ein stabiles Umfeld schützt.",
        "Menschen in helfenden Berufen hören und sehen oft Schweres. Man spricht dann von sekundärer Traumatisierung. Wie häufig das ist, ist wissenschaftlich noch nicht gut geklärt. Erfahrung, Austausch im Team und das Gefühl sinnvoller Arbeit scheinen zu schützen.",
      ],
    },
    {
      titel: "Flucht und Krieg",
      text: [
        "Krieg, Verfolgung und Flucht bringen oft viele belastende Erfahrungen auf einmal: Gefahr, Verlust, Trennung und Unsicherheit über lange Zeit. Laut WHO sind Traumafolgen bei Menschen aus Kriegs- und Konfliktgebieten deutlich häufiger.",
        "Auch nach der Ankunft gehen Belastungen oft weiter, etwa durch Sorgen um Angehörige oder einen unsicheren Aufenthalt.",
      ],
    },
    {
      titel: "Spuren, die bleiben können",
      text: [
        "Trauma wirkt bei allen anders. Viele Menschen kennen Scham oder Schuldgefühle, obwohl sie nichts falsch gemacht haben. Manchmal versucht der Kopf so, dem Unbegreiflichen einen Sinn zu geben.",
        "Häufig leidet der Selbstwert. Vertrauen in andere fällt schwer. Gefühle können sehr stark werden oder sich taub anfühlen.",
        "Auch der Körper reagiert: mit Anspannung, Erschöpfung, Schlafproblemen, Schmerzen oder Schwindel. Beziehungen können schwieriger werden, weil Nähe zugleich ersehnt und gefürchtet wird.",
      ],
    },
    {
      titel: "Dissoziation, einfach erklärt",
      text: [
        "Dissoziation heißt: Man fühlt sich vom eigenen Körper, von Gefühlen oder von der Umgebung abgetrennt. Alles wirkt unwirklich oder weit weg, oder es fehlen Zeitstücke.",
        "Das ist zunächst ein Schutz. Wenn man einer Situation nicht entkommen kann, hilft das innere Abschalten, das Unerträgliche auszuhalten. Später kann dieser Schutz auch dann anspringen, wenn keine Gefahr mehr besteht.",
      ],
    },
    {
      titel: "Trigger: wenn Erinnerungen anspringen",
      text: [
        "Ein Trigger ist ein Reiz, der an Teile des Erlebten erinnert. Das kann ein Geräusch sein, ein Geruch, ein Ort, eine Berührung oder ein Tonfall.",
        "Dann reagiert der Körper oft so, als wäre die Gefahr wieder da. Das ist keine Überempfindlichkeit, sondern eine erlernte Schutzreaktion. Sie lässt sich mit Unterstützung verändern.",
      ],
    },
    {
      titel: "Die meisten Menschen erholen sich",
      text: [
        "Laut WHO erleben rund 70 Prozent der Menschen weltweit im Laufe ihres Lebens ein potenziell traumatisches Ereignis. Nur eine Minderheit von ihnen, etwa 5,6 Prozent, entwickelt eine PTBS.",
        "Die meisten erholen sich mit der Zeit, oft mit Hilfe ihres Umfelds. Unterstützung durch vertraute Menschen ist dabei besonders wertvoll.",
        "Wer länger leidet, ist nicht schwach. Traumafolgen sind normale Reaktionen auf ein unnormales, extremes Erlebnis. Und sie sind gut behandelbar.",
      ],
    },
    {
      titel: "Was eine Diagnose ist und was nicht",
      text: [
        "Im engen Sinn setzt eine PTBS nach ICD-11 ein extrem bedrohliches oder entsetzliches Ereignis voraus. Die Komplexe PTBS entsteht meist nach lang andauernden oder wiederholten Erfahrungen, denen man schwer oder gar nicht entkommen konnte.",
        "Viele belastende Erfahrungen erfüllen diese engen Kriterien nicht und können trotzdem langfristig wirken. Eine Diagnose kann nur eine Fachperson stellen. Diese Seite stellt keine Diagnosen. Sie möchte helfen, das eigene Erleben besser einzuordnen.",
      ],
    },
  ],
  irrtuemer: [
    {
      irrtum: "Trauma gibt es nur nach Gewalt, Missbrauch oder Krieg.",
      richtig: "Auch Unfälle, medizinische Notfälle, eine schwierige Geburt, Vernachlässigung, Mobbing oder emotionale Gewalt können seelische Verletzungen hinterlassen.",
    },
    {
      irrtum: "Was mir passiert ist, war nicht schlimm genug.",
      richtig: "Es gibt keine Rangliste des Leidens. Entscheidend ist, wie du etwas erlebt hast und was es mit dir macht.",
    },
    {
      irrtum: "Wer ein Trauma erlebt, ist für immer geschädigt.",
      richtig: "Die meisten Menschen erholen sich. Und wer länger Beschwerden hat, kann mit Behandlung viel erreichen.",
    },
    {
      irrtum: "Wenn ich mich kaum erinnere, kann es nicht so schlimm gewesen sein.",
      richtig: "Erinnerungslücken kommen nach belastenden Erlebnissen vor. Sie sagen nichts darüber aus, wie schwer etwas war.",
    },
    {
      irrtum: "Ich hätte mich wehren müssen.",
      richtig: "Erstarren, sich fügen oder innerlich abschalten sind automatische Schutzreaktionen. Man wählt sie nicht bewusst.",
    },
    {
      irrtum: "Seelische Gewalt ist harmloser als körperliche.",
      richtig: "Studien zeigen, dass emotionale Gewalt eng mit langfristigen Traumafolgen zusammenhängen kann. Sie verdient genauso Ernst.",
    },
  ],
  angehoerige: [
    "Glaube der Person. Zweifel oder Vergleiche wie „Anderen geht es schlechter“ verletzen oft zusätzlich.",
    "Dräng nicht zum Erzählen. Signalisiere, dass du da bist, wenn sie reden möchte, und lass sie Tempo und Inhalt bestimmen.",
    "Sei geduldig. Gereiztheit, Rückzug oder Schreckhaftigkeit sind oft Folgen der Belastung und nicht gegen dich gerichtet.",
    "Unterstütze praktisch: Alltag, Begleitung zu Terminen, Hilfe bei der Suche nach Beratung.",
    "Achte auch auf dich. Wer begleitet, darf sich selbst Hilfe holen, etwa bei Beratungsstellen, die auch Angehörige beraten.",
  ],
  hilft: [
    "Sicherheit zuerst: Wenn die Belastung noch andauert, etwa Gewalt in der Beziehung, ist Schutz der erste Schritt. Beratungsstellen helfen dabei vertraulich.",
    "Vertraute Menschen: Gespräche mit Menschen, denen du vertraust, und das Gefühl, nicht allein zu sein.",
    "Regelmäßiger Alltag: Schlaf, Bewegung, Mahlzeiten und wenig Alkohol oder Drogen geben dem Körper Halt.",
    "Freundlich mit dir sein: Deine Reaktionen sind verständlich. Sie zeigen, wie sehr du dich schützen musstest.",
    "Fachliche Hilfe: Traumafokussierte Psychotherapie ist gut untersucht und wirksam. Du bestimmst mit, worüber und wie schnell gesprochen wird.",
  ],
  wannHilfe: [
    "Wenn Erinnerungen, Albträume oder Anspannung nach mehreren Wochen nicht weniger werden.",
    "Wenn der Alltag, die Arbeit, die Ausbildung oder Beziehungen deutlich leiden.",
    "Wenn du dich ständig bedroht, leer oder von dir selbst abgetrennt fühlst.",
    "Sofort, wenn du in Gefahr bist oder daran denkst, dir etwas anzutun. Ruf den Notruf oder die Telefonseelsorge an (Österreich 142, Deutschland 0800 111 0 111 oder 0800 111 0 222).",
  ],
  quellen: [
    Q.whoPtbs, Q.whoGewaltFrauen, Q.gesundBund, Q.degptTrauma, Q.degptFolgen, Q.degptHilfe,
    Q.degptQA, Q.s3Patient, Q.nhsUrsachen, Q.mindTrauma, Q.mindFolgen, Q.mindUrsachen,
    Q.mindDissoziation, Q.lortye2024, Q.nielsen2015, Q.beutler2021, Q.sonnenmoser2010,
  ],
};

// ---------------------------------------------------------------------------
// Ergänzungen für bestehende Seiten
// ---------------------------------------------------------------------------
export const ERGAENZUNG: Record<"ptbs" | "kptbs", { einleitung?: string; absaetze: Abschnitt[]; irrtuemer: Irrtum[]; angehoerige: string[]; quellen: Quelle[] }> = {
  ptbs: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Viele Menschen beschreiben, dass das Erlebte nicht vorbei ist, sondern sich mitten im Alltag wieder meldet. Ein Bild, ein Geräusch oder ein Geruch genügt, und Herz und Atem reagieren, als wäre die Gefahr zurück.",
          "Manche schlafen schlecht, schrecken leicht hoch oder sind ständig auf der Hut. Andere fühlen sich wie betäubt, abgeschnitten von Gefühlen und von anderen Menschen.",
          "Oft kommen Scham, Schuldgefühle oder Wut dazu. Das ist verständlich und kein Zeichen von Schwäche.",
        ],
      },
      {
        titel: "Warum das Gehirn so reagiert",
        text: [
          "In Gefahr schaltet der Körper automatisch in einen Schutzmodus. Stresshormone wie Adrenalin und Cortisol machen bereit zum Kämpfen, Fliehen oder Erstarren. Das passiert ohne bewusste Entscheidung.",
          "Erinnerungen an sehr bedrohliche Erlebnisse werden oft anders gespeichert als gewöhnliche Erinnerungen: bruchstückhaft und ohne klaren Zeitstempel „Das ist vorbei“. Deshalb können sie sich anfühlen, als passierten sie jetzt.",
          "Vermeiden bringt kurz Erleichterung. Es verhindert aber, dass das Gehirn die Erinnerung einordnen kann. Behandlung hilft genau dabei, sodass das Erlebte zu einer Erinnerung an die Vergangenheit werden kann.",
        ],
      },
      {
        titel: "Erholung und Widerstandskraft",
        text: [
          "Die meisten Menschen erholen sich nach belastenden Ereignissen mit der Zeit. Laut WHO erholen sich bis zu 40 Prozent der Menschen mit PTBS innerhalb eines Jahres.",
          "Bei manchen bleiben die Beschwerden länger. Auch dann lohnt sich Hilfe: Traumafokussierte Psychotherapie kann Beschwerden deutlich lindern, bei vielen auch ganz.",
          "Unterstützung durch andere Menschen gilt als wichtiger Schutzfaktor. Zusätzlicher Stress nach dem Ereignis kann die Erholung dagegen erschweren.",
        ],
      },
    ],
    irrtuemer: [
      {
        irrtum: "Eine PTBS ist ein Zeichen von Schwäche.",
        richtig: "Eine Traumafolgestörung kann jeden Menschen treffen. Sie ist eine verständliche Reaktion auf ein extremes Erlebnis, keine Charakterfrage.",
      },
      {
        irrtum: "Wer nach einem schlimmen Erlebnis nicht zusammenbricht, ist nicht betroffen.",
        richtig: "Menschen reagieren sehr unterschiedlich. Manche funktionieren nach außen gut und leiden innerlich.",
      },
      {
        irrtum: "Man muss einfach darüber hinwegkommen.",
        richtig: "Willenskraft allein reicht oft nicht. Das Gehirn braucht Sicherheit und manchmal fachliche Unterstützung, um das Erlebte zu verarbeiten.",
      },
    ],
    angehoerige: [
      "Erkläre Schreckhaftigkeit oder Rückzug nicht als Ablehnung. Oft sind es Schutzreaktionen.",
      "Frag nach, was in schwierigen Momenten hilft, etwa Ruhe, Ablenkung oder einfach Dasein.",
      "Ermutige zu fachlicher Hilfe, ohne zu drängen, und biete an, bei der Suche zu helfen.",
    ],
    quellen: [Q.whoPtbs, Q.gesundBund, Q.mindFolgen, Q.ehlersClark, Q.psychologyToolsPtbs, Q.vaPtbs, Q.s3Patient, Q.aerzteblattS3],
  },
  kptbs: {
    einleitung:
      "Die Komplexe PTBS ist seit der ICD-11 eine eigene Diagnose. Sie kann sich nach extrem belastenden Erfahrungen entwickeln, meist nach solchen, die lange andauerten oder sich wiederholten und denen man schwer oder gar nicht entkommen konnte. " +
      "Dazu gehören etwa lang andauernde häusliche Gewalt, wiederholter körperlicher oder sexueller Missbrauch in der Kindheit, schwere Vernachlässigung, Krieg, Flucht oder Folter. " +
      "Oft kam das Verletzende von Menschen, denen man eigentlich vertrauen können sollte.",
    absaetze: [
      {
        titel: "Welche Erfahrungen dahinterstehen können",
        text: [
          "Das Risiko ist höher, wenn die Belastung früh im Leben begann, lange dauerte, man nicht entkommen konnte, viele Belastungen zusammenkamen oder nahe Bezugspersonen beteiligt waren.",
          "Dazu kann auch gehören, Gewalt zwischen anderen immer wieder mitzuerleben, etwa als Kind zwischen den Eltern.",
          "Es gibt keine abschließende Liste. Wichtig ist, wie sehr die Erfahrungen das Gefühl von Sicherheit, Selbstwert und Vertrauen erschüttert haben.",
        ],
      },
      {
        titel: "Was die Forschung über Vernachlässigung und emotionale Gewalt sagt",
        text: [
          "Lange standen körperliche und sexuelle Gewalt im Mittelpunkt. Neuere Studien schauen genauer auf Vernachlässigung und seelische Gewalt.",
          "In einer niederländischen Studie mit Menschen in Suchtbehandlung hing emotionale Gewalt in der Kindheit am stärksten mit einer Komplexen PTBS zusammen. Eine weitere Studie deutet darauf hin, dass emotionale Vernachlässigung zur Entstehung der typischen Schwierigkeiten mit Gefühlen, Selbstbild und Beziehungen beitragen kann. Die DeGPT nennt schwere Vernachlässigung in der Kindheit ausdrücklich als mögliche Grundlage.",
          "Diese Studien zeigen Zusammenhänge, keine eindeutigen Ursachen, und die Forschung geht weiter. Klar ist aber: Auch Erfahrungen ohne sichtbare Verletzungen können tief wirken.",
        ],
      },
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Zusätzlich zu Wiedererleben, Vermeiden und Bedrohungsgefühl beschreiben viele Menschen sehr starke Gefühle, die schwer zu beruhigen sind, oder innere Leere.",
          "Häufig ist ein tiefes Gefühl, wertlos oder anders zu sein, verbunden mit Scham und Schuld. Nähe kann sich zugleich wichtig und gefährlich anfühlen, und Vertrauen fällt schwer.",
        ],
      },
      {
        titel: "Behandlung",
        text: [
          "Die aktuelle deutsche S3-Leitlinie empfiehlt bei Komplexer PTBS eine Psychotherapie, die traumafokussierte Methoden kombiniert. Dazu gehören das Verarbeiten belastender Erinnerungen, der Umgang mit Gefühlen, ein freundlicherer Blick auf sich selbst und neue Erfahrungen in Beziehungen.",
          "Die Forschung zu einzelnen Bausteinen ist noch begrenzt. Viele Behandlungen beginnen mit Stabilisierung, also damit, im Alltag wieder mehr Halt zu finden.",
        ],
      },
    ],
    irrtuemer: [
      {
        irrtum: "Komplexe PTBS entsteht nur nach Folter oder schwerstem Missbrauch.",
        richtig: "Auch lang andauernde häusliche Gewalt, schwere Vernachlässigung oder wiederholt miterlebte Gewalt in der Kindheit können dahinterstehen.",
      },
      {
        irrtum: "Wer sich an keine einzelne Katastrophe erinnert, kann nicht betroffen sein.",
        richtig: "Oft ist es nicht ein Ereignis, sondern das, was sich über Jahre wiederholt hat oder was gefehlt hat.",
      },
      {
        irrtum: "Was in der Kindheit passiert ist, lässt sich nicht mehr ändern.",
        richtig: "Das Geschehene bleibt, aber wie es heute wirkt, kann sich verändern. Dafür gibt es wirksame Behandlungen.",
      },
    ],
    angehoerige: [
      "Nimm Berichte über Vernachlässigung oder seelische Gewalt genauso ernst wie Berichte über körperliche Gewalt.",
      "Starke Gefühlsschwankungen oder Misstrauen können mit früheren Erfahrungen zusammenhängen. Verlässlichkeit und klare, ruhige Absprachen helfen oft mehr als viele Worte.",
      "Grenzen sind erlaubt. Du kannst unterstützen und trotzdem auf dich achten.",
    ],
    quellen: [Q.degptKptbs, Q.degptFolgen, Q.degptQA, Q.s3Patient, Q.s3Lang, Q.nhsKomplex, Q.mindKomplex, Q.lortye2024, Q.eidhof2019, Q.choi2021],
  },
};

// ---------------------------------------------------------------------------
// Geprüfte Hilfe-Anlaufstellen (Stand der Prüfung: Oktober 2026)
// ---------------------------------------------------------------------------
export interface Anlaufstelle { land: "AT" | "DE"; name: string; nummer?: string; web: string; text: string; quelle: string }
export const ANLAUFSTELLEN: Anlaufstelle[] = [
  // Österreich
  {
    land: "AT",
    name: "Opfer-Notruf (WEISSER RING)",
    nummer: "0800 112 112",
    web: "https://www.opfer-notruf.at/",
    text: "Kostenlose Beratung für Opfer von Straftaten und Gewalt und für Menschen, die jemanden kennen, der betroffen ist. Werktags von 8 bis 20 Uhr in ganz Österreich. Eine Initiative des Justizministeriums.",
    quelle: "https://www.opfer-notruf.at/",
  },
  {
    land: "AT",
    name: "Frauenhelpline gegen Gewalt",
    nummer: "0800 222 555",
    web: "https://www.frauenhelpline.at/",
    text: "Rund um die Uhr, kostenlos, anonym und vertraulich. Für Frauen ab 18, die Gewalt erleben, und für Angehörige. Auch wer unsicher ist, ob das Erlebte Gewalt ist, kann anrufen.",
    quelle: "https://www.frauenhelpline.at/",
  },
  {
    land: "AT",
    name: "Rat auf Draht",
    nummer: "147",
    web: "https://www.rataufdraht.at/",
    text: "Rund um die Uhr, kostenlos, anonym und vertraulich. Für Kinder, Jugendliche und junge Erwachsene, auch bei Mobbing und Cybermobbing. Zusätzlich Chat zu festen Zeiten.",
    quelle: "https://www.rataufdraht.at/",
  },
  {
    land: "AT",
    name: "männerinfo Krisenhelpline",
    nummer: "0800 400 777",
    web: "https://www.maennerinfo.at/",
    text: "Rund um die Uhr und kostenlos. Für Männer in Krisensituationen, auch in weiteren Sprachen. Chat täglich von 16 bis 22 Uhr.",
    quelle: "https://www.maennerinfo.at/",
  },
  {
    land: "AT",
    name: "Telefonseelsorge",
    nummer: "142",
    web: "https://www.telefonseelsorge.at/",
    text: "Jederzeit erreichbar, kostenlos und unter Schweigepflicht. Für Krisen, Einsamkeit oder wenn du jemanden zum Reden brauchst. Auch Chat und E-Mail.",
    quelle: "https://www.telefonseelsorge.at/",
  },
  {
    land: "AT",
    name: "Gewaltschutzzentren",
    web: "https://www.gewaltschutzzentrum.at/",
    text: "Spezialisierte, gesetzlich anerkannte Einrichtungen für Menschen, die Gewalt erleben. Kontakt zum Zentrum im eigenen Bundesland über die Website.",
    quelle: "https://www.gewaltschutzzentrum.at/",
  },
  {
    land: "AT",
    name: "Schulpsychologie",
    web: "https://www.schulpsychologie.at/",
    text: "Kostenlose Unterstützung und Beratung bei Konflikten in der Schule, zum Beispiel bei Mobbing oder Cybermobbing.",
    quelle: "https://www.saferinternet.at/fileadmin/categorized/Materialien/Flyer_Cybermobbing.pdf",
  },
  // Deutschland
  {
    land: "DE",
    name: "WEISSER RING Opfer-Telefon",
    nummer: "116 006",
    web: "https://www.weisser-ring.de/hilfe-fuer-opfer/opfer-telefon",
    text: "Täglich von 7 bis 22 Uhr, kostenlos und anonym. Für Menschen, die eine Straftat erlebt haben, und für alle, die für jemand anderen anrufen.",
    quelle: "https://www.weisser-ring.de/hilfe-fuer-opfer/opfer-telefon",
  },
  {
    land: "DE",
    name: "Hilfetelefon Gewalt gegen Frauen",
    nummer: "116 016",
    web: "https://www.hilfetelefon.de/",
    text: "Rund um die Uhr an 365 Tagen, kostenlos und anonym, in vielen Sprachen, in Gebärdensprache und Leichter Sprache. Für Frauen, die Gewalt erleben oder erlebt haben, und für Angehörige, Freundinnen, Freunde und Fachkräfte. Auch Online-Beratung.",
    quelle: "https://www.hilfetelefon.de/",
  },
  {
    land: "DE",
    name: "Hilfe-Telefon Sexueller Missbrauch",
    nummer: "0800 22 55 530",
    web: "https://www.hilfe-portal-missbrauch.de/hilfe-telefon",
    text: "Kostenlos und anonym. Montag, Mittwoch und Freitag 9 bis 14 Uhr, Dienstag und Donnerstag 15 bis 20 Uhr. Für Betroffene, auch wenn der Missbrauch lange zurückliegt, für Angehörige und für alle, die sich Sorgen um ein Kind machen.",
    quelle: "https://www.hilfe-portal-missbrauch.de/hilfe-telefon",
  },
  {
    land: "DE",
    name: "Hilfetelefon Gewalt an Männern",
    nummer: "0800 1239900",
    web: "https://www.maennerhilfetelefon.de/",
    text: "Kostenlos, Name und Wohnort müssen nicht genannt werden. Montag bis Donnerstag 8 bis 20 Uhr, Freitag 8 bis 15 Uhr. Für Männer, die Gewalt in irgendeiner Form erlebt haben.",
    quelle: "https://www.maennerhilfetelefon.de/",
  },
  {
    land: "DE",
    name: "Nummer gegen Kummer: Kinder- und Jugendtelefon",
    nummer: "116 111",
    web: "https://www.nummergegenkummer.de/",
    text: "Montag bis Samstag 14 bis 20 Uhr, kostenlos und vertraulich. Samstags beraten Jugendliche.",
    quelle: "https://www.nummergegenkummer.de/",
  },
  {
    land: "DE",
    name: "Nummer gegen Kummer: Elterntelefon",
    nummer: "0800 111 0 550",
    web: "https://www.nummergegenkummer.de/",
    text: "Kostenlos und anonym. Montag, Mittwoch und Freitag 9 bis 17 Uhr, Dienstag und Donnerstag 9 bis 19 Uhr.",
    quelle: "https://www.nummergegenkummer.de/",
  },
  {
    land: "DE",
    name: "TelefonSeelsorge",
    nummer: "0800 111 0 111, 0800 111 0 222 oder 116 123",
    web: "https://www.telefonseelsorge.de/",
    text: "Tag und Nacht erreichbar, kostenlos und anonym. Auch Chat, E-Mail und Beratung vor Ort.",
    quelle: "https://www.telefonseelsorge.de/",
  },
  {
    land: "DE",
    name: "JUUUPORT",
    web: "https://www.juuuport.de/",
    text: "Kostenlose, vertrauliche Online-Beratung für junge Menschen mit Problemen im Netz, zum Beispiel Cybermobbing. Junge Menschen beraten junge Menschen.",
    quelle: "https://www.juuuport.de/",
  },
  {
    land: "DE",
    name: "DeGPT: Traumatherapeutinnen und -therapeuten finden",
    web: "https://www.degpt.de/hilfe-fuer-betroffene/therapeutinnen-in-ihrer-naehe-finden",
    text: "Suche nach Psychotherapeutinnen und Psychotherapeuten mit Zusatzqualifikation in Traumatherapie, für Erwachsene, Kinder und Jugendliche.",
    quelle: "https://www.degpt.de/",
  },
];
