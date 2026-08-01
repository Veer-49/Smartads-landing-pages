import { useEffect, useMemo, useState } from "react";
import {
  buildPlan,
  formatINR,
  formatReach,
  pdfSafe,
  type Lead,
} from "@/lib/plan";
import { trackTuner } from "@/lib/analytics";

export function ReportPreview({ lead, onReset }: { lead: Lead; onReset: () => void }) {
  const plan = useMemo(() => buildPlan(lead), [lead]);
  const [busy, setBusy] = useState(false);
  const [sendState, setSendState] = useState<"sending" | "sent">("sending");

  // Dispatch the report to the lead as soon as the brief is submitted.
  useEffect(() => {
    setSendState("sending");
    const t = setTimeout(() => {
      setSendState("sent");
      trackTuner("report_sent", lead.email);
    }, 1400);
    return () => clearTimeout(t);
  }, [lead.email]);

  const mailtoHref = `mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(
    `SmartAds radio media plan — ${lead.company}`,
  )}&body=${encodeURIComponent(
    [
      `Hi ${lead.name},`,
      "",
      `Here is the indicative radio plan for ${lead.company}.`,
      `Markets: ${plan.cities}`,
      `Flight: ${plan.weeks} weeks · Working budget: ${formatINR(plan.budget)}`,
      `Net reach: ${formatReach(plan.netReach)} · Spots: ${plan.totalSpots} · Frequency: ${plan.frequency}x · CPM: ₹${plan.cpm}`,
      "",
      "Station mix:",
      ...plan.lines.map(
        (l) =>
          `• ${l.station.name} ${l.station.freq.toFixed(1)} — ${Math.round(l.share * 100)}% · ${formatINR(l.spend)} · ${l.spots} spots`,
      ),
      "",
      "— SmartAds",
    ].join("\n"),
  )}`;


  async function download() {
    setBusy(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const W = doc.internal.pageSize.getWidth();
      const M = 46;
      const amber: [number, number, number] = [232, 150, 40];
      const ink: [number, number, number] = [26, 24, 21];
      const grey: [number, number, number] = [120, 116, 108];
      const T = (txt: string, x: number, y: number) => doc.text(pdfSafe(txt), x, y);

      // header band
      doc.setFillColor(...ink);
      doc.rect(0, 0, W, 120, "F");
      doc.setTextColor(...amber);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      T("SMARTADS", M, 52);
      doc.setTextColor(245, 243, 238);
      doc.setFontSize(15);
      T("Indicative Radio Media Plan", M, 76);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(180, 176, 168);
      T(
        `Prepared for ${lead.company} · ${new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`,
        M,
        96,
      );

      let y = 156;
      doc.setTextColor(...ink);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      T("Brief summary", M, y);
      y += 8;
      doc.setDrawColor(...amber);
      doc.setLineWidth(1.4);
      doc.line(M, y, M + 66, y);
      y += 22;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const summary: [string, string][] = [
        ["Contact", `${lead.name} · ${lead.phone}`],
        ["Email", lead.email],
        ["Budget band", `${lead.budget}  (planned at ${formatINR(plan.budget)})`],
        ["Markets", plan.cities],
        ["Flight length", `${plan.weeks} weeks`],
      ];
      for (const [k, v] of summary) {
        doc.setTextColor(...grey);
        T(k, M, y);
        doc.setTextColor(...ink);
        T(String(v), M + 120, y);
        y += 17;
      }

      // station table
      y += 16;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      T("Recommended station mix", M, y);
      y += 8;
      doc.line(M, y, M + 132, y);
      y += 20;

      const cols = [M, M + 150, M + 240, M + 330, M + 420];
      doc.setFillColor(240, 236, 228);
      doc.rect(M - 8, y - 13, W - 2 * M + 16, 22, "F");
      doc.setFontSize(8.5);
      doc.setTextColor(...grey);
      ["Station", "Share", "Spend", "10-sec spots", "Avg. rate"].forEach((h, i) =>
        T(h, cols[i] as number, y),
      );
      y += 22;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      for (const l of plan.lines) {
        doc.setTextColor(...ink);
        T(`${l.station.name} ${l.station.freq.toFixed(1)}`, cols[0] as number, y);
        T(`${Math.round(l.share * 100)}%`, cols[1] as number, y);
        T(formatINR(l.spend), cols[2] as number, y);
        T(String(l.spots), cols[3] as number, y);
        T(`Rs ${l.avgRate}`, cols[4] as number, y);
        y += 16;
        doc.setTextColor(...grey);
        doc.setFontSize(8);
        T(
          `${l.station.language} · ${l.station.audience}`,
          cols[0] as number,
          y,
        );
        doc.setFontSize(9.5);
        y += 20;
      }

      // KPI band
      y += 6;
      doc.setFillColor(...ink);
      doc.roundedRect(M - 8, y, W - 2 * M + 16, 74, 6, 6, "F");
      const kpis: [string, string][] = [
        ["Net reach", formatReach(plan.netReach)],
        ["Total spots", String(plan.totalSpots)],
        ["Avg. frequency", `${plan.frequency}x`],
        ["Effective CPM", `Rs ${plan.cpm}`],
      ];
      kpis.forEach(([k, v], i) => {
        const x = M + 8 + i * ((W - 2 * M) / 4);
        doc.setTextColor(...amber);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        T(v, x, y + 34);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(180, 176, 168);
        T(k.toUpperCase(), x, y + 52);
      });
      y += 100;

      doc.setTextColor(...ink);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      T("What happens next", M, y);
      y += 20;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...grey);
      [
        "1. A SmartAds planner calls you within 4 working hours to confirm markets and dayparts.",
        "2. We negotiate station-level rates and share a locked plan with airing schedule.",
        "3. Scripts, voice casting and jingle production run in parallel (3-5 working days).",
        "4. Campaign goes live with third-party monitored airing logs shared weekly.",
      ].forEach((line) => {
        T(line, M, y);
        y += 16;
      });

      doc.setFontSize(7.5);
      doc.setTextColor(...grey);
      T(
        "Indicative rates based on published card rates and SmartAds network deals. Final rates confirmed at booking.",
        M,
        doc.internal.pageSize.getHeight() - 42,
      );
      doc.setTextColor(...amber);
      T("smartads.in · hello@smartads.in · +91 98200 00000", M, doc.internal.pageSize.getHeight() - 28);

      doc.save(
        `SmartAds-Radio-Plan-${lead.company.replace(/[^a-z0-9]+/gi, "-")}.pdf`,
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="panel rounded-xl p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-dial text-[11px] uppercase tracking-[0.3em] text-signal">
            Signal received · Plan ready
          </p>
          <h3 className="mt-2 text-4xl">
            {lead.company}'s radio plan
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {plan.cities} · {plan.weeks}-week flight · {formatINR(plan.budget)}{" "}
            working budget
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="font-dial text-[11px] uppercase tracking-[0.2em] text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Edit brief
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-signal/40 bg-signal/10 p-4">
        <p className="flex items-center gap-2 text-sm text-foreground">
          <span
            className={`h-2 w-2 rounded-full ${sendState === "sent" ? "bg-signal" : "animate-pulse bg-primary"}`}
          />
          {sendState === "sending"
            ? `Transmitting your plan to ${lead.email}…`
            : `Report sent to ${lead.email}. A planner calls you within 4 working hours.`}
        </p>
        <a
          href={mailtoHref}
          className="font-dial text-[10px] uppercase tracking-[0.18em] text-primary underline-offset-4 hover:underline"
        >
          Forward a copy ↗
        </a>
      </div>



      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        {[
          ["Net reach", formatReach(plan.netReach)],
          ["Total spots", String(plan.totalSpots)],
          ["Avg. frequency", `${plan.frequency}x`],
          ["Effective CPM", `₹${plan.cpm}`],
        ].map(([k, v]) => (
          <div key={k} className="bg-surface p-4">
            <dt className="font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-1 font-dial text-2xl text-primary">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 overflow-hidden rounded-lg border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface-2 font-dial text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <th className="p-3">Station</th>
              <th className="p-3">Share</th>
              <th className="p-3">Spend</th>
              <th className="p-3">Spots</th>
            </tr>
          </thead>
          <tbody>
            {plan.lines.map((l) => (
              <tr key={l.station.freq} className="border-t border-border bg-card">
                <td className="p-3">
                  <span className="font-dial text-primary">
                    {l.station.freq.toFixed(1)}
                  </span>{" "}
                  {l.station.name}
                  <span className="block text-xs text-muted-foreground">
                    {l.station.language}
                  </span>
                </td>
                <td className="p-3">
                  <div className="h-1.5 w-16 overflow-hidden rounded-full bg-surface-2">
                    <span
                      className="block h-full bg-primary"
                      style={{ width: `${l.share * 100}%` }}
                    />
                  </div>
                  <span className="mt-1 block font-dial text-xs">
                    {Math.round(l.share * 100)}%
                  </span>
                </td>
                <td className="p-3 font-dial tabular-nums">{formatINR(l.spend)}</td>
                <td className="p-3 font-dial tabular-nums">{l.spots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={download}
        disabled={busy}
        className="btn-amber mt-6 w-full rounded-md px-6 py-3.5 font-dial text-sm font-bold uppercase tracking-[0.18em] disabled:opacity-60"
      >
        {busy ? "Generating…" : "Download PDF report ↓"}
      </button>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Includes the station mix, spend split and the 2026 FM rate benchmarks.
      </p>
    </div>
  );
}
