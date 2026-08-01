import { useMemo, useState } from "react";
import { stations, type Station } from "@/data/stations";

const LANGUAGES = ["All", "Hindi", "English", "Regional"] as const;
const SORTS = [
  { id: "strength", label: "Signal strength" },
  { id: "reach", label: "Weekly reach" },
  { id: "rate", label: "Lowest rate" },
  { id: "freq", label: "Frequency" },
] as const;

type SortId = (typeof SORTS)[number]["id"];

function reachNum(s: Station) {
  const m = s.reach.match(/([\d.]+)\s*(Cr|Lakh)/i);
  if (!m) return 0;
  return parseFloat(m[1] ?? "0") * (/cr/i.test(m[2] ?? "") ? 1e7 : 1e5);
}

function minRate(s: Station) {
  const n = s.tenSecRate.replace(/[₹,]/g, "").match(/\d+/g) ?? ["0"];
  return Number(n[0]);
}

export function StationSearch({
  onPick,
  onCompare,
  comparing = [],
}: {
  onPick: (s: Station) => void;
  onCompare?: (s: Station) => void;
  comparing?: number[];
}) {
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<(typeof LANGUAGES)[number]>("All");
  const [sort, setSort] = useState<SortId>("strength");
  const [minStrength, setMinStrength] = useState(0);

  const filtersOn = lang !== "All" || minStrength > 0 || sort !== "strength";
  const open = q.trim().length > 0 || filtersOn;

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return stations
      .filter((s) =>
        !term
          ? true
          : [
              s.name,
              s.freq.toFixed(1),
              s.language,
              s.format,
              s.audience,
              s.tagline,
              ...s.rjs,
            ]
              .join(" ")
              .toLowerCase()
              .includes(term),
      )
      .filter((s) => (lang === "All" ? true : s.language.includes(lang)))
      .filter((s) => s.strength >= minStrength)
      .sort((a, b) => {
        if (sort === "reach") return reachNum(b) - reachNum(a);
        if (sort === "rate") return minRate(a) - minRate(b);
        if (sort === "freq") return a.freq - b.freq;
        return b.strength - a.strength;
      })
      .slice(0, 8);
  }, [q, lang, sort, minStrength]);

  return (
    <div className="relative" data-no-reveal>
      <label htmlFor="station-search" className="sr-only">
        Search radio stations
      </label>
      <input
        id="station-search"
        value={q}
        onChange={(e) => setQ(e.target.value.slice(0, 60))}
        placeholder="Search station, frequency, language or RJ…"
        className="w-full rounded-md border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-ring"
      />

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {LANGUAGES.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            className={`rounded-full border px-3 py-1 font-dial text-[10px] uppercase tracking-[0.18em] transition ${
              lang === l
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-surface-2 text-muted-foreground hover:border-primary/50"
            }`}
          >
            {l}
          </button>
        ))}

        <span className="mx-1 hidden h-4 w-px bg-border sm:block" />

        <label className="flex items-center gap-2 font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortId)}
            className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] text-foreground outline-none focus:border-primary"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Min signal {minStrength}
          <input
            type="range"
            min={0}
            max={95}
            step={5}
            value={minStrength}
            onChange={(e) => setMinStrength(Number(e.target.value))}
            className="w-24 accent-[var(--primary)]"
            aria-label="Minimum signal strength"
          />
        </label>

        {(q || filtersOn) && (
          <button
            type="button"
            onClick={() => {
              setQ("");
              setLang("All");
              setSort("strength");
              setMinStrength(0);
            }}
            className="font-dial text-[10px] uppercase tracking-[0.18em] text-primary hover:underline"
          >
            Reset
          </button>
        )}
      </div>

      {open && (
        <div className="absolute z-20 mt-2 w-full animate-[scale-in_0.16s_ease-out] overflow-hidden rounded-lg border border-border bg-surface-2 shadow-2xl">
          <p className="border-b border-border px-4 py-2 font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {results.length} station{results.length === 1 ? "" : "s"} match
          </p>
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">
              Nothing matches these filters. Try “Hindi”, “98.3” or “RJ Naved”.
            </p>
          ) : (
            results.map((s) => (
              <div
                key={s.freq}
                className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 last:border-b-0 hover:bg-primary/10"
              >
                <button
                  type="button"
                  onClick={() => onPick(s)}
                  className="flex-1 text-left"
                >
                  <span className="font-dial text-primary">
                    {s.freq.toFixed(1)}
                  </span>{" "}
                  <span className="text-sm text-foreground">{s.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {s.language} · {s.cities} cities · {s.reach} · {s.rjs[0]}
                  </span>
                </button>
                {onCompare && (
                  <button
                    type="button"
                    onClick={() => onCompare(s)}
                    className={`rounded-full border px-3 py-1 font-dial text-[10px] uppercase tracking-[0.18em] transition ${
                      comparing.includes(s.freq)
                        ? "border-signal/60 bg-signal/15 text-signal"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {comparing.includes(s.freq) ? "Added" : "Compare"}
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
