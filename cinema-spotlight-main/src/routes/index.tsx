import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Play, Ticket } from "lucide-react";

import { LeadForm } from "@/components/cinema/LeadForm";
import { ProjectorBeam, SeatOverlay } from "@/components/cinema/SeatOverlay";
import {
  CaseStudiesSection,
  ChainsSection,
  CompareSection,
  SectionHeading,
  SiteFooter,
  StatStrip,
  TypesSection,
  WhySmarAdsSection,
} from "@/components/cinema/Sections";

const TITLE = "SmarAds — Cinema Advertising Agency for 17,000+ Screens";
const DESCRIPTION =
  "SmarAds plans on-screen, ticket, lobby and outside-theatre cinema advertising across PVR INOX, Cinepolis, Miraj and 17,000+ Indian screens. Get the 2026 rate playbook.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#chains", label: "Chains" },
  { href: "#formats", label: "Ad formats" },
  { href: "#why-cinema", label: "Cinema vs rest" },
  { href: "#work", label: "Case studies" },
  { href: "#why-smarads", label: "Why SmarAds" },
];

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-background">
      <SeatOverlay />

      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 text-2xl">
            <Ticket className="h-5 w-5 text-primary" aria-hidden />
            SmarAds
          </a>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-muted-foreground lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="rounded-sm bg-[image:var(--gradient-gold)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get rates
          </a>
        </div>
      </header>

      {/* HERO — the view from your seat */}
      <section id="top" className="relative overflow-hidden px-6 pb-16 pt-16 sm:pt-24">
        <ProjectorBeam />

        <div className="mx-auto max-w-5xl">
          {/* The screen */}
          <div
            className="animate-reel-in relative mx-auto rounded-[3px] border border-primary/25 bg-[image:radial-gradient(ellipse_at_50%_35%,oklch(0.99_0.01_85/0.16),oklch(0.15_0.02_35))] px-6 py-16 text-center sm:px-16 sm:py-24"
            style={{ boxShadow: "var(--shadow-marquee)" }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-primary">Now showing</p>
            <h1 className="mt-5 text-5xl leading-[0.9] sm:text-7xl md:text-8xl">
              Your brand,
              <span className="block text-gold-gradient">seventy feet tall.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-foreground/75 sm:text-lg">
              SmarAds is India's cinema advertising agency. Dark room. Phones down. Surround sound.
              We put your story in front of an audience that paid to pay attention — across
              17,000+ screens in 120+ cities.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-sm bg-[image:var(--gradient-gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Play className="h-4 w-4" aria-hidden /> Get my cinema plan
              </a>
              <a
                href="#formats"
                className="inline-flex items-center gap-2 rounded-sm border border-primary/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/10"
              >
                See ad formats
              </a>
            </div>
          </div>

          {/* Screen light spill */}
          <div
            aria-hidden
            className="mx-auto h-24 w-[86%] bg-[image:linear-gradient(to_bottom,oklch(0.8_0.15_82/0.16),transparent)] blur-md"
          />

          <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden /> Take your seat
          </p>
        </div>
      </section>

      <StatStrip />
      <ChainsSection />
      <TypesSection />
      <CompareSection />
      <CaseStudiesSection />
      <WhySmarAdsSection />

      {/* LEAD MAGNET + FORM */}
      <section id="book" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            reel="The Interval — Your Turn"
            title="Two free tickets to your next campaign"
            sub="Tell us what you're launching. We'll send a screen-level media plan plus the 2026 Cinema Media Rate Playbook — free."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="ticket-notch flex flex-col justify-between gap-8 bg-[image:linear-gradient(150deg,oklch(0.24_0.09_20),oklch(0.16_0.03_30))] p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-primary">Admit one</p>
                <h3 className="mt-4 text-4xl leading-tight">
                  The 2026 Cinema
                  <br />
                  Rate Playbook
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {[
                    "Chain-wise on-screen rates & CPM benchmarks",
                    "Ticket, lobby & facade branding price bands",
                    "City and screen-selection checklist",
                    "Cinema vs digital cost-per-recall model",
                  ].map((line) => (
                    <li key={line} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="film-strip h-2 w-full rounded-full" />
            </div>

            <div className="marquee-card p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <div className="h-24 md:h-32" />
    </div>
  );
}
