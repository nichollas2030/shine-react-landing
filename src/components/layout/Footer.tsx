"use client";

import React from "react";
import { motion } from "framer-motion";
import { companyContent } from "@/components/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-tc-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-tc-primary-500 to-tc-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">
                  TC <span className="text-tc-primary-400">Shine</span>
                </h3>
                <p className="text-tc-neutral-400 text-sm">
                  {companyContent.tagline}
                </p>
              </div>
            </div>
            <p className="text-tc-neutral-300 mb-6 leading-relaxed">
              Sua parceira de confiança em limpeza residencial no sul da
              Flórida. Transformamos casas em lares brilhantes com atenção aos
              detalhes e carinho especial.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Início", id: "hero" },
                { label: "Nossos Serviços", id: "services" },
                { label: "Depoimentos", id: "testimonials" },
                { label: "Solicitar Orçamento", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-tc-neutral-300 hover:text-tc-primary-400 transition-colors duration-300"
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
            <h4 className="font-heading font-bold text-lg mb-6">
              Nossos Serviços
            </h4>
            <ul className="space-y-3 text-tc-neutral-300">
              <li>• Limpeza Regular</li>
              <li>• Limpeza Profunda</li>
              <li>• Limpeza Pós-Obra</li>
              <li>• Limpeza para Airbnb</li>
              <li>• Soluções Personalizadas</li>
            </ul>
          </motion.div>

          {/* Contact & Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-lg mb-6">
              Contato & Áreas
            </h4>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${companyContent.phone}`}
                className="flex items-center gap-3 text-tc-neutral-300 hover:text-tc-primary-400 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
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
                {companyContent.phone}
              </a>

              <div className="flex items-center gap-3 text-tc-neutral-300">
                <svg
                  className="w-5 h-5"
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
                Segunda - Sábado: 7:00 - 19:00
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h5 className="font-semibold text-tc-primary-400 mb-3">
                Atendemos:
              </h5>
              <div className="grid grid-cols-2 gap-1 text-sm text-tc-neutral-400">
                {companyContent.serviceAreas.slice(0, 6).map((area) => (
                  <div key={area}>• {area}</div>
                ))}
              </div>
              <p className="text-xs text-tc-neutral-500 mt-2">
                E região metropolitana
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tc-neutral-800">
        <div className="container-responsive py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-tc-neutral-400 text-sm">
              © {currentYear} {companyContent.name}. Todos os direitos
              reservados.
            </p>

            <div className="flex items-center gap-6 text-sm text-tc-neutral-400">
              <span>🛡️ Licenciado & Segurado</span>
              <span>✅ Garantia de Satisfação</span>
              <span>🌱 Produtos Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
