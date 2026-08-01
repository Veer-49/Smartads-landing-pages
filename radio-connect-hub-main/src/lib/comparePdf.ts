import type { Station } from "@/data/stations";
import { pdfSafe } from "@/lib/plan";

const ROWS: [string, (s: Station) => string][] = [
  ["Frequency", (s) => `${s.freq.toFixed(1)} FM`],
  ["Tagline", (s) => `"${s.tagline}"`],
  ["Language", (s) => s.language],
  ["Format", (s) => s.format],
  ["Weekly reach", (s) => s.reach],
  ["Cities live", (s) => String(s.cities)],
  ["Core audience", (s) => s.audience],
  ["10-sec rate", (s) => s.tenSecRate],
  ["Marquee RJs", (s) => s.rjs.join(", ")],
  ["Signal index", (s) => `${s.strength} / 100`],
];

export async function exportCompareToPdf(picked: Station[]) {
  if (!picked.length) return;
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4", orientation: "landscape" });
  const W = doc.internal.pageSize.getWidth();
  const M = 40;
  const amber: [number, number, number] = [232, 150, 40];
  const ink: [number, number, number] = [26, 24, 21];
  const grey: [number, number, number] = [120, 116, 108];
  const T = (txt: string, x: number, y: number, maxW?: number) =>
    doc.text(pdfSafe(txt), x, y, maxW ? { maxWidth: maxW } : undefined);

  doc.setFillColor(...ink);
  doc.rect(0, 0, W, 92, "F");
  doc.setTextColor(...amber);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  T("SMARTADS", M, 44);
  doc.setTextColor(245, 243, 238);
  doc.setFontSize(13);
  T("Station Comparison Sheet", M, 66);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(180, 176, 168);
  T(
    `${picked.map((s) => `${s.name} ${s.freq.toFixed(1)}`).join("  vs  ")}  -  ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`,
    M,
    82,
  );

  const labelW = 120;
  const colW = (W - 2 * M - labelW) / picked.length;
  let y = 130;

  doc.setTextColor(...ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  picked.forEach((s, i) => {
    const x = M + labelW + i * colW;
    T(`${s.name}`, x, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...grey);
    doc.setFontSize(8.5);
    T(`${s.freq.toFixed(1)} FM`, x, y + 13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...ink);
    doc.setFontSize(10);
  });
  y += 26;
  doc.setDrawColor(...amber);
  doc.setLineWidth(1.2);
  doc.line(M, y, W - M, y);
  y += 20;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  ROWS.forEach(([label, get], idx) => {
    const values = picked.map((s) => pdfSafe(get(s)));
    const heights = values.map(
      (v) => doc.splitTextToSize(v, colW - 10).length * 12,
    );
    const rowH = Math.max(20, ...heights) + 8;

    if (idx % 2 === 0) {
      doc.setFillColor(243, 240, 234);
      doc.rect(M - 6, y - 12, W - 2 * M + 12, rowH, "F");
    }
    doc.setTextColor(...grey);
    doc.setFontSize(8);
    T(label.toUpperCase(), M, y);
    doc.setTextColor(...ink);
    doc.setFontSize(9);
    values.forEach((v, i) => T(v, M + labelW + i * colW, y, colW - 10));
    y += rowH;
  });

  doc.setFontSize(7.5);
  doc.setTextColor(...grey);
  T(
    "Indicative data based on published card rates and SmartAds network deals. Final rates confirmed at booking.",
    M,
    doc.internal.pageSize.getHeight() - 40,
  );
  doc.setTextColor(...amber);
  T(
    "smartads.in - hello@smartads.in - +91 98200 00000",
    M,
    doc.internal.pageSize.getHeight() - 26,
  );

  doc.save(
    `SmartAds-Station-Compare-${picked.map((s) => s.freq.toFixed(1)).join("-")}.pdf`,
  );
}
