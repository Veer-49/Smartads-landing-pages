export type Station = {
  freq: number;
  name: string;
  tagline: string;
  language: string;
  cities: number;
  reach: string;
  audience: string;
  format: string;
  rjs: string[];
  tenSecRate: string;
  strength: number;
};

export const stations: Station[] = [
  {
    freq: 91.1,
    name: "Radio City",
    tagline: "Rag Rag Mein Daude City",
    language: "Hindi / English",
    cities: 39,
    reach: "6.9 Cr weekly listeners",
    audience: "25–44, SEC A/B urban professionals",
    format: "Retro + contemporary Bollywood",
    rjs: ["RJ Salil", "RJ Archana", "RJ Kaadu"],
    tenSecRate: "₹450 – ₹1,900",
    strength: 78,
  },
  {
    freq: 92.7,
    name: "Big FM",
    tagline: "Dhun Badal Ke Toh Dekho",
    language: "Hindi / Regional",
    cities: 58,
    reach: "5.4 Cr weekly listeners",
    audience: "22–40, Tier 2 & 3 mass market",
    format: "Melody, devotional & talk",
    rjs: ["RJ Sangram", "RJ Khurafati Nitin"],
    tenSecRate: "₹380 – ₹1,600",
    strength: 71,
  },
  {
    freq: 93.5,
    name: "Red FM",
    tagline: "Bajaate Raho",
    language: "Hindi / Regional",
    cities: 68,
    reach: "6.1 Cr weekly listeners",
    audience: "18–34, youth & first jobbers",
    format: "Bold humour, hit music, satire",
    rjs: ["RJ Raunac", "RJ Malishka", "RJ Praveen"],
    tenSecRate: "₹500 – ₹2,100",
    strength: 88,
  },
  {
    freq: 94.3,
    name: "Radio One",
    tagline: "Good Vibes Only",
    language: "English / Hinglish",
    cities: 7,
    reach: "1.2 Cr weekly listeners",
    audience: "24–40, metro premium & expat",
    format: "International hits & lifestyle",
    rjs: ["RJ Jai", "RJ Rohini"],
    tenSecRate: "₹600 – ₹2,400",
    strength: 62,
  },
  {
    freq: 95.0,
    name: "Radio Nasha",
    tagline: "Purani Jeans Wala Radio",
    language: "Hindi",
    cities: 3,
    reach: "62 Lakh weekly listeners",
    audience: "35–55, nostalgia-led affluent",
    format: "Retro 70s–90s Bollywood",
    rjs: ["RJ Yuvraj", "RJ Sonali"],
    tenSecRate: "₹420 – ₹1,500",
    strength: 55,
  },
  {
    freq: 98.3,
    name: "Radio Mirchi",
    tagline: "It's Hot!",
    language: "Hindi / Regional",
    cities: 76,
    reach: "8.2 Cr weekly listeners",
    audience: "18–40, mass urban India",
    format: "Bollywood chartbusters & comedy",
    rjs: ["RJ Naved", "RJ Stutee", "RJ Ginnie"],
    tenSecRate: "₹550 – ₹2,600",
    strength: 96,
  },
  {
    freq: 100.7,
    name: "AIR FM Gold",
    tagline: "Sunte Raho",
    language: "Hindi / English",
    cities: 42,
    reach: "3.8 Cr weekly listeners",
    audience: "30–60, government & PSU heavy",
    format: "News, talk & classic music",
    rjs: ["Anchor Suman", "Anchor Vivek"],
    tenSecRate: "₹300 – ₹1,100",
    strength: 58,
  },
  {
    freq: 102.6,
    name: "AIR FM Rainbow",
    tagline: "Rang Barangi Duniya",
    language: "Regional",
    cities: 48,
    reach: "4.4 Cr weekly listeners",
    audience: "25–55, semi-urban & rural belt",
    format: "Regional music & public service",
    rjs: ["Anchor Meera", "Anchor Ravi"],
    tenSecRate: "₹280 – ₹950",
    strength: 64,
  },
  {
    freq: 104.0,
    name: "Fever FM",
    tagline: "Full On Bajaao",
    language: "Hindi / English",
    cities: 12,
    reach: "2.6 Cr weekly listeners",
    audience: "18–30, students & gig workers",
    format: "Party, EDM & Bollywood dance",
    rjs: ["RJ Rachit", "RJ Nitin"],
    tenSecRate: "₹470 – ₹1,800",
    strength: 74,
  },
  {
    freq: 104.8,
    name: "Ishq FM",
    tagline: "Sunoh Dil Se",
    language: "Hindi",
    cities: 4,
    reach: "88 Lakh weekly listeners",
    audience: "21–38, romance & long-drive",
    format: "Soft romantic & unplugged",
    rjs: ["RJ Kavya", "RJ Aman"],
    tenSecRate: "₹400 – ₹1,400",
    strength: 60,
  },
  {
    freq: 106.4,
    name: "Club FM",
    tagline: "Feel The Beat",
    language: "Malayalam / Kannada",
    cities: 9,
    reach: "1.5 Cr weekly listeners",
    audience: "20–40, South India regional",
    format: "Regional hits & local talk",
    rjs: ["RJ Neha", "RJ Firoz"],
    tenSecRate: "₹350 – ₹1,300",
    strength: 66,
  },
  {
    freq: 107.2,
    name: "Radio Indigo",
    tagline: "Music That Moves You",
    language: "English",
    cities: 5,
    reach: "54 Lakh weekly listeners",
    audience: "22–38, premium metro English",
    format: "Alt, indie & international pop",
    rjs: ["RJ Rohit", "RJ Preeti"],
    tenSecRate: "₹520 – ₹2,000",
    strength: 52,
  },
];

export const MIN_FREQ = 88;
export const MAX_FREQ = 108;

export function nearestStation(freq: number): Station {
  return stations.reduce((best, s) =>
    Math.abs(s.freq - freq) < Math.abs(best.freq - freq) ? s : best,
  );
}
