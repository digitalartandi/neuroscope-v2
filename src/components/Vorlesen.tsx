import { createPortal } from "react-dom";
// Vorlesen mit den Stimmen des Geräts (Web Speech API).
// Bevorzugt deutsche Stimmen, die direkt auf dem Gerät laufen: Der Text verlässt das Gerät dann nicht.
import { useEffect, useRef, useState } from "react";
import { useZustand } from "../lib/zustand";

const WEIBLICH = /anna|petra|helena|hedda|katja|marlene|vicki|sabine|seraphina|amala|katharina|yvonne|female|frau|weiblich/i;

export function deutscheStimmen(): SpeechSynthesisVoice[] {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("de"));
}

// Neuronale Stimmen klingen deutlich natürlicher. Browser kennzeichnen sie unterschiedlich.
const NATUERLICH = /natural|neural|premium|enhanced|erweitert|wavenet|studio|online|google/i;

export function istNatuerlich(v: SpeechSynthesisVoice) { return NATUERLICH.test(v.name) || !v.localService; }

// Je höher, desto lieber: natürliche Stimme, Frauenstimme, Deutsch aus Deutschland oder Österreich.
function punkte(v: SpeechSynthesisVoice) {
  let p = 0;
  if (NATUERLICH.test(v.name)) p += 100;
  if (!v.localService) p += 40;
  if (WEIBLICH.test(v.name)) p += 20;
  if (/^de-(de|at)/i.test(v.lang)) p += 5;
  return p;
}

export function stimmenSortiert(nurGeraet = false): SpeechSynthesisVoice[] {
  return deutscheStimmen().filter((v) => !nurGeraet || v.localService).sort((a, b) => punkte(b) - punkte(a));
}

// Wahl: gespeicherte Stimme, sonst die natürlichste verfügbare (auf Wunsch nur Gerätestimmen).
export function stimmeWaehlen(name?: string, nurGeraet = false): SpeechSynthesisVoice | undefined {
  const liste = stimmenSortiert(nurGeraet);
  return (name && liste.find((v) => v.name === name)) || liste[0];
}

export function useStimmen() {
  const [stimmen, setStimmen] = useState<SpeechSynthesisVoice[]>(() => deutscheStimmen());
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const neu = () => setStimmen(deutscheStimmen());
    window.speechSynthesis.addEventListener("voiceschanged", neu);
    neu();
    return () => window.speechSynthesis.removeEventListener("voiceschanged", neu);
  }, []);
  return stimmen;
}

const AUSLASSEN = ".quellen, nav, .sprungmarken, .inhaltsverzeichnis, .vorlesen, button, .zurueck, [data-nicht-vorlesen], .wissen-karten";

function bloecke(wurzel: HTMLElement): HTMLElement[] {
  return Array.from(wurzel.querySelectorAll<HTMLElement>("h1, h2, h3, p, li"))
    .filter((el) => !el.closest(AUSLASSEN) && !el.querySelector("p, li") && (el.textContent ?? "").trim().length > 1);
}

