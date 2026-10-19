// Einführung in „Mein Bereich“: einmal durchklicken, danach nur noch auf Wunsch.
import { useState } from "react";
import { THEMEN } from "../content/reflexion";
import { REGIONEN } from "../content/hilfe";
import { themaSymbol, WISSEN_SYMBOLE } from "./Icons";
import { useZustand } from "../lib/zustand";
import type { Einstellungen } from "../lib/ich";

const SCHRITTE = ["Willkommen", "Über dich", "Was du sehen willst", "Merken"];

export const BEREICH_NAMEN: [keyof Einstellungen["bereiche"], string, string][] = [
  ["checkin", "Wie geht es dir heute?", "Stimmung und Energie in zwei Klicks festhalten"],
  ["verlauf", "Dein Verlauf", "Linie und Kalender über die Tage"],
  ["gefuehle", "Deine Gefühle", "Gefühlswörter aus der Übung „Gefühle benennen“"],
  ["hilft", "Was mir guttut", "Übungen, die du mit einem Herz markiert hast"],
  ["rad", "Deine Lebensbereiche", "Eigene Einschätzung als Netz, mit Vergleich"],
  ["muster", "Selbstreflexion auf einen Blick", "Deine Antworten als Punktreihen"],
];

export function IchIntro({ fertig }: { fertig: () => void }) {
  const z = useZustand();
  const e = z.einstellungen;
  const [schritt, setSchritt] = useState(0);
  const letzter = schritt === SCHRITTE.length - 1;
  const abschliessen = (merken: boolean) => {
    if (merken && !z.ichMerken) z.setIchMerken(true);
    z.setEinstellungen({ intro: true });
    fertig();
  };

  return (
    <section className="intro" aria-labelledby="intro-titel">
      <ol className="intro__punkte" aria-label={`Schritt ${schritt + 1} von ${SCHRITTE.length}`}>
        {SCHRITTE.map((s, i) => <li key={s} className={i === schritt ? "aktiv" : i < schritt ? "erledigt" : undefined}><span className="sr-only">{s}</span></li>)}
      </ol>

      <div className="intro__schritt" key={schritt}>
        {schritt === 0 && (
          <>
            <h1 id="intro-titel">Dein Bereich</h1>
            <p className="einleitung">Hier siehst du, was du selbst einträgst, als Bild statt als Text.</p>
            <ul className="intro__liste">
              <li><span className="wissen-karten__symbol">{WISSEN_SYMBOLE.stimmung}</span><span><strong>Kurz festhalten</strong>Wie es dir heute geht, in zwei Klicks.</span></li>
              <li><span className="wissen-karten__symbol">{WISSEN_SYMBOLE.tagesablauf}</span><span><strong>Verlauf sehen</strong>Wie sich Stimmung und Energie über die Tage verändern.</span></li>
              <li><span className="wissen-karten__symbol">{WISSEN_SYMBOLE.staerken}</span><span><strong>Lebensbereiche einschätzen</strong>Wo du zufrieden bist und wo nicht, ganz aus deiner Sicht.</span></li>
            </ul>
            <p className="intro__notiz">Neuroscope rechnet nichts aus und bewertet nichts. Es zeigt nur, was du selbst angibst.</p>
          </>
        )}

        {schritt === 1 && (
          <>
            <h1 id="intro-titel">Ein bisschen über dich</h1>
            <p className="leise">Beides ist freiwillig.</p>
            <label className="feld" htmlFor="intro-name">Wie dürfen wir dich nennen?</label>
            <input id="intro-name" type="text" maxLength={30} autoComplete="given-name" value={e.name}
              onChange={(ev) => z.setEinstellungen({ name: ev.target.value })} placeholder="Vorname oder Spitzname" />
            <p className="feld">Wo bist du zuhause?</p>
            <div className="segment" role="group" aria-label="Land">
              {(["AT", "DE"] as const).map((l) => (
                <button key={l} type="button" aria-pressed={z.land === l}
                  onClick={() => { z.setLand(l); z.setRegion(""); z.setEinstellungen({ land: l, region: "" }); }}>
                  {l === "AT" ? "Österreich" : "Deutschland"}
                </button>
              ))}
            </div>
            <label className="feld" htmlFor="intro-region">{z.land === "AT" ? "Bundesland" : "Bundesland"} <span className="leise" style={{ fontWeight: 400 }}>(für passende Hilfe in deiner Nähe)</span></label>
            <select id="intro-region" value={z.region} onChange={(ev) => { z.setRegion(ev.target.value); z.setEinstellungen({ region: ev.target.value, land: z.land }); }}>
              <option value="">Lieber nicht angeben</option>
              {REGIONEN[z.land].map((r) => <option key={r.name} value={r.name}>{r.name}</option>)}
            </select>
          </>
        )}

        {schritt === 2 && (
          <>
            <h1 id="intro-titel">Was möchtest du sehen?</h1>
            <p className="leise">Du kannst das später in den Einstellungen jederzeit ändern.</p>
            <div className="schalter-liste">
              {BEREICH_NAMEN.map(([k, t, d]) => (
                <Schalter key={k} an={e.bereiche[k]} titel={t} text={d}
                  aendern={(an) => z.setEinstellungen({ bereiche: { ...e.bereiche, [k]: an } })} />
              ))}
            </div>
            <details className="tabelle" style={{ marginTop: "1rem" }}>
              <summary>Welche Lebensbereiche im Netz?</summary>
              <AchsenWahl />
            </details>
          </>
        )}

        {schritt === 3 && (
          <>
            <h1 id="intro-titel">Soll sich Neuroscope das merken?</h1>
            <p className="leise">Damit du einen Verlauf über mehrere Tage siehst, müssen deine Einträge auf diesem Gerät bleiben.</p>
            <div className="wahlkarten">
              <button type="button" className="wahlkarte wahlkarte--haupt" onClick={() => abschliessen(true)}>
                <strong>Auf diesem Gerät merken</strong>
                <span>Bleibt nur hier, verlässt das Gerät nie. Jederzeit löschbar.</span>
              </button>
              <button type="button" className="wahlkarte" onClick={() => abschliessen(false)}>
                <strong>Nur für jetzt</strong>
                <span>Alles ist weg, wenn du den Tab schließt. Diese Einführung kommt dann beim nächsten Mal wieder.</span>
              </button>
            </div>
            <p className="hinweis-feld">
              Manche Browser, vor allem Safari, löschen gespeicherte Daten nach einiger Zeit ohne Besuch. Für längere Zeit sicher ist nur eine{" "}
              <a href="#/sichern">verschlüsselte Sicherungsdatei</a>.
            </p>
          </>
        )}
      </div>

      <div className="intro__knoepfe">
        {schritt > 0 ? <button type="button" className="textknopf" onClick={() => setSchritt(schritt - 1)}>Zurück</button>
          : <button type="button" className="textknopf" onClick={() => { z.setEinstellungen({ intro: true }); fertig(); }}>Überspringen</button>}
        {!letzter && <button type="button" className="knopf" onClick={() => setSchritt(schritt + 1)}>Weiter</button>}
      </div>
    </section>
  );
}

