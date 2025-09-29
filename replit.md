# Overview

This is a full-stack web application for Shaphargroup, a sustainable aviation fuel (SAF) company. The project is built as a marketing website showcasing the company's capabilities in HEFA Sustainable Aviation Fuel production, UCO refining, and global logistics operations. The application features a modern, responsive design with smooth animations and a professional corporate presentation focused on the aviation fuel industry.

## Recent Changes (January 2025)
- **Custom Page-Specific Images Implemented**: Added user-provided custom imagery for each major page section
  - Home: Green aircraft over landscape for aviation focus
  - Sustainability: Aircraft wing with leaf symbol over solar panels for eco-friendly theme  
  - About & Leadership: Industrial refinery with three key symbols representing capabilities
  - Contact: Peaceful green landscape for welcoming business atmosphere
- **Complete Image SEO Optimization**: Implemented comprehensive SEO for all new images
  - Added role="img" and detailed aria-label attributes for accessibility
  - Integrated image data into structured Schema.org markup
  - Added Open Graph image tags for enhanced social media sharing
  - All images optimized with descriptive alt text and metadata
- **Image Loading Issues Permanently Fixed**: Replaced ALL external image URLs with local assets to eliminate dependencies on external services
- **SAFc Article Featured**: Positioned latest SAFc approval announcement as featured article with comprehensive SEO optimization
- **Blog Structure Enhanced**: Tim Rose board announcement moved to latest articles, content reorganized for better hierarchy
- **Comprehensive SEO Implementation**: Added structured data, meta tags, and Open Graph optimization across all pages
- **Local Asset Strategy**: Migrated from external URLs to bundled local images for reliability and performance
- **Advanced Google SEO Implementation (January 2025)**: 
  - Implemented cutting-edge 2025 Google ranking optimizations targeting SAF industry keywords
  - Added industry-specific structured data with HEFA SAF, CORSIA compliance, and aviation certifications
  - Enhanced with Core Web Vitals monitoring (LCP, FID, CLS, INP) for improved page experience scores
  - Integrated E-A-T (Expertise, Authority, Trustworthiness) signals with industry credentials and certifications
  - Updated meta titles and descriptions with 2025 SAF market trends (EU/UK mandates, commercial scale production)
  - Created XML sitemap and robots.txt for better search engine crawling
  - Added technical SEO enhancements for mobile-first indexing and performance optimization

## Market Intelligence - China → Europe SAF Index (September 2025)
- **New Market Intelligence Section**: Added dedicated "Market Intelligence" dropdown navigation menu positioned between "SAF" and "Sustainability"
- **Monthly Report Format Established**: Created standardized template for China → Europe SAF Bridge monthly reports with the following structure:
  
  **Page Structure (Must maintain for all monthly reports):**
  1. **Hero Section**: Gradient background (navy → forest → emerald), month badge, report title, download PDF button
  2. **Market Flow Snapshot**: Two-column layout (Europe Inland UCO + China Collection) with Bridge Takeaways for EU Buyers and Chinese Suppliers
  3. **Price & Premium Signals**: Interactive line charts using Recharts for UCO ARA and UCO China price trends, with trend indicators
  4. **SAF Price Rally**: Dark gradient card showing SAF FOB ARA and SAF FOB China prices with arbitrage update
  5. **Policy & Certification Watch**: Grid of policy update cards with key regulatory developments
  6. **Deal Highlights**: Notable transactions and partnerships in card format
  7. **Implications - What to Do Now**: Two-column actionable recommendations (For European Buyers | For Chinese Suppliers)
  8. **August Benchmarks**: Four-column benchmark cards showing key price indicators with trend icons
  9. **Report Archive**: Grid showing current month + placeholder for previous months with subscribe CTA
  10. **Contact CTA**: Simple heading with action buttons (no subtitle text)
  11. **Disclaimer**: Legal disclaimer section at bottom
  
  **Visual Design Standards:**
  - Color scheme: Navy (headings), Emerald (primary actions), Forest (secondary), gradient backgrounds for emphasis sections
  - Charts: Line charts with 3-point data (Early/Mid/End month), custom colors matching brand palette
  - Cards: Rounded-2xl corners, shadow-lg, gradient borders for key sections
  - Icons: Lucide React icons for visual hierarchy (DollarSign, TrendingUp, AlertCircle, Briefcase, etc.)
  - Animations: Framer Motion with staggered delays for sequential reveal
  
  **SEO Structure (Required for each monthly report):**
  - Multiple structured data schemas: Report, Dataset, BreadcrumbList
  - Dataset schema with temporalCoverage, spatialCoverage, variableMeasured fields
  - Unique title format: "China → Europe SAF Index – {Month YYYY} | Shaphargroup Market Intelligence"
  - Keywords: China Europe SAF index, UCO prices, sustainable aviation fuel market, HEFA SAF, Book and Claim
  - OG image optimization for social sharing
  
  **Monthly Update Process:**
  - Replace month variable and all price data arrays (ucoARA, ucoChina, safARA, safChina)
  - Update policy updates, deal highlights, and implications text
  - Link new PDF report from attached_assets with proper download attribute
  - Add previous month card to archive section
  - Update SEO datePublished and temporalCoverage fields

