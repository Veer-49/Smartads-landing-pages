import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

import cabinHero from "@/assets/cabin-hero.jpg";
import insideBranding from "@/assets/inside-branding.jpg";
import outsideBranding from "@/assets/outside-branding.jpg";
import inflightMedia from "@/assets/inflight-media.jpg";
import airportBranding from "@/assets/airport-branding.jpg";

const TITLE = "SmartAds — India's Airline Advertising Agency | Inflight & Aircraft Branding";
const DESC =
  "SmartAds plans and executes airline advertising across IndiGo, Air India, Akasa, SpiceJet and more — inflight branding, aircraft livery, tray tables, boarding passes and airport media.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

/* ---------------------------------- data --------------------------------- */

const airlines = [
  { name: "IndiGo", type: "Low-cost carrier", fleet: "410+ aircraft", reach: "120M+ pax / yr" },
  { name: "Air India", type: "Full-service, flag carrier", fleet: "200+ aircraft", reach: "35M+ pax / yr" },
  { name: "Air India Express", type: "Low-cost, short haul", fleet: "100+ aircraft", reach: "20M+ pax / yr" },
  { name: "Akasa Air", type: "New-age low-cost", fleet: "30+ aircraft", reach: "9M+ pax / yr" },
  { name: "SpiceJet", type: "Low-cost carrier", fleet: "50+ aircraft", reach: "12M+ pax / yr" },
  { name: "Vistara Legacy Routes", type: "Premium full-service", fleet: "Merged into Air India", reach: "Premium metro flyers" },
  { name: "Alliance Air", type: "Regional / UDAN", fleet: "20+ ATRs", reach: "Tier 2–3 India" },
  { name: "FLY91 & Star Air", type: "Regional connectors", fleet: "10+ aircraft", reach: "Emerging corridors" },
];

const adTypes = [
  {
    title: "Inside Aircraft Branding",
    image: insideBranding,
    copy: "Headrest covers, tray tables, overhead bins, seat-back panels, cabin baggage bins and aisle danglers — 90–180 minutes of uninterrupted eye contact with a seated audience.",
    tags: ["Headrest", "Tray table", "Overhead bin", "Seat-back"],
  },
  {
    title: "Outside Aircraft Branding",
    image: outsideBranding,
    copy: "Full fuselage wraps, tail-fin livery, winglet and engine cowl branding. A flying billboard photographed by every passenger, spotter and news camera at 60+ airports.",
    tags: ["Full livery", "Tail fin", "Fuselage wrap", "Winglets"],
  },
  {
    title: "Inflight Media & Print",
    image: inflightMedia,
    copy: "Inflight magazine spreads, boarding passes, baggage tags, tissue and napkin branding, meal-box sleeves, sampling and inflight announcements read by the crew.",
    tags: ["Magazine", "Boarding pass", "Sampling", "Announcements"],
  },
  {
    title: "Airport & Jet-Bridge Media",
    image: airportBranding,
    copy: "Aerobridge wraps, gate-side digital screens, baggage-belt branding, check-in counters and lounge takeovers — surround the flyer before they even board.",
    tags: ["Aerobridge", "Digital screens", "Lounges", "Baggage belt"],
  },
];

const comparison = [
  { medium: "Airline (SmartAds)", audience: "SEC A / A+ decision makers", attention: "90–180 min captive", clutter: "Near zero", recall: "82%" },
  { medium: "Digital", audience: "Broad, unverified", attention: "1.7 sec avg", clutter: "Extreme + adblock", recall: "22%" },
  { medium: "Television", audience: "Mass household", attention: "Zapped / skipped", clutter: "High", recall: "35%" },
  { medium: "Outdoor / OOH", audience: "Commuters in motion", attention: "3–5 sec", clutter: "High", recall: "31%" },
  { medium: "Radio", audience: "Drive-time listeners", attention: "Background", clutter: "Medium", recall: "18%" },
  { medium: "Newspaper", audience: "Ageing readership", attention: "Skim", clutter: "Medium", recall: "24%" },
];

