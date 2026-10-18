import { useState, type ReactNode } from "react";
import { stimmeWaehlen, useStimmen } from "../components/Vorlesen";
import { REGIONEN } from "../content/hilfe";
import { AchsenWahl, BEREICH_NAMEN, Schalter } from "../components/IchIntro";
import { SYMBOLE, WISSEN_SYMBOLE } from "../components/Icons";
import { erinnerungIcs, FARBEN } from "../lib/ich";
import { useZustand } from "../lib/zustand";

const REITER: [string, string, ReactNode][] = [
  ["du", "Über dich", WISSEN_SYMBOLE.profil],
  ["bereich", "Mein Bereich", SYMBOLE.ich],
  ["ansicht", "Darstellung", WISSEN_SYMBOLE.farbe],
  ["erinnerung", "Erinnerung", WISSEN_SYMBOLE.glocke],
  ["daten", "Daten", WISSEN_SYMBOLE.schloss],
];

export default function Einstellungen() {
  const z = useZustand();
  const e = z.einstellungen;
  const [uhrzeit, setUhrzeit] = useState("20:00");
  const [loeschenFragen, setLoeschenFragen] = useState(false);
  const [meldung, setMeldung] = useState("");
  const [reiter, setReiter] = useState<string>(() => new URLSearchParams(window.location.hash.split("?")[1] ?? "").get("r") ?? "du");
  const stimmen = useStimmen();
  const probe = () => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance("Hallo. So klingt Neuroscope, wenn es dir Texte vorliest.");
    u.lang = "de-DE"; const v = stimmeWaehlen(e.stimme); if (v) u.voice = v; u.rate = e.tempo ?? 1;
    window.speechSynthesis.speak(u);
  };

  const erinnerung = () => {
    const adresse = `${window.location.origin}${window.location.pathname}#/ich`;
    const blob = new Blob([erinnerungIcs(uhrzeit, adresse)], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "neuroscope-erinnerung.ics";
    document.body.appendChild(a); a.click(); a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMeldung("Die Datei ist heruntergeladen. Öffne sie, um die Erinnerung in deinen Kalender zu übernehmen.");
  };

  return (
    <div className="spalte einstellungen">
      <p className="klein zurueck"><a href="#/ich"><span aria-hidden="true">←</span> Mein Bereich</a></p>
      <div className="artikel-kopf artikel-kopf--immer">
        <span className="wissen-karten__symbol">{WISSEN_SYMBOLE.zahnrad}</span>
        <h1 style={{ margin: 0 }}>Einstellungen</h1>
      </div>
      <p className="leise">Kein Konto, keine Anmeldung. Alles hier bleibt in diesem Browser.</p>
      <nav className="reiter" aria-label="Bereiche der Einstellungen">
        {REITER.map(([id, t, sym]) => (
          <button key={id} type="button" aria-pressed={reiter === id} onClick={() => setReiter(id)}>
            {sym}<span>{t}</span>
          </button>
        ))}
      </nav>

      {reiter === "du" && <section className="ich-karte reiter-inhalt" aria-labelledby="e-du">
        <h2 id="e-du">Über dich</h2>
        <label className="feld" htmlFor="e-name" style={{ marginTop: 0 }}>Wie dürfen wir dich nennen?</label>
        <input id="e-name" type="text" maxLength={30} autoComplete="given-name" value={e.name}
          onChange={(ev) => z.setEinstellungen({ name: ev.target.value })} placeholder="Vorname oder Spitzname (freiwillig)" />
        <p className="feld">Land</p>
        <div className="segment" role="group" aria-label="Land">
          {(["AT", "DE"] as const).map((l) => (
            <button key={l} type="button" aria-pressed={z.land === l}
              onClick={() => { z.setLand(l); z.setRegion(""); z.setEinstellungen({ land: l, region: "" }); }}>
              {l === "AT" ? "Österreich" : "Deutschland"}
            </button>
          ))}
        </div>
        <label className="feld" htmlFor="e-region">Bundesland</label>
        <select id="e-region" value={z.region} onChange={(ev) => { z.setRegion(ev.target.value); z.setEinstellungen({ region: ev.target.value, land: z.land }); }}>
          <option value="">Lieber nicht angeben</option>
          {REGIONEN[z.land].map((r) => <option key={r.name} value={r.name}>{r.name}</option>)}
        </select>
        <p className="hinweis-feld">Damit zeigt „Hilfe finden“ gleich die passenden Nummern.</p>
      </section>}

      {reiter === "bereich" && <section className="ich-karte reiter-inhalt" aria-labelledby="e-bereich">
        <h2 id="e-bereich">Mein Bereich</h2>
        <div className="schalter-liste">
          {BEREICH_NAMEN.map(([k, t, d]) => (
            <Schalter key={k} an={e.bereiche[k]} titel={t} text={d} aendern={(an) => z.setEinstellungen({ bereiche: { ...e.bereiche, [k]: an } })} />
          ))}
        </div>
        <h3 className="ich-unter">Beim täglichen Eintrag</h3>
        <div className="schalter-liste">
          <Schalter an={e.energie} titel="Energie mit abfragen" text="Sonst nur die Stimmung" aendern={(an) => z.setEinstellungen({ energie: an })} />
          <Schalter an={e.wort} titel="Ein Wort für den Tag" text="Freies Feld für ein Stichwort" aendern={(an) => z.setEinstellungen({ wort: an })} />
        </div>
        <p className="feld">Verlauf zeigt zuerst</p>
        <div className="segment" role="group" aria-label="Zeitraum">
          {([7, 14, 30] as const).map((n) => <button key={n} type="button" aria-pressed={e.zeitraum === n} onClick={() => z.setEinstellungen({ zeitraum: n })}>{n} Tage</button>)}
        </div>
        <h3 className="ich-unter">Lebensbereiche im Netz</h3>
        <AchsenWahl />
      </section>}

      {reiter === "ansicht" && <section className="ich-karte reiter-inhalt" aria-labelledby="e-ansicht">
        <h2 id="e-ansicht">Darstellung</h2>
        <fieldset style={{ border: 0, padding: 0, margin: "0 0 var(--s5)" }}>
          <legend className="feld" style={{ margin: 0, padding: 0 }}>Farbwelt</legend>
          <div className="farbwahl">
            {FARBEN.map((f) => (
              <label key={f.id} className="farbe">
                <input type="radio" name="farbe" checked={e.farbe === f.id} onChange={() => z.setEinstellungen({ farbe: f.id })} />
                <span className="farbe__muster" style={{ background: `linear-gradient(135deg, ${f.von}, ${f.bis})` }} aria-hidden="true" />
                {f.name}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="schalter-liste">
          <Schalter an={e.schrift === "gross"} titel="Größere Schrift" text="Für die ganze App" aendern={(an) => z.setEinstellungen({ schrift: an ? "gross" : "normal" })} />
          <Schalter an={e.ruhig} titel="Ruhige Darstellung" text="Ohne Animationen und Bewegung" aendern={(an) => z.setEinstellungen({ ruhig: an })} />
        </div>
        <h3 className="ich-unter">Vorlesen</h3>
        {stimmen.length === 0 ? (
          <p className="hinweis-feld">Dieser Browser bietet keine deutsche Stimme zum Vorlesen an.</p>
        ) : (
          <>
            <label className="feld" htmlFor="e-stimme" style={{ marginTop: 0 }}>Stimme</label>
            <select id="e-stimme" value={stimmeWaehlen(e.stimme)?.name ?? ""} onChange={(ev) => z.setEinstellungen({ stimme: ev.target.value })}>
              {stimmen.map((v) => <option key={v.name} value={v.name}>{v.name}{v.localService ? "" : " (über das Internet)"}</option>)}
            </select>
            <p className="hinweis-feld">Stimmen „über das Internet“ schicken den Text an den Anbieter deines Browsers. Die anderen laufen nur auf deinem Gerät.</p>
            <p className="feld">Tempo</p>
            <div className="segment" role="group" aria-label="Tempo">
              {([[0.85, "ruhig"], [1, "normal"], [1.15, "zügig"]] as const).map(([t, n]) => (
                <button key={n} type="button" aria-pressed={(e.tempo ?? 1) === t} onClick={() => z.setEinstellungen({ tempo: t })}>{n}</button>
              ))}
            </div>
            <div className="knopfreihe"><button type="button" className="knopf knopf--leise" onClick={probe}>Probe hören</button></div>
          </>
        )}
      </section>}

      {reiter === "erinnerung" && <section className="ich-karte reiter-inhalt" aria-labelledby="e-erinnerung">
        <h2 id="e-erinnerung">Tägliche Erinnerung</h2>
        <p className="leise" style={{ marginTop: 0 }}>
          Ein kurzer Termin in deinem eigenen Kalender, jeden Tag zur gleichen Zeit. Neuroscope schickt selbst nichts und weiß nichts davon.
        </p>
        <div className="erinnerung">
          <label htmlFor="e-zeit">Uhrzeit</label>
          <input id="e-zeit" type="time" value={uhrzeit} onChange={(ev) => setUhrzeit(ev.target.value || "20:00")} />
          <button type="button" className="knopf knopf--leise" onClick={erinnerung}>Für meinen Kalender herunterladen</button>
        </div>
        <p role="status" className="hinweis-feld">{meldung}</p>
      </section>}

      {reiter === "daten" && <section className="ich-karte reiter-inhalt" aria-labelledby="e-daten">
        <h2 id="e-daten">Speichern und Daten</h2>
        <div className="schalter-liste">
          <Schalter an={z.ichMerken} titel="Auf diesem Gerät merken"
            text={z.ichMerken ? "Einträge und Einstellungen bleiben hier, auch nach dem Schließen." : "Aus: Alles ist weg, wenn du den Tab schließt."}
            aendern={(an) => z.setIchMerken(an)} />
        </div>
        <p className="hinweis-feld">
          Manche Browser, vor allem Safari, löschen gespeicherte Daten nach einiger Zeit ohne Besuch.
          Für längere Zeit sicher ist nur eine <a href="#/sichern">verschlüsselte Sicherungsdatei</a>.
        </p>
        <div className="knopfreihe">
          <a className="knopf knopf--leise" href="#/sichern">Sicherungsdatei erstellen oder öffnen</a>
          <button type="button" className="knopf knopf--leise" onClick={() => { z.setEinstellungen({ intro: false }); window.location.hash = "#/ich"; }}>Einführung noch einmal zeigen</button>
        </div>
        <div className="loeschen">
          {loeschenFragen ? (
            <>
              <p style={{ margin: 0 }}>Wirklich alle Einträge, Lebensbereiche und Einstellungen aus „Mein Bereich“ löschen?</p>
              <div className="knopfreihe" style={{ marginTop: ".5rem" }}>
                <button type="button" className="knopf knopf--warn" onClick={() => { z.ichLoeschen(); setLoeschenFragen(false); setMeldung("Gelöscht."); }}>Ja, löschen</button>
                <button type="button" className="textknopf" onClick={() => setLoeschenFragen(false)}>Abbrechen</button>
              </div>
            </>
          ) : <button type="button" className="textknopf textknopf--warn" onClick={() => setLoeschenFragen(true)}>Alles in „Mein Bereich“ löschen</button>}
        </div>
      </section>}
    </div>
  );
}
