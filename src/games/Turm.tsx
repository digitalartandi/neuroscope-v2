// Turm-Puzzle: Bringe die Kugeln in die Anordnung des Ziels, mit möglichst wenig Zügen.
import { useEffect, useMemo, useRef, useState } from "react";
import { BestwertZeile, Kennzahlen, SpielHinweis, SpielKopf } from "../components/SpielRahmen";
import { aufgaben, key, PLATZ, type Kugel, type Stand } from "../lib/turm";
import { sek, useBestwert } from "../lib/spiel";

const NAME: Record<Kugel, string> = { r: "Rot", g: "Grün", b: "Blau" };

function Turm({ stand, klein, gewaehlt, onStab }: { stand: Stand; klein?: boolean; gewaehlt?: number | null; onStab?: (i: number) => void }) {
  return (
    <div className={"turm" + (klein ? " turm--klein" : "")}>
      {stand.map((stab, i) => {
        const inhalt = stab.map((k, j) => (
          <span key={j} className="kugel" data-f={k} data-gehoben={gewaehlt === i && j === stab.length - 1 ? "ja" : undefined} aria-hidden="true">{NAME[k][0]}</span>
        ));
        const beschreibung = `Stab ${i + 1}, Platz für ${PLATZ[i]}: ${stab.length ? stab.map((k) => NAME[k]).join(", ") + " (von unten)" : "leer"}`;
        return klein
          ? <div key={i} className="turm__stab" style={{ ["--h" as string]: PLATZ[i] }} aria-label={beschreibung} role="img">{inhalt}</div>
          : <button key={i} type="button" className="turm__stab" style={{ ["--h" as string]: PLATZ[i] }} aria-pressed={gewaehlt === i} aria-label={beschreibung} onClick={() => onStab?.(i)}>{inhalt}</button>;
      })}
      <div className="turm__boden" />
    </div>
  );
}

interface Erg { min: number; zuege: number; planung: number; gesamt: number; geloest: boolean }
type Phase = "intro" | "ueben" | "runde" | "fertig";

