import { caseStudies } from "./data";
import { PlayCircle } from "lucide-react";
import c1 from "@/assets/case-1.jpg";
import c2 from "@/assets/case-2.jpg";
import c3 from "@/assets/case-3.jpg";

const posters = [c1, c2, c3];

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Top 3 in India today</p>
        <h2 className="mt-2 text-3xl uppercase sm:text-5xl">Case studies</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Real campaigns, real numbers. Every SmartAds plan is reverse-engineered from an outcome, not an
          impression target.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <article key={cs.title} className="tile group">
              <div className="relative">
                <img
                  src={posters[i]}
                  alt={`${cs.tag} OTT advertising case study`}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-72 w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "var(--gradient-fade-bottom)" }}
                  aria-hidden="true"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur">
                  {cs.tag}
                </span>
                <span className="absolute right-4 top-4 font-display text-5xl text-foreground/40">
                  {i + 1}
                </span>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="text-2xl uppercase">{cs.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{cs.result}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{cs.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.stats.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="#plan"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
                >
                  <PlayCircle className="h-4 w-4" /> Plan something like this
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
