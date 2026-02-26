// SEO Utility Functions for Shaphargroup Website
// Comprehensive SEO management for better Google rankings

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
  noindex?: boolean;
  nofollow?: boolean;
}

export const updateSEOTags = (config: SEOConfig) => {
  // Title
  document.title = config.title;

  // Meta Description
  updateOrCreateMetaTag('name', 'description', config.description);
  
  // Keywords
  updateOrCreateMetaTag('name', 'keywords', config.keywords);
  
  // Robots
  const robotsContent = `${config.noindex ? 'noindex' : 'index'}, ${config.nofollow ? 'nofollow' : 'follow'}`;
  updateOrCreateMetaTag('name', 'robots', robotsContent);

  // Canonical URL
  if (config.canonical) {
    updateOrCreateLinkTag('canonical', config.canonical);
  }

  // Open Graph Tags
  updateOrCreateMetaTag('property', 'og:title', config.ogTitle || config.title);
  updateOrCreateMetaTag('property', 'og:description', config.ogDescription || config.description);
  updateOrCreateMetaTag('property', 'og:url', config.canonical || window.location.href);
  updateOrCreateMetaTag('property', 'og:type', 'website');
  
  if (config.ogImage) {
    updateOrCreateMetaTag('property', 'og:image', config.ogImage);
  }

  // Twitter Cards
  updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMetaTag('name', 'twitter:title', config.ogTitle || config.title);
  updateOrCreateMetaTag('name', 'twitter:description', config.ogDescription || config.description);

  // Structured Data
  if (config.structuredData) {
    addStructuredData(config.structuredData);
  }
};

const updateOrCreateMetaTag = (attribute: string, name: string, content: string) => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  } else {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    tag.setAttribute('content', content);
    document.head.appendChild(tag);
  }
};

const updateOrCreateLinkTag = (rel: string, href: string) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (tag) {
    tag.setAttribute('href', href);
  } else {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    tag.setAttribute('href', href);
    document.head.appendChild(tag);
  }
};

