import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/LeadForm";
import press from "@/assets/press.jpg";
import readers from "@/assets/readers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smarads | Newspaper Advertising Agency — Book Print Ads" },
      {
        name: "description",
        content:
          "Smarads plans and books newspaper advertising in 3,000+ dailies: display, classified, jackets and inserts. Get the free 2026 rate card.",
      },
      { property: "og:title", content: "Smarads | Newspaper Advertising Agency — Book Print Ads" },
      {
        property: "og:description",
        content:
          "Smarads plans and books newspaper advertising in 3,000+ dailies: display, classified, jackets and inserts. Get the free 2026 rate card.",
      },
    ],
  }),
  component: Index,
});

const publishers = [
  { name: "The Times of India", lang: "English", reach: "15.2M", cities: "58 editions" },
  { name: "Dainik Jagran", lang: "Hindi", reach: "23.8M", cities: "37 editions" },
  { name: "Hindustan Times", lang: "English", reach: "7.4M", cities: "21 editions" },
  { name: "Dainik Bhaskar", lang: "Hindi", reach: "19.6M", cities: "65 editions" },
  { name: "The Hindu", lang: "English", reach: "5.9M", cities: "22 editions" },
  { name: "Malayala Manorama", lang: "Malayalam", reach: "9.1M", cities: "19 editions" },
  { name: "Eenadu", lang: "Telugu", reach: "8.3M", cities: "24 editions" },
  { name: "Lokmat", lang: "Marathi", reach: "7.7M", cities: "16 editions" },
  { name: "Economic Times", lang: "Business", reach: "2.1M", cities: "12 editions" },
  { name: "Anandabazar Patrika", lang: "Bengali", reach: "6.2M", cities: "9 editions" },
  { name: "Daily Thanthi", lang: "Tamil", reach: "8.8M", cities: "17 editions" },
  { name: "Gujarat Samachar", lang: "Gujarati", reach: "4.6M", cities: "11 editions" },
];

const adTypes = [
  {
    name: "Front Page Display",
    price: "from ₹1,80,000",
    body: "Solus strips, ears and masthead units — the single highest-recall position in print.",
  },
  {
    name: "Full & Half Page",
    price: "from ₹95,000",
    body: "Colour display for launches, offers and public notices. Booked by section and edition.",
  },
  {
    name: "Classified Text & Display",
    price: "from ₹450",
    body: "Matrimonial, recruitment, tender, property, obituary and name-change notices.",
  },
  {
    name: "Jackets & Wraps",
    price: "from ₹4,20,000",
    body: "Your brand becomes the newspaper's cover — impossible to skip, impossible to block.",
  },
  {
    name: "Inserts & Sampling",
    price: "from ₹1.10 / copy",
    body: "Leaflets, catalogues and sachets hand-delivered inside the paper to chosen pincodes.",
  },
  {
    name: "Advertorials & Supplements",
    price: "from ₹1,35,000",
    body: "Editorial-style storytelling with the publication's own credibility attached.",
  },
];

const media = [
  {
    channel: "Digital display",
    weakness: "31% of impressions never seen; ad-blockers and bot traffic",
    print: "100% viewable on paper. Nothing to block, nothing to scroll past.",
  },
  {
    channel: "Television",
    weakness: "Prime-time CPMs up 4× since 2019; zapping during breaks",
    print: "One-third the cost per thousand, with dwell time you can measure in minutes.",
  },
  {
    channel: "Outdoor",
    weakness: "3 seconds of attention, no detail, no coupon, no pincode control",
    print: "Room for price, terms, QR and a full offer — read at the breakfast table.",
  },
  {
    channel: "Radio",
    weakness: "Audio-only, background listening, no shelf-life",
    print: "Kept, cut out and passed around. Average reader spends 24 minutes per issue.",
  },
  {
    channel: "Influencers",
    weakness: "Borrowed trust, volatile pricing, fake-follower risk",
    print: "Ranked the most trusted ad medium by 68% of Indian readers (IRS trends).",
  },
];

