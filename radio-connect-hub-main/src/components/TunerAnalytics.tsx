import { useEffect, useState } from "react";
import {
  clearTuner,
  getEvents,
  subscribeTuner,
  summarize,
  type TunerEvent,
} from "@/lib/analytics";

const LABELS: Record<string, string> = {
  tune: "Tuned",
  search: "Searched",
  compare_add: "Added to compare",
  compare_remove: "Removed from compare",
  share: "Shared dial",
  drawer_open: "Opened dossier",
  compare_pdf: "Exported compare PDF",
  report_sent: "Report sent",
};

export function TunerAnalytics() {
  const [events, setEvents] = useState<TunerEvent[]>([]);

  useEffect(() => {
    setEvents(getEvents());
    return subscribeTuner(setEvents);
  }, []);

  const s = summarize(events);
  const max = Math.max(1, ...s.topStations.map((t) => t.count));

  return (
    <div className="panel rounded-xl p-5 sm:p-6" data-no-reveal>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-dial text-[11px] uppercase tracking-[0.3em] text-signal">
            Live dial analytics
          </p>
          <h3 className="mt-2 text-3xl">Your listening session</h3>
        </div>
        {s.total > 0 && (
          <button
            type="button"
            onClick={clearTuner}
            className="font-dial text-[10px] uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Reset
          </button>
        )}
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        {[
          ["Dial moves", s.tunes],
          ["Searches", s.searches],
          ["Compares", s.compares],
          ["Shares", s.shares],
        ].map(([k, v]) => (
          <div key={String(k)} className="bg-surface p-4">
            <dt className="font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-1 font-dial text-2xl text-primary tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>

      {s.topStations.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Most visited stations
            </p>
            <ul className="mt-3 space-y-2.5">
              {s.topStations.map((t) => (
                <li key={t.label} className="text-sm">
                  <div className="flex justify-between text-foreground">
                    <span>{t.label}</span>
                    <span className="font-dial text-primary tabular-nums">{t.count}</span>
                  </div>
                  <span className="mt-1 block h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <span
                      className="block h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: `${(t.count / max) * 100}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Recent activity
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {s.recent.map((e, i) => (
                <li key={`${e.at}-${i}`} className="flex justify-between gap-3">
                  <span>
                    <span className="text-foreground">{LABELS[e.name] ?? e.name}</span>{" "}
                    {e.label}
                  </span>
                  <span className="font-dial text-[11px] tabular-nums">
                    {new Date(e.at).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="mt-5 text-sm text-muted-foreground">
          Move the dial, search a station or add one to compare — your session
          activity shows up here instantly.
        </p>
      )}
    </div>
  );
}
