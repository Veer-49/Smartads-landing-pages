import { useEffect } from "react";
import type { Station } from "@/data/stations";

export function StationDrawer({
  station,
  onClose,
  onTune,
  onCompare,
  comparing,
}: {
  station: Station | null;
  onClose: () => void;
  onTune: (freq: number) => void;
  onCompare: (freq: number) => void;
  comparing: boolean;
}) {
  useEffect(() => {
    if (!station) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [station, onClose]);

  if (!station) return null;

  const stats: [string, string][] = [
    ["Frequency", `${station.freq.toFixed(1)} MHz FM`],
    ["Language", station.language],
    ["Format", station.format],
    ["Weekly reach", station.reach],
    ["Cities live", String(station.cities)],
    ["Core audience", station.audience],
    ["10-sec spot", station.tenSecRate],
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={`${station.name} details`}>
      <button
        type="button"
        aria-label="Close station details"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <aside className="relative h-full w-full max-w-md animate-[scale-in_.25s_ease-out] overflow-y-auto border-l border-border bg-surface p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-dial text-[11px] uppercase tracking-[0.3em] text-primary">
              Station dossier
            </p>
            <h3 className="mt-2 text-4xl text-foreground">{station.name}</h3>
            <p className="mt-1 font-dial text-sm text-primary">
              {station.freq.toFixed(1)} FM — “{station.tagline}”
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-border px-2.5 py-1 font-dial text-xs text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            ✕
          </button>
        </div>

        <div className="mt-6">
          <p className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Signal strength index
          </p>
          <span className="mt-2 block h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <span
              className="block h-full rounded-full bg-primary transition-all duration-700"
              style={{ width: `${station.strength}%` }}
            />
          </span>
          <span className="mt-1 block font-dial text-xs text-primary">
            {station.strength} / 100
          </span>
        </div>

        <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border">
          {stats.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 bg-surface p-3.5">
              <dt className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {k}
              </dt>
              <dd className="text-right text-sm text-foreground">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <p className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Marquee RJs
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {station.rjs.map((rj) => (
              <span
                key={rj}
                className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground"
              >
                {rj}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => {
              onTune(station.freq);
              onClose();
            }}
            className="btn-amber rounded-md px-5 py-3 font-dial text-[11px] font-bold uppercase tracking-[0.18em]"
          >
            Tune the dial here
          </button>
          <button
            type="button"
            onClick={() => onCompare(station.freq)}
            className="rounded-md border border-border px-5 py-3 font-dial text-[11px] uppercase tracking-[0.18em] text-foreground transition hover:border-primary hover:text-primary"
          >
            {comparing ? "Remove from compare" : "Add to compare"}
          </button>
        </div>
      </aside>
    </div>
  );
}
