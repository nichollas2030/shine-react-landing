"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonialsContent } from '@/components/content'

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.5 3 1-6.5L0 6l6.5-1L10 0l3.5 5L20 6l-5.5 5.5 1 6.5z"/>
      </svg>
    ))}
  </div>
)

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }
  
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }
  
  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === testimonialsContent.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? testimonialsContent.length - 1 : prevIndex - 1
      }
    })
  }
  
  // Auto-scroll every 6 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-tc-primary-50 to-tc-primary-100">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-responsive-h2 font-bold text-tc-neutral-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-responsive-body text-tc-neutral-600 max-w-3xl mx-auto">
            Confiança construída através de anos de serviço excepcional 
            e relacionamentos duradouros com nossos clientes.
          </p>
        </motion.div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <div className="card-testimonial max-w-3xl mx-auto text-center">
                  <StarRating rating={testimonialsContent[currentIndex].rating} />
                  
                  <blockquote className="text-lg lg:text-xl text-tc-neutral-700 mb-6 leading-relaxed italic">
                    "{testimonialsContent[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="text-center sm:text-left">
                      <div className="font-semibold text-tc-neutral-900">
                        {testimonialsContent[currentIndex].author}
                      </div>
                      <div className="text-tc-neutral-600 text-sm">
                        {testimonialsContent[currentIndex].location}
                      </div>
                      {testimonialsContent[currentIndex].date && (
                        <div className="text-tc-neutral-500 text-xs">
                          {testimonialsContent[currentIndex].date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows - CORRIGIDO: Adicionados aria-labels e maior área de toque */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 min-w-12 min-h-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-tc-primary-600 hover:text-tc-primary-700 hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2"
            onClick={() => paginate(-1)}
            aria-label="Ver depoimento anterior"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 min-w-12 min-h-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-tc-primary-600 hover:text-tc-primary-700 hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2"
            onClick={() => paginate(1)}
            aria-label="Ver próximo depoimento"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator - CORRIGIDO: Área de toque adequada e aria-labels */}
          <div className="flex justify-center mt-8 gap-2" role="tablist" aria-label="Navegação de depoimentos">
            {testimonialsContent.map((_, index) => (
              <button
                key={index}
                className={`relative min-w-12 min-h-12 p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2 ${
                  index === currentIndex 
                    ? 'bg-tc-primary-50' 
                    : 'hover:bg-tc-neutral-100'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                aria-label={`Ver depoimento ${index + 1} de ${testimonialsContent.length}`}
                aria-selected={index === currentIndex}
                role="tab"
                type="button"
              >
                <span 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-tc-primary-500 scale-125' 
                      : 'bg-tc-neutral-300'
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Trust Badges */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 mt-16 text-tc-neutral-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-tc-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Licenciado & Segurado</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-tc-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">100% Garantia de Satisfação</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-tc-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Produtos Eco-Friendly</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}