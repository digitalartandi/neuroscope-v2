import { WISSEN } from "../content/wissen";

export default function Wissen({ id }: { id?: string }) {
  if (!id) {
    return (
      <div className="spalte">
        <h1>Wissen</h1>
        <p className="einleitung">
          Kurz erklärt, gestützt auf die Gesundheitsportale von Österreich und Deutschland.
          Jede Seite nennt ihre Quellen, damit du dort weiterlesen kannst.
        </p>
        <ul className="liste-ruhig" style={{ marginTop: "2rem" }}>
          {WISSEN.map((w) => (
            <li key={w.id}>
              <a className="titel" href={`#/wissen/${w.id}`}>{w.titel}</a>
              <div className="leise klein">{w.einleitung.split(". ")[0]}.</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
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
