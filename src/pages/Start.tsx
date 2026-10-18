import { useZustand } from "../lib/zustand";
import { SYMBOLE } from "../components/Icons";

const WEGE: [string, string, string][] = [
  ["/reflexion", "Selbstreflexion", "Acht Themen, rund 50 kurze Fragen. Du kannst jede überspringen."],
  ["/spiegel", "Persönlicher Spiegel", "Deine Antworten in Worten. Du entscheidest, was dich beschäftigt."],
  ["/gespraech", "Gesprächsvorbereitung", "Deine Notizen als PDF, falls du mit jemandem darüber sprechen willst."],
  ["/wissen", "Wissen", "Kurz erklärt, mit Quellen aus Österreich und Deutschland."],
  ["/uebungen", "Übungen", "Atmung, Abendroutine, Stärken, Wochenrückblick."],
  ["/spiele", "Konzentrationsspiele", "Vier kurze Denkspiele mit deiner eigenen Bestmarke."],
  ["/hilfe", "Hilfe finden", "Krisennummern und Wege zu Hausarzt, Psychotherapie und Beratung."],
];

export default function Start() {
  const { antworten } = useZustand();
  const begonnen = Object.keys(antworten).length > 0;
  return (
    <>
      <section className="karte held">
        <h1>Wie geht es dir gerade wirklich?</h1>
        <p className="einleitung">
          Neuroscope hilft dir, das in Worte zu fassen. Deine Antworten werden nicht bewertet und verlassen
          diesen Browser nicht.
        </p>
        <div className="knopfreihe">
          <a className="knopf" href="#/reflexion">{begonnen ? "Selbstreflexion fortsetzen" : "Selbstreflexion beginnen"}</a>
          <a className="knopf knopf--leise" href="#/hilfe">Ich brauche jetzt Hilfe</a>
        </div>
        <p className="vertraulich">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
          <span>Kein Konto, kein Tracking, keine Übertragung. Alles bleibt auf deinem Gerät.</span>
        </p>
      </section>

      <section className="karte breit abschnitt" aria-labelledby="was">
        <h2 id="was">Was du hier findest</h2>
        <ul className="wegweiser">
          {WEGE.map(([p, t, d]) => (
            <li key={p}><a href={"#" + p}><span className="wegweiser__symbol">{SYMBOLE[p.slice(1)]}</span><strong>{t}</strong><span>{d}</span></a></li>
          ))}
        </ul>
      </section>

      <section className="karte breit abschnitt" aria-labelledby="grenze">
        <h2 id="grenze">Was Neuroscope ist und was nicht</h2>
        <div className="grenze">
          <div>
            <h3>Neuroscope ist</h3>
            <ul>
              <li>ein Spiegel für deine eigene Einschätzung</li>
              <li>ein Einstieg in verlässliches Wissen</li>
              <li>ein Wegweiser zu professioneller Hilfe</li>
            </ul>
          </div>
          <div>
            <h3>Neuroscope ist nicht</h3>
            <ul>
              <li>ein Test und keine Diagnose</li>
              <li>ein Ersatz für ein Gespräch mit Fachleuten</li>
              <li>eine Stelle, die mitliest oder dir antwortet</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
