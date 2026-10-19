import { useEffect, useRef, useState } from "react";
import { UEBUNGEN, type Uebung, type UebungGruppe } from "../content/uebungen";
import { sitzungLesen, sitzungSchreiben } from "../lib/speicher";
import { SPIEL_SYMBOL, UEBUNG_SYMBOL } from "../components/Icons";
import { SPIELE } from "./Spiele";
import { Vorlesen } from "../components/Vorlesen";
import { useZustand } from "../lib/zustand";
import { heute } from "../lib/ich";

function Atmung() {
  const [laeuft, setLaeuft] = useState(false);
  const [phase, setPhase] = useState<"ein" | "aus">("ein");
  const [rest, setRest] = useState(180);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!laeuft) return;
    setPhase("ein");
    const start = performance.now();
    timer.current = window.setInterval(() => {
      const sek = Math.floor((performance.now() - start) / 1000);
      setRest(Math.max(0, 180 - sek));
      setPhase(Math.floor(sek / 5) % 2 === 0 ? "ein" : "aus");
      if (sek >= 180) setLaeuft(false);
    }, 250);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [laeuft]);

  const skala = !laeuft ? 0.6 : phase === "ein" ? 1 : 0.6;
  const min = Math.floor(rest / 60), sek = rest % 60;
  return (
    <div>
      <div className="atem">
        <div>
          <div className="atem__kreis" style={{ ["--skala" as string]: skala, ["--dauer" as string]: "5s", margin: "0 auto" }} aria-hidden="true" />
          <p className="atem__text" aria-live="polite">
            {laeuft ? (phase === "ein" ? "Einatmen" : "Ausatmen") : rest === 0 ? "Gut gemacht" : "Bereit, wenn du es bist"}
          </p>
          {laeuft && <p className="leise" style={{ textAlign: "center" }}>noch {min}:{String(sek).padStart(2, "0")}</p>}
        </div>
      </div>
      <div className="knopfreihe" style={{ justifyContent: "center" }}>
        {laeuft
          ? <button className="knopf knopf--leise" type="button" onClick={() => setLaeuft(false)}>Anhalten</button>
          : <button className="knopf" type="button" onClick={() => { setRest(180); setLaeuft(true); }}>{rest === 180 ? "Starten" : "Noch einmal"}</button>}
      </div>
    </div>
  );
}