const caseStudies = [
  {
    client: "Global BFSI Brand",
    goal: "Reach HNI flyers before an IPO roadshow",
    play: "Tray table + boarding pass across 42 metro routes for 90 days",
    result: "3.1x lift in assisted brand search, 11,400 qualified leads",
  },
  {
    client: "Luxury Real Estate Developer",
    goal: "Sell 220 units to NRI & metro buyers",
    play: "Full fuselage livery + inflight magazine + lounge takeover",
    result: "₹410 Cr pipeline, 68 site visits in month one",
  },
  {
    client: "D2C Wellness Brand",
    goal: "Break out of paid-social CAC spiral",
    play: "Cabin sampling + headrest branding on 6 leisure routes",
    result: "CAC down 37%, 2.4L samples redeemed via QR",
  },
  {
    client: "State Tourism Board",
    goal: "Drive inbound season traffic",
    play: "Aerobridge wraps at 9 airports + tail-fin branding",
    result: "+29% YoY arrivals in the campaign quarter",
  },
];

const reasons = [
  { n: "01", t: "Direct airline mandates", d: "Rate-card access and negotiated inventory with every major Indian carrier — no layers, no markups." },
  { n: "02", t: "Route-level audience planning", d: "We plan by sector, seat class and departure time, not by vague impressions." },
  { n: "03", t: "In-house creative for cabin", d: "Designers who know curvature, fabric, print permanence and DGCA-safe material specs." },
  { n: "04", t: "Compliance handled end-to-end", d: "Airline approvals, DGCA norms, fire-retardant certification and installation windows." },
  { n: "05", t: "Measurement, not guesswork", d: "QR/UTM attribution, brand-lift studies and boarding-count verified delivery reports." },
  { n: "06", t: "17 years, 900+ campaigns", d: "One of India's most experienced transit and airline media teams." },
];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(20),
  company: z.string().trim().min(2, "Enter your company").max(120),
  budget: z.string().min(1),
  message: z.string().trim().max(800).optional(),
});

