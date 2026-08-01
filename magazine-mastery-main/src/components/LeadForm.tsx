import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid work email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  brand: z.string().trim().min(2, "Enter your brand or company").max(120),
  budget: z.string().min(1, "Select a monthly budget"),
  goal: z.string().trim().max(600).optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

const budgets = [
  "Under ₹5 Lakh",
  "₹5 – 15 Lakh",
  "₹15 – 50 Lakh",
  "₹50 Lakh+",
];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = leadSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Media kit on its way", {
      description: "Our planner will call you within one business day.",
    });
    e.currentTarget.reset();
  }

  const field =
    "w-full border border-ink bg-paper px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-press";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className={compact ? "space-y-3" : "grid gap-3 sm:grid-cols-2"}>
        <div className="min-w-0">
          <label htmlFor="lf-name" className="kicker mb-1 block">
            Name
          </label>
          <input id="lf-name" name="name" className={field} placeholder="Ananya Rao" />
          {errors.name && <p className="mt-1 text-xs text-press">{errors.name}</p>}
        </div>
        <div className="min-w-0">
          <label htmlFor="lf-brand" className="kicker mb-1 block">
            Brand
          </label>
          <input id="lf-brand" name="brand" className={field} placeholder="Your company" />
          {errors.brand && <p className="mt-1 text-xs text-press">{errors.brand}</p>}
        </div>
        <div className="min-w-0">
          <label htmlFor="lf-email" className="kicker mb-1 block">
            Work email
          </label>
          <input id="lf-email" name="email" className={field} placeholder="you@brand.com" />
          {errors.email && <p className="mt-1 text-xs text-press">{errors.email}</p>}
        </div>
        <div className="min-w-0">
          <label htmlFor="lf-phone" className="kicker mb-1 block">
            Phone
          </label>
          <input id="lf-phone" name="phone" className={field} placeholder="+91 90000 00000" />
          {errors.phone && <p className="mt-1 text-xs text-press">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="lf-budget" className="kicker mb-1 block">
          Monthly print budget
        </label>
        <select id="lf-budget" name="budget" defaultValue="" className={field}>
          <option value="" disabled>
            Select a range
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {errors.budget && <p className="mt-1 text-xs text-press">{errors.budget}</p>}
      </div>

      {!compact && (
        <div>
          <label htmlFor="lf-goal" className="kicker mb-1 block">
            What are you launching?
          </label>
          <textarea
            id="lf-goal"
            name="goal"
            rows={3}
            className={field}
            placeholder="New product, category, target reader…"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-press px-6 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-press-foreground transition-transform hover:-translate-y-0.5"
      >
        Send me the 2026 media kit
      </button>
      <p className="text-xs text-muted-foreground">
        {sent
          ? "Received — check your inbox for the rate card PDF."
          : "Free 42-page rate card + reader data. No spam, ever."}
      </p>
    </form>
  );
}
