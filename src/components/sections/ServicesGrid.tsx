"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useServicesContent, openWhatsApp } from "@/lib/useContent";

// Service Icons
const ServiceIcon = ({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) => {
  const icons = {
    calendar: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    sparkles: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 2.5L16 4.5 13.5 7 16 9.5 13.5 12 16 14.5 13.5 17 16 19.5 13.5 22 16 24"
        />
      </svg>
    ),
    hammer: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.25 9.25L15 5.5l-4.5-4.5L6 5.5l4.25 3.75zm0 0L18.75 17.5l-4.5 4.5L10.5 18.25l.75-9zm0 0v9"
        />
      </svg>
    ),
    home: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    truck: (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  };

  return icons[icon as keyof typeof icons] || icons.calendar;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesGrid() {
  // 🎯 CONTEÚDO DINÂMICO - Centralizado em /lib/content.ts
  const servicesContent = useServicesContent();

  return (
    <section
      className="py-16 xs:py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
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

        {/* Services Grid - Layout 3x2 uniforme no desktop */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 auto-rows-fr"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              // No desktop, garantir que temos exatamente 2 linhas
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            {servicesContent.services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="card-service h-full">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 xs:mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "#1c1c1c" }}
                  >
                    <ServiceIcon
                      icon={service.icon}
                      className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white"
                    />
                  </div>

                  {/* Content */}
                  <h3
                    className="font-heading text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 group-hover:text-tc-primary-700 transition-colors duration-300"
                    style={{ color: "#1c1c1c" }}
                  >
                    {service.title}
                  </h3>

                  <p className="font-secondary text-xs xs:text-sm sm:text-base text-tc-text-600 mb-5 xs:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full text-white hover:opacity-90 transition-all duration-300 min-h-touch text-xs xs:text-sm"
                    style={{
                      backgroundColor: "#1c1c1c",
                      borderColor: "#1c1c1c",
                    }}
                    onClick={() =>
                      openWhatsApp(
                        "custom",
                        servicesContent.buttons.requestQuoteMessage.replace(
                          "{serviceName}",
                          service.title
                        )
                      )
                    }
                  >
                    {servicesContent.buttons.requestQuote}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
            className="min-h-touch text-sm xs:text-base text-white hover:opacity-90 transition-all duration-300"
            style={{ backgroundColor: "#1c1c1c", borderColor: "#1c1c1c" }}
            onClick={() => openWhatsApp("custom")}
          >
            {servicesContent.bottomCta.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
