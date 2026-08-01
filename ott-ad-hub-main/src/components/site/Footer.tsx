import { Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary">
                <Play className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
              </span>
              <span className="font-display text-2xl tracking-wide">
                SMART<span className="text-primary">ADS</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              OTT, CTV and digital advertising agency for Indian brands. Planning, buying, creative and
              measurement across 40+ streaming platforms in 14 languages.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-lg uppercase">Explore</h3>
              <a href="#platforms" className="mt-3 block text-muted-foreground hover:text-foreground">
                Platform types
              </a>
              <a href="#channels" className="mt-2 block text-muted-foreground hover:text-foreground">
                OTT channels
              </a>
              <a href="#case-studies" className="mt-2 block text-muted-foreground hover:text-foreground">
                Case studies
              </a>
            </div>
            <div>
              <h3 className="text-lg uppercase">Talk to us</h3>
              <p className="mt-3 text-muted-foreground">hello@smartads.in</p>
              <p className="mt-2 text-muted-foreground">+91 98000 00000</p>
              <a
                href="#plan"
                className="mt-4 inline-block rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground"
              >
                Free media plan
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} SmartAds Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
