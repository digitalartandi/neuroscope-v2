export type UebungGruppe = "ruhe" | "gefuehle" | "gedanken" | "kraft";

// Kurze Übungen zur Selbstfürsorge. Allgemeine Anregungen, keine Therapie.
export interface Uebung {
  id: string;
  titel: string;
  dauer: string;
  kurz: string;
  art: "atmung" | "checkliste" | "schreiben" | "schritte" | "gefuehle";
  gruppe: UebungGruppe;
  einleitung: string[];
  schritte?: { titel: string; text: string; sekunden?: number }[]; // angeleitete Übung, Schritt für Schritt
  gefuehle?: { familie: string; woerter: string[] }[];             // Gefühle benennen
  achtung?: string;                                                 // Sicherheitshinweis vor dem Start
  punkte?: string[];      // Checkliste
  impulse?: string[];     // Schreibimpulse
  quellen: { text: string; url: string }[];
}

const BASIS: Uebung[] = [
  {
    id: "atmung",
    gruppe: "ruhe",
    titel: "Ruhig atmen",
    dauer: "3 Minuten",
    kurz: "Langsam ein- und ausatmen, im Takt eines Kreises.",
    art: "atmung",
    einleitung: [
      "Langsames Atmen kann helfen, kurz zur Ruhe zu kommen.",
      "Atme ein, während der Kreis größer wird, und aus, während er kleiner wird. Das sind etwa sechs Atemzüge pro Minute. Wenn dir das zu langsam ist, atme in deinem eigenen Tempo. Wenn dich die Übung unruhiger macht, hör einfach auf.",
    ],
    quellen: [
      { text: "Stress bewältigen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/stress/entspannt-bleiben.html" },
      { text: "Zaccaro u. a. (2018): How Breath-Control Can Change Your Life. Frontiers in Human Neuroscience", url: "https://www.frontiersin.org/articles/10.3389/fnhum.2018.00353/full" },
    ],
  },
  {
    id: "abendroutine",
    gruppe: "kraft",
    titel: "Abendroutine",
    dauer: "5 Minuten",
    kurz: "Eine Liste kleiner Gewohnheiten für einen ruhigeren Abend.",
    art: "checkliste",
    einleitung: [
      "Kleine Gewohnheiten am Abend können helfen, zur Ruhe zu kommen. Hake an, was du ausprobieren möchtest. Die Liste bleibt nur in diesem Tab.",
    ],
    punkte: [
      "Ungefähr zur gleichen Zeit schlafen gehen und aufstehen, auch am Wochenende",
      "Ein kleines Abendritual, das jeden Tag gleich abläuft",
      "Eine Stunde vor dem Schlafen Bildschirme weglegen",
      "Ab dem frühen Nachmittag auf Kaffee, Cola und Energydrinks verzichten",
      "Abends leicht essen und keinen Alkohol als Einschlafhilfe",
      "Das Schlafzimmer ruhig, dunkel und eher kühl halten",
      "Gedanken für morgen auf einen Zettel schreiben, damit sie aus dem Kopf sind",
      "Bei langem Wachliegen aufstehen und etwas Ruhiges tun, bis die Müdigkeit kommt",
      "Tagsüber bei Tageslicht nach draußen gehen und sich bewegen",
    ],
    quellen: [
      { text: "Gut schlafen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/gehirn-nerven/schlafstoerungen/gut-schlafen.html" },
    ],
  },
  {
    id: "staerken",
    gruppe: "kraft",
    titel: "Stärken sammeln",
    dauer: "10 Minuten",
    kurz: "Drei Fragen, die den Blick auf das lenken, was gelingt.",
    art: "schreiben",
    einleitung: [
      "Der Blick fällt oft auf das, was fehlt. Diese Übung lenkt ihn auf das, was da ist. Schreib so viel oder so wenig, wie du willst.",
    ],
    impulse: [
      "Was ist dir in letzter Zeit gelungen, auch wenn es klein war?",
      "Welche Menschen, Orte oder Tätigkeiten geben dir Kraft?",
      "Wofür bist du heute dankbar?",
    ],
    quellen: [
      { text: "Die Psyche stärken mit Resilienz – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/psyche-seele/praevention/psyche-staerken.html" },
      { text: "Seligman u. a. (2005): Positive Psychology Progress. American Psychologist 60, 410–421", url: "https://psykologtidsskriftet.no/asset/article/2005/09/Positive-Psychology-Progress-Empirical-Validation-of-Interventions/Positive-Psychology-Progress-Empirical-Validation-of-Interventions.pdf" },
    ],
  },
  {
    id: "wochenrueckblick",
    gruppe: "kraft",
    titel: "Wochenrückblick",
    dauer: "10 Minuten",
    kurz: "Die Woche ordnen und einen kleinen nächsten Schritt finden.",
    art: "schreiben",
    einleitung: [
      "Einmal pro Woche kurz innehalten hilft, den Überblick zu behalten. Die Fragen sind ein Vorschlag, keine Pflicht.",
    ],
    impulse: [
      "Was hat mir diese Woche gutgetan?",
      "Was war anstrengend?",
      "Was möchte ich nächste Woche anders machen, in einem kleinen Schritt?",
      "Welche Pause oder welche schöne Sache trage ich mir für nächste Woche fix ein?",
    ],
    quellen: [
      { text: "Resilienz – gesund.bund.de", url: "https://gesund.bund.de/resilienz" },
      { text: "Gesund mit Entspannung – gesund.bund.de", url: "https://gesund.bund.de/gesund-mit-entspannung" },
    ],
  },
];

