import { useEffect, useRef, useState } from "react";
import { UEBUNGEN, type Uebung } from "../content/uebungen";
import { sitzungLesen, sitzungSchreiben } from "../lib/speicher";

function Atmung() {
  const [laeuft, setLaeuft] = useState(false);
  const [phase, setPhase] = useState<"ein" | "aus">("ein");
  const [rest, setRest] = useState(180);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!laeuft) return;
    setPhase("ein");
    const start = performance.now();
    timer.current = window.setInterval(() => {
      const sek = Math.floor((performance.now() - start) / 1000);
      setRest(Math.max(0, 180 - sek));
      setPhase(Math.floor(sek / 5) % 2 === 0 ? "ein" : "aus");
      if (sek >= 180) setLaeuft(false);
    }, 250);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [laeuft]);

  const skala = !laeuft ? 0.6 : phase === "ein" ? 1 : 0.6;
  const min = Math.floor(rest / 60), sek = rest % 60;
  return (
    <div>
      <div className="atem">
        <div>
          <div className="atem__kreis" style={{ ["--skala" as string]: skala, ["--dauer" as string]: "5s", margin: "0 auto" }} aria-hidden="true" />
          <p className="atem__text" aria-live="polite">
            {laeuft ? (phase === "ein" ? "Einatmen" : "Ausatmen") : rest === 0 ? "Gut gemacht" : "Bereit, wenn du es bist"}
          </p>
          {laeuft && <p className="leise" style={{ textAlign: "center" }}>noch {min}:{String(sek).padStart(2, "0")}</p>}
        </div>
      </div>
      <div className="knopfreihe" style={{ justifyContent: "center" }}>
        {laeuft
          ? <button className="knopf knopf--leise" type="button" onClick={() => setLaeuft(false)}>Anhalten</button>
          : <button className="knopf" type="button" onClick={() => { setRest(180); setLaeuft(true); }}>{rest === 180 ? "Starten" : "Noch einmal"}</button>}
      </div>
    </div>
  );
}

function Checkliste({ u }: { u: Uebung }) {
  const [an, setAn] = useState<number[]>(() => sitzungLesen("ue-" + u.id, []));
  useEffect(() => sitzungSchreiben("ue-" + u.id, an), [u.id, an]);
  return (
    <ul className="check">
      {u.punkte!.map((p, i) => (
        <li key={i}>
          <label>
            <input type="checkbox" checked={an.includes(i)} onChange={() => setAn((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]))} />
            <span>{p}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function Schreiben({ u }: { u: Uebung }) {
  const [texte, setTexte] = useState<string[]>(() => sitzungLesen("ue-" + u.id, u.impulse!.map(() => "")));
  useEffect(() => sitzungSchreiben("ue-" + u.id, texte), [u.id, texte]);
  return (
    <div>
      {u.impulse!.map((imp, i) => (
        <div key={i}>
          <label className="feld" htmlFor={`imp-${i}`}>{imp}</label>
          <textarea id={`imp-${i}`} value={texte[i] ?? ""} onChange={(e) => setTexte((t) => t.map((x, j) => (j === i ? e.target.value : x)))} />
        </div>
      ))}
      <p className="hinweis-feld">Deine Texte bleiben nur in diesem Tab. Zum Aufbewahren kannst du sie kopieren oder die Seite drucken.</p>
    </div>
  );
}

export default function Uebungen({ id }: { id?: string }) {
  if (!id) {
    return (
      <div className="spalte">
        <h1>Übungen</h1>
        <p className="einleitung">Kurze Anregungen für den Alltag. Sie ersetzen keine Beratung und keine Therapie.</p>
        <ul className="liste-ruhig" style={{ marginTop: "2rem" }}>
          {UEBUNGEN.map((u) => (
            <li key={u.id}>
              <a className="titel" href={`#/uebungen/${u.id}`}>{u.titel}</a>
              <div className="leise klein">{u.kurz} Etwa {u.dauer}.</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  const u = UEBUNGEN.find((x) => x.id === id);
  if (!u) return <div className="spalte"><h1>Übung nicht gefunden</h1><a href="#/uebungen">Alle Übungen</a></div>;
  return (
    <div className="spalte">
      <p className="klein"><a href="#/uebungen">Alle Übungen</a></p>
      <h1>{u.titel}</h1>
      {u.einleitung.map((t, i) => <p key={i} className={i === 0 ? "einleitung" : undefined}>{t}</p>)}
      {u.art === "atmung" && <Atmung />}
      {u.art === "checkliste" && <Checkliste u={u} />}
      {u.art === "schreiben" && <Schreiben u={u} />}
      <p className="kasten klein">
        Wenn dir eine Übung unangenehm ist, hör einfach auf. Wenn dich etwas über Wochen belastet,
        sprich mit deiner Hausärztin, deinem Hausarzt oder einer Fachperson. <a href="#/hilfe">Hilfe finden</a>
      </p>
      {u.quellen.length > 0 && (
        <div className="quellen">
          <p><strong>Quellen</strong></p>
          <ul>{u.quellen.map((q) => <li key={q.url}><a href={q.url} rel="noopener noreferrer" target="_blank">{q.text}</a></li>)}</ul>
        </div>
      )}
    </div>
  );
}
