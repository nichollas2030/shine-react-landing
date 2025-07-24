"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroContent, companyContent } from "@/components/content";
// import heroImage from '@/assets/hero-bg.jpg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-tc-primary-600 via-tc-primary-500 to-tc-primary-400">
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-responsive py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Main Headline */}
            <motion.h1
              className="font-heading text-responsive-h1 font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroContent.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-responsive-body text-white/90 mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {heroContent.subheadline}
            </motion.p>

            {/* Social Proof */}
            <motion.div
              className="flex flex-wrap items-center gap-6 mb-8 text-white/80"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.5 3 1-6.5L0 6l6.5-1L10 0l3.5 5L20 6l-5.5 5.5 1 6.5z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">
                  5.0 • {companyContent.socialProof.happyClients}+ clientes
                </span>
              </div>

              <div className="text-sm">
                <span className="font-medium">
                  {companyContent.socialProof.yearsExperience}+ anos
                </span>{" "}
                de experiência
              </div>

              <div className="text-sm">
                <span className="font-medium">
                  {companyContent.socialProof.cleaningsCompleted.toLocaleString()}
                  +
                </span>{" "}
                limpezas realizadas
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex-1 "
              >
                Ver Serviços
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="flex-1"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
