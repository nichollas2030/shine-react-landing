"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useContent, useCompanyInfo } from '@/lib/useContent'

export default function Footer() {
  const { footer } = useContent()
  const companyInfo = useCompanyInfo()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
                <svg className="w-5 h-5 xs:w-6 xs:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
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
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6">{footer.quickLinks.title}</h4>
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
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6">{footer.services.title}</h4>
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
            <h4 className="font-heading font-bold text-base xs:text-lg mb-4 xs:mb-6">{footer.contactInfo.title}</h4>
            
            {/* Contact Info */}
            <div className="space-y-2 xs:space-y-3 mb-4 xs:mb-6">
              <a 
                href={`tel:${companyInfo.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 xs:gap-3 text-tc-text-300 hover:text-tc-primary-400 transition-colors duration-300 min-h-touch text-sm xs:text-base"
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyInfo.phone}
              </a>
              
              <div className="flex items-center gap-2 xs:gap-3 text-tc-text-300 text-sm xs:text-base">
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {footer.businessHours.hours[0]}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h5 className="font-semibold text-tc-primary-400 mb-2 xs:mb-3 text-sm xs:text-base">{footer.serviceAreas.title}:</h5>
              <p className="text-xs xs:text-sm text-tc-text-400">
                Atendimento de Miami a West Palm Beach
              </p>
              <p className="text-xs text-tc-text-500 mt-1 xs:mt-2">{footer.serviceAreas.areas}</p>
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
                <span key={index}>{feature.icon} {feature.text}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}