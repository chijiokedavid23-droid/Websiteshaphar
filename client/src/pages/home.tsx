import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompanyOverview from "@/components/company-overview";
import CapabilitiesSection from "@/components/capabilities-section";
import ProjectsSection from "@/components/projects-section";
import MarketImpact from "@/components/market-impact";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { updateSEOTags, SEO_CONFIGS, optimizePagePerformance } from "@/lib/seo";
import optimizeForGoogle from "@/lib/advanced-seo";
import { initializePageSpeedOptimization } from "@/lib/page-speed-optimizer";

export default function Home() {
  // SEO Meta Tags Setup
  useEffect(() => {
    // Use centralized SEO configuration
    updateSEOTags({
      ...SEO_CONFIGS.home,
      canonical: window.location.href,
      ogImage: "https://shaphargroup.com/logo.png",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Shaphargroup",
        "alternateName": "Shaphargroup Industry (Hainan) Co., Ltd.",
        "url": "https://www.shaphargroup.com",
        "logo": "https://shaphargroup.com/logo.png",
        "description": "Global leader in sustainable aviation fuel production, specializing in HEFA SAF and UCO refining with operations in China, Netherlands, and Americas.",
        "industry": "Sustainable Aviation Fuel Production",
        "foundingDate": "2020",
        "keywords": ["Sustainable Aviation Fuel", "HEFA SAF", "UCO Refining", "Biofuel Production", "Aviation Decarbonization"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sustainable Aviation Fuel Products",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "HEFA Sustainable Aviation Fuel",
              "description": "Premium HEFA-SPK sustainable aviation fuel for commercial aviation blending"
            },
            {
              "@type": "Product", 
              "name": "Refined Used Cooking Oil",
              "description": "Premium refined UCO feedstock for biofuel and SAF production"
            }
          ]
        },
        "areaServed": ["Global", "Asia", "Europe", "Americas"],
        "serviceType": ["Sustainable Aviation Fuel Production", "UCO Refining", "Biofuel Manufacturing"]
      }
    });

    // Performance optimizations removed to prevent preload console warnings
    
    // Advanced Google optimization for 2025
    optimizeForGoogle({
      enableE2E: true,
      enableCoreSEO: true,
      enableIndustryOptimization: true,
      enableTechnicalSEO: true
    });

    // Cleanup
    return () => {
      document.title = 'Shaphargroup - Sustainable Aviation Fuel | UCO Refining & HEFA SAF Production';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <HeroSection />
        <CompanyOverview />
        <CapabilitiesSection />
        <ProjectsSection />
        <MarketImpact />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
