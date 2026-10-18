const SPIELE: [string, string, string, string][] = [
  ["spur", "Zahlenspur", "Zahlen und Buchstaben der Reihe nach antippen.", "etwa 3 Minuten"],
  ["farbwort", "Farbwörter", "Die Schriftfarbe zählt, nicht das Wort.", "etwa 4 Minuten"],
  ["merken", "Buchstaben merken", "Erkennen, ob ein Buchstabe gerade schon da war.", "etwa 6 Minuten"],
  ["turm", "Turm-Puzzle", "Kugeln mit möglichst wenig Zügen umordnen.", "etwa 5 Minuten"],
];

export default function Spiele() {
  return (
    <div className="spalte">
      <h1>Konzentrationsspiele</h1>
      <p className="einleitung">
        Vier kurze Denkspiele zum Abschalten und Dranbleiben. Du spielst gegen deine eigene Bestmarke.
      </p>
      <ul className="liste-ruhig" style={{ marginTop: "2rem" }}>
        {SPIELE.map(([id, t, d, dauer]) => (
          <li key={id}>
            <a className="titel" href={`#/spiele/${id}`}>{t}</a>
            <div className="leise klein">{d} Dauer {dauer}.</div>
          </li>
        ))}
      </ul>
      <p className="leise klein" style={{ marginTop: "2rem" }}>
        Die Spiele sind reine Freizeitübungen ohne Vergleichswerte. Sie sagen nichts über Gesundheit oder
        Leistungsfähigkeit aus. Am besten spielst du in Ruhe und immer auf demselben Gerät.
      </p>
    </div>
  );
}
