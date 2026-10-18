import { useEffect, useMemo, useState, type ReactNode } from "react";
import { WISSEN } from "../content/wissen";
import { ICD_INFO, VERSTEHEN } from "../content/verstehen";
import { SYMBOLE, THEMA_SYMBOL, WISSEN_SYMBOLE as S } from "../components/Icons";

// Bereiche für den Filter. „gruppen“ verweist auf VerstehenSeite.gruppe, „alltag“ auf die Seiten in WISSEN.
interface Bereich { id: string; label: string; symbol: string; gruppen?: string[] }
const BEREICHE: Bereich[] = [
  { id: "alle", label: "Alle", symbol: "alle" },
  { id: "alltag", label: "Alltag", symbol: "alltag" },
  { id: "stimmung", label: "Stimmung", symbol: "stimmung", gruppen: ["Stimmung"] },
  { id: "angst", label: "Angst und Zwang", symbol: "angst", gruppen: ["Angst und Zwang"] },
  { id: "trauma", label: "Trauma und Verlust", symbol: "trauma", gruppen: ["Belastung, Trauma und Verlust"] },
  { id: "familie", label: "Familie", symbol: "familie", gruppen: ["Familie und Geschichte"] },
  { id: "koerper", label: "Körper und Schlaf", symbol: "koerper", gruppen: ["Körper, Essen und Schlaf"] },
  { id: "person", label: "Persönlichkeit", symbol: "person", gruppen: ["Entwicklung, Persönlichkeit und Wahrnehmung"] },
  { id: "konsum", label: "Konsum", symbol: "konsum", gruppen: ["Konsum und Verhalten"] },
  { id: "arbeit", label: "Arbeit", symbol: "arbeit", gruppen: ["Arbeit"] },
];
const GRUPPE_SYMBOL: Record<string, string> = Object.fromEntries(
  BEREICHE.flatMap((b) => (b.gruppen ?? []).map((g) => [g, b.symbol])),
);
const ALLTAG_SYMBOL = THEMA_SYMBOL;
// Suchbegriffe für die Alltagsseiten (werden nicht angezeigt).
const ALLTAG_STICHWORTE: Record<string, string[]> = {
  schlaf: ["müde", "Einschlafen", "Schlafprobleme", "Erholung", "nachts"],
  energie: ["Bewegung", "Sport", "Ernährung", "Kraftlos", "Müdigkeit"],
  stress: ["Druck", "Anspannung", "Entspannung", "Überlastung", "Gereizt"],
  stimmung: ["traurig", "Niedergeschlagen", "Laune", "Gefühle"],
  beziehungen: ["einsam", "Einsamkeit", "Freunde", "Partnerschaft", "Familie"],
  alltag: ["Arbeit", "Job", "Haushalt", "Struktur", "Erschöpfung"],
  gewohnheiten: ["Alkohol", "Handy", "Bildschirm", "Rauchen", "Medien"],
  staerken: ["Resilienz", "Selbstwert", "Kraftquellen", "Zuversicht"],
};

interface Eintrag { id: string; titel: string; teaser: string; bereich: string; gruppe: string; symbol: string; text: string; stichworte: string }
const erster = (t: string) => t.split(/(?<=[.!?])\s/)[0];

const EINTRAEGE: Eintrag[] = [
  ...WISSEN.map((w) => ({
    id: w.id, titel: w.titel, teaser: erster(w.einleitung), bereich: "alltag", gruppe: "Alltag und Wohlbefinden",
    symbol: ALLTAG_SYMBOL[w.id] ?? "alltag",
    text: [w.einleitung, ...w.hilft].join(" "), stichworte: (ALLTAG_STICHWORTE[w.id] ?? []).join(" "),
  })),
  ...VERSTEHEN.map((v) => ({
    id: v.id, titel: v.titel, teaser: erster(v.einleitung),
    bereich: BEREICHE.find((b) => b.gruppen?.includes(v.gruppe))?.id ?? "alle", gruppe: v.gruppe,
    symbol: GRUPPE_SYMBOL[v.gruppe] ?? "alle",
    text: [v.einleitung, ...v.absaetze.flatMap((a) => a.text), ...v.hilft].join(" "),
    stichworte: [...(v.stichworte ?? []), v.icd?.code ?? ""].join(" "),
  })),
];