function GeraeteVorlesen() {
  const { einstellungen } = useZustand();
  const stimmen = useStimmen();
  const [stand, setStand] = useState<"aus" | "laeuft" | "pause">("aus");
  const ref = useRef<HTMLDivElement>(null);
  const liste = useRef<HTMLElement[]>([]);
  const index = useRef(0);
  const aktiv = useRef<HTMLElement | null>(null);
  const moeglich = "speechSynthesis" in window;
  const [geprueft, setGeprueft] = useState(false);
  useEffect(() => { const t = window.setTimeout(() => setGeprueft(true), 1500); return () => window.clearTimeout(t); }, []);
  const stimme = stimmeWaehlen(einstellungen.stimme, einstellungen.nurGeraetestimme);

  const markieren = (el: HTMLElement | null) => {
    aktiv.current?.classList.remove("wird-gelesen");
    aktiv.current = el;
    if (el) {
      el.classList.add("wird-gelesen");
      const r = el.getBoundingClientRect();
      if (r.top < 80 || r.bottom > window.innerHeight - 100) el.scrollIntoView({ block: "center", behavior: einstellungen.ruhig ? "auto" : "smooth" });
    }
  };
  const stopp = () => {
    window.speechSynthesis?.cancel();
    markieren(null);
    setStand("aus");
  };
  const sprich = (i: number) => {
    const el = liste.current[i];
    if (!el) { stopp(); return; }
    index.current = i;
    markieren(el);
    const u = new SpeechSynthesisUtterance((el.textContent ?? "").replace(/\s+/g, " ").trim());
    u.lang = "de-DE";
    if (stimme) u.voice = stimme;
    u.rate = einstellungen.tempo ?? 1;
    u.onend = () => { if (index.current === i) sprich(i + 1); };
    u.onerror = (e) => { if (e.error !== "interrupted" && e.error !== "canceled") stopp(); };
    window.speechSynthesis.speak(u);
  };
  const start = () => {
    const wurzel = ref.current?.closest("article, .spalte") as HTMLElement | null;
    if (!wurzel) return;
    liste.current = bloecke(wurzel);
    window.speechSynthesis.cancel();
    setStand("laeuft");
    sprich(0);
  };
  const pause = () => { window.speechSynthesis.pause(); setStand("pause"); };
  const weiter = () => { window.speechSynthesis.resume(); setStand("laeuft"); };
  const springen = (d: number) => {
    const ziel = Math.min(Math.max(index.current + d, 0), liste.current.length - 1);
    index.current = -1; // laufende Äußerung soll nicht weiterzählen
    window.speechSynthesis.cancel();
    setStand("laeuft");
    window.setTimeout(() => sprich(ziel), 60);
  };

  // Beim Verlassen der Seite verstummen.
  useEffect(() => () => { window.speechSynthesis?.cancel(); aktiv.current?.classList.remove("wird-gelesen"); }, []);

  if (!moeglich) return null;
  // Stimmen laden manche Browser verzögert. Erst nach kurzer Wartezeit „keine Stimme“ melden.
  const keineStimme = !stimme && (stimmen.length > 0 || geprueft);

  return (
    <div className="vorlesen" ref={ref} data-stand={stand}>
      {stand === "aus" ? (
        <button type="button" className="vorlesen__start" onClick={start} disabled={keineStimme}>
          <Lautsprecher />Vorlesen
        </button>
      ) : (
        <div className="vorlesen__leiste" role="group" aria-label="Vorlesen steuern">
          <button type="button" onClick={() => springen(-1)} aria-label="Vorheriger Absatz"><Pfeil links /></button>
          {stand === "laeuft"
            ? <button type="button" className="vorlesen__haupt" onClick={pause} aria-label="Pause"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5" width="3.5" height="14" rx="1" /><rect x="13.5" y="5" width="3.5" height="14" rx="1" /></svg></button>
            : <button type="button" className="vorlesen__haupt" onClick={weiter} aria-label="Weiter vorlesen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" /></svg></button>}
          <button type="button" onClick={() => springen(1)} aria-label="Nächster Absatz"><Pfeil /></button>
          <button type="button" onClick={stopp} aria-label="Vorlesen beenden"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2" /></svg></button>
          <span className="vorlesen__welle" aria-hidden="true"><i /><i /><i /><i /></span>
        </div>
      )}
      {keineStimme && <p className="hinweis-feld">Auf diesem Gerät ist keine passende deutsche Stimme verfügbar. In den Einstellungen unter Darstellung findest du Hinweise dazu.</p>}
    </div>
  );
}

