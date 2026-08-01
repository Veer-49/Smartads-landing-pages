import heroTerminal from "@/assets/hero-terminal.jpg";

const board = [
  { time: "06:40", flight: "SA 101", dest: "DELHI T3", gate: "A12", status: "LIVE" },
  { time: "09:15", flight: "SA 204", dest: "MUMBAI T2", gate: "B04", status: "LIVE" },
  { time: "12:05", flight: "SA 318", dest: "BENGALURU T2", gate: "C21", status: "BOARDING" },
  { time: "15:30", flight: "SA 442", dest: "HYDERABAD", gate: "D07", status: "SOLD OUT" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img
        src={heroTerminal}
        alt="View from a seat inside a luxury airport departure lounge at golden hour"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-terminal)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/45" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-20">
        <p className="eyebrow">Gate A1 · Now Boarding · Airport Advertising, India</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
          Your brand,
          <br />
          at <span className="text-gold-gradient italic">30,000 ft</span>
          <br />
          of attention.
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          SmarAds places brands inside India's airports — where the country's most
          affluent audience sits still for two hours with nothing to skip, scroll
          past or switch off.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#boarding-pass"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02]"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Get my airport media plan
          </a>
          <a
            href="#why-airport"
            className="rounded-full border border-border px-7 py-3.5 text-sm text-foreground/90 transition-colors hover:border-gold hover:text-gold"
          >
            Airport vs. every other medium
          </a>
        </div>

        <div className="glass-panel mt-14 max-w-2xl rounded-lg p-4 font-mono text-[0.7rem] sm:text-xs">
          <div className="flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground">
            <span className="tracking-[0.25em]">DEPARTURES</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              INVENTORY
            </span>
          </div>
          <ul className="mt-2 space-y-1.5">
            {board.map((row, i) => (
              <li
                key={row.flight}
                className="flip-row grid grid-cols-[3rem_3.5rem_1fr_2.5rem] items-center gap-2 sm:grid-cols-[3.5rem_4rem_1fr_3rem_5.5rem]"
                style={{ animationDelay: `${300 + i * 120}ms` }}
              >
                <span className="text-gold">{row.time}</span>
                <span className="text-muted-foreground">{row.flight}</span>
                <span className="truncate tracking-widest">{row.dest}</span>
                <span className="text-muted-foreground">{row.gate}</span>
                <span
                  className={
                    row.status === "SOLD OUT"
                      ? "hidden text-muted-foreground sm:block"
                      : "hidden text-gold sm:block"
                  }
                >
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
