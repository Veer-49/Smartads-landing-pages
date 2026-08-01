import { createFileRoute } from "@tanstack/react-router";
import { FrequencyTuner } from "@/components/FrequencyTuner";
import { useReveal } from "@/hooks/useReveal";
import { LeadForm } from "@/components/LeadForm";
import { stations } from "@/data/stations";
import rjStudio from "@/assets/rj-studio.jpg";
import rjTwo from "@/assets/rj-two.jpg";
import dial from "@/assets/dial.jpg";
import cityWaves from "@/assets/city-waves.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SmartAds — India's Radio Advertising Agency | FM Ad Planning",
      },
      {
        name: "description",
        content:
          "SmartAds plans and buys radio advertising across 40+ FM stations in India. Tune the dial, compare stations, and get a free media plan in 24 hours.",
      },
      {
        property: "og:title",
        content: "SmartAds — India's Radio Advertising Agency",
      },
      {
        property: "og:description",
        content:
          "Compare 40+ Indian FM stations, RJ mentions and rates. Free radio media plan in 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const mediaCompare = [
  {
    medium: "Radio (FM)",
    cpm: "₹18",
    recall: "62%",
    setup: "48 hrs",
    local: "City + locality level",
    note: "Sound builds memory. Frequency is affordable.",
    hero: true,
  },
  {
    medium: "Digital",
    cpm: "₹95",
    recall: "24%",
    setup: "24 hrs",
    local: "Pin-code level",
    note: "Ad-blockers, scroll-past and bot traffic erode delivery.",
  },
  {
    medium: "Television",
    cpm: "₹210",
    recall: "48%",
    setup: "7–10 days",
    local: "Regional feed only",
    note: "Powerful but priced out for local and mid-size brands.",
  },
  {
    medium: "Outdoor",
    cpm: "₹65",
    recall: "31%",
    setup: "10–15 days",
    local: "Site specific",
    note: "Fixed location, no message change, weather risk.",
  },
  {
    medium: "Print",
    cpm: "₹120",
    recall: "29%",
    setup: "3–5 days",
    local: "Edition level",
    note: "One day of shelf life, declining young readership.",
  },
];

const radioTypes = [
  {
    tag: "01",
    title: "FM Spot Advertising",
    body: "10 / 15 / 30-second recorded jingles placed in prime drive-time bands. The workhorse of frequency.",
    img: dial,
    alt: "Illuminated analog radio tuning dial",
  },
  {
    tag: "02",
    title: "RJ Mentions & Live Reads",
    body: "Your brand woven into an RJ's own voice — 3x higher trust than a produced spot, and no skip button.",
    img: rjStudio,
    alt: "Radio jockey speaking into a studio microphone",
  },
  {
    tag: "03",
    title: "Sponsorships & Contests",
    body: "Own a show, a countdown or a festival property. Callers, prizes and on-ground activation included.",
    img: rjTwo,
    alt: "Energetic Indian radio jockey laughing on air",
  },
  {
    tag: "04",
    title: "AIR, DTH & Digital Radio",
    body: "All India Radio's rural reach, plus streaming radio, podcasts and in-car audio for urban top-ups.",
    img: cityWaves,
    alt: "Night city skyline with radio signal waves from a broadcast tower",
  },
];

const caseStudies = [
  {
    client: "Regional Jewellery Chain",
    freq: "93.5 + 98.3",
    headline: "4,100 walk-ins in a 21-day Akshaya Tritiya burst",
    metrics: [
      ["Spots aired", "1,860"],
      ["Cost per walk-in", "₹214"],
      ["ROAS", "7.4x"],
    ],
    body: "Drive-time saturation across two stations plus RJ live reads from inside the showroom on launch weekend.",
  },
  {
    client: "EdTech Admissions",
    freq: "91.1 + 104.0",
    headline: "31% lower cost-per-lead than paid search",
    metrics: [
      ["Leads", "12,400"],
      ["CPL", "₹96"],
      ["Cities", "9"],
    ],
    body: "Contest-led sponsorship with a vanity missed-call number, retargeted digitally against station catchments.",
  },
  {
    client: "QSR Chain Launch",
    freq: "92.7 + 104.8",
    headline: "18 new outlets opened to day-one queues",
    metrics: [
      ["Reach", "1.9 Cr"],
      ["Frequency", "8.2"],
      ["Footfall lift", "+63%"],
    ],
    body: "Hyperlocal 10-second cut-ins two hours before lunch and dinner, geo-timed to each outlet's catchment.",
  },
];

