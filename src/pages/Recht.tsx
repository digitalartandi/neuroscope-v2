import { BETREIBER, STAND, VERSION } from "../content/betreiber";
import { geraetLoeschen, sitzungLoeschen } from "../lib/speicher";
import { useZustand } from "../lib/zustand";
import { useState } from "react";

export const ZWECK =
  "Neuroscope ist ein kostenloses Angebot zur Selbstreflexion über das eigene Wohlbefinden. Es vermittelt allgemeines Wissen und zeigt Wege zu professioneller Hilfe. Neuroscope ist kein Test, stellt keine Diagnosen und ersetzt keine ärztliche, psychologische oder psychotherapeutische Beratung.";

function Offen() {
  if (!import.meta.env.DEV) return null;
  return (
    <p className="kasten kasten--licht klein">
      Vor dem Livegang ergänzen: {BETREIBER.offen.join(", ")}.
    </p>
  );
}

export function Ueber() {
  const { allesLoeschen } = useZustand();
  const [geloescht, setGeloescht] = useState(false);
  return (
    <div className="spalte">
      <h1>Über Neuroscope</h1>
      <p className="einleitung">{ZWECK}</p>

      <h2 className="abschnitt">Wofür es gedacht ist</h2>
      <p>
        Neuroscope hilft dir, deine Situation in Worte zu fassen, zeigt verlässliches Wissen aus öffentlichen
        Gesundheitsportalen und führt zu Stellen, die dir weiterhelfen können. Deine Antworten werden nicht ausgewertet,
        nicht verglichen und nicht bewertet.
      </p>
      <p>
        Neuroscope ist nicht für Notfälle gedacht. Wenn du in einer Krise bist, wende dich an die Telefonseelsorge
        oder den Notruf. <a href="#/hilfe">Alle Nummern</a>
      </p>

      <h2 className="abschnitt">Deine Daten</h2>
      <p>
        Alles, was du eingibst, bleibt in diesem Browser-Tab. Schließt du ihn, wird es in der Regel gelöscht. Manche Browser
        können einen geschlossenen Tab samt Inhalt wiederherstellen. Sicher entfernst du alles mit diesem Knopf.
        Bestmarken der Spiele und Einträge in „Mein Bereich“ werden nur dauerhaft gespeichert, wenn du das ausdrücklich einschaltest. <a href="#/datenschutz">Mehr zum Datenschutz</a>
      </p>
      <div className="knopfreihe" id="loeschen">
        <button className="knopf knopf--leise" type="button" onClick={() => { allesLoeschen(); sitzungLoeschen(); geraetLoeschen(); setGeloescht(true); }}>
          Alle meine Eingaben jetzt löschen
        </button>
        <span role="status">{geloescht ? "Gelöscht." : ""}</span>
      </div>

      <h2 className="abschnitt">Barrierefreiheit</h2>
      <p>
        Neuroscope soll für alle gut nutzbar sein: bedienbar mit Tastatur und Screenreader, gut lesbare Schrift,
        ausreichende Kontraste, helle und dunkle Darstellung. Die Konzentrationsspiele arbeiten zum Teil mit Farben
        und Zeitdruck und sind deshalb nicht für alle gleich gut geeignet. Wenn dir etwas auffällt, schreib an{" "}
        <a href={`mailto:${BETREIBER.email}`}>{BETREIBER.email}</a>.
      </p>

      <h2 className="abschnitt">Version</h2>
      <p className="leise">Version {VERSION}, Stand {STAND}.</p>
    </div>
  );
}

