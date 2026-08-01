import { useState } from "react";
import { airports, airportTypes } from "./data";

const filters = ["All", "International", "Domestic", "Customs", "Greenfield"] as const;

export function Network() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const rows = airports.filter((a) => active === "All" || a.category === active);

  return (
    <section id="network" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="eyebrow">Section 01 — The Network</p>
      <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
        Every terminal worth <span className="italic text-gold-gradient">owning</span> in India.
      </h2>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        160+ operational airports. 34 international gateways. One media partner with
        direct concessionaire access to the inventory that actually converts.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div className="glass-panel rounded-xl p-1.5">
          <div className="flex flex-wrap gap-1.5 border-b border-border/60 p-2.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={
                  "rounded-full px-3.5 py-1.5 font-mono text-[0.62rem] tracking-[0.16em] uppercase transition-colors " +
                  (active === f
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {f}
              </button>
            ))}
          </div>
          <div className="max-h-[26rem] overflow-y-auto">
            <table className="w-full font-mono text-xs">
              <tbody>
                {rows.map((a) => (
                  <tr
                    key={a.code}
                    className="border-b border-border/40 transition-colors last:border-0 hover:bg-surface-2/70"
                  >
                    <td className="w-14 px-3 py-3 text-gold">{a.code}</td>
                    <td className="px-2 py-3">
                      <span className="block truncate font-sans text-[0.78rem] text-foreground">
                        {a.city}
                      </span>
                      <span className="block truncate text-[0.62rem] text-muted-foreground">
                        {a.name}
                      </span>
                    </td>
                    <td className="hidden px-3 py-3 text-right text-muted-foreground sm:table-cell">
                      {a.footfall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[0.68rem] tracking-[0.28em] text-muted-foreground uppercase">
            Types of airports we buy
          </h3>
          <div className="mt-5 space-y-3">
            {airportTypes.map((t) => (
              <div
                key={t.title}
                className="group rounded-lg border border-border/70 bg-surface/50 p-5 transition-colors hover:border-gold/50"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="text-lg">{t.title}</h4>
                  <span className="shrink-0 font-mono text-xs text-gold">
                    {t.stat} <span className="text-muted-foreground">{t.statLabel}</span>
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
