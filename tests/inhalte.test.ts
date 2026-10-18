import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { THEMEN, HAEUFIGKEIT } from "../src/content/reflexion";
import { ichForm, spiegelSaetze, schluessel } from "../src/lib/spiegel";
import { WISSEN } from "../src/content/wissen";
import { UEBUNGEN } from "../src/content/uebungen";
import { KRISE } from "../src/content/hilfe";

// Begriffe, die eine Bewertung oder Diagnose nahelegen. Dürfen in Fragen,
// Spiegel, Wissen, Übungen und Spielen nicht vorkommen.
const VERBOTEN = [
  /diagnos/i, /screening/i, /auff[äa]llig/i, /risiko/i, /st[öo]rung/i, /symptom/i, /befund/i,
  /depress/i, /angstst[öo]rung/i, /burn-?out/i, /sucht/i, /abh[äa]ngig/i, /patholog/i, /klinisch/i,
  /suizid/i, /selbstverletz/i, /normwert/i, /cut-?off/i, /schweregrad/i, /punktwert/i,
  /\bscore\b/i, /\btest(s|ergebnis)?\b/i, /erkennt/i, /fr[üu]herkennung/i,
];

function textAus(obj: unknown): string { return JSON.stringify(obj); }

describe("Keine bewertende Sprache in den Inhalten", () => {
  const quellenFrei = (o: unknown) => JSON.parse(JSON.stringify(o, (k, v) => (k === "quellen" || k === "url" ? undefined : v)));
  const pruefen: [string, unknown][] = [
    ["Reflexion", THEMEN],
    ["Wissen", quellenFrei(WISSEN)],
    ["Übungen", quellenFrei(UEBUNGEN)],
  ];
  for (const [name, inhalt] of pruefen) {
    it(name, () => {
      const t = textAus(inhalt);
      for (const re of VERBOTEN) expect(t, `${name} enthält ${re}`).not.toMatch(re);
    });
  }

  it("Spiele und Spiegel-Seiten", () => {
    const dirs = ["src/games", "src/pages"];
    const ausnahmen = new Set(["Recht.tsx", "Start.tsx"]); // Zweckbestimmung verneint ausdrücklich „Test“ und „Diagnose“
    for (const d of dirs) for (const f of readdirSync(d)) {
      if (ausnahmen.has(f)) continue;
      const code = readFileSync(join(d, f), "utf8").replace(/\/\/.*$/gm, "");
      for (const re of VERBOTEN) expect(code, `${f} enthält ${re}`).not.toMatch(re);
    }
  });
});

describe("Spiegel bewertet nicht", () => {
  const thema = THEMEN[0];
  it("gibt Sätze in Fragen-Reihenfolge zurück, unabhängig von den Antworten", () => {
    const a: Record<string, number> = {};
    thema.fragen.forEach((f, i) => { a[schluessel(thema.id, f.id)] = (thema.fragen.length - i) % HAEUFIGKEIT.length; });
    const s = spiegelSaetze(thema, a);
    expect(s.map((x) => x.frageId)).toEqual(thema.fragen.map((f) => f.id));
  });
  it("übernimmt die Häufigkeit wörtlich", () => {
    const f = thema.fragen[0];
    const s = spiegelSaetze(thema, { [schluessel(thema.id, f.id)]: 3 });
    expect(s[0].vor + s[0].haeufigkeit + s[0].nach).toBe(f.spiegel.replace("{h}", "oft"));
  });
  it("lässt unbeantwortete Fragen weg und erfindet nichts", () => {
    expect(spiegelSaetze(thema, {})).toEqual([]);
  });
  it("die Logik enthält keine Summen oder Schwellen", () => {
    const code = readFileSync("src/lib/spiegel.ts", "utf8").replace(/\/\/.*$/gm, "");
    expect(code).not.toMatch(/reduce\(|sum|schwelle|>=\s*\d|Math\.(max|min)/i);
  });
});

describe("Inhalte vollständig", () => {
  it("jede Frage hat genau einen Platzhalter", () => {
    for (const t of THEMEN) for (const f of t.fragen) expect(f.spiegel.split("{h}").length, f.id).toBe(2);
  });
  it("jedes Thema verweist auf eine vorhandene Wissensseite und Übung", () => {
    for (const t of THEMEN) {
      expect(WISSEN.some((w) => w.id === t.wissen), t.wissen).toBe(true);
      if (t.uebung) expect(UEBUNGEN.some((u) => u.id === t.uebung), t.uebung).toBe(true);
    }
  });
  it("jede Wissensseite hat Quellen von offiziellen Portalen", () => {
    for (const w of WISSEN) {
      expect(w.quellen.length, w.id).toBeGreaterThan(0);
      for (const q of w.quellen) expect(q.url).toMatch(/^https:\/\//);
    }
  });
  it("Krisennummern für beide Länder vorhanden", () => {
    expect(KRISE.AT.map((n) => n.nummer)).toContain("142");
    expect(KRISE.DE.map((n) => n.nummer)).toContain("0800 111 0 111");
  });
});

describe("Ich-Form für die Gesprächsvorbereitung", () => {
  it("lässt keine Du-Form übrig", () => {
    for (const t of THEMEN) for (const f of t.fragen) {
      const satz = ichForm(f.spiegel.replace("{h}", "oft"));
      expect(satz, f.id).not.toMatch(/\b(du|dich|dir|dein\w*|hast|bist|hattest|konntest|warst)\b/i);
    }
  });
});
