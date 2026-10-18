// Farbwörter (Stroop-Prinzip): Reagiere auf die Schriftfarbe, nicht auf das Wort.
// Übung 12 Durchgänge mit Rückmeldung, dann 2 Blöcke à 40 (50 % passend).
// Antwortfenster 2500 ms, Pause 600–1000 ms mit Fixierkreuz.
import { useEffect, useRef, useState } from "react";
import { BestwertZeile, Kennzahlen, SpielHinweis, SpielKopf } from "../components/SpielRahmen";
import { median, mischen, msText, naechsterFrame, prozent, useBestwert, warte } from "../lib/spiel";

const FARBEN = [
  { id: "rot", wort: "ROT", ink: "#ff7a6b", taste: "1" },
  { id: "gruen", wort: "GRÜN", ink: "#62d68a", taste: "2" },
  { id: "blau", wort: "BLAU", ink: "#7fb2ff", taste: "3" },
  { id: "gelb", wort: "GELB", ink: "#ffd84a", taste: "4" },
] as const;
type FarbId = (typeof FARBEN)[number]["id"];

interface Durchgang { wort: FarbId; farbe: FarbId; passend: boolean }
interface Antwort { passend: boolean; richtig: boolean; rt: number | null }

function block(n: number): Durchgang[] {
  const ids = FARBEN.map((f) => f.id);
  const liste: Durchgang[] = [];
  for (let i = 0; i < n / 2; i++) { const f = ids[i % 4]; liste.push({ wort: f, farbe: f, passend: true }); }
  for (let i = 0; i < n / 2; i++) {
    const f = ids[i % 4]; const andere = ids.filter((x) => x !== f);
    liste.push({ wort: andere[i % 3], farbe: f, passend: false });
  }
  // Mischen, ohne gleiche Farbe direkt hintereinander
  for (let v = 0; v < 200; v++) {
    const m = mischen(liste);
    if (m.every((d, i) => i === 0 || d.farbe !== m[i - 1].farbe)) return m;
  }
  return mischen(liste);
}

type Phase = "intro" | "ueben" | "pause" | "runde" | "fertig";

