import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import GallerySection from '@/components/sections/GallerySection'
import ContactForm from '@/components/sections/ContactForm'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <div id="services">
          <ServicesGrid />
        </div>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
