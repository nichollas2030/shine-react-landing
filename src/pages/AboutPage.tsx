import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SEOConfig from "@/components/seo/SEOConfig";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEOConfig
        page="about"
        title="About Us - Professional Cleaning Company | TC Shine Oasis Clean"
        description="Learn about TC Shine Oasis Clean - a trusted cleaning company with 5+ years of experience. Licensed, insured, and committed to exceptional service quality."
        keywords="about cleaning company, professional cleaners, licensed cleaning service, experienced cleaning team, reliable cleaning business"
      />
      <Header />
      <main>
        {/* Hero Section for About */}
        <section className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About{" "}
                <span className="text-yellow-400">TC Shine Oasis Clean</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Your trusted partner in creating spotless, healthy environments
                for homes and businesses across the community.
              </p>
              <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">5+</div>
                  <div>Years Experience</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">500+</div>
                  <div>Satisfied Customers</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div>Licensed & Insured</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  TC Shine Oasis Clean was founded with a simple mission: to
                  provide exceptional cleaning services that transform spaces
                  and improve lives. What started as a small family business has
                  grown into a trusted name in professional cleaning services.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that a clean environment is essential for health,
                  productivity, and peace of mind. That's why we've dedicated
                  ourselves to delivering not just cleaning services, but
                  complete transformation experiences that exceed expectations.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl text-blue-600 mb-2">🏆</div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-gray-600">
                      Best Local Service 2023
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl text-green-600 mb-2">🌿</div>
                    <div className="font-semibold">Eco-Friendly</div>
                    <div className="text-sm text-gray-600">
                      Green Certified Products
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="mb-6">
                    To create pristine, healthy environments that enhance the
                    quality of life for our clients while building lasting
                    relationships based on trust, reliability, and exceptional
                    service.
                  </p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Core Values</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Excellence in every detail</li>
                      <li>✓ Integrity and transparency</li>
                      <li>✓ Environmental responsibility</li>
                      <li>✓ Customer satisfaction guarantee</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our professional team is the heart of our success. Each member
                is trained, certified, and committed to delivering exceptional
                results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Management Team</h3>
                <p className="text-gray-600 mb-4">
                  Experienced leaders ensuring quality control and customer
                  satisfaction at every level.
                </p>
                <div className="text-sm text-blue-600">
                  ✓ 10+ Years Experience
                  <br />✓ Quality Assurance Certified
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👩‍🔧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Cleaning Specialists
                </h3>
                <p className="text-gray-600 mb-4">
                  Skilled professionals trained in the latest cleaning
                  techniques and safety protocols.
                </p>
                <div className="text-sm text-green-600">
                  ✓ Background Checked
                  <br />✓ Fully Trained & Certified
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated support team available to assist with scheduling,
                  questions, and special requests.
                </p>
                <div className="text-sm text-purple-600">
                  ✓ 24/7 Response Time
                  <br />✓ Multilingual Support
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose TC Shine Oasis Clean?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're not just another cleaning service. Here's what sets us
                apart from the competition.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully licensed, bonded, and insured for your complete
                  protection and peace of mind.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-3">
                  Eco-Friendly Products
                </h3>
                <p className="text-gray-600">
                  We use only environmentally safe, non-toxic cleaning products
                  that are safe for your family and pets.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600">
                  We work around your schedule with flexible appointment times,
                  including evenings and weekends.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-semibold mb-3">
                  Quality Guarantee
                </h3>
                <p className="text-gray-600">
                  100% satisfaction guarantee. If you're not happy, we'll make
                  it right or provide a full refund.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Trustworthy Team</h3>
                <p className="text-gray-600">
                  All team members are background-checked, trained, and
                  committed to maintaining the highest standards.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600">
                  Fair, transparent pricing with no hidden fees. Get the best
                  value for professional cleaning services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Certifications & Recognition
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by industry
                leaders and satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-semibold mb-2">Best Local Service</h3>
                <p className="text-sm text-gray-600">
                  Community Choice Award 2023
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="font-semibold mb-2">5-Star Rated</h3>
                <p className="text-sm text-gray-600">Google & Yelp Reviews</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="font-semibold mb-2">Green Certified</h3>
                <p className="text-sm text-gray-600">
                  Environmental Safety Standards
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold mb-2">Fully Licensed</h3>
                <p className="text-sm text-gray-600">
                  State & Local Compliance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust TC Shine Oasis
              Clean for all their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511999999999&text=Hi! I would like to learn more about your cleaning services.",
                    "_blank"
                  )
                }
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                💬 Get Free Quote
              </button>
              <button
                onClick={() => window.open("tel:+15551234567")}
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call Us Now
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

export default AboutPage;
