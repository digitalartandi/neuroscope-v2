import { THEMEN } from "../content/reflexion";
import { WISSEN } from "../content/wissen";
import { UEBUNGEN } from "../content/uebungen";
import { spiegelSaetze } from "../lib/spiegel";
import { useZustand, type Markierung } from "../lib/zustand";

const MARKEN: [Markierung, string][] = [
  ["beschaeftigt", "Beschäftigt mich"],
  ["kraft", "Gibt mir Kraft"],
];

export default function Spiegel() {
  const { antworten, notizen, markierungen, markiere } = useZustand();
  const themen = THEMEN.map((t) => ({ t, saetze: spiegelSaetze(t, antworten), notiz: (notizen[t.id] ?? "").trim() }))
    .filter((x) => x.saetze.length > 0 || x.notiz);

  if (themen.length === 0) {
    return (
      <div className="spalte">
        <h1>Dein persönlicher Spiegel</h1>
        <p className="einleitung">Hier erscheinen deine Antworten in Worten, sobald du mit der Selbstreflexion begonnen hast.</p>
        <div className="knopfreihe"><a className="knopf" href="#/reflexion">Selbstreflexion beginnen</a></div>
      </div>
    );
  }

  return (
    <div className="spalte">
      <h1>Dein persönlicher Spiegel</h1>
      <p className="einleitung">
        So hast du die letzte Zeit beschrieben, in deinen eigenen Antworten.
        Neuroscope bewertet nichts. Du entscheidest selbst, was dich beschäftigt und was dir Kraft gibt.
      </p>

      {themen.map(({ t, saetze, notiz }) => {
        const marks = markierungen[t.id] ?? [];
        const wissen = WISSEN.find((w) => w.id === t.wissen);
        const uebung = UEBUNGEN.find((u) => u.id === t.uebung);
        return (
          <section className="spiegel-thema" key={t.id} aria-labelledby={`sp-${t.id}`}>
            <h2 id={`sp-${t.id}`}>{t.titel}</h2>
            {saetze.length > 0 && (
              <ul>
                {saetze.map((s) => (
                  <li key={s.frageId}>{s.vor}<strong>{s.haeufigkeit}</strong>{s.nach}</li>
                ))}
              </ul>
            )}
            {notiz && <p className="notiz">Deine Notiz: „{notiz}“</p>}
            <div className="markieren" role="group" aria-label={`Markierung für ${t.titel}`}>
              {MARKEN.map(([m, label]) => (
                <button key={m} type="button" className="marke-knopf" aria-pressed={marks.includes(m)} onClick={() => markiere(t.id, m)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="weiter-links klein">
              {wissen && <a href={`#/wissen/${wissen.id}`}>Mehr über {wissen.kurz}</a>}
              {uebung && <a href={`#/uebungen/${uebung.id}`}>Übung: {uebung.titel}</a>}
              <a href={`#/reflexion/${t.id}`}>Antworten ändern</a>
            </div>
          </section>
        );
      })}

      <section className="kasten" aria-labelledby="weiter">
        <h2 id="weiter">Wie es weitergehen kann</h2>
        <p>
          Wenn dich etwas über Wochen belastet oder deinen Alltag einschränkt, sprich mit deiner Hausärztin,
          deinem Hausarzt oder einer Fachperson. Deine Antworten und Notizen kannst du dafür als PDF mitnehmen.
        </p>
        <div className="knopfreihe">
          <a className="knopf" href="#/gespraech">Gesprächsvorbereitung erstellen</a>
          <a className="knopf knopf--leise" href="#/hilfe">Hilfe finden</a>
        </div>
      </section>
    </div>
  );
}
