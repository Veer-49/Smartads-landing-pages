import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Download, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  company: z.string().trim().min(2, "Please enter your brand name").max(120, "Too long"),
  budget: z.string().min(1, "Select a monthly budget"),
  goal: z.string().trim().max(500, "Please keep it under 500 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const budgets = ["₹50K – ₹2L / month", "₹2L – ₹10L / month", "₹10L – ₹50L / month", "₹50L+ / month"];

const perks = [
  "Platform-wise reach & CPM benchmarks for your category",
  "Language + pincode targeting blueprint",
  "Sample 15s OTT creative direction",
  "Free “India OTT Rate Card 2026” PDF",
];

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      goal: String(fd.get("goal") ?? ""),
    });

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    window.setTimeout(() => setStatus("done"), 900);
  };

  const field =
    "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <section id="plan" className="scroll-mt-24 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Coming soon · Your campaign</p>
            <h2 className="mt-2 text-3xl uppercase sm:text-5xl">
              Get your free OTT media plan <span className="ember-text">+ 2026 rate card</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Tell us the brand and the goal. Within 24 hours our planners send a custom, platform-wise OTT
              plan with budgets, reach estimates and creative recommendations. No obligation, no sales script.
            </p>
            <ul className="mt-6 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <Download className="h-4 w-4 text-primary" /> 1,800+ brand teams downloaded it this year
            </p>
          </div>

          <div className="glow-panel p-6 sm:p-8" style={{ boxShadow: "var(--shadow-ember)" }}>
            {status === "done" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-3xl uppercase">You're on the list</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Your OTT media plan and the 2026 rate card are on their way. A SmartAds planner will reach
                  out within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-4">
                <h3 className="text-2xl uppercase">Claim your plan</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                      Full name
                    </label>
                    <input id="name" name="name" className={field} placeholder="Ananya Rao" maxLength={100} />
                    {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                      Brand / company
                    </label>
                    <input id="company" name="company" className={field} placeholder="Your brand" maxLength={120} />
                    {errors.company && <p className="mt-1 text-xs text-primary">{errors.company}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                      Work email
                    </label>
                    <input id="email" name="email" type="email" className={field} placeholder="you@brand.com" maxLength={255} />
                    {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                      Phone / WhatsApp
                    </label>
                    <input id="phone" name="phone" type="tel" className={field} placeholder="+91 98xxx xxxxx" maxLength={15} />
                    {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    Monthly media budget
                  </label>
                  <select id="budget" name="budget" defaultValue="" className={field}>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && <p className="mt-1 text-xs text-primary">{errors.budget}</p>}
                </div>
                <div>
                  <label htmlFor="goal" className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                    Campaign goal (optional)
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    maxLength={500}
                    className={field}
                    placeholder="Launch in Tamil Nadu & Karnataka, target 25–40 urban, CPL under ₹150"
                  />
                  {errors.goal && <p className="mt-1 text-xs text-primary">{errors.goal}</p>}
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                  Send me the free plan
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  We reply within 24 hours. Your details are never shared or resold.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
