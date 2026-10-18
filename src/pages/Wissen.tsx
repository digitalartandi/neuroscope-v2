import { WISSEN } from "../content/wissen";
import { ICD_INFO, VERSTEHEN } from "../content/verstehen";

export default function Wissen({ id }: { id?: string }) {
  if (!id) {
    return (
      <div className="spalte">
        <h1>Wissen</h1>
        <p className="einleitung">
          Kurz erklärt, gestützt auf die Gesundheitsportale von Österreich und Deutschland.
          Jede Seite nennt ihre Quellen, damit du dort weiterlesen kannst.
        </p>
        <h2 className="abschnitt">Alltag und Wohlbefinden</h2>
        <ul className="liste-ruhig">
          {WISSEN.map((w) => (
            <li key={w.id}>
              <a className="titel" href={`#/wissen/${w.id}`}>{w.titel}</a>
              <div className="leise klein">{w.einleitung.split(". ")[0]}.</div>
            </li>
          ))}
        </ul>
        {VERSTEHEN.length > 0 && (
          <>
            <h2 className="abschnitt">Psychische Gesundheit verstehen</h2>
            <p className="leise">
              Wie Fachleute psychische Erkrankungen beschreiben, was hilft und wo es Hilfe gibt. Allgemeine Information,
              kein Selbsttest: Eine Diagnose können nur Ärztinnen, Ärzte, Psychotherapeutinnen, Psychotherapeuten oder
              Klinische Psychologinnen und Psychologen stellen.
            </p>
            {[...new Set(VERSTEHEN.map((v) => v.gruppe))].map((g) => (
              <div key={g} style={{ marginTop: "1.25rem" }}>
                <h3>{g}</h3>
                <ul className="liste-ruhig">
                  {VERSTEHEN.filter((v) => v.gruppe === g).map((v) => (
                    <li key={v.id}>
                      <a className="titel" href={`#/wissen/${v.id}`}>{v.titel}</a>
                      <div className="leise klein">{v.einleitung.split(". ")[0]}.</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {ICD_INFO.text && <p className="quellen">{ICD_INFO.text}</p>}
          </>
        )}
      </div>
    );
  }
  const v = VERSTEHEN.find((x) => x.id === id);
  if (v) return <VerstehenArtikel v={v} />;
  const w = WISSEN.find((x) => x.id === id);
  if (!w) return <div className="spalte"><h1>Seite nicht gefunden</h1><a href="#/wissen">Alle Themen</a></div>;
  return (
    <article className="spalte">
      <p className="klein"><a href="#/wissen">Alle Themen</a></p>
      <h1>{w.titel}</h1>
      <p className="einleitung">{w.einleitung}</p>
      <h2 className="abschnitt">Was im Alltag helfen kann</h2>
      <ul>{w.hilft.map((h, i) => <li key={i} style={{ marginBottom: ".5rem" }}>{h}</li>)}</ul>
      <div className="kasten kasten--licht">
        <h2 style={{ fontSize: "1.3rem" }}>Wann ein Gespräch mit Fachleuten sinnvoll ist</h2>
        <ul>{w.wannHilfe.map((h, i) => <li key={i}>{h}</li>)}</ul>
        <p style={{ marginTop: "1rem" }}>
          Erste Anlaufstelle ist deine Hausärztin oder dein Hausarzt. <a href="#/hilfe">Weitere Wege und Krisennummern</a>
        </p>
      </div>
      <div className="quellen">
        <p><strong>Quellen</strong> (abgerufen im Oktober 2026)</p>
        <ul>{w.quellen.map((q) => <li key={q.url}><a href={q.url} rel="noopener noreferrer" target="_blank">{q.text}</a></li>)}</ul>
        <p>Die Texte fassen die Quellen in eigenen Worten zusammen. Sie sind allgemeine Information und keine Beratung im Einzelfall.</p>
      </div>
    </article>
  );
}

function VerstehenArtikel({ v }: { v: (typeof VERSTEHEN)[number] }) {
  return (
    <article className="spalte">
      <p className="klein"><a href="#/wissen">Alle Themen</a></p>
      <p className="leise klein" style={{ marginBottom: ".4rem" }}>{v.gruppe}</p>
      <h1>{v.titel}</h1>
      {v.icd && (
        <p className="klein leise">
          ICD-11: {v.icd.url ? <a href={v.icd.url} target="_blank" rel="noopener noreferrer">{v.icd.code} {v.icd.titel}</a> : <>{v.icd.code} {v.icd.titel}</>}
        </p>
      )}
      <p className="einleitung">{v.einleitung}</p>
      {v.absaetze.map((a) => (
        <section key={a.titel}>
          <h2 className="abschnitt">{a.titel}</h2>
          {a.text.map((t, i) => <p key={i}>{t}</p>)}
        </section>
      ))}
      <h2 className="abschnitt">Was hilft</h2>
      <ul>{v.hilft.map((h, i) => <li key={i} style={{ marginBottom: ".5rem" }}>{h}</li>)}</ul>
      <div className="kasten kasten--licht">
        <h2>Wann ein Gespräch mit Fachleuten sinnvoll ist</h2>
        <ul>{v.wannHilfe.map((h, i) => <li key={i}>{h}</li>)}</ul>
        <p style={{ marginTop: "1rem" }}>Erste Anlaufstelle ist deine Hausärztin oder dein Hausarzt. <a href="#/hilfe">Weitere Wege und Krisennummern</a></p>
      </div>
      <div className="quellen">
        <p><strong>Quellen</strong> (abgerufen im Oktober 2026)</p>
        <ul>{v.quellen.map((q) => <li key={q.url}><a href={q.url} rel="noopener noreferrer" target="_blank">{q.text}</a></li>)}</ul>
        <p>Allgemeine Information in eigenen Worten. Sie ersetzt keine Untersuchung und keine Diagnose durch Fachleute.</p>
      </div>
    </article>
  );
}
