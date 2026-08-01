import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/LeadForm";
import heroMagazines from "@/assets/hero-magazines.jpg";
import caseSpread from "@/assets/case-spread.jpg";
import readerImg from "@/assets/reader.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smarads — India's Magazine Advertising Agency" },
      {
        name: "description",
        content:
          "Smarads plans and books magazine advertising across 400+ premium publishers. Rate cards, ad formats, case studies and a free 2026 print media kit.",
      },
      { property: "og:title", content: "Smarads — India's Magazine Advertising Agency" },
      {
        property: "og:description",
        content:
          "Book full pages, gatefolds, inserts and advertorials across 400+ magazines. Get the free 2026 rate card and reader data.",
      },
    ],
  }),
  component: Landing,
});

const publishers = [
  { name: "Vogue India", cat: "Fashion & Luxury", reach: "1.2M" },
  { name: "Forbes India", cat: "Business", reach: "980K" },
  { name: "Architectural Digest", cat: "Interiors", reach: "640K" },
  { name: "India Today", cat: "News Weekly", reach: "3.4M" },
  { name: "Condé Nast Traveller", cat: "Travel", reach: "720K" },
  { name: "Femina", cat: "Women's Lifestyle", reach: "2.1M" },
  { name: "Business Today", cat: "Finance", reach: "860K" },
  { name: "GQ India", cat: "Men's Style", reach: "690K" },
  { name: "Outlook Money", cat: "Personal Finance", reach: "540K" },
  { name: "The Economic Times Panache", cat: "Business Lifestyle", reach: "1.5M" },
  { name: "Elle India", cat: "Fashion", reach: "610K" },
  { name: "Auto Car India", cat: "Automotive", reach: "780K" },
];

const formats = [
  {
    n: "01",
    t: "Full Page & Double Spread",
    d: "The classic power buy. Uninterrupted attention on premium 128 GSM stock, right-hand page priority.",
  },
  {
    n: "02",
    t: "Cover Positions",
    d: "Front gatefold, inside front, inside back and back cover — the four most valuable rectangles in print.",
  },
  {
    n: "03",
    t: "Advertorials",
    d: "Editorial-styled brand storytelling written by working journalists, approved by the publisher desk.",
  },
  {
    n: "04",
    t: "Inserts & Bind-ins",
    d: "Booklets, sachets, scratch cards, fragrance strips and product samples bound into the issue.",
  },
  {
    n: "05",
    t: "Gatefolds & Die-cuts",
    d: "Three and four-panel folds, laser cuts and windows that make the reader use their hands.",
  },
  {
    n: "06",
    t: "Sponsorships & Special Issues",
    d: "Own an annual power list, a city guide or a supplement from masthead to last page.",
  },
];

const media = [
  { m: "Magazine", attention: "Highest", trust: "82%", life: "3–6 months", note: "Kept, shared, re-read" },
  { m: "Digital display", attention: "Low", trust: "27%", life: "1.7 seconds", note: "42% blocked or skipped" },
  { m: "Television", attention: "Medium", trust: "58%", life: "30 seconds", note: "Second-screen drop-off" },
  { m: "Outdoor", attention: "Low", trust: "48%", life: "2 seconds", note: "No detail, no context" },
  { m: "Radio", attention: "Low", trust: "45%", life: "20 seconds", note: "Background listening" },
];

const cases = [
  {
    client: "Aurum Watches",
    cat: "Luxury retail",
    lead: "A four-page gatefold in three fashion titles turned a boutique launch into a six-city waitlist.",
    stats: [
      ["+312%", "Showroom walk-ins"],
      ["₹4.6Cr", "Attributed revenue"],
      ["11×", "Return on ad spend"],
    ],
  },
  {
    client: "Northbank Capital",
    cat: "Financial services",
    lead: "Twelve months of advertorials in business weeklies rebuilt trust with HNI investors post-merger.",
    stats: [
      ["+68%", "Qualified enquiries"],
      ["2,400", "Portfolio reviews booked"],
      ["₹190Cr", "New AUM"],
    ],
  },
  {
    client: "Casa Verde Interiors",
    cat: "Home & design",
    lead: "Bound-in fabric swatches in a design monthly gave readers something to touch — and keep.",
    stats: [
      ["4.9%", "Insert response rate"],
      ["+141%", "Design consults"],
      ["18 mo", "Payback in 4 months"],
    ],
  },
];

const reasons = [
  {
    t: "We plan with reader data, not rate cards",
    d: "Every recommendation starts from IRS readership, resale value and page-traffic studies — not the discount a publisher is pushing this month.",
  },
  {
    t: "Direct publisher contracts",
    d: "Nineteen years of annual commitments across 400+ titles mean we buy at volumes a single brand cannot negotiate alone.",
  },
  {
    t: "Creative built for paper",
    d: "In-house art direction that understands bleed, gutters, CMYK drift and the physics of a fold.",
  },
  {
    t: "Measurement that survives print",
    d: "Unique QR journeys, vanity URLs, coupon codes and matched-market lift studies on every campaign.",
  },
];