/* -------------------------------- sections -------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary">
      {children}
    </p>
  );
}

function Landing() {
  return (
    <main className="relative overflow-hidden bg-cabin">
      <CabinFrame />
      <Hero />
      <Airlines />
      <Types />
      <Comparison />
      <CaseStudies />
      <WhySmartAds />
      <Magnet />
      <LeadSection />
      <Footer />
    </main>
  );
}

/* Cabin illusion: overhead bins and fuselage curvature framing the page */
function CabinFrame() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      <div className="overhead-bin absolute inset-x-0 top-0 h-10 md:h-16" />
      <div className="absolute inset-x-0 top-10 h-px bg-primary/25 md:top-16" />
      <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/70 to-transparent md:w-20" />
      <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black/70 to-transparent md:w-20" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] px-5 pt-24 pb-20 md:px-24 md:pt-32">
      <div className="absolute inset-0">
        <img
          src={cabinHero}
          alt="Passenger point of view inside a premium airline cabin at sunset"
          width={1920}
          height={1088}
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cabin/85 via-cabin/60 to-cabin" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Eyebrow>Seat 2A · India's Airline Advertising Agency</Eyebrow>
          <h1 className="text-5xl leading-[0.95] font-light tracking-tight md:text-7xl">
            Your brand,
            <br />
            <span className="text-gradient-gold italic">35,000 feet</span> above
            <br />
            the noise.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            SmartAds puts your message in front of India's most valuable audience — seated,
            unplugged and undistracted for the length of a flight. Aircraft livery, cabin branding,
            inflight print and airport media, planned route by route.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#lead"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
            >
              Get my flight plan
            </a>
            <a
              href="#magnet"
              className="rounded-full border border-primary/40 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground transition hover:bg-primary/10"
            >
              Free 2026 media kit
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["150M+", "Annual flyers reached"],
              ["60+", "Indian airports"],
              ["82%", "Avg. ad recall"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-primary md:text-4xl">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Cabin window with boarding-pass card */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="cabin-window overflow-hidden bg-black/40 p-10">
            <div className="rounded-sm bg-gradient-to-b from-orange-200/10 to-transparent p-1">
              <div className="panel rounded-sm p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                  Boarding Pass
                </p>
                <p className="mt-3 font-display text-3xl">Your Brand</p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  <div>
                    <p className="text-foreground">From</p>
                    <p className="mt-1">Ad clutter</p>
                  </div>
                  <div>
                    <p className="text-foreground">To</p>
                    <p className="mt-1">Full attention</p>
                  </div>
                  <div>
                    <p className="text-foreground">Seat</p>
                    <p className="mt-1">Every one</p>
                  </div>
                </div>
                <div className="mt-7 flex gap-[3px]">
                  {Array.from({ length: 42 }).map((_, i) => (
                    <span
                      key={i}
                      className="block h-9 bg-foreground/70"
                      style={{ width: i % 3 === 0 ? 3 : 1 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Airlines() {
  return (
    <section className="relative z-10 border-t border-border bg-background px-5 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Inventory access</Eyebrow>
        <h2 className="max-w-2xl text-4xl font-light md:text-5xl">
          Every airline flying in India, on one media plan
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Full-service carriers, low-cost carriers, regional UDAN operators, charters and private
          jets — we buy across all of them.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {airlines.map((a) => (
            <div key={a.name} className="bg-card p-7 transition hover:bg-accent">
              <p className="font-display text-2xl">{a.name}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-primary">{a.type}</p>
              <p className="mt-5 text-sm text-muted-foreground">{a.fleet}</p>
              <p className="text-sm text-muted-foreground">{a.reach}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Full-service carriers", "Premium cabins, business flyers, long haul and international sectors."],
            ["Low-cost carriers", "Highest frequency and volume — the workhorse of Indian aviation."],
            ["Regional & charter", "Tier 2–3 corridors, UDAN routes, private jets and helicopters."],
          ].map(([t, d]) => (
            <div key={t} className="panel rounded-lg p-6">
              <p className="font-display text-xl text-primary">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Types() {
  return (
    <section className="relative z-10 bg-cabin px-5 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Types of airline advertising</Eyebrow>
        <h2 className="max-w-2xl text-4xl font-light md:text-5xl">
          From the tail fin to the tray table
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {adTypes.map((t) => (
            <article key={t.title} className="panel group overflow-hidden rounded-xl">
              <div className="overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 px-3 py-1 text-[0.7rem] uppercase tracking-widest text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="relative z-10 border-y border-border bg-background px-5 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Airline vs. every other medium</Eyebrow>
        <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
          Nobody scrolls past a tray table at 35,000 feet
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A flyer cannot skip, block, mute or change the channel. That single fact makes airline
          media the highest-attention channel available in India today.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <th className="py-4 pr-4 font-medium">Medium</th>
                <th className="py-4 pr-4 font-medium">Audience quality</th>
                <th className="py-4 pr-4 font-medium">Attention time</th>
                <th className="py-4 pr-4 font-medium">Clutter</th>
                <th className="py-4 font-medium">Ad recall</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((r, i) => (
                <tr
                  key={r.medium}
                  className={`border-b border-border ${i === 0 ? "bg-primary/10" : ""}`}
                >
                  <td className={`py-5 pr-4 ${i === 0 ? "font-semibold text-primary" : ""}`}>
                    {r.medium}
                  </td>
                  <td className="py-5 pr-4 text-muted-foreground">{r.audience}</td>
                  <td className="py-5 pr-4 text-muted-foreground">{r.attention}</td>
                  <td className="py-5 pr-4 text-muted-foreground">{r.clutter}</td>
                  <td className={`py-5 ${i === 0 ? "font-semibold text-primary" : "text-muted-foreground"}`}>
                    {r.recall}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="relative z-10 bg-cabin px-5 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Case studies</Eyebrow>
        <h2 className="max-w-2xl text-4xl font-light md:text-5xl">Flights that moved numbers</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((c) => (
            <article key={c.client} className="panel rounded-xl p-8">
              <h3 className="font-display text-2xl text-primary">{c.client}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Objective</dt>
                  <dd className="mt-1">{c.goal}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">The play</dt>
                  <dd className="mt-1">{c.play}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">Result</dt>
                  <dd className="mt-1 font-display text-xl text-primary">{c.result}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySmartAds() {
  return (
    <section className="relative z-10 border-t border-border bg-background px-5 py-24 md:px-24">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Why SmartAds</Eyebrow>
        <h2 className="max-w-3xl text-4xl font-light md:text-5xl">
          India's most complete airline advertising agency
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.n} className="bg-card p-8">
              <span className="font-display text-4xl text-primary/40">{r.n}</span>
              <h3 className="mt-4 font-display text-2xl">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Magnet() {
  return (
    <section id="magnet" className="relative z-10 bg-cabin px-5 py-20 md:px-24">
      <div className="panel mx-auto flex max-w-7xl flex-col gap-6 rounded-xl p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Eyebrow>Free download</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl">
            The 2026 Indian Airline Media Kit
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            48 pages: airline-wise inventory, indicative rate cards, route-level passenger profiles,
            creative specs and a campaign ROI calculator. Sent instantly to your inbox.
          </p>
        </div>
        <a
          href="#lead"
          className="shrink-0 rounded-full bg-primary px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
        >
          Send me the kit
        </a>
      </div>
    </section>
  );
}

function LeadSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = leadSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(true);
  }

  const field =
    "w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="lead" className="relative z-10 border-t border-border bg-background px-5 py-24 md:px-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Boarding now</Eyebrow>
          <h2 className="text-4xl font-light md:text-5xl">
            Request your <span className="text-gradient-gold italic">flight plan</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us your market and budget. Within 24 hours you'll get a route-level airline media
            plan, indicative costs and projected reach — plus the 2026 media kit.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            {[
              "Custom route & airline recommendation",
              "Indicative rate card and package costs",
              "Creative mockups on real aircraft assets",
              "No obligation, no agency retainer to start",
            ].map((li) => (
              <li key={li} className="flex gap-3">
                <span className="text-primary">✦</span>
                {li}
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-xl p-8 md:p-10">
          {done ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <p className="font-display text-4xl text-primary">Cleared for takeoff</p>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Thanks — your media kit is on its way and a SmartAds planner will reach out within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input id="name" name="name" maxLength={100} className={field} placeholder="Aarav Mehta" />
                {errors['name'] && <p className="mt-1 text-xs text-destructive">{errors['name']}</p>}
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Company</label>
                <input id="company" name="company" maxLength={120} className={field} placeholder="Brand Pvt Ltd" />
                {errors['company'] && <p className="mt-1 text-xs text-destructive">{errors['company']}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Work email</label>
                <input id="email" name="email" type="email" maxLength={255} className={field} placeholder="you@company.com" />
                {errors['email'] && <p className="mt-1 text-xs text-destructive">{errors['email']}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                <input id="phone" name="phone" maxLength={20} className={field} placeholder="+91 90000 00000" />
                {errors['phone'] && <p className="mt-1 text-xs text-destructive">{errors['phone']}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="budget" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Indicative budget</label>
                <select id="budget" name="budget" defaultValue="₹10L – ₹25L" className={field}>
                  <option>Under ₹10L</option>
                  <option>₹10L – ₹25L</option>
                  <option>₹25L – ₹1 Cr</option>
                  <option>₹1 Cr+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">What are you launching?</label>
                <textarea id="message" name="message" rows={3} maxLength={800} className={field} placeholder="Markets, timelines, objectives…" />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow)] transition hover:brightness-110"
              >
                Get my flight plan + media kit
              </button>
              <p className="sm:col-span-2 text-center text-xs text-muted-foreground">
                We reply within one business day. Your details stay with SmartAds.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-cabin px-5 py-12 md:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl text-foreground">SmartAds</p>
        <p>Airline · Airport · Transit media across India</p>
        <p>© {new Date().getFullYear()} SmartAds Media</p>
      </div>
    </footer>
  );
}