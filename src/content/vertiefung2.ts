// Vertiefungen für Verstehen-Seiten (Teil 2). Recherche 18.10.2026.
// Nur Quellen, die bei der Recherche tatsächlich geöffnet wurden.

interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }
export interface Ergaenzung { absaetze: Abschnitt[]; irrtuemer: Irrtum[]; angehoerige: string[]; quellen: Quelle[] }

const GV_ADHS: Quelle = { text: "ADHS bei Erwachsenen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/adhs-erwachsene.html" };
const BUND_ADHS: Quelle = { text: "ADHS – gesund.bund.de", url: "https://gesund.bund.de/adhs" };
const GV_ANGEH: Quelle = { text: "Psychische Erkrankungen: Was können Angehörige tun? – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/angehoerige-psychische-erkrankungen.html" };
const HPE: Quelle = { text: "HPE Österreich – Hilfe für Angehörige psychisch Erkrankter", url: "https://www.hpe.at" };
const BAPK: Quelle = { text: "BApK – Bundesverband der Angehörigen psychisch erkrankter Menschen", url: "https://www.bapk.de" };

export const VERTIEFUNG_2: Record<string, Ergaenzung> = {
  adhs: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Viele Erwachsene mit ADHS beschreiben eine innere Unruhe, die selten ganz verschwindet. Von außen wirken sie vielleicht ruhig, innen läuft ständig etwas. Gedanken springen weiter, bevor der erste zu Ende gedacht ist.",
          "Im Alltag zeigt sich das oft an kleinen Dingen: Termine rutschen durch, Rechnungen bleiben liegen, eine Aufgabe wird begonnen und eine andere wirkt plötzlich dringender. Zeit fühlt sich dehnbar an, bis es auf einmal zu spät ist. Viele kennen das Gefühl, eigentlich zu wissen, was zu tun wäre, und trotzdem nicht anfangen zu können.",
          "Häufig gehören auch starke Gefühle dazu. Kleine Rückschläge können heftigen Ärger oder Frust auslösen, der dann schnell wieder abflaut. Manche erzählen, dass sie sich jahrelang für faul oder chaotisch gehalten haben, bevor sie eine Erklärung fanden. Gleichzeitig berichten viele von Phasen großer Begeisterung, in denen sie sich stundenlang in ein Thema vertiefen können.",
        ],
      },
      {
        titel: "Wie es dazu kommen kann",
        text: [
          "ADHS entsteht durch ein Zusammenspiel von Veranlagung und äußeren Einflüssen. Als Hinweis auf eine genetische Veranlagung gilt, dass die Weitergabe des Botenstoffs Dopamin in bestimmten Hirnbereichen verändert ist.",
          "Auch Einflüsse in der Schwangerschaft können eine Rolle spielen, etwa Rauchen, Alkohol oder Drogen. Betroffen ist davon aber immer nur ein kleiner Teil der Kinder. Ob Reizflut, Leistungsdruck oder Ernährung eine Rolle spielen, ist unklar, die Ernährung höchstens eine geringe.",
          "Wichtig: ADHS ist keine Folge schlechter Erziehung. Wie gut jemand mit ADHS zurechtkommt, hängt aber auch vom Umfeld ab, etwa von Struktur, Verständnis und passenden Anforderungen.",
        ],
      },
      {
        titel: "Wie eine Behandlung abläuft",
        text: [
          "Am Anfang steht ein ausführliches Gespräch über die Lebensgeschichte. Weil ADHS in der Kindheit beginnt, wird auch nach dieser Zeit gefragt. Fragebögen und in Österreich manchmal eine klinisch-psychologische Testung können ergänzen. Ebenso wichtig ist, andere Ursachen auszuschließen, etwa Schlafstörungen, eine Schilddrüsenüberfunktion, Depression oder eine bipolare Erkrankung.",
          "In Österreich sind Fachärztinnen und Fachärzte für Psychiatrie und spezialisierte ADHS-Ambulanzen die Anlaufstellen für die Abklärung bei Erwachsenen. In Deutschland können sich Erwachsene an eine Praxis für Psychiatrie oder Psychotherapie wenden.",
          "Die Behandlung wird gemeinsam geplant. Sie beginnt mit Information über ADHS, Psychoedukation genannt. Psychotherapie, vor allem kognitive Verhaltenstherapie, hilft beim Aufbau von Alltagsstrategien und bei der emotionalen Entlastung.",
          "Wenn eigene Strategien nicht ausreichen, können Medikamente die Aufmerksamkeit deutlich verbessern. Ärztin oder Arzt informieren über Nutzen und Risiken, und es braucht regelmäßige Kontrollen. Wer schwanger ist oder einen Kinderwunsch hat, sollte das ansprechen.",
        ],
      },
      {
        titel: "Was du selbst tun kannst",
        text: [
          "Fachleute empfehlen feste Routinen und eine klare Tagesstruktur. Erinnerungen und Listen entlasten das Gedächtnis. Große Aufgaben lassen sich in kleine Schritte teilen, und es hilft, sich jeweils auf eine Sache zu konzentrieren.",
          "Ausreichend Schlaf, regelmäßige Mahlzeiten und Bewegung wirken sich positiv aus. Viel Stress verstärkt die Schwierigkeiten dagegen oft.",
          "Austausch mit anderen kann entlasten. In Deutschland bietet der Selbsthilfeverband ADHS Deutschland e. V. örtliche Gruppen, Online-Gruppen und Telefonberatung an, auch für Erwachsene und Familien.",
        ],
      },
    ],
    irrtuemer: [
      { irrtum: "ADHS wächst sich aus.", richtig: "Etwa 50 bis 80 Prozent der Menschen, die als Kind ADHS hatten, haben als Erwachsene zumindest teilweise noch Beschwerden. Die äußere Unruhe nimmt oft ab, die innere bleibt häufig." },
      { irrtum: "ADHS kommt von falscher Erziehung.", richtig: "ADHS entsteht aus Veranlagung und äußeren Einflüssen. Kinder mit ADHS verhalten sich nicht absichtlich so und leiden selbst unter den Folgen." },
      { irrtum: "ADHS betrifft vor allem Buben und Männer.", richtig: "Neuere Forschung spricht dafür, dass Frauen ähnlich häufig betroffen sind. Sie erhalten die Diagnose aber oft später." },
    ],
    angehoerige: [
      "Das Verhalten ist nicht gegen dich gerichtet. Vergesslichkeit oder Unpünktlichkeit sind meist kein Zeichen von Gleichgültigkeit.",
      "Feste Routinen und klare Absprachen helfen oft der ganzen Familie. Achte in Familien mit Kindern darauf, dass Geschwister nicht zu kurz kommen.",
      "Familie und Freundeskreis können eine wichtige Stütze sein. Bei größeren Konflikten kann eine systemische Familientherapie helfen.",
      "ADHS Deutschland e. V. bietet Informationen und Beratung für Familien an. In Österreich findest du Selbsthilfegruppen über die Gesundheitssuche auf gesundheit.gv.at.",
    ],
    quellen: [
      GV_ADHS, BUND_ADHS,
      { text: "ADHS Deutschland e. V. – Selbsthilfe für Menschen mit ADHS", url: "https://www.adhs-deutschland.de" },
      { text: "S3-Leitlinie ADHS im Kindes-, Jugend- und Erwachsenenalter, Version 2.0, Evidenzübersicht (DGKJP, DGPPN u. a.)", url: "https://www.dgppn.de/_Resources/Persistent/22d1c2a7dff363e5d8c2bab83c5ffc2d8046af71/028-045e_S3_KF_Aufmerksamkeitsdefizit-Hyperaktivit%C3%A4tsstoerung-ADHS-Kinder-Jugendliche-Erwachsene_205-05.pdf" },
    ],
  },

  persoenlichkeit: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Viele Menschen beschreiben, dass sie sich selbst schwer greifen können. Mal fühlt sich der eigene Wert stabil an, kurz darauf wie weggewischt. Manche sprechen von einer inneren Leere, die sich kaum füllen lässt.",
          "Beziehungen sind oft besonders intensiv. Nähe kann sehr wohltun und gleichzeitig große Angst auslösen, wieder verlassen zu werden. Ein kleiner Anlass, eine späte Antwort oder ein falscher Ton, kann einen Sturm an Gefühlen auslösen.",
          "Bei einem Borderline-Muster erzählen Betroffene häufig von einer kaum aushaltbaren inneren Anspannung. Manche versuchen, sie mit impulsiven Handlungen zu lösen, etwa mit Alkohol, Essanfällen oder Selbstverletzung. Danach kommen oft Scham und Schuld. Andere erleben vor allem, dass sie immer wieder in die gleichen Konflikte geraten, ohne zu verstehen, warum.",
        ],
      },
      {
        titel: "Wie es dazu kommen kann",
        text: [
          "Ein allgemein anerkanntes Modell gibt es noch nicht. Fachleute gehen von einem Zusammenwirken mehrerer Faktoren aus: genetische Veranlagung, biologische Besonderheiten im Gehirn und Erfahrungen im Leben.",
          "Belastende Erlebnisse in der Kindheit, etwa Gewalt, Missbrauch oder Vernachlässigung, kommen bei vielen Betroffenen vor. Sie sind aber nicht bei allen vorhanden und erklären nicht alles.",
          "Persönlichkeitsmuster entstehen oft als Antwort auf schwierige Umstände. Was früher geschützt hat, kann später im Weg stehen. Das ist niemandes Schuld, aber es lässt sich verändern.",
        ],
      },
      {
        titel: "Wie eine Behandlung abläuft",
        text: [
          "Am Anfang stehen mehrere Gespräche über Lebensgeschichte, Beziehungen und frühere Krisen. Eine Vertrauensperson kann dabei sein, wenn du zustimmst. Fragebögen, eine klinisch-psychologische Testung und körperliche Untersuchungen helfen, andere Ursachen auszuschließen. Die Einschätzung wird meist über mehrere Termine hinweg bestätigt.",
          "Beteiligt sind Fachärztinnen und Fachärzte für Psychiatrie, Psychotherapeutinnen und Psychotherapeuten sowie klinische Psychologinnen und Psychologen. In Österreich gibt es auch spezialisierte Spitalsambulanzen.",
          "Im Mittelpunkt steht Psychotherapie, einzeln oder in der Gruppe. Neben der Dialektisch-Behavioralen Therapie gibt es die Mentalisierungsbasierte Therapie, die hilft, eigene Gefühle und Handlungen besonders in Beziehungen besser zu verstehen, außerdem die Übertragungsfokussierte Psychotherapie und die Schematherapie.",
          "Für Persönlichkeitsstörungen gibt es keine eigens zugelassenen Medikamente. Sie können bei starken Beschwerden zeitlich begrenzt ergänzen, ersetzen die Psychotherapie aber nicht. Beruhigungsmittel mit Abhängigkeitsrisiko sollten nicht eingesetzt werden. In akuten Krisen kann ein Krankenhausaufenthalt nötig sein.",
        ],
      },
      {
        titel: "Was du selbst tun kannst",
        text: [
          "In der Dialektisch-Behavioralen Therapie werden Fähigkeiten trainiert, Gefühle und Verhalten besser zu steuern. Was dort geübt wird, lässt sich nach und nach in den Alltag übertragen.",
          "Es gibt Sicherheit, zu wissen, was in einer Krise zu tun ist. Wichtige Nummern wie Krisendienst, 144 oder 112 griffbereit zu haben, kann in schweren Momenten helfen.",
          "Selbsthilfegruppen können die Therapie ergänzen. In Österreich findest du sie über die Gesundheitssuche auf gesundheit.gv.at.",
        ],
      },
    ],
    irrtuemer: [
      { irrtum: "Borderline ist unheilbar.", richtig: "Langzeitstudien zeigen, dass langfristig etwa die Hälfte bis zwei Drittel der Menschen mit Borderline-Störung die Kriterien nicht mehr erfüllen. Auch Niedergeschlagenheit und Einschränkungen im Alltag nehmen deutlich ab." },
      { irrtum: "Eine Persönlichkeitsstörung ist ein schlechter Charakter.", richtig: "Persönlichkeitsstörungen entstehen aus Veranlagung, biologischen Faktoren und Lebenserfahrungen. Die Grenze zur durchschnittlichen Persönlichkeit ist fließend." },
      { irrtum: "Selbstverletzung soll nur Aufmerksamkeit erzeugen.", richtig: "Selbstverletzung ist oft ein Versuch, unerträgliche innere Anspannung zu lindern. Sie verdient Ernst und Unterstützung, keine Abwertung." },
      { irrtum: "Gegen Persönlichkeitsstörungen helfen Tabletten.", richtig: "Es gibt keine eigens dafür zugelassenen Medikamente. Die wichtigste Behandlung ist Psychotherapie." },
    ],
    angehoerige: [
      "Informiere dich über die Erkrankung. Das hilft, heftige Reaktionen besser einzuordnen und weniger persönlich zu nehmen.",
      "Mitgefühl und klare Grenzen schließen sich nicht aus. Bewusst gesetzte Grenzen schützen beide Seiten.",
      "Mit Zustimmung der betroffenen Person können Angehörige in Gespräche und in die Therapie einbezogen werden.",
      "Ankündigungen, sich das Leben zu nehmen, immer ernst nehmen und die Person nicht allein lassen. Im Notfall 144 bzw. 112.",
      "Achte auch auf dich. Beratung für Angehörige bieten in Österreich HPE (Telefon 01 526 42 02) und in Deutschland der BApK mit dem SeeleFon (0228 71002424).",
    ],
    quellen: [
      { text: "Borderline-Persönlichkeitsstörung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/borderline.html" },
      { text: "Persönlichkeitsstörungen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/persoenlichkeitsstoerungen.html" },
      { text: "Álvarez-Tomás u. a. (2019): Long-term clinical and functional course of Borderline Personality Disorder: A meta-analysis of prospective studies. European Psychiatry", url: "https://www.recercat.cat/handle/2445/175985?show=full" },
      HPE, BAPK,
    ],
  },

  psychose: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Eine Psychose beginnt oft leise. Viele erinnern sich an Wochen oder Monate davor, in denen etwas nicht stimmte: schlechter Schlaf, Unruhe, Mühe beim Konzentrieren, der Wunsch, sich zurückzuziehen. Schule, Studium oder Arbeit wurden plötzlich schwer.",
          "Manche beschreiben, dass die Welt sich verändert anfühlte, als hätte alles eine verborgene Bedeutung. Andere hatten das Gefühl, beobachtet zu werden, oder hörten Stimmen, die für sie völlig echt klangen. In einer akuten Psychose ist dieses Erleben so überzeugend, dass Zweifel kaum möglich sind.",
          "Danach berichten viele von Erschöpfung, Verunsicherung und Scham. Das Erlebte kann lange nachwirken und am Selbstwert nagen. Gleichzeitig finden viele nach einer Psychose gut in ihren Alltag zurück.",
        ],
      },
      {
        titel: "Wie es dazu kommen kann",
        text: [
          "Eine einzelne Ursache gibt es nicht. Fachleute gehen davon aus, dass Veranlagung und Umwelt zusammenwirken. Das Risiko ist höher, wenn Eltern oder Geschwister erkrankt sind. Von den Kindern eines erkrankten Elternteils erkranken etwa 12 Prozent. Die große Mehrheit also nicht.",
          "Als begünstigend gelten starker Stress, traumatische Erfahrungen, Schlafmangel und Drogen, vor allem häufiger Cannabiskonsum und Amphetamine. Psychosen treten oft in Umbruchzeiten auf, etwa bei Trennungen, Umzügen oder beim Berufseinstieg.",
          "Auch eine Familienatmosphäre mit viel Kritik kann belasten. Das bedeutet nicht, dass Familien schuld sind. Es zeigt aber, wie viel ein ruhiges, unterstützendes Umfeld bewirken kann.",
        ],
      },
      {
        titel: "Wie eine Behandlung abläuft",
        text: [
          "Erste Anlaufstelle ist oft die Hausarztpraxis, in Österreich auch direkt eine Fachärztin oder ein Facharzt für Psychiatrie. Bei Jugendlichen ist die Kinder- und Jugendpsychiatrie zuständig. Zur Abklärung gehören Gespräche, auf Wunsch auch mit Angehörigen, sowie körperliche und neurologische Untersuchungen, um andere Ursachen auszuschließen.",
          "Eine akute Psychose wird häufig stationär in einer psychiatrischen Klinik behandelt. Gegen den eigenen Willen ist das nur unter strengen Voraussetzungen erlaubt, wenn eine akute Gefahr für sich oder andere nicht anders abzuwenden ist. Eine akute Phase kann Wochen bis Monate dauern.",
          "Antipsychotische Medikamente lassen akute Beschwerden abklingen und können vor Rückfällen schützen. Sie können belastende Nebenwirkungen haben. Wie lange sie genommen werden, wird gemeinsam ärztlich entschieden. Psychotherapie, vor allem kognitive Verhaltenstherapie und Familientherapie, hilft in allen Phasen. Dazu kommen Psychoedukation, Training sozialer und geistiger Fähigkeiten, Bewegung und Unterstützung bei Arbeit und Wohnen.",
          "Früh zu behandeln verbessert die Aussichten. An manchen Kliniken in Deutschland gibt es Früherkennungsambulanzen, flächendeckend sind sie aber nicht. In einer Behandlungsvereinbarung kannst du vorab festlegen, was in einer Krise gelten soll.",
        ],
      },
      {
        titel: "Was du selbst tun kannst",
        text: [
          "Gemeinsam mit dem Behandlungsteam einen Krisenplan erstellen: Welche Frühzeichen kenne ich? Wen rufe ich an? Was hilft mir? Angehörige können dabei eingebunden werden.",
          "Eine gute Tagesstruktur und Hobbys helfen im Alltag. Weil Schlafmangel, Stress und Drogen wie Cannabis Psychosen begünstigen können, lohnt es sich, darauf zu achten und offen mit dem Behandlungsteam darüber zu sprechen.",
          "Austausch in Psychoedukationsgruppen oder Selbsthilfegruppen kann die Behandlung ergänzen.",
        ],
      },
    ],
    irrtuemer: [
      { irrtum: "Menschen mit Schizophrenie sind gefährlich.", richtig: "Die meisten Menschen mit einer Psychose werden anderen gegenüber nicht gewalttätig. Sie werden häufiger selbst Opfer von Gewalt, Vernachlässigung und Ausgrenzung." },
      { irrtum: "Schizophrenie bedeutet eine gespaltene Persönlichkeit.", richtig: "Das ist ein verbreitetes Missverständnis. Bei einer Schizophrenie verändern sich Wahrnehmung und Denken, die Persönlichkeit ist nicht gespalten." },
      { irrtum: "Wer einmal eine Psychose hatte, wird nie wieder gesund.", richtig: "Laut WHO kann mindestens ein Drittel der Menschen mit Schizophrenie vollständig genesen. Bei rund einem Viertel bleibt es bei einer einzigen Psychose." },
      { irrtum: "Psychotherapie hilft bei Psychosen nicht.", richtig: "Psychotherapie kann Beschwerden lindern und den Umgang mit der Erkrankung verbessern, auch während einer akuten Phase." },
    ],
    angehoerige: [
      "Du bist oft der erste Mensch, dem Veränderungen auffallen. Sprich sie ruhig an und ermutige zu einer ärztlichen Abklärung.",
      "Ein offenes Ohr und praktische Hilfe im Alltag unterstützen und geben Stabilität.",
      "Psychoedukation für Angehörige vermittelt Wissen über Frühzeichen, Behandlung und Umgang. Frag in der behandelnden Klinik danach.",
      "Bei Suizidgedanken oder akuter Gefahr nicht allein lassen und sofort Hilfe holen: 144 bzw. 112.",
      "Sorge auch für dich. HPE Österreich hat eine Broschüre zu psychiatrischen Krisen und bietet Beratung an, in Deutschland berät das SeeleFon des BApK.",
    ],
    quellen: [
      { text: "Schizophrenie – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/schizophrenie1.html" },
      { text: "Schizophrenie – gesund.bund.de", url: "https://gesund.bund.de/schizophrenie" },
      { text: "WHO: Schizophrenia, Fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia" },
      { text: "Leopold u. a. (2015): Angebote zur Früherkennung von Psychosen und bipolaren Störungen in Deutschland: Bestandsaufnahme. Der Nervenarzt", url: "https://fis.uke.de/portal/de/publications/angebote-zur-fruherkennung-von-psychosen-und-bipolaren-stoerungen-in-deutschland-bestandsaufnahme(1ddee0f3-f8a5-4191-9c0a-8415ac364d42).html" },
      GV_ANGEH, HPE, BAPK,
    ],
  },

  alkohol: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Am Anfang steht oft etwas Angenehmes. Ein Glas entspannt nach einem harten Tag, macht lockerer, dämpft Sorgen. Wer erlebt, dass Alkohol scheinbar hilft, greift unter Druck eher wieder dazu.",
          "Viele beschreiben, dass sich die Rolle des Trinkens schleichend verändert hat. Der Abend ohne Glas fühlt sich leer an. Man nimmt sich vor, heute weniger zu trinken, und es wird doch mehr. Man fängt an, Mengen zu verschweigen oder Ausreden zu finden.",
          "Bei einer Abhängigkeit kommt oft der Körper dazu. Morgens zittern die Hände, man schwitzt, ist unruhig oder ängstlich, bis wieder getrunken wird. Viele erzählen von großer Scham und davon, wie anstrengend das Verheimlichen war.",
        ],
      },
      {
        titel: "Wie es dazu kommen kann",
        text: [
          "Warum manche Menschen abhängig werden und andere nicht, ist nicht endgültig geklärt. Alkoholprobleme haben viele Ursachen und sind keine Frage von Schuld oder persönlicher Schwäche.",
          "Das Risiko ist deutlich höher, wenn Eltern oder Geschwister abhängig waren. Auch das Umfeld spielt mit: Wie leicht Alkohol verfügbar ist, wie Familie und Freundeskreis damit umgehen, und ob belastende Zeiten wie Trennung, Verlust oder Probleme in der Arbeit dazukommen.",
          "Menschen mit Depressionen oder Ängsten nutzen Alkohol oft, um Beschwerden zu lindern. Alkohol kann solche Erkrankungen aber auch auslösen oder verstärken. Und je mehr getrunken wird, desto höher ist das Risiko einer Abhängigkeit.",
        ],
      },
      {
        titel: "Wie eine Behandlung abläuft",
        text: [
          "Ein guter erster Schritt ist ein Gespräch in einer Suchtberatungsstelle oder in der Hausarztpraxis. In Österreich ist die Beratung in Suchtberatungsstellen kostenlos und anonym. In Deutschland müssen bei anonymen Suchtberatungsstellen weder Name noch Krankenkasse angegeben werden.",
          "Bei einer Abhängigkeit folgt zuerst der körperliche Entzug, auch Entgiftung genannt. Er findet oft stationär unter ärztlicher Aufsicht statt, mit Medikamenten, die Entzugsbeschwerden lindern. In Deutschland gibt es dafür die qualifizierte Entzugsbehandlung, die neben der Entgiftung auch psychotherapeutische Angebote und die Planung der weiteren Behandlung umfasst.",
          "Danach kommt die Entwöhnung. Hier geht es darum, Auslöser für das Trinken zu verstehen und neue Wege zu finden, mit Gruppen- und Einzelgesprächen, Bewegung, Entspannung oder kreativen Therapien. Begleitende Depressionen oder Ängste werden mitbehandelt.",
          "In Deutschland wird die Entwöhnung meist bei der Rentenversicherung beantragt. Die Suchtberatungsstelle erstellt dafür gemeinsam mit dir einen Sozialbericht. Die Entwöhnung kann stationär, ganztägig ambulant oder ambulant stattfinden und dauert je nach Form mehrere Wochen oder Monate. In beiden Ländern folgt eine Nachsorge, etwa mit regelmäßigen Terminen in der Beratungsstelle und Selbsthilfegruppen.",
        ],
      },
      {
        titel: "Was du selbst tun kannst",
        text: [
          "Ein Trinktagebuch über einige Wochen zeigt, wann und wie viel getrunken wird. Die Deutsche Hauptstelle für Suchtfragen bietet dafür eine App an. Tipps zum Weniger-Trinken gibt es auf kenn-dein-limit.de vom Bundesinstitut für Öffentliche Gesundheit.",
          "In Österreich gibt es mit alkcoach ein kostenloses, anonymes Online-Programm über sechs Wochen, das beim Reduzieren unterstützt.",
          "Bei Abhängigkeit nicht allein und abrupt aufhören. Ein Entzug ohne ärztliche Begleitung kann zu Krampfanfällen und anderen gefährlichen Komplikationen führen.",
          "Die Anonymen Alkoholiker treffen sich regelmäßig, kostenlos und ohne Anmeldung, in Österreich unter 01 799 55 99 erreichbar. In Deutschland berät die Sucht & Drogen Hotline unter 01806 313031 täglich von 8 bis 24 Uhr, kostenpflichtig mit 20 Cent pro Anruf. Beratungsstellen findest du über das Suchthilfeverzeichnis der DHS und in Österreich über die Seite der Dialogwoche Alkohol.",
        ],
      },
    ],
    irrtuemer: [
      { irrtum: "Alkoholabhängigkeit ist eine Frage von Willensschwäche.", richtig: "Alkoholprobleme haben viele Ursachen, darunter Veranlagung, Belastungen und psychische Erkrankungen. Sie sind keine Frage von Schuld oder persönlicher Schwäche." },
      { irrtum: "Ein Entzug geht am besten allein zu Hause, einfach von heute auf morgen.", richtig: "Ein plötzlicher Entzug ohne ärztliche Begleitung kann gefährlich sein, bis hin zu Krampfanfällen oder einem lebensbedrohlichen Delir." },
      { irrtum: "Nach dem Entzug ist man über den Berg.", richtig: "Nach einem rein körperlichen Entzug ist das Rückfallrisiko sehr hoch. Deshalb folgen Entwöhnung und Nachsorge." },
      { irrtum: "Nach einer Entwöhnung kann man wieder kontrolliert trinken.", richtig: "Dafür gibt es keine Belege. Schon kleine Mengen bergen ein hohes Rückfallrisiko, deshalb wird nach einer Entwöhnung meist ganz auf Alkohol verzichtet." },
    ],
    angehoerige: [
      "Angehörige bemerken Probleme oft als Erste und sind unsicher, wie sie es ansprechen sollen. Ein ruhiger Moment und eine Beratung vorab können dabei helfen.",
      "Du kannst das Trinken eines anderen Menschen nicht kontrollieren. Achte auf deine eigene Gesundheit und deine Grenzen.",
      "Suchtberatungsstellen beraten auch Angehörige, in Deutschland auch die Sucht & Drogen Hotline.",
      "Al-Anon ist eine Selbsthilfegemeinschaft für Angehörige und Freunde, mit Gruppen in Deutschland und Österreich. Alateen richtet sich an Jugendliche, deren Leben vom Trinken eines Angehörigen geprägt ist.",
    ],
    quellen: [
      { text: "Alkoholabhängigkeit: Diagnose und Behandlung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/alkoholismus/diagnose.html" },
      { text: "Alkoholabhängigkeit: Symptome und Ursachen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/alkoholismus/folgen.html" },
      { text: "Alkohol – gesund.bund.de", url: "https://gesund.bund.de/alkohol" },
      { text: "Reha bei Abhängigkeitserkrankungen – Deutsche Rentenversicherung", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Reha/Medizinische-Reha/Sucht-Reha/sucht-reha.html" },
      { text: "Alkoholabhängigkeit mit einer medizinischen Rehabilitation überwinden (2026) – Deutsche Rentenversicherung", url: "https://www.deutsche-rentenversicherung.de/Bund/DE/Presse/Pressemitteilungen/pressemitteilungen_aktuell/2026/2026-06-10-aktionswoche-alkohol" },
      { text: "Sucht & Drogen Hotline – BIÖG", url: "https://www.bioeg.de/service/beratungsangebote/sucht-drogen-hotline/" },
      { text: "Suchthilfeverzeichnis – DHS", url: "https://www.dhs.de/service/suchthilfeverzeichnis" },
      { text: "Kenn dein Limit – BIÖG", url: "https://www.kenn-dein-limit.de" },
      { text: "Österreichische Dialogwoche Alkohol", url: "https://www.dialogwoche-alkohol.at" },
      { text: "alkcoach – Online-Selbsthilfeprogramm", url: "https://www.alkcoach.at" },
      { text: "Anonyme Alkoholiker Österreich", url: "https://www.anonyme-alkoholiker.at" },
      { text: "Al-Anon Familiengruppen Deutschland", url: "https://al-anon.de" },
      { text: "Al-Anon Familiengruppen Österreich", url: "https://www.al-anon.at" },
    ],
  },

  gaming: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Spielen ist für viele ein Ort, an dem es gut läuft. Man ist Teil einer Gruppe, wird für Erfolge gesehen, vergisst Sorgen. Genau deshalb kann es schwer werden, wieder aufzuhören.",
          "Wer die Kontrolle verliert, beschreibt oft, dass sich die Gedanken auch außerhalb des Spiels ums Spielen drehen. Aus einer Runde werden viele, die Nacht wird kurz. Vorsätze, weniger zu spielen, halten nicht lange. Ohne Spiel fühlen sich manche gereizt, unruhig oder leer.",
          "Nach und nach rücken andere Dinge in den Hintergrund: Schule, Arbeit, Freundschaften, Schlaf. Oft wird das lange heruntergespielt, auch vor sich selbst. Viele erzählen erst im Rückblick, wie sehr das Spielen dazu diente, schlechte Gefühle zu dämpfen.",
        ],
      },
      {
        titel: "Wie es dazu kommen kann",
        text: [
          "Spiele erfüllen echte Bedürfnisse nach Anerkennung, Gemeinschaft und Erfolgserlebnissen. Problematisch wird es oft dann, wenn diese Bedürfnisse im übrigen Leben zu kurz kommen.",
          "Risikofaktoren sind unter anderem das Jugendalter, Ängste, Niedergeschlagenheit oder ADHS, ein geringes Selbstwertgefühl, hohe Stressanfälligkeit, Impulsivität und soziale Isolation. Auch Krisen oder Vernachlässigung in der Familie können eine Rolle spielen.",
          "Häufiges Spielen im Mehrspielermodus gilt als zusätzlicher Risikofaktor. Die Spielzeit allein sagt aber noch nicht, ob ein Problem besteht.",
        ],
      },
      {
        titel: "Wie eine Behandlung abläuft",
        text: [
          "Anlaufstellen sind Suchtberatungsstellen, Fachärztinnen und Fachärzte für Psychiatrie oder Kinder- und Jugendpsychiatrie, Psychotherapeutinnen und Psychotherapeuten sowie klinische Psychologinnen und Psychologen. Zur Abklärung gehört ein ausführliches Gespräch, manchmal ergänzt um eine klinisch-psychologische Diagnostik.",
          "In der Behandlung wird zuerst gemeinsam angeschaut, wann und warum gespielt wird. Dann geht es darum, Gefühle anders zu regulieren, Risikosituationen zu erkennen, Zeit zu planen und andere Quellen für Freude und Anerkennung zu stärken. Gruppen können sinnvoll sein, weil man sich mit anderen austauschen kann.",
          "Oft geht der Behandlung eine lange Phase voraus, in der das Problem verleugnet wird. Rückschläge während der Behandlung sind möglich und gehören dazu. Begleitende Erkrankungen wie Ängste oder Depression werden mitbehandelt, falls nötig auch mit Medikamenten.",
        ],
      },
      {
        titel: "Was du selbst tun kannst",
        text: [
          "Feste Zeiten ohne Bildschirm, besonders vor dem Schlafen, und bewusst eingeplante andere Aktivitäten wie Bewegung oder Treffen mit Freundinnen und Freunden schaffen Gegengewicht.",
          "Für Eltern: Medienerziehung beginnt früh. Gemeinsame Vereinbarungen zu Medienzeiten, eigenes Vorbild, Altersempfehlungen beachten und Inhalte vorher anschauen helfen. Inhaltlich begleiten und regelmäßig gemeinsam über die Mediennutzung sprechen hält den Kontakt. Gemeinsame Zeit von guter Qualität stärkt die Beziehung und wirkt vorbeugend.",
          "In Deutschland bietet die Kampagne „Ins Netz gehen“ des BIÖG kostenlose Online-Beratung für Jugendliche und Bezugspersonen, für Eltern auch E-Mail-Beratung und eine Suche nach Beratungsstellen. In Österreich ist Rat auf Draht unter 147 rund um die Uhr kostenlos und anonym für Kinder und Jugendliche da. Beratungsstellen findest du über den Suchthilfekompass.",
        ],
      },
    ],
    irrtuemer: [
      { irrtum: "Wer viel spielt, ist süchtig.", richtig: "Nur ein kleiner Teil der Spielenden entwickelt eine Computerspielstörung. Entscheidend ist der Kontrollverlust mit spürbaren Folgen, meist über mindestens ein Jahr, nicht die Spielzeit allein." },
      { irrtum: "Ein komplettes Spielverbot ist die einzige Lösung.", richtig: "Ziel der Behandlung ist meist ein kontrollierter Umgang. Digitale Medien sind Teil des Alltags, und völlige Abstinenz ist dort kaum möglich." },
      { irrtum: "Computerspielsucht ist keine echte Erkrankung.", richtig: "Die Computerspielstörung ist in der ICD-11 der WHO eine eigenständige Diagnose. Sie kann Schlaf, Gesundheit, Ausbildung und Beziehungen stark belasten." },
    ],
    angehoerige: [
      "Sprich Sorgen ruhig und ohne Vorwürfe an. Frag, was das Spiel gibt, bevor du über Zeiten sprichst.",
      "Gemeinsam getroffene Vereinbarungen zu Medienzeiten helfen, ebenso das eigene Vorbild.",
      "Achte auf mögliche Belastungen hinter dem Spielen, etwa Ängste, Niedergeschlagenheit oder Einsamkeit.",
      "Hol dir Beratung, auch für dich selbst. Angehörige werden nach Möglichkeit in die Behandlung einbezogen, und Selbsthilfegruppen für Angehörige können entlasten.",
    ],
    quellen: [
      { text: "Internetsucht – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/internetsucht.html" },
      { text: "WHO: Addictive behaviours: Gaming disorder", url: "https://www.who.int/news-room/questions-and-answers/item/addictive-behaviours-gaming-disorder" },
      { text: "Themendossier „Ins Netz gehen“ (Stand 05.09.2025) – BIÖG", url: "https://www.bioeg.de/fileadmin/user_upload/PDF/medienservice/Themendossier_Ins_Netz_gehen_Stand_05092025.pdf" },
      { text: "Ins Netz gehen – BIÖG", url: "https://www.ins-netz-gehen.de/" },
      { text: "Rat auf Draht 147", url: "https://www.rataufdraht.at" },
    ],
  },

  burnout: {
    absaetze: [
      {
        titel: "Wie es sich anfühlen kann",
        text: [
          "Viele beschreiben, dass es mit besonders viel Einsatz begann. Man wollte gute Arbeit leisten, hat Überstunden gemacht, eigene Bedürfnisse zurückgestellt. Eine Zeit lang ging das gut.",
          "Irgendwann reicht das Wochenende nicht mehr zur Erholung. Die Müdigkeit bleibt, auch nach dem Urlaub. Aufgaben, die früher leicht waren, kosten enorme Kraft. Manche merken, dass sie Kolleginnen, Kunden oder Patienten innerlich auf Abstand halten, gereizt oder zynisch werden. Das kann sich fremd anfühlen und Schuldgefühle auslösen.",
          "Häufig meldet sich auch der Körper, mit schlechtem Schlaf, Magen-Darm-Beschwerden oder Schmerzen. Viele erzählen, dass sie sich am Ende leer fühlten und das Gefühl hatten, einfach nicht mehr weiterzukönnen.",
        ],
      },
      {
        titel: "Wie es dazu kommen kann",
        text: [
          "Im Mittelpunkt stehen Arbeitsbedingungen: anhaltender Zeitdruck, zu viel Verantwortung, Konflikte, ständige Erreichbarkeit und fehlende Anerkennung. Fachleute sprechen von einer Gratifikationskrise, wenn Einsatz und Anerkennung lange nicht zusammenpassen. Auch dauernde Unterforderung kann zermürben.",
          "Persönliche Eigenschaften können das Risiko erhöhen, etwa ein starkes Verantwortungsgefühl, Perfektionismus oder die Neigung, eigene Bedürfnisse hintanzustellen. Das sind oft Eigenschaften, die im Beruf geschätzt werden.",
          "Belastungen außerhalb der Arbeit, etwa die Pflege von Angehörigen, kommen häufig dazu. Erschöpfung ist also keine persönliche Schwäche, sondern meist eine Antwort auf zu lange zu viel.",
        ],
      },
      {
        titel: "Wie eine Behandlung abläuft",
        text: [
          "Erste Anlaufstelle ist oft die Hausarztpraxis. Wichtig ist eine gründliche Abklärung, weil hinter Erschöpfung auch eine Depression, Angststörung, Alkoholprobleme, Nebenwirkungen von Medikamenten oder körperliche Erkrankungen stecken können. Dazu gehören Gespräch, körperliche Untersuchung und eventuell weitere Tests.",
          "Verbindliche einheitliche Therapieempfehlungen für Burn-out gibt es noch nicht. Hilfreich sind Entlastung von Stressfaktoren, Entspannungsmethoden, Bewegung und das Hinterfragen eigener Muster, auch mit psychotherapeutischer Unterstützung. Manchmal hilft schon eine Änderung der Arbeitsbedingungen.",
          "Eine Auszeit kann bei reiner beruflicher Erschöpfung helfen. Bei einer Depression kann sie die Probleme dagegen verstärken, dann braucht es eine eigene Behandlung. Medikamente kommen nur gegen einzelne Beschwerden in Frage, etwa bei schweren Schlafproblemen, oder wenn eine Depression vorliegt.",
          "Bei längerer Erkrankung kann eine Rehabilitation sinnvoll sein. Die Rückkehr in die Arbeit sollte geplant werden. In Deutschland gibt es dafür die stufenweise Wiedereingliederung, bei der die Arbeitszeit Schritt für Schritt steigt. Sie ist freiwillig, und man bleibt währenddessen krankgeschrieben.",
        ],
      },
      {
        titel: "Was du selbst tun kannst",
        text: [
          "Arbeit und Freizeit klar trennen, realistische Pläne machen, Prioritäten setzen und Nein sagen, wenn etwas nicht machbar ist. Erholung bewusst einplanen, soziale Kontakte pflegen und früh um Hilfe bitten.",
          "Arbeitgeber sind verpflichtet, Belastungen am Arbeitsplatz zu beurteilen, auch psychische. In Österreich gilt das laut ArbeitnehmerInnenschutzgesetz seit 2013. Dabei geht es um die Arbeitsbedingungen, nicht um einzelne Personen. In Deutschland verlangt das Arbeitsschutzgesetz eine Gefährdungsbeurteilung, die auch psychische Belastungen umfasst. Betriebsärztinnen und Betriebsärzte beraten dabei.",
          "Ansprechpersonen im Betrieb sind Arbeitsmedizin, Arbeitspsychologie und Betriebsrat. In Österreich berät fit2work kostenlos, vertraulich und freiwillig, wenn körperliche oder seelische Belastungen die Arbeit erschweren, unter 0800 500 118.",
        ],
      },
    ],
    irrtuemer: [
      { irrtum: "Burn-out ist eine Diagnose.", richtig: "Die WHO beschreibt Burn-out als arbeitsbezogenes Phänomen, nicht als Krankheit. Es gibt keine einheitliche Definition. Ärztinnen und Ärzte vermerken es meist als Zusatz." },
      { irrtum: "Burn-out trifft nur Führungskräfte.", richtig: "Der Begriff wurde zuerst für helfende Berufe verwendet. Heute weiß man, dass Erschöpfung durch Überlastung Menschen in vielen Lebenslagen treffen kann." },
      { irrtum: "Ein langer Urlaub löst das Problem.", richtig: "Bei reiner beruflicher Erschöpfung kann eine Auszeit helfen. Steckt eine Depression dahinter, kann sie die Beschwerden verstärken." },
      { irrtum: "Burn-out kann man online feststellen.", richtig: "Online-Fragebögen eignen sich dafür nicht. Voreilige Eigeneinschätzungen können zu falschen Maßnahmen führen. Eine ärztliche Abklärung ist wichtig." },
    ],
    angehoerige: [
      "Nimm Erschöpfung ernst, auch wenn sie von außen nicht sichtbar ist. Sie ist keine Faulheit und keine Schwäche.",
      "Ermutige zu einer ärztlichen Abklärung, damit eine mögliche Depression nicht übersehen wird.",
      "Konkrete Entlastung im Alltag kann helfen, besonders wenn zusätzlich jemand gepflegt wird.",
      "Achte auf dich selbst. Wer selbst ausgelaugt ist, kann andere schlechter unterstützen.",
    ],
    quellen: [
      { text: "Burnout – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/psyche/burnout.html" },
      { text: "Burn-out-Syndrom – gesund.bund.de", url: "https://gesund.bund.de/burn-out-syndrom" },
      { text: "Psychische Belastungen am Arbeitsplatz – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/lebenswelt/beruf/psychische-belastung/gesundheit.html" },
      { text: "fit2work", url: "https://www.fit2work.at" },
      { text: "Stufenweise Wiedereingliederung – gesund.bund.de", url: "https://gesund.bund.de/stufenweise-wiedereingliederung" },
      { text: "Gefährdungsbeurteilung – AOK für Arbeitgeber", url: "https://www.aok.de/fk/bayern/betriebliche-gesundheit/grundlagen/sicherheit-und-gesundheit-bei-der-arbeit/gefaehrdungsbeurteilung/" },
      GV_ANGEH,
    ],
  },

  transgenerational: {
    absaetze: [],
    irrtuemer: [
      { irrtum: "Trauma wird über die Gene vererbt.", richtig: "Beim Menschen ist eine solche biologische Vererbung umstritten und nicht schlüssig belegt. Genetische, soziale und kulturelle Einflüsse lassen sich kaum trennen. Am besten belegt ist der Weg über Beziehungen und das Familienklima." },
      { irrtum: "Wer aus einer belasteten Familie stammt, ist zwangsläufig selbst belastet.", richtig: "Eine große Auswertung von 32 Stichproben mit Nachkommen von Holocaust-Überlebenden fand in nicht-klinischen Studien keine Hinweise auf eine allgemeine Belastung. Weitergabe ist kein Schicksal." },
      { irrtum: "Über die Vergangenheit zu schweigen, schützt die Kinder.", richtig: "Schweigen kann Gefühle ohne Geschichte hinterlassen. Entscheidend ist weniger, was Eltern erlebt haben, als ob es in eine zusammenhängende Geschichte gefasst werden kann." },
      { irrtum: "Was so lange her ist, spielt im Alter keine Rolle mehr.", richtig: "Belastende Erinnerungen können auch nach Jahrzehnten wieder aufbrechen, etwa wenn sich im Alter Verluste häufen oder Abhängigkeit droht." },
    ],
    angehoerige: [
      "Wenn alt gewordene Eltern oder Großeltern unruhig werden oder von früher erzählen, hilft es, behutsam nachzufragen und zuzuhören. Viele sprechen aus Scham nicht von sich aus darüber.",
      "Niemand muss erzählen. Ein Angebot zum Gespräch ist wertvoll, auch wenn es nicht sofort angenommen wird.",
      "Achte auch auf deine eigenen Grenzen. Die Beschäftigung mit Familiengeschichte kann aufwühlen, und es ist in Ordnung, Pausen zu machen.",
      "ESRA in Wien betreut auch Angehörige und Nachkommen von NS-Verfolgten, kostenlos. Wer mit einem psychisch erkrankten Elternteil aufgewachsen ist, findet bei HPE Österreich Angebote, in Deutschland bietet der BApK Beratung für Angehörige.",
    ],
    quellen: [
      { text: "Horsthemke (2018): A critical view on transgenerational epigenetic inheritance in humans. Nature Communications", url: "https://ideas.repec.org/a/nat/natcom/v9y2018i1d10.1038_s41467-018-05445-5.html" },
      { text: "Van IJzendoorn, Bakermans-Kranenburg & Sagi-Schwartz (2003): Are children of Holocaust survivors less well-adapted? Journal of Traumatic Stress", url: "https://cris.haifa.ac.il/en/publications/are-children-of-holocaust-survivors-less-well-adapted-a-meta-anal/" },
      { text: "Glaesmer & Brähler (2011): Die Langzeitfolgen des Zweiten Weltkrieges in der deutschen Bevölkerung. Psychotherapeutenjournal 4/2011", url: "https://www.alterundtrauma.de/files/alter-und-trauma/Newsletter/PTJ_4_2011_Glaesmer&Braehler_S346ff.pdf" },
      { text: "ESRA Wien – für wen ESRA da ist", url: "https://www.esra.at/fuer-wen-esra-da-ist/" },
      HPE, BAPK,
    ],
  },
};
