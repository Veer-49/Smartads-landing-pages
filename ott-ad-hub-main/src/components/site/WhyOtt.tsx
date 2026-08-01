import { Check, X } from "lucide-react";
import { comparison, mediaScores } from "./data";

export function WhyOtt() {
  return (
    <section id="why-ott" className="scroll-mt-24 border-y border-border bg-surface/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Episode 01 · The comparison</p>
        <h2 className="mt-2 max-w-3xl text-3xl uppercase sm:text-5xl">
          OTT & digital vs TV, radio, print and outdoor
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Legacy media buys eyeballs by estimate. Streaming buys attention by name, language, pincode and
          device — and proves it the same day.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] bg-surface-2 text-[10px] font-bold uppercase tracking-widest sm:text-xs">
            <div className="p-3 sm:p-4">What matters</div>
            <div className="p-3 text-primary sm:p-4">OTT / Digital</div>
            <div className="p-3 text-muted-foreground sm:p-4">TV · Radio · Print · OOH</div>
          </div>
          {comparison.map((r, i) => (
            <div
              key={r.metric}
              className={`grid grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)_minmax(0,1.3fr)] border-t border-border ${
                i % 2 ? "bg-background/40" : ""
              }`}
            >
              <div className="p-3 text-sm font-semibold sm:p-4">{r.metric}</div>
              <div className="flex gap-2 p-3 text-sm text-foreground sm:p-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{r.ott}</span>
              </div>
              <div className="flex gap-2 p-3 text-sm text-muted-foreground sm:p-4">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{r.legacy}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {mediaScores.map((m) => (
            <div key={m.medium} className="glow-panel p-5">
              <h3 className="text-xl uppercase">{m.medium}</h3>
              {[
                ["Targeting precision", m.precision],
                ["Accountability", m.accountability],
                ["Cost efficiency", m.cost],
              ].map(([label, val]) => (
                <div key={label as string} className="mt-4">
                  <div className="flex justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
                    <span>{label}</span>
                    <span>{val}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${val}%`, background: "var(--gradient-ember)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
