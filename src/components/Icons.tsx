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
  uebungen: <Symbol><path d="M3 8.5h10a2.5 2.5 0 1 0-2.5-2.5" /><path d="M3 12.5h14a2.5 2.5 0 1 1-2.5 2.5" /><path d="M3 16.5h6" /></Symbol>,
  // Puzzleteil
  spiele: <Symbol><path d="M4 8h3.5a2.5 2.5 0 1 1 5 0H16v3.5a2.5 2.5 0 1 1 0 5V20H4v-3.5a2.5 2.5 0 1 0 0-5z" /></Symbol>,
  // Rettungsring
  hilfe: <Symbol><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><path d="m6 6 3.5 3.5M18 6l-3.5 3.5M6 18l3.5-3.5M18 18l-3.5-3.5" /></Symbol>,
};
