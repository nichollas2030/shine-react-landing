import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOConfigProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  page?:
    | "home"
    | "services"
    | "portfolio"
    | "testimonials"
    | "contact"
    | "about";
}

const SEOConfig: React.FC<SEOConfigProps> = ({
  title = "Professional Landing Pages | Shine Digital Solutions",
  description = "Transform your business with high-converting landing pages designed for US market. Increase conversions by 300% with our proven strategies and professional designs.",
  keywords = "landing pages usa, business conversion, professional web design, sales funnels, digital marketing, conversion optimization, us business solutions",
  canonicalUrl = typeof window !== "undefined"
    ? window.location.href
    : "https://cleaningserviceladingpage.netlify.app/",
  ogImage = "/assets/og-image-us.jpg",
  page = "home",
}) => {
  // Page-specific SEO configurations for US market
  const pageConfigs = {
    home: {
      title: "Professional Landing Pages | Shine Digital Solutions",
      description:
        "Transform your business with high-converting landing pages designed for US market. Increase conversions by 300% with our proven strategies.",
      keywords:
        "landing pages usa, business conversion, professional web design, digital marketing",
    },
    services: {
      title: "Landing Page Services | Professional Web Design Solutions",
      description:
        "Comprehensive landing page services for US businesses. Custom design, development, and optimization to maximize your conversions and ROI.",
      keywords:
        "landing page services, web design services, conversion optimization, business solutions usa",
    },
    portfolio: {
      title: "Portfolio | Our Best Landing Page Projects",
      description:
        "Explore our collection of successful landing page projects for US businesses. Real results, proven strategies, and professional designs.",
      keywords:
        "landing page portfolio, web design examples, case studies usa, successful projects",
    },
    testimonials: {
      title: "Client Reviews | Success Stories & Testimonials",
      description:
        "Read what our satisfied US clients say about our landing page services. Real reviews from real businesses across America.",
      keywords:
        "client testimonials usa, customer reviews, success stories, landing page results",
    },
    contact: {
      title: "Contact Us | Get Your Landing Page Quote Today",
      description:
        "Ready to transform your business? Contact us for a custom landing page solution. Free consultation for US businesses available.",
      keywords:
        "contact landing page designer, free consultation usa, custom web design, business inquiry",
    },
    about: {
      title: "About Us | Professional Landing Page Experts",
      description:
        "Learn about our team of professional landing page designers serving US businesses. Years of experience in conversion optimization.",
      keywords:
        "about landing page company, professional web designers usa, conversion experts",
    },
  };

  const config = pageConfigs[page];
  const finalTitle =
    title === "Professional Landing Pages | Shine Digital Solutions"
      ? config.title
      : title;
  const finalDescription = description.includes("Transform your business")
    ? config.description
    : description;
  const finalKeywords = keywords.includes("landing pages usa")
    ? config.keywords
    : keywords;

  // Structured data for US business
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shine Digital Solutions",
    url: canonicalUrl.split("/").slice(0, 3).join("/"),
    logo: `${canonicalUrl.split("/").slice(0, 3).join("/")}/logo.png`,
    description: "Professional landing page solutions for US businesses",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "NY",
      addressLocality: "New York",
      addressType: "business",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: "US",
    },
    sameAs: [
      "https://facebook.com/shinedigitalsolutions",
      "https://twitter.com/shinedigital",
      "https://linkedin.com/company/shine-digital-solutions",
    ],
    foundingLocation: "United States",
    currenciesAccepted: "USD",
    paymentAccepted: ["Cash", "Credit Card", "PayPal", "Stripe"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shine Digital Solutions",
    url: canonicalUrl.split("/").slice(0, 3).join("/"),
    description: finalDescription,
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${canonicalUrl
        .split("/")
        .slice(0, 3)
        .join("/")}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl.split("/").slice(0, 3).join("/"),
      },
      ...(page !== "home"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: config.title.split(" | ")[0],
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <html lang="en-US" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="Shine Digital Solutions" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* US-specific meta tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="United States" />
      <meta name="language" content="en-US" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Shine Digital Solutions" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Shine Digital Solutions - Professional Landing Pages"
      />
      <meta property="og:country-name" content="United States" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content="Shine Digital Solutions - Professional Landing Pages"
      />
      <meta name="twitter:creator" content="@shinedigital" />
      <meta name="twitter:site" content="@shinedigital" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang for US targeting */}
      <link rel="alternate" hrefLang="en-us" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Additional SEO Links */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Additional US-focused meta tags for business */}
      <meta name="business.country" content="US" />
      <meta name="business.region" content="North America" />
      <meta name="target-audience" content="US businesses" />
      <meta name="currency" content="USD" />
      <meta name="price-range" content="$$" />
    </Helmet>
  );
};

export default SEOConfig;
