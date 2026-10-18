import { GEPRUEFT_AM, KRISE, KRISEN_UEBERSICHT_AT, WEGE } from "../content/hilfe";
import { useZustand } from "../lib/zustand";

export default function Hilfe() {
  const { land, setLand } = useZustand();
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
      <ul className="nummern">
        {KRISE[land].map((n) => (
          <li key={n.nummer + n.was}>
            <span className="was">{n.was}</span>
            <span className="wann">{n.wann}</span>
            <a className="tel" href={`tel:${n.tel}`} aria-label={`${n.was} anrufen: ${n.nummer}`}>{n.nummer}</a>
          </li>
        ))}
      </ul>
      {land === "AT" && (
        <p className="klein" style={{ marginTop: "1rem" }}>
          Krisendienste in deinem Bundesland: <a href={KRISEN_UEBERSICHT_AT} target="_blank" rel="noopener noreferrer">Übersicht auf gesundheit.gv.at</a>
        </p>
      )}

      <p className="kasten">
        <strong>Wichtig:</strong> Neuroscope liest nicht mit und kann niemanden verständigen.
        Wenn du Hilfe brauchst, melde dich bitte selbst bei einer der Nummern oder bei einem Menschen, dem du vertraust.
      </p>

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
