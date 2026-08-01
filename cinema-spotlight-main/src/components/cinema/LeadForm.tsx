import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Popcorn } from "lucide-react";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  company: z.string().trim().min(2, "Please enter your brand name").max(100, "Too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
  city: z.string().trim().min(2, "Which city?").max(80),
  budget: z.string().min(1, "Pick a budget band"),
  message: z.string().trim().max(600, "Keep it under 600 characters").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof leadSchema>, string>>;

const budgets = ["Under ₹5 L", "₹5 L – ₹25 L", "₹25 L – ₹1 Cr", "₹1 Cr +"];

const fieldClass =
  "w-full rounded-sm border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25";

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = leadSchema.safeParse(Object.fromEntries(form.entries()));

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
  }

  if (status === "done") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-sm border border-primary/30 bg-card/80 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden />
        <h3 className="text-3xl">Your seat is booked</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          A cinema planner will call you within one working day with a screen-level plan and the
          2026 Cinema Media Rate Playbook attached.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name} placeholder="Ananya Rao" />
        <Field label="Brand / company" name="company" error={errors.company} placeholder="Acme Foods" />
        <Field
          label="Work email"
          name="email"
          type="email"
          error={errors.email}
          placeholder="you@brand.com"
        />
        <Field label="Phone" name="phone" error={errors.phone} placeholder="+91 98XXXXXX21" />
        <Field label="Target city" name="city" error={errors.city} placeholder="Mumbai" />
        <div className="space-y-1.5">
          <label htmlFor="budget" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Budget band
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a band
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {errors.budget ? <p className="text-xs text-destructive">{errors.budget}</p> : null}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          What are you launching? <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={600}
          placeholder="New store launch across 4 malls in October…"
          className={fieldClass}
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-[image:var(--gradient-gold)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
      >
        {status === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Popcorn className="h-4 w-4" aria-hidden />
        )}
        {status === "sending" ? "Rolling…" : "Book my screening call"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Free with your enquiry: the 2026 Cinema Media Rate Playbook — chain-wise rates, CPM
        benchmarks and a screen-selection checklist.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  error?: string | undefined;
  placeholder?: string | undefined;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className={fieldClass}
      />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}