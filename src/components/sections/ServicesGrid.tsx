"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useServicesContent, openWhatsApp } from '@/lib/useContent'

// Service Icons
const ServiceIcon = ({ icon, className }: { icon: string; className?: string }) => {
  const icons = {
    calendar: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    sparkles: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 2.5L16 4.5 13.5 7 16 9.5 13.5 12 16 14.5 13.5 17 16 19.5 13.5 22 16 24" />
      </svg>
    ),
    hammer: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.25 9.25L15 5.5l-4.5-4.5L6 5.5l4.25 3.75zm0 0L18.75 17.5l-4.5 4.5L10.5 18.25l.75-9zm0 0v9" />
      </svg>
    ),
    home: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
  
  return icons[icon as keyof typeof icons] || icons.calendar
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

export default function ServicesGrid() {
  // 🎯 CONTEÚDO DINÂMICO - Centralizado em /lib/content.ts
  const servicesContent = useServicesContent()
  
  return (
    <section className="py-16 xs:py-20 sm:py-24 lg:py-28" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 xs:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-subtitle text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-tc-text-900 mb-3 xs:mb-4">
            {servicesContent.sectionTitle}
          </h2>
          <p className="font-secondary text-sm xs:text-base sm:text-lg text-tc-text-600 max-w-3xl mx-auto">
            {servicesContent.sectionDescription}
          </p>
        </motion.div>
        
        {/* Services Grid - 2x2 Desktop, Vertical Mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesContent.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-service h-full">
                {/* Icon */}
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 xs:mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#1c1c1c' }}>
                  <ServiceIcon icon={service.icon} className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 group-hover:text-tc-primary-700 transition-colors duration-300" style={{ color: '#1c1c1c' }}>
                  {service.title}
                </h3>
                
                <p className="font-secondary text-xs xs:text-sm sm:text-base text-tc-text-600 mb-4 xs:mb-5 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 xs:space-y-3 mb-5 xs:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-secondary flex items-center text-xs xs:text-sm text-tc-text-700">
                      <svg className="w-3 h-3 xs:w-4 xs:h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1c1c1c' }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Pricing */}
                {service.pricing && (
                  <div className="font-secondary font-semibold mb-4 xs:mb-5 text-sm xs:text-base" style={{ color: '#1c1c1c' }}>
                    {service.pricing}
                  </div>
                )}
                
                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-tc-border-200 text-tc-text-700 hover:text-white transition-all duration-300 min-h-touch text-xs xs:text-sm"
                  style={{
                    '--hover-bg': '#1c1c1c',
                    '--hover-border': '#1c1c1c'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#1c1c1c';
                    e.currentTarget.style.borderColor = '#1c1c1c';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                  onClick={() => openWhatsApp('custom', `Olá! Tenho interesse no serviço de ${service.title}. Gostaria de solicitar um orçamento.`)}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 xs:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-secondary text-sm xs:text-base text-tc-text-600 mb-4 xs:mb-6">
            {servicesContent.bottomCta.text}
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="min-h-touch text-sm xs:text-base"
            style={{ backgroundColor: '#1c1c1c', borderColor: '#1c1c1c' }}
            onClick={() => openWhatsApp('custom')}
          >
            {servicesContent.bottomCta.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}