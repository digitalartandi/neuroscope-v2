// Vertiefung der Alltagsseiten (Ergänzung zu src/content/wissen.ts).
// Eigene Zusammenfassungen der unten genannten Quellen, abgerufen am 18.10.2026.
// Allgemeine Information, nie auf die Antworten der Person bezogen.

interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }
export interface AlltagErgaenzung { absaetze: Abschnitt[]; schritte: string[]; irrtuemer: Irrtum[]; quellen: Quelle[] }

export const VERTIEFUNG_ALLTAG: Record<string, AlltagErgaenzung> = {
  schlaf: {
    absaetze: [
      {
        titel: "Die innere Uhr",
        text: [
          "Dein Körper hat eine innere Uhr. Sie bestimmt mit, wann du müde wirst und wann du wach bist. Sitz dieser Uhr ist eine kleine Gruppe von Nervenzellen im Gehirn, die über die Augen Lichtsignale bekommt.",
          "Die innere Uhr läuft meist etwas länger als 24 Stunden. Licht stellt sie jeden Tag neu auf den äußeren Tag ein. Morgens schüttet der Körper Kortisol aus, das wach macht. Wird es dunkel, bildet er das Schlafhormon Melatonin. Helles Licht am späten Abend, etwa von Bildschirmen, bremst diese Melatoninbildung.",
          "Nicht alle ticken gleich. Es gibt Frühtypen, Spättypen und einen Mitteltyp, zu dem die meisten Menschen gehören. Dein Typ ist zum Teil angeboren. Ab der Pubertät verschiebt er sich nach hinten und bleibt bis ins mittlere Erwachsenenalter eher spät.",
        ],
      },
      {
        titel: "Schlafdruck: der zweite Taktgeber",
        text: [
          "Neben der inneren Uhr gibt es den Schlafdruck. Er wächst, je länger du wach bist, und sinkt, während du schläfst. Die Schlafforschung beschreibt das Zusammenspiel beider Vorgänge seit den 1980er Jahren im sogenannten Zwei-Prozess-Modell.",
          "Das erklärt eine Erfahrung, die viele kennen: Nach vier oder fünf Stunden Schlaf ist der Schlafdruck schon deutlich kleiner. In den frühen Morgenstunden wacht man deshalb leichter auf.",
        ],
      },
      {
        titel: "Schlaf verläuft in Wellen",
        text: [
          "Schlaf ist kein gleichmäßiger Zustand. Die Nacht besteht aus Zyklen von etwa 90 bis 110 Minuten. In jedem Zyklus folgen Einschlafen, Leichtschlaf, Tiefschlaf und Traumschlaf (REM-Schlaf) aufeinander. In einer Nacht von acht Stunden sind das ungefähr vier bis fünf Durchgänge.",
          "Der Tiefschlaf ist im ersten Drittel der Nacht am längsten. Der Traumschlaf wird dagegen gegen Morgen immer länger, von etwa zehn Minuten bis fast zu einer Stunde. Am Ende eines Zyklus wacht man oft kurz auf, meist ohne es zu bemerken. Während du schläfst, arbeitet der Körper weiter: Das Gedächtnis festigt Erlebtes, und Gefühle werden verarbeitet.",
        ],
      },
    ],
    schritte: [
      "Geh an drei Tagen in der ersten Stunde nach dem Aufstehen für ein paar Minuten ins Freie. Das Morgenlicht hilft deiner inneren Uhr.",
      "Stell das Schlafzimmer an einem Abend bewusst auf etwa 16 bis 18 Grad und lüfte vorher kurz durch.",
      "Trink an zwei Abenden in den drei bis vier Stunden vor dem Schlafen weder Alkohol noch Koffeinhaltiges und schau, wie die Nacht wird.",
      "Wenn du nachts wach liegst: Lass die Uhr in Ruhe. Steh nach etwa 15 Minuten auf und geh erst zurück ins Bett, wenn du wieder müde bist.",
      "Notiere eine Woche lang morgens in einem Satz, wie ausgeruht du dich fühlst. Das sagt mehr als die Zahl der Stunden.",
    ],
    irrtuemer: [
      {
        irrtum: "Jeder Mensch braucht acht Stunden Schlaf.",
        richtig: "Der Bedarf ist sehr verschieden. Im Durchschnitt schlafen Menschen in Mitteleuropa etwa sieben Stunden. Aussagekräftiger als eine feste Zahl ist, wie du dich am nächsten Tag fühlst.",
      },
      {
        irrtum: "Ein Glas am Abend hilft beim Schlafen.",
        richtig: "Alkohol macht zwar zuerst müde. In der zweiten Nachthälfte wacht man danach aber häufiger auf und schläft schwerer wieder ein.",
      },
      {
        irrtum: "Wer nachts aufwacht, schläft schlecht.",
        richtig: "Kurzes Aufwachen gehört zum normalen Ablauf zwischen den Schlafzyklen. Gegen Morgen ist der Schlafdruck kleiner, deshalb wacht man dann leichter auf. Oft schläft man auch, während es sich wie Wachliegen anfühlt.",
      },
    ],
    quellen: [
      { text: "Gut schlafen – gesund.bund.de (Bundesministerium für Gesundheit)", url: "https://gesund.bund.de/gut-schlafen" },
      { text: "Wachliegen mitten in der Nacht – Birgit Högl, Ambra Stefani (Medizinische Universität Innsbruck), Spektrum der Wissenschaft", url: "https://www.spektrum.de/frage/wachliegen-mitten-in-der-nacht/2278451" },
      { text: "Chronobiologie: Innere Uhren im Takt – Max-Planck-Gesellschaft", url: "https://www.mpg.de/10778204/chronobiologie?c=2191" },
      { text: "Schlafphasen – BARMER", url: "https://www.barmer.de/gesundheit-verstehen/leben/schlaf/schlafphasen-1489874" },
    ],
  },

  energie: {
    absaetze: [
      {
        titel: "Was die Bewegungsempfehlungen genau sagen",
        text: [
          "Die Weltgesundheitsorganisation WHO und die Österreichischen Bewegungsempfehlungen des Fonds Gesundes Österreich sagen dasselbe: Jede Aktivität bringt gesundheitlichen Nutzen, ob bei der Arbeit, auf dem Weg zu Fuß oder mit dem Rad oder in der Freizeit.",
          "Statt 150 Minuten in mittlerer Intensität reichen auch 75 Minuten mit höherer Intensität. Beides lässt sich mischen. Wer mehr als 300 Minuten schafft, hat zusätzlichen Nutzen. Bei den Muskelübungen sollen alle großen Muskelgruppen drankommen.",
          "Ebenso wichtig: lange Sitzphasen regelmäßig unterbrechen. Und der Schritt von gar keiner zu ein wenig Bewegung zählt laut den österreichischen Empfehlungen schon viel.",
        ],
      },
      {
        titel: "Tageslicht als Energiequelle",
        text: [
          "Licht wirkt über die Augen auf den Körper. Bei wenig Tageslicht bildet er mehr Melatonin, das müde und antriebsarm macht. Tageslicht fördert dagegen die Ausschüttung von Serotonin, einem Botenstoff, der mit guter Stimmung zusammenhängt.",
          "Auch an bewölkten Tagen ist draußen genug Licht vorhanden. Ideal ist etwa eine Stunde im Freien pro Tag. Schon ein kurzer Spaziergang in der Mittagspause kann helfen. Drinnen ist ein heller Platz am Fenster besser als ein dunkler Raum.",
        ],
      },
      {
        titel: "Essen und Trinken als Grundlage",
        text: [
          "Die Deutsche Gesellschaft für Ernährung (DGE) fasst gesundes Essen in zehn einfachen Regeln zusammen. Dazu gehören täglich drei Portionen Gemüse und zwei Portionen Obst, Vollkorn statt Weißmehl und eher pflanzliche als tierische Fette.",
          "Für das Trinken nennt die DGE etwa 1,5 Liter am Tag, am besten Wasser oder ungesüßten Tee. Und sie rät, sich Zeit zum Essen zu nehmen und nicht nebenbei vor dem Fernseher zu essen.",
        ],
      },
    ],
    schritte: [
      "Steh diese Woche bei langem Sitzen etwa einmal pro Stunde kurz auf, streck dich oder geh ein paar Schritte.",
      "Plane zwei Spaziergänge bei Tageslicht ein, gern auch an einem grauen Tag.",
      "Probier an zwei Tagen ein paar einfache Kraftübungen aus, zum Beispiel Kniebeugen am Sessel oder Wandliegestütze.",
      "Stell dir morgens eine Flasche Wasser sichtbar hin und schau am Abend, wie viel davon getrunken ist.",
      "Gönn dir eine Mahlzeit ohne Bildschirm und iss bewusst langsam.",
    ],
    irrtuemer: [
      {
        irrtum: "Bewegung zählt nur, wenn es richtiger Sport ist.",
        richtig: "Laut WHO hat jede Aktivität einen Nutzen, auch Gehen oder Radfahren zur Arbeit und Bewegung im Haushalt. Der erste Schritt weg vom reinen Sitzen ist besonders wertvoll.",
      },
      {
        irrtum: "Bei bewölktem Himmel bringt das Rausgehen fürs Licht nichts.",
        richtig: "Auch unter Wolken ist draußen genug Tageslicht vorhanden, deutlich mehr als in den meisten Innenräumen.",
      },
      {
        irrtum: "Das Solarium ersetzt im Winter das Tageslicht.",
        richtig: "Im Solarium wirkt UV-Licht nur über die Haut. Für die Stimmung zählt das Licht, das über die Augen aufgenommen wird. Die Strahlenschutzkommission rät von Solarien ab.",
      },
    ],
    quellen: [
      { text: "Physical activity – Weltgesundheitsorganisation (WHO)", url: "https://www.who.int/news-room/facts-in-pictures/detail/physical-activity" },
      { text: "Bewegungsempfehlungen für Erwachsene – gesundheit.gv.at (nach Fonds Gesundes Österreich)", url: "https://www.gesundheit.gv.at/leben/bewegung/gesund-durch-sport/bewegungsempfehlungen-erwachsene.html" },
      { text: "Herbst- und Winterblues – Techniker Krankenkasse", url: "https://www.tk.de/techniker/magazin/life-balance/wohlbefinden/herbst-und-winterblues-2016428" },
      { text: "10 Regeln der Ernährung in Leichter Sprache – Deutsche Gesellschaft für Ernährung (DGE)", url: "https://www.dge.de/fileadmin/dok/leichte-sprache/LS-10-Regeln-der-Ernaehrung.pdf" },
    ],
  },

  stress: {
    absaetze: [
      {
        titel: "Was bei Stress im Körper passiert",
        text: [
          "Stress ist eine uralte Reaktion, die dich auf eine Herausforderung vorbereitet. Dabei wird ein Teil des Nervensystems aktiv, der Sympathikus. Er arbeitet von selbst, du kannst ihn nicht bewusst ein- oder ausschalten.",
          "Zu Beginn schüttet der Körper Adrenalin und Noradrenalin aus. Blutdruck und Blutzucker steigen, die Atemwege weiten sich. Danach folgt Kortisol, das den Körper in Alarmbereitschaft hält. Ein Gegenspieler, das Hormon DHEA, sorgt dafür, dass die körperliche Stressreaktion nicht überhandnimmt.",
        ],
      },
      {
        titel: "Kurzer Stress und Dauerstress",
        text: [
          "Kurzfristig ist Stress sinnvoll. Er hilft, eine Prüfung, eine Frist oder eine plötzliche Gefahr zu meistern. Fachleute sprechen von Eustress, wenn Stress anspornt, und von Distress, wenn er belastet und Gefühle wie Wut, Angst oder Hilflosigkeit auslöst.",
          "Wie Stress erlebt wird, hängt von seiner Dauer und Stärke ab. Und davon, ob du das Gefühl hast, die Lage bewältigen zu können. Dieses Gefühl wirkt schützend.",
          "Hält Stress lange an, schüttet der Körper laufend Kortisol aus. Mit der Zeit folgen Erschöpfung und Anspannung, und auf neue Anforderungen zu reagieren fällt schwerer. Häufige Quellen für Dauerstress sind Konflikte in Familie, Beruf oder Ausbildung.",
        ],
      },
      {
        titel: "Erholung ist der Gegenspieler",
        text: [
          "Dem Sympathikus steht der Parasympathikus gegenüber. Er ist für Ruhe, Erholung und das Auftanken von Energie zuständig. Auch ihn kannst du nicht direkt steuern. Über Entspannungsübungen lässt er sich aber indirekt anregen.",
          "Entscheidend ist dabei die Regelmäßigkeit. Entspannungsübungen zeigen vor allem dann eine große Wirkung, wenn sie regelmäßig geübt werden. Stress an sich ist also nicht das Problem. Schwierig wird es, wenn die Erholung zwischendurch fehlt.",
        ],
      },
    ],
    schritte: [
      "Wähl eine Entspannungsübung aus und mach sie diese Woche jeden Tag fünf Minuten, am besten immer zur gleichen Zeit.",
      "Schreib an einem Abend auf, was dich heute angespannt hat, und markiere, was davon du beeinflussen kannst.",
      "Gönn dir nach einer anstrengenden Situation bewusst eine kurze Pause, bevor du mit dem Nächsten beginnst.",
      "Denk an eine schwierige Lage, die du schon gemeistert hast. Was hat dir damals geholfen?",
    ],
    irrtuemer: [
      {
        irrtum: "Stress ist immer schlecht.",
        richtig: "Kurzfristig hilft Stress, Herausforderungen zu meistern, und kann sogar anspornen. Belastend wird er vor allem, wenn er lange anhält und Erholung fehlt.",
      },
      {
        irrtum: "Entspannung muss man sich erst verdienen, wenn alles erledigt ist.",
        richtig: "Erholung ist kein Lohn, sondern der natürliche Gegenpol zur Anspannung. Regelmäßige kurze Pausen zwischendurch wirken besser, als auf den freien Tag zu warten.",
      },
      {
        irrtum: "Gegen die Stressreaktion kann man nichts tun, sie läuft automatisch ab.",
        richtig: "Das Nervensystem lässt sich nicht direkt steuern. Über Atemübungen, Muskelentspannung und regelmäßige Erholung kannst du es aber indirekt beeinflussen.",
      },
    ],
    quellen: [
      { text: "Stress: Was ist das? – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/stress/was-ist-das.html" },
      { text: "Entspannungsverfahren – Diversity News, FH Oberösterreich", url: "https://fh-ooe.at/assets/files/diversity-inclusion/News/2020/fhooe-diversity-news-entspannungsverfahren.pdf" },
    ],
  },

  stimmung: {
    absaetze: [
      {
        titel: "Wozu Gefühle da sind",
        text: [
          "Gefühle helfen uns, uns in der Welt zurechtzufinden. Sie lenken die Aufmerksamkeit auf Chancen und Gefahren und helfen, aus Erfahrungen zu lernen. Sie geben Antrieb, etwas anzupacken. Und sie spielen eine wichtige Rolle im Miteinander: beim Aufbau von Bindung, beim Setzen von Grenzen und in der Verständigung.",
          "Als Grundgefühle gelten Angst, Ärger, Trauer und Freude. Dazu kommen viele weitere, etwa Neugier, Liebe, Stolz oder Dankbarkeit. Auch unangenehme Gefühle haben eine Aufgabe. Ärger kann zum Beispiel ein Hinweis sein, dass eine Grenze überschritten wurde.",
        ],
      },
      {
        titel: "Mit Gefühlen umgehen lässt sich lernen",
        text: [
          "Wie wir mit Gefühlen umgehen, entwickelt sich in Kindheit und Jugend und kann sich ein Leben lang verändern. Es gibt viele Wege, Gefühle zu beeinflussen: die Aufmerksamkeit bewusst auf den Atem lenken, sich kurz ablenken oder eine Lage aus einem anderen Blickwinkel betrachten.",
          "Manchen Menschen fällt es schwer, Gefühle wahrzunehmen und zu benennen. Auch das ist veränderbar. Es beginnt oft damit, im Alltag öfter kurz nachzuspüren: Was fühle ich gerade?",
        ],
      },
      {
        titel: "Wenn Gedanken kreisen",
        text: [
          "Grübeln kennen fast alle, besonders in belastenden Zeiten. Es fühlt sich an wie Nachdenken, führt aber selten zu einem Ergebnis. Ein Bild dafür: Der Motor läuft auf Hochtouren, aber die Kupplung ist gedrückt.",
          "Der Unterschied zum Lösen eines Problems liegt im Ergebnis. Lösungsorientiertes Denken fragt eher konkret: Was kann ich als Nächstes tun? Grübeln bleibt oft abstrakt und kreist um die eigene Person. Fachleute empfehlen deshalb nicht, das Denken ganz abzustellen. Es geht darum, das Zuviel zu bremsen, also den Teil, der nur Energie kostet.",
        ],
      },
    ],
    schritte: [
      "Halte dreimal am Tag kurz inne und benenne in einem Wort, was du gerade fühlst.",
      "Wenn du merkst, dass deine Gedanken kreisen: Sag innerlich freundlich Stopp und richte die Aufmerksamkeit für ein paar Atemzüge auf den Atem.",
      "Schreib auf, was dich beschäftigt, und frag bei jedem Punkt: Was wäre der nächste kleine Schritt?",
      "Such dir für Grübelmomente eine einfache Tätigkeit, etwa Pflanzen gießen, Musik hören oder kurz rausgehen.",
    ],
    irrtuemer: [
      {
        irrtum: "Unangenehme Gefühle sollte man möglichst schnell loswerden.",
        richtig: "Auch Angst, Ärger oder Trauer haben eine Aufgabe. Sie weisen auf Gefahren, verletzte Grenzen oder Verluste hin. Hilfreicher als Wegdrücken ist oft, sie wahrzunehmen und zu fragen, was sie sagen wollen.",
      },
      {
        irrtum: "Wer lange genug nachdenkt, findet die Lösung.",
        richtig: "Grübeln fühlt sich an wie Nachdenken, führt aber selten weiter. Konkrete Fragen nach dem nächsten Schritt helfen meist mehr als immer neue Warum-Fragen.",
      },
      {
        irrtum: "Wie man mit Gefühlen umgeht, ist angeboren und bleibt so.",
        richtig: "Der Umgang mit Gefühlen entwickelt sich und kann sich im ganzen Leben verändern. Er lässt sich üben, zum Beispiel durch Benennen, Atemlenkung oder einen Perspektivwechsel.",
      },
    ],
    quellen: [
      { text: "Die Welt der Gefühle – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/psyche-seele/gesundheit/emotionen.html" },
      { text: "Gedankenkarussell stoppen – CSS Versicherung", url: "https://www.css.ch/de/privatkunden/meine-gesundheit/psyche/stress/gedankenkarussell-stoppen.html" },
      { text: "Was hilft gegen ständiges Grübeln? Podcast mit Prof. Thomas Ehring (LMU München) – Ärzte Zeitung", url: "https://www.aerztezeitung.de/Podcasts/Was-hilft-gegen-staendiges-Gruebeln-Professor-Ehring-434576.html" },
    ],
  },

  beziehungen: {
    absaetze: [
      {
        titel: "Einsamkeit, Alleinsein und Isolation",
        text: [
          "Diese drei Begriffe meinen Verschiedenes. Die WHO beschreibt Einsamkeit als schmerzhaftes Gefühl, das entsteht, wenn die Verbindungen zu anderen nicht so sind, wie man sie sich wünscht. Es geht also um eine Lücke zwischen Wunsch und Wirklichkeit.",
          "Soziale Isolation meint dagegen einen objektiven Mangel an Kontakten. Man kann viele Kontakte haben und sich trotzdem einsam fühlen. Und man kann wenige haben und zufrieden sein. Alleinsein schließlich ist oft freiwillig und kann sehr wohltuend sein.",
          "Einsamkeit ist weit verbreitet. Nach Schätzungen der WHO betrifft sie weltweit etwa jede sechste Person. Bei jungen Menschen zwischen 13 und 29 Jahren berichten 17 bis 21 Prozent davon, die höchsten Werte gibt es bei Jugendlichen.",
        ],
      },
      {
        titel: "Warum Unterstützung so viel ausmacht",
        text: [
          "Soziale Unterstützung entsteht aus Bindungen und Netzwerken. Das Robert Koch-Institut beschreibt sie als wichtige Kraftquelle für die Gesundheit. Sie kann das seelische Wohlbefinden verbessern, Stress verringern und schwierige Lebensumstände abfedern. Auch die WHO betont: Gute Verbindungen zu anderen stärken die seelische Gesundheit, können Entzündungen im Körper verringern und tragen zu einem längeren Leben bei.",
          "Unterstützung kommt nicht nur von Familie und engen Freundschaften. In einer großen Befragung in Deutschland nannten die meisten Menschen auch Nachbarinnen und Nachbarn als Menschen, auf die sie zählen können.",
          "Verbindung wirkt in beide Richtungen. Eine Auswertung von über 40 Studien der Universität Mannheim zeigt: Wer anderen mit Mitgefühl begegnet, sie unterstützt oder ihnen helfen möchte, berichtet im Schnitt von mehr Lebenszufriedenheit, mehr Freude und mehr Sinn.",
        ],
      },
    ],
    schritte: [
      "Grüß diese Woche bewusst eine Nachbarin oder einen Nachbarn und wechsle ein paar Worte.",
      "Leg bei einem Gespräch das Handy außer Sichtweite, damit du ganz da sein kannst.",
      "Schreib einer Person, von der du länger nichts gehört hast, eine kurze Nachricht und frag, wie es ihr geht.",
      "Überleg, wem du mit einer Kleinigkeit eine Freude machen könntest, und tu es.",
      "Gönn dir auch bewusst Zeit allein, die du genießt, etwa mit einem Buch oder einem Spaziergang.",
    ],
    irrtuemer: [
      {
        irrtum: "Wer allein lebt oder viel allein ist, ist einsam.",
        richtig: "Alleinsein ist oft freiwillig und angenehm. Einsamkeit ist ein Gefühl, das davon kommt, dass Verbindungen nicht so sind, wie man sie sich wünscht. Das ist auch mit vielen Menschen um sich möglich.",
      },
      {
        irrtum: "Einsamkeit betrifft vor allem ältere Menschen.",
        richtig: "Einsamkeit kommt in jedem Alter vor. Laut WHO berichten 17 bis 21 Prozent der 13- bis 29-Jährigen davon, besonders häufig Jugendliche.",
      },
      {
        irrtum: "Nur enge Freundschaften zählen wirklich.",
        richtig: "Auch lockere Kontakte, etwa in der Nachbarschaft, geben vielen Menschen Halt. Ein kurzer Gruß oder ein Gespräch im Stiegenhaus ist schon Verbindung.",
      },
    ],
    quellen: [
      { text: "Social connection linked to improved health and reduced risk of early death – WHO, 30.06.2025", url: "https://www.who.int/NEWS/ITEM/30-06-2025-SOCIAL-CONNECTION-LINKED-TO-IMPROVED-HEATH-AND-REDUCED-RISK-OF-EARLY-DEATH" },
      { text: "Soziale Unterstützung als Ressource für Gesundheit in Deutschland – Robert Koch-Institut (Borgmann, Rattay, Lampert 2017)", url: "https://edoc.rki.de/handle/176904/2909" },
      { text: "Mitgefühl macht glücklich – Pressemitteilung Universität Mannheim, Dezember 2025", url: "https://www.uni-mannheim.de/newsroom/presse/pressemitteilungen/2025/dezember/studie-mitgefuehl-macht-gluecklich/" },
    ],
  },

  alltag: {
    absaetze: [
      {
        titel: "Was Pausen bewirken",
        text: [
          "Arbeitspsychologinnen und Arbeitspsychologen der TU Dresden und der Bundesanstalt für Arbeitsschutz und Arbeitsmedizin haben die Forschung zu Pausen zusammengefasst. Regelmäßige Pausen beugen Verspannungen und Beschwerden vor. Sie fördern Lernen, Leistung, Kreativität und das Lösen von Problemen. Wer regelmäßig Pause macht, ist trotz kürzerer Arbeitszeit oft produktiver.",
          "Trotzdem fallen Pausen häufig aus. In Deutschland berichtet etwa jede dritte bis vierte beschäftigte Person, dass Pausen regelmäßig ausfallen oder verkürzt werden. Gründe sind etwa Zeitdruck, häufige Unterbrechungen und ständige Erreichbarkeit. Pausen in der Natur und außerhalb des Arbeitsplatzes erholen besonders gut.",
        ],
      },
      {
        titel: "Erholung nach der Arbeit",
        text: [
          "Erholung heißt nicht nur Nichtstun. Auch ein Wechsel der Tätigkeit kann erholsam sein. Die Forschung beschreibt sechs Erfahrungen, die Freizeit erholsam machen: gedanklich Abstand zur Arbeit gewinnen, entspannen, selbst bestimmen, etwas Neues meistern, Sinn erleben und sich zugehörig fühlen. Je mehr davon eine Tätigkeit anspricht, desto stärker hängt sie mit Wohlbefinden zusammen.",
          "Besonders wichtig ist das gedankliche Abschalten. Es hängt eng mit Gesundheit und Wohlbefinden zusammen. Hohe Anforderungen erschweren es, Unterstützung und Spielraum bei der Arbeit erleichtern es. Und Abschalten lässt sich lernen.",
          "Auch Urlaub tut gut, doch die Wirkung verfliegt schnell. Schon ab der zweiten Woche danach ist das Wohlbefinden im Schnitt wieder wie vorher. Die Fachleute raten deshalb, Urlaub auf mehrere kürzere Zeiten zu verteilen und die tägliche Erholung nicht zu vergessen.",
        ],
      },
      {
        titel: "Die unsichtbare Last: Mental Load",
        text: [
          "Mental Load meint die Denkarbeit hinter dem Alltag: an Termine denken, Einkäufe planen, Kinderbetreuung organisieren, die Pflege von Angehörigen im Blick behalten. Diese Arbeit ist von außen kaum sichtbar und liegt oft vor allem bei Frauen.",
          "Dauerhaft kann sie erschöpfen, den Schlaf belasten und zu Verspannungen oder Kopfschmerzen beitragen. Entlastend wirkt, wenn Aufgaben und Verantwortung gemeinsam getragen werden. Und zwar nicht nur das Erledigen, sondern auch das Daran-Denken.",
        ],
      },
    ],
    schritte: [
      "Mach an drei Arbeitstagen eine Pause außerhalb deines Arbeitsplatzes, am besten draußen.",
      "Überleg dir ein kleines Feierabendritual, das den Arbeitstag abschließt, etwa die Liste für morgen schreiben und den Laptop zuklappen.",
      "Plane eine Freizeitaktivität, bei der du etwas Neues lernst oder ganz selbst bestimmst, was du tust.",
      "Schreib einmal alles auf, woran du im Alltag denken musst. Wähl eine Sache aus, deren Planung jemand anderes übernehmen könnte.",
      "Sag diese Woche einmal freundlich Nein oder Später zu etwas, das gerade zu viel wäre.",
    ],
    irrtuemer: [
      {
        irrtum: "Pausen kosten Zeit, ohne sie schafft man mehr.",
        richtig: "Regelmäßige Pausen fördern Leistung und Konzentration. Wer sie macht, ist oft trotz kürzerer Arbeitszeit produktiver.",
      },
      {
        irrtum: "Ein langer Urlaub im Jahr reicht, um sich zu erholen.",
        richtig: "Die Erholung aus dem Urlaub klingt rasch ab, oft schon ab der zweiten Woche danach. Mehrere kürzere Auszeiten und tägliche Erholung wirken nachhaltiger.",
      },
      {
        irrtum: "Erholen kann man sich nur auf dem Sofa.",
        richtig: "Auch Aktivität kann erholen, etwa Sport, ein Hobby, ein Ehrenamt oder Zeit mit lieben Menschen. Schon ein Wechsel der Tätigkeit kann erholsam sein.",
      },
    ],
    quellen: [
      { text: "Wie erhole ich mich richtig? Neue Erkenntnisse zu guten Pausen, Feierabend und Urlaub – TU Dresden, Professur für Arbeits- und Organisationspsychologie", url: "https://tu-dresden.de/tu-dresden/universitaetskultur/magazin/artikel/wie-erhole-ich-mich-richtig-neue-erkenntnisse-zu-guten-pausen-bei-der-arbeit-erholung-am-feierabend-und-im-urlaub" },
      { text: "Mental detachment from work as an indicator of recovery – Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA)", url: "https://www.baua.de/EN/Service/Publications/Essays/article2287" },
      { text: "„Weibliches“ Phänomen des „Mental Load“ – Land Tirol, Pressemeldung", url: "https://www.tirol.gv.at/presse/meldungen/meldung/weibliches-phaenomen-des-mental-load-1/" },
    ],
  },

  gewohnheiten: {
    absaetze: [
      {
        titel: "Wie Gewohnheiten entstehen",
        text: [
          "Eine Gewohnheit ist ein Verhalten, das fast von selbst abläuft. Ausgelöst wird es durch Hinweise aus der Umgebung: die Keksdose auf dem Tisch, die Fernbedienung neben dem Sofa, das Handy auf dem Nachttisch. Gewohnheiten entstehen durch Wiederholung, am besten zur gleichen Zeit oder am gleichen Ort.",
          "Wie lange das dauert, hat die Psychologin Phillippa Lally am University College London erforscht. Im Schnitt brauchte ein neues tägliches Verhalten 66 Tage, bis es sich automatisch anfühlte. Die Spanne reichte aber von 18 bis 254 Tagen. Ein einzelner ausgelassener Tag hatte kaum Einfluss.",
          "Wissen allein ändert Verhalten selten. Hilfreicher ist ein klarer Plan, wann und wo du etwas tun willst. Umgekehrt hilft es beim Ablegen einer Gewohnheit, ihre Auslöser zu verändern, etwa die Keksdose in den Schrank zu stellen.",
        ],
      },
      {
        titel: "Bildschirmzeit im Blick",
        text: [
          "Viele Menschen verbringen im Schnitt etwa zweieinhalb Stunden täglich am Smartphone. Hochgerechnet ist das ungefähr ein Monat im Jahr. Viele Apps sind so gebaut, dass sie das Gefühl erzeugen, etwas zu verpassen.",
          "Am Abend wirkt das Handy doppelt: Das Licht des Bildschirms bremst das Schlafhormon Melatonin, und Inhalte in sozialen Medien oder Spielen regen das Gehirn an. Die eingebauten Auswertungen am Handy zeigen, wofür die Zeit tatsächlich draufgeht.",
        ],
      },
      {
        titel: "Was die WHO zu Alkohol sagt",
        text: [
          "Die Weltgesundheitsorganisation hält fest: Es gibt keine Menge Alkohol, die ohne Auswirkungen auf die Gesundheit bleibt. Die Gefahr beginnt laut WHO mit dem ersten Schluck. Je weniger, desto besser.",
          "Alkohol ist in derselben höchsten Gruppe krebserregender Stoffe eingestuft wie Tabak und Asbest. Er verursacht mindestens sieben Krebsarten, darunter Darmkrebs und Brustkrebs. Dass ein mäßiger Konsum dem Herzen so sehr nützt, dass dies die Krebsgefahr aufwiegt, ist laut WHO nicht belegt.",
        ],
      },
    ],
    schritte: [
      "Wähl eine kleine neue Gewohnheit und leg genau fest, wann und wo du sie machst, zum Beispiel nach dem Zähneputzen zwei Minuten dehnen.",
      "Schau in die Bildschirmzeit-Auswertung deines Handys, ohne dich zu bewerten. Was überrascht dich?",
      "Schalte bei drei Apps die Benachrichtigungen aus, die dir nicht wirklich wichtig sind.",
      "Lade das Handy diese Woche über Nacht außerhalb des Schlafzimmers.",
      "Probier an einem Abend, an dem du sonst etwas trinken würdest, ein alkoholfreies Lieblingsgetränk aus.",
    ],
    irrtuemer: [
      {
        irrtum: "Eine neue Gewohnheit braucht 21 Tage.",
        richtig: "In der Studie von Phillippa Lally dauerte es im Schnitt 66 Tage, mit einer großen Spanne von 18 bis 254 Tagen. Wie lange es braucht, hängt vom Menschen und vom Verhalten ab.",
      },
      {
        irrtum: "Wer einmal aussetzt, muss von vorn anfangen.",
        richtig: "Ein einzelner ausgelassener Tag hatte in der Forschung kaum Einfluss auf das Entstehen einer Gewohnheit. Wichtig ist, danach einfach weiterzumachen.",
      },
      {
        irrtum: "Ein Glas Wein am Tag ist gut für die Gesundheit.",
        richtig: "Laut WHO gibt es keine Alkoholmenge ohne Auswirkungen auf die Gesundheit. Ein Nutzen, der die Krebsgefahr aufwiegt, ist nicht belegt.",
      },
    ],
    quellen: [
      { text: "Does it really take 66 days to form a habit? Interview mit Dr. Pippa Lally – University of Surrey", url: "https://www.surrey.ac.uk/news/does-it-really-take-66-days-form-habit-we-asked-expert-dr-pippa-lally" },
      { text: "Seven ways to be good: 1. Learn healthier habits – British Psychological Society, Research Digest", url: "https://bps.org.uk/research-digest/seven-ways-be-good-1-learn-healthier-habits" },
      { text: "Tipps: Pause für dein Smartphone – pzvs.berlin (gefördert von der Berliner Senatsverwaltung für Gesundheit)", url: "https://pzvs.berlin/wp-content/uploads/2026/03/TIPPS_Pause_fuer_dein_Smartphone_DIGITAL.pdf" },
      { text: "Online sein mit Maß und Spaß – Elternratgeber, Bundesinstitut für Öffentliche Gesundheit (BIÖG)", url: "https://shop.bioeg.de/pdf/33215001.pdf" },
      { text: "No level of alcohol consumption is safe for our health – WHO", url: "https://www.who.int/azerbaijan/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health" },
    ],
  },

  staerken: {
    absaetze: [
      {
        titel: "Widerstandskraft ist ein Prozess",
        text: [
          "Das Leibniz-Institut für Resilienzforschung in Mainz beschreibt Resilienz so: langfristig psychisch gesund bleiben, obwohl die Umstände schwierig sind. Neuere Forschung zeigt, dass dabei im Gehirn aktiv etwas geschieht. Resilienz ist also kein fester Zustand, den man hat oder nicht hat.",
          "Für dich heißt das: Widerstandskraft kann sich verändern und wachsen. Welche Bedingungen dafür am besten sind, erforscht die Wissenschaft noch.",
        ],
      },
      {
        titel: "Selbstmitgefühl: mit dir selbst wie mit einem guten Freund",
        text: [
          "Die Psychologin Kristin Neff beschreibt Selbstmitgefühl mit drei Teilen. Erstens Freundlichkeit mit dir selbst statt harter Selbstkritik, wenn etwas schiefgeht. Zweitens das Wissen, dass Schweres zum Menschsein gehört und dich mit anderen verbindet, statt dich abzusondern. Drittens Achtsamkeit: den Schmerz wahrnehmen, ohne ihn wegzudrücken oder aufzubauschen.",
          "Selbstmitgefühl ist kein Selbstmitleid und keine Ausrede, es sich nur bequem zu machen. Es braucht auch nicht das Gefühl, besser als andere zu sein. Die Forschung zeigt eine direkte Wirkung von Selbstmitgefühl auf das Wohlbefinden. Für ein hohes Selbstwertgefühl ist so eine Wirkung weniger klar belegt.",
        ],
      },
      {
        titel: "Kraftquellen im Alltag",
        text: [
          "Kraftquellen sind Dinge, Menschen und Tätigkeiten, die dir Energie geben. Das können Lachen mit anderen sein, Zeit für dich, ein Hobby oder etwas Neues zu lernen. Neues zu lernen stärkt dabei auch das Vertrauen in dich selbst.",
          "Hilfreich sind auch Fragen wie: Was kann ich gut? Wofür bin ich dankbar? Worauf bin ich stolz? Und Mitgefühl mit anderen wirkt zurück: Wer anderen hilft oder sich in sie einfühlt, berichtet im Schnitt von mehr Freude und Sinn.",
        ],
      },
    ],
    schritte: [
      "Schreib an drei Abenden je eine Sache auf, die heute gelungen ist, und eine, für die du dankbar bist.",
      "Wenn dir diese Woche etwas misslingt: Frag dich, was du einer guten Freundin oder einem guten Freund in derselben Lage sagen würdest. Sag es dir selbst.",
      "Mach eine Liste mit fünf Dingen, die dir Kraft geben, und plane eines davon fest in den Kalender ein.",
      "Probier etwas Neues aus, egal wie klein: ein Rezept, ein Weg, ein Lied.",
    ],
    irrtuemer: [
      {
        irrtum: "Resilienz hat man oder man hat sie nicht.",
        richtig: "Widerstandskraft ist ein aktiver Prozess und kann sich im Laufe des Lebens verändern und wachsen.",
      },
      {
        irrtum: "Selbstmitgefühl macht bequem und nachlässig.",
        richtig: "Selbstmitgefühl heißt nicht, sich nur kurzfristig etwas Gutes zu tun. Es schließt ein, auch Unangenehmes auf sich zu nehmen, wenn es dir auf lange Sicht guttut.",
      },
      {
        irrtum: "Nur wer streng mit sich ist, wird besser.",
        richtig: "Harte Selbstkritik ist kein besonders guter Antrieb. Die Forschung zeigt, dass Selbstmitgefühl das Wohlbefinden direkt stärkt. Freundlichkeit mit dir selbst und Ansprüche an dich schließen sich nicht aus.",
      },
    ],
    quellen: [
      { text: "Resilienz ist ein aktiver Prozess im Gehirn – Leibniz-Institut für Resilienzforschung, idw-Pressemitteilung", url: "https://idw-online.de/de/news869728" },
      { text: "What is self-compassion? – Kristin Neff, self-compassion.org", url: "https://self-compassion.org/what-is-self-compassion/" },
      { text: "Positive menschliche Entwicklung: Selbstwert, Selbstmitgefühl und Flourishing – Daniela Blickhan, Psychologie in Österreich (BÖP)", url: "https://www.boep.or.at/download/541300ab64613565730f0000/Positive_menschliche_Entwicklung__Selbstwert__Selbstmitgefuehl_und_Flourishing_Blickhan.pdf" },
      { text: "Psychische Gesundheit einfach erklärt – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/leben/psyche-seele/praevention/psychische-gesundheit-einfach-erklaert.html" },
      { text: "Mitgefühl macht glücklich – Pressemitteilung Universität Mannheim, Dezember 2025", url: "https://www.uni-mannheim.de/newsroom/presse/pressemitteilungen/2025/dezember/studie-mitgefuehl-macht-gluecklich/" },
    ],
  },
};
