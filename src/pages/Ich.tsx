import { useState } from "react";
import { HAEUFIGKEIT, THEMEN } from "../content/reflexion";
import { Kalender, Netz, Punktreihe, Verlauf, type Achse } from "../components/Diagramme";
import { themaSymbol } from "../components/Icons";
import { ENERGIE, STIMMUNG, datumLang, eintragen, heute, tageZurueck } from "../lib/ich";
import { schluessel } from "../lib/spiegel";
import { useZustand } from "../lib/zustand";

const KURZ: Record<string, string> = {
  schlaf: "Schlaf", energie: "Energie", stress: "Belastung", stimmung: "Stimmung",
  beziehungen: "Beziehungen", alltag: "Alltag", gewohnheiten: "Gewohnheiten", staerken: "Kraftquellen",
};
const FRAGE_RAD: Record<string, string> = {
  stress: "Umgang mit Belastung",
};
const ACHSEN: Achse[] = THEMEN.map((t) => ({ id: t.id, kurz: KURZ[t.id] ?? t.titel }));

// Gesichter für die Stimmungsauswahl: eigene, schlichte Linien.
function Gesicht({ stufe }: { stufe: number }) {
  const mund = ["M8 16.5c1.2-1.6 2.5-2.2 4-2.2s2.8.6 4 2.2", "M8.5 16c1-.9 2.2-1.3 3.5-1.3s2.5.4 3.5 1.3", "M8.5 15.5h7", "M8.5 14.8c1 .9 2.2 1.3 3.5 1.3s2.5-.4 3.5-1.3", "M8 14.5c1.2 1.7 2.5 2.4 4 2.4s2.8-.7 4-2.4"][stufe];
  return (
    <svg className="symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><path d="M9 9.8v.4M15 9.8v.4" strokeWidth="2.2" /><path d={mund} />
    </svg>
  );
}
function Akku({ stufe }: { stufe: number }) {
  return (
    <svg className="symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="16" height="10" rx="2" /><path d="M21 10.5v3" />
      {stufe > 0 && <rect x="5.5" y="9.5" width={(stufe / 4) * 11} height="5" rx="1" fill="currentColor" stroke="none" />}
    </svg>
  );
}

