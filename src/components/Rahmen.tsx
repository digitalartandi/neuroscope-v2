import type { ReactNode } from "react";
import { useZustand, type Land } from "../lib/zustand";

export function Logo() {
  return <span className="marke__punkt" aria-hidden="true" />;
}

function Krisenband() {
  return (
    <aside className="krisenband" aria-label="Hilfe in einer Krise">
      <div className="krisenband__innen">
        <span><strong>In einer Krise?</strong></span>
        <span>Österreich <a href="tel:142">142</a></span>
        <span>Deutschland <a href="tel:08001110111">0800 111 0 111</a></span>
        <span>Notruf <a href="tel:144">144</a> / <a href="tel:112">112</a></span>
        <a className="krisenband__link" href="#/hilfe">Hilfe finden</a>
      </div>
    </aside>
  );
}

const NAV: [string, string][] = [
  ["/reflexion", "Selbstreflexion"],
  ["/spiegel", "Spiegel"],
  ["/wissen", "Wissen"],
  ["/uebungen", "Übungen"],
  ["/spiele", "Spiele"],
  ["/hilfe", "Hilfe finden"],
];

export function Rahmen({ route, children }: { route: string; children: ReactNode }) {
  const { land, setLand } = useZustand();
  const aktiv = (p: string) => route === p || route.startsWith(p + "/");
  return (
    <>
      <div className="hintergrund" aria-hidden="true"><span /><span /><span /></div>
      <a className="springen" href="#inhalt" onClick={(e) => { e.preventDefault(); document.getElementById("inhalt")?.focus(); }}>Zum Inhalt springen</a>
      <Krisenband />
      <header className="kopf">
        <div className="kopf__innen">
          <a className="marke" href="#/"><Logo />Neuroscope</a>
          <nav className="nav" aria-label="Hauptmenü">
            {NAV.map(([p, t]) => (
              <a key={p} href={"#" + p} aria-current={aktiv(p) ? "page" : undefined}>{t}</a>
            ))}
          </nav>
          <div className="land" role="group" aria-label="Land für Hilfe-Angebote">
            {(["AT", "DE"] as Land[]).map((l) => (
              <button key={l} type="button" aria-pressed={land === l} onClick={() => setLand(l)}
                title={l === "AT" ? "Österreich" : "Deutschland"} aria-label={l === "AT" ? "Österreich" : "Deutschland"}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main id="inhalt" tabIndex={-1}>{children}</main>
      <footer className="fuss">
        <div className="fuss__innen">
          <p className="leise" style={{ margin: 0, maxWidth: "48ch" }}>
            Neuroscope ist ein Angebot zur Selbstreflexion. Kein Test, keine Diagnose, kein Ersatz für ärztliche,
            psychologische oder psychotherapeutische Beratung.
          </p>
          <nav aria-label="Rechtliches">
            <a href="#/ueber">Über Neuroscope</a>
            <a href="#/datenschutz">Datenschutz</a>
            <a href="#/impressum">Impressum</a>
            <a href="#/ueber#loeschen">Eingaben löschen</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