function Checkliste({ u }: { u: Uebung }) {
  const [an, setAn] = useState<number[]>(() => sitzungLesen("ue-" + u.id, []));
  useEffect(() => sitzungSchreiben("ue-" + u.id, an), [u.id, an]);
  return (
    <ul className="check">
      {u.punkte!.map((p, i) => (
        <li key={i}>
          <label>
            <input type="checkbox" checked={an.includes(i)} onChange={() => setAn((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]))} />
            <span>{p}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function Schreiben({ u }: { u: Uebung }) {
  const [texte, setTexte] = useState<string[]>(() => sitzungLesen("ue-" + u.id, u.impulse!.map(() => "")));
  useEffect(() => sitzungSchreiben("ue-" + u.id, texte), [u.id, texte]);
  return (
    <div>
      {u.impulse!.map((imp, i) => (
        <div key={i}>
          <label className="feld" htmlFor={`imp-${i}`}>{imp}</label>
          <textarea id={`imp-${i}`} value={texte[i] ?? ""} onChange={(e) => setTexte((t) => t.map((x, j) => (j === i ? e.target.value : x)))} />
        </div>
      ))}
      <p className="hinweis-feld">Deine Texte bleiben nur in diesem Tab. Zum Aufbewahren kannst du sie kopieren oder die Seite drucken.</p>
    </div>
  );
}

// Herz: „Hat mir gutgetan“. Landet in „Mein Bereich“ unter „Was mir guttut“.
export function MerkKnopf({ id, titel }: { id: string; titel: string }) {
  const z = useZustand();
  const an = z.merkliste.includes(id);
  return (
    <button type="button" className="merk-knopf" aria-pressed={an} onClick={() => z.setMerkliste((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]))}
      aria-label={an ? `${titel}: aus „Was mir guttut“ entfernen` : `${titel}: hat mir gutgetan`}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.5-7.5-10A4.2 4.2 0 0 1 12 7.4 4.2 4.2 0 0 1 19.5 10c0 5.5-7.5 10-7.5 10z" /></svg>
      <span>{an ? "Tut mir gut" : "Hat mir gutgetan"}</span>
    </button>
  );
}

// Angeleitete Übung: ein Schritt nach dem anderen, mit ruhigem Zeitkreis, wo es passt.
function Schritte({ u }: { u: Uebung }) {
  const liste = u.schritte!;
  const [i, setI] = useState(-1); // -1 = noch nicht gestartet, liste.length = fertig
  const [rest, setRest] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  const schritt = i >= 0 && i < liste.length ? liste[i] : null;
  useEffect(() => { setRest(schritt?.sekunden ?? 0); setLaeuft(Boolean(schritt?.sekunden)); }, [i]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!laeuft) return;
    const t = window.setInterval(() => setRest((r) => { if (r <= 1) { setLaeuft(false); return 0; } return r - 1; }), 1000);
    return () => window.clearInterval(t);
  }, [laeuft]);
  const karte = useRef<HTMLDivElement>(null);
  const gehe = (n: number) => { setI(n); window.setTimeout(() => karte.current?.focus({ preventScroll: true }), 0); };

  if (i === -1) return (
    <div className="schritte-start">
      <ol className="schritte-vorschau">{liste.map((x) => <li key={x.titel}>{x.titel}</li>)}</ol>
      <div className="knopfreihe" style={{ justifyContent: "center" }}><button type="button" className="knopf" onClick={() => gehe(0)}>Starten</button></div>
    </div>
  );
  if (!schritt) return (
    <div className="schritte-karte schritte-karte--fertig" ref={karte} tabIndex={-1}>
      <p className="schritte-karte__titel">Gut gemacht.</p>
      <p>Nimm dir noch einen Moment, bevor du weitermachst.</p>
      <MerkKnopf id={u.id} titel={u.titel} />
      <div className="knopfreihe" style={{ justifyContent: "center" }}><button type="button" className="knopf knopf--leise" onClick={() => gehe(0)}>Noch einmal</button></div>
    </div>
  );
  const anteil = schritt.sekunden ? 1 - rest / schritt.sekunden : 0;
  return (
    <div className="schritte">
      <div className="schritte__fortschritt" aria-hidden="true">
        {liste.map((_, j) => <span key={j} data-stand={j < i ? "fertig" : j === i ? "jetzt" : undefined} />)}
      </div>
      <div className="schritte-karte" ref={karte} tabIndex={-1} key={i} aria-live="polite">
        <p className="leise klein" style={{ margin: 0 }}>Schritt {i + 1} von {liste.length}</p>
        <p className="schritte-karte__titel">{schritt.titel}</p>
        <p className="schritte-karte__text">{schritt.text}</p>
        {schritt.sekunden ? (
          <button type="button" className="zeitkreis" onClick={() => (rest === 0 ? (setRest(schritt.sekunden!), setLaeuft(true)) : setLaeuft(!laeuft))}
            aria-label={rest === 0 ? "Zeit noch einmal starten" : laeuft ? `Zeit anhalten, noch ${rest} Sekunden` : `Zeit fortsetzen, noch ${rest} Sekunden`}>
            <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="19" className="zeitkreis__spur" />
              <circle cx="22" cy="22" r="19" className="zeitkreis__wert" style={{ strokeDashoffset: `${119.4 * (1 - anteil)}` }} /></svg>
            <span>{rest === 0 ? "✓" : rest}</span>
          </button>
        ) : null}
      </div>
      <div className="knopfreihe schritte__knoepfe">
        <button type="button" className="knopf knopf--leise" onClick={() => gehe(i - 1)} disabled={i === 0}>Zurück</button>
        <button type="button" className="knopf" onClick={() => gehe(i + 1)}>{i === liste.length - 1 ? "Abschließen" : "Weiter"}</button>
      </div>
    </div>
  );
}

// Gefühle benennen: Wörter antippen, nichts wird ausgewertet.
function Gefuehle({ u }: { u: Uebung }) {
  const z = useZustand();
  const [festgehalten, setFestgehalten] = useState(false);
  const [wahl, setWahl] = useState<string[]>(() => sitzungLesen("ue-" + u.id + "-wahl", []));
  const [texte, setTexte] = useState<string[]>(() => sitzungLesen("ue-" + u.id, (u.impulse ?? []).map(() => "")));
  useEffect(() => sitzungSchreiben("ue-" + u.id + "-wahl", wahl), [u.id, wahl]);
  useEffect(() => sitzungSchreiben("ue-" + u.id, texte), [u.id, texte]);
  const tausche = (w: string) => setWahl((a) => (a.includes(w) ? a.filter((x) => x !== w) : [...a, w]));
  return (
    <div>
      <div className="gefuehl-auswahl" aria-live="polite">
        {wahl.length === 0 ? <span className="leise">Tipp die Wörter an, die gerade passen. Mehrere sind möglich.</span>
          : <><span className="leise">Gerade spüre ich:</span> {wahl.map((w) => <button key={w} type="button" className="gefuehl gefuehl--gewaehlt" onClick={() => tausche(w)} aria-label={`${w} entfernen`}>{w} <span aria-hidden="true">×</span></button>)}</>}
      </div>
      {u.gefuehle!.map((f, n) => (
        <div key={f.familie} className="gefuehl-familie" style={{ ["--farbe" as string]: `var(--gefuehl-${n + 1})` }}>
          <h3>{f.familie}</h3>
          <div className="gefuehl-woerter">
            {f.woerter.map((w) => <button key={w} type="button" className="gefuehl" aria-pressed={wahl.includes(w)} onClick={() => tausche(w)}>{w}</button>)}
          </div>
        </div>
      ))}
      {(u.impulse ?? []).map((imp, i) => (
        <div key={i}>
          <label className="feld" htmlFor={`gf-${i}`}>{imp}</label>
          <textarea id={`gf-${i}`} value={texte[i] ?? ""} onChange={(e) => setTexte((t) => t.map((x, j) => (j === i ? e.target.value : x)))} />
        </div>
      ))}
      <div className="knopfreihe">
        <button type="button" className={`knopf${festgehalten ? " knopf--erledigt" : ""}`} disabled={wahl.length === 0}
          onClick={() => { const tag = heute(); z.setGefuehle((alt) => [...alt.filter((g) => g.datum !== tag), { datum: tag, woerter: wahl }].sort((a, b) => a.datum.localeCompare(b.datum))); setFestgehalten(true); window.setTimeout(() => setFestgehalten(false), 2400); }}>
          {festgehalten ? "In Mein Bereich festgehalten" : "In Mein Bereich festhalten"}
        </button>
      </div>
      <p className="sr-only" role="status">{festgehalten ? "Deine Gefühlswörter für heute sind in Mein Bereich festgehalten." : ""}</p>
      <p className="hinweis-feld">
        Es gibt keine richtigen oder falschen Gefühle. Festgehalten werden nur das Datum und die Wörter, nicht deine Notizen.
        {z.ichMerken ? " Sie bleiben auf diesem Gerät." : <> Ohne Zustimmung nur bis zum Schließen des Tabs. <a href="#/einstellungen">Dauerhaft merken</a></>}
      </p>
    </div>
  );
}

function GutTut() {
  const z = useZustand();
  const liste = UEBUNGEN.filter((u) => z.merkliste.includes(u.id));
  if (liste.length === 0) return null;
  return (
    <section aria-labelledby="gr-gut">
      <h2 className="abschnitt" id="gr-gut">Was dir guttut</h2>
      <p className="leise gruppe-text">Übungen, die du mit einem Herz markiert hast.</p>
      <ul className="gut-tut">
        {liste.map((u) => (
          <li key={u.id}><a href={`#/uebungen/${u.id}`}><span className="wissen-karten__symbol">{UEBUNG_SYMBOL[u.id] ?? UEBUNG_SYMBOL.atmung}</span>{u.titel}</a></li>
        ))}
      </ul>
    </section>
  );
}

export const UEBUNG_GRUPPEN: { id: UebungGruppe; titel: string; text: string }[] = [
  { id: "ruhe", titel: "Zur Ruhe kommen", text: "Für Körper und Atem, wenn alles zu viel ist." },
  { id: "gefuehle", titel: "Gefühle verstehen", text: "Gefühle wahrnehmen, benennen und freundlich mit dir sein." },
  { id: "gedanken", titel: "Gedanken ordnen", text: "Wenn sich die Gedanken im Kreis drehen." },
  { id: "kraft", titel: "Alltag gestalten", text: "Kraft sammeln und Gutes fix einplanen." },
];

export default function Uebungen({ id }: { id?: string }) {
  if (!id) {
    return (
      <div className="spalte spalte--breit">
        <h1>Übungen</h1>
        <p className="einleitung">Kurze, erprobte Übungen für Körper, Gefühle und Gedanken. Und kleine Denkspiele zum Abschalten.</p>

        <GutTut />

        {UEBUNG_GRUPPEN.map((g) => {
          const liste = UEBUNGEN.filter((u) => u.gruppe === g.id);
          if (liste.length === 0) return null;
          return (
            <section key={g.id} aria-labelledby={`gr-${g.id}`}>
              <h2 className="abschnitt" id={`gr-${g.id}`}>{g.titel}</h2>
              <p className="leise gruppe-text">{g.text}</p>
              <ul className="wissen-karten uebung-karten">
                {liste.map((u) => (
                  <li key={u.id}>
                    <a href={`#/uebungen/${u.id}`}>
                      <span className="wissen-karten__symbol">{UEBUNG_SYMBOL[u.id] ?? UEBUNG_SYMBOL.atmung}</span>
                      <span className="wissen-karten__text">
                        <span className="wissen-karten__gruppe">etwa {u.dauer}</span>
                        <strong>{u.titel}</strong>
                        <span className="wissen-karten__teaser">{u.kurz}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <h2 className="abschnitt" id="spiele">Konzentration</h2>
        <p className="leise gruppe-text">Kleine Denkspiele zum Abschalten.</p>
        <ul className="wissen-karten uebung-karten">
          {SPIELE.map(([id, t, d, dauer]) => (
            <li key={id}>
              <a href={`#/spiele/${id}`}>
                <span className="wissen-karten__symbol">{SPIEL_SYMBOL[id]}</span>
                <span className="wissen-karten__text">
                  <span className="wissen-karten__gruppe">{dauer}</span>
                  <strong>{t}</strong>
                  <span className="wissen-karten__teaser">{d}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="leise klein" style={{ marginTop: "1.25rem" }}>
          Die Spiele sind reine Freizeitübungen ohne Vergleichswerte. Sie sagen nichts über Gesundheit oder
          Leistungsfähigkeit aus. Du spielst nur gegen deine eigene Bestmarke.
        </p>
      </div>
    );
  }
  const u = UEBUNGEN.find((x) => x.id === id);
  if (!u) return <div className="spalte"><h1>Übung nicht gefunden</h1><a href="#/uebungen">Alle Übungen</a></div>;
  return (
    <div className="spalte">
      <p className="klein zurueck"><a href="#/uebungen"><span aria-hidden="true">←</span> Alle Übungen</a></p>
      <div className="artikel-kopf artikel-kopf--immer">
        <span className="wissen-karten__symbol">{UEBUNG_SYMBOL[u.id] ?? UEBUNG_SYMBOL.atmung}</span>
        <div>
          <p className="leise klein" style={{ margin: 0 }}>Übung · etwa {u.dauer}</p>
          <h1 style={{ margin: ".15rem 0 0" }}>{u.titel}</h1>
        </div>
      </div>
      <MerkKnopf id={u.id} titel={u.titel} />
      <Vorlesen />
      {u.einleitung.map((t, i) => <p key={i} className={i === 0 ? "einleitung" : undefined}>{t}</p>)}
      {u.achtung && <p className="hinweis-feld uebung-achtung">{u.achtung}</p>}
      {u.art === "atmung" && <Atmung />}
      {u.art === "checkliste" && <Checkliste u={u} />}
      {u.art === "schreiben" && <Schreiben u={u} />}
      {u.art === "schritte" && <Schritte u={u} />}
      {u.art === "gefuehle" && <Gefuehle u={u} />}
      <p className="kasten klein">
        Wenn dir eine Übung unangenehm ist, hör einfach auf. Wenn dich etwas über Wochen belastet,
        sprich mit deiner Hausärztin, deinem Hausarzt oder einer Fachperson. <a href="#/hilfe">Hilfe finden</a>
      </p>
      {u.quellen.length > 0 && (
        <div className="quellen">
          <p><strong>Quellen</strong></p>
          <ul>{u.quellen.map((q) => <li key={q.url}><a href={q.url} rel="noopener noreferrer" target="_blank">{q.text}</a></li>)}</ul>
        </div>
      )}
    </div>
  );
}
