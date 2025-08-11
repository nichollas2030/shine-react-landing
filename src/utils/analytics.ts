// Google Analytics 4 Configuration for US Market
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

interface AnalyticsConfig {
  measurementId: string;
  country: string;
  currency: string;
  language: string;
}

const GA_CONFIG: AnalyticsConfig = {
  measurementId: "GA_MEASUREMENT_ID", // Replace with your actual GA4 Measurement ID
  country: "US",
  currency: "USD",
  language: "en-us",
};

export const initializeGoogleAnalytics = () => {
  // Only initialize in production and if measurement ID is provided
  if (
    process.env.NODE_ENV !== "production" ||
    GA_CONFIG.measurementId === "GA_MEASUREMENT_ID"
  ) {
    console.log(
      "Google Analytics not initialized - missing measurement ID or in development mode"
    );
    return;
  }

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.measurementId}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  window.gtag = function () {
    window.dataLayer?.push(arguments);
  };

  // Configure Google Analytics
  window.gtag("js", new Date());
  window.gtag("config", GA_CONFIG.measurementId, {
    // US-specific configuration
    country: GA_CONFIG.country,
    currency: GA_CONFIG.currency,
    language: GA_CONFIG.language,

    // Enhanced measurement for better tracking
    enhanced_measurements: {
      scrolls: true,
      outbound_clicks: true,
      site_search: true,
      video_engagement: true,
      file_downloads: true,
    },

    // Privacy and compliance settings
    anonymize_ip: true,
    allow_google_signals: true,

    // Custom dimensions for US market segmentation
    custom_map: {
      dimension1: "user_type",
      dimension2: "page_section",
      dimension3: "conversion_source",
    },
  });

  // Track page view
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    country: "US",
    language: "en-US",
  });
};

// Track business-focused events
export const trackBusinessEvent = (
  eventName: string,
  parameters: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag("event", eventName, {
      ...parameters,
      country: "US",
      currency: "USD",
      timestamp: new Date().toISOString(),
    });
  }
};

// Track conversion events for US business goals
export const trackConversion = (
  action: "contact_form" | "phone_call" | "quote_request" | "service_inquiry",
  value?: number
) => {
  if (window.gtag) {
    window.gtag("event", "conversion", {
      event_category: "business_goals",
      event_label: action,
      value: value || 0,
      currency: "USD",
      country: "US",
    });
  }
};

// Track section engagement for landing page optimization
export const trackSectionEngagement = (
  sectionName: string,
  timeSpent: number
) => {
  if (window.gtag) {
    window.gtag("event", "section_engagement", {
      event_category: "user_engagement",
      event_label: sectionName,
      value: timeSpent,
      custom_parameter_1: "us_visitor",
    });
  }
};

// Enhanced ecommerce tracking for service quotes
export const trackServiceQuote = (
  serviceName: string,
  estimatedValue: number
) => {
  if (window.gtag) {
    window.gtag("event", "add_to_cart", {
      currency: "USD",
      value: estimatedValue,
      items: [
        {
          item_id: serviceName.toLowerCase().replace(/\s+/g, "_"),
          item_name: serviceName,
          item_category: "landing_page_services",
          quantity: 1,
          price: estimatedValue,
        },
      ],
    });
  }
};

export default GA_CONFIG;
