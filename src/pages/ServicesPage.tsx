import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SEOConfig from "@/components/seo/SEOConfig";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOConfig
        page="services"
        title="Professional Cleaning Services | TC Shine Oasis Clean"
        description="Comprehensive residential and commercial cleaning services. Deep cleaning, regular maintenance, move-in/out cleaning, and specialized services across the USA."
        keywords="cleaning services, residential cleaning, commercial cleaning, deep cleaning, house cleaning, office cleaning, move out cleaning"
      />
      <Header />
      <main>
        {/* Hero Section for Services */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-yellow-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Professional cleaning solutions tailored to your needs. From
                residential to commercial spaces, we deliver excellence every
                time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    ✨ Residential Cleaning
                  </h3>
                  <p>
                    Regular house cleaning, deep cleaning, and maintenance
                    services for homes.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    🏢 Commercial Cleaning
                  </h3>
                  <p>
                    Office cleaning, retail spaces, and commercial building
                    maintenance.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    🔄 Specialized Services
                  </h3>
                  <p>
                    Move-in/out cleaning, post-construction cleanup, and event
                    cleaning.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className="py-16">
          <ServicesGrid />
        </section>

        {/* Additional Information Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose TC Shine Oasis Clean?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">
                    Fully licensed and insured for your peace of mind.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                  <h3 className="font-semibold mb-2">5-Star Service</h3>
                  <p className="text-gray-600">
                    Consistently rated 5 stars by satisfied customers.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌿</span>
                  </div>
                  <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-gray-600">
                    Safe, green cleaning products for your family.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="font-semibold mb-2">Fair Pricing</h3>
                  <p className="text-gray-600">
                    Transparent, competitive pricing with no hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
