import { useState } from "react";
import { useZustand } from "../lib/zustand";
import { ENERGIE, STIMMUNG, datumLang, tageZurueck } from "../lib/ich";
import { UEBUNGEN } from "../content/uebungen";
import { Kalender } from "../components/Diagramme";

// Druckblatt „Meine letzten Wochen“: eigene Einträge Tag für Tag, zum Mitnehmen zu einem Termin.
// Zeigt nur, was die Person eingetragen hat. Keine Auswertung.
export default function Ueberblick() {
  const z = useZustand();
  const [wochen, setWochen] = useState(4);
  const tage = tageZurueck(wochen * 7).slice().reverse();
  const nachTag = new Map(z.eintraege.map((e) => [e.datum, e]));
  const gefuehle = new Map(z.gefuehle.map((g) => [g.datum, g.woerter]));
  const mitDaten = tage.filter((t) => nachTag.has(t) || gefuehle.has(t));
  const gut = UEBUNGEN.filter((u) => z.merkliste.includes(u.id));
  const name = z.einstellungen.name.trim();

  return (
    <div className="spalte spalte--breit ueberblick">
      <p className="klein zurueck"><a href="#/ich"><span aria-hidden="true">←</span> Mein Bereich</a></p>
      <h1>Meine letzten Wochen</h1>
      <p className="einleitung">
        {name ? `${name}, ` : ""}{datumLang(tage[tage.length - 1])} bis {datumLang(tage[0])}<br />Eigene Einträge, Tag für Tag.
        Zum Mitnehmen zu einem Gespräch mit Ärztin, Arzt oder Therapeutin.
      </p>
      <div className="krisenplan__leiste">
        <div className="segment" role="group" aria-label="Zeitraum">
          {[2, 4, 8].map((n) => <button key={n} type="button" aria-pressed={wochen === n} onClick={() => setWochen(n)}>{n} Wochen</button>)}
        </div>
        <button type="button" className="knopf" onClick={() => window.print()} disabled={mitDaten.length === 0}>Drucken oder als PDF</button>
      </div>

      {mitDaten.length === 0 ? (
        <p className="leer">In diesem Zeitraum gibt es noch keine Einträge. <a href="#/ich">Zu Mein Bereich</a></p>
      ) : (
        <>
          <h2 className="abschnitt">Stimmung im Kalender</h2>
          <Kalender eintraege={z.eintraege} />
          <h2 className="abschnitt">Tag für Tag</h2>
          <ol className="tage-liste">
            {mitDaten.map((t) => {
              const e = nachTag.get(t);
              const g = gefuehle.get(t);
              return (
                <li key={t}>
                  <span className="tage-liste__datum">{datumLang(t)}</span>
                  <dl>
                    {e && <><dt>Stimmung</dt><dd><span className={`punkt stufe-${e.stimmung}`} aria-hidden="true" />{STIMMUNG[e.stimmung]}</dd></>}
                    {e?.energie !== undefined && <><dt>Energie</dt><dd>{ENERGIE[e.energie]}</dd></>}
                    {e?.wort && <><dt>Wort</dt><dd>{e.wort}</dd></>}
                    {g && g.length > 0 && <><dt>Gefühle</dt><dd>{g.join(", ")}</dd></>}
                    {e?.einfluesse && e.einfluesse.length > 0 && <><dt>Was war</dt><dd>{e.einfluesse.join(", ")}</dd></>}
                  </dl>
                </li>
              );
            })}
          </ol>
        </>
      )}

      {gut.length > 0 && (
        <>
          <h2 className="abschnitt">Was mir guttut</h2>
          <p>{gut.map((u) => u.titel).join(", ")}</p>
        </>
      )}
      <p className="hinweis-feld" style={{ marginTop: "1.5rem" }}>
        Erstellt mit Neuroscope. Eigene Einträge ohne Auswertung. Ein Zusammenhang, der hier sichtbar wird, ist noch keine Ursache.
      </p>
      <p className="nicht-drucken klein" style={{ marginTop: "1rem" }}>
        Für das Gespräch selbst hilft dir auch die <a href="#/gespraech">Gesprächsvorbereitung</a>.
      </p>
    </div>
  );
}
