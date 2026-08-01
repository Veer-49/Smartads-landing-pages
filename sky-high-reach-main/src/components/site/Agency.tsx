import { whySmarAds } from "./data";

export function Agency() {
  return (
    <section id="agency" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <p className="eyebrow">Section 05 — The Agency</p>
      <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">
        India's specialist in{" "}
        <span className="italic text-gold-gradient">cinema-grade</span> airport advertising.
      </h2>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        SmarAds began by selling out movie screens. We now bring the same
        release-week discipline — key art, city pacing, opening-weekend weight — to
        every terminal in the country.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
        {whySmarAds.map((w, i) => (
          <div key={w.title} className="bg-background p-7 transition-colors hover:bg-surface/70">
            <span className="font-mono text-[0.62rem] tracking-[0.2em] text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl">{w.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
