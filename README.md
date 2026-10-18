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
