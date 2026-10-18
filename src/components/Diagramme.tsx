// Diagramme für „Mein Bereich“. Sie zeigen nur, was die Person selbst eingetragen hat.
// Keine Berechnung von Summen, Durchschnitten oder Bewertungen.
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { datumKurz, datumLang, ENERGIE, STIMMUNG, type Eintrag } from "../lib/ich";

function useBreite<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [breite, setBreite] = useState(600);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setBreite(Math.max(260, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, breite] as const;
}

// ---------- Verlauf: Stimmung und Energie über die Tage ----------
export function Verlauf({ tage, eintraege }: { tage: string[]; eintraege: Eintrag[] }) {
  const [ref, breite] = useBreite<HTMLDivElement>();
  const [aktiv, setAktiv] = useState<number | null>(null);
  const nachTag = new Map(eintraege.map((e) => [e.datum, e]));
  const H = 230, L = 58, R = 14, O = 14, U = 30;
  const w = breite - L - R, h = H - O - U;
  const x = (i: number) => L + (tage.length === 1 ? w / 2 : (i / (tage.length - 1)) * w);
  const y = (v: number) => O + h - (v / 4) * h;

  const linie = (feld: "stimmung" | "energie") => {
    let d = "", offen = false;
    tage.forEach((t, i) => {
      const e = nachTag.get(t);
      if (!e) { offen = false; return; }
      d += `${offen ? "L" : "M"}${x(i).toFixed(1)},${y(e[feld]).toFixed(1)}`;
      offen = true;
    });
    return d;
  };
  const beschriftet = [0, Math.floor((tage.length - 1) / 2), tage.length - 1];

  const naechster = (px: number) => {
    const i = Math.round(((px - L) / w) * (tage.length - 1));
    return Math.min(tage.length - 1, Math.max(0, i));
  };
  const bewegen = (ev: PointerEvent<SVGRectElement>) => {
    const r = (ev.currentTarget.ownerSVGElement as SVGSVGElement).getBoundingClientRect();
    setAktiv(naechster(ev.clientX - r.left));
  };
  const taste = (ev: KeyboardEvent<SVGSVGElement>) => {
    if (ev.key === "ArrowRight") { setAktiv((a) => Math.min(tage.length - 1, (a ?? -1) + 1)); ev.preventDefault(); }
    if (ev.key === "ArrowLeft") { setAktiv((a) => Math.max(0, (a ?? tage.length) - 1)); ev.preventDefault(); }
    if (ev.key === "Escape") setAktiv(null);
  };
  const ae = aktiv != null ? nachTag.get(tage[aktiv]) : undefined;

  return (
    <div className="diagramm" ref={ref}>
      <div className="legende" aria-hidden="true">
        <span><i className="legende__linie reihe-1" />Stimmung</span>
        <span><i className="legende__linie reihe-2" />Energie</span>
      </div>
      <div className="diagramm__flaeche">
        <svg width={breite} height={H} role="img" tabIndex={0} onKeyDown={taste} onBlur={() => setAktiv(null)}
          aria-label={`Verlauf deiner Einträge über ${tage.length} Tage. Mit den Pfeiltasten kannst du die Tage durchgehen. Alle Werte stehen auch in der Tabelle darunter.`}>
          {[0, 1, 2, 3, 4].map((v) => <line key={v} className="raster" x1={L} x2={L + w} y1={y(v)} y2={y(v)} />)}
          <text className="achse" x={L - 8} y={y(4) + 4} textAnchor="end">gut / viel</text>
          <text className="achse" x={L - 8} y={y(2) + 4} textAnchor="end">mittel</text>
          <text className="achse" x={L - 8} y={y(0) + 4} textAnchor="end">schwer</text>
          {beschriftet.map((i) => (
            <text key={i} className="achse" x={x(i)} y={H - 8} textAnchor={i === 0 ? "start" : i === tage.length - 1 ? "end" : "middle"}>{datumKurz(tage[i])}</text>
          ))}
          {aktiv != null && <line className="fadenkreuz" x1={x(aktiv)} x2={x(aktiv)} y1={O} y2={O + h} />}
          <path className="linie reihe-1" d={linie("stimmung")} />
          <path className="linie reihe-2" d={linie("energie")} />
          {tage.map((t, i) => {
            const e = nachTag.get(t);
            if (!e) return null;
            return (
              <g key={t} className={aktiv === i ? "punkte aktiv" : "punkte"}>
                <circle className="punkt reihe-1" cx={x(i)} cy={y(e.stimmung)} r={aktiv === i ? 5.5 : 4} />
                <circle className="punkt reihe-2" cx={x(i)} cy={y(e.energie)} r={aktiv === i ? 5.5 : 4} />
              </g>
            );
          })}
          <rect x={L} y={0} width={w} height={H} fill="transparent" onPointerMove={bewegen} onPointerDown={bewegen} onPointerLeave={() => setAktiv(null)} />
        </svg>
        {aktiv != null && (
          <div className="tooltip" style={x(aktiv) > breite / 2 ? { left: x(aktiv) - 12, top: 4, transform: "translateX(-100%)" } : { left: x(aktiv) + 12, top: 4, transform: "none" }} aria-live="polite">
            <p className="tooltip__titel">{datumLang(tage[aktiv])}</p>
            {ae ? (
              <>
                <p><i className="legende__linie reihe-1" /><strong>{STIMMUNG[ae.stimmung]}</strong> <span>Stimmung</span></p>
                <p><i className="legende__linie reihe-2" /><strong>{ENERGIE[ae.energie]}</strong> <span>Energie</span></p>
                {ae.wort && <p className="tooltip__wort">„{ae.wort}“</p>}
              </>
            ) : <p className="leise">kein Eintrag</p>}
          </div>
        )}
      </div>
      <details className="tabelle">
        <summary>Als Tabelle anzeigen</summary>
        <table>
          <thead><tr><th>Tag</th><th>Stimmung</th><th>Energie</th><th>Wort</th></tr></thead>
          <tbody>
            {tage.filter((t) => nachTag.has(t)).reverse().map((t) => {
              const e = nachTag.get(t)!;
              return <tr key={t}><td>{datumLang(t)}</td><td>{STIMMUNG[e.stimmung]}</td><td>{ENERGIE[e.energie]}</td><td>{e.wort ?? ""}</td></tr>;
            })}
          </tbody>
        </table>
      </details>
    </div>
  );
}

