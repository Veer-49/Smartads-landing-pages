import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  Clapperboard,
  Film,
  Megaphone,
  Popcorn,
  ScanLine,
  Sparkles,
  Ticket,
} from "lucide-react";

export const chains = [
  { name: "PVR INOX", screens: "1,700+ screens", note: "Pan-India premium multiplex network" },
  { name: "Cinepolis", screens: "440+ screens", note: "Strong west & south metro footprint" },
  { name: "Carnival Cinemas", screens: "300+ screens", note: "Deep tier-2 and tier-3 reach" },
  { name: "Miraj Cinemas", screens: "200+ screens", note: "Fast-growing regional multiplex" },
  { name: "Mukta A2 Cinemas", screens: "80+ screens", note: "Gujarat & Rajasthan heartland" },
  { name: "Asian Cinemas", screens: "150+ screens", note: "Telugu belt mass audiences" },
  { name: "Wave Cinemas", screens: "60+ screens", note: "North India metro clusters" },
  { name: "Single Screens", screens: "6,000+ screens", note: "Hyperlocal, high-frequency footfall" },
];

export type AdType = {
  title: string;
  duration: string;
  copy: string;
  icon: LucideIcon;
};

export const adTypes: AdType[] = [
  {
    title: "On-Screen Cinema Ads",
    duration: "10s – 60s",
    copy: "Your film on a 70-foot screen with 7.1 surround, before the trailers roll. Undivided, lights-out attention.",
    icon: Film,
  },
  {
    title: "Movie Ticket Branding",
    duration: "Per ticket",
    copy: "Every ticket becomes a mini billboard the audience holds, photographs and keeps in their pocket.",
    icon: Ticket,
  },
  {
    title: "Outside Theatre Branding",
    duration: "Monthly",
    copy: "Facade banners, box-office wraps, escalator panels and parking-level media at the point of decision.",
    icon: Megaphone,
  },
  {
    title: "Lobby Standees & Activations",
    duration: "Weekly",
    copy: "Cutouts, sampling desks, photo booths and brand ambassadors inside the popcorn queue.",
    icon: Sparkles,
  },
  {
    title: "F&B Co-Branding",
    duration: "Per cup / tub",
    copy: "Popcorn tubs, cold-drink cups and tray mats — your brand held for the entire 150-minute runtime.",
    icon: Popcorn,
  },
  {
    title: "Seat, Wall & Door Branding",
    duration: "Monthly",
    copy: "Seat-back covers, auditorium door graphics and corridor vinyls that own the walk to the seat.",
    icon: Armchair,
  },
  {
    title: "QR & Coupon Drops",
    duration: "Campaign",
    copy: "Scannable offers on tickets and standees that turn a dark auditorium into measurable footfall.",
    icon: ScanLine,
  },
  {
    title: "Brand-Integrated Trailers",
    duration: "Custom",
    copy: "Cinema-grade creative produced for the big screen — DCP mastered, censor cleared, ready to project.",
    icon: Clapperboard,
  },
];

export const mediaCompare = [
  {
    medium: "Cinema",
    attention: "Near 100%",
    skippable: "Impossible to skip",
    recall: "Up to 3x higher ad recall",
    highlight: true,
  },
  {
    medium: "Digital / Social",
    attention: "1.7s average view",
    skippable: "Skipped & ad-blocked",
    recall: "Low, scroll-dependent",
    highlight: false,
  },
  {
    medium: "Television",
    attention: "Second-screen split",
    skippable: "Channel surfed",
    recall: "Diluted by clutter",
    highlight: false,
  },
  {
    medium: "Outdoor / OOH",
    attention: "2–4s in passing",
    skippable: "Easily ignored",
    recall: "Reach without depth",
    highlight: false,
  },
  {
    medium: "Radio",
    attention: "Background listening",
    skippable: "Station switched",
    recall: "Audio only, no visual",
    highlight: false,
  },
  {
    medium: "Newspaper",
    attention: "Declining readership",
    skippable: "Page turned",
    recall: "One-day shelf life",
    highlight: false,
  },
];

export const caseStudies = [
  {
    tag: "QSR Chain",
    title: "Popcorn to Patty",
    metric: "+38%",
    metricLabel: "walk-ins near mall outlets",
    copy: "A 20-second on-screen spot plus ticket-back coupons across 240 screens in 6 cities drove trackable redemptions within 90 minutes of showtime.",
  },
  {
    tag: "Real Estate",
    title: "Sold Out Before Launch",
    metric: "412",
    metricLabel: "qualified site visits",
    copy: "Gold-class-only targeting in 3 micro-markets, paired with lobby standees and QR walkthroughs, filled the sales gallery for eight straight weekends.",
  },
  {
    tag: "EdTech",
    title: "Exam Season Takeover",
    metric: "2.6x",
    metricLabel: "cheaper cost per lead vs social",
    copy: "Regional-language spots timed to family releases in tier-2 towns, with parent-focused creative and a scan-to-counsel funnel.",
  },
  {
    tag: "FMCG Launch",
    title: "Cold Drink, Hot Screen",
    metric: "91%",
    metricLabel: "aided brand recall post-show",
    copy: "Co-branded cups and tubs across 500+ screens meant the product was literally in the audience's hands during the ad.",
  },
];

export const reasons = [
  {
    title: "Direct chain contracts",
    copy: "We buy inventory straight from national and regional chains — no layered middlemen, no inflated rate cards.",
  },
  {
    title: "Screen-level planning",
    copy: "Plan by property, showtime, language and film genre. Pay only for the audience that matters to you.",
  },
  {
    title: "Cinema-native creative",
    copy: "In-house DCP mastering, sound design and censor certification so your film looks made for the big screen.",
  },
  {
    title: "Proof, not promises",
    copy: "Geo-tagged play proof, house-count reports and QR-level attribution in every post-campaign deck.",
  },
  {
    title: "17,000+ screens mapped",
    copy: "Multiplex and single screen, metro and tier-3 — one plan, one invoice, one team accountable.",
  },
  {
    title: "48-hour go-live",
    copy: "Approved creative can be projected in front of a paying audience within two working days.",
  },
];

export const stats = [
  { value: "17,000+", label: "Screens mapped" },
  { value: "120+", label: "Cities covered" },
  { value: "450+", label: "Brands projected" },
  { value: "3x", label: "Higher ad recall" },
];