// Vereinfacht Text für die Suche: klein, ohne Umlaute und Sonderzeichen. „Burn-out“ findet „burnout“, „Ängste“ findet „angste“.
function norm(t: string) {
  return t.toLowerCase().replace(/ß/g, "ss").normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/ae/g, "a").replace(/oe/g, "o").replace(/ue/g, "u").replace(/[^a-z0-9]/g, "");
}
const INDEX = EINTRAEGE.map((e) => ({ e, titel: norm(e.titel), stich: norm(e.stichworte), text: norm(e.text + " " + e.gruppe) }));

function suchen(q: string): Eintrag[] {
  const woerter = q.split(/\s+/).map(norm).filter((w) => w.length > 1);
  if (woerter.length === 0) return [];
  return INDEX.map((x) => {
    let punkte = 0;
    for (const w of woerter) {
      if (x.titel.includes(w)) punkte += 10;
      else if (x.stich.includes(w)) punkte += 6;
      else if (x.text.includes(w)) punkte += 1;
      else return null; // jedes Wort muss vorkommen
    }
    return { e: x.e, punkte };
  }).filter((x): x is { e: Eintrag; punkte: number } => x !== null)
    .sort((a, b) => b.punkte - a.punkte).map((x) => x.e);
}

const VORSCHLAEGE = ["Schlaf", "Stress", "Angst", "Trauma", "Trauer", "Sucht"];

// Bleibt beim Wechsel zwischen Übersicht und Artikel erhalten, aber nur im Arbeitsspeicher.
let merkSuche = "";
let merkBereich = "alle";

export default function Wissen({ id }: { id?: string }) {
  if (!id) return <Uebersicht />;
  const v = VERSTEHEN.find((x) => x.id === id);
  if (v) return <VerstehenArtikel v={v} />;
  const w = WISSEN.find((x) => x.id === id);
  if (!w) return <div className="spalte"><h1>Seite nicht gefunden</h1><a href="#/wissen">Alle Themen</a></div>;
  const teile: Teil[] = [
    ...(w.hintergrund ?? []).map((h) => abschnitt(h.titel, h.text)),
    { id: "was-hilft", titel: "Was im Alltag helfen kann", inhalt: <ul>{w.hilft.map((h, i) => <li key={i}>{h}</li>)}</ul> },
    ...(w.schritte?.length ? [{ id: "schritte", titel: "Kleine Schritte für diese Woche", inhalt: <Schritte liste={w.schritte} /> }] : []),
    ...(w.irrtuemer?.length ? [{ id: "irrtuemer", titel: "Häufige Irrtümer", inhalt: <Irrtuemer liste={w.irrtuemer} /> }] : []),
    { id: "wann-hilfe", titel: "Wann ein Gespräch mit Fachleuten sinnvoll ist", kasten: true, inhalt: <WannHilfe liste={w.wannHilfe} /> },
  ];
  return (
    <article className="spalte">
      <Zurueck />
      <Kopf symbol={ALLTAG_SYMBOL[w.id] ?? "alltag"} gruppe="Alltag und Wohlbefinden" titel={w.titel} />
      <p className="einleitung">{w.einleitung}</p>
      <Teile teile={teile} />
      <Verwandt id={w.id} bereich="alltag" />
      <Quellen liste={w.quellen} schluss="Die Texte fassen die Quellen in eigenen Worten zusammen. Sie sind allgemeine Information und keine Beratung im Einzelfall." />
    </article>
  );
}

