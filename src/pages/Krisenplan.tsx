import { useState } from "react";
import { useZustand } from "../lib/zustand";
import { KRISE } from "../content/hilfe";
import { KRISENPLAN_QUELLEN, PLAN_SCHRITTE, type Kontakt, type PlanSchritt } from "../content/krisenplan";
import { Schalter } from "../components/IchIntro";

const telLink = (n: string) => `tel:${n.replace(/[^0-9+]/g, "")}`;

export default function Krisenplan() {
  const z = useZustand();
  const p = z.krisenplan;
  const leer = PLAN_SCHRITTE.every((s) => p[s.id].length === 0);
  const [ansicht, setAnsicht] = useState<"lesen" | "bearbeiten">(leer ? "bearbeiten" : "lesen");
  const [loeschenFragen, setLoeschenFragen] = useState(false);
  const krise = KRISE[z.land];

  return (
    <div className="spalte krisenplan">
      <p className="klein zurueck"><a href="#/hilfe"><span aria-hidden="true">←</span> Hilfe finden</a></p>
      <h1>Mein Krisenplan</h1>
      <p className="einleitung">
        Ein Plan für schwere Momente. Du schreibst ihn in einer ruhigen Zeit, damit du ihn in einer Krise nur noch lesen musst.
        Schritt für Schritt: erst das, was du selbst tun kannst, dann Menschen, dann Fachleute.
      </p>

      <div className="krisenplan__leiste">
        <div className="segment" role="group" aria-label="Ansicht">
          <button type="button" aria-pressed={ansicht === "lesen"} onClick={() => setAnsicht("lesen")} disabled={leer}>Ansehen</button>
          <button type="button" aria-pressed={ansicht === "bearbeiten"} onClick={() => setAnsicht("bearbeiten")}>Bearbeiten</button>
        </div>
        {!leer && <button type="button" className="knopf knopf--leise" onClick={() => window.print()}>Drucken</button>}
      </div>

      {ansicht === "lesen" && !leer ? (
        <ol className="plan-lesen">
          {PLAN_SCHRITTE.filter((s) => p[s.id].length > 0 || s.id === "fachleute").map((s, i) => {
            const liste = p[s.id];
            const zusatz = s.id === "fachleute" ? krise.slice(0, 2) : [];
            const mehr = s.id === "fachleute" ? krise.slice(2) : [];
            return (
              <li key={s.id} className="plan-lesen__schritt">
                <span className="plan-nr" aria-hidden="true">{i + 1}</span>
                <div>
                  <h2>{s.titel}</h2>
                  {s.kontakte ? (
                    <ul className="plan-kontakte">
                      {(liste as Kontakt[]).map((k) => <KontaktZeile key={k.name + k.nummer} k={k} />)}
                      {zusatz.map((n) => <KontaktZeile key={n.nummer} k={{ name: n.was, nummer: n.nummer }} tel={n.tel} wann={n.wann} />)}
                    </ul>
                  ) : (
                    <ul className="plan-punkte">{(liste as string[]).map((t) => <li key={t}>{t}</li>)}</ul>
                  )}
                  {mehr.length > 0 && (
                    <details className="plan-mehr">
                      <summary>Weitere Krisennummern</summary>
                      <ul className="plan-kontakte">{mehr.map((n) => <KontaktZeile key={n.nummer} k={{ name: n.was, nummer: n.nummer }} tel={n.tel} wann={n.wann} />)}</ul>
                    </details>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="plan-bearbeiten">
          {PLAN_SCHRITTE.map((s, i) => <SchrittBearbeiten key={s.id} s={s} nr={i + 1} />)}
          {!leer && <div className="knopfreihe"><button type="button" className="knopf" onClick={() => { setAnsicht("lesen"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Fertig, Plan ansehen</button></div>}
        </div>
      )}

      <section className="ich-karte" aria-labelledby="plan-speicher">
        <h2 id="plan-speicher" className="sr-only">Speichern</h2>
        <Schalter an={z.krisenplanMerken} aendern={z.setKrisenplanMerken} titel="Auf diesem Gerät aufbewahren"
          text={z.krisenplanMerken ? "Dein Plan bleibt auf diesem Gerät, auch nach dem Schließen. Er verlässt es nie." : "Sonst ist der Plan weg, sobald du den Tab schließt. Er verlässt dieses Gerät nie."} />
        <p className="klein leise" style={{ margin: ".75rem 0 0" }}>
          Tipp: Druck den Plan aus oder mach ein Foto davon. Leg eine Kopie dorthin, wo du sie findest, und gib eine einem Menschen, dem du vertraust.
        </p>
        {!leer && (loeschenFragen ? (
          <div className="knopfreihe">
            <button type="button" className="knopf knopf--warn" onClick={() => { z.krisenplanLoeschen(); setLoeschenFragen(false); setAnsicht("bearbeiten"); }}>Ja, Plan löschen</button>
            <button type="button" className="knopf knopf--leise" onClick={() => setLoeschenFragen(false)}>Abbrechen</button>
          </div>
        ) : <p style={{ margin: ".75rem 0 0" }}><button type="button" className="textknopf" onClick={() => setLoeschenFragen(true)}>Plan löschen</button></p>)}
      </section>

      <p className="kasten klein">
        Der Plan ersetzt keine Hilfe. Bei akuter Gefahr ruf 144 in Österreich oder 112 in Deutschland.
        Neuroscope liest nicht mit und kann niemanden verständigen. Den Plan gemeinsam mit einer Fachperson
        zu schreiben, ist oft noch hilfreicher.
      </p>
      <div className="quellen">
        <p><strong>Grundlage</strong></p>
        <ul>{KRISENPLAN_QUELLEN.map((q) => <li key={q.url}><a href={q.url} target="_blank" rel="noopener noreferrer">{q.text}</a></li>)}</ul>
      </div>
    </div>
  );
}

function KontaktZeile({ k, tel, wann }: { k: Kontakt; tel?: string; wann?: string }) {
  return (
    <li>
      <span className="plan-kontakte__name">{k.name}{wann && <small>{wann}</small>}</span>
      {k.nummer && <a className="tel" href={tel ? `tel:${tel}` : telLink(k.nummer)} aria-label={`${k.name} anrufen: ${k.nummer}`}>{k.nummer}</a>}
    </li>
  );
}

function SchrittBearbeiten({ s, nr }: { s: PlanSchritt; nr: number }) {
  const z = useZustand();
  const liste = z.krisenplan[s.id] as (string | Kontakt)[];
  const [text, setText] = useState("");
  const [nummer, setNummer] = useState("");
  const setze = (neu: (string | Kontakt)[]) => z.setKrisenplan((alt) => ({ ...alt, [s.id]: neu }));
  const dazu = (wert: string | Kontakt) => {
    const name = typeof wert === "string" ? wert.trim() : wert.name.trim();
    if (!name) return;
    if (liste.some((x) => (typeof x === "string" ? x : x.name) === name)) return;
    setze([...liste, typeof wert === "string" ? name : { name, nummer: wert.nummer.trim() }]);
  };
  const id = `plan-${s.id}`;
  return (
    <section className="plan-schritt" aria-labelledby={`${id}-t`}>
      <div className="plan-schritt__kopf">
        <span className="plan-nr" aria-hidden="true">{nr}</span>
        <div>
          <h2 id={`${id}-t`}>{s.titel}</h2>
          <p className="plan-schritt__frage">{s.frage}</p>
        </div>
      </div>
      <p className="klein leise">{s.hinweis}</p>
      {liste.length > 0 && (
        <ul className="plan-liste">
          {liste.map((x, i) => {
            const name = typeof x === "string" ? x : x.name;
            return (
              <li key={name}>
                <span>{name}{typeof x !== "string" && x.nummer && <span className="leise"> · {x.nummer}</span>}</span>
                <button type="button" className="plan-liste__weg" aria-label={`Entfernen: ${name}`} onClick={() => setze(liste.filter((_, j) => j !== i))}>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" /></svg>
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {s.id === "fachleute" && (
        <p className="klein leise" style={{ margin: ".25rem 0 .5rem" }}>Schon im Plan: die Krisennummern für {z.land === "AT" ? "Österreich" : "Deutschland"}.</p>
      )}
      <form className={s.kontakte ? "plan-eingabe plan-eingabe--kontakt" : "plan-eingabe"}
        onSubmit={(e) => { e.preventDefault(); dazu(s.kontakte ? { name: text, nummer } : text); setText(""); setNummer(""); }}>
        <label className="sr-only" htmlFor={`${id}-text`}>{s.kontakte ? "Name" : s.frage}</label>
        <input id={`${id}-text`} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={s.kontakte ? "Name" : "Eigener Eintrag"} />
        {s.kontakte && <>
          <label className="sr-only" htmlFor={`${id}-nr`}>Telefonnummer</label>
          <input id={`${id}-nr`} type="tel" inputMode="tel" value={nummer} onChange={(e) => setNummer(e.target.value)} placeholder="Telefonnummer" />
        </>}
        <button type="submit" className="knopf knopf--leise" disabled={!text.trim()}>Hinzufügen</button>
      </form>
      {s.ideen.length > 0 && (
        <div className="plan-ideen" aria-label="Ideen zum Übernehmen">
          {s.ideen.filter((i) => !liste.includes(i)).map((i) => (
            <button key={i} type="button" className="plan-idee" onClick={() => dazu(i)}><span aria-hidden="true">+</span> {i}</button>
          ))}
        </div>
      )}
    </section>
  );
}