export default function Ich() {
  const z = useZustand();
  const heuteTag = heute();
  const vorhanden = z.eintraege.find((e) => e.datum === heuteTag);
  const [stimmung, setStimmung] = useState<number | undefined>(vorhanden?.stimmung);
  const [energie, setEnergie] = useState<number | undefined>(vorhanden?.energie);
  const [wort, setWort] = useState(vorhanden?.wort ?? "");
  const [gespeichert, setGespeichert] = useState(false);
  const [zeitraum, setZeitraum] = useState(14);

  const letzterRad = z.rad[z.rad.length - 1];
  const [werte, setWerte] = useState<Record<string, number>>(() => letzterRad?.werte ?? Object.fromEntries(THEMEN.map((t) => [t.id, 5])));
  const [radGespeichert, setRadGespeichert] = useState(false);
  const frueher = z.rad.filter((r) => r.datum !== heuteTag);
  const [vergleichDatum, setVergleichDatum] = useState<string>(frueher[frueher.length - 1]?.datum ?? "");
  const vergleich = frueher.find((r) => r.datum === vergleichDatum);

  const eintragenKlick = () => {
    if (stimmung === undefined || energie === undefined) return;
    z.setEintraege((alt) => eintragen(alt, { datum: heuteTag, stimmung, energie, wort: wort.trim() || undefined }));
    setGespeichert(true);
    window.setTimeout(() => setGespeichert(false), 2400);
  };
  const radFesthalten = () => {
    z.setRad((alt) => [...alt.filter((r) => r.datum !== heuteTag), { datum: heuteTag, werte }].sort((a, b) => a.datum.localeCompare(b.datum)));
    setRadGespeichert(true);
    window.setTimeout(() => setRadGespeichert(false), 2400);
  };

  const beantwortet = THEMEN.map((t) => ({ t, n: t.fragen.filter((f) => z.antworten[schluessel(t.id, f.id)] !== undefined).length }));

  return (
    <div className="spalte spalte--breit ich">
      <h1>Mein Bereich</h1>
      <p className="einleitung">
        Hier siehst du, was du selbst eingetragen hast, als Bild statt als Text. Neuroscope rechnet nichts aus und bewertet nichts.
      </p>

      <SpeicherKarte />

      {/* ---------- Check-in ---------- */}
      <section className="ich-karte" aria-labelledby="heute-titel">
        <h2 id="heute-titel">Wie geht es dir heute?</h2>
        <p className="leise klein" style={{ marginTop: 0 }}>{datumLang(heuteTag)}{vorhanden ? " · bereits eingetragen, du kannst es ändern" : ""}</p>
        <fieldset className="wahl">
          <legend>Stimmung</legend>
          <div className="wahl__reihe">
            {STIMMUNG.map((s, i) => (
              <label key={s} className="wahl__feld">
                <input type="radio" name="stimmung" checked={stimmung === i} onChange={() => setStimmung(i)} />
                <span className="wahl__knopf"><Gesicht stufe={i} /><span>{s}</span></span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="wahl">
          <legend>Energie</legend>
          <div className="wahl__reihe">
            {ENERGIE.map((s, i) => (
              <label key={s} className="wahl__feld">
                <input type="radio" name="energie" checked={energie === i} onChange={() => setEnergie(i)} />
                <span className="wahl__knopf"><Akku stufe={i} /><span>{s}</span></span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="feld" htmlFor="wort">Ein Wort für heute <span className="leise" style={{ fontWeight: 400 }}>(freiwillig)</span></label>
        <input id="wort" type="text" maxLength={40} value={wort} onChange={(e) => setWort(e.target.value)} placeholder="zum Beispiel: müde, dankbar, unruhig" />
        <div className="knopfreihe">
          <button className={`knopf${gespeichert ? " knopf--erledigt" : ""}`} type="button" onClick={eintragenKlick} disabled={stimmung === undefined || energie === undefined}>
            {gespeichert ? <><Haken /> Eingetragen</> : vorhanden ? "Eintrag aktualisieren" : "Eintragen"}
          </button>
        </div>
        <p className="sr-only" role="status">{gespeichert ? "Dein Eintrag für heute ist gespeichert." : ""}</p>
      </section>

      {/* ---------- Verlauf ---------- */}
      <section className="ich-karte" aria-labelledby="verlauf-titel">
        <div className="ich-karte__kopf">
          <h2 id="verlauf-titel">Dein Verlauf</h2>
          <div className="segment" role="group" aria-label="Zeitraum">
            {[7, 14, 30].map((n) => <button key={n} type="button" aria-pressed={zeitraum === n} onClick={() => setZeitraum(n)}>{n} Tage</button>)}
          </div>
        </div>
        {z.eintraege.length === 0 ? (
          <Leer text="Sobald du oben etwas einträgst, entsteht hier dein Verlauf. Ein Eintrag am Tag reicht." />
        ) : (
          <>
            <Verlauf tage={tageZurueck(zeitraum)} eintraege={z.eintraege} />
            <h3 className="ich-unter">Die letzten fünf Wochen</h3>
            <Kalender eintraege={z.eintraege} />
          </>
        )}
        {!z.ichMerken && z.eintraege.length > 0 && (
          <p className="hinweis-feld">Ohne „Auf diesem Gerät merken“ verschwinden die Einträge, wenn du den Tab schließt.</p>
        )}
      </section>

      {/* ---------- Lebensrad ---------- */}
      <section className="ich-karte" aria-labelledby="rad-titel">
        <h2 id="rad-titel">Deine Lebensbereiche</h2>
        <p className="leise" style={{ marginTop: 0 }}>
          Wie zufrieden bist du gerade mit diesen Bereichen deines Lebens? 0 heißt gar nicht, 10 heißt völlig. Es zählt nur deine eigene Sicht.
        </p>
        <div className="rad">
          <Netz achsen={ACHSEN} jetzt={werte} vergleich={vergleich?.werte} />
          <div className="rad__regler">
            {THEMEN.map((t) => (
              <label key={t.id} className="regler">
                <span className="regler__kopf">
                  <span className="regler__symbol">{themaSymbol(t.id)}</span>
                  <span className="regler__name">{FRAGE_RAD[t.id] ?? t.titel}</span>
                  <output className="regler__wert">{werte[t.id]}</output>
                </span>
                <input type="range" min={0} max={10} step={1} value={werte[t.id]}
                  onChange={(e) => setWerte((w) => ({ ...w, [t.id]: Number(e.target.value) }))}
                  aria-valuetext={`${werte[t.id]} von 10`} />
              </label>
            ))}
          </div>
        </div>
        <div className="knopfreihe">
          <button className={`knopf${radGespeichert ? " knopf--erledigt" : ""}`} type="button" onClick={radFesthalten}>
            {radGespeichert ? <><Haken /> Festgehalten</> : "Diesen Stand festhalten"}
          </button>
          {frueher.length > 0 && (
            <label className="vergleich">
              <span className="vergleich__linie" aria-hidden="true" />
              Vergleichen mit
              <select value={vergleichDatum} onChange={(e) => setVergleichDatum(e.target.value)}>
                <option value="">keinem früheren Stand</option>
                {[...frueher].reverse().map((r) => <option key={r.datum} value={r.datum}>{datumLang(r.datum)}</option>)}
              </select>
            </label>
          )}
        </div>
        <p className="sr-only" role="status">{radGespeichert ? "Dein Stand ist festgehalten." : ""}</p>
      </section>

      {/* ---------- Selbstreflexion auf einen Blick ---------- */}
      <section className="ich-karte" aria-labelledby="muster-titel">
        <h2 id="muster-titel">Deine Selbstreflexion auf einen Blick</h2>
        <p className="leise" style={{ marginTop: 0 }}>
          Jede Punktreihe ist eine Frage, von „nie“ links bis „fast immer“ rechts. Der gefüllte Punkt ist deine Antwort.
        </p>
        <ul className="muster">
          {beantwortet.map(({ t, n }) => {
            const marks = z.markierungen[t.id] ?? [];
            return (
              <li key={t.id}>
                <details>
                  <summary>
                    <span className="wissen-karten__symbol">{themaSymbol(t.id)}</span>
                    <span className="muster__titel">
                      <strong>{t.titel}</strong>
                      <span className="muster__reihen" aria-hidden="true">
                        {t.fragen.map((f) => <Punktreihe key={f.id} wert={z.antworten[schluessel(t.id, f.id)]} stufen={HAEUFIGKEIT} />)}
                      </span>
                      <span className="leise klein">
                        {n} von {t.fragen.length} beantwortet
                        {marks.includes("kraft") && <span className="marke-chip marke-chip--kraft">gibt mir Kraft</span>}
                        {marks.includes("beschaeftigt") && <span className="marke-chip">beschäftigt mich</span>}
                      </span>
                    </span>
                  </summary>
                  <ul className="muster__fragen">
                    {t.fragen.map((f) => {
                      const w = z.antworten[schluessel(t.id, f.id)];
                      return (
                        <li key={f.id}>
                          <span>{f.frage}</span>
                          <span className="muster__antwort"><Punktreihe wert={w} stufen={HAEUFIGKEIT} /><span className="klein leise">{w === undefined ? "offen" : HAEUFIGKEIT[w]}</span></span>
                        </li>
                      );
                    })}
                  </ul>
                  <a className="textknopf" href={`#/reflexion/${t.id}`}>{n < t.fragen.length ? "Weiter beantworten" : "Antworten ansehen oder ändern"}</a>
                </details>
              </li>
            );
          })}
        </ul>
        <div className="knopfreihe">
          <a className="knopf knopf--leise" href="#/spiegel">Persönlicher Spiegel in Worten</a>
          <a className="knopf knopf--leise" href="#/gespraech">Gesprächsvorbereitung</a>
        </div>
      </section>
    </div>
  );
}

function SpeicherKarte() {
  const z = useZustand();
  const [fragen, setFragen] = useState(false);
  if (z.ichMerken) {
    return (
      <div className="speicher speicher--an">
        <span className="speicher__punkt" aria-hidden="true" />
        <p>
          Deine Einträge hier werden <strong>auf diesem Gerät gemerkt</strong>. Nur hier, nirgendwo sonst.
          <span className="speicher__hinweis">
            Manche Browser, vor allem Safari, löschen gespeicherte Daten nach einiger Zeit ohne Besuch. Sichere deinen Verlauf
            deshalb ab und zu <a href="#/sichern">als verschlüsselte Datei</a>.
          </span>
        </p>
        <div className="speicher__knoepfe">
          <button className="textknopf" type="button" onClick={() => z.setIchMerken(false)}>Nicht mehr merken</button>
          {fragen ? (
            <>
              <button className="textknopf textknopf--warn" type="button" onClick={() => { z.ichLoeschen(); setFragen(false); }}>Ja, alles hier löschen</button>
              <button className="textknopf" type="button" onClick={() => setFragen(false)}>Abbrechen</button>
            </>
          ) : <button className="textknopf" type="button" onClick={() => setFragen(true)}>Löschen</button>}
        </div>
      </div>
    );
  }
  return (
    <div className="speicher">
      <div>
        <p style={{ margin: 0 }}><strong>Möchtest du einen Verlauf über mehrere Tage sehen?</strong></p>
        <p className="leise klein" style={{ margin: ".25rem 0 0" }}>
          Dann kann sich Neuroscope deine Einträge in diesem Bereich auf diesem Gerät merken. Sie verlassen das Gerät nie und lassen sich jederzeit löschen.
          Ohne Zustimmung gilt alles nur, bis du den Tab schließt. Für längere Zeit sicher ist nur eine <a href="#/sichern">Sicherungsdatei</a>.
        </p>
      </div>
      <button className="knopf" type="button" onClick={() => z.setIchMerken(true)}>Auf diesem Gerät merken</button>
    </div>
  );
}

function Leer({ text }: { text: string }) {
  return (
    <div className="leer">
      <svg viewBox="0 0 120 60" aria-hidden="true"><path d="M4 50 C 24 50, 30 22, 50 26 S 80 46, 96 18 L 116 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 7" /></svg>
      <p>{text}</p>
    </div>
  );
}

function Haken() {
  return <svg className="haken" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;
}
