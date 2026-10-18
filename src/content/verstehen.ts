// „Psychische Gesundheit verstehen“: allgemeine Information zu Krankheitsbildern nach ICD-11.
// Nie mit den Antworten der Person verknüpft. Kein Selbsttest, keine Kriterienliste.
import type { Quelle } from "./wissen";
import { SEITEN } from "./verstehen-seiten";
import { TRAUMA, ERGAENZUNG as TRAUMA_ERGAENZUNG } from "./trauma";
import { VERTIEFUNG_1, ZUGANG } from "./vertiefung1";
import { VERTIEFUNG_2 } from "./vertiefung2";
import { NS_ERGAENZUNG } from "./ns-erziehung";
export { ZUGANG };

export interface VerstehenSeite {
  id: string;
  titel: string;
  gruppe: string;
  stichworte?: string[]; // nur für die Suche, wird nicht angezeigt
  icd?: { code: string; titel: string; url?: string };
  einleitung: string;
  absaetze: { titel: string; text: string[] }[];
  hilft: string[];
  wannHilfe: string[];
  quellen: Quelle[];
  irrtuemer?: Irrtum[];
  angehoerige?: string[];
  vertiefung?: { titel: string; text: string[] }[]; // nach „Was hilft“
}
export interface Irrtum { irrtum: string; richtig: string }

export const ICD_INFO = {
  text: "Die Einordnung folgt der ICD-11, der Internationalen Klassifikation der Krankheiten der WHO, seit 1. Jänner 2022 in Kraft. Für Diagnosen und Abrechnung wird in Österreich und Deutschland derzeit noch die ICD-10 verwendet; die Umstellung in Deutschland dauert laut BfArM noch einige Jahre. Häufigkeiten für Deutschland stammen, wo nicht anders angegeben, aus der Studie DEGS1-MH (Erwachsene 18 bis 79 Jahre, innerhalb eines Jahres).",
  quellen: [
    { text: "WHO: International Classification of Diseases", url: "https://www.who.int/standards/classifications/classification-of-diseases" },
    { text: "BfArM: ICD-11", url: "https://www.bfarm.de/EN/Code-systems/Classifications/ICD/ICD-11/_node.html" },
    { text: "ICD-11 Browser der WHO", url: "https://icd.who.int/browse/2025-01/mms/en" },
  ] as Quelle[],
};

