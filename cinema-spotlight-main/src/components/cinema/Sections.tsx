import {
  ArrowRight,
  Check,
  Film,
  MapPin,
  Minus,
  Quote,
  Star,
  Ticket,
} from "lucide-react";

import { adTypes, caseStudies, chains, mediaCompare, reasons, stats } from "./data";
import ticketBranding from "@/assets/ticket-branding.jpg";
import outsideBranding from "@/assets/outside-branding.jpg";
import lobbyBranding from "@/assets/lobby-branding.jpg";

export function SectionHeading({
  reel,
  title,
  sub,
}: {
  reel: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-primary">{reel}</p>
      <h2 className="mt-3 text-4xl leading-[0.95] sm:text-6xl">{title}</h2>
      {sub ? <p className="mt-4 text-base text-muted-foreground">{sub}</p> : null}
      <div className="film-strip mx-auto mt-7 h-1.5 w-40 rounded-full" />
    </div>
  );
}

export function StatStrip() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl text-gold-gradient sm:text-5xl">{s.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ChainsSection() {
  return (
    <section id="chains" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        reel="Reel 01 — The Network"
        title="Every chain. Every screen. One plan."
        sub="From gold-class recliners in metro multiplexes to packed single screens in tier-3 towns, we hold direct inventory access across India's cinema landscape."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {chains.map((chain) => (
          <article key={chain.name} className="marquee-card p-6">
            <div className="flex items-center gap-2 text-primary">
              <Film className="h-4 w-4" aria-hidden />
              <span className="text-[11px] uppercase tracking-[0.2em]">{chain.screens}</span>
            </div>
            <h3 className="mt-4 text-2xl">{chain.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{chain.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const galleries = [
  {
    src: ticketBranding,
    alt: "Branded cinema ticket stub held in hand with custom advertising printed on it",
    label: "Movie ticket branding",
    note: "A billboard the audience keeps in their pocket.",
  },
  {
    src: outsideBranding,
    alt: "Multiplex exterior at dusk with illuminated brand banners and billboards",
    label: "Outside theatre branding",
    note: "Facade, box office and parking-level dominance.",
  },
  {
    src: lobbyBranding,
    alt: "Cinema lobby with a branded standee, popcorn tub and drink cup",
    label: "Lobby, standee & F&B",
    note: "Held in hand for the full runtime.",
  },
];

export function TypesSection() {
  return (
    <section id="formats" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        reel="Reel 02 — The Formats"
        title="Eight ways to own the auditorium"
        sub="Cinema is not one ad slot. It is a 90-minute journey from the parking lot to the credits — and we can brand every step of it."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {galleries.map((g) => (
          <figure key={g.label} className="marquee-card group overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={g.src}
                alt={g.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[image:linear-gradient(to_top,oklch(0.12_0.01_30)_5%,transparent_60%)]" />
            </div>
            <figcaption className="p-5">
              <h3 className="text-xl text-primary">{g.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{g.note}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {adTypes.map((type) => {
          const Icon = type.icon;
          return (
            <article key={type.title} className="marquee-card flex flex-col gap-3 p-6">
              <Icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-xl leading-tight">{type.title}</h3>
              <p className="text-sm text-muted-foreground">{type.copy}</p>
              <span className="mt-auto text-[11px] uppercase tracking-[0.2em] text-primary/80">
                {type.duration}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function CompareSection() {
  return (
    <section id="why-cinema" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          reel="Reel 03 — The Comparison"
          title="Nobody scrolls past a 70-foot screen"
          sub="Cinema is the only medium where the phone is down, the lights are off and the audience paid to be there."
        />

        <div className="mt-14 overflow-hidden rounded-sm border border-border">
          <div className="hidden grid-cols-4 gap-4 border-b border-border bg-card/60 px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:grid">
            <span>Medium</span>
            <span>Attention</span>
            <span>Avoidability</span>
            <span>Recall</span>
          </div>
          {mediaCompare.map((row) => (
            <div
              key={row.medium}
              className={`grid gap-2 px-6 py-5 md:grid-cols-4 md:items-center ${
                row.highlight
                  ? "border-y border-primary/40 bg-[image:linear-gradient(90deg,oklch(0.8_0.15_82/0.14),transparent)]"
                  : "border-b border-border/60"
              }`}
            >
              <p
                className={`flex items-center gap-2 text-2xl ${
                  row.highlight ? "text-primary" : "text-foreground/70"
                }`}
              >
                {row.highlight ? (
                  <Check className="h-4 w-4" aria-hidden />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" aria-hidden />
                )}
                {row.medium}
              </p>
              <p className="text-sm text-muted-foreground">{row.attention}</p>
              <p className="text-sm text-muted-foreground">{row.skippable}</p>
              <p className="text-sm text-muted-foreground">{row.recall}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        reel="Reel 04 — The Results"
        title="Case studies from the dark"
        sub="Real campaigns, real screens, real numbers from the post-campaign decks."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <article key={cs.title} className="marquee-card p-8">
            <span className="text-[11px] uppercase tracking-[0.28em] text-primary">{cs.tag}</span>
            <h3 className="mt-3 text-3xl">{cs.title}</h3>
            <div className="mt-6 flex items-baseline gap-3">
              <p className="text-5xl text-gold-gradient">{cs.metric}</p>
              <p className="text-sm text-muted-foreground">{cs.metricLabel}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cs.copy}</p>
          </article>
        ))}
      </div>

      <blockquote className="marquee-card mt-6 flex flex-col gap-4 p-8 md:flex-row md:items-center md:gap-8">
        <Quote className="h-8 w-8 shrink-0 text-primary" aria-hidden />
        <p className="text-lg italic text-foreground/85">
          “We had run digital for three years. One quarter of cinema with SmarAds gave us the
          highest recall we have ever measured — and our franchise enquiries doubled.”
        </p>
        <footer className="shrink-0 text-sm text-muted-foreground">
          <span className="block text-foreground">Head of Marketing</span>
          National QSR brand
        </footer>
      </blockquote>
    </section>
  );
}

export function WhySmarAdsSection() {
  return (
    <section id="why-smarads" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          reel="Reel 05 — The Agency"
          title="Why SmarAds runs the projector"
          sub="India's cinema advertising specialists — not a general media shop that also sells screens."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => (
            <article key={r.title} className="marquee-card p-7">
              <div className="flex items-center gap-3">
                <span className="ticket-notch-sm flex h-9 items-center bg-primary/15 px-4 text-xs uppercase tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Star className="h-4 w-4 text-primary" aria-hidden />
              </div>
              <h3 className="mt-5 text-2xl leading-tight">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-3xl">
            <Ticket className="h-6 w-6 text-primary" aria-hidden />
            SmarAds
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Cinema advertising agency. On-screen, on-ticket, in-lobby and outside the theatre —
            across 17,000+ Indian screens.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" aria-hidden /> Mumbai · Delhi · Bengaluru ·
            Hyderabad
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
          >
            Plan a cinema campaign <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
      <div className="film-strip h-2 w-full" />
    </footer>
  );
}