## Browser Compatibility & Deployment Fixes (August 2025)
- **Cross-Browser Compatibility Issue Resolved**: Fixed critical browser-specific rendering differences where Chrome showed basic HTML while Firefox displayed modern React site
- **Environment Detection Fixed**: Corrected production vs development environment detection in server configuration (process.env.NODE_ENV vs app.get("env"))
- **CORS Headers Added**: Implemented proper CORS configuration for external resources (fonts, APIs) to prevent cross-origin loading issues
- **Service Worker Optimization**: Disabled unused service worker registration to eliminate console errors and improve performance
- **Font Loading Optimized**: Enhanced Google Fonts preloading with proper async loading and fallback strategies
- **Asset Path Validation**: Ensured all production builds serve compiled JavaScript/CSS instead of raw TypeScript files
- **Favicon Integration**: Added favicon to build output for consistent branding across all browsers
- **Console Warnings Completely Eliminated (August 22, 2025)**: Removed all dynamic preload JavaScript functions that were causing "resource not used" warnings across all pages
- **WordPress Path References Purged**: Systematically eliminated all wp-content URL references from React components and SEO configurations
- **Final Production Build Clean**: Latest build (index-BSd8AKhp.js) contains zero console warnings or problematic resource loading

# User Preferences

Preferred communication style: Simple, everyday language.
Blog Article Author Preference: Remove "by Admin" from all articles - do not include "Admin" as author in any blog posts or articles.
Article Display Preference: Remove "View Original Article" links from all articles - do not show external links to original sources.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with a custom design system featuring company-specific color variables (navy, forest, emerald, sky, charcoal, gold)
- **UI Components**: shadcn/ui component library built on Radix UI primitives for consistent, accessible interface elements
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstract storage layer with in-memory implementation (prepared for database integration)
- **API Structure**: RESTful API endpoints with `/api` prefix routing

## Data Storage Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless connection)
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database schema migrations
- **Validation**: Zod schemas integrated with Drizzle for runtime type validation

## Asset Management Strategy
- **Local Assets**: All images now sourced from `attached_assets` directory for reliability
- **No External Dependencies**: Eliminated external image URLs to prevent loading failures
- **Bundled Resources**: Images imported as modules and bundled with application
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@, @shared, @assets)

## Project Structure
- **Monorepo Design**: Client and server code in separate directories with shared schema
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@, @shared, @assets)
- **Asset Management**: Dedicated attached_assets directory for static files
- **Environment Separation**: NODE_ENV-based configuration for development/production modes

## Authentication & Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Model**: Basic user schema with username/password authentication structure
- **Security**: Prepared authentication infrastructure (not fully implemented)

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection**: @neondatabase/serverless for optimized serverless connections

## UI & Design Systems
- **Radix UI**: Comprehensive primitive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Framer Motion**: Animation library for React components
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **TypeScript**: Full-stack type safety with strict configuration
- **ESBuild**: Fast bundling for production server builds

## Form Management
- **React Hook Form**: Form state management with @hookform/resolvers
- **Validation**: Zod integration for client-side form validation

The application is designed as a professional corporate website with room for future expansion into user authentication, dynamic content management, and potential e-commerce functionality for fuel procurement. All images are now locally managed for optimal performance and reliability.