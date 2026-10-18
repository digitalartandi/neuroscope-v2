// Kapitel „Drogen und Medikamente“. Recherche 18.10.2026.
// Nur Quellen, die bei der Recherche tatsächlich geöffnet wurden. Keine Dosierungen, keine Konsumanleitungen.
// ICD-11: „6C4“ ist in der ICD-11 ein Block (Disorders due to substance use), kein einzelner Code.
// Auf der WHO-Seite selbst nicht verifiziert, deshalb ohne icd-Angabe.

interface Quelle { text: string; url: string }
interface Abschnitt { titel: string; text: string[] }
interface Irrtum { irrtum: string; richtig: string }

const GV_CANNABIS_WIRKUNG: Quelle = { text: "Cannabis: Substanz & Wirkung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/cannabis/wirkung.html" };
const GV_CANNABIS_FOLGEN: Quelle = { text: "Cannabiskonsum: langfristige Folgen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/cannabis/canabiskonsum-folgen.html" };
const GV_HEROIN: Quelle = { text: "Heroin: Wirkung & Folgen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/heroin-kokain/heroin-wirkung-folgen.html" };
const GV_HEROIN_THERAPIE: Quelle = { text: "Heroinabhängigkeit: Diagnose & Therapie – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/heroin-kokain/heroinabhaengigkeit-diagnose-therapie.html" };
const GV_KOKAIN: Quelle = { text: "Kokain: Wirkung & Folgen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/heroin-kokain/kokain-wirkung.html" };
const GV_ECSTASY: Quelle = { text: "Ecstasykonsum: Folgen – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/ecstasy/konsum-folgen.html" };
const GV_BZD: Quelle = { text: "Schlaf- und Beruhigungsmittel (BZD) – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/medikamentensucht/schlaf-beruhigungsmittel-bzd.html" };
const GV_VERGIFTUNG: Quelle = { text: "Alkohol & Drogen: Vergiftung – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/alkohol-drogen-vergiftung.html" };
const GV_VIZ: Quelle = { text: "Vergiftungsinformationszentrale – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/service/notruf/vergiftungsinformationszentrale.html" };
const GV_CO: Quelle = { text: "Co-Abhängigkeit – gesundheit.gv.at", url: "https://www.gesundheit.gv.at/krankheiten/sucht/co-abhaengigkeit.html" };
const BUND_DROGEN: Quelle = { text: "Illegale Drogen und Drogenabhängigkeit – gesund.bund.de", url: "https://gesund.bund.de/illegale-drogen-und-drogenabhaengigkeit" };
const BUND_MEDIS: Quelle = { text: "Medikamentenmissbrauch und Medikamentenabhängigkeit – gesund.bund.de", url: "https://gesund.bund.de/medikamentenmissbrauch-und-medikamentenabhaengigkeit" };
const BUND_NPS: Quelle = { text: "Legal Highs – gesund.bund.de", url: "https://gesund.bund.de/legal-highs" };
const BUND_SH: Quelle = { text: "Sucht-Selbsthilfe – gesund.bund.de", url: "https://gesund.bund.de/sucht-selbsthilfe" };
const BMG_FAQ: Quelle = { text: "FAQ zum Cannabisgesetz – Bundesministerium für Gesundheit", url: "https://www.bundesgesundheitsministerium.de/themen/cannabis/faq-cannabisgesetz" };
const BMG_INKRAFT: Quelle = { text: "Cannabis-Gesetz und Krankenhaustransparenz-Gesetz passieren Bundesrat (22.03.2024) – BMG", url: "https://www.bundesgesundheitsministerium.de/ministerium/meldungen/cannabis-und-krankenhaustransparenzgesetz-22-03-24.html" };
const BMG_NALTRAIN: Quelle = { text: "NALtrain: Take-Home-Naloxon-Schulungen – BMG", url: "https://www.bundesgesundheitsministerium.de/ministerium/ressortforschung/handlungsfelder/forschungsschwerpunkte/take-home-naloxon-schulungen/naltrain.html" };
const SOZ_RECHT: Quelle = { text: "Rechtliche Informationen zu Suchtmitteln – Sozialministerium", url: "https://www.sozialministerium.gv.at/Themen/Gesundheit/Drogen-und-Sucht/Suchtmittel-NPS-Drogenausgangsstoffe/Rechtliche-Informationen.html" };
const SOZ_THERAPIE: Quelle = { text: "Prävention und Therapie – Sozialministerium", url: "https://www.sozialministerium.gv.at/Themen/Gesundheit/Drogen-und-Sucht/Pr%C3%A4vention-und-Therapie.html" };
const GOEG_2025: Quelle = { text: "Bericht zur Drogensituation 2025 – Gesundheit Österreich GmbH", url: "https://goeg.at/sites/goeg.at/files/2026-04/Bericht%20zur%20Drogensituation%202025_bf.pdf" };
const EUDA_NPS: Quelle = { text: "European Drug Report 2025: New psychoactive substances – EUDA", url: "https://www.euda.europa.eu/publications/european-drug-report/2025/new-psychoactive-substances_en" };
const EUDA_KOKAIN: Quelle = { text: "European Drug Report 2025: Cocaine – EUDA", url: "https://www.euda.europa.eu/publications/european-drug-report/2025/cocaine_en" };
const DC_KOKAIN: Quelle = { text: "Drogenlexikon: Kokain – drugcom.de (BIÖG)", url: "https://www.drugcom.de/drogenlexikon/buchstabe-k/kokain/" };
const DC_OPIOIDE: Quelle = { text: "Warnung vor Beimischungen von synthetischen Opioiden in Heroin (13.12.2023) – drugcom.de", url: "https://www.drugcom.de/news/warnung-vor-beimischungen-von-synthetischen-opioiden-in-heroin/" };
const DC_NOTFALL: Quelle = { text: "Drogennotfall – drugcom.de", url: "https://www.drugcom.de/beratung-finden/drogennotfall/" };
const DC_SAFER: Quelle = { text: "Safer-Use-Empfehlungen für weniger schädlichen Cannabiskonsum – drugcom.de", url: "https://www.drugcom.de/haeufig-gestellte-fragen/fragen-zu-cannabis/welche-safer-use-empfehlungen-fuer-weniger-schaedlichen-cannabiskonsum-gibt-es-fuer-erwachsene/" };
const HOTLINE: Quelle = { text: "Sucht & Drogen Hotline – BIÖG", url: "https://www.bioeg.de/service/beratungsangebote/sucht-drogen-hotline/" };
const DHS_VZ: Quelle = { text: "Suchthilfeverzeichnis – DHS", url: "https://www.dhs.de/service/suchthilfeverzeichnis" };
const Z6_DC: Quelle = { text: "Drug Checking: Informationen – Drogenarbeit Z6 Innsbruck", url: "https://www.drogenarbeitz6.at/drug-checking/informationen.html" };
const Z6: Quelle = { text: "Drogenarbeit Z6 Innsbruck", url: "http://www.drogenarbeitz6.at/" };
const CHECKIT_NEWS: Quelle = { text: "Warum Wien sein Drug-Checking ausbaut (Juli 2026) – vienna.at", url: "https://www.vienna.at/warum-wien-sein-drug-checking-ausbaut/10305041" };
const BW_DC: Quelle = { text: "Land bereitet Drug-Checking-Verordnung vor (30.06.2026) – Baden-Württemberg", url: "https://www.baden-wuerttemberg.de/de/service/alle-meldungen/meldung/pid/land-bereitet-drug-checking-verordnung-vor" };
const SDW_NOT: Quelle = { text: "Krisen & Notfälle – Sucht- und Drogenkoordination Wien", url: "https://sdw.wien/notfaelle" };
const SDW_BER: Quelle = { text: "Beratung, Behandlung und Betreuung – Sucht- und Drogenkoordination Wien", url: "https://sdw.wien/betroffene/beratung-behandlung-und-betreuung" };
const BFR_GIZ: Quelle = { text: "Giftinformationszentren in Deutschland – BfR", url: "https://www.bfr.bund.de/deutsches-produktregister-de-pro/giftinformationszentren-in-deutschland/" };
const MINDZONE: Quelle = { text: "mindzone – Landescaritasverband Bayern", url: "https://mindzone.info/" };
const KNOWDRUGS: Quelle = { text: "KnowDrugs", url: "https://knowdrugs.app/" };

