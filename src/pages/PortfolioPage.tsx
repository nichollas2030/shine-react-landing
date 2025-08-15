import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GallerySection from "@/components/sections/GallerySection";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SEOConfig from "@/components/seo/SEOConfig";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <SEOConfig
        page="portfolio"
        title="Our Work Portfolio | TC Shine Oasis Clean Before & After"
        description="See the amazing transformations! Browse our portfolio of residential and commercial cleaning projects. Before and after photos showcasing our professional results."
        keywords="cleaning portfolio, before after photos, cleaning results, house cleaning gallery, commercial cleaning examples, transformation photos"
      />
      <Header />
      <main>
        {/* Hero Section for Portfolio */}
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-900 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-yellow-400">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                See the incredible transformations we've achieved for our
                clients. Every project tells a story of excellence and attention
                to detail.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Residential Projects
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Commercial Spaces
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Deep Cleaning
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Move-Out Cleaning
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Homes Cleaned</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Commercial Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Before & After Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See the dramatic transformations we've achieved. Each photo
                represents our commitment to excellence and attention to detail.
              </p>
            </div>
            <GallerySection />
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Project Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  🏠 Residential Cleaning
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Regular house cleaning</li>
                  <li>• Deep cleaning services</li>
                  <li>• Kitchen and bathroom detailing</li>
                  <li>• Move-in/move-out cleaning</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  🏢 Commercial Cleaning
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Office buildings</li>
                  <li>• Retail stores</li>
                  <li>• Restaurants</li>
                  <li>• Medical facilities</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  ⚡ Specialized Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Post-construction cleanup</li>
                  <li>• Event cleaning</li>
                  <li>• Carpet cleaning</li>
                  <li>• Window cleaning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PortfolioPage;
