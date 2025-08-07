// SEO Testing and Validation Utilities for Shaphargroup
// This file helps validate that SEO implementations are working correctly

export interface SEOTestResult {
  pass: boolean;
  message: string;
  score: number;
}

export interface SEOAuditReport {
  overallScore: number;
  results: {
    title: SEOTestResult;
    description: SEOTestResult;
    keywords: SEOTestResult;
    structuredData: SEOTestResult;
    openGraph: SEOTestResult;
    performance: SEOTestResult;
    accessibility: SEOTestResult;
  };
  recommendations: string[];
}

export const runSEOAudit = async (): Promise<SEOAuditReport> => {
  const results = {
    title: checkTitleTag(),
    description: checkMetaDescription(),
    keywords: checkKeywords(),
    structuredData: checkStructuredData(),
    openGraph: checkOpenGraphTags(),
    performance: checkPerformanceIndicators(),
    accessibility: checkAccessibilityFeatures()
  };

  const overallScore = Object.values(results).reduce((sum, result) => sum + result.score, 0) / 7;
  
  const recommendations = generateRecommendations(results);

  return {
    overallScore: Math.round(overallScore),
    results,
    recommendations
  };
};

const checkTitleTag = (): SEOTestResult => {
  const title = document.title;
  
  if (!title) {
    return { pass: false, message: "Missing page title", score: 0 };
  }
  
  if (title.length < 30) {
    return { pass: false, message: "Title too short (less than 30 characters)", score: 30 };
  }
  
  if (title.length > 60) {
    return { pass: false, message: "Title too long (more than 60 characters)", score: 70 };
  }
  
  if (!title.includes("Shaphargroup") || !title.includes("SAF") && !title.includes("Sustainable Aviation Fuel")) {
    return { pass: false, message: "Title missing key brand or product terms", score: 50 };
  }
  
  return { pass: true, message: "Title tag optimized", score: 100 };
};

const checkMetaDescription = (): SEOTestResult => {
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  
  if (!description) {
    return { pass: false, message: "Missing meta description", score: 0 };
  }
  
  if (description.length < 120) {
    return { pass: false, message: "Meta description too short", score: 40 };
  }
  
  if (description.length > 160) {
    return { pass: false, message: "Meta description too long", score: 70 };
  }
  
  const keyTerms = ["sustainable aviation fuel", "SAF", "HEFA", "UCO", "Shaphargroup"];
  const hasKeyTerms = keyTerms.some(term => description.toLowerCase().includes(term.toLowerCase()));
  
  if (!hasKeyTerms) {
    return { pass: false, message: "Meta description missing key terms", score: 60 };
  }
  
  return { pass: true, message: "Meta description optimized", score: 100 };
};

const checkKeywords = (): SEOTestResult => {
  const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
  
  if (!keywords) {
    return { pass: false, message: "Missing meta keywords", score: 20 };
  }
  
  const keywordArray = keywords.split(',').map(k => k.trim());
  
  if (keywordArray.length < 5) {
    return { pass: false, message: "Too few keywords", score: 50 };
  }
  
  if (keywordArray.length > 20) {
    return { pass: false, message: "Too many keywords (keyword stuffing)", score: 60 };
  }
  
  const coreTerms = ["sustainable aviation fuel", "SAF", "HEFA", "UCO refining"];
  const hasCoreTerms = coreTerms.some(term => keywords.toLowerCase().includes(term.toLowerCase()));
  
  if (!hasCoreTerms) {
    return { pass: false, message: "Missing core business keywords", score: 40 };
  }
  
  return { pass: true, message: "Keywords properly optimized", score: 100 };
};

const checkStructuredData = (): SEOTestResult => {
  const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  if (structuredDataScripts.length === 0) {
    return { pass: false, message: "No structured data found", score: 0 };
  }
  
  try {
    let validSchemas = 0;
    structuredDataScripts.forEach(script => {
      const data = JSON.parse(script.textContent || '{}');
      if (data['@context'] && data['@type']) {
        validSchemas++;
      }
    });
    
    if (validSchemas === 0) {
      return { pass: false, message: "Structured data present but invalid", score: 30 };
    }
    
    return { pass: true, message: `${validSchemas} valid structured data schemas found`, score: 100 };
  } catch (error) {
    return { pass: false, message: "Structured data syntax error", score: 20 };
  }
};

