export type Airport = {
  code: string;
  name: string;
  city: string;
  category: "International" | "Domestic" | "Customs" | "Greenfield";
  footfall: string;
};

export const airports: Airport[] = [
  { code: "DEL", name: "Indira Gandhi Intl", city: "New Delhi", category: "International", footfall: "73.6M / yr" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj Intl", city: "Mumbai", category: "International", footfall: "52.8M / yr" },
  { code: "BLR", name: "Kempegowda Intl", city: "Bengaluru", category: "International", footfall: "37.5M / yr" },
  { code: "HYD", name: "Rajiv Gandhi Intl", city: "Hyderabad", category: "International", footfall: "25.4M / yr" },
  { code: "MAA", name: "Chennai Intl", city: "Chennai", category: "International", footfall: "22.1M / yr" },
  { code: "CCU", name: "Netaji Subhas Chandra Bose Intl", city: "Kolkata", category: "International", footfall: "19.6M / yr" },
  { code: "COK", name: "Cochin Intl", city: "Kochi", category: "International", footfall: "10.2M / yr" },
  { code: "AMD", name: "Sardar Vallabhbhai Patel Intl", city: "Ahmedabad", category: "International", footfall: "11.4M / yr" },
  { code: "PNQ", name: "Pune Airport", city: "Pune", category: "Domestic", footfall: "9.1M / yr" },
  { code: "GOX", name: "Manohar Intl (Mopa)", city: "Goa", category: "Greenfield", footfall: "4.4M / yr" },
  { code: "GOI", name: "Dabolim Airport", city: "Goa", category: "International", footfall: "8.3M / yr" },
  { code: "JAI", name: "Jaipur Intl", city: "Jaipur", category: "International", footfall: "5.6M / yr" },
  { code: "LKO", name: "Chaudhary Charan Singh Intl", city: "Lucknow", category: "International", footfall: "5.9M / yr" },
  { code: "IXC", name: "Shaheed Bhagat Singh Intl", city: "Chandigarh", category: "Customs", footfall: "3.4M / yr" },
  { code: "TRV", name: "Trivandrum Intl", city: "Thiruvananthapuram", category: "International", footfall: "4.6M / yr" },
  { code: "BBI", name: "Biju Patnaik Intl", city: "Bhubaneswar", category: "International", footfall: "3.8M / yr" },
  { code: "IDR", name: "Devi Ahilya Bai Holkar", city: "Indore", category: "Customs", footfall: "3.5M / yr" },
  { code: "NAG", name: "Dr. Babasaheb Ambedkar Intl", city: "Nagpur", category: "International", footfall: "2.9M / yr" },
  { code: "GAU", name: "Lokpriya Gopinath Bordoloi Intl", city: "Guwahati", category: "International", footfall: "5.2M / yr" },
  { code: "VNS", name: "Lal Bahadur Shastri Intl", city: "Varanasi", category: "International", footfall: "3.1M / yr" },
  { code: "SXR", name: "Sheikh ul-Alam Intl", city: "Srinagar", category: "Customs", footfall: "2.8M / yr" },
  { code: "PAT", name: "Jay Prakash Narayan", city: "Patna", category: "Domestic", footfall: "4.1M / yr" },
  { code: "RPR", name: "Swami Vivekananda", city: "Raipur", category: "Domestic", footfall: "2.4M / yr" },
  { code: "ATQ", name: "Sri Guru Ram Dass Jee Intl", city: "Amritsar", category: "International", footfall: "3.0M / yr" },
];

export const airportTypes = [
  {
    title: "International Airports",
    detail:
      "34 airports cleared for scheduled international traffic. Longest dwell times, premium NRI and business audiences, duty-free adjacency.",
    stat: "34",
    statLabel: "airports",
  },
  {
    title: "Domestic Airports",
    detail:
      "The volume engine of Indian aviation — tier-2 and tier-3 cities where a single dominant brand can own the entire terminal.",
    stat: "100+",
    statLabel: "operational",
  },
  {
    title: "Customs Airports",
    detail:
      "Limited international clearance with charter and seasonal traffic. Excellent low-clutter inventory at efficient CPMs.",
    stat: "26",
    statLabel: "airports",
  },
  {
    title: "Greenfield & Private",
    detail:
      "Mopa, Navi Mumbai, Jewar and beyond. Brand-new architecture, digital-first media assets, launch-partner pricing.",
    stat: "21",
    statLabel: "in pipeline",
  },
  {
    title: "Civil Enclaves",
    detail:
      "Defence airbases with civil terminals across Pune, Chandigarh, Leh and Bagdogra. Captive, high-affluence, low-competition.",
    stat: "28",
    statLabel: "enclaves",
  },
  {
    title: "Regional / UDAN",
    detail:
      "Government-subsidised regional connectivity routes opening tomorrow's consumer markets to first-mover brands today.",
    stat: "84",
    statLabel: "UDAN airports",
  },
];

export const mediaComparison = [
  { medium: "Airport", audience: "Affluent SEC A+ flyers", dwell: "90–150 min", skip: "Impossible", recall: "94%", clutter: "Very low" },
  { medium: "Digital", audience: "Broad, bot-diluted", dwell: "1.7 sec", skip: "1 tap", recall: "24%", clutter: "Extreme" },
  { medium: "Television", audience: "Mass household", dwell: "20 sec", skip: "Remote / OTT", recall: "38%", clutter: "High" },
  { medium: "Outdoor", audience: "Commuters at speed", dwell: "3 sec", skip: "Ignored", recall: "31%", clutter: "High" },
  { medium: "Radio", audience: "In-car, distracted", dwell: "15 sec", skip: "Station change", recall: "22%", clutter: "High" },
  { medium: "Newspaper", audience: "Ageing readership", dwell: "8 sec", skip: "Page turn", recall: "19%", clutter: "Moderate" },
];

export const caseStudies = [
  {
    client: "A Luxury EV Marque",
    format: "T2 Arrivals Domination — BLR + DEL",
    result: "3,400 test-drive bookings",
    lift: "+61%",
    liftLabel: "showroom walk-ins",
    story:
      "A full arrivals corridor takeover with a charging-bay activation converted landing passengers into test-drive appointments before they reached the taxi rank.",
  },
  {
    client: "A Pan-India Film Studio",
    format: "Cinematic Trailer Domination — 9 Airports",
    result: "42M impressions in 18 days",
    lift: "₹128 Cr",
    liftLabel: "opening weekend",
    story:
      "Synchronised digital screen takeovers timed to release week across metro terminals, with baggage-belt branding carrying the film's key art into arrivals.",
  },
  {
    client: "A Global Fintech",
    format: "Aerobridge + Security Tray Branding",
    result: "1 in 4 flyers recalled the brand",
    lift: "2.9x",
    liftLabel: "app installs",
    story:
      "Every business traveller physically handled the brand at security screening — the single highest-attention 40 seconds in the passenger journey.",
  },
];

export const whySmarAds = [
  {
    title: "Direct concessionaire access",
    body: "Pre-negotiated inventory with airport media concessionaires across 40+ Indian airports. No sub-broker margins, no phantom availability.",
  },
  {
    title: "Cinema DNA",
    body: "Built by a film-marketing team. We plan airport screens the way a studio plans a release calendar — release-week weight, city-level pacing, star-led key art.",
  },
  {
    title: "Creative built for terminals",
    body: "In-house design studio that treats a 40-ft light box as a canvas, not a resized banner. Every unit is art-directed to its exact viewing distance.",
  },
  {
    title: "Measured, not estimated",
    body: "Passenger-flow data, dwell mapping and post-campaign recall studies. You get a proof deck, not a photo of your hoarding.",
  },
  {
    title: "Single-window execution",
    body: "Permissions, printing, installation, night-shift labour, monitoring photographs and take-down — handled end to end by one team.",
  },
  {
    title: "Rate protection",
    body: "Annual volume commitments across categories mean our clients consistently buy below published card rates.",
  },
];
