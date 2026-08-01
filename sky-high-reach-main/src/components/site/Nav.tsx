import { Plane } from "lucide-react";

const links = [
  { href: "#network", label: "Network" },
  { href: "#formats", label: "Formats" },
  { href: "#why-airport", label: "Why Airport" },
  { href: "#work", label: "Work" },
  { href: "#agency", label: "Agency" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass-panel mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 md:px-7">
        <a href="#top" className="flex items-center gap-2.5">
          <Plane className="h-4 w-4 -rotate-45 text-gold" aria-hidden="true" />
          <span className="font-display text-xl tracking-tight">
            Smar<span className="text-gold">Ads</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#boarding-pass"
          className="rounded-full bg-primary px-4 py-2 font-mono text-[0.65rem] tracking-[0.18em] text-primary-foreground uppercase transition-transform hover:scale-[1.03]"
        >
          Get Rates
        </a>
      </div>
    </header>
  );
}
