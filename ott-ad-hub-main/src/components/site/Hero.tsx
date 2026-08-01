import { Play, Info, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-ott.jpg";

const marquee = [
  "40+ OTT platforms",
  "14 languages",
  "CTV + Mobile + Web",
  "Live sports inventory",
  "Pincode targeting",
  "Real-time dashboards",
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Streaming devices playing premium OTT content across TV, mobile, tablet and laptop"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-fade-right)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-fade-bottom)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:pb-24">
        <div className="max-w-2xl">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="rounded-sm bg-primary px-2 py-1 text-primary-foreground">Series 2026</span>
            <span className="text-muted-foreground">OTT · CTV · Digital · India</span>
          </div>

          <h1 className="text-5xl uppercase sm:text-7xl lg:text-8xl">
            Your brand,
            <br />
            <span className="ember-text">in prime time</span>
            <br />
            of every screen.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            SmartAds plans and buys advertising inside India's biggest streaming
            platforms — JioHotstar, Netflix, Prime Video, ZEE5, SonyLIV, aha and 35
            more. Non-skippable, language-targeted, measured to the last rupee.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#plan"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105"
            >
              <Play className="h-4 w-4 fill-current" />
              Get My Free OTT Media Plan
            </a>
            <a
              href="#why-ott"
              className="inline-flex items-center gap-2 rounded-sm bg-secondary/80 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-secondary-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <Info className="h-4 w-4" />
              Why OTT Wins
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {[
              ["₹120 Cr+", "media planned"],
              ["1.4 B+", "impressions delivered"],
              ["320+", "brands launched"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-foreground">{n}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-y border-border bg-background/70 py-3 backdrop-blur">
        <div className="flex items-center gap-8 overflow-hidden px-4">
          <TrendingUp className="h-4 w-4 shrink-0 text-primary" />
          {marquee.map((m) => (
            <span
              key={m}
              className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
