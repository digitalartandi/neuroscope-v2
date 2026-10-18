import { GEPRUEFT_AM, KRISE, KRISEN_UEBERSICHT_AT, REGIONEN, WEGE, type Nummer } from "../content/hilfe";
import { useEffect } from "react";
import { useZustand } from "../lib/zustand";
import { ANLAUFSTELLEN } from "../content/trauma";

export default function Hilfe({ abschnitt }: { abschnitt?: string }) {
  const { land, setLand, region, setRegion } = useZustand();
  useEffect(() => {
    if (abschnitt) document.getElementById(abschnitt)?.scrollIntoView({ block: "start" });
  }, [abschnitt]);
  const sofort = new Set(KRISE[land].map((n) => n.nummer));
  const gewalt = ANLAUFSTELLEN.filter((a) => a.land === land && !(a.nummer && sofort.has(a.nummer)) && !a.name.toLowerCase().includes("telefonseelsorge"));
  const regionen = REGIONEN[land];
  const gewaehlt = regionen.find((r) => r.name === region);
  const name = land === "AT" ? "Österreich" : "Deutschland";
  return (
    <div className="spalte">
      <h1>Hilfe finden</h1>
      <p className="einleitung">
        Bei akuter Gefahr ruf den Notruf: 144 in Österreich, 112 in Deutschland. Wenn du nicht mehr weiterweißt,
        ist die Telefonseelsorge rund um die Uhr da, kostenlos und vertraulich.
      </p>
      <div className="land" role="group" aria-label="Land wählen" style={{ marginBottom: "1.5rem" }}>
        <button type="button" aria-pressed={land === "AT"} onClick={() => setLand("AT")}>Österreich</button>
        <button type="button" aria-pressed={land === "DE"} onClick={() => setLand("DE")}>Deutschland</button>
      </div>

      <h2>Sofort erreichbar in {name}</h2>
      <Liste nummern={KRISE[land]} />
      {regionen.length > 0 && (
        <>
          <h2 className="abschnitt">In deinem Bundesland</h2>
          <label className="feld" htmlFor="region">Bundesland</label>
          <select id="region" value={gewaehlt ? region : ""} onChange={(e) => setRegion(e.target.value)}>
            <option value="">Bitte wählen</option>
            {regionen.map((r) => <option key={r.name} value={r.name}>{r.name}</option>)}
          </select>
          {gewaehlt && (
            <div style={{ marginTop: "1rem" }}>
              {gewaehlt.eintraege.length > 0 && <Liste nummern={gewaehlt.eintraege} />}
              {gewaehlt.hinweis && <p className="klein" style={{ marginTop: ".75rem" }}>{gewaehlt.hinweis}</p>}
            </div>
          )}
        </>
      )}
      {land === "AT" && (
        <p className="klein" style={{ marginTop: "1rem" }}>
          Übersicht aller Krisentelefone: <a href={KRISEN_UEBERSICHT_AT} target="_blank" rel="noopener noreferrer">gesundheit.gv.at</a>
        </p>
      )}

      <p className="kasten">
        <strong>Wichtig:</strong> Neuroscope liest nicht mit und kann niemanden verständigen.
        Wenn du Hilfe brauchst, melde dich bitte selbst bei einer der Nummern oder bei einem Menschen, dem du vertraust.
      </p>

      <section id="gewalt" className="abschnitt">
        <h2>Bei Gewalt, Missbrauch und Mobbing</h2>
        <p>
          Für Menschen, die Gewalt, Abwertung, Kontrolle, Missbrauch oder Mobbing erleben oder erlebt haben, und für Angehörige.
          Auch wer unsicher ist, ob das Erlebte „schlimm genug“ ist, kann sich melden.
        </p>
        <ul className="liste-ruhig">
          {gewalt.map((a) => (
            <li key={a.name}>
              <h3 style={{ marginBottom: ".3rem" }}>{a.name}</h3>
              <p style={{ margin: "0 0 .5rem" }}>{a.text}</p>
              <p className="knopfreihe" style={{ margin: 0 }}>
                {a.nummer && <a className="tel" href={`tel:${a.nummer.replace(/\s/g, "")}`} aria-label={`${a.name} anrufen: ${a.nummer}`}>{a.nummer}</a>}
                <a href={a.web} target="_blank" rel="noopener noreferrer">Website</a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {WEGE[land].length > 0 && (
        <>
          <h2 className="abschnitt">Wege zu regulärer Hilfe</h2>
          <ul className="liste-ruhig">
            {WEGE[land].map((w) => (
              <li key={w.titel}>
                <h3 style={{ marginBottom: ".4rem" }}>{w.titel}</h3>
                <p style={{ marginBottom: w.link ? ".4rem" : 0 }}>{w.text}</p>
                {w.link && <a href={w.link.url} target="_blank" rel="noopener noreferrer">{w.link.text}</a>}
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="quellen">Alle Nummern und Links geprüft am {GEPRUEFT_AM} auf den Seiten der jeweiligen Anbieter.</p>
    </div>
  );
}

function Liste({ nummern }: { nummern: Nummer[] }) {
  return (
    <ul className="nummern">
      {nummern.map((n) => (
        <li key={n.nummer + n.was}>
          <span className="was">{n.was}</span>
          <span className="wann">{n.wann}</span>
          <a className="tel" href={`tel:${n.tel}`} aria-label={`${n.was} anrufen: ${n.nummer}`}>{n.nummer}</a>
        </li>
      ))}
    </ul>
  );
}