export default function TurmSpiel() {
  const [phase, setPhase] = useState<Phase>("intro");
  const uebung = useMemo(() => aufgaben([2]), []);
  const [liste, setListe] = useState(() => aufgaben([3, 3, 4, 4, 5, 5, 6, 6]));
  const [nr, setNr] = useState(0);
  const aktuelle = phase === "ueben" ? uebung[0] : liste[nr];
  const [stand, setStand] = useState<Stand>(aktuelle.start);
  const [gewaehlt, setGewaehlt] = useState<number | null>(null);
  const [zuege, setZuege] = useState(0);
  const [erg, setErg] = useState<Erg[]>([]);
  const [neu, setNeu] = useState(false);
  const t0 = useRef(0); const tErster = useRef<number | null>(null);
  const bw = useBestwert("turm", "groesser");
  const gesperrt = useRef(false);
  const zeitgeber = useRef<number | null>(null);
  useEffect(() => () => { if (zeitgeber.current) window.clearTimeout(zeitgeber.current); }, []);

  const beginne = (a: { start: Stand }) => { gesperrt.current = false; setStand(a.start); setZuege(0); setGewaehlt(null); t0.current = performance.now(); tErster.current = null; };

  const abschliessen = (geloest: boolean, z: number) => {
    gesperrt.current = true;
    const jetzt = performance.now();
    if (phase === "ueben") { setPhase("runde"); setNr(0); beginne(liste[0]); return; }
    const e: Erg = { min: aktuelle.min, zuege: z, planung: (tErster.current ?? jetzt) - t0.current, gesamt: jetzt - t0.current, geloest };
    const neuErg = [...erg, e];
    setErg(neuErg);
    if (nr + 1 < liste.length) { setNr(nr + 1); beginne(liste[nr + 1]); }
    else { setNeu(bw.melden(neuErg.filter((x) => x.geloest && x.zuege === x.min).length)); setPhase("fertig"); }
  };

  const tippe = (i: number) => {
    if (gesperrt.current) return;
    if (gewaehlt == null) { if (stand[i].length) setGewaehlt(i); return; }
    if (gewaehlt === i) { setGewaehlt(null); return; }
    if (stand[i].length >= PLATZ[i]) return;
    const neuStand = stand.map((s) => [...s]) as Stand;
    neuStand[i].push(neuStand[gewaehlt].pop()!);
    if (tErster.current == null) tErster.current = performance.now();
    const z = zuege + 1;
    setStand(neuStand); setGewaehlt(null); setZuege(z);
    if (key(neuStand) === key(aktuelle.ziel)) { gesperrt.current = true; zeitgeber.current = window.setTimeout(() => abschliessen(true, z), 350); }
  };

  const minimal = erg.filter((x) => x.geloest && x.zuege === x.min).length;

  return (
    <div className="spalte">
      <SpielKopf titel="Turm-Puzzle" />
      {phase === "intro" && (
        <>
          <p className="einleitung">Bring die Kugeln in dieselbe Anordnung wie im Ziel. Versuche es mit möglichst wenig Zügen.</p>
          <p>Tippe auf einen Stab, um die oberste Kugel zu nehmen, und auf einen anderen Stab, um sie abzulegen. Die Stäbe haben Platz für drei, zwei und eine Kugel. Plane ruhig erst im Kopf, bevor du ziehst.</p>
          <div className="knopfreihe"><button className="knopf" onClick={() => { setPhase("ueben"); beginne(uebung[0]); }}>Übung starten</button></div>
        </>
      )}
      {(phase === "ueben" || phase === "runde") && (
        <>
          <p className="leise klein" aria-live="polite">
            {phase === "ueben" ? "Übung" : `Aufgabe ${nr + 1} von ${liste.length}`}: geht in {aktuelle.min} Zügen. Bisher {zuege} {zuege === 1 ? "Zug" : "Züge"}.
          </p>
          <p style={{ marginBottom: ".4rem" }}><strong>Ziel</strong></p>
          <div style={{ maxWidth: "14rem" }}><Turm stand={aktuelle.ziel} klein /></div>
          <p style={{ margin: "1.5rem 0 .4rem" }}><strong>Dein Turm</strong></p>
          <Turm stand={stand} gewaehlt={gewaehlt} onStab={tippe} />
          <div className="knopfreihe">
            <button className="textknopf" type="button" onClick={() => beginne(aktuelle)}>Neu anfangen</button>
            {phase === "runde" && <button className="textknopf" type="button" onClick={() => { if (!gesperrt.current) abschliessen(false, zuege); }}>Aufgabe überspringen</button>}
          </div>
        </>
      )}
      {phase === "fertig" && (
        <>
          <Kennzahlen werte={[
            ["In kürzester Zugzahl gelöst", `${minimal} von ${erg.length}`],
            ["Zusätzliche Züge", String(erg.filter((x) => x.geloest).reduce((s, x) => s + (x.zuege - x.min), 0))],
            ["Gesamtzeit", sek(erg.reduce((s, x) => s + x.gesamt, 0))],
            ["Übersprungen", String(erg.filter((x) => !x.geloest).length)],
          ]} />
          <BestwertZeile best={bw.best} text={(b) => `${b} von 8 Aufgaben in kürzester Zugzahl`} merken={bw.merken} setMerken={bw.setMerken} neu={neu} />
          <SpielHinweis />
          <div className="knopfreihe">
            <button className="knopf" onClick={() => { const l = aufgaben([3, 3, 4, 4, 5, 5, 6, 6]); setListe(l); setErg([]); setNr(0); setNeu(false); setPhase("runde"); beginne(l[0]); }}>Noch eine Runde</button>
            <a className="knopf knopf--leise" href="#/spiele">Anderes Spiel</a>
          </div>
        </>
      )}
    </div>
  );
}
