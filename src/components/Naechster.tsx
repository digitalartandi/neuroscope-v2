import type { ReactNode } from "react";

// Genau ein Vorschlag am Seitenende. Kein Menü, keine Liste: ein ruhiger nächster Schritt.
export function Naechster({ href, titel, text, symbol, onClick }: { href: string; titel: string; text: string; symbol?: ReactNode; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <aside className="naechster" aria-label="Nächster guter Schritt">
      <p className="naechster__label">Nächster guter Schritt</p>
      <a href={href} className="naechster__link" onClick={onClick}>
        {symbol && <span className="naechster__symbol" aria-hidden="true">{symbol}</span>}
        <span className="naechster__text"><strong>{titel}</strong><span>{text}</span></span>
        <span className="naechster__pfeil" aria-hidden="true">›</span>
      </a>
    </aside>
  );
}
