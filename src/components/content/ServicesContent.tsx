import { ServiceContent } from '@/types/content.types'

export const servicesContent: ServiceContent[] = [
  {
    title: "Limpeza Regular",
    description: "Manutenção semanal ou quinzenal personalizada para manter sua casa sempre impecável",
    icon: "calendar",
    features: [
      "Flexibilidade de horários",
      "Produtos eco-friendly premium",
      "Equipe fixa e treinada",
      "Planos mensais com desconto"
    ],
    pricing: "A partir de $80/semana"
  },
  {
    title: "Limpeza Profunda", 
    description: "Detalhamento completo trimestral para renovar completamente seu ambiente",
    icon: "sparkles",
    features: [
      "Limpeza de cantos e frestas",
      "Eletrodomésticos por dentro",
      "Vidros e espelhos detalhados",
      "Desinfecção completa"
    ],
    pricing: "A partir de $200"
  },
  {
    title: "Pós-Obra",
    description: "Remoção especializada de resíduos e poeira após construção ou reforma",
    icon: "hammer",
    features: [
      "Equipamentos especializados",
      "Segurança garantida",
      "Resultado impecável",
      "Certificação de limpeza"
    ],
    pricing: "Orçamento personalizado"
  },
  {
    title: "Limpeza Airbnb",
    description: "Turnover rápido e eficiente entre hóspedes com padrão hoteleiro",
    icon: "home",
    features: [
      "Turnover em 2-3 horas",
      "Checklist completo",
      "Disponibilidade 24/7",
      "Relatório fotográfico"
    ],
    pricing: "A partir de $120/limpeza"
  }
]