export const TRANSGENERATIONAL: VerstehenSeite = {
  id: "transgenerational",
  titel: "Wenn Belastungen über Generationen wirken",
  gruppe: "Familie und Geschichte",
  stichworte: ["Eltern", "Großeltern", "Kriegsenkel", "Krieg", "Flucht", "Familiengeschichte", "Holocaust", "Vertreibung"],
  einleitung:
    "Manche Menschen tragen Gefühle mit sich, die sich nicht aus dem eigenen Leben erklären: diffuse Angst, Schwere, ein Schweigen in der Familie. Fachleute sprechen von transgenerationaler Weitergabe. Gemeint ist, dass Folgen schwerer Erlebnisse der Eltern oder Großeltern das Familienleben prägen und so auch Kinder und Enkel berühren können.",
  absaetze: [
    {
      titel: "Was damit gemeint ist",
      text: [
        "Transgenerationale Weitergabe ist ein Erklärungsmodell, keine Diagnose. Es beschreibt, wie unverarbeitete Erfahrungen wie Krieg, Flucht, Verfolgung oder Gewalt in der Familie nachwirken können, auch bei Menschen, die das Ereignis selbst nie erlebt haben.",
        "In Österreich und Deutschland betrifft das viele Familien. Rund 40 bis 50 Prozent der vor Kriegsende Geborenen in Deutschland berichten von mindestens einem traumatischen Erlebnis, meist aus dem Zweiten Weltkrieg. Ihre Kinder, oft Kriegsenkel genannt, wuchsen häufig mit Eltern auf, die über vieles schwiegen. Ähnliches erleben Familien mit Fluchtgeschichte oder mit Gewalt in früheren Generationen.",
      ],
    },
    {
      titel: "Wie das geschehen kann",
      text: [
        "Am besten belegt ist der Weg über Beziehungen. Eltern, die selbst stark belastet sind, sind für ihre Kinder manchmal weniger erreichbar, ängstlicher oder angespannter. Kinder spüren das, auch ohne Worte. Studien finden einen deutlichen Zusammenhang zwischen der Belastung von Eltern und der ihrer Kinder.",
        "Eine große Rolle spielt das Schweigen. Wenn über Erlebtes nicht gesprochen wird, bleibt für die Kinder ein Gefühl ohne Geschichte. Die Bindungsforschung zeigt: Entscheidend ist weniger, was Eltern erlebt haben, sondern ob sie es in eine zusammenhängende Geschichte fassen können.",
        "Oft ist zu lesen, Trauma werde „vererbt“ oder stecke in den Genen. Das stimmt so nicht. Es gibt erste, kleine und umstrittene Studien zu biologischen Spuren, sogenannter Epigenetik. Gut belegt sind solche Effekte bisher nur bei Tieren. Beim Menschen lassen sich biologische, soziale und kulturelle Einflüsse kaum trennen.",
      ],
    },
    {
      titel: "Was wichtig ist zu wissen",
      text: [
        "Weitergabe ist kein Schicksal. Die meisten Kinder und Enkel belasteter Familien sind nicht beeinträchtigt. Eine große Auswertung von Studien mit Nachkommen von Holocaust-Überlebenden fand in der Allgemeinbevölkerung keine Hinweise auf eine generelle Belastung. Viele Familien zeigen große Widerstandskraft.",
        "Ein erhöhtes Risiko besteht vor allem dann, wenn weitere Belastungen dazukommen und wenn in der Familie wenig Halt und wenig Austausch da ist. Eine verlässliche, zugewandte Bezugsperson ist der stärkste Schutz.",
        "Familiengeschichte ist selten eindeutig. Zu ihr gehören in vielen Familien auch Mitläufer- oder Tätergeschichten. Sich damit auseinanderzusetzen, kann schmerzhaft sein und gehört trotzdem dazu.",
        "Niemand muss sich schuldig fühlen. Eltern und Großeltern haben in der Regel getan, was ihnen möglich war. Und nicht jede Belastung hat ihre Wurzel in der Familiengeschichte. Wenn es dir schlecht geht, lohnt es sich, alle Ursachen fachlich anschauen zu lassen.",
      ],
    },
  ],
  hilft: [
    "Die eigene Familiengeschichte kennenlernen: Fragen stellen, solange es möglich ist, Briefe, Fotos und Dokumente anschauen.",
    "Darüber sprechen, mit Familie, Freundinnen und Freunden oder Menschen mit ähnlicher Geschichte. Austausch kann entlasten. Wie gut Gesprächsgruppen helfen, ist allerdings wenig untersucht.",
    "Bei eigenen Beschwerden wie anhaltender Angst, Niedergeschlagenheit oder Schlafproblemen: Psychotherapie. Für Traumafolgen sind traumafokussierte Verhaltenstherapie und EMDR am besten belegt.",
    "Für Nachkommen von NS-Verfolgten gibt es in Wien das psychosoziale Zentrum ESRA, kostenlos. Für Menschen mit Flucht- oder Foltererfahrung und ihre Familien gibt es Hemayat in Wien und in Deutschland die psychosozialen Zentren der BAfF, etwa das Zentrum ÜBERLEBEN in Berlin.",
    "Wer eine Psychotherapie mit Schwerpunkt Trauma sucht, findet in Deutschland zertifizierte Fachleute über die Suche der Deutschsprachigen Gesellschaft für Psychotraumatologie (DeGPT).",
  ],
  wannHilfe: [
    "wenn Gefühle wie Angst, Leere oder Schwere dich über längere Zeit begleiten und deinen Alltag einschränken",
    "wenn die Beschäftigung mit der Familiengeschichte dich stark aufwühlt",
    "wenn alte Erfahrungen in der Familie, etwa bei alt gewordenen Eltern oder Großeltern, wieder aufbrechen. Auch für sie gibt es Unterstützung.",
  ],
  quellen: [
    { text: "Glaesmer & Brähler (2011): Die Langzeitfolgen des Zweiten Weltkrieges in der deutschen Bevölkerung. Psychotherapeutenjournal 4/2011", url: "https://www.alterundtrauma.de/files/alter-und-trauma/Newsletter/PTJ_4_2011_Glaesmer&Braehler_S346ff.pdf" },
    { text: "Moré (2013): Die unbewusste Weitergabe von Traumata und Schuldverstrickungen an nachfolgende Generationen. Journal für Psychologie", url: "https://journal-fuer-psychologie.de/article/download/268/306/407" },
    { text: "Van IJzendoorn, Bakermans-Kranenburg & Sagi-Schwartz (2003): Are children of Holocaust survivors less well-adapted? Journal of Traumatic Stress", url: "https://cris.haifa.ac.il/en/publications/are-children-of-holocaust-survivors-less-well-adapted-a-meta-anal/" },
    { text: "Dashorst u. a. (2019): Intergenerational consequences of the Holocaust on offspring mental health. European Journal of Psychotraumatology", url: "https://research-portal.uu.nl/en/publications/intergenerational-consequences-of-the-holocaust-on-offspring-ment/" },
    { text: "Lambert u. a. (2014): Association between parents’ PTSD severity and children’s psychological distress. Journal of Traumatic Stress", url: "https://metatoc.com/papers/27245-association-between-parents-ptsd-severity-and-children-s-psychological-distress-a-meta-analysis" },
    { text: "Horsthemke (2018): A critical view on transgenerational epigenetic inheritance in humans. Nature Communications", url: "https://ideas.repec.org/a/nat/natcom/v9y2018i1d10.1038_s41467-018-05445-5.html" },
    { text: "Kriegskinder in Österreich, Universität Wien und Ludwig Boltzmann Institut für Kriegsfolgenforschung", url: "https://piaas-studie.univie.ac.at/fileadmin/user_upload/p_piaas_studie/Kriegskinder_Bericht_TeilnehmerInnen.pdf" },
    { text: "WHO: Post-traumatic stress disorder, Fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder" },
    { text: "ESRA Wien – für wen ESRA da ist", url: "https://www.esra.at/fuer-wen-esra-da-ist/" },
    { text: "Hemayat Wien", url: "https://www.hemayat.org" },
    { text: "BAfF – Psychosoziale Zentren für Geflüchtete", url: "https://www.baff-zentren.org" },
    { text: "Zentrum ÜBERLEBEN Berlin", url: "https://www.ueberleben.org" },
    { text: "DeGPT – Therapeut:innen in Ihrer Nähe finden", url: "https://www.degpt.de/hilfe-fuer-betroffene/therapeutinnen-in-ihrer-naehe-finden" },
  ],
};

