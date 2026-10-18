import type { ReactNode } from "react";
import { SYMBOLE } from "./Icons";
import { LogoZeichen } from "./Logo";

export function Logo() {
  return <LogoZeichen className="marke__logo" />;
}

const NAV: [string, string][] = [
  ["/reflexion", "Selbstreflexion"],
  ["/ich", "Mein Bereich"],
  ["/wissen", "Wissen"],
  ["/uebungen", "Übungen"],
  ["/hilfe", "Hilfe finden"],
];

export function Rahmen({ route, children }: { route: string; children: ReactNode }) {
  const aktiv = (p: string) => route === p || route.startsWith(p + "/") || (p === "/uebungen" && route.startsWith("/spiele")) || (p === "/ich" && (route === "/spiegel" || route === "/gespraech" || route === "/plan" || route === "/sichern" || route === "/einstellungen"));
  return (
    <>
      <div className="hintergrund" aria-hidden="true"><span /><span /><span /></div>
      <a className="springen" href="#inhalt" onClick={(e) => { e.preventDefault(); document.getElementById("inhalt")?.focus(); }}>Zum Inhalt springen</a>
      <header className="kopf">
        <div className="kopf__innen">
          <a className="marke" href="#/"><Logo />Neuroscope</a>
          <nav className="nav" aria-label="Hauptmenü">
            {NAV.map(([p, t]) => (
              <a key={p} href={"#" + p} aria-current={aktiv(p) ? "page" : undefined} data-hilfe={p === "/hilfe" ? "ja" : undefined}>{t}</a>
            ))}
          </nav>
        </div>
      </header>
      <main id="inhalt" tabIndex={-1}>{children}</main>
      <nav className="tabs" aria-label="Hauptmenü">
        {NAV.map(([p, t]) => (
          <a key={p} href={"#" + p} aria-current={aktiv(p) ? "page" : undefined} data-hilfe={p === "/hilfe" ? "ja" : undefined}>
            {SYMBOLE[p.slice(1)]}
            <span>{p === "/reflexion" ? "Reflexion" : p === "/hilfe" ? "Hilfe" : p === "/ich" ? "Ich" : t}</span>
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
