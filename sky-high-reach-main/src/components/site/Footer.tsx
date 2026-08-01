import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Plane className="h-4 w-4 -rotate-45 text-gold" aria-hidden="true" />
            <span className="font-display text-2xl">
              Smar<span className="text-gold">Ads</span>
            </span>
          </div>
          <p className="font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
            Airport · Cinema · Transit media, India
          </p>
        </div>
        <div className="gold-rule my-8" />
        <div className="flex flex-wrap justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SmarAds Media. All rights reserved.</p>
          <p>Delhi · Mumbai · Bengaluru · Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
