import { useEffect, useMemo, useState } from "react";
import {
  MIN_FREQ,
  MAX_FREQ,
  nearestStation,
  stations,
  type Station,
} from "@/data/stations";
import { StationSearch } from "@/components/StationSearch";
import { StationCompare } from "@/components/StationCompare";
import { StationDrawer } from "@/components/StationDrawer";
import { TunerAnalytics } from "@/components/TunerAnalytics";
import { trackTuner } from "@/lib/analytics";

const ticks = Array.from({ length: (MAX_FREQ - MIN_FREQ) * 2 + 1 }, (_, i) => MIN_FREQ + i / 2);

export function FrequencyTuner() {
  const [freq, setFreq] = useState(98.3);
  const [compare, setCompare] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [drawer, setDrawer] = useState<Station | null>(null);
  const station = useMemo(() => nearestStation(freq), [freq]);
  const locked = Math.abs(station.freq - freq) < 0.35;
  const pct = ((freq - MIN_FREQ) / (MAX_FREQ - MIN_FREQ)) * 100;

  const openDrawer = (s: Station) => {
    trackTuner("drawer_open", `${s.name} ${s.freq.toFixed(1)}`);
    setDrawer(s);
  };

  const tuneTo = (f: number) => {
    setFreq(f);
    const s = nearestStation(f);
    trackTuner("tune", `${s.name} ${s.freq.toFixed(1)}`);
  };


  // hydrate state from a shared link
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const f = parseFloat(p.get("freq") ?? "");
    if (!Number.isNaN(f) && f >= MIN_FREQ && f <= MAX_FREQ) setFreq(f);
    const c = (p.get("compare") ?? "")
      .split(",")
      .map(Number)
      .filter((n) => stations.some((s) => s.freq === n))
      .slice(0, 3);
    if (c.length) setCompare(c);
  }, []);

  const toggleCompare = (f: number) => {
    const s = nearestStation(f);
    const label = `${s.name} ${s.freq.toFixed(1)}`;
    const on = compare.includes(f);
    if (on) {
      setCompare((prev) => prev.filter((x) => x !== f));
      trackTuner("compare_remove", label);
    } else if (compare.length < 3) {
      setCompare((prev) => [...prev, f]);
      trackTuner("compare_add", label);
    }
  };


  const share = async () => {
    const url = new URL(window.location.href);
    url.hash = "tuner";
    url.searchParams.set("freq", freq.toFixed(1));
    if (compare.length) url.searchParams.set("compare", compare.join(","));
    else url.searchParams.delete("compare");
    try {
      await navigator.clipboard.writeText(url.toString());
    } catch {
      /* clipboard unavailable */
    }
    window.history.replaceState(null, "", url.toString());
    trackTuner("share", `${freq.toFixed(1)} FM`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="panel dial-grain rounded-xl p-5 sm:p-8">
      <div className="mb-6">
        <StationSearch
          onPick={(s) => {
            tuneTo(s.freq);
            trackTuner("search", `${s.name} ${s.freq.toFixed(1)}`);
          }}
          onCompare={(s) => toggleCompare(s.freq)}
          comparing={compare}
        />
      </div>


      {/* dial readout */}
      <div className="flex flex-wrap items-end justify-between gap-4">

        <div>
          <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Tuner
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-dial text-5xl font-bold text-primary text-glow tabular-nums sm:text-6xl">
              {freq.toFixed(1)}
            </span>
            <span className="font-dial text-sm uppercase tracking-widest text-muted-foreground">
              MHz FM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-dial text-[11px] uppercase tracking-[0.2em] ${
              locked
                ? "border-signal/50 bg-signal/10 text-signal"
                : "border-border bg-surface-2 text-muted-foreground"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${locked ? "bg-signal" : "bg-muted-foreground"}`}
            />
            {locked ? "Signal locked" : "Searching…"}
          </span>
          <div className="flex h-8 items-end gap-[3px]">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="eq-bar w-[3px] rounded-sm bg-primary/80"
                style={{
                  height: "100%",
                  animationDelay: `${i * 0.11}s`,
                  animationDuration: `${0.8 + (i % 3) * 0.25}s`,
                  opacity: locked ? 1 : 0.35,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* dial scale */}
      <div className="relative mt-7">
        <div className="flex h-10 items-end justify-between">
          {ticks.map((t) => (
            <span
              key={t}
              className={`w-px bg-border ${Number.isInteger(t) ? "h-6" : "h-3"}`}
              style={{
                backgroundColor:
                  Math.abs(t - freq) < 0.3 ? "var(--primary)" : undefined,
              }}
            />
          ))}
        </div>

        {/* station pips */}
        <div className="relative h-6">
          {stations.map((s) => {
            const left = ((s.freq - MIN_FREQ) / (MAX_FREQ - MIN_FREQ)) * 100;
            const active = s.freq === station.freq;
            return (
              <button
                key={s.freq}
                type="button"
                onClick={() => tuneTo(s.freq)}
                aria-label={`Tune to ${s.name} ${s.freq}`}
                className="absolute top-1 -translate-x-1/2"
                style={{ left: `${left}%` }}
              >
                <span
                  className={`block h-2.5 w-2.5 rounded-full transition-all ${
                    active
                      ? "scale-125 bg-primary shadow-[0_0_14px_var(--glow)]"
                      : "bg-muted-foreground/40 hover:bg-primary/70"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* needle */}
        <div
          className="pointer-events-none absolute -top-1 bottom-0 w-[2px] bg-primary shadow-[0_0_18px_var(--glow)]"
          style={{ left: `${pct}%` }}
        />

        <input
          type="range"
          min={MIN_FREQ}
          max={MAX_FREQ}
          step={0.1}
          value={freq}
          aria-label="Radio frequency"
          onChange={(e) => setFreq(parseFloat(e.target.value))}
          onPointerUp={() => tuneTo(freq)}
          onKeyUp={() => tuneTo(freq)}

          className="mt-3 w-full cursor-grab accent-[var(--primary)] active:cursor-grabbing"
        />
        <div className="mt-1 flex justify-between font-dial text-[10px] text-muted-foreground">
          <span>88.0</span>
          <span>98.0</span>
          <span>108.0</span>
        </div>
      </div>

      {/* station card */}
      <div className="mt-7 grid gap-6 border-t border-border pt-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h3 className="text-4xl text-foreground sm:text-5xl">{station.name}</h3>
          <p className="mt-1 font-dial text-sm text-primary">
            {station.freq.toFixed(1)} FM — “{station.tagline}”
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {station.format}. Broadcasting in {station.language} across{" "}
            {station.cities} cities.
          </p>

          <div className="mt-5">
            <p className="font-dial text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
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
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
          {[
            ["Weekly reach", station.reach],
            ["Cities live", `${station.cities}`],
            ["Core audience", station.audience],
            ["10-sec spot", station.tenSecRate],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-4">
              <dt className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {k}
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
            </div>
          ))}
          <div className="col-span-2 bg-surface p-4">
            <dt className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Signal strength index
            </dt>
            <dd className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <span
                className="block h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${station.strength}%` }}
              />
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-6">
        <button
          type="button"
          onClick={() => toggleCompare(station.freq)}
          className="rounded-md border border-border px-5 py-2.5 font-dial text-[11px] uppercase tracking-[0.18em] text-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          {compare.includes(station.freq)
            ? "In compare"
            : `Add ${station.name} to compare`}
        </button>
        <button
          type="button"
          onClick={() => openDrawer(station)}
          className="rounded-md border border-border px-5 py-2.5 font-dial text-[11px] uppercase tracking-[0.18em] text-foreground transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
        >
          Station details ↗
        </button>
        <button
          type="button"
          onClick={share}
          className="btn-amber rounded-md px-5 py-2.5 font-dial text-[11px] font-bold uppercase tracking-[0.18em]"
        >
          {copied ? "Link copied ✓" : "Copy shareable link"}
        </button>
        <span className="font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Shares this dial position &amp; comparison
        </span>
      </div>

      <div className="mt-6">
        <StationCompare
          selected={compare}
          onToggle={toggleCompare}
          onClear={() => setCompare([])}
          onDetails={openDrawer}
        />
      </div>

      <div className="mt-6">
        <TunerAnalytics />
      </div>

      <StationDrawer
        station={drawer}
        onClose={() => setDrawer(null)}
        onTune={tuneTo}
        onCompare={toggleCompare}
        comparing={drawer ? compare.includes(drawer.freq) : false}
      />
    </div>
  );
}

