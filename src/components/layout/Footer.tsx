"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContent, useCompanyInfo } from "@/lib/useContent";

export default function Footer() {
  const { footer } = useContent();
  const companyInfo = useCompanyInfo();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-tc-text-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-12 xs:py-16">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xs:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gradient-to-r from-tc-primary-500 to-tc-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 xs:w-6 xs:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-base xs:text-lg">
                  {companyInfo.name}
                </h3>
                <p className="text-tc-text-400 text-xs xs:text-sm">
                  {companyInfo.tagline}
                </p>
              </div>
            </div>
            <p className="text-tc-text-300 mb-4 xs:mb-6 leading-relaxed text-sm xs:text-base">
              {footer.companyDescription}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6">
              {footer.quickLinks.title}
            </h4>
            <nav className="space-y-2 xs:space-y-3">
              {footer.quickLinks.links.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-tc-text-300 hover:text-tc-primary-400 transition-colors duration-300 text-sm xs:text-base min-h-touch text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6">
              {footer.services.title}
            </h4>
            <ul className="space-y-2 xs:space-y-3 text-tc-text-300 text-sm xs:text-base">
              {footer.services.list.map((service, index) => (
                <li key={index}>• {service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6">
              {footer.contactInfo.title}
            </h4>

            {/* Contact Info */}
            <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6">
              <a
                href={`tel:${companyInfo.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 xs:gap-3 text-tc-text-300 hover:text-tc-primary-400 transition-colors duration-300 min-h-touch text-sm xs:text-base"
              >
                <svg
                  className="w-4 h-4 xs:w-5 xs:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {companyInfo.phone}
              </a>

              <div className="flex items-center gap-2 xs:gap-3 text-tc-text-300 text-sm xs:text-base">
                <svg
                  className="w-4 h-4 xs:w-5 xs:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="flex flex-col gap-1">
                  {footer.businessHours.hours.map((hour, index) => (
                    <div key={index}>{hour}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4 xs:mt-6">
              <h5 className="font-semibold text-tc-primary-400 mb-2 xs:mb-3 text-sm xs:text-base">
                Follow Us:
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/tcshinecleaning?igsh=czJjZ2tnMXI1OThy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h5 className="font-semibold text-tc-primary-400 mb-2 xs:mb-3 text-sm xs:text-base">
                {footer.serviceAreas.title}:
              </h5>
              <p className="text-xs xs:text-sm text-tc-text-400">
                {footer.serviceAreas.coverage}
              </p>
              <p className="text-xs text-tc-text-500 mt-1 xs:mt-2">
                {footer.serviceAreas.areas}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tc-text-800">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 xs:gap-4">
            <p className="text-tc-text-400 text-xs xs:text-sm text-center md:text-left">
              {footer.copyright}
            </p>

            <div className="flex flex-col xs:flex-row items-center gap-3 xs:gap-6 text-xs xs:text-sm text-tc-text-400 text-center">
              {footer.features.map((feature, index) => (
                <span key={index}>
                  {feature.icon} {feature.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
