import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompanyOverview from "@/components/company-overview";
import CapabilitiesSection from "@/components/capabilities-section";
import MarketImpact from "@/components/market-impact";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyOverview />
      <CapabilitiesSection />
      <MarketImpact />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