// ---------- Bausteine für Artikel ----------
interface Teil { id: string; titel: string; inhalt: ReactNode; kasten?: boolean; klein?: boolean }
const slug = (t: string) => norm(t).slice(0, 40) || "abschnitt";
const abschnitt = (titel: string, text: string[]): Teil => ({ id: slug(titel), titel, inhalt: <>{text.map((t, i) => <p key={i}>{t}</p>)}</> });

function Teile({ teile }: { teile: Teil[] }) {
  const sichtbar = teile.filter((t) => !t.klein);
  return (
    <>
      {sichtbar.length > 3 && (
        <details className="inhaltsverzeichnis">
          <summary>Auf dieser Seite <span className="leise">({sichtbar.length} Abschnitte)</span></summary>
          <ol>
            {sichtbar.map((t) => (
              <li key={t.id}><a href={"#" + t.id} onClick={(e) => { e.preventDefault(); document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>{t.titel}</a></li>
            ))}
          </ol>
        </details>
      )}
      {teile.map((t) => (
        <section key={t.id} id={t.id} className={t.kasten ? "kasten kasten--licht abschnitt" : t.klein ? "abschnitt abschnitt--klein" : undefined}>
          <h2 className={t.kasten ? undefined : "abschnitt"}>{t.titel}</h2>
          {t.inhalt}
        </section>
      ))}
    </>
  );
}

function WannHilfe({ liste }: { liste: string[] }) {
  return (
    <>
      <ul>{liste.map((h, i) => <li key={i}>{h}</li>)}</ul>
      <p style={{ marginTop: "1rem", marginBottom: 0 }}>
        Erste Anlaufstelle ist deine Hausärztin oder dein Hausarzt. <a href="#/hilfe">Weitere Wege und Krisennummern</a>
      </p>
    </>
  );
}

function Irrtuemer({ liste }: { liste: { irrtum: string; richtig: string }[] }) {
  return (
    <ul className="irrtuemer">
      {liste.map((x) => (
        <li key={x.irrtum}>
          <p className="irrtuemer__irrtum"><span className="sr-only">Irrtum: </span>„{x.irrtum.replace(/^[„"]|[“"]$/g, "")}“</p>
          <p className="irrtuemer__richtig">{x.richtig}</p>
        </li>
      ))}
    </ul>
  );
}

function Schritte({ liste }: { liste: string[] }) {
  return <ol className="schritte">{liste.map((x, i) => <li key={i}>{x}</li>)}</ol>;
}

function Quellen({ liste, schluss }: { liste: { text: string; url: string }[]; schluss: string }) {
  const eindeutig = liste.filter((q, i) => liste.findIndex((x) => x.url === q.url) === i);
  return (
    <div className="quellen">
      <p><strong>Quellen</strong> (abgerufen im Oktober 2026)</p>
      <ul>{eindeutig.map((q) => <li key={q.url}><a href={q.url} rel="noopener noreferrer" target="_blank">{q.text}</a></li>)}</ul>
      <p>{schluss}</p>
    </div>
  );
}

function Uebersicht() {
  const [suche, setSuche] = useState(merkSuche);
  const [bereich, setBereich] = useState(merkBereich);
  useEffect(() => { merkSuche = suche; merkBereich = bereich; }, [suche, bereich]);

  const sucht = suche.trim().length > 1;
  const treffer = useMemo(() => {
    const basis = sucht ? suchen(suche) : EINTRAEGE;
    return bereich === "alle" ? basis : basis.filter((e) => e.bereich === bereich);
  }, [suche, sucht, bereich]);
  const anzahl = (b: string) => (sucht ? suchen(suche) : EINTRAEGE).filter((e) => b === "alle" || e.bereich === b).length;

  const zeigeGruppiert = !sucht && bereich === "alle";
  const zeigeHinweis = bereich !== "alltag" && treffer.some((e) => e.bereich !== "alltag");

  return (
    <div className="spalte spalte--breit">
      <h1>Wissen</h1>
      <p className="einleitung">
        Kurz erklärt, mit Quellen aus Österreich und Deutschland.
      </p>

      <div className="suche" role="search">
        <label htmlFor="wissen-suche" className="sr-only">Wissen durchsuchen</label>
        <span className="suche__symbol">{S.suche}</span>
        <input id="wissen-suche" type="search" value={suche} onChange={(e) => setSuche(e.target.value)}
          placeholder="Thema suchen, z. B. Panik" autoComplete="off" enterKeyHint="search"
          aria-describedby="wissen-anzahl" />
        {suche && <button type="button" className="suche__leeren" onClick={() => setSuche("")} aria-label="Suche leeren">×</button>}
      </div>

      <div className="filter" role="group" aria-label="Nach Bereich filtern">
        {BEREICHE.map((b) => {
          const n = anzahl(b.id);
          return (
            <button key={b.id} type="button" className="filter__chip" aria-pressed={bereich === b.id}
              onClick={() => setBereich(b.id)} disabled={n === 0 && bereich !== b.id}>
              {S[b.symbol]}<span>{b.label}</span><span className="filter__zahl" aria-label={`${n} Seiten`}>{n}</span>
            </button>
          );
        })}
      </div>

      <p id="wissen-anzahl" className="leise klein" aria-live="polite" style={{ margin: "0 0 var(--s3)" }}>
        {sucht ? `${treffer.length} ${treffer.length === 1 ? "Seite" : "Seiten"} zu „${suche.trim()}“` : `${treffer.length} Seiten`}
      </p>

      {treffer.length === 0 && (
        <div className="kasten kasten--licht">
          <p style={{ marginTop: 0 }}>Dazu habe ich keine Seite gefunden. Versuch ein anderes Wort:</p>
          <div className="vorschlaege">
            {VORSCHLAEGE.map((v) => <button key={v} type="button" className="filter__chip" onClick={() => { setSuche(v); setBereich("alle"); }}>{v}</button>)}
          </div>
          <p style={{ marginBottom: 0 }}>Wenn es dir gerade schlecht geht: <a href="#/hilfe">Hilfe finden</a></p>
        </div>
      )}

      {zeigeGruppiert ? (
        <>
          <h2 className="abschnitt abschnitt--symbol">{S.alltag}Alltag und Wohlbefinden</h2>
          <Karten liste={treffer.filter((e) => e.bereich === "alltag")} mitGruppe={false} />
          <h2 className="abschnitt abschnitt--symbol">{SYMBOLE.wissen}Psychische Gesundheit verstehen</h2>
          <Hinweis />
          {[...new Set(VERSTEHEN.map((v) => v.gruppe))].map((g) => (
            <section key={g}>
              <h3 className="gruppe-titel">{g}</h3>
              <Karten liste={treffer.filter((e) => e.gruppe === g)} mitGruppe={false} />
            </section>
          ))}
        </>
      ) : (
        <>
          <Karten liste={treffer} mitGruppe={bereich === "alle"} />
          {zeigeHinweis && <div style={{ marginTop: "var(--s4)" }}><Hinweis /></div>}
        </>
      )}

      {treffer.some((e) => e.bereich !== "alltag") && (
        <div className="quellen">
          <p>{ICD_INFO.text}</p>
          <ul>{ICD_INFO.quellen.map((q) => <li key={q.url}><a href={q.url} rel="noopener noreferrer" target="_blank">{q.text}</a></li>)}</ul>
        </div>
      )}
    </div>
  );
}

function Hinweis() {
  return (
    <p className="hinweis-feld" style={{ marginTop: 0 }}>
      Allgemeine Information, kein Selbsttest. Eine Diagnose können nur Ärztinnen und Ärzte, Psychotherapeutinnen und Psychotherapeuten
      oder Klinische Psychologinnen und Psychologen stellen.
    </p>
  );
}

function Karten({ liste, mitGruppe = true }: { liste: Eintrag[]; mitGruppe?: boolean }) {
  if (liste.length === 0) return null;
  return (
    <ul className="wissen-karten">
      {liste.map((e) => (
        <li key={e.id}>
          <a href={`#/wissen/${e.id}`}>
            <span className="wissen-karten__symbol">{S[e.symbol]}</span>
            <span className="wissen-karten__text">
              {mitGruppe && <span className="wissen-karten__gruppe">{e.bereich === "alltag" ? "Alltag" : e.gruppe}</span>}
              <strong>{e.titel}</strong>
              <span className="wissen-karten__teaser">{e.teaser}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Zurueck() {
  return (
    <p className="klein zurueck">
      <a href="#/wissen"><span aria-hidden="true">←</span> Alle Themen</a>
    </p>
  );
}

function Kopf({ symbol, gruppe, titel }: { symbol: string; gruppe: string; titel: string }) {
  return (
    <div className="artikel-kopf">
      <span className="wissen-karten__symbol">{S[symbol]}</span>
      <div>
        <p className="leise klein" style={{ margin: 0 }}>{gruppe}</p>
        <h1 style={{ marginTop: ".2rem" }}>{titel}</h1>
      </div>
    </div>
  );
}

function Verwandt({ id, bereich }: { id: string; bereich: string }) {
  const andere = EINTRAEGE.filter((e) => e.bereich === bereich && e.id !== id).slice(0, 4);
  if (andere.length === 0) return null;
  return (
    <section>
      <h2 className="abschnitt">Mehr aus diesem Bereich</h2>
      <Karten liste={andere} mitGruppe={false} />
    </section>
  );
}

function VerstehenArtikel({ v }: { v: (typeof VERSTEHEN)[number] }) {
  const bereich = BEREICHE.find((b) => b.gruppen?.includes(v.gruppe))?.id ?? "alle";
  const istIcd = (t: string) => /ICD-11/.test(t);
  const teile: Teil[] = [
    ...v.absaetze.filter((a) => !istIcd(a.titel)).map((a) => abschnitt(a.titel, a.text)),
    { id: "was-hilft", titel: "Was hilft", inhalt: <ul>{v.hilft.map((h, i) => <li key={i}>{h}</li>)}</ul> },
    ...(v.vertiefung ?? []).map((a) => abschnitt(a.titel, a.text)),
    ...(v.irrtuemer?.length ? [{ id: "irrtuemer", titel: "Häufige Irrtümer", inhalt: <Irrtuemer liste={v.irrtuemer} /> }] : []),
    ...(v.angehoerige?.length ? [{ id: "angehoerige", titel: "Für Angehörige und Freunde", inhalt: <ul>{v.angehoerige.map((h, i) => <li key={i}>{h}</li>)}</ul> }] : []),
    { id: "wann-hilfe", titel: "Wann ein Gespräch mit Fachleuten sinnvoll ist", kasten: true, inhalt: <WannHilfe liste={v.wannHilfe} /> },
    ...v.absaetze.filter((a) => istIcd(a.titel)).map((a) => ({ ...abschnitt(a.titel, a.text), klein: true })),
  ];
  return (
    <article className="spalte">
      <Zurueck />
      <Kopf symbol={GRUPPE_SYMBOL[v.gruppe] ?? "alle"} gruppe={v.gruppe} titel={v.titel} />
      {v.icd && <p className="klein leise">ICD-11: {v.icd.code} {v.icd.titel}</p>}
      <p className="einleitung">{v.einleitung}</p>
      <p className="sprungmarken">
        <a href="#/hilfe">Hilfe finden</a>
      </p>
      <Teile teile={teile} />
      <Verwandt id={v.id} bereich={bereich} />
      <Quellen liste={v.quellen} schluss="Allgemeine Information in eigenen Worten. Sie ersetzt keine Untersuchung und keine Diagnose durch Fachleute." />
    </article>
  );
}
