import { whyUs } from "./data";
import { Sparkles } from "lucide-react";

export function WhySmartAds() {
  return (
    <section
      id="why-smartads"
      className="scroll-mt-24 border-y border-border bg-surface/40 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Original series</p>
            <h2 className="mt-2 text-3xl uppercase sm:text-5xl">
              Why SmartAds is India's sharpest OTT agency
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are not a generalist digital shop that also sells OTT. Streaming is the whole business — the
              partnerships, the creative craft and the measurement stack are all built for it.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["40+", "OTT platforms"],
                ["14", "languages planned"],
                ["72 hrs", "plan to live"],
                ["0%", "hidden reseller margin"],
              ].map(([n, l]) => (
                <div key={l} className="glow-panel p-4">
                  <div className="font-display text-3xl ember-text">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="glow-panel p-5 transition-colors hover:border-primary/50">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-xl uppercase">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