const cases = [
  {
    kicker: "Retail · 42 cities",
    head: "Furniture chain sells out a warehouse in 6 days",
    body: "Half-page colour in Dainik Bhaskar plus pincode-targeted inserts across Tier-2 markets.",
    stats: [
      ["₹18.4L", "ad spend"],
      ["₹3.1Cr", "revenue"],
      ["16.8×", "ROAS"],
    ],
  },
  {
    kicker: "Education · Admissions",
    head: "Engineering college fills 1,240 seats before the deadline",
    body: "Front-page ears for 9 days in regional dailies, timed to result-declaration mornings.",
    stats: [
      ["4,900", "applications"],
      ["₹1,480", "cost / lead"],
      ["2.4×", "vs paid social"],
    ],
  },
  {
    kicker: "BFSI · Trust building",
    head: "NBFC recovers deposits after a category scare",
    body: "Jacket wrap in Economic Times plus advertorial series in three business dailies.",
    stats: [
      ["₹212Cr", "deposits"],
      ["+31 pts", "trust score"],
      ["11 days", "to turn"],
    ],
  },
];

const reasons = [
  {
    n: "01",
    t: "Rates below the card, in writing",
    d: "Direct INS-accredited contracts with 3,000+ publications. We publish the discount you get, not a bundled 'agency fee'.",
  },
  {
    n: "02",
    t: "Planners, not order-takers",
    d: "Every plan starts from IRS/ABC circulation data, your pincode sales and the day-part your buyer actually reads.",
  },
  {
    n: "03",
    t: "Release in 4 hours",
    d: "In-house design and a 7-day release desk. Same-day classifieds, next-morning display in most editions.",
  },
  {
    n: "04",
    t: "Tearsheets and proof of publication",
    d: "Scanned tearsheet, edition list and circulation certificate for every release — audit-ready.",
  },
  {
    n: "05",
    t: "Measured like digital",
    d: "Unique QR, vanity numbers and coupon codes per edition, so you know which paper paid for itself.",
  },
  {
    n: "06",
    t: "24 years, 1,200+ advertisers",
    d: "From ₹450 classifieds to ₹4Cr multi-state campaigns, handled by the same desk.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Masthead */}
      <header className="border-b border-rule bg-newsprint">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 font-head text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Vol. XXIV · No. 312</span>
            <span>Est. 2002 · INS Accredited Agency</span>
            <a href="tel:+919000000000" className="text-stamp">
              Media desk: +91 90000 00000
            </a>
          </div>
          <div className="masthead-rule py-5 text-center">
            <h1 className="text-5xl leading-none font-black tracking-tight sm:text-7xl">
              The Smarads Times
            </h1>
            <p className="mt-3 font-head text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">
              Newspaper Advertising Agency · Display · Classified · Jackets · Inserts
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 border-b border-rule py-2 font-head text-[0.7rem] uppercase tracking-[0.2em]">
            {[
              ["Publishers", "publishers"],
              ["Ad Types", "ad-types"],
              ["Print vs Media", "compare"],
              ["Case Studies", "cases"],
              ["Why Smarads", "why"],
              ["Book Now", "book"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-stamp">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero — front page */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr]">
          <div className="lg:border-r lg:border-rule lg:pr-8">
            <p className="font-head text-[0.7rem] uppercase tracking-[0.3em] text-stamp">
              Front page · Advertiser edition
            </p>
            <h2 className="mt-3 text-4xl leading-[0.95] font-black tracking-tight sm:text-6xl">
              Your Brand, On The Breakfast Table Of 4.2 Crore Readers Tomorrow Morning
            </h2>
            <p className="mt-4 border-y border-rule py-3 font-head text-sm uppercase tracking-[0.15em]">
              3,000+ publications · 14 languages · rates below the card · release in 4 hours
            </p>
            <div className="mt-5 gap-6 font-body text-[0.95rem] leading-relaxed md:columns-2">
              <p className="dropcap">
                Smarads is a full-service newspaper advertising agency that plans, negotiates,
                designs and releases print campaigns across every major daily in the country. We
                have booked more than 62,000 releases since 2002 — from a single ₹450 classified to
                multi-state jacket takeovers.
              </p>
              <p className="mt-4">
                While digital inventory is auctioned to whoever bids highest, a newspaper page is
                finite, physical and trusted. That scarcity is exactly why print still delivers the
                cheapest qualified footfall for retail, education, real estate, BFSI and government
                notices.
              </p>
              <p className="mt-4 font-bold">
                Tell us your city, budget and offer. We will send back a costed plan with circulation
                figures — usually within the hour.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="border-2 border-ink bg-ink px-7 py-4 font-head text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-[6px_6px_0_0_var(--color-stamp)] transition-transform hover:-translate-y-0.5"
              >
                Get my free media plan
              </a>
              <a
                href="#compare"
                className="border-b-2 border-stamp font-head text-sm uppercase tracking-[0.2em] text-stamp"
              >
                Why print beats digital →
              </a>
            </div>
            <figure className="mt-8 border-t border-rule pt-4">
              <img
                src={press}
                width={1280}
                height={896}
                alt="Newspaper printing press rolling out the morning edition"
                className="halftone w-full"
              />
              <figcaption className="mt-2 font-head text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Presses roll at 1:40 a.m. — copy deadline is 6 p.m. the previous evening.
              </figcaption>
            </figure>
          </div>

          <aside id="book" className="scroll-mt-24">
            <LeadForm compact />
            <dl className="mt-6 grid grid-cols-2 gap-px border border-ink bg-ink">
              {[
                ["3,000+", "Publications"],
                ["14", "Languages"],
                ["62,000", "Releases booked"],
                ["24 yrs", "On the desk"],
              ].map(([k, v]) => (
                <div key={v} className="bg-card p-4 text-center">
                  <dt className="font-display text-2xl font-bold">{k}</dt>
                  <dd className="font-head text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Publishers */}
      <Section id="publishers" kicker="Page 2 · Media list" title="Publishers we book directly">
        <div className="overflow-x-auto border border-ink bg-card">
          <table className="w-full border-collapse text-left font-body text-sm">
            <thead>
              <tr className="bg-ink font-head text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground">
                <th className="p-3">Publication</th>
                <th className="p-3">Language</th>
                <th className="p-3">Readership</th>
                <th className="p-3">Footprint</th>
              </tr>
            </thead>
            <tbody>
              {publishers.map((p) => (
                <tr key={p.name} className="border-t border-rule">
                  <td className="p-3 font-bold">{p.name}</td>
                  <td className="p-3 text-muted-foreground">{p.lang}</td>
                  <td className="p-3">{p.reach}</td>
                  <td className="p-3 text-muted-foreground">{p.cities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-head text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Plus 2,988 regional, district and evening dailies — ask for the full list by state.
        </p>
      </Section>

      {/* Ad types */}
      <Section id="ad-types" kicker="Page 3 · Rate card" title="Types of newspaper advertising">
        <div className="grid gap-px border border-ink bg-ink md:grid-cols-3">
          {adTypes.map((a) => (
            <article key={a.name} className="bg-card p-6">
              <h3 className="text-2xl leading-tight font-bold">{a.name}</h3>
              <p className="mt-1 font-head text-[0.7rem] uppercase tracking-[0.2em] text-stamp">
                {a.price}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {a.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section
        id="compare"
        kicker="Page 4 · Editorial"
        title="Why newspaper ads still out-perform digital, TV, outdoor and radio"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="divide-y divide-rule border-y border-ink">
            {media.map((m) => (
              <div key={m.channel} className="grid gap-3 py-5 md:grid-cols-[160px_1fr_1fr]">
                <h3 className="font-head text-sm uppercase tracking-[0.2em]">{m.channel}</h3>
                <p className="font-body text-sm text-muted-foreground italic">{m.weakness}</p>
                <p className="font-body text-sm font-bold">{m.print}</p>
              </div>
            ))}
          </div>
          <figure className="border border-ink bg-card p-4">
            <img
              src={readers}
              width={1024}
              height={1024}
              loading="lazy"
              alt="A family reading the morning newspaper together"
              className="halftone w-full"
            />
            <figcaption className="mt-3 font-body text-sm">
              <strong>24 minutes.</strong> Average time an Indian reader spends with the morning
              paper — and 2.4 people read every copy.
            </figcaption>
          </figure>
        </div>
      </Section>

      {/* Case studies */}
      <Section id="cases" kicker="Page 5 · Results" title="Case studies from the desk">
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.head}
              className="border-2 border-ink bg-card p-6 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <p className="font-head text-[0.65rem] uppercase tracking-[0.2em] text-stamp">
                {c.kicker}
              </p>
              <h3 className="mt-2 text-2xl leading-tight font-bold">{c.head}</h3>
              <p className="mt-3 font-body text-sm text-muted-foreground">{c.body}</p>
              <dl className="rule-thick mt-4 flex justify-between pt-4">
                {c.stats.map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-xl font-bold">{k}</dt>
                    <dd className="font-head text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Section>

      {/* Why Smarads */}
      <Section id="why" kicker="Page 6 · About" title="Why Smarads is the best newspaper ad agency">
        <div className="grid gap-px border border-ink bg-ink md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <article key={r.n} className="bg-card p-6">
              <p className="font-display text-4xl font-black text-stamp">{r.n}</p>
              <h3 className="mt-2 text-xl font-bold">{r.t}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{r.d}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-8 border-l-4 border-stamp bg-card p-6 font-display text-xl italic">
          “We moved our entire Tier-2 launch budget from social to print with Smarads. Footfall
          doubled in nine days and the cost per walk-in fell by 61%.”
          <footer className="mt-3 font-head text-[0.65rem] uppercase tracking-[0.2em] not-italic text-muted-foreground">
            — Head of Marketing, national retail chain
          </footer>
        </blockquote>
      </Section>

      {/* Lead magnet CTA */}
      <section className="border-y-2 border-ink bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-head text-[0.7rem] uppercase tracking-[0.3em] text-stamp">
              Classified · Free offer
            </p>
            <h2 className="mt-3 text-4xl leading-tight font-black">
              Claim the 2026 Newspaper Rate Card &amp; Circulation Report
            </h2>
            <ul className="mt-5 space-y-3 border-t border-rule pt-5 font-body text-sm">
              {[
                "Card rates vs Smarads net rates for 300 top editions",
                "Ad size and colour options with real sample tearsheets",
                "IRS readership and ABC circulation by city and language",
                "Best-day / best-page calendar for your category",
                "A free costed plan for your budget — no obligation",
              ].map((li) => (
                <li key={li} className="flex gap-3">
                  <span className="font-head text-stamp">■</span>
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-center">
        <p className="font-display text-2xl font-black">The Smarads Times</p>
        <p className="mt-2 font-head text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          Newspaper Advertising Agency · Display · Classified · Jackets · Inserts · Advertorials
        </p>
        <p className="mt-4 font-body text-xs text-muted-foreground">
          Media desk +91 90000 00000 · hello@smarads.example · Mon–Sat, 9 a.m. – 9 p.m.
        </p>
        <p className="mt-4 border-t border-rule pt-4 font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Smarads. Rates indicative and subject to publication
          confirmation.
        </p>
      </footer>
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-rule">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="font-head text-[0.7rem] uppercase tracking-[0.3em] text-stamp">{kicker}</p>
        <h2 className="masthead-rule mt-2 mb-8 pt-3 pb-3 text-3xl leading-tight font-black sm:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
