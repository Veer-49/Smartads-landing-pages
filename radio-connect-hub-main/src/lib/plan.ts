import { stations, type Station } from "@/data/stations";

export type Lead = {
  name: string;
  company: string;
  phone: string;
  email: string;
  budget: string;
  city: string;
};

export const budgetValues: Record<string, number> = {
  "Under ₹2L": 150000,
  "₹2L – ₹10L": 600000,
  "₹10L – ₹50L": 2500000,
  "₹50L+": 7500000,
};

export type PlanLine = {
  station: Station;
  share: number;
  spend: number;
  spots: number;
  avgRate: number;
  reach: number;
};

export type MediaPlan = {
  budget: number;
  lines: PlanLine[];
  totalSpots: number;
  netReach: number;
  frequency: number;
  cpm: number;
  weeks: number;
  cities: string;
};

function midRate(s: Station): number {
  const nums = s.tenSecRate.replace(/[₹,]/g, "").match(/\d+/g) ?? ["500"];
  const parsed = nums.map(Number);
  return Math.round(parsed.reduce((a, b) => a + b, 0) / parsed.length);
}

function reachCount(s: Station): number {
  const m = s.reach.match(/([\d.]+)\s*(Cr|Lakh)/i);
  if (!m) return 1_000_000;
  const n = parseFloat(m[1] ?? "1");
  return /cr/i.test(m[2] ?? "") ? n * 1e7 : n * 1e5;
}

export function formatINR(n: number): string {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

/** jsPDF core fonts have no rupee glyph — swap it for "Rs". */
export function pdfSafe(s: string): string {
  return s.replace(/₹\s?/g, "Rs ").replace(/[–—]/g, "-").replace(/·/g, "-");
}

export function formatReach(n: number): string {
  if (n >= 1e7) return `${(n / 1e7).toFixed(1)} Cr`;
  if (n >= 1e5) return `${(n / 1e5).toFixed(0)} Lakh`;
  return Math.round(n).toLocaleString("en-IN");
}

export function buildPlan(lead: Lead): MediaPlan {
  const budget = budgetValues[lead.budget] ?? 600000;
  const picked = [...stations].sort((a, b) => b.strength - a.strength).slice(0, 3);
  const shares = [0.45, 0.33, 0.22];

  const lines: PlanLine[] = picked.map((station, i) => {
    const share = shares[i] ?? 0.2;
    const spend = budget * share;
    const avgRate = midRate(station);
    const spots = Math.max(1, Math.round(spend / avgRate));
    return {
      station,
      share,
      spend,
      spots,
      avgRate,
      reach: reachCount(station),
    };
  });

  const totalSpots = lines.reduce((a, l) => a + l.spots, 0);

  // A single 10-sec spot delivers roughly 0.1% of a station's weekly cume.
  const SPOT_DELIVERY = 0.001;
  const impressions = lines.reduce(
    (a, l) => a + l.spots * l.reach * SPOT_DELIVERY,
    0,
  );

  // Net reach = combined cume discounted for cross-station duplication
  // and for the share of the cume actually inside the target audience.
  const grossReach = lines.reduce((a, l) => a + l.reach, 0);
  const netReach = Math.round(grossReach * 0.18);

  const frequency = impressions / netReach;
  const cpm = budget / (impressions / 1000);
  const weeks = budget >= 2500000 ? 6 : budget >= 600000 ? 4 : 3;


  return {
    budget,
    lines,
    totalSpots,
    netReach,
    frequency: Number(frequency.toFixed(1)),
    cpm: Math.round(cpm),
    weeks,
    cities: lead.city?.trim() ? lead.city.trim() : "Top 8 metros (default)",
  };
}
