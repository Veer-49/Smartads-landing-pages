const stats = [
  { value: "376M", label: "air passengers in India per year" },
  { value: "112 min", label: "average terminal dwell time" },
  { value: "94%", label: "aided brand recall after exposure" },
  { value: "SEC A+", label: "decision-maker audience skew" },
];

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-4 text-center md:px-6">
            <p className="font-display text-4xl text-gold-gradient md:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
