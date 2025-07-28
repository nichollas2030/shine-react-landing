"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { servicesContent } from '@/components/content'

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
  return (
    <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-tc-neutral-50">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 xs:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-tc-neutral-900 mb-3 xs:mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-tc-neutral-600 max-w-3xl mx-auto">
            Soluções completas de limpeza para todas as suas necessidades, 
            com qualidade profissional e atenção aos detalhes.
          </p>
        </motion.div>
        
        {/* Services Grid - 2x2 Desktop, Vertical Mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesContent.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-service h-full">
                {/* Icon */}
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-tc-primary-500 to-tc-primary-600 rounded-xl flex items-center justify-center mb-4 xs:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon icon={service.icon} className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-base xs:text-lg sm:text-xl font-bold text-tc-neutral-900 mb-2 xs:mb-3">
                  {service.title}
                </h3>
                
                <p className="text-xs xs:text-sm sm:text-base text-tc-neutral-600 mb-3 xs:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-1 xs:space-y-2 mb-4 xs:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs xs:text-sm text-tc-neutral-700">
                      <svg className="w-3 h-3 xs:w-4 xs:h-4 text-tc-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Pricing */}
                {service.pricing && (
                  <div className="text-tc-primary-600 font-semibold mb-3 xs:mb-4 text-sm xs:text-base">
                    {service.pricing}
                  </div>
                )}
                
                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:border-tc-primary-500 group-hover:text-tc-primary-500 min-h-touch text-xs xs:text-sm"
                  onClick={() => {
                    const message = `Olá! Tenho interesse no serviço de ${service.title}. Gostaria de solicitar um orçamento.`
                    window.open(`https://wa.me/15615231300?text=${encodeURIComponent(message)}`, '_blank')
                  }}
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 xs:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm xs:text-base text-tc-neutral-600 mb-4 xs:mb-6">
            Não encontrou exatamente o que precisa? Oferecemos soluções personalizadas.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            className="min-h-touch text-sm xs:text-base"
            onClick={() => {
              const message = "Olá! Gostaria de discutir uma solução personalizada de limpeza para minha necessidade específica."
              window.open(`https://wa.me/15615231300?text=${encodeURIComponent(message)}`, '_blank')
            }}
          >
            Conversar sobre Necessidades Especiais
          </Button>
        </motion.div>
      </div>
    </section>
  )
}