export default function Farbwort() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [reiz, setReiz] = useState<Durchgang | null>(null);
  const [kreuz, setKreuz] = useState(false);
  const [rueck, setRueck] = useState<string>("");
  const [fortschritt, setFortschritt] = useState("");
  const [antworten, setAntworten] = useState<Antwort[]>([]);
  const [neu, setNeu] = useState(false);
  const bw = useBestwert("farbwort", "kleiner");
  const warteAuf = useRef<((a: { farbe: FarbId; t: number } | null) => void) | null>(null);
  const reizStart = useRef(0);
  const abbruch = useRef(false);

  const antworte = (farbe: FarbId, t: number) => { warteAuf.current?.({ farbe, t }); };

  useEffect(() => {
    abbruch.current = false;
    const taste = (e: KeyboardEvent) => {
      const f = FARBEN.find((x) => x.taste === e.key);
      if (e.repeat) return;
      if (f && warteAuf.current) { e.preventDefault(); antworte(f.id, e.timeStamp); }
    };
    window.addEventListener("keydown", taste);
    return () => { window.removeEventListener("keydown", taste); abbruch.current = true; };
  }, []);

  async function durchlauf(liste: Durchgang[], mitRueck: boolean, label: string): Promise<Antwort[]> {
    const erg: Antwort[] = [];
    for (let i = 0; i < liste.length; i++) {
      if (abbruch.current) break;
      setFortschritt(`${label} ${i + 1} von ${liste.length}`);
      setKreuz(true); setReiz(null);
      await warte(600 + Math.random() * 400);
      setKreuz(false); setReiz(liste[i]);
      reizStart.current = await naechsterFrame();
      const a = await new Promise<{ farbe: FarbId; t: number } | null>((res) => {
        warteAuf.current = res;
        window.setTimeout(() => res(null), 2500);
      });
      warteAuf.current = null;
      const d = liste[i];
      const richtig = !!a && a.farbe === d.farbe;
      const rt = a ? a.t - reizStart.current : null;
      erg.push({ passend: d.passend, richtig, rt: rt != null && rt >= 250 ? rt : null });
      setReiz(null);
      if (mitRueck) { setRueck(!a ? "Zu langsam" : richtig ? "Richtig" : "Nicht ganz: Es zählt die Schriftfarbe"); await warte(700); setRueck(""); }
    }
    return erg;
  }

  async function ueben() {
    setPhase("ueben");
    await durchlauf(block(12), true, "Übung");
    if (!abbruch.current) setPhase("pause");
  }
  async function spielen() {
    setPhase("runde");
    const a1 = await durchlauf(block(40), false, "Block 1:");
    if (abbruch.current) return;
    setFortschritt("Kurze Pause");
    await warte(3000);
    const a2 = await durchlauf(block(40), false, "Block 2:");
    if (abbruch.current) return;
    const alle = [...a1, ...a2];
    setAntworten(alle);
    const rtAlle = median(alle.filter((x) => x.richtig && x.rt != null).map((x) => x.rt!));
    if (rtAlle != null) setNeu(bw.melden(rtAlle));
    setPhase("fertig");
  }

  const auswertbar = antworten.length > 0 && antworten.filter((a) => a.richtig).length / antworten.length >= 0.6;
  const rtAlle = median(antworten.filter((a) => a.richtig && a.rt != null).map((a) => a.rt!));

  return (
    <div className="spalte">
      <SpielKopf titel="Farbwörter" />
      {phase === "intro" && (
        <>
          <p className="einleitung">Du siehst Farbwörter in bunter Schrift. Wähle die Farbe der Schrift, nicht das Wort.</p>
          <p>Beispiel: Steht da <strong>GRÜN</strong> in roter Schrift, ist die richtige Antwort „Rot“. Du kannst auch die Tasten 1 bis 4 nutzen.</p>
          <p className="leise klein">Hinweis: Dieses Spiel braucht Farbsehen. Bei Farbsehschwäche ist es wenig geeignet.</p>
          <div className="knopfreihe"><button className="knopf" onClick={ueben}>Übung starten</button></div>
        </>
      )}
      {phase === "pause" && (
        <>
          <p className="einleitung">Übung geschafft. Jetzt zwei Durchgänge mit je 40 Wörtern, ohne Rückmeldung. Dauer etwa drei Minuten.</p>
          <div className="knopfreihe"><button className="knopf" onClick={spielen}>Los geht’s</button></div>
        </>
      )}
      {(phase === "ueben" || phase === "runde") && (
        <>
          <p className="leise klein">{fortschritt}</p>
          <div className="reiz" style={{ background: "#1f2b29" }} aria-hidden="true">
            {kreuz && <span style={{ color: "#cfd8d5" }}>+</span>}
            {reiz && <span style={{ color: FARBEN.find((f) => f.id === reiz.farbe)!.ink }}>{FARBEN.find((f) => f.id === reiz.wort)!.wort}</span>}
          </div>
          <p aria-live="polite" style={{ minHeight: "1.6em", textAlign: "center" }}>{rueck}</p>
          <div className="antworten">
            {FARBEN.map((f) => (
              <button key={f.id} type="button" className="knopf knopf--leise"
                onPointerDown={(e) => { e.preventDefault(); antworte(f.id, e.timeStamp); }}
                onClick={(e) => { if (e.detail === 0) antworte(f.id, e.timeStamp); }}>
                <span aria-hidden="true" style={{ width: "1rem", height: "1rem", borderRadius: "50%", background: f.ink, border: "1px solid rgba(0,0,0,.3)" }} />
                {f.taste} {f.wort.charAt(0) + f.wort.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </>
      )}
      {phase === "fertig" && (
        <>
          {!auswertbar && <p className="kasten kasten--licht">Weniger als 60 % der Antworten waren richtig. Vielleicht war etwas unklar. Magst du es noch einmal versuchen?</p>}
          <Kennzahlen werte={[
            ["Richtige Antworten", prozent(antworten.filter((a) => a.richtig).length / antworten.length)],
            ["Tempo", msText(rtAlle)],
          ]} />
          <p className="leise klein">Tempo ist der mittlere Wert deiner richtigen Antworten.</p>
          <BestwertZeile best={bw.best} text={(b) => msText(b)} merken={bw.merken} setMerken={bw.setMerken} neu={neu} />
          <SpielHinweis />
          <div className="knopfreihe">
            <button className="knopf" onClick={() => { setAntworten([]); setNeu(false); spielen(); }}>Noch eine Runde</button>
            <a className="knopf knopf--leise" href="#/spiele">Anderes Spiel</a>
          </div>
        </>
      )}
    </div>
  );
}
