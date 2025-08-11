import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Declare global gtag interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface SectionRouteConfig {
  id: string;
  path: string;
  title: string;
  description: string;
  keywords: string;
}

export const US_SECTION_ROUTES: SectionRouteConfig[] = [
  {
    id: "hero",
    path: "/",
    title: "Premium Cleaning Services | TC Shine Cleaning",
    description:
      "Experience top-notch residential and commercial cleaning services in Miami and West Palm Beach. Trusted by busy families and Airbnb hosts.",
    keywords:
      "house cleaning services, residential cleaning, commercial cleaning, cleaning service miami, eco-friendly cleaning",
  },
  {
    id: "services",
    path: "/services",
    title: "Our Services | Tailored Cleaning Solutions",
    description:
      "From deep cleaning to regular maintenance, we offer customized cleaning services to meet your specific needs. Serving Miami, Fort Lauderdale, and beyond.",
    keywords:
      "cleaning services usa, home cleaning solutions, office cleaning, maid service florida",
  },
  {
    id: "gallery",
    path: "/portfolio",
    title: "Our Work | See Our Cleaning Results",
    description:
      "Explore before-and-after photos of our cleaning projects. Real results for homes and businesses across South Florida.",
    keywords:
      "cleaning portfolio, house cleaning examples, cleaning service results, florida cleaning company",
  },
  {
    id: "testimonials",
    path: "/testimonials",
    title: "Client Reviews | What Our Customers Say",
    description:
      "Read reviews from satisfied clients who trust us with their cleaning needs. Join hundreds of happy customers today!",
    keywords:
      "cleaning service reviews, customer testimonials, trusted cleaning company, south florida cleaning",
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact Us | Get a Free Cleaning Quote",
    description:
      "Ready to book your cleaning service? Contact us today for a free quote and experience the TC Shine Cleaning difference.",
    keywords:
      "contact cleaning service, free cleaning estimate, book cleaning service, cleaning company florida",
  },
];

export const useSEONavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Função para scroll suave para seções
  const scrollToSection = useCallback(
    (sectionId: string, updateUrl: boolean = true) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;

        // Smooth scroll to section
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });

        // Update URL and meta tags if requested
        if (updateUrl) {
          const sectionConfig = US_SECTION_ROUTES.find(
            (s) => s.id === sectionId
          );
          if (sectionConfig && location.pathname !== sectionConfig.path) {
            navigate(sectionConfig.path, { replace: true });
          }
        }

        // Track navigation for analytics
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "section_view", {
            section_name: sectionId,
            page_location: window.location.href,
          });
        }
      }
    },
    [location.pathname, navigate]
  );

  // Navegar para uma seção via path
  const navigateToSection = useCallback(
    (path: string) => {
      const sectionConfig = US_SECTION_ROUTES.find((s) => s.path === path);
      if (sectionConfig) {
        // Se já estamos na página principal, apenas fazer scroll
        if (location.pathname === "/" || location.pathname === path) {
          scrollToSection(sectionConfig.id, path !== "/");
        } else {
          // Navegar para a rota correta
          navigate(path);

          // Aguardar um pouco para a navegação completar, depois fazer scroll
          setTimeout(() => {
            scrollToSection(sectionConfig.id, false);
          }, 100);
        }
      }
    },
    [location.pathname, navigate, scrollToSection]
  );

  // Auto-scroll baseado na rota atual
  useEffect(() => {
    const currentSection = US_SECTION_ROUTES.find(
      (s) => s.path === location.pathname
    );
    if (currentSection && currentSection.id !== "hero") {
      // Delay para garantir que a página carregou
      const timer = setTimeout(() => {
        scrollToSection(currentSection.id, false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, scrollToSection]);

  // Detectar scroll para analytics e URL updates
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = US_SECTION_ROUTES.map((section) => {
            const element = document.getElementById(section.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              const headerHeight = 80;
              const isVisible =
                rect.top <= headerHeight && rect.bottom >= headerHeight;
              const distanceFromTop = Math.abs(rect.top - headerHeight);

              return {
                ...section,
                isVisible,
                distanceFromTop,
              };
            }
            return { ...section, isVisible: false, distanceFromTop: Infinity };
          });

          // Encontrar seção mais próxima do topo
          const activeSection = sections
            .filter((s) => s.isVisible)
            .sort((a, b) => a.distanceFromTop - b.distanceFromTop)[0];

          // Analytics tracking para seção ativa
          if (activeSection && typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "section_visible", {
              section_name: activeSection.id,
              page_location: window.location.href,
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Retornar seção atual baseada na URL
  const getCurrentSection = useCallback(() => {
    return (
      US_SECTION_ROUTES.find((s) => s.path === location.pathname) ||
      US_SECTION_ROUTES[0]
    );
  }, [location.pathname]);

  return {
    scrollToSection,
    navigateToSection,
    getCurrentSection,
    currentPath: location.pathname,
    sections: US_SECTION_ROUTES,
  };
};

// Hook para tracking de performance web vitals para SEO
export const useWebVitalsTracking = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Track Core Web Vitals for SEO
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (window.gtag) {
            window.gtag("event", "web_vital", {
              metric_name: entry.name,
              metric_value: Math.round(entry.startTime || 0),
            });
          }
        }
      });

      // Observe Core Web Vitals
      try {
        observer.observe({ entryTypes: ["navigation", "paint"] });
      } catch (e) {
        // Fallback para navegadores que não suportam todas as métricas
        console.log("Performance observer not fully supported");
      }

      return () => observer.disconnect();
    }
  }, []);
};

export default useSEONavigation;
