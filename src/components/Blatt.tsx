import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

// Ein Blatt, das von unten hereinfährt (am Desktop: mittig). Schließen mit ×, Esc,
// Tipp daneben oder nach unten wischen. Fokus bleibt im Blatt, danach zurück zum Auslöser.
export function Blatt({ offen, schliessen, titel, children }: { offen: boolean; schliessen: () => void; titel: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const zurueck = useRef<HTMLElement | null>(null);
  const [zug, setZug] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    if (!offen) return;
    zurueck.current = document.activeElement as HTMLElement;
    document.documentElement.classList.add("blatt-offen");
    const t = window.setTimeout(() => ref.current?.querySelector<HTMLElement>("h2")?.focus(), 30);
    const taste = (e: KeyboardEvent) => {
      if (e.key === "Escape") schliessen();
      if (e.key === "Tab" && ref.current) {
        const f = [...ref.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), [tabindex='0']")];
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    window.addEventListener("keydown", taste);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", taste);
      document.documentElement.classList.remove("blatt-offen");
      zurueck.current?.focus?.({ preventScroll: true });
    };
  }, [offen, schliessen]);

  if (!offen) return null;
  return createPortal(
    <div className="blatt-hintergrund" onClick={schliessen}>
      <div className="blatt" ref={ref} role="dialog" aria-modal="true" aria-labelledby="blatt-titel" onClick={(e) => e.stopPropagation()}
        style={zug ? { transform: `translateY(${zug}px)`, transition: "none" } : undefined}>
        <div className="blatt__griff"
          onPointerDown={(e) => { start.current = e.clientY; (e.target as HTMLElement).setPointerCapture(e.pointerId); }}
          onPointerMove={(e) => { if (start.current !== null) setZug(Math.max(0, e.clientY - start.current)); }}
          onPointerUp={() => { if (zug > 90) schliessen(); setZug(0); start.current = null; }}
          onPointerCancel={() => { setZug(0); start.current = null; }}
          aria-hidden="true"><span /></div>
        <div className="blatt__kopf">
          <h2 id="blatt-titel" tabIndex={-1}>{titel}</h2>
          <button type="button" className="blatt__zu" onClick={schliessen} aria-label="Schließen">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" /></svg>
          </button>
        </div>
        <div className="blatt__inhalt">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

// Ganz leichtes Antippen-Gefühl auf Geräten, die das können (meist Android). Bei „ruhig“ aus.
export function tippen(ms = 10) {
  try {
    if (document.documentElement.dataset.ruhig) return;
    navigator.vibrate?.(ms);
  } catch { /* egal */ }
}
