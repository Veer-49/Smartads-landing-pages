import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ChannelRail, PlatformRail } from "@/components/site/Rails";
import { WhyOtt } from "@/components/site/WhyOtt";
import { CaseStudies } from "@/components/site/CaseStudies";
import { WhySmartAds } from "@/components/site/WhySmartAds";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";

const title = "SmartAds | OTT & Digital Advertising Agency in India";
const description =
  "SmartAds plans and buys OTT, CTV and digital advertising across 40+ Indian streaming platforms in 14 languages. Get a free media plan and the 2026 OTT rate card.";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AdvertisingAgency",
          name: "SmartAds",
          description,
          areaServed: "IN",
          email: "hello@smartads.in",
          telephone: "+91 98000 00000",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        
        <Hero />
        <PlatformRail />
        <ChannelRail />
        <WhyOtt />
        <CaseStudies />
        <WhySmartAds />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