const NEU: Uebung[] = [
  {
    id: "muskelentspannung",
    gruppe: "ruhe",
    titel: "Muskeln entspannen",
    dauer: "4 Minuten",
    kurz: "Muskeln kurz anspannen und wieder lockerlassen.",
    art: "schritte",
    einleitung: [
      "Die Progressive Muskelentspannung nach Jacobson ist eine der am besten erforschten Entspannungsmethoden. Du spannst eine Muskelgruppe kurz an und lässt sie dann bewusst los. So spürst du den Unterschied zwischen Anspannung und Entspannung.",
      "Das hier ist eine kurze Form mit fünf Körperbereichen. Der Kreis zeigt dir die Zeit, du kannst aber jederzeit weitergehen.",
    ],
    achtung: "Lass Körperstellen aus, die wehtun oder verletzt sind. Spann nie so fest an, dass es schmerzt, halbe Kraft reicht. Bei einem Krampf sofort loslassen.",
    schritte: [
      { titel: "Ankommen", text: "Setz oder leg dich bequem hin. Atme ein paar Mal ruhig aus. Die Augen dürfen offen bleiben.", sekunden: 20 },
      { titel: "Hände", text: "Mach beide Hände zu Fäusten, mit halber Kraft. Halte etwa fünf Sekunden. Dann lass locker und spür nach, wie sich die Hände jetzt anfühlen.", sekunden: 20 },
      { titel: "Schultern", text: "Zieh die Schultern Richtung Ohren. Halte kurz. Dann lass sie fallen und spür nach.", sekunden: 20 },
      { titel: "Gesicht", text: "Kneif die Augen zusammen und press die Lippen aufeinander. Halte kurz. Dann lass dein Gesicht weich werden.", sekunden: 20 },
      { titel: "Bauch", text: "Spann den Bauch an, als würdest du dich auf einen kleinen Stoß vorbereiten. Halte kurz. Dann lass los.", sekunden: 20 },
      { titel: "Beine", text: "Zieh die Zehen zu dir her und spann die Beine an. Halte kurz. Dann lass los.", sekunden: 20 },
      { titel: "Nachspüren", text: "Spür jetzt deinen ganzen Körper. Atme ruhig weiter. Dann streck dich und komm langsam zurück.", sekunden: 30 },
    ],
    quellen: [
      { text: "Progressive Muskelentspannung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/stress/progressive-muskelentspannung" },
      { text: "Entspannungsmethoden – gesund.bund.de", url: "https://gesund.bund.de/entspannungsmethoden" },
    ],
  },
  {
    id: "koerperreise",
    gruppe: "ruhe",
    titel: "Körperreise",
    dauer: "5 Minuten",
    kurz: "Mit der Aufmerksamkeit langsam durch den Körper wandern.",
    art: "schritte",
    einleitung: [
      "Die Körperreise, auch Body Scan genannt, stammt aus der Achtsamkeitspraxis (MBSR). Du wanderst mit der Aufmerksamkeit durch deinen Körper und nimmst wahr, was da ist, ohne es zu bewerten.",
    ],
    achtung: "Die Augen dürfen offen bleiben. Wenn eine Körperstelle unangenehm ist, lass sie aus und geh zurück zum Atem oder zu den Füßen. Du kannst jederzeit aufhören.",
    schritte: [
      { titel: "Ankommen", text: "Schau dich kurz um. Du bist hier sicher. Schließ die Augen oder schau weich auf den Boden.", sekunden: 15 },
      { titel: "Kontakt", text: "Spür, wo dein Körper den Stuhl oder den Boden berührt. Atme ein paar Mal ruhig.", sekunden: 30 },
      { titel: "Füße", text: "Geh mit deiner Aufmerksamkeit zu den Füßen. Was spürst du dort? Wärme, Kribbeln oder gar nichts. Alles ist in Ordnung.", sekunden: 40 },
      { titel: "Beine und Bauch", text: "Wandere langsam nach oben: Beine, Becken, Bauch, Rücken.", sekunden: 60 },
      { titel: "Arme und Schultern", text: "Dann zu den Händen, Armen und Schultern.", sekunden: 45 },
      { titel: "Nacken und Gesicht", text: "Dann zu Nacken, Kiefer und Gesicht. Darf dort etwas weicher werden?", sekunden: 45 },
      { titel: "Ganzer Körper", text: "Spür den ganzen Körper auf einmal. Atme einmal tief ein und aus. Öffne langsam die Augen.", sekunden: 30 },
    ],
    quellen: [
      { text: "Anleitung Body Scan – Universität Innsbruck", url: "https://www.uibk.ac.at/projects/my-healthy-digital-place/intervention/praxis/pdfs/anleitung_body-scan.pdf" },
      { text: "Body Scan Meditation – Greater Good in Action, UC Berkeley", url: "https://ggia.berkeley.edu/practice/body_scan_meditation" },
      { text: "Entspannungsmethoden – gesund.bund.de", url: "https://gesund.bund.de/entspannungsmethoden" },
    ],
  },
  {
    id: "sinne",
    gruppe: "ruhe",
    titel: "Mit den Sinnen ankommen",
    dauer: "2 Minuten",
    kurz: "5 Dinge sehen, 4 spüren, 3 hören, 2 riechen, 1 schmecken.",
    art: "schritte",
    einleitung: [
      "Wenn Gedanken oder Gefühle zu viel werden, holen dich die Sinne zurück ins Hier und Jetzt. Die Übung 5-4-3-2-1 ist in der Praxis weit verbreitet, etwa beim britischen Gesundheitsdienst. Gut erforscht ist sie bisher nicht, sie ist aber einfach und schnell.",
    ],
    achtung: "Wenn dir ein Sinn gerade nichts liefert, ist das in Ordnung. Geh einfach weiter. Die Augen bleiben offen.",
    schritte: [
      { titel: "Ankommen", text: "Setz dich hin, die Füße auf dem Boden. Atme einmal langsam aus.", sekunden: 10 },
      { titel: "5 Dinge sehen", text: "Nenne fünf Dinge, die du gerade sehen kannst. Leise oder in Gedanken.", sekunden: 30 },
      { titel: "4 Dinge spüren", text: "Nenne vier Dinge, die du spüren kannst. Zum Beispiel deine Kleidung, den Stuhl, die Luft auf der Haut.", sekunden: 25 },
      { titel: "3 Dinge hören", text: "Nenne drei Dinge, die du hören kannst.", sekunden: 20 },
      { titel: "2 Dinge riechen", text: "Nenne zwei Dinge, die du riechen kannst.", sekunden: 15 },
      { titel: "1 Ding schmecken", text: "Nenne eine Sache, die du schmecken kannst.", sekunden: 10 },
      { titel: "Nachspüren", text: "Atme noch einmal ruhig aus. Wie ist es jetzt?", sekunden: 10 },
    ],
    quellen: [
      { text: "Grounding exercises – NHS inform", url: "https://www.nhsinform.scot/healthy-living/mental-wellbeing/breathing-and-relaxation-exercises/grounding-exercises" },
    ],
  },
  {
    id: "gefuehle",
    gruppe: "gefuehle",
    titel: "Gefühle benennen",
    dauer: "3 Minuten",
    kurz: "Ein Wort für das finden, was du gerade spürst.",
    art: "gefuehle",
    einleitung: [
      "Ein Gefühl in Worte zu fassen, kann es schon etwas leiser machen. Das zeigen Studien zum Benennen von Gefühlen. Je genauer das Wort, desto leichter fällt der Umgang damit.",
      "Halte kurz inne. Wo im Körper spürst du gerade etwas? Wähle dann die Wörter, die passen. Sag dir leise: „Ich spüre gerade … Das ist okay.“ Beobachte das Gefühl wie eine Welle: Es steigt, bleibt eine Weile und wird wieder kleiner. Du musst nichts tun.",
    ],
    achtung: "Wenn ein Gefühl zu stark wird, wechsle zur Atemübung oder zu „Mit den Sinnen ankommen“.",
    gefuehle: [
      { familie: "Freude", woerter: ["froh", "begeistert", "verspielt", "neugierig", "hoffnungsvoll", "lebendig"] },
      { familie: "Kraft", woerter: ["stolz", "mutig", "selbstsicher", "wertgeschätzt", "fähig", "wichtig"] },
      { familie: "Ruhe", woerter: ["gelassen", "zufrieden", "geborgen", "dankbar", "verbunden", "liebevoll"] },
      { familie: "Traurigkeit", woerter: ["traurig", "einsam", "enttäuscht", "leer", "müde", "verletzt"] },
      { familie: "Angst", woerter: ["ängstlich", "unsicher", "nervös", "überfordert", "hilflos", "verwirrt"] },
      { familie: "Ärger", woerter: ["gereizt", "wütend", "frustriert", "genervt", "neidisch", "ungeduldig"] },
      { familie: "Scham und Schuld", woerter: ["beschämt", "schuldig", "verlegen", "bloßgestellt", "klein"] },
    ],
    impulse: [
      "Wo im Körper spürst du es?",
      "Was brauchst du jetzt? Etwas Kleines reicht.",
    ],
    quellen: [
      { text: "Lieberman u. a. (2007): Putting Feelings Into Words. Psychological Science 18, 421–428", url: "https://journals.sagepub.com/doi/10.1111/j.1467-9280.2007.01916.x" },
      { text: "Torre & Lieberman (2018): Putting Feelings Into Words: Affect Labeling as Implicit Emotion Regulation. Emotion Review", url: "https://journals.sagepub.com/doi/10.1177/1754073917742706" },
      { text: "Willcox (1982): The Feeling Wheel. Transactional Analysis Journal", url: "https://journals.sagepub.com/doi/10.1177/036215378201200411" },
    ],
  },
  {
    id: "selbstmitgefuehl",
    gruppe: "gefuehle",
    titel: "Selbstmitgefühl-Pause",
    dauer: "3 Minuten",
    kurz: "So freundlich mit dir sein wie mit einer guten Freundin.",
    art: "schritte",
    einleitung: [
      "Viele Menschen sind mit anderen viel freundlicher als mit sich selbst. Die Selbstmitgefühl-Pause nach Kristin Neff verbindet drei Schritte: wahrnehmen, was schwer ist, sich erinnern, dass andere das auch kennen, und sich selbst freundlich begegnen. Programme mit solchen Übungen verringern in Studien Stress und Selbstkritik.",
    ],
    achtung: "Fang mit etwas Kleinem an. Freundlich zu sich zu sein, kann anfangs ungewohnt sein oder traurig machen. Das ist normal. Du kannst jederzeit aufhören.",
    schritte: [
      { titel: "Etwas Kleines", text: "Denk an etwas, das dich gerade ein bisschen belastet. Nimm nichts ganz Schweres.", sekunden: 30 },
      { titel: "Im Körper", text: "Wo spürst du das im Körper?", sekunden: 20 },
      { titel: "Anerkennen", text: "Sag dir leise: „Das ist gerade schwer.“ Oder einfach: „Autsch.“", sekunden: 15 },
      { titel: "Nicht allein", text: "Sag dir: „So etwas kennen viele Menschen. Ich bin damit nicht allein.“", sekunden: 20 },
      { titel: "Wärme", text: "Leg eine Hand auf dein Herz oder an eine andere Stelle, die sich gut anfühlt. Spür die Wärme. Das ist freiwillig.", sekunden: 30 },
      { titel: "Freundliche Worte", text: "Was würdest du jetzt einer guten Freundin oder einem guten Freund sagen? Sag es dir selbst. Zum Beispiel: „Ich darf freundlich zu mir sein.“", sekunden: 45 },
    ],
    quellen: [
      { text: "Self-Compassion Break – Kristin Neff, self-compassion.org", url: "https://self-compassion.org/exercises/exercise-2-self-compassion-break/" },
      { text: "Self-Compassion Break – Greater Good in Action, UC Berkeley", url: "https://ggia.berkeley.edu/practice/self_compassion_break" },
      { text: "Ferrari u. a. (2019): Self-Compassion Interventions and Psychosocial Outcomes. Mindfulness", url: "https://acuresearchbank.acu.edu.au/item/87545/self-compassion-interventions-and-psychosocial-outcomes-a-meta-analysis-of-rcts" },
    ],
  },
  {
    id: "schreiben",
    gruppe: "gefuehle",
    titel: "Von der Seele schreiben",
    dauer: "15 Minuten",
    kurz: "Aufschreiben, was dich beschäftigt, ohne auf Form zu achten.",
    art: "schreiben",
    einleitung: [
      "Beim expressiven Schreiben nach James Pennebaker schreibst du etwa 15 Minuten über etwas, das dich beschäftigt, an bis zu vier Tagen hintereinander. Studien zeigen im Schnitt eine kleine, aber verlässliche Wirkung.",
      "Such dir einen ruhigen Ort. Schreib ohne Pause, Rechtschreibung ist egal. Schreib, was passiert ist, und was du dabei gefühlt und gedacht hast. Schau auch aus anderen Blickwinkeln: Wie sehen es andere? Was bedeutet es heute für dich? Mach danach etwas Ruhiges.",
    ],
    achtung: "Wähle nichts, das sich gerade zu groß anfühlt. Danach kann es dir kurz schlechter gehen, das geht meist vorbei. Wenn es zu viel wird, hör sofort auf.",
    impulse: ["Was beschäftigt mich?"],
    quellen: [
      { text: "Expressive Writing – Speaking of Psychology, American Psychological Association", url: "https://www.apa.org/news/podcasts/speaking-of-psychology/expressive-writing" },
      { text: "Expressive Writing – Greater Good in Education, UC Berkeley", url: "https://ggie.berkeley.edu/wp-content/uploads/2021/06/GGIE_Expressive_Writing.pdf" },
      { text: "Frattaroli (2006): Experimental Disclosure and Its Moderators. Psychological Bulletin 132, 823–865", url: "https://doi.org/10.1037/0033-2909.132.6.823" },
    ],
  },
  {
    id: "sorgenzeit",
    gruppe: "gedanken",
    titel: "Sorgenzeit",
    dauer: "15 Minuten",
    kurz: "Sorgen aufschreiben und auf eine feste Zeit verschieben.",
    art: "schreiben",
    einleitung: [
      "Wenn Sorgen den ganzen Tag begleiten, hilft eine feste Sorgenzeit. Die Methode stammt aus der Verhaltenstherapie und ist gut erforscht.",
      "Leg eine feste Zeit am Tag fest, etwa 15 Minuten am frühen Abend, nicht direkt vor dem Schlafen. Wenn tagsüber eine Sorge kommt, schreib sie in zwei, drei Wörtern auf und sag dir: „Darum kümmere ich mich später.“ In deiner Sorgenzeit liest du die Liste. Manche Sorgen sind dann schon kleiner. Wenn die Zeit um ist, hörst du auf und machst etwas Angenehmes.",
    ],
    achtung: "Am Anfang fällt das Verschieben schwer, mit Übung wird es leichter. Dringende Dinge darfst du sofort erledigen.",
    impulse: [
      "Meine Sorgen für später, in wenigen Wörtern",
      "In der Sorgenzeit: Kann ich bei einer Sorge etwas tun? Mein kleiner nächster Schritt",
    ],
    quellen: [
      { text: "Tackling your worries – NHS Every Mind Matters", url: "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/" },
      { text: "Krzikalla u. a. (2024): Worry Postponement. Clinical Psychology in Europe", url: "https://cpe.psychopen.eu/index.php/cpe/article/view/12741" },
    ],
  },
  {
    id: "gedanken",
    gruppe: "gedanken",
    titel: "Gedanken prüfen",
    dauer: "10 Minuten",
    kurz: "Einen belastenden Gedanken in Ruhe von mehreren Seiten anschauen.",
    art: "schreiben",
    einleitung: [
      "Gedanken sind keine Tatsachen. Diese Übung aus der kognitiven Verhaltenstherapie hilft, einen belastenden Gedanken in Ruhe anzuschauen und eine fairere Sicht zu finden. Ziel ist nicht, positiv zu denken, sondern ausgewogener.",
    ],
    achtung: "Es geht nicht darum, Gefühle wegzumachen. Manche Gedanken lassen sich nicht ändern, das ist in Ordnung.",
    impulse: [
      "Die Situation: Wo warst du, was ist passiert? Ein Satz reicht.",
      "Welcher Gedanke kam dir? Schreib ihn genau so auf.",
      "Welches Gefühl war dabei?",
      "Was spricht für den Gedanken? Was spricht dagegen?",
      "Was würdest du einer Freundin oder einem Freund in dieser Lage sagen?",
      "Ein fairerer Gedanke. Er muss nicht positiv sein.",
    ],
    quellen: [
      { text: "Reframing unhelpful thoughts – NHS Every Mind Matters", url: "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/reframing-unhelpful-thoughts/" },
    ],
  },
  {
    id: "schoenes",
    gruppe: "kraft",
    titel: "Schönes einplanen",
    dauer: "5 Minuten",
    kurz: "Kleine gute Dinge für die Woche fix einplanen.",
    art: "schreiben",
    einleitung: [
      "Wenn die Kraft fehlt, warten viele, bis die Lust wiederkommt. Oft ist es umgekehrt: Wer etwas Gutes tut, bekommt wieder Lust. Das Einplanen angenehmer und sinnvoller Tätigkeiten ist eine gut erforschte Methode aus der Verhaltenstherapie.",
      "Mach jede Sache klein. Statt „Sport machen“ lieber „10 Minuten spazieren gehen“. Achte auf eine Mischung aus etwas, das Freude macht, und etwas, das dir wichtig ist.",
    ],
    achtung: "Wenn du einen Plan nicht schaffst, ist das kein Scheitern. Plan einfach neu.",
    impulse: [
      "Drei bis fünf Dinge, die mir früher gutgetan haben oder die ich ausprobieren will",
      "Eine Sache für diese Woche, mit Tag und Uhrzeit",
      "Was könnte dazwischenkommen, und was mache ich dann?",
      "Danach: Wie war es? Ein kurzer Satz.",
    ],
    quellen: [
      { text: "Ekers u. a. (2014): Behavioural Activation for Depression. PLoS ONE 9, e100100", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0100100" },
      { text: "Behavioural activation – Greater Manchester Mental Health NHS", url: "https://www.gmmh.nhs.uk/behavioural-activation" },
    ],
  },
];

// Reihenfolge innerhalb der Gruppen.
const REIHENFOLGE = ["atmung", "muskelentspannung", "koerperreise", "sinne", "gefuehle", "selbstmitgefuehl", "schreiben", "sorgenzeit", "gedanken", "staerken", "schoenes", "abendroutine", "wochenrueckblick"];
export const UEBUNGEN: Uebung[] = [...BASIS, ...NEU].sort((a, b) => REIHENFOLGE.indexOf(a.id) - REIHENFOLGE.indexOf(b.id));
