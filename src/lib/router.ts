import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// Hash-Routing: funktioniert auf jedem statischen Webspace ohne Server-Regeln.
export function useRoute(): string {
  const lesen = () => (window.location.hash.replace(/^#/, "").split("#")[0] || "/").split("?")[0];
  const [route, setRoute] = useState(lesen);
  useEffect(() => {
    const neu = () => {
      const ziel = lesen();
      const doc = document as Document & { startViewTransition?: (f: () => void) => unknown };
      const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.dataset.ruhig;
      // Weicher Übergang zwischen Seiten, wo der Browser das kann.
      if (doc.startViewTransition && !ruhig) doc.startViewTransition(() => flushSync(() => setRoute(ziel)));
      else setRoute(ziel);
    };
    window.addEventListener("hashchange", neu);
    return () => window.removeEventListener("hashchange", neu);
  }, []);
  return route;
}

export const geh = (pfad: string) => { window.location.hash = pfad; };
