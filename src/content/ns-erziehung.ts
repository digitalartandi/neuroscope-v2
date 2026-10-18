// Ergänzung zu TRANSGENERATIONAL: NS-Erziehung, Schweigen in Familien, Alltagsbezug.
// absaetze = Haupttext (Abschnitte 1–4), vertiefung = „Was heute helfen kann“.
interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }

export const NS_ERGAENZUNG: { stichworte: string[]; absaetze: Abschnitt[]; vertiefung: Abschnitt[]; irrtuemer: Irrtum[]; quellen: Quelle[] } = {
  stichworte: [
    "Johanna Haarer", "Die deutsche Mutter und ihr erstes Kind", "NS-Erziehung", "Nationalsozialismus", "Schwarze Pädagogik",
    "Kriegskinder", "Kriegsenkel", "Schweigen", "Mitläufer", "Täter", "Opfermythos", "Bindung", "Verwöhnen", "Schreien lassen",
    "Familienforschung", "Archiv",
  ],
  absaetze: [
    {
      titel: "Erziehung im Nationalsozialismus",
      text: [
        "Zur Familiengeschichte gehört auch die Erziehung selbst. Der Nationalsozialismus hatte klare Vorstellungen davon, wie Kinder aufwachsen sollten. Das bekannteste Beispiel ist das Buch „Die deutsche Mutter und ihr erstes Kind“ der Ärztin Johanna Haarer. Es erschien 1934 und wurde rund 1,2 Millionen Mal verkauft. Haarer war überzeugte Nationalsozialistin. Ihr Buch diente als Grundlage für Kindergärten, Heime und die sogenannten Reichsmütterschulungen, also staatliche Kurse für Mütter. Sie schrieb weitere Bücher, etwa „Unsere kleinen Kinder“ (1936) und das Propagandabuch „Mutter, erzähl von Adolf Hitler!“.",
        "Die Ratschläge klingen heute hart. Weint das Kind, solle man es schreien lassen. Zärtlichkeit solle man vermeiden, Körperkontakt knapp halten, auch beim Tragen. Nach der Geburt sollte das Neugeborene 24 Stunden von der Mutter getrennt bleiben. Wer tröstet, herumträgt oder wiegt, ziehe sich einen kleinen Tyrannen heran. Mutterliebe nannte Haarer abwertend „Affenliebe“.",
        "Dahinter stand ein politisches Ziel. Die Autorin Sigrid Chamberlain hat gezeigt, dass diese Ratgeber Teil der NS-Propaganda waren. Kinder sollten früh lernen, Bedürfnisse zurückzustellen, zu gehorchen und hart zu sein. Ein Mensch, der wenig Nähe erfahren hat, sehne sich nach Zugehörigkeit und binde sich leichter an Führerfiguren, so Chamberlain.",
        "Nach 1945 verschwand das Buch nicht. Ohne das Wort „deutsche“ im Titel und ohne die auffälligste NS-Sprache wurde „Die Mutter und ihr erstes Kind“ bis 1987 neu aufgelegt. Nur das Hitler-Buch wurde nicht mehr gedruckt. In vielen Haushalten stand es noch lange im Regal.",
        "Haarer hat diese Ideen nicht erfunden. Eine Analyse von Erziehungsratgebern der Weimarer Republik und der NS-Zeit (Michaela Schmid, 2008) zeigt, dass strenge Vorstellungen weit verbreitet waren. Haarer formulierte sie am drastischsten. Für die harte, einschüchternde Erziehung früherer Zeiten prägte Katharina Rutschky 1977 den Begriff „Schwarze Pädagogik“.",
        "Österreich war ab 1938 Teil des NS-Staates. Wie stark Haarers Bücher gerade dort verbreitet waren, ist in den hier genutzten Quellen nicht eigens belegt. Die Familienforscherin Sabine Buchebner-Ferstl von der Universität Wien sagt allgemein: „Der autoritäre Zugang war noch bis in die 60er-Jahre Konsens und ziemlich unhinterfragt.“",
      ],
    },
    {
      titel: "Wie das bis heute nachwirken kann",
      text: [
        "Babys brauchen eine verlässliche Person, die auf ihr Weinen reagiert. So entsteht Bindung, ein inneres Gefühl von Sicherheit. Chamberlain und andere vermuten, dass die NS-Säuglingspflege bei vielen Kindern zu einer vermeidenden Bindung beigetragen hat. Vermeidend heißt: Ein Kind zeigt Kummer kaum noch nach außen, weil Zeigen nicht geholfen hat.",
        "Bindungsmuster können weitergegeben werden. Eine große Auswertung von 95 Stichproben mit 4.819 Menschen (Verhage u. a., 2016) fand einen deutlichen, aber mäßigen Zusammenhang zwischen der Bindung von Eltern und der ihrer Kinder. Weitergabe ist also möglich, aber kein Automatismus.",
        "Das Forschungsteam um Klaus Grossmann fand in den 1970er Jahren in Bielefeld bei etwa der Hälfte der Kleinkinder eine unsichere Bindung, in Regensburg bei weniger als einem Drittel. Viele Eltern deuteten es damals als Selbstständigkeit, wenn ihr Kind bei einer Trennung kaum reagierte.",
        "Eine Studie von Ilka Quindeau und Kolleginnen mit 24 Menschen der Jahrgänge 1930 bis 1945 (2012) zeigt: Belastend waren nicht nur Bomben und Flucht. Auch die Beziehung zu den Eltern und die NS-Erziehung spielten eine Rolle. Viele Befragte zeigten eine auffallend starke Loyalität zu ihren Eltern und ließen Konflikte in der Familie aus.",
        "Ehrlich eingeordnet heißt das: Gut belegt ist, was Haarer empfahl und wie weit ihr Buch verbreitet war. Gut belegt ist auch, dass Bindungserfahrungen über Generationen nachwirken können. Dass gerade Haarers Ratschläge heute noch messbare Folgen haben, ist eine plausible Hypothese. Kontrollierte Studien dazu gibt es nicht. Wie streng sich einzelne Mütter daran hielten, ist kaum zu erfassen. Der Psychiater Hartmut Radebold nahm an, dass vor allem überzeugte Nationalsozialistinnen und Frauen, die selbst wenig Wärme erfahren hatten, ihnen folgten.",
      ],
    },
    {
      titel: "Krieg, Schweigen und Schuld in Familien",
      text: [
        "Als Kriegskinder gelten Menschen, die etwa zwischen 1930 und 1945 geboren wurden. Ihre Kinder, vor allem in den 1960er und 1970er Jahren geboren, werden oft Kriegsenkel genannt. Bekannt gemacht hat diese Begriffe die Journalistin Sabine Bode, etwa mit ihrem Sachbuch „Kriegsenkel“ (2009). Ihre Bücher beruhen auf vielen Gesprächen, nicht auf repräsentativen Studien.",
        "Der Begriff Kriegskinder ist nicht unumstritten. Quindeau und Kolleginnen kritisieren, dass er den Krieg betont und den Nationalsozialismus ausblendet. Das kann helfen, Abstand zur Frage nach Schuld zu halten.",
        "Denn in vielen Familien gab es nicht nur Leid, sondern auch Mitläufer und Täter. Darüber wurde oft geschwiegen. Quindeau beschreibt dieses Schweigen als Tabu: Die geliebten Eltern werden innerlich getrennt von dem, was sie vielleicht getan haben. Das Buch „Opa war kein Nazi“ (Moller, Tschuggnall, Welzer, 2002) untersucht, wie Nationalsozialismus und Holocaust im Familiengedächtnis erzählt werden.",
        "Die Erinnerungsstudie MEMO zeigt die Lücke in Zahlen. 2020 sahen rund 77 Prozent der Befragten in Deutschland ihre Vorfahren nicht unter den Täterinnen und Tätern. Rund 32 Prozent sagten, Angehörige hätten Verfolgten geholfen. Der tatsächliche Anteil der Helfenden lag weit unter einem Prozent der Bevölkerung. Das ist menschlich, denn wir möchten unsere Großeltern gut sehen.",
        "In Österreich kam etwas hinzu. Nach 1945 verstand sich das Land offiziell als „erstes Opfer“ Hitlers. Diese Opferthese prägte das Selbstbild bis in die 1980er Jahre, wie die Historikerin Heidemarie Uhl beschreibt. Dabei war der „Anschluss“ 1938 von breiter Zustimmung getragen. 1942 waren rund 688.000 Menschen Mitglied der NSDAP, das waren 8,2 Prozent der Bevölkerung. Erst nach der Debatte um Kurt Waldheim 1986 sprach Bundeskanzler Franz Vranitzky 1991 von einer Mitverantwortung. Für Familien kann das bedeuten: Eine öffentliche Erzählung machte es leichter, nicht nachzufragen.",
      ],
    },
    {
      titel: "Wie es sich im Alltag zeigen kann",
      text: [
        "Manche Menschen erzählen, dass zu Hause wenig über Gefühle gesprochen wurde. Weinen galt als Schwäche, Sätze wie „Reiß dich zusammen“ oder „Sei froh, dass du überlebt hast“ fielen schnell. Hartmut Radebold beschreibt, dass viele Kriegskinder selbst nicht trauern oder weinen durften. Wer so aufwächst, kann später Mühe haben, eigene Gefühle zu zeigen oder die Gefühle anderer auszuhalten.",
        "Auch Trost kann schwierig sein, in beide Richtungen. Manche merken, dass sie innerlich erstarren, wenn jemand sie in den Arm nimmt. Andere wissen nicht, was sie sagen sollen, wenn jemand weint. Sabine Bode beschreibt, dass belastete Eltern ihren Kindern oft kaum Trost geben konnten. Manche Kinder übernahmen dann früh die Aufgabe, die Mutter glücklich zu machen. Fachleute nennen das Parentifizierung: Ein Kind sorgt für die Eltern statt umgekehrt.",
        "Leistung und Funktionieren können einen sehr hohen Wert haben. Viele Kriegsenkel in Bodes Gesprächen sind gut ausgebildet und erfolgreich und fühlen sich trotzdem unsicher. Ein Satz, der dort immer wieder fällt: „Meine Eltern wissen gar nicht, wer ich bin.“",
        "Auch im Umgang mit Dingen kann Geschichte stecken. Radebold berichtet von alten Menschen, die aus Angst vor Hunger Brot im Schrank verstecken. In manchen Familien wird nichts weggeworfen, und es gibt immer Vorräte. Das kann eine vernünftige Lehre aus schwerer Zeit sein, aber auch eine Angst, die unbenannt weitergereicht wurde.",
        "Am Familientisch gibt es manchmal Themen, die niemand anspricht. Bode beschreibt Mahnungen wie „Frag nicht danach“. Kinder lernen dann, Widersprüche zu übersehen, und zweifeln manchmal an ihrer eigenen Wahrnehmung. Die Forschung beschreibt auch, dass Schuld und Scham an Kinder weitergegeben werden können. Manche spüren ein Schuldgefühl, ohne zu wissen, wofür.",
        "Besonders deutlich kann es werden, wenn man selbst Kinder bekommt. Manche hören dann innere Sätze wie „Lass es schreien, sonst verwöhnst du es“, oder sie bekommen genau diesen Rat von Eltern und Großeltern. Laut einem Bericht der Wiener Zeitung (2023) ist es bis heute üblich, schreiende Babys zu ignorieren. Die Unsicherheit, ob Nähe ein Kind verwöhnt, hat also auch eine Geschichte.",
        "Nichts davon beweist eine bestimmte Familiengeschichte. Solche Muster haben viele Ursachen. Sie können aber ein Anlass sein nachzufragen.",
      ],
    },
  ],
  vertiefung: [
    {
      titel: "Was heute helfen kann",
      text: [
        "Die eigene Familiengeschichte erforschen. Ein guter Anfang sind Briefe, Fotos, Ausweise und Lebensläufe zu Hause. Der Geschichtsort Villa ten Hompel in Münster bietet eine Anleitung in sieben Schritten. Ein leerer Treffer in einer Datenbank heißt nicht, dass es nichts gibt.",
        "Archive, die weiterhelfen können: Das Bundesarchiv gibt Auskunft zu ehemaligen Soldaten der Wehrmacht, für SS, SA und Polizei ist die Außenstelle Berlin-Lichterfelde zuständig. Die Arolsen Archives sammeln Dokumente über NS-Verfolgte, die meisten Anfragen dort kommen von Familienangehörigen. Die Gräbersuche des Volksbunds Deutsche Kriegsgräberfürsorge verzeichnet Kriegstote und Vermisste. In Wien führt das Dokumentationsarchiv des österreichischen Widerstandes (DÖW) ein Archiv zu Widerstand, Verfolgung und Exil sowie eine Datenbank zu mehr als 63.200 österreichischen Jüdinnen und Juden, die im Holocaust ermordet wurden.",
        "Gespräche führen, solange es möglich ist. Offene Fragen ohne Vorwurf öffnen oft mehr als Anklagen, etwa: „Wie war das für dich als Kind?“ Ein Kriegskind beschrieb das Erzählen als „fast befreiend“. Erinnerungen mit Dokumenten abzugleichen lohnt sich, denn Familienerzählungen sind oft geglättet.",
        "Sich mit anderen austauschen. Kriegsenkel haben Foren und in vielen Städten Selbsthilfegruppen gegründet. Achte darauf, wer eine Gruppe leitet und ob sie seriös arbeitet.",
        "Wenn Gefühle schwer werden oder der Alltag leidet, kann Psychotherapie helfen. Dort hat auch Familiengeschichte Platz.",
        "Neue Erfahrungen zulassen. Bindungsmuster sind nicht festgeschrieben. Auch Erwachsene können lernen, Trost anzunehmen, Nähe auszuhalten und Gefühle zu zeigen. Was früher als Schwäche galt, ist heute erlaubt.",
        "Elternschaft bewusst gestalten. Es hilft, alte Sätze zu bemerken und zu prüfen, ob sie zu dem passen, was man heute über Kinder weiß. Eine Wiener Still- und Trageberaterin sagt: „Wenn ein Säugling nicht mehr weint in der Nacht, hat er nichts gelernt, sondern hat schlicht und einfach resigniert.“ Wer manches anders macht als die eigenen Eltern, verrät sie damit nicht.",
      ],
    },
  ],
  irrtuemer: [
    { irrtum: "Haarers Erziehungsbuch war nur in der NS-Zeit verbreitet.", richtig: "Das Buch wurde nach 1945 mit leicht verändertem Titel und ohne die auffälligste NS-Sprache weiterverkauft und bis 1987 neu aufgelegt." },
    { irrtum: "Ein Baby, das man tröstet, wird verwöhnt.", richtig: "Diese Sorge stammt aus einer alten Erziehungstradition, die Haarer besonders drastisch vertrat. Nähe und Trost sind ein Grundbedürfnis. Ein Baby, das nicht mehr weint, hat oft nicht gelernt, sondern aufgegeben." },
    { irrtum: "In unserer Familie gab es keine Nazis, sonst hätte man es mir erzählt.", richtig: "Familien erzählen oft freundlicher, als es war. Viel mehr Menschen glauben an helfende Vorfahren, als es Helfende tatsächlich gab. Schweigen ist kein Beleg dafür, dass nichts war." },
    { irrtum: "Österreich war nur Opfer des Nationalsozialismus.", richtig: "Diese Opferthese prägte lange das offizielle Selbstbild. Die Forschung zeigt breite Zustimmung zum „Anschluss“ 1938 und viele Täter aus Österreich. 1991 sprach Bundeskanzler Vranitzky von einer Mitverantwortung." },
  ],
  quellen: [
    { text: "Kratzer (2018): Pädagogik: Die Folgen der NS-Erziehung. Spektrum der Wissenschaft / Gehirn&Geist", url: "https://www.spektrum.de/magazin/paedagogik-die-folgen-der-ns-erziehung/1549585" },
    { text: "Scientific American: Harsh Nazi Parenting Guidelines May Still Affect German Children of Today", url: "https://www.scientificamerican.com/article/harsh-nazi-parenting-guidelines-may-still-affect-german-children-of-today1/" },
    { text: "Chamberlain (2001): Zur frühen Sozialisation in Deutschland zwischen 1934 und 1945. Jahrbuch für Psychohistorische Forschung 2", url: "https://www.mattes.de/buecher/psychohistorie/978-3-930978-55-7_chamberlain.pdf" },
    { text: "Röhl (2021): Transgenerationale Weitergabe von NS-Erziehung. Vortrag, Rosa-Luxemburg-Stiftung Brandenburg", url: "https://www.rosalux.de/fileadmin/ls_bbg/Texte/Vortrag_Roehl-Anja_Transgenerationale-Weitergabe-NS-Erziehung_20210527.pdf" },
    { text: "Schmölzer & Stegmaier (2023): Nazi-Erziehungsideale, die nicht weichen. Wiener Zeitung", url: "https://www.wienerzeitung.at/a/nazi-erziehungsideale-die-nicht-weichen" },
    { text: "Jahn (2009): Rezension zu Schmid, Erziehungsratgeber in der ersten Hälfte des 20. Jahrhunderts. Erziehungswissenschaftliche Revue", url: "https://www.pedocs.de/volltexte/2020/20075/pdf/EWR_2009_3_Jahn_Rezension_Schmid_Erziehungsratgeber.pdf" },
    { text: "Gruschka (1988): Das Interesse an der Geschichte. Pädagogische Korrespondenz (zu Rutschky, Schwarze Pädagogik, 1977)", url: "https://www.pedocs.de/volltexte/2012/5392/pdf/Gruschka_Das_Interesse_an_der_Geschichte_D_A.pdf" },
    { text: "Feddersen: Sie glaubte an das Zivilisierte (Nachruf auf Katharina Rutschky). der Freitag", url: "https://www.freitag.de/autoren/jan-feddersen/sie-glaubte-an-das-zivilisierte" },
    { text: "Verhage u. a. (2016): Narrowing the transmission gap. Psychological Bulletin", url: "https://research.vu.nl/en/publications/6f48da5f-0a59-436d-966e-c9f68ed975b2" },
    { text: "Quindeau, Einert & Teuber (2012): Kindheiten im Nationalsozialismus und Zweiten Weltkrieg. BIOS 25(1)", url: "https://budrich-journals.de/index.php/bios/article/download/12052/10502" },
    { text: "Bode (2009): Kriegsenkel. Die Erben der vergessenen Generation. Klett-Cotta, Leseprobe", url: "https://lesejury.de/media/samples/080/9783608948080_leseprobe.pdf" },
    { text: "Goethe-Institut (2016): Interview mit Sabine Bode über Kriegsenkel", url: "https://www.goethe.de/ins/ph/de/kul/mag/20794931.html" },
    { text: "epd/evangelisch.de (2010): Kriegskinder: „Sei doch froh, dass du überlebt hast“", url: "https://www.evangelisch.de/inhalte/98408/11-02-2010/kriegskinder-sei-doch-froh-dass-du-ueberlebt-hast" },
    { text: "epd/evangelisch.de (2012): Ängste aus dem Weltkrieg belasten noch die Enkel", url: "https://www.evangelisch.de/inhalte/108188/02-04-2012" },
    { text: "Uhl (2001): Das „erste Opfer“. Der österreichische Opfermythos und seine Transformationen in der Zweiten Republik. ÖZP 1/2001", url: "https://www.demokratiezentrum.org/wp-content/uploads/2022/10/uhl_opfer.pdf" },
    { text: "Geschichtsort Villa ten Hompel: NS-Familiengeschichte in 7 Schritten recherchieren (mit MEMO-Daten)", url: "https://www.stadt-muenster.de/villa-ten-hompel/forschung/laufende-projekte/erzaehl-mal/ns-familiengeschichte-in-7-schritten-recherchieren" },
    { text: "Bundesarchiv: Personenbezogene Unterlagen militärischer Herkunft", url: "https://www.bundesarchiv.de/im-archiv-recherchieren/archivgut-recherchieren/personen-und-familienforschung/personenbezogene-unterlagen-militaerischer-herkunft/" },
    { text: "Arolsen Archives: Pressemitteilung Statistik 2023", url: "https://arolsen-archives.org/content/uploads/240409_pressemitteilung_-statistik-2023.pdf" },
    { text: "Volksbund Deutsche Kriegsgräberfürsorge: Gräbersuche online", url: "https://www.volksbund.de/erinnern-gedenken/graebersuche-online" },
    { text: "DÖW: Research theme Holocaust", url: "https://www.doew.at/english/about-us/research-theme-holocaust" },
  ],
};
