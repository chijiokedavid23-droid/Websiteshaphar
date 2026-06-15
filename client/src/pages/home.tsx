import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AnnouncementBanner from "@/components/announcement-banner";
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
        "@id": "https://shaphargroup.com/#organization",
        "name": "Shaphargroup",
        "alternateName": ["Shaphargroup Industry (Hainan) Co., Ltd.", "Shaphar Group"],
        "url": "https://shaphargroup.com",
        "logo": "https://shaphargroup.com/logo.png",
        "email": "info@shaphargroup.com",
        "description": "Shaphargroup is a vertically integrated sustainable aviation fuel (SAF) company that produces HEFA SAF in Shandong, China through Shandong Prophet Energy Co., LTD, distributes SAF and refined UCO across Europe from Rotterdam, Netherlands, and is developing the Shaphar Refining HEFA refinery — a 200,000 MT/year SAF and HVO production facility in Rotterdam, Netherlands targeting 2030.",
        "foundingDate": "2020",
        "subOrganization": [
          {
            "@type": "Organization",
            "name": "Shaphar Refining",
            "description": "Shaphargroup subsidiary developing a 200,000 MT/year HEFA SAF refinery in Rotterdam, Netherlands, targeting production in 2030."
          },
          {
            "@type": "Organization",
            "name": "Shandong Prophet Energy Co., LTD",
            "description": "Shaphargroup's China subsidiary for UCO pre-treatment and HEFA SAF production in Yangxin County, Shandong Province."
          }
        ],
        "location": [
          {
            "@type": "Place",
            "name": "Rotterdam, Netherlands",
            "description": "European headquarters, SAF and UCO distribution hub, and Shaphar Refining development base"
          },
          {
            "@type": "Place",
            "name": "Shandong, China",
            "description": "HEFA SAF production and UCO pre-treatment via Shandong Prophet Energy Co., LTD"
          },
          { "@type": "Place", "name": "Houston, Texas, USA" },
          { "@type": "Place", "name": "Toronto, Ontario, Canada" }
        ],
        "hasCredential": ["ISCC EU", "ISCC PLUS", "REACH Compliance", "CORSIA SAF Eligible"],
        "areaServed": [
          { "@type": "Place", "name": "Europe", "description": "SAF and UCO distribution" },
          { "@type": "Place", "name": "China", "description": "SAF production and UCO supply" },
          { "@type": "Place", "name": "Americas", "description": "Commercial operations" }
        ],
        "serviceType": [
          "HEFA SAF Production (Shandong, China)",
          "SAF Distribution Europe",
          "UCO Distribution Europe",
          "HEFA Refinery Development (Rotterdam, Netherlands)"
        ]
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
        <AnnouncementBanner />
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
