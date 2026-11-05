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
import { Blatt, tippen } from "../components/Blatt";
import { LEITSATZ } from "../content/zweck";

const symbol = (s: string) => UEBUNG_SYMBOL[s] ?? WISSEN_SYMBOLE[s] ?? SYMBOLE[s];

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

  return (
    <div className="heute">
      <header className="heute__kopf">
        <p className="heute__datum">{datum}</p>
        <h1>{gruss(name)}</h1>
        {ersterBesuch && <p className="heute__leitsatz">{LEITSATZ}</p>}
      </header>

      <StimmungKarte />

      <section className="heute-karte" aria-labelledby="wegweiser-titel">
        <h2 id="wegweiser-titel">Was brauchst du gerade?</h2>
        <ul className="wege">
          {WEGE.map((w) => (
            <li key={w.id}>
              <button type="button" className={`weg${w.hilfe ? " weg--hilfe" : ""}`} onClick={() => { tippen(); setWeg(w); }} aria-haspopup="dialog">
                <span className="weg__symbol" aria-hidden="true">{symbol(w.symbol)}</span>
                <span>{w.titel}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Durchatmen />

      <section className="heute-karte heute-karte--leise" aria-labelledby="weiter-titel">
        <h2 id="weiter-titel" className="sr-only">Weiter</h2>
        <ul className="heute-links">
          <li><a href="#/reflexion"><span className="heute-links__symbol">{SYMBOLE.reflexion}</span><span><strong>{begonnen ? "Selbstreflexion weitermachen" : "Selbstreflexion beginnen"}</strong><small>Kurze Fragen, ohne Bewertung</small></span></a></li>
          {plan && <li><a href="#/hilfe/krisenplan"><span className="heute-links__symbol">{SYMBOLE.hilfe}</span><span><strong>Mein Krisenplan</strong><small>Für schwere Momente</small></span></a></li>}
          {gut.slice(0, 3).map((u) => (
            <li key={u.id}><a href={`#/uebungen/${u.id}`}><span className="heute-links__symbol">{UEBUNG_SYMBOL[u.id]}</span><span><strong>{u.titel}</strong><small>Tut dir gut</small></span></a></li>
          ))}
        </ul>
      </section>

      <details className="heute-mehr">
        <summary>Was Neuroscope ist und was nicht</summary>
        <p className="heute-mehr__leitsatz">{LEITSATZ}</p>
        <div className="grenze">
          <div>
            <h3>Neuroscope ist</h3>
            <ul><li>ein Spiegel für deine eigene Einschätzung</li><li>ein Einstieg in verlässliches Wissen</li><li>ein Wegweiser zu professioneller Hilfe</li></ul>
          </div>
          <div>
            <h3>Neuroscope ist nicht</h3>
            <ul><li>ein Test und keine Diagnose</li><li>ein Ersatz für ein Gespräch mit Fachleuten</li><li>eine Stelle, die mitliest oder dir antwortet</li></ul>
          </div>
        </div>
      </details>
      <p className="vertraulich heute__vertraulich">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
        <span>Kein Konto, keine Cloud. Alles bleibt auf deinem Gerät.</span>
      </p>

      <Blatt offen={weg !== null} schliessen={() => setWeg(null)} titel={weg?.titel ?? ""}>
        {weg && <WegInhalt weg={weg} />}
      </Blatt>
    </div>
  );
}

function StimmungKarte() {
  const z = useZustand();
  const tag = heute();
  const eintrag = z.eintraege.find((e) => e.datum === tag);
  const [aendern, setAendern] = useState(false);
  const gewaehlt = eintrag && !aendern;
  const waehlen = (s: number) => {
    tippen(15);
    z.setEintraege((alt) => eintragen(alt, { ...(alt.find((e) => e.datum === tag) ?? { datum: tag }), stimmung: s }));
    setAendern(false);
  };
  return (
    <section className="heute-karte stimmung-karte" aria-labelledby="stimmung-titel" data-gewaehlt={gewaehlt ? "ja" : undefined}>
      <h2 id="stimmung-titel">{gewaehlt ? "Heute festgehalten" : "Wie geht es dir gerade?"}</h2>
      {gewaehlt ? (
        <div className="stimmung-karte__danke" role="status">
          <span className={`stimmung-karte__gesicht stufe-${eintrag.stimmung}`}><Gesicht stufe={eintrag.stimmung} /></span>
          <div>
            <p><strong>{STIMMUNG[eintrag.stimmung]}</strong></p>
            <p className="stimmung-karte__aktionen">
              <a href="#/ich">Mehr eintragen</a>
              <button type="button" className="textknopf" onClick={() => setAendern(true)}>Ändern</button>
            </p>
          </div>
        </div>
      ) : (
        <div className="gesichter" role="group" aria-label="Stimmung wählen">
          {STIMMUNG.map((s, i) => (
            <button key={s} type="button" className="gesichter__knopf" aria-pressed={eintrag?.stimmung === i} onClick={() => waehlen(i)}>
              <Gesicht stufe={i} /><span>{s}</span>
            </button>
          ))}
        </div>
      )}
      {gewaehlt && eintrag.stimmung === 0 && (
        <p className="stimmung-karte__schwer">
          Das klingt nach einem schweren Tag. Du musst da nicht allein durch: <a href="#/hilfe">Hilfe finden</a>
          {" · "}<a href="#/hilfe/krisenplan">Mein Krisenplan</a>
        </p>
      )}
      {gewaehlt && !z.ichMerken && (
        <p className="hinweis-feld">Nur bis zum Schließen des Tabs gemerkt. <a href="#/einstellungen">Dauerhaft auf diesem Gerät merken</a></p>
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

// Eine Minute durchatmen, direkt hier: 4 Sekunden ein, 6 Sekunden aus, sechs Runden.
function Durchatmen() {
  const [laeuft, setLaeuft] = useState(false);
  const [phase, setPhase] = useState<"start" | "ein" | "aus">("start");
  const karte = useRef<HTMLElement>(null);
  const [rest, setRest] = useState(4);
  const [runde, setRunde] = useState(1);
  const [fertig, setFertig] = useState(false);
  useEffect(() => {
    if (!laeuft) return;
    let p: "ein" | "aus" = "ein", r = 1, s = 4;
    setPhase("start"); setRunde(1); setRest(4); tippen(20);
    // erst klein zeigen, dann wachsen lassen, damit das Einatmen sichtbar beginnt
    const los = window.requestAnimationFrame(() => window.requestAnimationFrame(() => setPhase("ein")));
    window.setTimeout(() => karte.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
    const t = window.setInterval(() => {
      s -= 1;
      if (s > 0) { setRest(s); return; }
      if (p === "ein") { p = "aus"; s = 6; tippen(8); }
      else if (r >= 6) { window.clearInterval(t); setLaeuft(false); setFertig(true); tippen(30); return; }
      else { p = "ein"; s = 4; r += 1; setRunde(r); tippen(20); }
      setPhase(p); setRest(s);
    }, 1000);
    return () => { window.clearInterval(t); window.cancelAnimationFrame(los); };
  }, [laeuft]);

  if (laeuft) return (
    <section ref={karte} className="heute-karte durchatmen durchatmen--laeuft" aria-labelledby="atmen-titel" data-phase={phase}>
      <h2 id="atmen-titel" className="sr-only">Eine Minute durchatmen</h2>
      <div className="atembuehne" aria-hidden="true">
        <span className="atembuehne__ziel" />
        <span className="atembuehne__welle" />
        <span className="atembuehne__wort"><strong>{phase === "aus" ? "Ausatmen" : "Einatmen"}</strong><span>{rest}</span></span>
      </div>
      <p className="sr-only" aria-live="polite">{phase === "aus" ? "Langsam ausatmen" : "Einatmen"}</p>
      <div className="durchatmen__fuss">
        <span>Runde {runde} von 6</span>
        <button type="button" className="textknopf" onClick={() => setLaeuft(false)}>Beenden</button>
      </div>
    </section>
  );
  return (
    <section className="heute-karte durchatmen" aria-labelledby="atmen-titel">
      <div className="durchatmen__text">
        <h2 id="atmen-titel">Eine Minute durchatmen</h2>
        <p role="status">{fertig ? "Gut gemacht. Spür kurz nach." : "Vier Sekunden ein, sechs aus. Ein Kreis zeigt dir den Takt."}</p>
      </div>
      <button type="button" className="durchatmen__start" onClick={() => { setFertig(false); setLaeuft(true); }} aria-label="Eine Minute atmen starten">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.5v11l9-5.5z" /></svg>
      </button>
    </section>
  );
}
