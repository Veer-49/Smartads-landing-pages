export type TunerEventName =
  | "tune"
  | "search"
  | "compare_add"
  | "compare_remove"
  | "share"
  | "drawer_open"
  | "compare_pdf"
  | "report_sent";

export type TunerEvent = {
  name: TunerEventName;
  label: string;
  at: number;
};

const KEY = "smartads.tuner.events";
const MAX = 200;

type Listener = (events: TunerEvent[]) => void;
const listeners = new Set<Listener>();

function read(): TunerEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as TunerEvent[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(events: TunerEvent[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(events.slice(-MAX)));
  } catch {
    /* storage unavailable */
  }
}

export function getEvents(): TunerEvent[] {
  return read();
}

export function trackTuner(name: TunerEventName, label: string) {
  if (typeof window === "undefined") return;
  const events = [...read(), { name, label, at: Date.now() }].slice(-MAX);
  write(events);
  notify(events);
}

function notify(events: TunerEvent[]) {
  // defer so a track() call inside a React handler never sets state mid-render
  queueMicrotask(() => listeners.forEach((l) => l(events)));
}

export function subscribeTuner(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function clearTuner() {
  write([]);
  notify([]);
}

export type TunerSummary = {
  total: number;
  tunes: number;
  searches: number;
  compares: number;
  shares: number;
  topStations: { label: string; count: number }[];
  recent: TunerEvent[];
};

export function summarize(events: TunerEvent[]): TunerSummary {
  const counts = new Map<string, number>();
  for (const e of events) {
    if (e.name !== "tune" && e.name !== "drawer_open") continue;
    counts.set(e.label, (counts.get(e.label) ?? 0) + 1);
  }
  return {
    total: events.length,
    tunes: events.filter((e) => e.name === "tune").length,
    searches: events.filter((e) => e.name === "search").length,
    compares: events.filter((e) => e.name === "compare_add").length,
    shares: events.filter((e) => e.name === "share").length,
    topStations: [...counts.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 4),
    recent: [...events].reverse().slice(0, 6),
  };
}
