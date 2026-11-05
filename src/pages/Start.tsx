import { useEffect, useRef, useState } from "react";
import { useZustand } from "../lib/zustand";
import { STIMMUNG, eintragen, heute } from "../lib/ich";
import { KRISE } from "../content/hilfe";
import { UEBUNGEN } from "../content/uebungen";
import { WISSEN } from "../content/wissen";
import { VERSTEHEN } from "../content/verstehen";
import { WEGE, type Weg, type Ziel } from "../content/wegweiser";
import { SYMBOLE, UEBUNG_SYMBOL, WISSEN_SYMBOLE } from "../components/Icons";
import { Gesicht } from "./Ich";
import { createPortal } from "react-dom";
import { Blatt, tippen } from "../components/Blatt";
import { LEITSATZ } from "../content/zweck";

const symbol = (s: string) => SYMBOLE[s] ?? UEBUNG_SYMBOL[s] ?? WISSEN_SYMBOLE[s];

function gruss(name: string) {
  const h = new Date().getHours();
  const t = h < 5 ? "Gute Nacht" : h < 11 ? "Guten Morgen" : h < 18 ? "Hallo" : "Guten Abend";
  return name ? `${t}, ${name}` : t;
}

// „Heute“: der ruhige Einstieg. Eine Frage, ein Wegweiser, eine Minute Atmen.
export default function Start() {
  const z = useZustand();
  const name = z.einstellungen.name.trim();
  const [weg, setWeg] = useState<Weg | null>(null);
  const datum = new Date().toLocaleDateString("de-AT", { weekday: "long", day: "numeric", month: "long" });
  const begonnen = Object.keys(z.antworten).length > 0;
  const gut = UEBUNGEN.filter((u) => z.merkliste.includes(u.id));
  const plan = Object.values(z.krisenplan).some((l) => l.length > 0);
  // Der Leitsatz steht beim ersten Besuch unter der Begrüßung, danach nur noch unten.
  const [ersterBesuch] = useState(!z.einstellungen.zweck);
  const setE = useRef(z.setEinstellungen);
  setE.current = z.setEinstellungen;
  useEffect(() => { if (ersterBesuch) setE.current({ zweck: true }); }, [ersterBesuch]);

  const [atmen, setAtmen] = useState(false);

  return (
    <div className="heute">
      <header className="heute__kopf">
        <p className="heute__datum">{datum}</p>
        <h1>{gruss(name)}</h1>
        {ersterBesuch && <p className="heute__leitsatz">{LEITSATZ}</p>}
      </header>

      <Stimmung />

      <section className="heute-block" aria-labelledby="wegweiser-titel">
        <h2 id="wegweiser-titel" className="heute-block__titel">Was brauchst du gerade?</h2>
        <ul className="zeilen">
          {WEGE.map((w) => (
            <li key={w.id}>
              <button type="button" className="zeile" onClick={() => { tippen(); setWeg(w); }} aria-haspopup="dialog" data-hilfe={w.hilfe ? "ja" : undefined}>
                <span className="zeile__symbol" aria-hidden="true">{symbol(w.symbol)}</span>
                <span className="zeile__text">{w.titel}</span>
                <Pfeil />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="heute-block" aria-label="Für dich">
        <ul className="zeilen">
          <li>
            <button type="button" className="zeile" onClick={() => { tippen(); setAtmen(true); }}>
              <span className="zeile__atem" aria-hidden="true" />
              <span className="zeile__text">Eine Minute durchatmen<small>Vier Sekunden ein, sechs aus</small></span>
              <Pfeil />
            </button>
          </li>
          <li>
            <a className="zeile" href="#/reflexion">
              <span className="zeile__symbol" aria-hidden="true">{SYMBOLE.reflexion}</span>
              <span className="zeile__text">{begonnen ? "Selbstreflexion weitermachen" : "Selbstreflexion"}<small>Kurze Fragen, ohne Bewertung</small></span>
              <Pfeil />
            </a>
          </li>
          {plan && (
            <li>
              <a className="zeile" href="#/hilfe/krisenplan">
                <span className="zeile__symbol" aria-hidden="true">{SYMBOLE.hilfe}</span>
                <span className="zeile__text">Mein Krisenplan<small>Für schwere Momente</small></span>
                <Pfeil />
              </a>
            </li>
          )}
          {gut.slice(0, 3).map((u) => (
            <li key={u.id}>
              <a className="zeile" href={`#/uebungen/${u.id}`}>
                <span className="zeile__symbol" aria-hidden="true">{UEBUNG_SYMBOL[u.id]}</span>
                <span className="zeile__text">{u.titel}<small>Tut dir gut</small></span>
                <Pfeil />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="heute__fuss">
        <p>Kein Konto, keine Cloud. Alles bleibt auf deinem Gerät.</p>
      </footer>

      <Blatt offen={weg !== null} schliessen={() => setWeg(null)} titel={weg?.titel ?? ""}>
        {weg && <WegInhalt weg={weg} />}
      </Blatt>
      {atmen && <Atemraum schliessen={() => setAtmen(false)} />}
    </div>
  );
}

const Pfeil = () => (
  <svg className="zeile__pfeil" viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6 6 6-6 6" /></svg>
);

// Stimmung mit einem Tipp: fünf ruhige Punkte, ein Wort darunter.
function Stimmung() {
  const z = useZustand();
  const tag = heute();
  const eintrag = z.eintraege.find((e) => e.datum === tag);
  const waehlen = (s: number) => {
    tippen(15);
    z.setEintraege((alt) => eintragen(alt, { ...(alt.find((e) => e.datum === tag) ?? { datum: tag }), stimmung: s }));
  };
  const gewaehlt = eintrag?.stimmung;
  return (
    <section className="heute-block stimmung" aria-labelledby="stimmung-titel">
      <h2 id="stimmung-titel" className="heute-block__titel">Wie geht es dir gerade?</h2>
      <div className="stimmung__reihe" role="radiogroup" aria-labelledby="stimmung-titel">
        {STIMMUNG.map((s, i) => (
          <button key={s} type="button" role="radio" aria-checked={gewaehlt === i} aria-label={s} className="stimmung__punkt" onClick={() => waehlen(i)}>
            <Gesicht stufe={i} />
          </button>
        ))}
      </div>
      <p className="stimmung__wort" role="status">
        {gewaehlt === undefined ? <><span>schwer</span><span>gut</span></>
          : <span className="stimmung__gewaehlt">{STIMMUNG[gewaehlt]} · <a href="#/ich">mehr eintragen</a></span>}
      </p>
      {gewaehlt === 0 && (
        <p className="stimmung__schwer">Du musst da nicht allein durch. <a href="#/hilfe">Hilfe finden</a> oder <a href="#/hilfe/krisenplan">Mein Krisenplan</a>.</p>
      )}
      {gewaehlt !== undefined && !z.ichMerken && (
        <p className="stimmung__hinweis">Nur bis zum Schließen gemerkt. <a href="#/einstellungen">Auf diesem Gerät merken</a></p>
      )}
    </section>
  );
}

function WegInhalt({ weg }: { weg: Weg }) {
  const z = useZustand();
  const ziel = (x: Ziel) => {
    if (x.art === "uebung") {
      const u = UEBUNGEN.find((y) => y.id === x.id);
      return { href: `#/uebungen/${x.id}`, titel: u?.titel ?? x.id, symbol: UEBUNG_SYMBOL[x.id], neben: u ? `etwa ${u.dauer}` : "" };
    }
    if (x.art === "wissen") {
      const [id] = x.id.split("#");
      const w = [...WISSEN, ...VERSTEHEN].find((y) => y.id === id);
      return { href: `#/wissen/${x.id}`, titel: x.titel ?? w?.titel ?? id, symbol: SYMBOLE.wissen, neben: "Wissen" };
    }
    return { href: `#${x.id}`, titel: x.titel ?? x.id, symbol: x.id.includes("hilfe") ? SYMBOLE.hilfe : SYMBOLE[x.id.slice(1)], neben: "" };
  };
  return (
    <>
      {weg.hilfe && (
        <ul className="blatt-nummern">
          {KRISE[z.land].slice(0, 2).map((n) => (
            <li key={n.nummer}><span><strong>{n.was}</strong><small>{n.wann}</small></span><a className="tel" href={`tel:${n.tel}`}>{n.nummer}</a></li>
          ))}
        </ul>
      )}
      <ul className="blatt-ziele">
        {weg.ziele.map((x) => {
          const d = ziel(x);
          return (
            <li key={x.art + x.id}>
              <a href={d.href}>
                <span className="blatt-ziele__symbol" aria-hidden="true">{d.symbol}</span>
                <span className="blatt-ziele__text"><strong>{d.titel}</strong><span>{x.text}</span>{d.neben && <small>{d.neben}</small>}</span>
                <span className="blatt-ziele__pfeil" aria-hidden="true">›</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="hinweis-feld">Vorschläge passend zu deiner Wahl. Neuroscope schätzt dich nicht ein.</p>
    </>
  );
}

// Eine Minute durchatmen: ein eigener, stiller Raum über allem. 4 Sekunden ein, 6 aus, sechs Runden.
function Atemraum({ schliessen }: { schliessen: () => void }) {
  const [phase, setPhase] = useState<"start" | "ein" | "aus" | "fertig">("start");
  const [rest, setRest] = useState(4);
  const [runde, setRunde] = useState(1);
  const zu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let p: "ein" | "aus" = "ein", r = 1, s = 4;
    tippen(20);
    document.documentElement.classList.add("blatt-offen");
    zu.current?.focus();
    const los = window.requestAnimationFrame(() => window.requestAnimationFrame(() => setPhase("ein")));
    const t = window.setInterval(() => {
      s -= 1;
      if (s > 0) { setRest(s); return; }
      if (p === "ein") { p = "aus"; s = 6; tippen(8); }
      else if (r >= 6) { window.clearInterval(t); setPhase("fertig"); tippen(30); return; }
      else { p = "ein"; s = 4; r += 1; setRunde(r); tippen(20); }
      setPhase(p); setRest(s);
    }, 1000);
    const taste = (e: KeyboardEvent) => { if (e.key === "Escape") schliessen(); };
    window.addEventListener("keydown", taste);
    return () => { window.clearInterval(t); window.cancelAnimationFrame(los); window.removeEventListener("keydown", taste); document.documentElement.classList.remove("blatt-offen"); };
  }, [schliessen]);
  const fertig = phase === "fertig";
  return createPortal(
    <div className="atemraum" role="dialog" aria-modal="true" aria-label="Eine Minute durchatmen" data-phase={phase}>
      <button ref={zu} type="button" className="atemraum__zu" onClick={schliessen}>{fertig ? "Fertig" : "Beenden"}</button>
      <div className="atemraum__mitte">
        <div className="atemraum__kugel" aria-hidden="true"><span /></div>
        <p className="atemraum__wort" aria-live="polite">{fertig ? "Gut gemacht." : phase === "aus" ? "Ausatmen" : "Einatmen"}</p>
        <p className="atemraum__zahl" aria-hidden="true">{fertig ? "Spür kurz nach." : rest}</p>
      </div>
      <p className="atemraum__runde">{fertig ? "Eine Minute für dich" : `Runde ${runde} von 6`}</p>
    </div>,
    document.body,
  );
}
