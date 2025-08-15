"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCompanyInfo, useNavigationContent } from "@/lib/useContent";

export default function Header() {
  // 🎯 CONTEÚDO DINÂMICO - Centralizado em /lib/content.ts
  const companyInfo = useCompanyInfo();
  const navigation = useNavigationContent();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Fechar o menu mobile primeiro
      setIsMobileMenuOpen(false);

      // Aguardar um pouco para o menu fechar antes do scroll
      setTimeout(() => {
        // Calcular offset para compensar o header fixo
        const headerHeight = 80; // altura aproximada do header
        const elementPosition = element.offsetTop - headerHeight;

        // Tentar scroll suave primeiro
        if ("scrollBehavior" in document.documentElement.style) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        } else {
          // Fallback para navegadores que não suportam scroll suave
          window.scrollTo({
            top: elementPosition,
            left: 0,
            behavior: "smooth",
          });
        }
      }, 150);
    }
  };

  const navItems = navigation.menuItems;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14 xs:h-16 sm:h-18 md:h-20">
          {/* Logo - MOBILE OPTIMIZED */}
          <motion.button
            className="flex items-center gap-2 xs:gap-3 min-w-0 flex-1 sm:flex-initial md:flex-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2 rounded-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToSection("home")}
            aria-label="Ir para o início"
          >
            <div
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shadow-md flex-shrink-0"
              style={{ backgroundColor: "#1c1c1c" }}
            >
              <svg
                className="w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="min-w-0 flex-1 sm:flex-initial">
              <h1
                className={`font-heading font-bold text-xs xs:text-sm sm:text-base md:text-lg leading-tight truncate transition-colors duration-300 ${
                  isScrolled ? "text-tc-text-900" : "text-white"
                }`}
              >
                {companyInfo.name.split(" ")[0]}{" "}
                <span
                  className={`transition-colors duration-300 ${
                    isScrolled ? "" : ""
                  }`}
                  style={{ color: isScrolled ? "#1c1c1c" : "white" }}
                >
                  Shine
                </span>
              </h1>
              <p
                className={`text-xs hidden xs:block sm:text-sm leading-tight transition-colors duration-300 truncate ${
                  isScrolled ? "text-tc-text-600" : "text-white/80"
                }`}
              >
                {companyInfo.tagline}
              </p>
            </div>
          </motion.button>

          {/* Desktop Navigation - CENTRALIZADA */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium text-sm lg:text-base transition-colors duration-300 hover:text-tc-primary-500 px-2 py-1 rounded-md hover:bg-white/10 ${
                    isScrolled
                      ? "text-tc-text-700 hover:bg-tc-background-100"
                      : "text-white/90"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Desktop Contact Phone - EXTREMA DIREITA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className={`font-medium text-sm lg:text-base transition-colors duration-300 hover:text-tc-primary-500 px-3 py-2 rounded-md hover:bg-white/10 flex items-center gap-2 ${
                isScrolled
                  ? "text-tc-text-700 hover:bg-tc-background-100"
                  : "text-white/90"
              }`}
            >
              <svg
                className="w-4 h-4"
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
            
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/tcshinecleaning?igsh=czJjZ2tnMXI1OThy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isScrolled
                  ? "text-tc-text-700 hover:bg-tc-background-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 min-w-touch min-h-touch rounded-lg transition-all duration-300 ${
              isScrolled ? "text-tc-text-700" : "text-white"
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          }`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-4 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-white/20">
            <nav className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-medium text-tc-text-700 hover:text-tc-primary-500 transition-all duration-300 py-3 px-3 min-h-touch rounded-lg hover:bg-tc-background-100 flex items-center gap-3"
                >
                  {item.id === "home" && (
                    <svg
                      className="w-4 h-4"
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
                  )}
                  {item.id === "about" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  )}
                  {item.id === "services" && (
                    <svg
                      className="w-4 h-4"
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
                  )}
                  {item.id === "gallery" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <polyline
                        points="21,15 16,10 5,21"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  )}
                  {item.id === "testimonials" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  )}
                  {item.id === "contact" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {item.label}
                </button>
              ))}

              {/* Número de contato no mobile - MESMO ESPAÇAMENTO */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-left font-medium text-tc-text-700 hover:text-tc-primary-500 transition-all duration-300 py-3 px-3 min-h-touch rounded-lg hover:bg-tc-background-100 flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4"
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

              {/* Instagram no mobile */}
              <a
                href="https://www.instagram.com/tcshinecleaning?igsh=czJjZ2tnMXI1OThy&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left font-medium text-tc-text-700 hover:text-tc-primary-500 transition-all duration-300 py-3 px-3 min-h-touch rounded-lg hover:bg-tc-background-100 flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow us on Instagram
              </a>
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
