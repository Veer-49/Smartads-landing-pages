import { useState } from "react";
import { z } from "zod";
import { ReportPreview } from "@/components/ReportPreview";
import type { Lead } from "@/lib/plan";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Please enter your brand").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  budget: z.string().min(1, "Select a budget"),
  city: z.string().trim().max(80).optional(),
});

const budgets = ["Under ₹2L", "₹2L – ₹10L", "₹10L – ₹50L", "₹50L+"];

export function LeadForm({ id = "plan" }: { id?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [lead, setLead] = useState<Lead | null>(null);
  const [budget, setBudget] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      budget,
      city: String(fd.get("city") ?? ""),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setLead({ ...parsed.data, city: parsed.data.city ?? "" });
  }

  const field =
    "w-full rounded-md border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-ring";

  if (lead) {
    return (
      <div id={id}>
        <ReportPreview lead={lead} onReset={() => setLead(null)} />
      </div>
    );
  }


  return (
    <form id={id} onSubmit={onSubmit} className="panel rounded-xl p-6 sm:p-8">
      <p className="font-dial text-[11px] uppercase tracking-[0.3em] text-primary">
        Free media plan + rate card
      </p>
      <h3 className="mt-2 text-4xl">Get your radio plan in 24 hours</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Station mix, spot count, RJ mention ideas and negotiated rates — no
        obligation.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
            Full name
          </label>
          <input id="name" name="name" maxLength={80} className={field} placeholder="Ananya Sharma" />
          {errors['name'] && <p className="mt-1 text-xs text-destructive">{errors['name']}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-xs text-muted-foreground">
            Brand / company
          </label>
          <input id="company" name="company" maxLength={100} className={field} placeholder="Sharma Jewellers" />
          {errors['company'] && <p className="mt-1 text-xs text-destructive">{errors['company']}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs text-muted-foreground">
            Phone
          </label>
          <input id="phone" name="phone" maxLength={15} className={field} placeholder="+91 98765 43210" />
          {errors['phone'] && <p className="mt-1 text-xs text-destructive">{errors['phone']}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
            Work email
          </label>
          <input id="email" name="email" maxLength={255} className={field} placeholder="you@brand.com" />
          {errors['email'] && <p className="mt-1 text-xs text-destructive">{errors['email']}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="city" className="mb-1.5 block text-xs text-muted-foreground">
            Target cities (optional)
          </label>
          <input id="city" name="city" maxLength={80} className={field} placeholder="Mumbai, Pune, Nagpur" />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-xs text-muted-foreground">Campaign budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`rounded-full border px-4 py-2 text-xs transition ${
                budget === b
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-surface-2 text-muted-foreground hover:border-primary/50"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
        {errors['budget'] && <p className="mt-1 text-xs text-destructive">{errors['budget']}</p>}
      </fieldset>

      <button
        type="submit"
        className="btn-amber mt-6 w-full rounded-md px-6 py-3.5 font-dial text-sm font-bold uppercase tracking-[0.18em]"
      >
        Send me the plan →
      </button>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Your details stay with SmartAds. No spam, ever.
      </p>
    </form>
  );
}