function Lautsprecher() {
  return (
    <svg className="symbol" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}
function Pfeil({ links }: { links?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" style={links ? { transform: "scaleX(-1)" } : undefined}><path d="M6 5.5v13l8.5-6.5zM16 5.5h2.5v13H16z" /></svg>;
}

// ---------- Aufnahmen (z. B. aus ElevenLabs) ----------
// Liegt zu einer Seite eine Aufnahme unter public/audio/, spielt „Vorlesen“ diese ab.
// Dateinamen: wissen-<id>.mp3 bzw. uebung-<id>.mp3, lange Seiten als -teil1.mp3, -teil2.mp3 …
const gefunden = new Map<string, string[]>();

function basisName(): string | null {
  const [, bereich, id] = window.location.hash.replace(/^#/, "").split("?")[0].split("/");
  if (!id) return null;
  if (bereich === "wissen") return `wissen-${id}`;
  if (bereich === "uebungen") return `uebung-${id}`;
  return null;
}

async function gibtEs(url: string): Promise<boolean> {
  try {
    const r = await fetch(url, { method: "HEAD", cache: "no-cache" });
    return r.ok && (r.headers.get("content-type") ?? "").startsWith("audio");
  } catch { return false; }
}

async function aufnahmenSuchen(basis: string): Promise<string[]> {
  if (gefunden.has(basis)) return gefunden.get(basis)!;
  let liste: string[] = [];
  if (await gibtEs(`audio/${basis}.mp3`)) liste = [`audio/${basis}.mp3`];
  else for (let i = 1; i <= 9; i++) {
    const url = `audio/${basis}-teil${i}.mp3`;
    if (await gibtEs(url)) liste.push(url); else break;
  }
  gefunden.set(basis, liste);
  return liste;
}

const zeit = (s: number) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "–:––");

function Aufnahme({ teile }: { teile: string[] }) {
  const { einstellungen } = useZustand();
  const audio = useRef<HTMLAudioElement>(null);
  const [offen, setOffen] = useState(false);
  const [teil, setTeil] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  const [pos, setPos] = useState(0);
  const [dauer, setDauer] = useState(NaN);
  const titel = document.querySelector("main h1")?.textContent ?? "Neuroscope";

  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    a.playbackRate = einstellungen.tempo ?? 1;
  }, [einstellungen.tempo, teil]);

  useEffect(() => {
    if (!("mediaSession" in navigator) || !offen) return;
    navigator.mediaSession.metadata = new MediaMetadata({ title: titel, artist: "Neuroscope" });
    navigator.mediaSession.setActionHandler("play", () => audio.current?.play());
    navigator.mediaSession.setActionHandler("pause", () => audio.current?.pause());
    navigator.mediaSession.setActionHandler("seekbackward", () => springen(-15));
    navigator.mediaSession.setActionHandler("seekforward", () => springen(15));
  }, [offen, titel]);

  const start = () => { setOffen(true); window.setTimeout(() => audio.current?.play(), 0); };
  const springen = (d: number) => { const a = audio.current; if (a) a.currentTime = Math.max(0, Math.min((a.duration || 0), a.currentTime + d)); };
  const schliessen = () => { audio.current?.pause(); if (audio.current) audio.current.currentTime = 0; setTeil(0); setOffen(false); setLaeuft(false); };

  return (
    <div className="vorlesen" data-stand={laeuft ? "laeuft" : offen ? "pause" : "aus"}>
      <audio ref={audio} src={teile[teil]} preload="metadata"
        onPlay={() => setLaeuft(true)} onPause={() => setLaeuft(false)}
        onTimeUpdate={(e) => setPos(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => { setDauer(e.currentTarget.duration); e.currentTarget.playbackRate = einstellungen.tempo ?? 1; }}
        onEnded={() => { if (teil < teile.length - 1) { setTeil(teil + 1); window.setTimeout(() => audio.current?.play(), 0); } else schliessen(); }} />
      {!offen ? (
        <button type="button" className="vorlesen__start" onClick={start}><Lautsprecher />Anhören</button>
      ) : (
        createPortal(<div className="hoeren" role="group" aria-label="Aufnahme abspielen">
          <button type="button" className="hoeren__knopf" onClick={() => springen(-15)} aria-label="15 Sekunden zurück"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 6V3L6.5 7 11 11V8a5.5 5.5 0 1 1-5.4 6.5h-2A7.5 7.5 0 1 0 11 6z" /></svg></button>
          <button type="button" className="hoeren__knopf hoeren__haupt" onClick={() => (laeuft ? audio.current?.pause() : audio.current?.play())} aria-label={laeuft ? "Pause" : "Abspielen"}>
            {laeuft ? <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5" width="3.5" height="14" rx="1" /><rect x="13.5" y="5" width="3.5" height="14" rx="1" /></svg>
              : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" /></svg>}
          </button>
          <button type="button" className="hoeren__knopf" onClick={() => springen(15)} aria-label="15 Sekunden vor"><svg viewBox="0 0 24 24" aria-hidden="true" style={{ transform: "scaleX(-1)" }}><path d="M11 6V3L6.5 7 11 11V8a5.5 5.5 0 1 1-5.4 6.5h-2A7.5 7.5 0 1 0 11 6z" /></svg></button>
          <div className="hoeren__spur">
            <input type="range" min={0} max={isFinite(dauer) ? dauer : 0} step={1} value={pos} aria-label="Position"
              aria-valuetext={`${zeit(pos)} von ${zeit(dauer)}`}
              onChange={(e) => { if (audio.current) audio.current.currentTime = Number(e.target.value); }}
              style={{ ["--fortschritt" as string]: `${isFinite(dauer) && dauer > 0 ? (pos / dauer) * 100 : 0}%` }} />
            <span className="hoeren__zeit">{zeit(pos)} / {zeit(dauer)}{teile.length > 1 ? ` · Teil ${teil + 1} von ${teile.length}` : ""}</span>
          </div>
          <button type="button" className="hoeren__knopf" onClick={schliessen} aria-label="Schließen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg></button>
        </div>, document.body)
      )}
    </div>
  );
}

// Öffentliche Komponente: Aufnahme, wenn vorhanden, sonst Gerätestimme.
export function Vorlesen() {
  const basis = basisName();
  const [teile, setTeile] = useState<string[] | null>(basis && gefunden.has(basis) ? gefunden.get(basis)! : null);
  useEffect(() => {
    if (!basis) { setTeile([]); return; }
    let aktiv = true;
    aufnahmenSuchen(basis).then((l) => { if (aktiv) setTeile(l); });
    return () => { aktiv = false; };
  }, [basis]);
  if (teile === null) return <div className="vorlesen" aria-hidden="true" style={{ minHeight: "2.75rem" }} />;
  return teile.length > 0 ? <Aufnahme teile={teile} /> : <GeraeteVorlesen />;
}
