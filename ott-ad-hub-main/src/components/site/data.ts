export type Channel = {
  name: string;
  reach: string;
  genre: string;
  langs: string;
  initials: string;
};

export const channels: Channel[] = [
  { name: "JioHotstar", reach: "300M+ MAU", genre: "Sports · Movies · Originals", langs: "10 languages", initials: "JH" },
  { name: "Netflix India", reach: "12M+ subs", genre: "Premium Originals", langs: "6 languages", initials: "NF" },
  { name: "Amazon Prime Video", reach: "22M+ subs", genre: "Movies · Series · Live", langs: "9 languages", initials: "PV" },
  { name: "SonyLIV", reach: "70M+ MAU", genre: "Sports · Reality · Drama", langs: "7 languages", initials: "SL" },
  { name: "ZEE5", reach: "100M+ MAU", genre: "Mass Entertainment", langs: "12 languages", initials: "Z5" },
  { name: "Amazon MX Player", reach: "180M+ MAU", genre: "AVOD · Youth", langs: "12 languages", initials: "MX" },
  { name: "Aha", reach: "20M+ MAU", genre: "Telugu · Tamil", langs: "2 languages", initials: "AH" },
  { name: "Sun NXT", reach: "35M+ MAU", genre: "South Regional", langs: "5 languages", initials: "SN" },
  { name: "Hoichoi", reach: "10M+ MAU", genre: "Bengali Originals", langs: "Bengali", initials: "HC" },
  { name: "ManoramaMAX", reach: "8M+ MAU", genre: "Malayalam", langs: "Malayalam", initials: "MM" },
  { name: "ETV Win", reach: "12M+ MAU", genre: "Telugu Serials", langs: "Telugu", initials: "EW" },
  { name: "Chaupal", reach: "5M+ MAU", genre: "Punjabi · Haryanvi", langs: "3 languages", initials: "CH" },
  { name: "Apple TV+", reach: "Premium HNI", genre: "Global Originals", langs: "English +", initials: "AT" },
  { name: "Lionsgate Play", reach: "6M+ MAU", genre: "Hollywood", langs: "4 languages", initials: "LP" },
  { name: "Discovery+", reach: "25M+ MAU", genre: "Factual · Lifestyle", langs: "8 languages", initials: "D+" },
  { name: "FanCode", reach: "60M+ MAU", genre: "Live Sports", langs: "6 languages", initials: "FC" },
  { name: "Airtel Xstream", reach: "45M+ MAU", genre: "Telco Aggregator", langs: "10 languages", initials: "AX" },
  { name: "Shemaroo Me", reach: "18M+ MAU", genre: "Movies · Devotional", langs: "5 languages", initials: "SM" },
  { name: "Ullu / Atrangii", reach: "15M+ MAU", genre: "Mass Digital", langs: "Hindi +", initials: "UL" },
  { name: "Tata Play Binge", reach: "12M+ homes", genre: "CTV Aggregator", langs: "9 languages", initials: "TP" },
];

export type Platform = {
  title: string;
  copy: string;
  formats: string;
  badge: string;
};

export const platforms: Platform[] = [
  {
    title: "Connected TV (CTV)",
    badge: "Big screen",
    copy: "Non-skippable spots on Smart TVs, Fire Stick, Chromecast — TV impact with digital targeting.",
    formats: "10s / 15s / 30s spots, L-bands, brand takeovers",
  },
  {
    title: "OTT In-Stream Video",
    badge: "Highest recall",
    copy: "Pre-roll and mid-roll inside premium shows, movies and live sport across 40+ apps.",
    formats: "Pre-roll, mid-roll, sponsorship, co-branded bumpers",
  },
  {
    title: "Live Sports Streaming",
    badge: "Mass scale",
    copy: "IPL, WPL, ISL, Kabaddi — concurrency-led reach with squeeze-ups and mid-over spots.",
    formats: "Mid-over spot, squeeze-up, scorecard branding",
  },
  {
    title: "YouTube & Video Discovery",
    badge: "Always-on",
    copy: "Skippable, bumper and Shorts inventory with audience and keyword layering.",
    formats: "In-feed, bumper, Shorts, masthead",
  },
  {
    title: "Programmatic DSP",
    badge: "Efficient",
    copy: "One buying layer across OTT, web, apps and DOOH with real-time bid optimisation.",
    formats: "PMP deals, private auctions, retargeting",
  },
  {
    title: "Social & Creator",
    badge: "Engagement",
    copy: "Meta, Instagram Reels and creator collaborations that ride the same story as your OTT film.",
    formats: "Reels, collabs, branded content, whitelisting",
  },
  {
    title: "Audio & Podcast",
    badge: "Companion",
    copy: "Spotify, Gaana, JioSaavn and podcast host-reads that extend frequency at low CPM.",
    formats: "Audio spots, sponsored playlists, host reads",
  },
  {
    title: "Digital OOH & In-App",
    badge: "Location",
    copy: "Screens in malls, airports, cabs plus gaming and rewarded in-app video for last-mile reach.",
    formats: "DOOH loops, rewarded video, playables",
  },
];

