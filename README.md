# Neuroscope 2.0 – Selbstreflexion

Kostenloses Angebot zur Selbstreflexion über das eigene Wohlbefinden. Kein Test, keine Diagnose.
Konzept: Doc „Neuroscope 2.0 – Konzept Selbstreflexion“ (Oktober 2026).

## Grundsätze im Code

- **Keine Auswertung.** Antworten werden nie summiert, mit Schwellen verglichen oder bewertet.
  Der Spiegel (`src/lib/spiegel.ts`) gibt nur die eigenen Antworten als Sätze zurück, in fester Reihenfolge.
  Ein Test prüft das.
- **Keine bewertende Sprache.** `tests/inhalte.test.ts` sucht in allen Inhalten nach Begriffen wie
  Diagnose, Test, Screening, auffällig, Risiko, Störung. Ausnahme: die Zweckbestimmung, die sie ausdrücklich verneint.
- **Nichts verlässt den Browser.** Keine Server-Logik, keine Cookies, kein Tracking, keine Drittanbieter.
  Schriften liegen im Projekt. Eingaben liegen im sessionStorage und sind beim Schließen des Tabs weg.
  Bestmarken der Spiele nur nach ausdrücklicher Zustimmung im localStorage.
- **Inhalte als Daten.** Fragen, Wissen, Übungen und Krisennummern liegen in `src/content/`, getrennt vom Code.

## Befehle

```bash
npm install
npm run dev       # Entwicklung, http://localhost:5173
npm test          # Inhalts- und Logikprüfungen
npm run build     # Produktions-Build nach dist/
```

## Veröffentlichen (GitHub Pages)

Jeder Push auf `main` startet `.github/workflows/pages.yml`: Tests, Startklar-Prüfung, Build, Veröffentlichung.
Einmalig im Repo einstellen: **Settings → Pages → Source: GitHub Actions**.
Die App nutzt Hash-Routing (`#/hilfe`) und relative Pfade, sie läuft also auch unter `benutzer.github.io/repo/`.

**Eigene Domain:** `neuroscope.at` (Inklusivdomain bei ALL-INKL, Nameserver ALL-INKL). DNS zeigt auf GitHub Pages:
A `185.199.108–111.153`, AAAA `2606:50c0:8000–8003::153`, `www` CNAME `digitalartandi.github.io.`.
Kein Wildcard-Eintrag. Die Domain ist in den Pages-Einstellungen eingetragen (bei Deployment über Actions
wird keine CNAME-Datei gebraucht). HTTPS stellt GitHub aus („Enforce HTTPS“).
Sicherheitsregeln stehen als Content-Security-Policy in `index.html`, `noindex` verhindert die Aufnahme in Suchmaschinen.

## Vor dem Livegang (Pflicht)

`npm run startklar` prüft Tests, Pflichtangaben im Impressum und das Prüfdatum der Krisennummern
und baut erst dann. Solange etwas fehlt, bricht es mit einer Liste ab.

- [ ] Alte Version offline: GitHub-Repo `digitalartandi/neuroscope` auf privat, Vercel-Projekt löschen.
- [ ] Krisennummern und Links neu prüfen, Datum in `src/content/hilfe.ts` aktualisieren.
- [ ] Rechtscheck (Medizinprodukte- bzw. IT-Recht) mit Zweckbestimmung und Screenshots.
- [ ] Optional: Wissensseiten fachlich durchsehen lassen (Dr. Klopf).

## Struktur

```
src/content/    Fragen, Wissen, Übungen, Hilfe, Betreiberangaben
src/lib/        Zustand (Sitzung), Spiegel, Router, Spiel-Hilfen, Turm-Logik
src/pages/      Seiten
src/games/      Konzentrationsspiele: Zahlenspur, Farbwörter, Buchstaben merken, Turm-Puzzle
tests/          Prüfungen
```

## Lizenzen

- Schrift: DM Sans (SIL OFL), lokal eingebunden, kein Google-Fonts-Abruf.
- Die Spiele beruhen auf allgemein bekannten Aufgabenprinzipien (Trail Making, Stroop, N-back, Tower of London)
  mit eigenen Aufgaben. Es werden keine lizenzierten Testfassungen oder Normtabellen verwendet.

## Zweck

> Neuroscope hilft dir, zu verstehen, was in dir los ist, und den nächsten guten Schritt zu finden, bis hin zu echter Hilfe.

Die Bereiche ordnen sich nach diesem Satz:

| Teil des Satzes | Bereiche |
| --- | --- |
| Verstehen, was in dir los ist | Selbstreflexion, Wissen, Mein Bereich |
| Den nächsten guten Schritt finden | Heute, Wegweiser, Übungen |
| Bis hin zu echter Hilfe | Hilfe finden, Mein Krisenplan, Druckblatt |

Jede Seite endet mit genau einem „Nächsten guten Schritt“, nicht mit einer Liste.

### Prüfstein für neue Ideen

Eine Idee kommt nur hinein, wenn alle vier Antworten Ja sind:

1. Hilft sie beim Verstehen, beim nächsten Schritt oder auf dem Weg zur Hilfe?
2. Bleibt sie ohne Bewertung (keine Summen, Schwellen, Einschätzungen der Person)?
3. Bleiben alle Daten auf dem Gerät?
4. Wird der Handy-Bildschirm dadurch nicht voller? (Neues ersetzt etwas, liegt in einem Blatt oder ist zugeklappt.)

### Regeln für ein ruhiges Handy-UI

- Eine Frage pro Bildschirm, ein Hauptknopf mit Farbverlauf.
- Tiefe auf Wunsch: „Kurz gesagt“ zuerst, Abschnitte zugeklappt.
- Nebenwege als Blatt von unten statt als neue Seite.
- Ein Kartenstil, drei Schriftgrößen, eine Akzentfarbe.
