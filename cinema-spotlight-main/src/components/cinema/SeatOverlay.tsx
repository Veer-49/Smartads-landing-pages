/**
 * The "you are sitting in the auditorium" frame: a row of velvet seat-backs
 * anchored to the bottom of the viewport plus a projector beam from the rear.
 * Purely decorative.
 */
export function SeatOverlay() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 z-30 hidden md:block">
      <div className="h-28 bg-[image:linear-gradient(to_top,oklch(0.08_0.01_30)_45%,transparent)]" />
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="-mt-8 block h-20 w-full opacity-55"
      >
        <defs>
          <linearGradient id="velvet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.24 0.08 22)" />
            <stop offset="100%" stopColor="oklch(0.09 0.02 20)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(${i * 250 - 40}, 0)`}>
            <path
              d="M20 120 L20 46 C20 22 44 10 82 10 L148 10 C186 10 210 22 210 46 L210 120 Z"
              fill="url(#velvet)"
            />
            <path
              d="M36 120 L36 52 C36 34 56 26 84 26 L146 26 C174 26 194 34 194 52 L194 120 Z"
              fill="oklch(0.12 0.03 20)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ProjectorBeam() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 projector-glow animate-flicker"
    />
  );
}