export const DROGEN: { id: "drogen"; titel: string; gruppe: "Konsum und Verhalten"; stichworte: string[]; icd?: { code: string; titel: string }; einleitung: string; absaetze: Abschnitt[]; vertiefung: Abschnitt[]; hilft: string[]; wannHilfe: string[]; irrtuemer: Irrtum[]; angehoerige: string[]; quellen: Quelle[] } = {
  id: "drogen",
  titel: "Drogen und Medikamente",
  gruppe: "Konsum und Verhalten",
  stichworte: ["Cannabis", "Kiffen", "Gras", "Kokain", "Koks", "Crack", "Speed", "Amphetamin", "Crystal", "Ecstasy", "MDMA", "Heroin", "Opioide", "Fentanyl", "Benzos", "Schlaftabletten", "Beruhigungsmittel", "Drogen", "Sucht", "Abhängigkeit", "Mischkonsum", "Party"],
  einleitung: "Viele Menschen probieren irgendwann Drogen aus, andere nehmen über lange Zeit Schlaf- oder Beruhigungsmittel. Nicht jeder Konsum führt in eine Abhängigkeit. Hier findest du, was Fachleute über Risiken, Notfälle und Hilfe wissen, ruhig und ohne Bewertung.",
  absaetze: [
    {
      titel: "Was Fachleute darunter verstehen",
      text: [
        "Fachleute unterscheiden einen schädlichen Gebrauch von der Abhängigkeit. Beim schädlichen Gebrauch sind Folgen des Konsums schon spürbar, etwa für Gesundheit, Arbeit oder Beziehungen. Bei einer Abhängigkeit kommen typische Merkmale dazu: ein starker Drang zu konsumieren, Kontrollverlust, Gewöhnung, Entzugserscheinungen und Weiterkonsum trotz Schäden.",
        "Die Übergänge sind fließend. Eine Abhängigkeit entsteht meist schleichend und wird oft erst spät bemerkt, auch bei Medikamenten, die ärztlich verschrieben wurden.",
      ],
    },
    {
      titel: "Cannabis",
      text: [
        "Der wichtigste Wirkstoff ist THC. Viele erleben Entspannung, Gelassenheit oder gute Laune. Die Wirkung ist aber nicht vorhersehbar. Angst, Panik, Herzrasen, Schwindel, wirre Gedanken und Erinnerungslücken sind möglich, selten auch Halluzinationen oder Verfolgungsgefühle.",
        "Regelmäßiger Konsum kann abhängig machen. Beim Aufhören treten oft Unruhe, Ängstlichkeit und Schwitzen auf. Körperlich ist der Entzug eher mild, das Verlangen kann aber stark sein. Dauerhafter Konsum beeinträchtigt Konzentration, Lernen und Lunge.",
        "Junge Menschen sind besonders gefährdet, weil das Gehirn bis etwa Mitte zwanzig reift. Vor allem bei Jugendlichen mit regelmäßigem, starkem Konsum ist das Risiko für eine Schizophrenie erhöht. Bei anfälligen Menschen kann Cannabis den Ausbruch einer Psychose möglicherweise beschleunigen. Ob Cannabis Psychosen direkt auslöst, ist nicht endgültig geklärt.",
        "In Österreich wurde Cannabis teilweise mit synthetischen Cannabinoiden versetzt gefunden. Diese wirken oft viel stärker und können Krampfanfälle und Panik auslösen.",
        "Rechtslage Deutschland: Seit 1. April 2024 gilt das Konsumcannabisgesetz. Erwachsene dürfen in der Öffentlichkeit bis zu 25 Gramm getrocknetes Cannabis mitführen und zu Hause bis zu 50 Gramm besitzen. Erlaubt sind bis zu drei Pflanzen pro erwachsener Person zum Eigenkonsum sowie nicht-kommerzielle Anbauvereinigungen mit Genehmigung. Für Minderjährige bleiben Erwerb, Besitz und Anbau verboten, die Weitergabe an sie ist strafbar. Konsum ist unter anderem in der Nähe von Minderjährigen, an Schulen, Spielplätzen und Sportstätten verboten. Im Straßenverkehr gilt ein THC-Grenzwert, für Fahranfänger ein Verbot. Medizinisches Cannabis ist gesondert geregelt.",
        "Rechtslage Österreich: Cannabisprodukte wie Marihuana und Haschisch sowie THC zählen nach dem Suchtmittelgesetz zu den Suchtgiften. Inhaltsstoffe der Pflanze werden aber auch als Arzneimittel eingesetzt, zum Beispiel bei Multipler Sklerose. Getrocknete Hanfblüten mit weniger als 0,3 Prozent THC unterliegen seit Juli 2025 der Tabaksteuer und dürfen nur in Trafiken verkauft werden.",
      ],
    },
    {
      titel: "Kokain und Crack",
      text: [
        "Kokain putscht stark auf, verengt die Blutgefäße und treibt Puls und Blutdruck hoch. Nach dem Rausch folgen oft Erschöpfung, Unruhe und ein Tief, manchmal mit Suizidgedanken. Dieses Tief verstärkt den Wunsch nach erneutem Konsum. Eine Abhängigkeit kann schon nach relativ kurzer Zeit entstehen.",
        "Für das Herz ist Kokain gefährlich. Möglich sind Herzrhythmusstörungen, Herzinfarkt und plötzlicher Herztod. In den ersten 24 Stunden nach dem Konsum ist das Schlaganfallrisiko deutlich erhöht. Psychisch kann Kokain Angst, Depressionen und eine Kokainpsychose mit Wahn und Halluzinationen auslösen.",
        "Crack ist eine geraucht konsumierte Form des Kokains. Es schädigt zusätzlich Atemwege und Lunge. In Europa scheint Crack häufiger zu werden.",
        "Kokain und Alkohol werden oft zusammen konsumiert. Diese Kombination ist mit höheren Gesundheitsrisiken verbunden. Besonders gefährlich ist Kokain zusammen mit Heroin oder anderen Opioiden.",
      ],
    },
    {
      titel: "Amphetamin, Crystal und Ecstasy",
      text: [
        "Amphetamin („Speed“) und Methamphetamin („Crystal“) haben ein hohes Abhängigkeitsrisiko. Möglich sind Herz-Kreislauf-Probleme, Unruhe, Verwirrung und Aggressivität. Bei Crystal folgt auf den Rausch oft ein „Crash“ mit starkem Verlangen. Konsum über mehrere Tage erhöht das Risiko einer Abhängigkeit deutlich. Bei Hitze und Anstrengung droht Überhitzung.",
        "Ecstasy enthält meist MDMA, Inhalt und Stärke sind aber oft unbekannt. Puls, Blutdruck und Körpertemperatur steigen. Gefährlich sind Überhitzung, Austrocknung und, bei viel Schwitzen mit falschem Trinken, ein gefährlicher Salzmangel im Blut. Das kann bis zu Krämpfen, Koma und Tod führen. Häufiger oder starker Konsum kann Nervenzellen schädigen und mit Gedächtnisproblemen, Depressionen und Ängsten zusammenhängen.",
      ],
    },
    {
      titel: "Opioide: Heroin, Schmerzmittel, Fentanyl",
      text: [
        "Opioide wirken beruhigend, schmerzlindernd und euphorisierend. Heroin hat ein hohes körperliches und psychisches Abhängigkeitspotenzial. Auch opioidhaltige Schmerzmittel wie Tramadol oder Fentanyl werden missbräuchlich verwendet und können abhängig machen.",
        "Die größte akute Gefahr ist die Überdosis. Die Atmung wird flacher, bis sie aussetzt. Zeichen sind sehr enge Pupillen, Bewusstlosigkeit und kaum noch Atmung. Besonders riskant ist die Zeit nach einer Pause, etwa nach einem Entzug, weil die Gewöhnung verloren geht. Opioide zusammen mit Alkohol oder Beruhigungsmitteln können lebensbedrohlich sein. In Deutschland waren eine Opioid-Überdosis oder die Kombination mehrerer Substanzen die häufigsten Ursachen drogenbedingter Todesfälle.",
        "In Europa tauchen zunehmend sehr starke synthetische Opioide auf, vor allem Nitazene. Sie können ein Vielfaches stärker wirken als Heroin. Sie wurden in Heroin gefunden und in gefälschten Tabletten, die wie Schmerz- oder Beruhigungsmittel aussehen. Schon kleine Mengen können eine Atemlähmung auslösen.",
        "Naloxon ist ein Notfallmedikament. Es hebt die Atemlähmung durch Opioide innerhalb weniger Minuten auf. Als Nasenspray können es auch geschulte Laien anwenden. In Deutschland ist es seit 2018 zugelassen und kann auf Kassenkosten verschrieben werden. In Österreich gibt es Schulungen und Naloxon-Sprays inzwischen in sieben Bundesländern, meist über die Drogenhilfe. Naloxon ersetzt nie den Notruf.",
      ],
    },
    {
      titel: "Beruhigungs- und Schlafmittel",
      text: [
        "Benzodiazepine und die ähnlich wirkenden „Z-Substanzen“ helfen kurzfristig bei Angst, Panik und Schlafstörungen. Sie können aber schnell abhängig machen. Deshalb sollte eine Behandlung in der Regel nach wenigen Wochen enden.",
        "Eine Abhängigkeit kann auch bei ärztlich verordneter, niedriger Dosis entstehen, meist nach Monaten oder Jahren. Sie bleibt oft unbemerkt. Hinweise sind, dass die Wirkung nachlässt oder ohne Tablette Unruhe, Angst und Schlaflosigkeit stärker werden. Bei älteren Menschen steigen Sturzgefahr und Verwirrtheit.",
        "Wichtig: nicht abrupt absetzen. Ein plötzliches Absetzen kann starke Entzugsbeschwerden auslösen, selten auch Krampfanfälle oder ein Delir. Das Absetzen wird mit Ärztin oder Arzt besprochen und erfolgt schrittweise, oft über Wochen oder Monate. Zusammen mit Alkohol oder Opioiden können diese Mittel die Atmung lebensgefährlich dämpfen.",
      ],
    },
    {
      titel: "Neue psychoaktive Substanzen und Mischkonsum",
      text: [
        "Neue psychoaktive Substanzen werden oft als „Badesalz“, „Räuchermischung“ oder in Süßigkeiten verkauft. Die Inhaltsstoffe sind meist unbekannt und können sich von Charge zu Charge ändern. Viele wurden nie am Menschen geprüft. Synthetische Cannabinoide und neue synthetische Opioide sind besonders gefährlich.",
        "Mischkonsum ist eines der größten Risiken überhaupt. Die Wirkungen verstärken sich gegenseitig und sind kaum abzuschätzen. Besonders gefährlich sind Kombinationen dämpfender Stoffe wie Opioide, Benzodiazepine und Alkohol, aber auch Kokain mit Alkohol oder mit Opioiden.",
      ],
    },
    {
      titel: "Wie es sich anfühlen kann",
      text: [
        "Am Anfang steht oft etwas, das sich gut anfühlt. Auf einer Party wird man wacher und offener. Ein Joint am Abend macht den Kopf ruhig. Eine Tablette lässt endlich schlafen. Viele erleben, dass ein Problem für eine Weile leiser wird.",
        "Schleichend kann sich die Rolle verändern. Das Wochenende ohne fühlt sich langweilig an. Ohne Joint kommt der Schlaf nicht mehr. Die Tablette wird nicht mehr nur bei Bedarf genommen, sondern jeden Abend. Man merkt, dass man Mengen herunterspielt oder Vorräte im Blick behält.",
        "Viele erzählen vom Tief danach: leer, gereizt, ängstlich, manchmal tagelang. Und davon, wie anstrengend das Verheimlichen war. Gleichzeitig beschreiben viele große Erleichterung, als sie zum ersten Mal offen mit jemandem darüber gesprochen haben.",
      ],
    },
    {
      titel: "Wie es dazu kommen kann",
      text: [
        "Abhängigkeit hat viele Ursachen und ist keine Frage von Charakter oder Willensschwäche. Eine Rolle spielen die Substanz selbst, wie oft und wie früh konsumiert wird, und die persönliche Lage.",
        "Gefährdet sind besonders Menschen mit psychischen oder sozialen Belastungen. Wer Ängste, Depressionen oder Schlafprobleme mit Substanzen dämpft, gerät leichter in eine Abhängigkeit. Gleichzeitig können Drogen solche Beschwerden verstärken oder auslösen.",
        "Auch das Umfeld zählt: wie verfügbar Substanzen sind, wie im Freundeskreis konsumiert wird und ob Halt da ist. Bei Medikamenten beginnt es oft mit einer berechtigten Verschreibung, die einfach zu lange weiterläuft.",
      ],
    },
  ],
  vertiefung: [
    {
      titel: "Wie eine Behandlung abläuft",
      text: [
        "Ein guter erster Schritt ist ein Gespräch in einer Suchtberatungsstelle oder in der Hausarztpraxis. Beratungsstellen unterliegen der Schweigepflicht. In Österreich gilt für Einrichtungen nach dem Suchtmittelgesetz eine Verschwiegenheitspflicht. Viele Angebote sind kostenlos und anonym.",
        "Bei einer körperlichen Abhängigkeit folgt der Entzug, auch Entgiftung genannt, oft im Krankenhaus und mit Medikamenten gegen die Beschwerden. Mit psychosozialer Begleitung heißt das in Deutschland qualifizierte Entgiftung. Bei mehreren Substanzen wird meist schrittweise entzogen.",
        "Danach kommt die Entwöhnung. Sie dauert mehrere Monate und ist ambulant, teilstationär oder stationär möglich. Hier geht es um Auslöser, Rückfallvorbeugung und ein Leben ohne Suchtmittel. Kognitive Verhaltenstherapie ist die am besten untersuchte Psychotherapie dafür.",
        "Bei Opioidabhängigkeit gibt es die Substitutionsbehandlung. Ärztinnen oder Ärzte verschreiben ein Ersatzmedikament statt Heroin, zum Beispiel Methadon oder Buprenorphin. Das senkt das Risiko von Infektionen, Überdosis und Tod. In Österreich dürfen das nur besonders qualifizierte Ärztinnen und Ärzte, die Organisation unterscheidet sich je nach Bundesland. In Deutschland sind laut Substitutionsregister rund 80.000 Menschen in dieser Behandlung.",
        "Bei Schlaf- und Beruhigungsmitteln wird die Dosis Schritt für Schritt verringert. Eine Abhängigkeit von niedrigen Dosen lässt sich meist ambulant behandeln, bei hohen Dosen ist oft ein stationärer Entzug nötig. Bei Schmerzmitteln braucht es zugleich eine gute Schmerzbehandlung.",
        "In beiden Ländern folgt eine Nachsorge, etwa mit Terminen in der Beratungsstelle, Selbsthilfegruppen und Unterstützung bei Ausbildung und Beruf. Rückfälle gehören oft zum Weg dazu und sind kein Grund aufzugeben.",
      ],
    },
    {
      titel: "Was du selbst tun kannst",
      text: [
        "Am sichersten ist es, nicht zu konsumieren. Wer trotzdem konsumiert, kann Risiken senken. Grundprinzipien aus der Drogenhilfe: so spät wie möglich anfangen, selten statt regelmäßig, nichts mischen, auch nicht mit Alkohol oder Tabak. Nach Konsum nicht Auto fahren. In Schwangerschaft und Stillzeit sowie bei psychischen Erkrankungen besonders vorsichtig sein oder ganz verzichten.",
        "Auf Partys droht bei langem Tanzen Überhitzung. Warnzeichen sind Krämpfe, Schwindel, Kopfschmerzen und plötzliche Müdigkeit. Achte auch auf Freundinnen und Freunde und lass niemanden allein, dem es schlecht geht.",
        "Beim Drug Checking werden Substanzen anonym im Labor untersucht, mit Beratung dazu. In Wien bietet das checkit! der Suchthilfe Wien an, in Innsbruck die Drogenarbeit Z6 gemeinsam mit der Gerichtsmedizin, in Klagenfurt läuft seit Juni 2025 ein Pilotprojekt. In Deutschland erlaubt das Betäubungsmittelgesetz Modellvorhaben, die Bundesländer regeln die Umsetzung selbst. Ein Testergebnis ist keine Unbedenklichkeitserklärung.",
        "Seriöse Informationen bieten drugcom.de vom Bundesinstitut für Öffentliche Gesundheit, in Bayern mindzone der Caritas, und KnowDrugs mit Warnungen zu gefährlichen Tabletten. Wer bei Cannabis aufhören oder reduzieren möchte, findet online Unterstützung bei Quit the Shit.",
        "Wenn du Schlaf- oder Beruhigungsmittel schon länger nimmst, sprich das in der Praxis an. Setz sie nicht auf eigene Faust plötzlich ab.",
        "Beratung bekommst du in Deutschland bei der Sucht & Drogen Hotline unter 01806 313031, täglich 8 bis 24 Uhr, 20 Cent pro Anruf. Beratungsstellen findest du im Suchthilfeverzeichnis der DHS, in Österreich über den Suchthilfekompass und die Suchtberatung auf gesundheit.gv.at.",
      ],
    },
    {
      titel: "Im Notfall",
      text: [
        "Notfallzeichen sind unter anderem: Bewusstlosigkeit oder kaum weckbar, sehr flache oder aussetzende Atmung, Brustschmerz, starkes Herzrasen, Krampfanfälle, Überhitzung mit Verwirrung, starke Angst oder Panik, die nicht nachlässt.",
        "Ruf sofort die Rettung: 144 in Österreich, 112 in Deutschland und europaweit. Sag, was konsumiert wurde, wenn du es weißt, und heb Reste oder Verpackungen auf. Ärztinnen und Ärzte unterliegen der Schweigepflicht.",
        "Lass die Person nicht allein. Ist sie bewusstlos und atmet, bring sie in die stabile Seitenlage. Atmet sie nicht normal, beginn sofort mit der Herzdruckmassage, bis Hilfe übernimmt. Liegt Naloxon bereit und es könnten Opioide im Spiel sein, wende es an und bleib trotzdem beim Notruf.",
        "Bei Überhitzung: an einen kühlen, ruhigen Ort bringen, enge Kleidung lockern, bei vollem Bewusstsein Wasser in kleinen Schlucken. Bei Panik: ruhige Umgebung, frische Luft, ruhig sprechen.",
        "Wenn du unsicher bist, ob es gefährlich ist: Vergiftungsinformationszentrale Österreich 01 406 43 43, rund um die Uhr. In Deutschland gibt es regionale Giftnotrufe, zum Beispiel Berlin 030 19240 oder München 089 19240.",
      ],
    },
  ],
  hilft: [
    "Ein offenes Gespräch in einer Suchtberatungsstelle, anonym und meist kostenlos.",
    "Ärztlich begleiteter Entzug, danach Entwöhnung und Nachsorge.",
    "Bei Opioidabhängigkeit: Substitutionsbehandlung.",
    "Bei Beruhigungs- und Schlafmitteln: langsames, ärztlich begleitetes Ausschleichen.",
    "Psychotherapie, auch für Ängste, Depressionen oder Schlafprobleme, die hinter dem Konsum stehen.",
    "Selbsthilfegruppen, etwa Narcotics Anonymous, und Angebote für Angehörige.",
  ],
  wannHilfe: [
    "Sofort Notruf 144 (AT) oder 112 (DE) bei Bewusstlosigkeit, Atemnot, Brustschmerz, Krampfanfall oder Überhitzung",
    "wenn du öfter oder mehr konsumierst als geplant und Aufhören nicht gelingt",
    "wenn Konsum Schule, Arbeit, Beziehungen oder Geld belastet",
    "wenn du Schlaf- oder Beruhigungsmittel länger als ein paar Wochen nimmst",
    "wenn nach Cannabis oder anderen Drogen Misstrauen, Stimmen oder starke Ängste auftreten",
    "wenn du Substanzen nutzt, um Gefühle, Ängste oder Schlaflosigkeit auszuhalten",
    "Erste Anlaufstellen: Suchtberatungsstellen, Hausarztpraxis, in Österreich auch 1450, in Deutschland die Sucht & Drogen Hotline",
  ],
  irrtuemer: [
    { irrtum: "Cannabis ist harmlos, weil es in Deutschland erlaubt ist.", richtig: "Erlaubt heißt nicht ungefährlich. Cannabis kann abhängig machen, und vor allem bei jungen Menschen mit häufigem, starkem Konsum steigt das Risiko für Psychosen." },
    { irrtum: "Medikamente vom Arzt machen nicht abhängig.", richtig: "Benzodiazepine, Z-Substanzen und Opioid-Schmerzmittel können auch bei verordneter, niedriger Dosis abhängig machen. Das passiert oft unbemerkt." },
    { irrtum: "Wenn ich aufhören will, setze ich die Tabletten einfach ab.", richtig: "Ein plötzliches Absetzen von Beruhigungsmitteln kann gefährlich sein. Sicherer ist ein schrittweises Verringern mit ärztlicher Begleitung." },
    { irrtum: "Nach einer Pause verträgt man die gewohnte Menge wieder.", richtig: "Bei Opioiden ist das Gegenteil der Fall. Nach einem Entzug oder einer Pause sinkt die Gewöhnung, und früher vertragene Mengen können tödlich sein." },
    { irrtum: "Wer den Notruf wählt, bekommt Ärger mit der Polizei.", richtig: "Im Notfall zählt das Leben. Ärztinnen und Ärzte unterliegen der Schweigepflicht. Lieber einmal zu oft anrufen als zu spät." },
  ],
  angehoerige: [
    "Angehörige bemerken Veränderungen oft als Erste. Sprich deine Sorge in einem ruhigen Moment an und rechne mit Abwehr. Ob jemand Hilfe annimmt, entscheidet am Ende die Person selbst.",
    "Vermeide, das Problem zu verheimlichen, zu entschuldigen oder Verpflichtungen dauerhaft zu übernehmen. Das kann den Konsum ungewollt stützen. Achte auf deine eigenen Grenzen und deine Gesundheit.",
    "Suchtberatungsstellen beraten auch Angehörige, selbst wenn die betroffene Person keine Hilfe möchte. In Deutschland auch die Sucht & Drogen Hotline.",
    "Eltern finden in Deutschland Unterstützung beim Bundesverband der Elternkreise suchtgefährdeter und suchtkranker Söhne und Töchter. Kreuzbund und Freundeskreise haben Angehörigengruppen. In Österreich vermitteln Suchtberatungsstellen und Selbsthilfe-Dachverbände der Bundesländer Gruppen.",
    "Wenn jemand in deinem Umfeld Opioide nimmt, frag in der Drogenhilfe nach einer Naloxon-Schulung. Kenne die Notfallzeichen und ruf im Zweifel sofort 144 oder 112.",
  ],
  quellen: [
    GV_CANNABIS_WIRKUNG, GV_CANNABIS_FOLGEN, GV_KOKAIN, GV_HEROIN, GV_HEROIN_THERAPIE, GV_ECSTASY, GV_BZD, GV_VERGIFTUNG, GV_VIZ, GV_CO,
    BUND_DROGEN, BUND_MEDIS, BUND_NPS, BUND_SH,
    BMG_INKRAFT, BMG_FAQ, BMG_NALTRAIN,
    SOZ_RECHT, SOZ_THERAPIE, GOEG_2025,
    EUDA_KOKAIN, EUDA_NPS,
    DC_KOKAIN, DC_OPIOIDE, DC_NOTFALL, DC_SAFER,
    HOTLINE, DHS_VZ, BFR_GIZ,
    Z6_DC, CHECKIT_NEWS, BW_DC, SDW_NOT, SDW_BER, MINDZONE, KNOWDRUGS,
  ],
};

