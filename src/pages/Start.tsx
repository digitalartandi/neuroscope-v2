import { useZustand } from "../lib/zustand";
import { SYMBOLE } from "../components/Icons";

const WEGE: [string, string, string][] = [
  ["/reflexion", "Selbstreflexion", "Acht Themen, rund 50 kurze Fragen. Du kannst jede überspringen."],
  ["/ich", "Mein Bereich", "Stimmung, Verlauf und Lebensbereiche als Bild. Nur deine eigenen Einträge."],
  ["/spiegel", "Persönlicher Spiegel", "Deine Antworten in Worten. Du entscheidest, was dich beschäftigt."],
  ["/gespraech", "Gesprächsvorbereitung", "Deine Notizen als PDF, falls du mit jemandem darüber sprechen willst."],
  ["/wissen", "Wissen", "Kurz erklärt, mit Quellen aus Österreich und Deutschland."],
  ["/uebungen", "Übungen", "Zur Ruhe kommen und kleine Denkspiele zum Abschalten."],
  ["/hilfe", "Hilfe finden", "Krisennummern und Wege zu Hausarzt, Psychotherapie und Beratung."],
];

export default function Start() {
  const { antworten } = useZustand();
  const begonnen = Object.keys(antworten).length > 0;
  return (
    <>
      <section className="start" aria-labelledby="start-titel">
        <h1 id="start-titel" className="start__titel">Wie geht es dir gerade wirklich?</h1>
        <p className="start__text">Ein ruhiger Ort, um das in Worte zu fassen. Ohne Bewertung, ohne Konto.</p>
        <a className="knopf knopf--gross" href="#/reflexion">
          {begonnen ? "Weitermachen" : "Selbstreflexion beginnen"}
          <svg className="knopf__pfeil" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <a className="start__hilfe" href="#/hilfe">Ich brauche jetzt Hilfe</a>
        <p className="vertraulich start__vertraulich">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
          <span>Alles bleibt auf deinem Gerät.</span>
        </p>
        <a className="start__weiter" href="#was" onClick={(e) => { e.preventDefault(); document.getElementById("was")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>
          <span>Mehr entdecken</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </a>
      </section>

      <section className="karte breit abschnitt start__mehr" aria-labelledby="was" id="was-bereich">
        <h2 id="was" tabIndex={-1}>Was du hier findest</h2>
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
