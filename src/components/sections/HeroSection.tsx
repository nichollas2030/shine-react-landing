"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { WhatsAppButton, Button } from '@/components/ui/button'
import { heroContent, companyContent } from '@/components/content'
// import heroImage from '@/assets/hero-bg.jpg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-tc-primary-600 via-tc-primary-500 to-tc-primary-400"
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-16 xs:py-20 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Main Headline */}
            <motion.h1 
              className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 xs:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroContent.headline}
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 mb-6 xs:mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroContent.subheadline}
            </motion.p>
            
            {/* Social Proof */}
            <motion.div 
              className="flex flex-wrap items-center gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8 text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 xs:w-4 xs:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.5 3 1-6.5L0 6l6.5-1L10 0l3.5 5L20 6l-5.5 5.5 1 6.5z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs xs:text-sm font-medium">5.0 • {companyContent.socialProof.happyClients}+ clientes</span>
              </div>
              
              <div className="text-xs xs:text-sm">
                <span className="font-medium">{companyContent.socialProof.yearsExperience}+ anos</span> de experiência
              </div>
              
              <div className="text-xs xs:text-sm">
                <span className="font-medium">{companyContent.socialProof.cleaningsCompleted.toLocaleString()}+</span> limpezas realizadas
              </div>
            </motion.div>
            
            {/* CTAs */}
            <motion.div 
              className="flex flex-col xs:flex-row gap-3 xs:gap-4 w-full xs:max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <WhatsAppButton 
                size="lg"
                message="Olá! Gostaria de solicitar um orçamento para limpeza residencial."
                className="flex-1 min-h-touch"
              >
                {heroContent.ctaText}
              </WhatsAppButton>
              
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="flex-1 sm:flex-initial min-h-touch text-sm xs:text-base"
              >
                Ver Serviços
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}