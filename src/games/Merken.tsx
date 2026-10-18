// Buchstaben merken (N-back-Prinzip): Stufe 1 und Stufe 2.
// Je Stufe 12 Übungsdurchgänge mit Rückmeldung, dann 40 Durchgänge (12 Ziele).
// Buchstabe 500 ms sichtbar, Antwortfenster 2500 ms ab Erscheinen.
import { useEffect, useRef, useState } from "react";
import { BestwertZeile, Kennzahlen, SpielHinweis, SpielKopf } from "../components/SpielRahmen";
import { median, mischen, msText, naechsterFrame, prozent, useBestwert, warte } from "../lib/spiel";

const BUCHST = "BCDFGHKLMNPRST".split("");

function folge(n: number, stufe: number, ziele: number): { b: string; ziel: boolean }[] {
  const zielPos = new Set(mischen(Array.from({ length: n - stufe }, (_, i) => i + stufe)).slice(0, ziele));
  const r: { b: string; ziel: boolean }[] = [];
  for (let i = 0; i < n; i++) {
    if (zielPos.has(i)) r.push({ b: r[i - stufe].b, ziel: true });
    else {
      const verboten = new Set([r[i - stufe]?.b, r[i - 1]?.b].filter(Boolean));
      const wahl = BUCHST.filter((x) => !verboten.has(x));
      r.push({ b: wahl[Math.floor(Math.random() * wahl.length)], ziel: false });
    }
  }
  return r;
}

interface Erg { treffer: number; ziele: number; fehlalarme: number; nichtziele: number; rts: number[] }
type Phase = "intro" | "ueben1" | "runde1" | "intro2" | "ueben2" | "runde2" | "fertig";