const faqs = [
  {
    q: "How much does a full-page magazine ad cost?",
    a: "Regional titles start near ₹1.2 lakh a page; national premium covers run to ₹28 lakh. Our rate card lists live 2026 pricing for 400+ titles.",
  },
  {
    q: "What is the lead time to book?",
    a: "Monthlies close 30–45 days before the issue date, weeklies 10–14 days. Cover positions are usually sold 3 months out.",
  },
  {
    q: "Can you handle creative as well as buying?",
    a: "Yes. Art direction, copy, photography and print-ready artwork are included on campaigns above ₹15 lakh.",
  },
];

function Landing() {
  return (
    <div className="paper-grain min-h-screen bg-paper text-ink">
      {/* Masthead */}
      <header className="border-b-2 border-ink bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="font-display text-2xl font-black tracking-tight">SMARADS</span>
            <span className="kicker hidden text-muted-foreground sm:inline">
              The Magazine Advertising Agency
            </span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {[
              ["Publishers", "#publishers"],
              ["Formats", "#formats"],
              ["Why print", "#why-print"],
              ["Case studies", "#cases"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="kicker hover:text-press">
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#lead"
            className="shrink-0 bg-ink px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-press"
          >
            Get rate card
          </a>
        </div>
      </header>

      <div className="border-b border-ink bg-ink py-1.5">
        <p className="mx-auto max-w-6xl px-5 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-paper">
          Vol. XIX · Issue 07 · 400+ titles · 61 categories · Rate cards updated weekly
        </p>
      </div>

      {/* Cover / hero */}
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="kicker text-press">The cover story</p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.92] font-black">
              Print isn't dead.
              <span className="block italic text-press">It's unskippable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Smarads plans, negotiates and produces magazine advertising for brands that want to be
              held, not scrolled past. One brief, 400+ publishers, live rate cards.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#lead"
                className="bg-press px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] text-press-foreground shadow-print transition-transform hover:-translate-y-0.5"
              >
                Claim the free 2026 media kit
              </a>
              <span className="kicker text-muted-foreground">42 pages · 400+ rate cards</span>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-px rule-top border-ink bg-ink sm:grid-cols-4">
              {[
                ["19", "Years in print"],
                ["400+", "Publisher deals"],
                ["₹740Cr", "Media placed"],
                ["96%", "Client retention"],
              ].map(([v, l]) => (
                <div key={l} className="bg-paper px-3 py-5">
                  <dt className="font-display text-3xl font-black">{v}</dt>
                  <dd className="kicker mt-1 text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={heroMagazines}
              alt="Fanned stack of premium magazines with red and black covers"
              width={1408}
              height={1008}
              className="w-full border border-ink object-cover shadow-print"
            />
            <p className="kicker mt-2 text-muted-foreground">
              Photo essay — the 2026 premium title portfolio
            </p>
          </div>
        </div>
      </section>

      {/* Publishers */}
      <section id="publishers" className="border-y-2 border-ink bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-3 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
            <h2 className="font-display text-4xl font-black sm:text-5xl">The Publisher Directory</h2>
            <p className="max-w-lg text-sm text-muted-foreground md:pb-2">
              A sample of the titles we hold direct contracts with. Fashion, business, travel, auto,
              interiors, health, regional language and trade press.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
            {publishers.map((p, i) => (
              <div key={p.name} className="group bg-paper px-5 py-5 transition-colors hover:bg-press">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="kicker text-muted-foreground group-hover:text-press-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="kicker text-muted-foreground group-hover:text-press-foreground/70">
                    {p.reach} readers
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold group-hover:text-press-foreground">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-press-foreground/80">
                  {p.cat}
                </p>
              </div>
            ))}
          </div>
          <p className="kicker mt-6 text-muted-foreground">
            + 388 more titles across 61 categories — full list inside the media kit
          </p>
        </div>
      </section>

      {/* Formats */}
      <section id="formats" className="mx-auto max-w-6xl px-5 py-20">
        <p className="kicker text-press">Section II</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black sm:text-5xl">
          Every way a brand can occupy a page
        </h2>
        <div className="mt-12 grid gap-px border border-ink bg-ink md:grid-cols-2 lg:grid-cols-3">
          {formats.map((f) => (
            <article key={f.n} className="bg-paper p-7">
              <span className="font-display text-5xl font-black text-press/25">{f.n}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why print */}
      <section id="why-print" className="border-y-2 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="kicker text-gold">The argument</p>
              <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
                Why magazines beat digital, TV, outdoor and radio
              </h2>
              <p className="drop-cap mt-6 text-[0.95rem] leading-relaxed text-paper/75">
                A magazine is the only medium a reader pays for, plans time around and keeps on a
                table for months. There is no ad blocker, no skip button, no autoplay mute, no
                scroll. Attention is the scarcest commodity in advertising, and print is where it
                still lives — measured in minutes, not milliseconds.
              </p>
              <img
                src={readerImg}
                alt="Reader holding an open business magazine in an airport lounge"
                width={1200}
                height={900}
                loading="lazy"
                className="mt-8 w-full border border-paper/25 object-cover"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-paper/40">
                    {["Medium", "Attention", "Trust", "Ad lifespan", "Reality check"].map((h) => (
                      <th key={h} className="kicker py-3 pr-4 text-gold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {media.map((r) => (
                    <tr
                      key={r.m}
                      className={
                        r.m === "Magazine"
                          ? "border-b border-paper/20 bg-press/25"
                          : "border-b border-paper/20"
                      }
                    >
                      <td className="py-4 pr-4 font-display text-lg font-bold">{r.m}</td>
                      <td className="py-4 pr-4 text-sm">{r.attention}</td>
                      <td className="py-4 pr-4 text-sm">{r.trust}</td>
                      <td className="py-4 pr-4 text-sm">{r.life}</td>
                      <td className="py-4 pr-4 text-sm text-paper/70">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-8 grid gap-px bg-paper/25 sm:grid-cols-3">
                {[
                  ["27 min", "Average time spent with one issue"],
                  ["3.1", "Readers per printed copy"],
                  ["+62%", "Recall vs. equivalent digital spend"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-ink px-4 py-6">
                    <p className="font-display text-3xl font-black text-gold">{v}</p>
                    <p className="mt-1 text-xs text-paper/70">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="cases" className="mx-auto max-w-6xl px-5 py-20">
        <p className="kicker text-press">Section IV</p>
        <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Case Studies</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-px border border-ink bg-ink">
            {cases.map((c) => (
              <article key={c.client} className="bg-paper p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold">{c.client}</h3>
                  <span className="kicker text-press">{c.cat}</span>
                </div>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{c.lead}</p>
                <div className="mt-5 grid grid-cols-3 gap-4 rule-top pt-4">
                  {c.stats.map(([v, l]) => (
                    <div key={l}>
                      <p className="font-display text-2xl font-black text-press">{v}</p>
                      <p className="text-xs text-muted-foreground">{l}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div>
            <img
              src={caseSpread}
              alt="Open magazine spread showing a luxury full-page advertisement"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full border border-ink object-cover shadow-print"
            />
            <blockquote className="mt-6 border-l-2 border-press pl-5">
              <p className="font-display text-2xl leading-snug italic">
                “Smarads got us a cover gatefold two weeks before close at a price our previous
                agency said didn't exist.”
              </p>
              <footer className="kicker mt-3 text-muted-foreground">
                Priya Menon · CMO, Aurum Watches
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Smarads */}
      <section className="border-y-2 border-ink bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-3 md:grid-cols-[auto_1fr] md:items-end md:gap-8">
            <h2 className="font-display text-4xl font-black sm:text-5xl">Why Smarads</h2>
            <p className="max-w-lg text-sm text-muted-foreground md:pb-2">
              Four reasons brands move their print budget to us — and 96% of them stay.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-ink bg-ink sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.t} className="bg-paper p-7">
                <span className="kicker text-press">Reason {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-2xl font-bold">{r.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 border-2 border-ink bg-card p-6 shadow-print sm:p-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="kicker text-press">Free download · No cost, no obligation</p>
            <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">
              The 2026 Magazine Rate Card & Reader Report
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                "Live 2026 rates for 400+ Indian and international titles",
                "Issue close dates, material deadlines and cover availability",
                "Readership, income and city split for every category",
                "Format spec sheets: bleed, trim, GSM, insert weights",
                "A worked ROI model comparing print vs. digital spend",
              ].map((li) => (
                <li key={li} className="flex gap-3 text-sm leading-relaxed">
                  <span className="font-mono text-press">→</span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rule-top pt-5">
              <p className="kicker text-muted-foreground">
                Downloaded by 2,140 marketing teams this year
              </p>
            </div>
          </div>
          <div className="border border-ink bg-paper p-6">
            <h3 className="font-display text-2xl font-bold">Send it to me</h3>
            <p className="mt-1 mb-5 text-sm text-muted-foreground">
              Plus a 20-minute planning call with a print media strategist.
            </p>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="font-display text-3xl font-black">Questions from the desk</h2>
        <div className="mt-6 grid gap-px border border-ink bg-ink md:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="bg-paper p-6">
              <h3 className="font-display text-lg font-bold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Colophon */}
      <footer className="border-t-2 border-ink bg-ink py-12 text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-3xl font-black">SMARADS</p>
            <p className="mt-2 max-w-md text-sm text-paper/70">
              Magazine advertising agency. Planning, buying, creative and print production across
              400+ titles since 2007.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="kicker text-gold">Talk to a planner</p>
              <p className="mt-2 text-sm text-paper/80">hello@smarads.com</p>
              <p className="text-sm text-paper/80">+91 90000 00000</p>
            </div>
            <div>
              <p className="kicker text-gold">Offices</p>
              <p className="mt-2 text-sm text-paper/80">Mumbai · Delhi · Bengaluru</p>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper/50">
          © {new Date().getFullYear()} Smarads · Printed matter, digitally planned
        </p>
      </footer>
    </div>
  );
}
