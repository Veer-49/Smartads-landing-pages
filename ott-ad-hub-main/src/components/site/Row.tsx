import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Row({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * Math.max(320, ref.current.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id={id} className="scroll-mt-24 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            {eyebrow && (
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
            )}
            <h2 className="text-3xl uppercase sm:text-5xl">{title}</h2>
            {subtitle && <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scroll(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scroll(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div ref={ref} className="rail mt-7 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        {children}
      </div>
    </section>
  );
}
