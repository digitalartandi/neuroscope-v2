import { useState } from "react";
import { tippen } from "./Blatt";

// Interaktiver „Teufelskreis der Angst“ (Modell aus der Verhaltenstherapie, vgl. gesund.bund.de).
// Antippen zeigt, was an jeder Station passiert, und im zweiten Modus, wo man aussteigen kann.
const STATIONEN = [
  { kurz: "Etwas fällt auf", text: "Herzklopfen, Schwindel, ein voller Raum oder ein Gedanke. Oft etwas ganz Harmloses.",
    raus: "Wer Auslöser dauerhaft meidet, hält den Kreis am Leben. Hilfreicher ist, Schritt für Schritt wieder hinzuschauen, am besten mit fachlicher Begleitung." },
  { kurz: "„Da stimmt was nicht!“", text: "Das Signal wird als Gefahr gedeutet: „Mit mir stimmt etwas nicht.“ „Gleich passiert etwas Schlimmes.“",
    raus: "Den Gedanken prüfen: „Mein Körper reagiert auf Angst. Das ist unangenehm, aber nicht gefährlich.“", link: ["gedanken", "Gedanken prüfen"] },
  { kurz: "Die Angst steigt", text: "Das Gefühl wird stärker. Der Gedanke wirkt dadurch noch wahrer.",
    raus: "Angst ist wie eine Welle: Sie steigt, bleibt eine Weile und sinkt meist innerhalb von 5 bis 30 Minuten von selbst wieder ab." },
  { kurz: "Der Körper schlägt Alarm", text: "Stresshormone werden ausgeschüttet. Der Puls steigt, der Atem wird schnell und flach. Eine normale Schutzreaktion.",
    raus: "Langsam und lang ausatmen. Das bremst den Alarm im Körper.", link: ["atmung", "Ruhig atmen"] },
  { kurz: "Noch mehr spüren", text: "Die Aufmerksamkeit klebt am Körper. Man bemerkt noch mehr, und der Kreis beginnt von vorn. So schaukelt er sich hoch.",
    raus: "Die Aufmerksamkeit nach außen lenken: fünf Dinge sehen, vier spüren, drei hören.", link: ["sinne", "Mit den Sinnen ankommen"] },
];
const M = 170, R = 118;
const pos = (i: number) => {
  const w = -Math.PI / 2 + (i / STATIONEN.length) * Math.PI * 2;
  return [M + Math.cos(w) * R, M + Math.sin(w) * R] as const;
};

export function Angstkreis() {
  const [modus, setModus] = useState<"kreis" | "raus">("kreis");
  const [wahl, setWahl] = useState(0);
  const s = STATIONEN[wahl];
  // Bögen zwischen den Stationen, mit etwas Abstand zu den Punkten.
  const bogen = (i: number) => {
    const a = -Math.PI / 2 + (i / 5) * Math.PI * 2 + 0.3, b = -Math.PI / 2 + ((i + 1) / 5) * Math.PI * 2 - 0.3;
    return `M${M + Math.cos(a) * R} ${M + Math.sin(a) * R} A${R} ${R} 0 0 1 ${M + Math.cos(b) * R} ${M + Math.sin(b) * R}`;
  };
  return (
    <div className="angstkreis" data-modus={modus}>
      <div className="segment" role="group" aria-label="Ansicht">
        <button type="button" aria-pressed={modus === "kreis"} onClick={() => { tippen(); setModus("kreis"); }}>Wie der Kreis läuft</button>
        <button type="button" aria-pressed={modus === "raus"} onClick={() => { tippen(); setModus("raus"); }}>Wo du aussteigen kannst</button>
      </div>
      <div className="angstkreis__bild">
        <svg viewBox="0 0 340 340" aria-hidden="true">
          <defs>
            <marker id="ak-pfeil" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1 1 9 5 1 9z" /></marker>
          </defs>
          {STATIONEN.map((_, i) => <path key={i} d={bogen(i)} className="angstkreis__bogen" markerEnd="url(#ak-pfeil)" />)}
          <g className="angstkreis__lauf"><circle cx={M} cy={M - R} r="7" /></g>
          <text x={M} y={M - 4} textAnchor="middle" className="angstkreis__mitte">{modus === "kreis" ? "Teufelskreis" : "Ausstiege"}</text>
          <text x={M} y={M + 16} textAnchor="middle" className="angstkreis__mitte-klein">{modus === "kreis" ? "der Angst" : "an jeder Station"}</text>
        </svg>
        {STATIONEN.map((st, i) => {
          const [x, y] = pos(i);
          return (
            <button key={i} type="button" className="angstkreis__station" aria-pressed={wahl === i}
              style={{ left: `${(x / 340) * 100}%`, top: `${(y / 340) * 100}%` }}
              onClick={() => { tippen(); setWahl(i); }}>
              <span className="angstkreis__nr" aria-hidden="true">{modus === "raus" ? "↗" : i + 1}</span>
              <span className="angstkreis__name">{st.kurz}</span>
            </button>
          );
        })}
      </div>
      <div className="angstkreis__karte" aria-live="polite" key={modus + wahl}>
        <p className="angstkreis__titel">{modus === "raus" ? `Aussteigen bei „${s.kurz.replace(/[„“!]/g, "")}“` : `${wahl + 1}. ${s.kurz}`}</p>
        <p>{modus === "raus" ? s.raus : s.text}</p>
        {modus === "raus" && s.link && <p><a className="knopf knopf--leise" href={`#/uebungen/${s.link[0]}`}>Übung: {s.link[1]}</a></p>}
        <div className="angstkreis__schritte">
          <button type="button" className="textknopf" onClick={() => setWahl((wahl + 4) % 5)}>‹ Zurück</button>
          <span className="leise klein">{wahl + 1} von 5</span>
          <button type="button" className="textknopf" onClick={() => setWahl((wahl + 1) % 5)}>Weiter ›</button>
        </div>
      </div>
      <p className="hinweis-feld">Neue oder unklare Beschwerden wie Herzrasen oder Brustdruck ärztlich abklären lassen. Wer weiß, dass das Herz gesund ist, kann der Angst leichter widersprechen.</p>
    </div>
  );
}