export const comparison = [
  {
    metric: "Audience targeting",
    ott: "Geo, language, device, age, income, interest, pincode",
    legacy: "Broad, channel-level guesswork",
  },
  { metric: "Wastage", ott: "Under 10% — pay for who matters", legacy: "40–60% spill outside target" },
  { metric: "Measurement", ott: "Real-time impressions, VTR, reach & frequency", legacy: "Panel estimates, weekly lag" },
  { metric: "Ad skipping", ott: "Non-skippable in premium OTT & CTV", legacy: "Remote surfing, ad-break exit" },
  { metric: "Minimum spend", ott: "Starts at ₹50,000 for a live campaign", legacy: "₹10L+ for meaningful TV/print" },
  { metric: "Creative agility", ott: "Swap creatives in hours, A/B by market", legacy: "Fixed for weeks after print/dub" },
  { metric: "Attribution", ott: "Clicks, site visits, footfall, sales lift", legacy: "Rarely attributable" },
];

export const mediaScores = [
  { medium: "OTT / CTV", precision: 96, accountability: 94, cost: 92 },
  { medium: "Television", precision: 42, accountability: 38, cost: 30 },
  { medium: "Print", precision: 30, accountability: 22, cost: 34 },
  { medium: "Radio", precision: 36, accountability: 28, cost: 58 },
  { medium: "Outdoor", precision: 32, accountability: 20, cost: 44 },
];

export const caseStudies = [
  {
    tag: "D2C Beauty",
    title: "The 4.2X Return",
    result: "4.2X ROAS in 60 days",
    detail:
      "Regional-language OTT films across ZEE5, MX Player and CTV drove 11.6M completed views and cut blended CAC by 38%.",
    stats: ["11.6M views", "94% VTR", "CAC ↓38%"],
  },
  {
    tag: "BFSI",
    title: "Prime Time, Precisely",
    result: "2.7M qualified leads funnel",
    detail:
      "HNI targeting on Netflix, Prime Video and Apple TV+ households in top 12 cities lifted brand consideration by 31%.",
    stats: ["31% lift", "12 cities", "₹19 CPL"],
  },
  {
    tag: "Regional Retail",
    title: "Pincode Blockbuster",
    result: "68% footfall growth",
    detail:
      "Pincode-level CTV plus live cricket squeeze-ups around 42 stores delivered store-level footfall attribution.",
    stats: ["42 stores", "68% footfall", "8.9M reach"],
  },
];

export const whyUs = [
  {
    title: "Direct OTT partnerships",
    copy: "Rate cards negotiated directly with 40+ Indian platforms — no reseller margin stacked on your budget.",
  },
  {
    title: "Language-first planning",
    copy: "We plan in 14 languages, because a Telugu viewer on aha is not a Hindi viewer on Hotstar.",
  },
  {
    title: "Creative built for the pause",
    copy: "In-house studio cuts 6s, 10s and 15s versions engineered for OTT attention curves.",
  },
  {
    title: "Live dashboard, not monthly PDFs",
    copy: "Impressions, VTR, reach, frequency and conversions visible to you every single day.",
  },
  {
    title: "Outcome-linked planning",
    copy: "Media mix rebuilt weekly against your CPL, ROAS or footfall goal — not against an impression promise.",
  },
  {
    title: "Fast go-live",
    copy: "Approved plan to live campaign in 72 hours, including creative adaptation and trafficking.",
  },
];
