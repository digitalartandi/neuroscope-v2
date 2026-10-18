import { useState } from "react";
import { THEMEN, ZEITRAUM } from "../content/reflexion";
import { ichForm, spiegelSaetze } from "../lib/spiegel";
import { useZustand } from "../lib/zustand";

export default function Gespraech() {
  const { antworten, notizen, markierungen, gespraech, setGespraech } = useZustand();
  const [nurMarkiert, setNurMarkiert] = useState(false);
  const datum = new Date().toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" });

  const alle = THEMEN.map((t) => ({
    t,
    saetze: spiegelSaetze(t, antworten),
    notiz: (notizen[t.id] ?? "").trim(),
    marks: markierungen[t.id] ?? [],
  })).filter((x) => x.saetze.length > 0 || x.notiz);
  const themen = nurMarkiert ? alle.filter((x) => x.marks.length > 0) : alle;
  const markiertGibt = alle.some((x) => x.marks.length > 0);

  return (
    <div className="spalte">
      <div className="nicht-drucken">
        <h1>Gesprächsvorbereitung</h1>
        <p className="einleitung">
          Ein Blatt mit deinen Antworten und Notizen. Gut für einen Termin bei deiner Hausärztin oder deinem Hausarzt, in der Psychotherapie oder Beratung,
          oder für ein Gespräch mit einem Menschen, dem du vertraust.
        </p>
        <label className="feld" htmlFor="anliegen">Was ich ansprechen möchte</label>
        <textarea id="anliegen" value={gespraech} onChange={(e) => setGespraech(e.target.value)}
          placeholder="Zum Beispiel: Seit dem Sommer schlafe ich schlecht und bin oft gereizt. Ich möchte wissen, was ich tun kann." />
        {markiertGibt && (
          <p style={{ marginTop: "1rem" }}>
            <label style={{ display: "inline-flex", gap: ".6rem", alignItems: "center", cursor: "pointer" }}>
              <input type="checkbox" checked={nurMarkiert} onChange={(e) => setNurMarkiert(e.target.checked)} />
              Nur Themen aufnehmen, die ich markiert habe
            </label>
          </p>
        )}
        <div className="knopfreihe">
          <button className="knopf" type="button" onClick={() => window.print()}>Als PDF speichern oder drucken</button>
          <a className="knopf knopf--leise" href="#/spiegel">Zurück zum Spiegel</a>
        </div>
        <p className="hinweis-feld">
          Das PDF entsteht in deinem Browser. Wähle im Druckfenster „Als PDF speichern“. Nichts wird hochgeladen.
        </p>
        <h2 className="abschnitt">Vorschau</h2>
      </div>

      <article className="kasten" aria-label="Vorschau der Gesprächsvorbereitung">
        <h2>Meine Notizen für das Gespräch</h2>
        <p className="leise klein">
          Erstellt am {datum} mit Neuroscope, einem Angebot zur Selbstreflexion. Die Angaben beschreiben, wie es mir {ZEITRAUM} ging.
          Sie sind meine eigene Beschreibung und keine Bewertung.
        </p>
        {gespraech.trim() && (
          <>
            <h3>Was ich ansprechen möchte</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>{gespraech.trim()}</p>
          </>
        )}
        {themen.length === 0 && !gespraech.trim() && (
          <p>Noch leer. Beantworte einige Fragen in der <a href="#/reflexion">Selbstreflexion</a> oder schreib oben, was du ansprechen möchtest.</p>
        )}
        {themen.map(({ t, saetze, notiz, marks }) => (
          <section className="spiegel-thema" key={t.id}>
            <h3>
              {t.titel}
              {marks.length > 0 && (
                <span className="leise klein" style={{ fontWeight: 400 }}>
                  {" "}({marks.map((m) => (m === "kraft" ? "gibt mir Kraft" : "beschäftigt mich")).join(", ")})
                </span>
              )}
            </h3>
            {saetze.length > 0 && <ul>{saetze.map((s) => <li key={s.frageId}>{ichForm(s.vor)}<strong>{s.haeufigkeit}</strong>{ichForm(s.nach)}</li>)}</ul>}
            {notiz && <p className="notiz">„{notiz}“</p>}
          </section>
        ))}
      </article>
    </div>
  );
}