export interface Anlaufstelle { land: "AT" | "DE"; name: string; nummer?: string; web: string; text: string; quelle: string }

export const ANLAUFSTELLEN_SUCHT: Anlaufstelle[] = [
  // Österreich
  { land: "AT", name: "Rettung", nummer: "144", web: GV_VERGIFTUNG.url, text: "Bei Überdosis, Bewusstlosigkeit, Atemnot oder anderen lebensbedrohlichen Zuständen sofort anrufen. Euronotruf 112 funktioniert ebenfalls.", quelle: GV_VERGIFTUNG.url },
  { land: "AT", name: "Vergiftungsinformationszentrale (VIZ)", nummer: "01 406 43 43", web: GV_VIZ.url, text: "Rund um die Uhr. Ärztliche Einschätzung am Telefon, ob eine Vergiftung gefährlich ist, auch bei Sucht- und Genussmitteln.", quelle: GV_VIZ.url },
  { land: "AT", name: "Gesundheitsberatung 1450", nummer: "1450", web: "https://www.gesundheit.gv.at/krankheiten/sucht/cannabis.html", text: "Telefonische Gesundheitsberatung, hilft bei der Einschätzung und vermittelt weiter.", quelle: "https://www.gesundheit.gv.at/krankheiten/sucht/cannabis.html" },
  { land: "AT", name: "Suchthilfekompass", web: "http://suchthilfekompass.goeg.at/", text: "Verzeichnis von Suchthilfe-Einrichtungen in ganz Österreich, von der Gesundheit Österreich GmbH.", quelle: SOZ_THERAPIE.url },
  { land: "AT", name: "Sucht-Beratung auf gesundheit.gv.at", web: "https://www.gesundheit.gv.at/service/beratungsstellen/krankheiten/abhaengigkeit-sucht/sucht-beratung.html", text: "Übersicht über Suchtberatungsstellen in Österreich.", quelle: SOZ_THERAPIE.url },
  { land: "AT", name: "Fachstellen für Suchtprävention (ARGE Suchtvorbeugung)", web: "https://www.suchtvorbeugung.net/", text: "Fachstellen in den Bundesländern mit Beratung und Projekten.", quelle: SOZ_THERAPIE.url },
  { land: "AT", name: "Liste der Substitutionsärztinnen und -ärzte", web: "https://lisa-public.ehealth.gv.at/", text: "Öffentliche Liste der für die Substitutionsbehandlung qualifizierten Ärztinnen und Ärzte. Bei Fragen hilft die Sucht- und Drogenkoordination des Bundeslandes.", quelle: SOZ_THERAPIE.url },
  { land: "AT", name: "Ambulatorium der Sucht- und Drogenkoordination Wien", nummer: "+43 1 4000 87366", web: "https://sdw.wien/einrichtung/ambulatorium-der-sucht-und-drogenkoordination-wien", text: "Sozialarbeiterische, medizinische und psychologische Hilfe. Modecenterstraße 14, 1030 Wien.", quelle: SDW_BER.url },
  { land: "AT", name: "Suchthilfe Wien", nummer: "+43 1 4000 53600", web: "https://www.suchthilfe.wien/", text: "Einrichtungen der Wiener Suchthilfe. Ambulatorium und Tageszentrum Jedmayer am Gumpendorfer Gürtel 8, 1060 Wien, Ambulanz +43 1 4000-53760.", quelle: SDW_NOT.url },
  { land: "AT", name: "Sozialpsychiatrischer Notdienst Wien (PSD-Wien)", nummer: "01 313 30", web: "https://www.psd-wien.at/", text: "24-Stunden-Dienst bei akuten psychischen Krisen, auch für Angehörige.", quelle: SDW_NOT.url },
  { land: "AT", name: "checkit! (Suchthilfe Wien)", web: "https://checkit.wien", text: "Drug Checking mit Beratung zu Risiken und Weitervermittlung. Standorte Gumpendorfer Straße und, seit 2026, U4-Center Meidling. Proben auch über teilnehmende Apotheken.", quelle: CHECKIT_NEWS.url },
  { land: "AT", name: "Drogenarbeit Z6 Innsbruck", nummer: "0676 48 53 954", web: Z6.url, text: "Anonyme, kostenlose Beratung, auch per Telefon, E-Mail oder WhatsApp. Drug Checking montags 16 bis 19 Uhr in der Dreiheiligenstraße 9, die Nummer gilt für Drug-Checking-Termine außerhalb dieser Zeit.", quelle: Z6_DC.url },
  // Deutschland
  { land: "DE", name: "Rettungsdienst", nummer: "112", web: BUND_DROGEN.url, text: "Bei Überdosis, Bewusstlosigkeit, Atemnot oder Brustschmerz sofort anrufen. Ärztlicher Bereitschaftsdienst außerhalb der Sprechzeiten: 116117.", quelle: BUND_DROGEN.url },
  { land: "DE", name: "Sucht & Drogen Hotline", nummer: "01806 313031", web: HOTLINE.url, text: "Täglich 8 bis 24 Uhr, 20 Cent pro Anruf. Beratung für Betroffene, Angehörige, Freunde und Kollegen, Vermittlung an Hilfe vor Ort.", quelle: HOTLINE.url },
  { land: "DE", name: "Suchthilfeverzeichnis der DHS", web: DHS_VZ.url, text: "Suche nach Beratungsstellen, Entwöhnung, Substitution und Angeboten für Angehörige nach Ort und Thema.", quelle: DHS_VZ.url },
  { land: "DE", name: "DigiSucht", web: "https://suchtberatung.digital", text: "Digitale Suchtberatung durch Fachkräfte.", quelle: BUND_DROGEN.url },
  { land: "DE", name: "drugcom.de (BIÖG)", web: "https://www.drugcom.de/", text: "Informationen zu Substanzen, Risiken und Notfällen, Online-Beratung. Mit Quit the Shit gibt es Unterstützung beim Aufhören mit Cannabis.", quelle: DC_SAFER.url },
  { land: "DE", name: "Giftnotruf der Charité Berlin", nummer: "030 19240", web: BFR_GIZ.url, text: "Giftinformationszentrum. Beratung bei Vergiftungen.", quelle: BFR_GIZ.url },
  { land: "DE", name: "Informationszentrale gegen Vergiftungen Bonn", nummer: "0228 19240", web: BFR_GIZ.url, text: "Giftinformationszentrum am Universitätsklinikum Bonn.", quelle: BFR_GIZ.url },
  { land: "DE", name: "Giftnotruf Erfurt", nummer: "0361 730730", web: BFR_GIZ.url, text: "Für Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen.", quelle: BFR_GIZ.url },
  { land: "DE", name: "Vergiftungs-Informations-Zentrale Freiburg", nummer: "0761 19240", web: BFR_GIZ.url, text: "Giftinformationszentrum am Universitätsklinikum Freiburg.", quelle: BFR_GIZ.url },
  { land: "DE", name: "GIZ-Nord Göttingen", nummer: "0551 19240", web: BFR_GIZ.url, text: "Für Bremen, Hamburg, Niedersachsen und Schleswig-Holstein.", quelle: BFR_GIZ.url },
  { land: "DE", name: "Giftinformationszentrum Mainz", nummer: "06131 19240", web: BFR_GIZ.url, text: "Für Rheinland-Pfalz, Hessen und Saarland.", quelle: BFR_GIZ.url },
  { land: "DE", name: "Giftnotruf München", nummer: "089 19240", web: BFR_GIZ.url, text: "Giftinformationszentrum am TUM Klinikum Rechts der Isar.", quelle: BFR_GIZ.url },
  { land: "DE", name: "Narcotics Anonymous", web: "https://narcotics-anonymous.de", text: "Selbsthilfegemeinschaft bei Drogenproblemen.", quelle: BUND_SH.url },
  { land: "DE", name: "Bundesverband der Elternkreise (BVEK)", web: "https://bvek.org", text: "Selbsthilfe für Eltern und Familien suchtgefährdeter und suchtkranker Söhne und Töchter.", quelle: BUND_SH.url },
  { land: "DE", name: "NAKOS", web: "https://www.nakos.de/adressen/rot/", text: "Datenbank der Selbsthilfekontaktstellen, hilft bei der Suche nach Gruppen vor Ort.", quelle: BUND_SH.url },
  { land: "DE", name: "mindzone (Bayern)", web: MINDZONE.url, text: "Safer-Use- und Partyinformationen, Notfallhinweise und Online-Beratung, vom Landescaritasverband Bayern.", quelle: MINDZONE.url },
];

// Texte für die Hilfe-Seite (hier, weil die Seiten-Dateien bestimmte Wörter nicht enthalten dürfen).
export const HILFE_SUCHT = {
  titel: "Bei Sucht, Drogen und Medikamenten",
  text: "Für Menschen, die sich Sorgen um ihren Konsum machen, und für Angehörige. Beratung ist kostenlos, vertraulich und auch anonym möglich.",
  gift: "Giftnotrufe nach Region",
};
export const istGiftnotruf = (name: string) => /gift|vergiftung|^GIZ/i.test(name);
export { ANLAUFSTELLEN_SUCHT as KONSUM_STELLEN, HILFE_SUCHT as KONSUM_HILFE };
