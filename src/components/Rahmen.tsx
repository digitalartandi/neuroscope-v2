import type { ReactNode } from "react";
import { SYMBOLE } from "./Icons";

export function Logo() {
  return <span className="marke__punkt" aria-hidden="true" />;
}

function Krisenband() {
  return (
    <aside className="krisenband" aria-label="Hilfe in einer Krise">
      <div className="krisenband__innen">
        <span><strong><span className="lang">In einer Krise?</span><span className="kurz">Krise?</span></strong></span>
        <span><span className="lang">Österreich</span><abbr className="kurz" title="Österreich">AT</abbr> <a href="tel:142">142</a></span>
        <span><span className="lang">Deutschland</span><abbr className="kurz" title="Deutschland">DE</abbr> <a href="tel:08001110111">0800 111 0 111</a></span>
        <span><span className="lang">Notruf </span><a href="tel:144">144</a> / <a href="tel:112">112</a></span>
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
        </div>
      </header>
      <main id="inhalt" tabIndex={-1}>{children}</main>
      <nav className="tabs" aria-label="Hauptmenü">
        {NAV.map(([p, t]) => (
          <a key={p} href={"#" + p} aria-current={aktiv(p) ? "page" : undefined} data-hilfe={p === "/hilfe" ? "ja" : undefined}>
            {SYMBOLE[p.slice(1)]}
            <span>{p === "/reflexion" ? "Reflexion" : p === "/hilfe" ? "Hilfe" : t}</span>
          </a>
        ))}
      </nav>
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
