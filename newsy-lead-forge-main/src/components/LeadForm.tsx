import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Please enter your brand or company").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a reachable phone number")
    .max(20)
    .regex(/^[0-9+\-()\s]+$/, "Digits, spaces and + - ( ) only"),
  email: z.string().trim().email("Enter a valid email").max(255),
  budget: z.string().trim().max(40),
  brief: z.string().trim().max(600),
});

const budgets = ["Under ₹50k", "₹50k – ₹2L", "₹2L – ₹10L", "₹10L+"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-2 border-ink bg-card p-8 text-center">
        <p className="font-head text-xs uppercase tracking-[0.3em] text-stamp">Stop press</p>
        <h3 className="mt-3 text-3xl font-bold">Your media kit is on the way</h3>
        <p className="mt-3 font-body text-sm text-muted-foreground">
          A Smarads planner will call within one working hour with rate cards, circulation figures
          and the next available release dates.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border-2 border-ink bg-card p-6 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-8"
    >
      <p className="font-head text-[0.65rem] uppercase tracking-[0.3em] text-stamp">
        Free · No obligation
      </p>
      <h3 className="mt-2 text-3xl font-bold leading-tight">
        Get the 2026 Newspaper Rate Card + Circulation Report
      </h3>
      <p className="mt-2 font-body text-sm text-muted-foreground">
        48-page PDF: ad sizes, prices and readership for 3,000+ dailies — plus a free plan for your
        budget.
      </p>

      <div className={`mt-6 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Name" name="name" error={errors.name} />
        <Field label="Brand / Company" name="company" error={errors.company} />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} />
        <Field label="Email" name="email" type="email" error={errors.email} />
      </div>

      <div className="mt-4">
        <label className="font-head text-[0.7rem] uppercase tracking-[0.2em]">Monthly budget</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {budgets.map((b, i) => (
            <label
              key={b}
              className="cursor-pointer border border-ink px-3 py-1 font-head text-xs uppercase tracking-wide has-checked:bg-ink has-checked:text-primary-foreground"
            >
              <input
                type="radio"
                name="budget"
                value={b}
                defaultChecked={i === 1}
                className="sr-only"
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="brief" className="font-head text-[0.7rem] uppercase tracking-[0.2em]">
          What are you advertising? (optional)
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={3}
          maxLength={600}
          className="mt-1 w-full border border-ink bg-background px-3 py-2 font-body text-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full border-2 border-ink bg-stamp px-6 py-4 font-head text-base uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
      >
        Send me the rate card
      </button>
      <p className="mt-3 text-center font-body text-xs text-muted-foreground">
        Used by 1,200+ advertisers. We never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-head text-[0.7rem] uppercase tracking-[0.2em]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="mt-1 w-full border border-ink bg-background px-3 py-2 font-body text-sm outline-none focus:ring-2 focus:ring-ring"
      />
      {error ? <p className="mt-1 font-head text-[0.7rem] uppercase text-stamp">{error}</p> : null}
    </div>
  );
}