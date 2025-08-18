// Page Speed and Core Web Vitals Optimizer
// Advanced performance optimizations for Google search rankings

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  inp?: number;
  fcp?: number;
  ttfb?: number;
}

let performanceMetrics: PerformanceMetrics = {};

// Initialize performance monitoring and optimization
export const initializePageSpeedOptimization = () => {
  optimizeResourceLoading();
  implementCriticalResourcePreloading();
  optimizeImageLoading();
  monitorCoreWebVitals();
  implementServiceWorkerCaching();
};

// Critical resource preloading for faster page loads
const implementCriticalResourcePreloading = () => {
  const criticalResources = [
    // Critical CSS and fonts
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', as: 'style' },
    { href: 'https://fonts.gstatic.com', as: 'font', crossorigin: 'anonymous' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.crossorigin) {
      link.crossOrigin = resource.crossorigin;
    }
    document.head.appendChild(link);
  });

  // Preload critical images above the fold
  const criticalImages = document.querySelectorAll('img[data-critical="true"]') as NodeListOf<HTMLImageElement>;
  criticalImages.forEach(img => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = img.src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Optimize resource loading for better performance
const optimizeResourceLoading = () => {
  // Defer non-critical JavaScript
  const scripts = document.querySelectorAll('script[src]:not([data-critical])') as NodeListOf<HTMLScriptElement>;
  scripts.forEach(script => {
    if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
      script.defer = true;
    }
  });

  // Optimize CSS loading
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])') as NodeListOf<HTMLLinkElement>;
  stylesheets.forEach(stylesheet => {
    stylesheet.media = 'print';
    stylesheet.onload = () => {
      stylesheet.media = 'all';
      stylesheet.onload = null;
    };
  });
};

// Advanced image optimization
const optimizeImageLoading = () => {
  // Implement intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]') as NodeListOf<HTMLImageElement>;
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Add modern image formats support
  const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
  images.forEach(img => {
    // Add loading="lazy" to non-critical images
    if (!img.hasAttribute('data-critical')) {
      img.loading = 'lazy';
    }
    
    // Add decoding="async" for better performance
    img.decoding = 'async';
    
    // Add fetchpriority="high" to critical images
    if (img.hasAttribute('data-critical')) {
      img.setAttribute('fetchpriority', 'high');
    }
  });
};

// Monitor Core Web Vitals for continuous optimization
const monitorCoreWebVitals = () => {
  // Monitor Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        performanceMetrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }

    // Monitor First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          performanceMetrics.fid = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring not supported');
    }

    // Monitor Cumulative Layout Shift (CLS)
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        performanceMetrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }
  }

  // Monitor Navigation Timing
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        performanceMetrics.ttfb = navigation.responseStart - navigation.requestStart;
        performanceMetrics.fcp = performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;
      }
    }, 0);
  });
};

// Service worker disabled - no sw.js file present
const implementServiceWorkerCaching = () => {
  // Service worker not implemented for this deployment
  // This prevents service worker registration errors in console
};

// Get current performance metrics
export const getPerformanceMetrics = (): PerformanceMetrics => {
  return { ...performanceMetrics };
};

// Optimize specific elements for better Core Web Vitals
export const optimizeElementPerformance = (element: HTMLElement) => {
  // Add will-change hint for animated elements
  if (element.classList.contains('animate') || element.style.transform) {
    element.style.willChange = 'transform';
  }

  // Optimize heavy elements
  if (element.tagName === 'VIDEO') {
    const video = element as HTMLVideoElement;
    video.preload = 'metadata';
    // Note: loading attribute is not standard for video elements
    video.setAttribute('loading', 'lazy');
  }

  // Add contain hint for isolated components
  if (element.classList.contains('component') || element.hasAttribute('data-component')) {
    element.style.contain = 'layout style paint';
  }
};

// Critical CSS injection for above-the-fold content
export const injectCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.insertBefore(style, document.head.firstChild);
};

// Optimize third-party scripts
export const optimizeThirdPartyScripts = () => {
  // Delay third-party scripts until user interaction
  let userInteracted = false;
  
  const delayThirdParty = () => {
    if (userInteracted) return;
    userInteracted = true;

    // Load analytics and other third-party scripts
    const thirdPartyScripts: string[] = [
      // Add third-party script URLs here when needed
    ];

    thirdPartyScripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    });
  };

  // Trigger on first user interaction
  ['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
    document.addEventListener(event, delayThirdParty, { once: true, passive: true });
  });

  // Fallback: load after 3 seconds
  setTimeout(delayThirdParty, 3000);
};

export default {
  initializePageSpeedOptimization,
  getPerformanceMetrics,
  optimizeElementPerformance,
  injectCriticalCSS,
  optimizeThirdPartyScripts
};