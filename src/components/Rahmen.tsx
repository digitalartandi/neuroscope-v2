import { useEffect, useState, type ReactNode } from "react";
import { TAB_SYMBOLE } from "./Icons";
import { LogoZeichen } from "./Logo";

export function Logo() {
  return <LogoZeichen className="marke__logo" />;
}

// Leiste unten am Handy: „Heute“ ist der Ausgangspunkt, die Selbstreflexion erreicht man von dort und von „Ich“.
const TABS: [string, string][] = [
  ["/", "Heute"],
  ["/wissen", "Wissen"],
  ["/uebungen", "Übungen"],
  ["/ich", "Ich"],
  ["/hilfe", "Hilfe"],
];

const NAV: [string, string][] = [
  ["/reflexion", "Selbstreflexion"],
  ["/ich", "Mein Bereich"],
  ["/wissen", "Wissen"],
  ["/uebungen", "Übungen"],
  ["/hilfe", "Hilfe finden"],
];

export function Rahmen({ route, children }: { route: string; children: ReactNode }) {
  // Kopf bekommt erst beim Scrollen eine feine Kante.
  const [gescrollt, setGescrollt] = useState(false);
  useEffect(() => {
    const f = () => setGescrollt(window.scrollY > 6);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const aktiv = (p: string) => route === p || route.startsWith(p + "/") || (p === "/uebungen" && route.startsWith("/spiele")) || (p === "/ich" && (route === "/spiegel" || route === "/gespraech" || route === "/plan" || route === "/sichern" || route === "/einstellungen" || route === "/ueberblick"));
  return (
    <>
      <div className="hintergrund" aria-hidden="true"><span /><span /><span /></div>
      <a className="springen" href="#inhalt" onClick={(e) => { e.preventDefault(); document.getElementById("inhalt")?.focus(); }}>Zum Inhalt springen</a>
      <header className="kopf" data-gescrollt={gescrollt ? "ja" : undefined}>
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
        {TABS.map(([p, t]) => {
          const an = p === "/" ? route === "/" || route === "" : aktiv(p);
          return (
            <a key={p} href={"#" + p} aria-current={an ? "page" : undefined} data-hilfe={p === "/hilfe" ? "ja" : undefined}>
              {TAB_SYMBOLE[p === "/" ? "heute" : p.slice(1)]}
              <span>{t}</span>
            </a>
          );
        })}
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
