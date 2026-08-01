import { caseStudies } from "./data";

export function CaseStudies() {
  return (
    <section id="work" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="eyebrow">Section 04 — Boarding Passes</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          Campaigns that <span className="italic text-gold-gradient">landed</span>.
        </h2>

        <div className="mt-14 space-y-5">
          {caseStudies.map((c) => (
            <article
              key={c.client}
              className="grid overflow-hidden rounded-xl border border-border/70 bg-background/60 md:grid-cols-[1fr_auto]"
            >
              <div className="p-7 md:p-9">
                <p className="eyebrow">{c.format}</p>
                <h3 className="mt-3 text-3xl">{c.client}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {c.story}
                </p>
                <p className="mt-5 font-mono text-xs tracking-wider text-gold">{c.result}</p>
              </div>
              <div className="flex flex-col justify-center border-t border-dashed border-border/70 px-9 py-7 text-center md:border-t-0 md:border-l md:px-12">
                <p className="font-display text-5xl text-gold-gradient">{c.lift}</p>
                <p className="mt-1 font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {c.liftLabel}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
