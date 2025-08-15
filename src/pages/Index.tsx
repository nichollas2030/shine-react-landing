import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactForm from "@/components/sections/ContactForm";
import SEOConfig from "@/components/seo/SEOConfig";
import {
  useSEONavigation,
  useWebVitalsTracking,
} from "@/hooks/useSEONavigation";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const seoNavigation = useSEONavigation();

  // Initialize web vitals tracking for SEO
  useWebVitalsTracking();

  // Get current section for dynamic SEO
  const currentSection = seoNavigation.getCurrentSection();

  // Determine page type based on URL
  const getPageType = ():
    | "home"
    | "services"
    | "portfolio"
    | "testimonials"
    | "contact"
    | "about" => {
    if (
      location.pathname.includes("/services") ||
      location.pathname.includes("/our-services")
    )
      return "services";
    if (
      location.pathname.includes("/portfolio") ||
      location.pathname.includes("/our-work")
    )
      return "portfolio";
    if (
      location.pathname.includes("/testimonials") ||
      location.pathname.includes("/client-reviews")
    )
      return "testimonials";
    if (
      location.pathname.includes("/contact") ||
      location.pathname.includes("/get-quote")
    )
      return "contact";
    if (location.pathname.includes("/about")) return "about";
    return "home";
  };

  return (
    <div className="min-h-screen">
      <SEOConfig
        page={getPageType()}
        title={currentSection.title}
        description={currentSection.description}
        keywords={currentSection.keywords}
      />
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesGrid />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