// ---------- Kalender: fünf Wochen, Farbe nach eigener Stimmungsangabe ----------
export function Kalender({ eintraege }: { eintraege: Eintrag[] }) {
  const nachTag = new Map(eintraege.map((e) => [e.datum, e]));
  const heute = new Date();
  const montag = new Date(heute.getFullYear(), heute.getMonth(), heute.getDate() - ((heute.getDay() + 6) % 7) - 28);
  const tage: Date[] = Array.from({ length: 35 }, (_, i) => new Date(montag.getFullYear(), montag.getMonth(), montag.getDate() + i));
  const z = (n: number) => String(n).padStart(2, "0");
  const key = (d: Date) => `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
  return (
    <div className="kalender-wrap">
      <div className="kalender" role="list" aria-label="Deine Stimmung der letzten fünf Wochen">
        {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((t) => <span key={t} className="kalender__kopf" aria-hidden="true">{t}</span>)}
        {tage.map((d) => {
          const e = nachTag.get(key(d));
          const zukunft = d > heute;
          const text = `${datumLang(key(d))}: ${e ? STIMMUNG[e.stimmung] : zukunft ? "noch offen" : "kein Eintrag"}`;
          return (
            <span key={key(d)} role="listitem" className={`kalender__tag${e ? ` stufe-${e.stimmung}` : ""}${zukunft ? " zukunft" : ""}${key(d) === key(heute) ? " heute" : ""}`}
              title={text} aria-label={text}>
              {d.getDate()}
            </span>
          );
        })}
      </div>
      <div className="stufen-legende" aria-hidden="true">
        <span>schwer</span>
        {[0, 1, 2, 3, 4].map((s) => <i key={s} className={`stufe-${s}`} />)}
        <span>gut</span>
      </div>
    </div>
  );
}

// ---------- Netz: eigene Zufriedenheit je Lebensbereich (0 bis 10) ----------
export interface Achse { id: string; kurz: string; symbol?: ReactNode }

export function Netz({ achsen, jetzt, vergleich }: { achsen: Achse[]; jetzt: Record<string, number>; vergleich?: Record<string, number> }) {
  const [ref, breite] = useBreite<HTMLDivElement>();
  const groesse = Math.min(breite, 460);
  const rand = groesse < 360 ? 58 : 76;
  const r = groesse / 2 - rand, m = groesse / 2;
  const winkel = (i: number) => -Math.PI / 2 + (i / achsen.length) * Math.PI * 2;
  const punkt = (i: number, v: number) => [m + Math.cos(winkel(i)) * (v / 10) * r, m + Math.sin(winkel(i)) * (v / 10) * r] as const;
  const form = (werte: Record<string, number>) => achsen.map((a, i) => punkt(i, werte[a.id] ?? 0).map((n) => n.toFixed(1)).join(",")).join(" ");
  return (
    <div className="netz" ref={ref}>
      <svg width="100%" viewBox={`0 0 ${groesse} ${groesse}`} style={{ maxWidth: groesse }} role="img"
        aria-label={"Deine Einschätzung je Lebensbereich: " + achsen.map((a) => `${a.kurz} ${jetzt[a.id] ?? 0} von 10`).join(", ") + (vergleich ? ". Die gestrichelte Linie zeigt den früheren Stand." : "")}>
        {[2, 4, 6, 8, 10].map((v) => (
          <polygon key={v} className="raster" points={achsen.map((_, i) => punkt(i, v).join(",")).join(" ")} />
        ))}
        {achsen.map((a, i) => { const [px, py] = punkt(i, 10); return <line key={a.id} className="raster" x1={m} y1={m} x2={px} y2={py} />; })}
        {vergleich && <polygon className="netz__vergleich reihe-2" points={form(vergleich)} />}
        <polygon className="netz__jetzt reihe-1" points={form(jetzt)} />
        {achsen.map((a, i) => { const [px, py] = punkt(i, jetzt[a.id] ?? 0); return <circle key={a.id} className="punkt reihe-1" cx={px} cy={py} r={4} />; })}
        {achsen.map((a, i) => {
          const [lx, ly] = punkt(i, 10);
          const dx = Math.cos(winkel(i)), dy = Math.sin(winkel(i));
          const tx = lx + dx * 14, ty = ly + dy * 14 + 4;
          const anker = Math.abs(dx) < 0.3 ? "middle" : dx > 0 ? "start" : "end";
          return (
            <g key={a.id}>
              <text className="netz__label" x={tx} y={ty + (dy > 0.3 ? 8 : dy < -0.3 ? -4 : 0)} textAnchor={anker}>{a.kurz}</text>
              <text className="netz__wert" x={tx} y={ty + (dy > 0.3 ? 24 : dy < -0.3 ? 12 : 16)} textAnchor={anker}>{jetzt[a.id] ?? 0}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ---------- Antwortmuster: die eigenen Antworten als Punktreihe ----------
export function Punktreihe({ wert, stufen }: { wert: number | undefined; stufen: readonly string[] }) {
  return (
    <span className="punktreihe" role="img" aria-label={wert === undefined ? "nicht beantwortet" : stufen[wert]}>
      {stufen.map((s, i) => <i key={s} className={i === wert ? "an" : undefined} style={{ ["--g" as string]: `${0.45 + i * 0.13}rem` }} />)}
    </span>
  );
}
