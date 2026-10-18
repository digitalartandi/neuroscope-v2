// Zahlenspur (angelehnt an das Trail-Making-Prinzip): Teil A 1–25, Teil B 1–A–2–B …
// Übungsrunde je Teil mit Hinweis, gewertete Runde ohne Hinweis.
// Zeit läuft ab dem ersten richtigen Tippen bis zum letzten Ziel.
import { useMemo, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { BestwertZeile, Kennzahlen, SpielHinweis, SpielKopf } from "../components/SpielRahmen";
import { mischen, sek, useBestwert } from "../lib/spiel";

type Teil = "A" | "B";
type Phase = "intro-A" | "ueben-A" | "runde-A" | "intro-B" | "ueben-B" | "runde-B" | "fertig";

const BUCHST = "ABCDEFGHIJKL".split("");

function folge(teil: Teil, n: number): string[] {
  if (teil === "A") return Array.from({ length: n }, (_, i) => String(i + 1));
  const s: string[] = [];
  for (let i = 0; s.length < n; i++) { s.push(String(i + 1)); if (s.length < n) s.push(BUCHST[i]); }
  return s;
}

function positionen(n: number): { x: number; y: number }[] {
  const pts: { x: number; y: number }[] = [];
  const minAbst = n > 10 ? 15 : 22; // in Prozent der Feldbreite
  let versuche = 0;
  while (pts.length < n && versuche < 20000) {
    versuche++;
    const x = 7 + Math.random() * 86, y = 7 + Math.random() * 86;
    if (pts.every((p) => (p.x - x) ** 2 + (p.y - y) ** 2 >= minAbst ** 2)) pts.push({ x, y });
  }
  if (pts.length < n) { // Rückfall: Raster mit leichter Streuung
    pts.length = 0;
    const k = Math.ceil(Math.sqrt(n));
    const zellen = mischen(Array.from({ length: k * k }, (_, i) => i)).slice(0, n);
    for (const c of zellen) pts.push({ x: ((c % k) + 0.3 + Math.random() * 0.4) * (100 / k), y: (Math.floor(c / k) + 0.3 + Math.random() * 0.4) * (100 / k) });
  }
  return pts;
}

function Feld({ teil, n, hinweis, onFertig }: { teil: Teil; n: number; hinweis: boolean; onFertig: (ms: number, fehler: number) => void }) {
  // Reihenfolge im Dokument gemischt, damit die Tab-Reihenfolge nichts verrät.
  const ziele = useMemo(() => { const f = folge(teil, n); const p = positionen(n); return mischen(f.map((label, i) => ({ label, idx: i, ...p[i] }))); }, [teil, n]);
  const [naechstes, setNaechstes] = useState(0);
  const [falsch, setFalsch] = useState<number | null>(null);
  const start = useRef<number | null>(null);
  const fehler = useRef(0);

  const tippen = (i: number, t: number) => {
    if (i === naechstes) {
      if (naechstes === 0) start.current = t;
      const weiter = naechstes + 1;
      setNaechstes(weiter);
      if (weiter === n) onFertig(t - (start.current ?? t), fehler.current);
    } else if (i > naechstes || i < naechstes) {
      if (naechstes > 0 && i >= naechstes) fehler.current += 1;
      setFalsch(i);
      window.setTimeout(() => setFalsch((f) => (f === i ? null : f)), 400);
    }
  };

  return (
    <div className="spielfeld" role="group" aria-label={`Spielfeld Teil ${teil}`}>
      {ziele.map(({ idx: i, ...z }) => (
        <button key={z.label} type="button" className="ziel"
          style={{ left: `${z.x}%`, top: `${z.y}%` }}
          data-stand={i < naechstes ? "erledigt" : falsch === i ? "falsch" : undefined}
          data-hinweis={hinweis && i === naechstes ? "ja" : undefined}
          aria-label={`${z.label}${i < naechstes ? ", erledigt" : ""}`}
          onPointerDown={(e: PointerEvent) => { e.preventDefault(); tippen(i, e.timeStamp); }}
          onClick={(e: MouseEvent) => { if (e.detail === 0) tippen(i, e.timeStamp); }}>
          {z.label}
        </button>
      ))}
    </div>
  );
}

export default function Spur() {
  const [phase, setPhase] = useState<Phase>("intro-A");
  const [erg, setErg] = useState<{ A?: [number, number]; B?: [number, number] }>({});
  const [neu, setNeu] = useState(false);
  const bw = useBestwert("spur", "kleiner");

  const fertig = (teil: Teil) => (ms: number, f: number) => {
    setErg((e) => ({ ...e, [teil]: [ms, f] }));
    if (teil === "A") setPhase("intro-B");
    else { setNeu(bw.melden(ms)); setPhase("fertig"); }
  };

  return (
    <div className="spalte">
      <SpielKopf titel="Zahlenspur">
        {phase === "intro-A" && (
          <>
            <p className="einleitung">Tippe die Zahlen der Reihe nach an: 1, 2, 3 und so weiter. So schnell es geht, aber ohne Hektik.</p>
            <p>Zuerst eine kurze Übungsrunde. Der nächste Kreis ist dabei markiert.</p>
            <div className="knopfreihe"><button className="knopf" onClick={() => setPhase("ueben-A")}>Übung starten</button></div>
          </>
        )}
      </SpielKopf>

      {phase === "ueben-A" && (<><p>Übung: 1 bis 8.</p><Feld key="uA" teil="A" n={8} hinweis onFertig={() => setPhase("runde-A")} /></>)}
      {phase === "runde-A" && (<><p><strong>Teil A:</strong> 1 bis 25. Die Zeit startet beim ersten Tippen.</p><Feld key="tA" teil="A" n={25} hinweis={false} onFertig={fertig("A")} /></>)}
      {phase === "intro-B" && (
        <>
          <p className="einleitung">Jetzt abwechselnd Zahl und Buchstabe: 1, A, 2, B, 3, C und so weiter.</p>
          <div className="knopfreihe"><button className="knopf" onClick={() => setPhase("ueben-B")}>Übung starten</button></div>
        </>
      )}
      {phase === "ueben-B" && (<><p>Übung: 1, A, 2, B bis D.</p><Feld key="uB" teil="B" n={8} hinweis onFertig={() => setPhase("runde-B")} /></>)}
      {phase === "runde-B" && (<><p><strong>Teil B:</strong> 1 bis 13 und A bis L im Wechsel.</p><Feld key="tB" teil="B" n={25} hinweis={false} onFertig={fertig("B")} /></>)}

      {phase === "fertig" && erg.A && erg.B && (
        <>
          <Kennzahlen werte={[
            ["Teil A", sek(erg.A[0])],
            ["Teil B", sek(erg.B[0])],
            ["Fehlgriffe", String(erg.A[1] + erg.B[1])],
          ]} />
          <BestwertZeile best={bw.best} text={(b) => `Teil B in ${sek(b)}`} merken={bw.merken} setMerken={bw.setMerken} neu={neu} />
          <SpielHinweis />
          <p className="leise klein">Beim ersten Mal ist man meist langsamer. Ab der zweiten Runde sind deine Zeiten besser vergleichbar.</p>
          <div className="knopfreihe">
            <button className="knopf" onClick={() => { setErg({}); setNeu(false); setPhase("runde-A"); }}>Noch eine Runde</button>
            <a className="knopf knopf--leise" href="#/spiele">Anderes Spiel</a>
          </div>
        </>
      )}
    </div>
  );
}
