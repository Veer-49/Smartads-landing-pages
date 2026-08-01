import { Row } from "./Row";
import { channels, platforms } from "./data";
import { Tv, Radio } from "lucide-react";

export function ChannelRail() {
  return (
    <Row
      id="channels"
      eyebrow="Now streaming in India"
      title="OTT & digital channels we buy"
      subtitle="Direct inventory access across national, regional and telco-aggregated streaming platforms — plus every major digital ad network."
    >
      {channels.map((c) => (
        <article key={c.name} className="tile w-[240px] sm:w-[268px]">
          <div className="relative flex h-36 items-center justify-center bg-surface-2">
            <span className="font-display text-6xl text-foreground/25">{c.initials}</span>
            <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
              Live
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-xl uppercase">{c.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-primary">{c.reach}</p>
            <p className="mt-2 text-sm text-muted-foreground">{c.genre}</p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Tv className="h-3.5 w-3.5" /> {c.langs}
            </p>
          </div>
        </article>
      ))}
    </Row>
  );
}

export function PlatformRail() {
  return (
    <Row
      id="platforms"
      eyebrow="Types of digital platforms"
      title="Eight ways we put you on screen"
      subtitle="One plan, layered across screens — so the same story follows your buyer from the big screen to the second screen."
    >
      {platforms.map((p) => (
        <article key={p.title} className="tile w-[290px] p-5 sm:w-[330px]">
          <span className="inline-block rounded-sm bg-secondary px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent">
            {p.badge}
          </span>
          <h3 className="mt-4 text-2xl uppercase">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
          <p className="mt-5 flex items-start gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <Radio className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            {p.formats}
          </p>
        </article>
      ))}
    </Row>
  );
}