export function Datenschutz() {
  return (
    <div className="spalte">
      <h1>Datenschutz</h1>
      <p className="einleitung">Kurz gesagt: Deine Eingaben verlassen deinen Browser nicht. Niemand außer dir sieht sie.</p>

      <h2 className="abschnitt">Verantwortlich</h2>
      <p>{BETREIBER.name}<br />{BETREIBER.anschrift}<br /><a href={`mailto:${BETREIBER.email}`}>{BETREIBER.email}</a></p>

      <h2 className="abschnitt">Was mit deinen Eingaben passiert</h2>
      <ul>
        <li>Antworten, Notizen und Markierungen werden nur in deinem Browser verarbeitet. Sie werden nicht an uns oder an Dritte übertragen.</li>
        <li>Damit nichts verloren geht, wenn du die Seite neu lädst, liegen sie im Sitzungsspeicher deines Browsers (sessionStorage). Schließt du den Tab, werden sie in der Regel gelöscht. Manche Browser stellen geschlossene Tabs samt Inhalt wieder her. Sicher löschst du alles unter „Über Neuroscope“.</li>
        <li>Bestwerte der Konzentrationsspiele werden nur auf deinen Wunsch dauerhaft in deinem Browser gespeichert (localStorage). Du kannst sie jederzeit löschen.</li>
        <li>Einträge in „Mein Bereich“ (Stimmung, Energie, ein Wort pro Tag, deine Einschätzung der Lebensbereiche) liegen ebenfalls nur im Sitzungsspeicher. Nur wenn du dort ausdrücklich „Auf diesem Gerät merken“ wählst, werden sie dauerhaft in deinem Browser gespeichert (localStorage). Sie verlassen das Gerät nie. „Nicht mehr merken“ oder „Löschen“ entfernt sie wieder vom Gerät.</li>
        <li>Die Gesprächsvorbereitung entsteht als PDF in deinem Browser. Sie wird nicht hochgeladen.</li>
        <li>Die Vorlesefunktion nutzt die Stimmen deines Geräts. Neuroscope wählt dafür von sich aus nur Stimmen, die auf dem Gerät selbst laufen. Wählst du in den Einstellungen eine Stimme „über das Internet“, schickt dein Browser den vorgelesenen Text an seinen Anbieter, zum Beispiel Google oder Microsoft.</li>
        <li>Es gibt keine Cookies, kein Tracking, keine Analyse-Werkzeuge und keine eingebundenen Inhalte von Drittanbietern. Schriften werden mit der App ausgeliefert und nicht von fremden Servern geladen.</li>
      </ul>
      <p>
        Weil wir deine Eingaben nicht erhalten, können wir sie weder einsehen noch herausgeben oder löschen.
        Löschen kannst nur du: Tab schließen oder unter <a href="#/ueber">Über Neuroscope</a> „Alle meine Eingaben jetzt löschen“.
      </p>
      <p>Nutzen auch andere dieses Gerät, schließ den Tab, wenn du fertig bist, oder lösch deine Eingaben.</p>

      <h2 className="abschnitt">Server-Protokolle</h2>
      <p>
        Beim Aufruf der Seite verarbeitet unser Hosting-Anbieter technisch notwendige Daten: IP-Adresse, Datum und Uhrzeit,
        aufgerufene Datei, Browser-Kennung. Das ist nötig, um die Seite auszuliefern und vor Missbrauch zu schützen
        (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Die Protokolle enthalten keine Eingaben aus Neuroscope.
        Hosting: {BETREIBER.hosting}. GitHub kann diese Zugriffsdaten auch in den USA verarbeiten. Details stehen in der{" "}
        <a href={BETREIBER.hostingDatenschutz} target="_blank" rel="noopener noreferrer">Datenschutzerklärung von GitHub</a>.
      </p>

      <h2 className="abschnitt">Links zu anderen Seiten</h2>
      <p>
        Wissensseiten und Hilfe-Bereich verlinken auf öffentliche Angebote, etwa gesundheit.gv.at oder telefonseelsorge.at.
        Erst wenn du einen Link öffnest, gelten die Datenschutzregeln der jeweiligen Seite.
      </p>

      <h2 className="abschnitt">Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch. Für Fragen schreib an{" "}
        <a href={`mailto:${BETREIBER.email}`}>{BETREIBER.email}</a>. Beschweren kannst du dich bei der österreichischen
        Datenschutzbehörde, <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener noreferrer">dsb.gv.at</a>.
      </p>
      <p className="leise klein">Stand {STAND}</p>
    </div>
  );
}

export function Impressum() {
  return (
    <div className="spalte">
      <h1>Impressum und Offenlegung</h1>
      <Offen />
      <p className="leise">Informationen nach § 5 E-Commerce-Gesetz und Offenlegung nach § 25 Mediengesetz</p>

      <h2 className="abschnitt">Medieninhaber und Betreiber</h2>
      <p>
        {BETREIBER.name}<br />{BETREIBER.anschrift}<br />
        E-Mail: <a href={`mailto:${BETREIBER.email}`}>{BETREIBER.email}</a><br />
        Telefon: {BETREIBER.telefon}<br />
        Web: <a href={BETREIBER.web} target="_blank" rel="noopener noreferrer">{BETREIBER.web.replace("https://", "")}</a>
      </p>
      <p>
        Unternehmensgegenstand: {BETREIBER.gegenstand}<br />
        GISA-Zahl: {BETREIBER.gisa}<br />
        Mitglied der {BETREIBER.kammer}<br />
        Gewerbebehörde: {BETREIBER.behoerde}
      </p>
      <p>
        Alle Angaben zum Unternehmen findest du auch im{" "}
        <a href={BETREIBER.impressumMosaik} target="_blank" rel="noopener noreferrer">Impressum von mosaik</a>.
      </p>

      <h2 className="abschnitt">Grundlegende Richtung (Blattlinie)</h2>
      <p>
        Neuroscope bietet Anregungen zur Selbstreflexion über das eigene Wohlbefinden, allgemeine Information auf Grundlage
        öffentlicher Gesundheitsportale und Wege zu professioneller Hilfe. Neuroscope stellt keine Diagnosen und ersetzt
        keine Beratung oder Behandlung. Das Angebot ist kostenlos und werbefrei.
      </p>

      <h2 className="abschnitt">Haftung für Inhalte und Links</h2>
      <p>
        Die Inhalte werden sorgfältig erstellt und regelmäßig geprüft. Sie sind allgemeine Information und keine Beratung
        im Einzelfall. Für Inhalte verlinkter Seiten sind deren Betreiber verantwortlich.
      </p>
    </div>
  );
}
