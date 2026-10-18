// Turm-Puzzle (Tower-of-London-Prinzip): drei Stäbe mit Platz für 3, 2 und 1 Kugel.
// Die kürzeste Zugzahl wird per Breitensuche exakt berechnet.
export type Kugel = "r" | "g" | "b";
export type Stand = [Kugel[], Kugel[], Kugel[]]; // je Stab von unten nach oben
export const PLATZ = [3, 2, 1] as const;

export const key = (s: Stand) => s.map((st) => st.join("")).join("|");

export function zuege(s: Stand): Stand[] {
  const r: Stand[] = [];
  for (let von = 0; von < 3; von++) {
    if (!s[von].length) continue;
    for (let nach = 0; nach < 3; nach++) {
      if (nach === von || s[nach].length >= PLATZ[nach]) continue;
      const neu = s.map((x) => [...x]) as Stand;
      neu[nach].push(neu[von].pop()!);
      r.push(neu);
    }
  }
  return r;
}

export function kuerzesterWeg(start: Stand, ziel: Stand): number {
  const zk = key(ziel);
  const gesehen = new Set([key(start)]);
  let ebene: Stand[] = [start];
  for (let d = 0; ebene.length; d++) {
    for (const s of ebene) if (key(s) === zk) return d;
    const naechste: Stand[] = [];
    for (const s of ebene) for (const n of zuege(s)) { const k = key(n); if (!gesehen.has(k)) { gesehen.add(k); naechste.push(n); } }
    ebene = naechste;
  }
  return -1;
}

export function alleStaende(): Stand[] {
  const start: Stand = [["r", "g", "b"], [], []];
  const gesehen = new Map([[key(start), start]]);
  let ebene = [start];
  while (ebene.length) {
    const n: Stand[] = [];
    for (const s of ebene) for (const z of zuege(s)) if (!gesehen.has(key(z))) { gesehen.set(key(z), z); n.push(z); }
    ebene = n;
  }
  return [...gesehen.values()];
}

/** Erzeugt Aufgaben mit genau den gewünschten kürzesten Zugzahlen. */
export function aufgaben(zugzahlen: number[]): { start: Stand; ziel: Stand; min: number }[] {
  const alle = alleStaende();
  const zufall = () => alle[Math.floor(Math.random() * alle.length)];
  return zugzahlen.map((soll) => {
    for (let v = 0; v < 5000; v++) {
      const start = zufall(), ziel = zufall();
      const min = kuerzesterWeg(start, ziel);
      if (min === soll) return { start, ziel, min };
    }
    throw new Error("Keine Aufgabe gefunden für " + soll);
  });
}
