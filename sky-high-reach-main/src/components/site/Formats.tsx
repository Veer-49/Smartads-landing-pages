import inside from "@/assets/type-inside.jpg";
import outside from "@/assets/type-outside.jpg";
import airside from "@/assets/type-airside.jpg";

const formats = [
  {
    image: inside,
    alt: "Large backlit advertising light box inside an airport baggage claim hall",
    tag: "Inside the terminal",
    title: "Landside & Terminal Branding",
    units: [
      "Backlit light boxes & mega frames",
      "Digital screen networks & video walls",
      "Baggage carousel & trolley branding",
      "Security tray and check-in counter fascia",
      "Escalator, pillar and glazing wraps",
    ],
  },
  {
    image: outside,
    alt: "Illuminated billboard on the approach road outside an Indian international airport at dusk",
    tag: "Outside the terminal",
    title: "Approach & Forecourt Domination",
    units: [
      "Approach-road unipoles & gantries",
      "Terminal facade and porte-cochère wraps",
      "Car park, drop-off and pickup bays",
      "Airport metro & shuttle corridors",
      "City-side welcome arches",
    ],
  },
  {
    image: airside,
    alt: "Blank branded aerobridge next to an aircraft on the apron at sunset",
    tag: "Airside & experiential",
    title: "Aerobridge, Lounge & Activation",
    units: [
      "Aerobridge and jet-bridge wraps",
      "Lounge takeovers & sampling counters",
      "Boarding pass and Wi-Fi sponsorship",
      "3D anamorphic and product installations",
      "Cinematic trailer domination for film releases",
    ],
  },
];

export function Formats() {
  return (
    <section id="formats" className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="eyebrow">Section 02 — Formats</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          From the approach road to the <span className="italic text-gold-gradient">aerobridge</span>.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {formats.map((f) => (
            <article
              key={f.title}
              className="group overflow-hidden rounded-xl border border-border/70 bg-background/60"
              style={{ boxShadow: "var(--shadow-lux)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-16">
                  <p className="eyebrow">{f.tag}</p>
                  <h3 className="mt-2 text-2xl leading-tight">{f.title}</h3>
                </div>
              </div>
              <ul className="space-y-2 p-5">
                {f.units.map((u) => (
                  <li key={u} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {u}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
