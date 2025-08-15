import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SEOConfig from "@/components/seo/SEOConfig";
import { motion } from "framer-motion";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <SEOConfig
        page="testimonials"
        title="Customer Reviews & Testimonials | TC Shine Oasis Clean"
        description="Read what our satisfied customers say about our cleaning services. Real reviews from homeowners and businesses who trust TC Shine Oasis Clean for quality results."
        keywords="customer reviews, cleaning testimonials, client feedback, 5 star reviews, satisfied customers, cleaning service reviews"
      />
      <Header />
      <main>
        {/* Hero Section for Testimonials */}
        <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Customer <span className="text-yellow-400">Reviews</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Don't just take our word for it. See what our satisfied
                customers have to say about our exceptional cleaning services.
              </p>
              <div className="flex justify-center items-center gap-2 mt-8">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-3xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-xl ml-2">4.9/5 Average Rating</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  Top Rated
                </div>
                <div className="text-gray-600">
                  Consistently rated as the #1 cleaning service in our area
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">💯</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  100% Satisfaction
                </div>
                <div className="text-gray-600">
                  Money-back guarantee if you're not completely satisfied
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">🔄</div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  Repeat Customers
                </div>
                <div className="text-gray-600">
                  85% of our clients become regular, long-term customers
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real feedback from real customers who experienced the TC Shine
                Oasis Clean difference.
              </p>
            </div>
            <TestimonialsSection />
          </div>
        </section>

        {/* Review Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Customers Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Fast & Efficient</h3>
                <p className="text-gray-600">
                  "They completed the job quickly without compromising quality"
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="font-semibold mb-2">Attention to Detail</h3>
                <p className="text-gray-600">
                  "Every corner was spotless, they notice everything"
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Professional Team</h3>
                <p className="text-gray-600">
                  "Courteous, reliable, and trustworthy staff"
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2">Great Value</h3>
                <p className="text-gray-600">
                  "Excellent service at reasonable prices"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Satisfied Customers
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the same exceptional service that earned us hundreds of
              5-star reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511999999999&text=Hi! I would like to request a quote for cleaning services.",
                    "_blank"
                  )
                }
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                💬 Get Your Free Quote
              </button>
              <button
                onClick={() =>
                  window.open(
                    "sms:+15551234567?body=Hi! I would like to request a quote for cleaning services.",
                    "_blank"
                  )
                }
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                📱 Text Us Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TestimonialsPage;
