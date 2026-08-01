import { useState } from "react";
import { stations, type Station } from "@/data/stations";
import { exportCompareToPdf } from "@/lib/comparePdf";
import { trackTuner } from "@/lib/analytics";

const ROWS: [string, (s: Station) => string][] = [
  ["Frequency", (s) => `${s.freq.toFixed(1)} FM`],
  ["Tagline", (s) => `“${s.tagline}”`],
  ["Language", (s) => s.language],
  ["Format", (s) => s.format],
  ["Weekly reach", (s) => s.reach],
  ["Cities live", (s) => String(s.cities)],
  ["Core audience", (s) => s.audience],
  ["10-sec rate", (s) => s.tenSecRate],
  ["Marquee RJs", (s) => s.rjs.join(", ")],
];

export function StationCompare({
  selected,
  onToggle,
  onClear,
  onDetails,
}: {
  selected: number[];
  onToggle: (freq: number) => void;
  onClear: () => void;
  onDetails?: (station: Station) => void;
}) {
  const picked = stations.filter((s) => selected.includes(s.freq));
  const [busy, setBusy] = useState(false);

  async function download() {
    setBusy(true);
    try {
      await exportCompareToPdf(picked);
      trackTuner(
        "compare_pdf",
        picked.map((s) => s.name).join(" vs "),
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="panel rounded-xl p-5 sm:p-8" data-no-reveal>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-signal">
            Compare mode
          </p>
          <h3 className="mt-2 text-4xl">STACK UP TO 3 STATIONS</h3>
        </div>
        {picked.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={download}
              disabled={busy}
              className="btn-amber rounded-md px-4 py-2 font-dial text-[10px] font-bold uppercase tracking-[0.18em] disabled:opacity-60"
            >
              {busy ? "Generating…" : "Export compare PDF ↓"}
            </button>
            <button
              type="button"
              onClick={onClear}
              className="font-dial text-[10px] uppercase tracking-[0.2em] text-primary hover:underline"
            >
              Clear selection
            </button>
          </div>
        )}
      </div>


      <div className="mt-5 flex flex-wrap gap-2">
        {stations.map((s) => {
          const on = selected.includes(s.freq);
          const full = selected.length >= 3 && !on;
          return (
            <button
              key={s.freq}
              type="button"
              disabled={full}
              onClick={() => onToggle(s.freq)}
              className={`rounded-full border px-3 py-1.5 font-dial text-[11px] tracking-[0.1em] transition-all duration-200 hover:-translate-y-0.5 ${
                on
                  ? "border-primary bg-primary/15 text-primary shadow-[0_0_18px_-6px_var(--glow)]"
                  : full
                    ? "cursor-not-allowed border-border text-muted-foreground/40"
                    : "border-border text-muted-foreground hover:border-primary/60 hover:text-primary"
              }`}
            >
              {s.freq.toFixed(1)} {s.name}
            </button>
          );
        })}
      </div>

      {picked.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Pick up to three stations above (or hit “Compare” in search) to see
          reach, audience and rates side by side.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-40 border-b border-border p-3 text-left font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Metric
                </th>
                {picked.map((s) => (
                  <th
                    key={s.freq}
                    className="border-b border-border p-3 text-left"
                  >
                    <span className="block font-dial text-primary">
                      {s.freq.toFixed(1)}
                    </span>
                    <span className="text-base text-foreground">{s.name}</span>
                    {onDetails && (
                      <button
                        type="button"
                        onClick={() => onDetails(s)}
                        className="mt-1 block font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition hover:text-primary"
                      >
                        View details ↗
                      </button>
                    )}

                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, get]) => (
                <tr key={label} className="align-top odd:bg-surface-2/40">
                  <td className="p-3 font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </td>
                  {picked.map((s) => (
                    <td key={s.freq} className="p-3 text-foreground">
                      {get(s)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-3 font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Signal index
                </td>
                {picked.map((s) => (
                  <td key={s.freq} className="p-3">
                    <span className="block h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                      <span
                        className="block h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${s.strength}%` }}
                      />
                    </span>
                    <span className="mt-1 block font-dial text-[11px] text-primary">
                      {s.strength}
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
