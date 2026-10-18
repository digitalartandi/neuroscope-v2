import { useRef, useState } from "react";
import { entschluesseln, herunterladen, verschluesseln } from "../lib/datei";
import { useZustand } from "../lib/zustand";

export default function Sichern() {
  const { sicherung, laden } = useZustand();
  const [pw1, setPw1] = useState(""); const [pw2, setPw2] = useState("");
  const [pwLaden, setPwLaden] = useState("");
  const [meldung, setMeldung] = useState(""); const [fehler, setFehler] = useState("");
  const datei = useRef<HTMLInputElement>(null);

  const speichern = async () => {
    setFehler(""); setMeldung("");
    if (pw1.length < 8) return setFehler("Bitte wähle ein Passwort mit mindestens 8 Zeichen.");
    if (pw1 !== pw2) return setFehler("Die beiden Passwörter stimmen nicht überein.");
    const text = await verschluesseln(sicherung(), pw1);
    herunterladen(text, `neuroscope-${new Date().toISOString().slice(0, 10)}.neuroscope.json`);
    setPw1(""); setPw2("");
    setMeldung("Gespeichert. Die Datei liegt in deinen Downloads.");
  };
  const oeffnen = async () => {
    setFehler(""); setMeldung("");
    const f = datei.current?.files?.[0];
    if (!f) return setFehler("Bitte wähle zuerst deine Sicherungsdatei aus.");
    try {
      laden(await entschluesseln(await f.text(), pwLaden));
      setPwLaden("");
      setMeldung("Geladen. Du kannst dort weitermachen, wo du aufgehört hast.");
    } catch (e) { setFehler((e as Error).message); }
  };

  return (
    <div className="spalte">
      <h1>Speichern und später weitermachen</h1>
      <p className="einleitung">
        Deine Antworten, Notizen, dein Plan und deine Einträge aus „Mein Bereich“ als verschlüsselte Datei auf deinem Gerät. Nur mit deinem Passwort lesbar,
        auch nicht für uns. Ohne Passwort lässt sich die Datei nicht mehr öffnen.
      </p>
      <p role="status" className={meldung ? "kasten" : undefined}>{meldung}</p>
      <p role="alert" className={fehler ? "kasten kasten--licht" : undefined}>{fehler}</p>

      <h2 className="abschnitt">Speichern</h2>
      <label className="feld" htmlFor="pw1">Passwort</label>
      <input id="pw1" type="password" autoComplete="new-password" value={pw1} onChange={(e) => setPw1(e.target.value)} />
      <label className="feld" htmlFor="pw2">Passwort wiederholen</label>
      <input id="pw2" type="password" autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
      <div className="knopfreihe"><button className="knopf" type="button" onClick={speichern}>Verschlüsselt speichern</button></div>

      <h2 className="abschnitt">Weitermachen</h2>
      <label className="feld" htmlFor="datei">Sicherungsdatei</label>
      <input id="datei" ref={datei} type="file" accept=".json,application/json" />
      <label className="feld" htmlFor="pw3">Passwort</label>
      <input id="pw3" type="password" autoComplete="current-password" value={pwLaden} onChange={(e) => setPwLaden(e.target.value)} />
      <div className="knopfreihe"><button className="knopf" type="button" onClick={oeffnen}>Öffnen und weitermachen</button></div>
      <p className="hinweis-feld">Beim Öffnen werden deine aktuellen Eingaben in diesem Tab ersetzt.</p>
    </div>
  );
}