// Ergänzungen aus den Vertiefungen. Abschnitte zu Behandlung und Selbsthilfe kommen nach „Was hilft“, der Rest davor.
export interface Ergaenzung { einleitung?: string; absaetze: { titel: string; text: string[] }[]; vertiefung?: { titel: string; text: string[] }[]; irrtuemer: Irrtum[]; angehoerige: string[]; quellen: Quelle[]; stichworte?: string[]; nachAbsatz?: number }
const NACH_HILFT = /behandlung|selbst tun|erholung/i;

function ergaenze(v: VerstehenSeite, e?: Ergaenzung): VerstehenSeite {
  if (!e) return v;
  const icd = v.absaetze.filter((a) => /ICD-11/.test(a.titel));
  const rest = v.absaetze.filter((a) => !/ICD-11/.test(a.titel));
  const neu = e.absaetze.filter((a) => !NACH_HILFT.test(a.titel));
  // nachAbsatz: neue Abschnitte nach dem n-ten bestehenden einfügen statt ans Ende
  const vorne = e.nachAbsatz === undefined ? rest : rest.slice(0, e.nachAbsatz);
  const hinten = e.nachAbsatz === undefined ? [] : rest.slice(e.nachAbsatz);
  return {
    ...v,
    einleitung: e.einleitung ?? v.einleitung,
    stichworte: [...(v.stichworte ?? []), ...(e.stichworte ?? [])],
    absaetze: [...vorne, ...neu, ...hinten, ...icd],
    vertiefung: [...(v.vertiefung ?? []), ...e.absaetze.filter((a) => NACH_HILFT.test(a.titel)), ...(e.vertiefung ?? [])],
    irrtuemer: [...(v.irrtuemer ?? []), ...e.irrtuemer],
    angehoerige: [...(v.angehoerige ?? []), ...e.angehoerige],
    quellen: [...v.quellen, ...e.quellen],
  };
}

const ERGAENZUNGEN: Record<string, Ergaenzung[]> = {};
for (const quelle of [TRAUMA_ERGAENZUNG, VERTIEFUNG_1, VERTIEFUNG_2] as Record<string, Ergaenzung>[])
  for (const [id, e] of Object.entries(quelle)) (ERGAENZUNGEN[id] ??= []).push(e);
(ERGAENZUNGEN.transgenerational ??= []).push({ ...NS_ERGAENZUNG, angehoerige: [], nachAbsatz: 1 });
const ALLE: VerstehenSeite[] = [TRANSGENERATIONAL, ...SEITEN];
ALLE.splice(ALLE.findIndex((v) => v.id === "ptbs"), 0, TRAUMA);
export const VERSTEHEN: VerstehenSeite[] = ALLE.map((v) => (ERGAENZUNGEN[v.id] ?? []).reduce(ergaenze, v));
