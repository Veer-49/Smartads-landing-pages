import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Download, Loader2, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(20),
  company: z.string().trim().max(120).optional(),
  city: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1000).optional(),
});

const budgets = ["Under ₹10 L", "₹10 L – ₹50 L", "₹50 L – ₹2 Cr", "₹2 Cr +"];

const perks = [
  "2026 rate card for 40+ Indian airports",
  "Terminal-wise footfall & dwell data",
  "Format mock-ups on your own key art",
  "A costed plan within 24 working hours",
];

export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [budget, setBudget] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      city: String(fd.get("city") ?? ""),
      budget,
      message: String(fd.get("message") ?? ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setLoading(true);

    const d = parsed.data;
    const { error } = await supabase.from("leads").insert({
      name: d.name,
      email: d.email,
      phone: d.phone,
      company: d.company ?? null,
      city: d.city ?? null,
      budget: d.budget ?? null,
      message: d.message ?? null,
      source: "airport-landing",
    });

    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Boarding pass issued — the media kit is on its way.");
  }

  const field =
    "w-full rounded-md border border-input bg-background/70 px-3.5 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

  return (
    <section id="boarding-pass" className="relative overflow-hidden border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:py-32">
        <div>
          <p className="eyebrow">Final Call — Free Media Kit</p>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Claim your <span className="italic text-gold-gradient">boarding pass</span>.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Tell us the cities you want and we'll send back the 2026 SmarAds Airport
            Media Kit plus a costed plan built around your budget. No obligation, no
            call-centre follow-ups.
          </p>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <div className="gold-rule my-8 max-w-md" />
          <p className="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
            <Download className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            PDF delivered instantly to your inbox
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-7 md:p-9" style={{ boxShadow: "var(--shadow-lux)" }}>
          {done ? (
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                <Check className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-3xl">You're checked in.</h3>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                Our airport media team will be in touch within one working day with your
                rate card and plan.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="flex items-center justify-between border-b border-dashed border-border/70 pb-4 font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
                <span>SmarAds · Boarding Pass</span>
                <span className="text-gold">Seat 1A</span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                    Full name*
                  </label>
                  <input id="name" name="name" className={field} placeholder="Ananya Rao" />
                  {errors['name'] && <p className="mt-1 text-xs text-destructive">{errors['name']}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                    Work email*
                  </label>
                  <input id="email" name="email" type="email" className={field} placeholder="you@brand.com" />
                  {errors['email'] && <p className="mt-1 text-xs text-destructive">{errors['email']}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs text-muted-foreground">
                    Phone*
                  </label>
                  <input id="phone" name="phone" className={field} placeholder="+91 98XXX XXXXX" />
                  {errors['phone'] && <p className="mt-1 text-xs text-destructive">{errors['phone']}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs text-muted-foreground">
                    Brand / company
                  </label>
                  <input id="company" name="company" className={field} placeholder="Brand name" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="city" className="mb-1.5 block text-xs text-muted-foreground">
                    Airports or cities of interest
                  </label>
                  <input id="city" name="city" className={field} placeholder="Delhi T3, Mumbai T2, Bengaluru" />
                </div>
              </div>

              <fieldset className="mt-5">
                <legend className="mb-2 text-xs text-muted-foreground">Indicative budget</legend>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={
                        "rounded-full border px-3.5 py-1.5 font-mono text-[0.62rem] tracking-wider transition-colors " +
                        (budget === b
                          ? "border-gold bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-gold/60")
                      }
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                  What are you launching?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className={field + " resize-none"}
                  placeholder="Film release in March, need trailer domination across 6 metros…"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                Send me the media kit & rates
              </button>
              <p className="mt-3 text-center text-[0.68rem] text-muted-foreground">
                We reply within one working day. Your details are never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
