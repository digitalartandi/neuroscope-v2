import type { ReactNode } from "react";

export function Kennzahlen({ werte }: { werte: [string, string][] }) {
  return (
    <dl className="ergebnis">
      {werte.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
    </dl>
  );
}

export function SpielHinweis() {
  return (
    <p className="leise klein">
      Für diese Online-Spiele gibt es keine Vergleichswerte. Deine Ergebnisse hängen auch von Gerät, Eingabe und
      Ablenkung ab und sagen nichts über deine Gesundheit oder Leistungsfähigkeit aus.
    </p>
  );
}

export function BestwertZeile({ best, text, merken, setMerken, neu }: {
  best: number | null; text: (b: number) => string; merken: boolean; setMerken: (m: boolean) => void; neu?: boolean;
}) {
  return (
    <div className="kasten">
      <p role="status">{neu ? <strong>Neue Bestmarke.</strong> : null}</p>
      <p>{best == null ? "Noch keine Bestmarke." : <>Deine Bestmarke: <strong>{text(best)}</strong></>}</p>
      <label style={{ display: "inline-flex", gap: ".6rem", alignItems: "center", cursor: "pointer" }}>
        <input type="checkbox" checked={merken} onChange={(e) => setMerken(e.target.checked)} />
        Bestmarken auf diesem Gerät merken
      </label>
      <p className="hinweis-feld">Ohne Haken gilt die Bestmarke nur, solange dieser Tab offen ist.</p>
    </div>
  );
}

export function SpielKopf({ titel, children }: { titel: string; children?: ReactNode }) {
  return (
    <>
      <p className="klein"><a href="#/spiele">Alle Spiele</a></p>
      <h1>{titel}</h1>
      {children}
    </>
  );
}