export default function Merken() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [buchstabe, setBuchstabe] = useState<string | null>(null);
  const [rueck, setRueck] = useState("");
  const [fortschritt, setFortschritt] = useState("");
  const [erg, setErg] = useState<Record<number, Erg>>({});
  const [neu, setNeu] = useState(false);
  const bw = useBestwert("merken", "groesser");
  const druck = useRef<number | null>(null);
  const offen = useRef(false);
  const abbruch = useRef(false);

  const gleich = (t: number) => { if (offen.current && druck.current == null) druck.current = t; };

  useEffect(() => {
    abbruch.current = false;
    const taste = (e: KeyboardEvent) => { if (e.repeat) return; if (e.key === " " || e.key === "Enter") { if (offen.current) { e.preventDefault(); gleich(e.timeStamp); } } };
    window.addEventListener("keydown", taste);
    return () => { window.removeEventListener("keydown", taste); abbruch.current = true; };
  }, []);

  async function lauf(stufe: number, n: number, ziele: number, mitRueck: boolean, label: string): Promise<Erg> {
    const f = folge(n, stufe, ziele);
    const e: Erg = { treffer: 0, ziele: 0, fehlalarme: 0, nichtziele: 0, rts: [] };
    await warte(800);
    for (let i = 0; i < f.length; i++) {
      if (abbruch.current) break;
      setFortschritt(`${label} ${i + 1} von ${f.length}`);
      druck.current = null;
      setBuchstabe(f[i].b);
      const start = await naechsterFrame();
      offen.current = true;
      await warte(500);
      setBuchstabe(null);
      await warte(2000);
      offen.current = false;
      const gedrueckt = druck.current != null;
      if (f[i].ziel) { e.ziele++; if (gedrueckt) { e.treffer++; const rt = druck.current! - start; if (rt >= 150) e.rts.push(rt); } }
      else if (i >= stufe) { e.nichtziele++; if (gedrueckt) e.fehlalarme++; }
      if (mitRueck && i >= stufe) {
        setRueck(f[i].ziel ? (gedrueckt ? "Richtig erkannt" : "Das war gleich") : gedrueckt ? "Das war nicht gleich" : "");
        await warte(600); setRueck("");
      }
    }
    return e;
  }

  async function starte(stufe: 1 | 2) {
    setPhase(stufe === 1 ? "ueben1" : "ueben2");
    await lauf(stufe, 12, 4, true, "Übung");
    if (abbruch.current) return;
    setPhase(stufe === 1 ? "runde1" : "runde2");
    const e = await lauf(stufe, 40, 12, false, `Stufe ${stufe}:`);
    if (abbruch.current) return;
    setErg((alt) => ({ ...alt, [stufe]: e }));
    if (stufe === 1) setPhase("intro2");
    else {
      const richtig = (e.treffer + (e.nichtziele - e.fehlalarme)) / (e.ziele + e.nichtziele);
      setNeu(bw.melden(Math.round(richtig * 100)));
      setPhase("fertig");
    }
  }

  const laeuft = ["ueben1", "runde1", "ueben2", "runde2"].includes(phase);
  const anteil = (e?: Erg) => (e ? (e.treffer + (e.nichtziele - e.fehlalarme)) / (e.ziele + e.nichtziele) : 0);

  return (
    <div className="spalte">
      <SpielKopf titel="Buchstaben merken" />
      {phase === "intro" && (
        <>
          <p className="einleitung">Nacheinander erscheinen Buchstaben. Tippe auf „Gleich“, wenn ein Buchstabe derselbe ist wie direkt davor.</p>
          <p>Du kannst auch die Leertaste drücken. Zuerst eine kurze Übung mit Rückmeldung.</p>
          <div className="knopfreihe"><button className="knopf" onClick={() => starte(1)}>Stufe 1 starten</button></div>
        </>
      )}
      {phase === "intro2" && (
        <>
          <p className="einleitung">Stufe 2 ist kniffliger: Tippe auf „Gleich“, wenn der Buchstabe derselbe ist wie <em>vor zwei Schritten</em>.</p>
          <p>Beispiel: K, M, K. Beim zweiten K ist „Gleich“ richtig.</p>
          <div className="knopfreihe"><button className="knopf" onClick={() => starte(2)}>Stufe 2 starten</button></div>
        </>
      )}
      {laeuft && (
        <>
          <p className="leise klein">{fortschritt}</p>
          <div className="reiz" aria-live="assertive" aria-atomic="true">{buchstabe ?? ""}</div>
          <p aria-live="polite" style={{ minHeight: "1.6em", textAlign: "center" }}>{rueck}</p>
          <div className="knopfreihe" style={{ justifyContent: "center" }}>
            <button type="button" className="knopf" style={{ minWidth: "12rem", minHeight: "3.5rem" }}
              onPointerDown={(e) => { e.preventDefault(); gleich(e.timeStamp); }}
              onClick={(e) => { if (e.detail === 0) gleich(e.timeStamp); }}>
              Gleich
            </button>
          </div>
        </>
      )}
      {phase === "fertig" && (
        <>
          <Kennzahlen werte={[
            ["Stufe 1, richtig", prozent(anteil(erg[1]))],
            ["Stufe 2, richtig", prozent(anteil(erg[2]))],
            ["Stufe 2, erkannt", erg[2] ? `${erg[2].treffer} von ${erg[2].ziele}` : "–"],
            ["Stufe 2, Tempo", msText(median(erg[2]?.rts ?? []))],
          ]} />
          <p className="leise klein">„Richtig“ zählt erkannte Wiederholungen und korrekt ausgelassene Buchstaben. Tempo ist der mittlere Wert der erkannten Wiederholungen.</p>
          <BestwertZeile best={bw.best} text={(b) => `${b} % richtig in Stufe 2`} merken={bw.merken} setMerken={bw.setMerken} neu={neu} />
          <SpielHinweis />
          <div className="knopfreihe">
            <button className="knopf" onClick={() => { setErg({}); setNeu(false); starte(1); }}>Noch eine Runde</button>
            <a className="knopf knopf--leise" href="#/spiele">Anderes Spiel</a>
          </div>
        </>
      )}
    </div>
  );
}
