import { lazy, Suspense, useEffect, useRef } from "react";
import { Rahmen } from "./components/Rahmen";
import { useRoute } from "./lib/router";
import Start from "./pages/Start";
import Reflexion from "./pages/Reflexion";
import Spiegel from "./pages/Spiegel";
import Gespraech from "./pages/Gespraech";
import Wissen from "./pages/Wissen";
import Uebungen from "./pages/Uebungen";
import Hilfe from "./pages/Hilfe";
import Spiele from "./pages/Spiele";
import { Datenschutz, Impressum, Ueber } from "./pages/Recht";
import Plan from "./pages/Plan";
import Sichern from "./pages/Sichern";

const Spur = lazy(() => import("./games/Spur"));
const Farbwort = lazy(() => import("./games/Farbwort"));
const Merken = lazy(() => import("./games/Merken"));
const Turm = lazy(() => import("./games/Turm"));

function Seite({ route }: { route: string }) {
  const [, a, b] = route.split("/");
  switch (a) {
    case "": case undefined: return <Start />;
    case "reflexion": return <Reflexion themaId={b} key={b ?? "uebersicht"} />;
    case "spiegel": return <Spiegel />;
    case "gespraech": return <Gespraech />;
    case "plan": return <Plan />;
    case "sichern": return <Sichern />;
    case "wissen": return <Wissen id={b} />;
    case "uebungen": return <Uebungen id={b} key={b ?? "liste"} />;
    case "hilfe": return <Hilfe />;
    case "spiele":
      if (b === "spur") return <Spur />;
      if (b === "farbwort") return <Farbwort />;
      if (b === "merken") return <Merken />;
      if (b === "turm") return <Turm />;
      return <Spiele />;
    case "ueber": return <Ueber />;
    case "datenschutz": return <Datenschutz />;
    case "impressum": return <Impressum />;
    default:
      return <div className="spalte"><h1>Diese Seite gibt es nicht</h1><p><a href="#/">Zur Startseite</a></p></div>;
  }
}

export default function App() {
  const route = useRoute();
  const erster = useRef(true);
  // Nach jedem Seitenwechsel: nach oben und Fokus auf die neue Überschrift (auch bei nachgeladenen Seiten).
  useEffect(() => {
    if (erster.current) { erster.current = false; return; }
    const anker = window.location.hash.split("#")[2];
    let versuche = 0, timer = 0;
    const fokus = () => {
      if (anker) { const z = document.getElementById(anker); if (z) { z.scrollIntoView(); return; } }
      const h1 = document.querySelector("main h1") as HTMLElement | null;
      if (h1) { window.scrollTo(0, 0); h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
      else if (versuche++ < 40) timer = window.setTimeout(fokus, 50);
    };
    timer = window.setTimeout(fokus, 0);
    return () => window.clearTimeout(timer);
  }, [route]);
  return (
    <Rahmen route={route}>
      <Suspense fallback={<p className="spalte leise">Wird geladen …</p>}>
        <Seite route={route} key={route} />
      </Suspense>
    </Rahmen>
  );
}
