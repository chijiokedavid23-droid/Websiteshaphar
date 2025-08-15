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
    title: "Shaphargroup - Global SAF Leader | HEFA Sustainable Aviation Fuel Production | 2025 SAF Mandate Ready",
    description: "Shaphargroup: Premier HEFA sustainable aviation fuel producer with ISCC certification. Serving 60+ airlines with 85% GHG reduction SAF solutions. EU/UK SAF mandate compliant. 1M+ tonnes annual capacity.",
    keywords: "sustainable aviation fuel 2025, HEFA SAF production capacity, SAF mandate compliance, aviation decarbonization solutions, CORSIA eligible SAF, ISCC certified aviation fuel, UCO to SAF conversion, net zero aviation 2050, SAF offtake agreements, HEFA-SPK commercial scale, EU SAF mandate, UK SAF requirements, aviation biofuel supplier, SAF capacity expansion",
  },
  saf: {
    title: "HEFA-SPK Sustainable Aviation Fuel | Commercial Scale SAF Production | ASTM D7566 Certified | Shaphargroup", 
    description: "Commercial-scale HEFA-SPK sustainable aviation fuel production. ASTM D7566 certified, CORSIA eligible SAF with 85% GHG reduction. 1M+ tonnes capacity serving major airlines. EU/UK mandate ready.",
    keywords: "HEFA-SPK production, ASTM D7566 SAF certification, commercial scale SAF, CORSIA eligible aviation fuel, SAF mandate ready, airline SAF procurement, sustainable aviation fuel 2025, HEFA production capacity, aviation biofuel offtake, net zero aviation fuel",
  },
  about: {
    title: "About Shaphargroup - Global Sustainable Aviation Fuel Leader | Company Story & Mission",
    description: "Founded in 2020, Shaphargroup is a global leader in sustainable aviation fuel production with operations across Asia, Europe, and Americas. Learn about our mission to transform aviation through HEFA SAF and UCO refining.",
    keywords: "Shaphargroup company profile, SAF company history, sustainable aviation fuel mission, UCO refining company story, aviation biofuel producer background, renewable energy company, ISCC certified manufacturer, global SAF operations",
  },
  leadership: {
    title: "Leadership Team - Sustainable Aviation Fuel Industry Experts | SAF Executive Team | Shaphargroup",
    description: "Meet Shaphargroup's world-class leadership team of SAF experts, including CEO Charles Jiao, CFO Jane Zhen, and global directors driving sustainable aviation fuel innovation across continents.",
    keywords: "Shaphargroup leadership team, SAF industry executives, sustainable aviation fuel experts, Charles Jiao CEO, Jane Zhen CFO, David Arinze, Timothy Rose, aviation fuel leadership, UCO refining experts, renewable energy executives",
  },
  sustainability: {
    title: "Aviation Decarbonization Impact | 85% Carbon Reduction | Net Zero 2050 SAF Solutions | Shaphargroup",
    description: "Leading aviation decarbonization with 85% GHG reduction SAF solutions. 1.58M tons CO₂ avoided annually. ISCC certified circular economy contributing to net zero aviation 2050 goals.",
    keywords: "aviation decarbonization 2050, net zero aviation solutions, SAF carbon footprint reduction, CORSIA compliance SAF, sustainable aviation targets, aviation emissions reduction, climate action aviation, carbon neutral flight operations, green aviation technology",
  },
  contact: {
    title: "Contact Shaphargroup | Global SAF Supplier | Connect with Aviation Fuel Experts Worldwide",
    description: "Contact Shaphargroup for sustainable aviation fuel partnerships. Global offices in China, Netherlands, and Americas. Connect with our SAF experts for HEFA SAF procurement and UCO refining solutions.",
    keywords: "contact Shaphargroup, SAF supplier contact, sustainable aviation fuel inquiry, HEFA SAF partnership, aviation fuel procurement, UCO refining contact, SAF expert consultation, biofuel supplier contact",
  },
  blog: {
    title: "SAF Industry Insights & News | Sustainable Aviation Fuel Blog | Expert Analysis | Shaphargroup",
    description: "Latest insights on sustainable aviation fuel industry, HEFA SAF technology advances, UCO refining innovations, and aviation decarbonization trends from Shaphargroup's industry experts.",
    keywords: "SAF industry insights, sustainable aviation fuel news, HEFA SAF technology, aviation decarbonization trends, UCO refining innovations, biofuel industry analysis, aviation fuel market updates, renewable jet fuel developments",
  }
};

// Performance and Core Web Vitals optimizations
export const optimizePagePerformance = () => {
  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalImages = [
      'https://shaphargroup.com/wp-content/uploads/2025/04/Shaphargroup-logo-logo-browser.png'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  };

  // Optimize images with lazy loading
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

  // Run optimizations
  preloadCriticalResources();
  
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