const checkOpenGraphTags = (): SEOTestResult => {
  const requiredOGTags = ['og:title', 'og:description', 'og:type', 'og:url'];
  const foundTags = requiredOGTags.filter(tag => 
    document.querySelector(`meta[property="${tag}"]`)
  );
  
  if (foundTags.length === 0) {
    return { pass: false, message: "No Open Graph tags found", score: 0 };
  }
  
  const percentage = (foundTags.length / requiredOGTags.length) * 100;
  
  if (percentage < 75) {
    return { pass: false, message: `Only ${foundTags.length}/${requiredOGTags.length} required OG tags found`, score: percentage };
  }
  
  return { pass: true, message: "Open Graph tags properly implemented", score: 100 };
};

const checkPerformanceIndicators = (): SEOTestResult => {
  // Check for performance optimization indicators
  const hasPreloadLinks = document.querySelectorAll('link[rel="preload"]').length > 0;
  const hasPreconnectLinks = document.querySelectorAll('link[rel="preconnect"]').length > 0;
  const hasLazyImages = document.querySelectorAll('img[loading="lazy"]').length > 0;
  
  let score = 0;
  const indicators = [];
  
  if (hasPreloadLinks) {
    score += 30;
    indicators.push("preload links");
  }
  
  if (hasPreconnectLinks) {
    score += 30;
    indicators.push("preconnect links");
  }
  
  if (hasLazyImages) {
    score += 40;
    indicators.push("lazy loading");
  }
  
  if (score < 50) {
    return { pass: false, message: "Limited performance optimizations detected", score };
  }
  
  return { pass: true, message: `Performance optimizations: ${indicators.join(', ')}`, score: Math.min(score, 100) };
};

const checkAccessibilityFeatures = (): SEOTestResult => {
  // Check for basic accessibility features that also benefit SEO
  const images = document.querySelectorAll('img');
  const imagesWithAlt = Array.from(images).filter(img => img.getAttribute('alt'));
  
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const hasProperHeadingStructure = document.querySelectorAll('h1').length === 1;
  
  let score = 0;
  
  if (images.length > 0) {
    const altTextScore = (imagesWithAlt.length / images.length) * 50;
    score += altTextScore;
  } else {
    score += 50; // No images to check
  }
  
  if (hasProperHeadingStructure) {
    score += 30;
  }
  
  if (headings.length > 2) {
    score += 20;
  }
  
  if (score < 70) {
    return { pass: false, message: "Accessibility improvements needed", score };
  }
  
  return { pass: true, message: "Good accessibility implementation", score: Math.min(score, 100) };
};

const generateRecommendations = (results: any): string[] => {
  const recommendations: string[] = [];
  
  Object.entries(results).forEach(([key, result]) => {
    if (!(result as SEOTestResult).pass) {
      switch (key) {
        case 'title':
          recommendations.push("Optimize page titles to be 30-60 characters with brand and key terms");
          break;
        case 'description':
          recommendations.push("Write compelling meta descriptions (120-160 characters) with key terms");
          break;
        case 'keywords':
          recommendations.push("Include 5-15 relevant keywords focusing on core business terms");
          break;
        case 'structuredData':
          recommendations.push("Implement Schema.org structured data for better search visibility");
          break;
        case 'openGraph':
          recommendations.push("Add complete Open Graph tags for social media optimization");
          break;
        case 'performance':
          recommendations.push("Implement preload, preconnect, and lazy loading for better performance");
          break;
        case 'accessibility':
          recommendations.push("Improve accessibility with alt tags and proper heading structure");
          break;
      }
    }
  });
  
  return recommendations;
};

export default {
  runSEOAudit,
  checkTitleTag,
  checkMetaDescription,
  checkKeywords,
  checkStructuredData,
  checkOpenGraphTags,
  checkPerformanceIndicators,
  checkAccessibilityFeatures
};