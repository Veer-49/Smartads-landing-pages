import { useEffect, useState } from "react";
import { Play, Menu } from "lucide-react";

const links = [
  { label: "Platforms", href: "#platforms" },
  { label: "Channels", href: "#channels" },
  { label: "Why OTT", href: "#why-ott" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Why SmartAds", href: "#why-smartads" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-background/92 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-primary">
            <Play className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
          </span>
          <span className="truncate font-display text-2xl tracking-wide">
            SMART<span className="text-primary">ADS</span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#plan"
            className="hidden shrink-0 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-105 sm:block"
          >
            Get Free Media Plan
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-sm border border-border p-2 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/98 px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm uppercase tracking-wider text-muted-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#plan"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-sm bg-primary py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground"
          >
            Get Free Media Plan
          </a>
        </nav>
      )}
    </header>
  );
}
