import { mediaComparison } from "./data";

export function Comparison() {
  return (
    <section id="why-airport" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="eyebrow">Section 03 — The Case</p>
      <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">
        Nobody skips an ad while waiting for a{" "}
        <span className="italic text-gold-gradient">boarding call</span>.
      </h2>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Every other medium fights for a fraction of a second of divided attention.
        Airport media buys two undistracted hours from the top 3% of Indian consumers.
      </p>

      <div className="glass-panel mt-12 overflow-x-auto rounded-xl">
        <table className="w-full min-w-[46rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border/70 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
              <th className="px-5 py-4 font-normal">Medium</th>
              <th className="px-5 py-4 font-normal">Audience</th>
              <th className="px-5 py-4 font-normal">Attention time</th>
              <th className="px-5 py-4 font-normal">Skippable?</th>
              <th className="px-5 py-4 font-normal">Recall</th>
              <th className="px-5 py-4 font-normal">Clutter</th>
            </tr>
          </thead>
          <tbody>
            {mediaComparison.map((m, i) => (
              <tr
                key={m.medium}
                className={
                  "border-b border-border/40 last:border-0 " +
                  (i === 0 ? "bg-primary/8" : "")
                }
              >
                <td
                  className={
                    "px-5 py-4 " + (i === 0 ? "font-display text-xl text-gold" : "text-foreground")
                  }
                >
                  {m.medium}
                </td>
                <td className="px-5 py-4 text-muted-foreground">{m.audience}</td>
                <td className={"px-5 py-4 font-mono text-xs " + (i === 0 ? "text-gold" : "text-muted-foreground")}>
                  {m.dwell}
                </td>
                <td className="px-5 py-4 text-muted-foreground">{m.skip}</td>
                <td className={"px-5 py-4 font-mono text-xs " + (i === 0 ? "text-gold" : "text-muted-foreground")}>
                  {m.recall}
                </td>
                <td className="px-5 py-4 text-muted-foreground">{m.clutter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-mono text-[0.62rem] tracking-wider text-muted-foreground uppercase">
        Indicative industry benchmarks · full methodology in the media kit
      </p>
    </section>
  );
}
