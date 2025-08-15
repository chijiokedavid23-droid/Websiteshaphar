// Dynamic XML Sitemap Generator for Better Google Indexing
// Generates and updates sitemap for improved search engine crawling

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Generate comprehensive sitemap for Shaphargroup website
export const generateSitemap = (): string => {
  const baseUrl = 'https://shaphargroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const urls: SitemapUrl[] = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/saf`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/leadership`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/sustainability`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      loc: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  return generateXMLSitemap(urls);
};

// Generate XML sitemap format
const generateXMLSitemap = (urls: SitemapUrl[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urlEntries = urls.map(url => {
    let urlXml = '  <url>\n';
    urlXml += `    <loc>${url.loc}</loc>\n`;
    
    if (url.lastmod) {
      urlXml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    
    if (url.changefreq) {
      urlXml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    }
    
    if (url.priority !== undefined) {
      urlXml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    }
    
    urlXml += '  </url>';
    return urlXml;
  }).join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urlEntries}\n${urlsetClose}`;
};

// Generate robots.txt content for better crawling
export const generateRobotsTxt = (): string => {
  const baseUrl = 'https://shaphargroup.com';
  
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Specific instructions for search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block development and admin paths if any
Disallow: /admin/
Disallow: /.env
Disallow: /api/internal/

# Allow all assets
Allow: /assets/
Allow: /images/
Allow: /css/
Allow: /js/

# Additional SEO directives
Host: ${baseUrl}`;
};

// Automatically submit sitemap to search engines
export const submitSitemapToSearchEngines = async () => {
  const sitemapUrl = 'https://shaphargroup.com/sitemap.xml';
  
  // Google Search Console submission (requires verification)
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  // Bing Webmaster Tools submission
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  
  try {
    // Note: These are ping URLs for automatic submission
    // In a real implementation, you might use fetch() if CORS allows
    console.log('Sitemap submission URLs generated:');
    console.log('Google:', googlePingUrl);
    console.log('Bing:', bingPingUrl);
    
    // In a real application, you might make these requests server-side
    return {
      google: googlePingUrl,
      bing: bingPingUrl
    };
  } catch (error) {
    console.error('Sitemap submission error:', error);
    return null;
  }
};

// Generate structured data for breadcrumbs
export const generateBreadcrumbStructuredData = (path: string) => {
  const baseUrl = 'https://shaphargroup.com';
  const pathSegments = path.split('/').filter(segment => segment);
  
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ];

  pathSegments.forEach((segment, index) => {
    const position = index + 2;
    const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
    
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": url
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };
};

export default {
  generateSitemap,
  generateRobotsTxt,
  submitSitemapToSearchEngines,
  generateBreadcrumbStructuredData
};