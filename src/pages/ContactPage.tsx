import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SEOConfig from "@/components/seo/SEOConfig";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <SEOConfig
        page="contact"
        title="Contact Us - Get Free Quote | TC Shine Oasis Clean"
        description="Contact TC Shine Oasis Clean for professional cleaning services. Get your free quote today! Call, text, or WhatsApp us for immediate response."
        keywords="contact cleaning service, get quote, cleaning estimate, professional cleaners contact, book cleaning service"
      />
      <Header />
      <main>
        {/* Hero Section for Contact */}
        <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get In <span className="text-yellow-400">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Ready to experience the TC Shine Oasis Clean difference? Contact
                us today for your free quote and let us transform your space.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">📞</div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="mb-3">Speak directly with our team</p>
                  <a
                    href="tel:+15551234567"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    (555) 123-4567
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">📱</div>
                  <h3 className="text-xl font-semibold mb-2">Text Us</h3>
                  <p className="mb-3">Quick response via SMS</p>
                  <a
                    href="sms:+15551234567?body=Hi! I would like to request a quote for cleaning services."
                    className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    Send Text Message
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl mb-4">💬</div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <p className="mb-3">Chat with us instantly</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511999999999&text=Hi! I would like to request a quote for cleaning services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    Start WhatsApp Chat
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16">
          <ContactForm />
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Service Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We proudly serve residential and commercial clients throughout
                the metropolitan area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  🏠 Residential Areas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Downtown District</li>
                  <li>• Suburban Neighborhoods</li>
                  <li>• Apartment Complexes</li>
                  <li>• Gated Communities</li>
                  <li>• Townhouse Communities</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  🏢 Commercial Areas
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business Districts</li>
                  <li>• Shopping Centers</li>
                  <li>• Office Buildings</li>
                  <li>• Medical Facilities</li>
                  <li>• Educational Institutions</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  ⚡ Emergency Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Same-day cleaning</li>
                  <li>• Emergency cleanup</li>
                  <li>• Last-minute bookings</li>
                  <li>• Weekend availability</li>
                  <li>• Holiday services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours & FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Business Hours */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-semibold">Monday - Friday</span>
                      <span className="text-blue-600">7:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-semibold">Saturday</span>
                      <span className="text-blue-600">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-semibold">Sunday</span>
                      <span className="text-blue-600">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold">Emergency Service</span>
                      <span className="text-green-600">24/7 Available</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> We offer flexible scheduling and
                      can accommodate special requests outside regular hours for
                      urgent cleaning needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Quick Questions</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">
                      How quickly can you respond?
                    </h3>
                    <p className="text-gray-600">
                      We typically respond to inquiries within 1 hour during
                      business hours and offer same-day service when available.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">
                      Do you provide free estimates?
                    </h3>
                    <p className="text-gray-600">
                      Yes! All estimates are completely free with no obligation.
                      We'll assess your needs and provide transparent pricing.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">
                      Are you insured and bonded?
                    </h3>
                    <p className="text-gray-600">
                      Absolutely. We carry full liability insurance and are
                      bonded for your complete peace of mind.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">
                      What payment methods do you accept?
                    </h3>
                    <p className="text-gray-600">
                      We accept cash, checks, all major credit cards, PayPal,
                      and digital payment methods for your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait! Contact us now and experience the professional
              difference that sets us apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:+15551234567")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                📞 Call Now: (555) 123-4567
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5511999999999&text=Hi! I would like to request a quote for cleaning services.",
                    "_blank"
                  )
                }
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                💬 WhatsApp Chat
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

export default ContactPage;
