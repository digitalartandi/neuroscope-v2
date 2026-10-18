import { useState } from "react";
import { THEMEN } from "../content/reflexion";
import { WISSEN } from "../content/wissen";
import { useZustand } from "../lib/zustand";

const MAX = 3;

export default function Plan() {
  const { plan, setPlan, markierungen } = useZustand();
  const markiert = THEMEN.filter((t) => (markierungen[t.id] ?? []).includes("beschaeftigt"));
  const [themaId, setThemaId] = useState((markiert[0] ?? THEMEN[0]).id);
  const [eigener, setEigener] = useState("");
  const thema = THEMEN.find((t) => t.id === themaId)!;
  const ideen = WISSEN.find((w) => w.id === thema.wissen)?.hilft ?? [];
  const voll = plan.length >= MAX;
  const dazu = (text: string) => { const t = text.trim(); if (t && !voll && !plan.includes(t)) setPlan([...plan, t]); };

  return (
    <div className="spalte">
      <h1>Mein nächster Schritt</h1>
      <p className="einleitung">
        Such dir bis zu drei kleine Schritte für die nächsten Tage aus. Klein ist gut: Was du wirklich machst, hilft mehr als ein großer Vorsatz.
      </p>

      <h2 className="abschnitt">Mein Plan</h2>
      {plan.length === 0 ? <p className="leise">Noch leer. Wähle unten einen Vorschlag oder schreib einen eigenen Schritt.</p> : (
        <ol className="plan">
          {plan.map((p, i) => (
            <li key={p}>
              <span>{p}</span>
              <button type="button" className="textknopf" onClick={() => setPlan(plan.filter((_, j) => j !== i))} aria-label={`Schritt entfernen: ${p}`}>Entfernen</button>
            </li>
          ))}
        </ol>
      )}
      {voll && <p className="hinweis-feld">Drei Schritte reichen für den Anfang. Entferne einen, wenn du tauschen möchtest.</p>}

      <h2 className="abschnitt">Ideen nach Thema</h2>
      <label className="feld" htmlFor="thema">Thema</label>
      <select id="thema" value={themaId} onChange={(e) => setThemaId(e.target.value)}>
        {THEMEN.map((t) => <option key={t.id} value={t.id}>{t.titel}{markiert.includes(t) ? " (beschäftigt mich)" : ""}</option>)}
      </select>
      <ul className="ideen">
        {ideen.map((idee) => (
          <li key={idee}>
            <span>{idee}</span>
            <button type="button" className="knopf knopf--leise" disabled={voll || plan.includes(idee)} onClick={() => dazu(idee)}>
              {plan.includes(idee) ? "Im Plan" : "Übernehmen"}
            </button>
          </li>
        ))}
      </ul>
      <p className="hinweis-feld">Die Ideen stammen aus der Wissensseite zum Thema und gelten allgemein, nicht für dich im Besonderen.</p>

      <label className="feld" htmlFor="eigener">Eigener Schritt</label>
      <input id="eigener" type="text" value={eigener} onChange={(e) => setEigener(e.target.value)} placeholder="Zum Beispiel: Am Mittwoch rufe ich meine Schwester an." />
      <div className="knopfreihe">
        <button className="knopf" type="button" disabled={voll || !eigener.trim()} onClick={() => { dazu(eigener); setEigener(""); }}>Zum Plan hinzufügen</button>
        <a className="knopf knopf--leise" href="#/gespraech">Zur Gesprächsvorbereitung</a>
      </div>
    </div>
  );
}
