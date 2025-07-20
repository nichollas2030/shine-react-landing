"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    // Show tooltip after 10 seconds, then every 30 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
      const interval = setInterval(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 5000)
      }, 30000)
      
      return () => clearInterval(interval)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para limpeza residencial."
    window.open(`https://wa.me/15615231300?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  const handleTooltipClose = () => {
    setShowTooltip(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-20 right-0 mb-2 mr-2"
              >
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs relative">
                  <button
                    onClick={handleTooltipClose}
                    className="absolute top-1 right-1 min-w-8 min-h-8 w-8 h-8 text-gray-400 hover:text-gray-600 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2"
                    aria-label="Fechar dica do WhatsApp"
                    type="button"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="pr-6">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Precisa de ajuda?
                    </p>
                    <p className="text-xs text-gray-600">
                      Converse conosco pelo WhatsApp e receba seu orçamento em minutos!
                    </p>
                  </div>
                  {/* Arrow */}
                  <div className="absolute bottom-2 right-6 transform translate-y-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button - OTIMIZADO: Melhor acessibilidade */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="min-w-16 min-h-16 w-16 h-16 bg-gradient-to-r from-tc-whatsapp-500 to-tc-whatsapp-600 hover:from-tc-whatsapp-600 hover:to-tc-whatsapp-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 animate-pulse-whatsapp hover:animate-none focus:outline-none focus:ring-4 focus:ring-tc-whatsapp-300 focus:ring-offset-2"
            aria-label="Conversar no WhatsApp para solicitar orçamento de limpeza"
            type="button"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}