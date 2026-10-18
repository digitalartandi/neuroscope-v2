// Prüft vor dem Livegang, ob Pflichtangaben fehlen. Aufruf: npm run startklar
import { readFileSync } from "node:fs";
const b = readFileSync("src/content/betreiber.ts", "utf8");
const h = readFileSync("src/content/hilfe.ts", "utf8");
const fehler = [];
const offen = b.match(/offen:\s*\[([^\]]*)\]/);
if (offen && offen[1].trim()) fehler.push("Impressum unvollständig (betreiber.ts → offen): " + offen[1].trim());
const datum = h.match(/GEPRUEFT_AM = "(\d{2})\.(\d{2})\.(\d{4})"/);
if (datum) {
  const alter = (Date.now() - new Date(`${datum[3]}-${datum[2]}-${datum[1]}`).getTime()) / 864e5;
  if (alter > 90) fehler.push(`Krisennummern zuletzt vor ${Math.round(alter)} Tagen geprüft (hilfe.ts)`);
}
if (fehler.length) { console.error("Noch nicht startklar:\n- " + fehler.join("\n- ")); process.exit(1); }
console.log("Startklar.");