const whyUs = [
  {
    t: "Rate card leverage",
    d: "₹120 Cr+ of annual radio billing means we buy at network deal rates and pass the delta to you.",
  },
  {
    t: "Planning, not order-taking",
    d: "We model reach vs frequency per city before a single spot is booked. You see the math.",
  },
  {
    t: "Creative in-house",
    d: "Scriptwriting, voice casting in 11 languages, jingle production and mastering — no vendor chain.",
  },
  {
    t: "Proof of airing",
    d: "Third-party monitored logs, spot-by-spot, with make-goods claimed on your behalf automatically.",
  },
  {
    t: "Attribution built in",
    d: "Unique numbers, promo codes and geo-lift studies so radio stops being a black box.",
  },
  {
    t: "One team, 76 cities",
    d: "Metro to Tier-3, private FM to AIR — a single plan, a single invoice, a single point of contact.",
  },
];

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 items-end gap-[2px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="eq-bar h-full w-[3px] rounded-sm bg-primary"
                  style={{ animationDelay: `${i * 0.14}s` }}
                />
              ))}
            </span>
            <span className="display text-2xl tracking-wide">SMARTADS</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex">
            <a href="#tuner" className="hover:text-primary">Stations</a>
            <a href="#types" className="hover:text-primary">Formats</a>
            <a href="#compare" className="hover:text-primary">Why radio</a>
            <a href="#work" className="hover:text-primary">Work</a>
          </nav>
          <a
            href="#plan"
            className="btn-amber rounded-md px-4 py-2 font-dial text-[11px] font-bold uppercase tracking-[0.18em]"
          >
            Free plan
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <img
          src={cityWaves}
          alt="Radio waves broadcasting over an Indian city at night"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
          <p className="font-dial text-[11px] uppercase tracking-[0.4em] text-primary">
            On air since 2009 · 76 cities · 40+ stations
          </p>
          <h1 className="mt-5 max-w-4xl text-6xl sm:text-8xl lg:text-9xl">
            INDIA LISTENS.
            <br />
            <span className="text-primary text-glow">WE MAKE IT LISTEN</span>
            <br />
            TO YOU.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            SmartAds is a radio-first advertising agency. We plan, negotiate,
            produce and monitor FM campaigns that put your brand in 51 crore
            pairs of ears every week — for a fraction of TV or digital CPM.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#plan"
              className="btn-amber rounded-md px-7 py-3.5 font-dial text-sm font-bold uppercase tracking-[0.18em]"
            >
              Get my free radio plan
            </a>
            <a
              href="#tuner"
              className="rounded-md border border-border px-7 py-3.5 font-dial text-sm uppercase tracking-[0.18em] text-foreground transition hover:border-primary hover:text-primary"
            >
              Explore the dial
            </a>
          </div>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {[
              ["51 Cr", "Weekly listeners"],
              ["₹18", "Avg. radio CPM"],
              ["1,400+", "Campaigns aired"],
              ["7.4x", "Best-case ROAS"],
            ].map(([v, k]) => (
              <div key={k} className="bg-surface p-4">
                <dt className="font-dial text-3xl text-primary">{v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-border bg-surface py-3">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-dial text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[...stations, ...stations].map((s, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="text-primary">{s.freq.toFixed(1)}</span>
              {s.name}
              <span className="text-border">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* TUNER */}
      <section id="tuner" className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-signal">
              Interactive station finder
            </p>
            <h2 className="mt-3 text-5xl sm:text-6xl">TURN THE DIAL.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Drag the frequency slider or tap a station pip. Reach, audience
            profile, marquee RJs and indicative 10-second rates update live.
          </p>
        </div>
        <FrequencyTuner />
      </section>

      {/* TYPES */}
      <section id="types" className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-signal">
            Formats we buy
          </p>
          <h2 className="mt-3 max-w-2xl text-5xl sm:text-6xl">
            FOUR WAYS TO OWN THE AIRWAVES
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {radioTypes.map((t) => (
              <article
                key={t.tag}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.alt}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <span className="absolute left-4 top-4 font-dial text-xs text-primary">
                    {t.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-3xl">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-signal">
          Media benchmark
        </p>
        <h2 className="mt-3 max-w-3xl text-5xl sm:text-6xl">
          WHY RADIO BEATS DIGITAL, TV, OUTDOOR & PRINT
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Indicative Indian market averages for a mid-size multi-city campaign.
          Radio wins on cost of frequency — and frequency is what builds recall.
        </p>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-surface-2 font-dial text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <th className="p-4">Medium</th>
                <th className="p-4">CPM</th>
                <th className="p-4">Ad recall</th>
                <th className="p-4">Go-live</th>
                <th className="p-4">Targeting</th>
                <th className="p-4">Reality check</th>
              </tr>
            </thead>
            <tbody>
              {mediaCompare.map((m) => (
                <tr
                  key={m.medium}
                  className={`border-t border-border ${m.hero ? "bg-primary/10" : "bg-card"}`}
                >
                  <td
                    className={`p-4 font-dial text-base ${m.hero ? "text-primary" : "text-foreground"}`}
                  >
                    {m.medium}
                  </td>
                  <td className="p-4 font-dial tabular-nums">{m.cpm}</td>
                  <td className="p-4 font-dial tabular-nums">{m.recall}</td>
                  <td className="p-4">{m.setup}</td>
                  <td className="p-4">{m.local}</td>
                  <td className="p-4 text-muted-foreground">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-signal">
            Case studies
          </p>
          <h2 className="mt-3 text-5xl sm:text-6xl">CAMPAIGNS THAT PAID BACK</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <article
                key={c.client}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center justify-between font-dial text-[11px] uppercase tracking-[0.2em]">
                  <span className="text-muted-foreground">{c.client}</span>
                  <span className="text-primary">{c.freq}</span>
                </div>
                <h3 className="mt-4 text-3xl leading-none">{c.headline}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
                  {c.metrics.map(([k, v]) => (
                    <div key={k} className="bg-surface p-3">
                      <dt className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="mt-1 font-dial text-lg text-primary">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-signal">
          Why SmartAds
        </p>
        <h2 className="mt-3 max-w-3xl text-5xl sm:text-6xl">
          THE BEST RADIO AGENCY IS THE ONE THAT SHOWS ITS WORKING
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <div key={w.t} className="bg-card p-6">
              <span className="font-dial text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {w.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD MAGNET + FORM */}
      <section className="border-t border-border bg-surface/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="font-dial text-[11px] uppercase tracking-[0.35em] text-primary">
              Free download included
            </p>
            <h2 className="mt-3 text-5xl sm:text-6xl">
              THE 2026 INDIA FM RATE & REACH REPORT
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              46 pages. Every major station, city by city: prime-time rates,
              listener profiles, RJ mention pricing, festival surcharges and the
              negotiation levers most brands never ask for.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Station-wise 10 / 20 / 30-sec rate benchmarks",
                "Drive-time vs non-prime reach curves",
                "RJ mention & sponsorship price bands",
                "A ready reach-vs-frequency planning template",
              ].map((li) => (
                <li key={li} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{li}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <img
                src={rjStudio}
                alt="Radio jockey recording a brand read in a broadcast studio"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="display text-2xl">SMARTADS</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Radio-first advertising agency · Mumbai · Delhi · Bengaluru
            </p>
          </div>
          <p className="font-dial text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            hello@smartads.in · +91 98200 00000
          </p>
        </div>
      </footer>
    </div>
  );
}
