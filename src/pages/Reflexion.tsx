import { HAEUFIGKEIT, THEMEN, ZEITRAUM } from "../content/reflexion";
import { schluessel } from "../lib/spiegel";
import { useZustand } from "../lib/zustand";

export default function Reflexion({ themaId }: { themaId?: string }) {
  const { antworten, antworte, notizen, notiere } = useZustand();

  if (!themaId) {
    return (
      <div className="spalte">
        <h1>Selbstreflexion</h1>
        <p className="einleitung">
          Acht Themen mit je sechs Fragen. Es geht immer darum, wie es dir {ZEITRAUM} ging.
          Es gibt keine richtigen oder falschen Antworten, und nichts wird ausgewertet.
        </p>
        <ul className="liste-ruhig" style={{ marginTop: "2rem" }}>
          {THEMEN.map((t, i) => {
            const n = t.fragen.filter((f) => antworten[schluessel(t.id, f.id)] !== undefined).length;
            return (
              <li key={t.id}>
                <a className="titel" href={`#/reflexion/${t.id}`}>{i + 1}. {t.titel}</a>
                <div className="leise klein">{t.einleitung} {n > 0 && `(${n} von ${t.fragen.length} beantwortet)`}</div>
              </li>
            );
          })}
        </ul>
        <div className="knopfreihe">
          <a className="knopf" href={`#/reflexion/${THEMEN[0].id}`}>Mit dem ersten Thema beginnen</a>
          <a className="knopf knopf--leise" href="#/spiegel">Zum Spiegel</a>
        </div>
      </div>
    );
  }

  const index = THEMEN.findIndex((t) => t.id === themaId);
  const thema = THEMEN[index];
  if (!thema) return <div className="spalte"><h1>Thema nicht gefunden</h1><a href="#/reflexion">Zur Themenübersicht</a></div>;
  const naechstes = THEMEN[index + 1];
  const voriges = THEMEN[index - 1];

  return (
    <div className="spalte">
      <nav aria-label="Themen">
        <ul className="themen">
          {THEMEN.map((t, i) => {
            const fertig = t.fragen.every((f) => antworten[schluessel(t.id, f.id)] !== undefined);
            return (
              <li key={t.id}>
                <a href={`#/reflexion/${t.id}`} aria-current={i === index ? "step" : undefined} data-stand={fertig ? "fertig" : undefined}>{t.titel}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="fortschritt" aria-hidden="true"><span style={{ width: `${((index + 1) / THEMEN.length) * 100}%` }} /></div>
      <p className="leise klein">Thema {index + 1} von {THEMEN.length}</p>
      <h1>{thema.titel}</h1>
      <p className="einleitung">{thema.einleitung} Denk daran, wie es dir {ZEITRAUM} ging.</p>

      {thema.id === "stimmung" && (
        <p className="kasten kasten--licht">
          Wenn es dir gerade sehr schlecht geht, musst du hier nichts ausfüllen.{" "}
          <a href="#/hilfe">Hier findest du sofort Hilfe.</a>
        </p>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        {thema.fragen.map((f) => {
          const key = schluessel(thema.id, f.id);
          const wert = antworten[key];
          return (
            <fieldset className="frage" key={f.id}>
              <legend>{f.frage}</legend>
              <div className="skala">
                {HAEUFIGKEIT.map((h, i) => (
                  <label key={h}>
                    <input type="radio" name={key} value={i} checked={wert === i} onChange={() => antworte(key, i)} />
                    <span className="punkt" aria-hidden="true" />
                    <span className="wort">{h}</span>
                  </label>
                ))}
              </div>
              {wert !== undefined && (
                <button type="button" className="textknopf frage__leeren" onClick={() => antworte(key, undefined)}>
                  Antwort entfernen
                </button>
              )}
            </fieldset>
          );
        })}

        <label className="feld" htmlFor={`notiz-${thema.id}`}>Möchtest du etwas dazu festhalten?</label>
        <textarea id={`notiz-${thema.id}`} value={notizen[thema.id] ?? ""} onChange={(e) => notiere(thema.id, e.target.value)}
          placeholder="Zum Beispiel, seit wann etwas so ist oder was dir dabei auffällt." />
        <p className="hinweis-feld">Deine Notiz erscheint nur in deinem Spiegel und in deiner Gesprächsvorbereitung.</p>
      </form>

      <div className="knopfreihe">
        {naechstes
          ? <a className="knopf" href={`#/reflexion/${naechstes.id}`}>Weiter zu „{naechstes.titel}“</a>
          : <a className="knopf" href="#/spiegel">Zum persönlichen Spiegel</a>}
        {voriges && <a className="knopf knopf--leise" href={`#/reflexion/${voriges.id}`}>Zurück</a>}
        <a className="textknopf" href="#/reflexion">Themenübersicht</a>
      </div>
    </div>
  );
}
