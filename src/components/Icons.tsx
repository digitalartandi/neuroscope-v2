// Schlichte Linien-Symbole (24×24, Strichstärke 1.75), eigens gezeichnet.
import type { ReactNode } from "react";

function Symbol({ children }: { children: ReactNode }) {
  return (
    <svg className="symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const SYMBOLE: Record<string, ReactNode> = {
  // Notizbuch mit Stift
  reflexion: <Symbol><path d="M5 4h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z" /><path d="M5 18a2 2 0 0 1 2-2h10" /><path d="M9 8h5M9 11h3" /><path d="m19.5 4.5 1 1-6 6-1.5.5.5-1.5z" /></Symbol>,
  // Spiegel: Oval auf Fuß
  spiegel: <Symbol><ellipse cx="12" cy="9.5" rx="5.5" ry="6.5" /><path d="M12 16v4M9 20h6" /><path d="m10.5 6-2 2M13 6.5l-4 4" /></Symbol>,
  // Blatt mit Zeilen
  gespraech: <Symbol><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M14 3v4h4" /><path d="M9 12h6M9 15.5h6M9 8.5h2" /></Symbol>,
  // Aufgeschlagenes Buch
  wissen: <Symbol><path d="M3 5.5c3-1 6-1 9 1 3-2 6-2 9-1V19c-3-1-6-1-9 1-3-2-6-2-9-1z" /><path d="M12 6.5V20" /></Symbol>,
  // Atem: drei Wellen
  uebungen: <Symbol><path d="M12 19c-3.5 0-7-2-8.5-5.5 2.5-.5 5 .3 6.6 2" /><path d="M12 19c3.5 0 7-2 8.5-5.5-2.5-.5-5 .3-6.6 2" /><path d="M12 19c-2.2-1.6-3.2-4-3.2-6.5S10.3 7.3 12 5c1.7 2.3 3.2 4.8 3.2 7.5S14.2 17.4 12 19z" /></Symbol>,
  // Puzzleteil
  spiele: <Symbol><path d="M4 8h3.5a2.5 2.5 0 1 1 5 0H16v3.5a2.5 2.5 0 1 1 0 5V20H4v-3.5a2.5 2.5 0 1 0 0-5z" /></Symbol>,
  // Mein Bereich: Kurve in einem Rahmen
  ich: <Symbol><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3.2" /><path d="M6.2 18.5a6.5 6.5 0 0 1 11.6 0" /></Symbol>,
  // Rettungsring
  hilfe: <Symbol><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><path d="m6 6 3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5" /></Symbol>,
};

// Symbole für den Wissensbereich: Bereiche und Alltagsthemen.
export const WISSEN_SYMBOLE: Record<string, ReactNode> = {
  alle: <Symbol><rect x="4" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" /></Symbol>,
  alltag: <Symbol><path d="M12 20v-8" /><path d="M12 12c0-4 3-7 7-7 0 4-3 7-7 7z" /><path d="M12 14.5c0-3-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5z" /></Symbol>,
  familie: <Symbol><circle cx="8" cy="7" r="2.5" /><circle cx="16.5" cy="9" r="2" /><path d="M3.5 19.5v-2a4.5 4.5 0 0 1 9 0v2" /><path d="M13 19.5v-1.5a3.5 3.5 0 0 1 7 0v1.5" /></Symbol>,
  stimmung: <Symbol><circle cx="8" cy="8" r="3" /><path d="M8 2.5v1M2.5 8h1M4.1 4.1l.7.7M11.9 4.1l-.7.7" /><path d="M7.5 19.5h9.5a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.4 1.3 2.9 2.9 0 0 0-.5 5.7z" /></Symbol>,
  angst: <Symbol><path d="M3 12h3l2-5 3.5 10 2.5-7 1.5 2H21" /></Symbol>,
  trauma: <Symbol><path d="M12 20s-7.5-4.5-7.5-10A4.5 4.5 0 0 1 12 7.3 4.5 4.5 0 0 1 19.5 10c0 5.5-7.5 10-7.5 10z" /><path d="m12 7.3-1.6 4 3.2 1.6-1.6 4" /></Symbol>,
  koerper: <Symbol><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z" /><path d="M17 3.5v3M15.5 5h3" /></Symbol>,
  person: <Symbol><path d="M9 20.5v-3.3A7 7 0 1 1 18.6 12l1.4 2.5h-1.8V17a1.5 1.5 0 0 1-1.5 1.5H15v2" /><circle cx="12" cy="10" r="2.2" /></Symbol>,
  konsum: <Symbol><path d="M7 4h10l-1.2 8.5a3.8 3.8 0 0 1-7.6 0z" /><path d="M12 16.5v3.5M9 20h6" /><path d="M7.6 8.5h8.8" /></Symbol>,
  arbeit: <Symbol><rect x="3.5" y="7" width="17" height="12.5" rx="2" /><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" /><path d="M3.5 12.5h17" /></Symbol>,
  // Alltagsthemen
  schlaf: <Symbol><path d="M3 18.5V6.5M3 14h18v4.5" /><path d="M21 14v-1.5A3.5 3.5 0 0 0 17.5 9H11v5" /><circle cx="7" cy="11" r="1.6" /></Symbol>,
  energie: <Symbol><path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12z" /></Symbol>,
  stress: <Symbol><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 16 3.5-5" /><path d="M4 16h2M18 16h2M12 8V6" /></Symbol>,
  beziehungen: <Symbol><circle cx="8.5" cy="8" r="2.8" /><circle cx="16" cy="8" r="2.8" /><path d="M3.5 19.5v-1a5 5 0 0 1 10 0v1M14 13.6a5 5 0 0 1 6.5 4.9v1" /></Symbol>,
  tagesablauf: <Symbol><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5h16M8.5 3v4M15.5 3v4" /><path d="m9 14.5 2 2 4-4" /></Symbol>,
  gewohnheiten: <Symbol><path d="M4.5 10a7.5 7.5 0 0 1 13-3.5L20 9" /><path d="M20 4.5V9h-4.5" /><path d="M19.5 14a7.5 7.5 0 0 1-13 3.5L4 15" /><path d="M4 19.5V15h4.5" /></Symbol>,
  staerken: <Symbol><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></Symbol>,
  zahnrad: <Symbol><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></Symbol>,
  profil: <Symbol><circle cx="12" cy="8" r="3.8" /><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" /></Symbol>,
  farbe: <Symbol><path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.2 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7h2a4.5 4.5 0 0 0 4.5-4.5C21.5 6.9 17.2 3.5 12 3.5z" /><circle cx="7.5" cy="11" r="1" /><circle cx="10" cy="7.5" r="1" /><circle cx="14.5" cy="7.5" r="1" /></Symbol>,
  glocke: <Symbol><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z" /><path d="M10 20.5a2 2 0 0 0 4 0" /></Symbol>,
  schloss: <Symbol><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3" /></Symbol>,
  suche: <Symbol><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /></Symbol>,
};

// Symbol je Alltagsthema (gleiche IDs in Selbstreflexion und Wissen).
export const THEMA_SYMBOL: Record<string, string> = {
  schlaf: "schlaf", energie: "energie", stress: "stress", stimmung: "stimmung",
  beziehungen: "beziehungen", alltag: "tagesablauf", gewohnheiten: "gewohnheiten", staerken: "staerken",
};
export const themaSymbol = (id: string) => WISSEN_SYMBOLE[THEMA_SYMBOL[id] ?? "alltag"];

// Symbole je Übung.
export const UEBUNG_SYMBOL: Record<string, ReactNode> = {
  atmung: <Symbol><path d="M12 3.5v8" /><path d="M12 9.5c-1 0-1.6.4-2 1" /><path d="M12 9.5c1 0 1.6.4 2 1" /><path d="M9.5 7.5C7 8 4.5 12 4.5 16.5c0 2.3 1.4 3.5 3 3.3 1.8-.2 2.5-1.6 2.5-3.3V9.3c0-1.2-.2-1.9-.5-1.8z" /><path d="M14.5 7.5c2.5.5 5 4.5 5 9 0 2.3-1.4 3.5-3 3.3-1.8-.2-2.5-1.6-2.5-3.3V9.3c0-1.2.2-1.9.5-1.8z" /></Symbol>,
  abendroutine: <Symbol><path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z" /><path d="M17 3.5v3M15.5 5h3" /></Symbol>,
  staerken: <Symbol><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></Symbol>,
  muskelentspannung: <Symbol><path d="M3.5 9.5 6 6l2.5 3.5L11 6l2.5 3.5" /><path d="M3.5 17c2-2.2 4-2.2 6 0s4 2.2 6 0 3-2.2 5 0" /><path d="M16.5 7.5h4" /></Symbol>,
  koerperreise: <Symbol><circle cx="12" cy="5" r="2" /><path d="M12 7.5v7M8 10.5l4-1.5 4 1.5M9.5 20.5l2.5-6 2.5 6" /><path d="M4 13h3M17 13h3" strokeDasharray="1.5 2" /></Symbol>,
  sinne: <Symbol><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></Symbol>,
  gefuehle: <Symbol><path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9l-4.5 3v-3H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5z" /><path d="M12 14.2s-3-1.8-3-3.7a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 1.9-3 3.7-3 3.7z" /></Symbol>,
  selbstmitgefuehl: <Symbol><path d="M12 19.5s-7-4.2-7-9.2A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.3c0 5-7 9.2-7 9.2z" /><path d="M9 12.5c.8 1 1.8 1.5 3 1.5s2.2-.5 3-1.5" /></Symbol>,
  schreiben: <Symbol><path d="M15.5 4.5l4 4L9 19H5v-4z" /><path d="M13 7l4 4" /><path d="M13.5 20.5h7" /></Symbol>,
  sorgenzeit: <Symbol><circle cx="12" cy="13" r="7.5" /><path d="M12 9v4l2.5 2" /><path d="M9.5 2.5h5" /></Symbol>,
  gedanken: <Symbol><path d="M7.5 15.5a4 4 0 0 1-.6-7.9 5 5 0 0 1 9.4-1A4 4 0 0 1 17 15.5z" /><circle cx="8" cy="19" r="1.2" /><circle cx="5" cy="21" r=".7" /></Symbol>,
  schoenes: <Symbol><circle cx="12" cy="12" r="3.5" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></Symbol>,
  wochenrueckblick: <Symbol><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5h16M8.5 3v4M15.5 3v4" /><path d="M8 13.5h3M8 16.5h6" /></Symbol>,
};

// Symbole je Konzentrationsspiel.
export const SPIEL_SYMBOL: Record<string, ReactNode> = {
  spur: <Symbol><circle cx="6" cy="17" r="2" /><circle cx="12" cy="7" r="2" /><circle cx="18" cy="15" r="2" /><path d="m7.2 15.3 3.6-6.6M13.6 8.3l3.2 5" /></Symbol>,
  farbwort: <Symbol><path d="M4 18 8 6l4 12M5.4 14h5.2" /><path d="M14 18v-7.5a2.5 2.5 0 0 1 5 0V18M14 14.5h5" /></Symbol>,
  merken: <Symbol><rect x="4" y="5" width="11" height="14" rx="2" /><path d="M9 3.5h9a2 2 0 0 1 2 2V17" /><path d="M7.5 15 9.5 9l2 6M8.2 13h2.6" /></Symbol>,
  turm: <Symbol><path d="M3.5 20.5h17" /><path d="M7 20.5V9M17 20.5V9" /><circle cx="7" cy="16.5" r="2.2" /><circle cx="7" cy="12" r="2.2" /><circle cx="17" cy="16.5" r="2.2" /></Symbol>,
};
