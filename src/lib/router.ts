import { useEffect, useState } from "react";

// Hash-Routing: funktioniert auf jedem statischen Webspace ohne Server-Regeln.
export function useRoute(): string {
  const lesen = () => (window.location.hash.replace(/^#/, "").split("#")[0] || "/").split("?")[0];
  const [route, setRoute] = useState(lesen);
  useEffect(() => {
    const neu = () => {
      setRoute(lesen());
    };
    window.addEventListener("hashchange", neu);
    return () => window.removeEventListener("hashchange", neu);
  }, []);
  return route;
}

export const geh = (pfad: string) => { window.location.hash = pfad; };
