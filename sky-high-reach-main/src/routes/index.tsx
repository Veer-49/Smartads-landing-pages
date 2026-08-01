import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Network } from "@/components/site/Network";
import { Formats } from "@/components/site/Formats";
import { Comparison } from "@/components/site/Comparison";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Agency } from "@/components/site/Agency";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";

const title = "SmarAds — Airport Advertising Agency in India";
const description =
  "SmarAds plans and buys airport advertising across 40+ Indian airports — terminal branding, digital screens, aerobridges and approach-road media. Get the 2026 rate card.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Network />
      <Formats />
      <Comparison />
      <CaseStudies />
      <Agency />
      <LeadForm />
      <Footer />
    </main>
  );
}