const addStructuredData = (data: Record<string, any>) => {
  // Remove existing structured data for this page
  const existingScript = document.querySelector('script[type="application/ld+json"][data-dynamic]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-dynamic', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Predefined SEO configurations for each page - Updated for 2025 SAF industry trends
export const SEO_CONFIGS = {
  home: {
    title: "Shaphargroup | SAF Producer China | UCO & SAF Distributor Europe | Rotterdam Refinery",
    description: "Shaphargroup produces HEFA SAF in Shandong, China and distributes SAF and UCO across Europe from Rotterdam. Building a 200,000 MT/year HEFA refinery in the Netherlands (Shaphar Refining, 2028). ISCC certified, CORSIA eligible.",
    keywords: "SAF producer China, SAF distributor Europe, UCO distributor Europe, HEFA SAF Shandong, UCO supplier Rotterdam, sustainable aviation fuel Netherlands, HEFA refinery Rotterdam, SAF supplier Europe, Shaphargroup, Shaphar Refining, Shandong Prophet Energy, UCO to SAF, SAF mandate compliance, CORSIA eligible SAF, ISCC certified SAF, ReFuelEU Aviation, aviation decarbonization",
  },
  saf: {
    title: "HEFA SAF & UCO Supply | Shaphargroup | SAF Producer China | Distributor Europe",
    description: "Shaphargroup supplies ISCC-certified HEFA Sustainable Aviation Fuel (SAF) and refined UCO from Shandong, China to European airlines and refiners. ASTM D7566 certified, CORSIA eligible. Up to 85% GHG reduction.",
    keywords: "HEFA SAF China, UCO supplier Europe, HEFA-SPK distributor, SAF supply Europe, UCO Europe supplier, sustainable aviation fuel China, SAF producer Shandong, CORSIA SAF, ISCC certified UCO, ASTM D7566 SAF, Book and Claim SAF, SAFc certificates, ReFuelEU SAF compliance, aviation biofuel Europe",
  },
  about: {
    title: "About Shaphargroup | SAF & UCO Producer China | SAF Distributor Europe | Rotterdam Refinery",
    description: "Shaphargroup is a vertically integrated SAF company: producing HEFA SAF in Shandong, China; distributing SAF and UCO in Europe from Rotterdam; and building the 200,000 MT/year Shaphar Refining HEFA refinery in the Netherlands (2028).",
    keywords: "Shaphargroup company, SAF producer China, UCO producer Shandong, SAF distributor Rotterdam, sustainable aviation fuel company, Shandong Prophet Energy, Shaphar Refining, HEFA SAF company, UCO refining Europe, vertically integrated SAF, global SAF operations, Rotterdam SAF company",
  },
  leadership: {
    title: "Leadership Team | Shaphargroup | Sustainable Aviation Fuel Executives",
    description: "Meet Shaphargroup's leadership team driving SAF production in China, UCO and SAF distribution in Europe, and the Shaphar Refining HEFA refinery development in Rotterdam. CEO Charles Jiao, CFO Jane Zhen, MD David Arinze and global directors.",
    keywords: "Shaphargroup leadership, Charles Jiao CEO SAF, Jane Zhen CFO, David Arinze SAF Europe, Timothy Rose, Brian Jelier Operations Europe, Jeremiah Shallangwa Energy Infrastructure, SAF company executives, HEFA SAF leadership, Rotterdam SAF team",
  },
  sustainability: {
    title: "SAF Sustainability | 85% CO₂ Reduction | ISCC Certified | Shaphargroup",
    description: "Shaphargroup's HEFA SAF reduces greenhouse gas emissions by up to 85% versus conventional jet fuel. ISCC certified circular economy: UCO collected in China, converted to SAF for European aviation. Supporting net-zero aviation 2050.",
    keywords: "SAF carbon reduction, HEFA SAF emissions, UCO lifecycle emissions, sustainable aviation fuel CO2, ISCC certified SAF, net zero aviation 2050, aviation decarbonization, ReFuelEU sustainability, circular economy SAF, SAF GHG reduction 85 percent, CORSIA sustainability criteria",
  },
  contact: {
    title: "Contact Shaphargroup | SAF & UCO Supplier | Rotterdam | Shandong | Houston | Toronto",
    description: "Contact Shaphargroup for SAF and UCO supply in Europe, HEFA SAF production in China, or Shaphar Refining partnership enquiries. Offices in Rotterdam (Netherlands), Shandong (China), Houston (USA), and Toronto (Canada).",
    keywords: "contact Shaphargroup, SAF supplier Rotterdam, UCO supplier Europe, Shaphargroup Rotterdam, Shaphargroup Shandong, HEFA SAF inquiry, Shaphar Refining contact, SAF offtake Europe, UCO purchase Europe, sustainable aviation fuel contact",
  },
  blog: {
    title: "SAF Market Insights | China Europe SAF Bridge | Shaphargroup",
    description: "SAF industry insights, UCO market intelligence, and China–Europe SAF Bridge monthly reports from Shaphargroup. Stay current on HEFA SAF prices, ReFuelEU mandates, and UCO feedstock trends.",
    keywords: "SAF market news, China Europe SAF, UCO price Europe, HEFA SAF market, SAF industry insights, ReFuelEU Aviation update, UCO market China, SAF feedstock prices, sustainable aviation fuel news, SAF mandate updates",
  }
};

// Performance and Core Web Vitals optimizations
export const optimizePagePerformance = () => {
  // Optimize images with lazy loading - no preload to avoid warnings
  const optimizeImages = () => {
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img, index) => {
      if (index > 2) { // Lazy load images after the first 3
        img.setAttribute('loading', 'lazy');
      } else {
        img.setAttribute('loading', 'eager');
      }
      
      // Add decode hint
      img.setAttribute('decoding', 'async');
    });
  };

  // Run image optimization after DOM content is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeImages);
  } else {
    optimizeImages();
  }
};

export default {
  updateSEOTags,
  SEO_CONFIGS,
  optimizePagePerformance
};