export function Schalter({ an, titel, text, aendern }: { an: boolean; titel: string; text?: string; aendern: (an: boolean) => void }) {
  return (
    <label className="schalter">
      <span className="schalter__text"><strong>{titel}</strong>{text && <span>{text}</span>}</span>
      <input type="checkbox" role="switch" checked={an} onChange={(ev) => aendern(ev.target.checked)} />
      <span className="schalter__bahn" aria-hidden="true"><span /></span>
    </label>
  );
}

export function AchsenWahl() {
  const z = useZustand();
  const e = z.einstellungen;
  return (
    <div className="achsen-wahl">
      {THEMEN.map((t) => {
        const an = e.achsen.includes(t.id);
        return (
          <label key={t.id} className={`achse-chip${an ? " an" : ""}`}>
            <input type="checkbox" checked={an} onChange={() => {
              const neu = an ? e.achsen.filter((a) => a !== t.id) : THEMEN.map((x) => x.id).filter((id) => id === t.id || e.achsen.includes(id));
              if (neu.length >= 3) z.setEinstellungen({ achsen: neu });
            }} />
            {themaSymbol(t.id)}<span>{t.titel}</span>
          </label>
        );
      })}
      <p className="hinweis-feld" style={{ width: "100%" }}>Mindestens drei Bereiche, damit ein Netz entsteht.</p>
    </div>
  );
}
