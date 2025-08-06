/**
 * 🎯 SISTEMA DE CONTEÚDO DINÂMICO CENTRALIZADO
 *
 * ✅ MODIFICAÇÃO FÁCIL: Altere qualquer texto da landing page aqui
 * ✅ SEM TOCAR COMPONENTES: Zero modificação em arquivos .tsx
 * ✅ RESPONSIVIDADE MANTIDA: Todos os estilos preservados
 * ✅ FUNCIONALIDADE GARANTIDA: Componentes intactos
 *
 * 📝 COMO USAR:
 * 1. Encontre a seção que deseja modificar
 * 2. Altere o texto desejado
 * 3. Salve o arquivo
 * 4. ✨ Mudança reflete automaticamente!
 */

// 🏢 INFORMAÇÕES DA EMPRESA
export const COMPANY_INFO = {
  name: "TC Shine Cleaning Services",
  tagline: "Confiança e Brilho para Seu Lar",
  phone: "(561) 523-1300",
  whatsappNumber: "15615231300",
  email: "contato@tcshine.com",

  // 📍 Áreas de Atendimento
  serviceAreas: [
    "Miami",
    "Miami Beach",
    "Fort Lauderdale",
    "Boca Raton",
    "Delray Beach",
    "Boynton Beach",
    "West Palm Beach",
    "Coral Gables",
    "Aventura",
    "Hollywood",
  ],

  // 📊 Prova Social
  socialProof: {
    yearsExperience: 5,
    happyClients: 450,
    cleaningsCompleted: 2800,
    rating: 5.0,
  },
} as const;

// 🦸‍♂️ SEÇÃO HERO (PRINCIPAL)
export const HERO_CONTENT = {
  // 🎯 Título Principal - Aparecer grande na tela
  headline:
    "Serviço confiável, resultado impecável: de Miami a West Palm Beach",

  // 📝 Subtítulo - Descrição do serviço
  subheadline:
    "Limpeza residencial premium para famílias ocupadas e propriedades Airbnb - Atendemos de Miami até West Palm Beach com pontualidade e atenção aos detalhes",

  // 🔘 Texto do Botão Principal
  ctaText: "Agende Agora",

  // 🔘 Texto do Botão Secundário
  secondaryCtaText: "Ver Serviços",
} as const;

// 🛠️ SEÇÃO DE SERVIÇOS
export const SERVICES_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Nossos Serviços",

  // 📝 Descrição da Seção
  sectionDescription:
    "Soluções completas de limpeza para todas as suas necessidades, com qualidade profissional e atenção aos detalhes.",

  // 🏠 Lista de Serviços
  services: [
    {
      icon: "home",
      title: "Limpeza Profunda",
      description: "Faxina completa e detalhada para todos os ambientes.",
    },
    {
      icon: "calendar",
      title: "Limpeza Regular",
      description: "Limpeza leve para manter a casa sempre em ordem.",
    },
    {
      icon: "sparkles",
      title: "Pós-Obra",
      description: "Remoção de pó e resíduos após reformas ou construções.",
    },
    {
      icon: "hammer",
      title: "Limpeza de Airbnb",
      description: "Limpezas rápidas e caprichadas entre uma reserva e outra.",
    },
    {
      icon: "truck",
      title: "Limpeza de Mudança",
      description: "Ideal para quem está se mudando — antes da entrega ou da entrada no imóvel.",
    },
  ],

  // 🎯 Call-to-Action Final da Seção
  bottomCta: {
    text: "Não encontrou exatamente o que precisa? Oferecemos soluções personalizadas.",
    buttonText: "Conversar sobre Necessidades Especiais",
  },
} as const;

// 💬 SEÇÃO DE DEPOIMENTOS
export const TESTIMONIALS_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Depoimentos dos Nossos Clientes",

  // 📝 Descrição da Seção
  sectionDescription:
    "Confiança construída através de anos de serviço excepcional e relacionamentos duradouros com nossos clientes.",

  // ⭐ Lista de Depoimentos
  testimonials: [
    {
      quote:
        "A TC Shine transformou completamente a limpeza da nossa casa. São pontuais, detalhistas e usam produtos de qualidade. Recomendo sem hesitar!",
      author: "Maria Silva",
      location: "Boca Raton, FL",
      rating: 5,
      date: "Dezembro 2024",
    },
    {
      quote:
        "Serviço impecável para nosso Airbnb. A equipe é super profissional e sempre deixa tudo perfeito para os próximos hóspedes. Parceria de confiança!",
      author: "Carlos Rodriguez",
      location: "Miami Beach, FL",
      rating: 5,
      date: "Janeiro 2025",
    },
    {
      quote:
        "Depois da reforma da cozinha, a TC Shine fez uma limpeza pós-obra incrível. Removeram toda a poeira e deixaram tudo brilhando. Excelente trabalho!",
      author: "Ana Johnson",
      location: "Fort Lauderdale, FL",
      rating: 5,
      date: "Novembro 2024",
    },
  ],

  // 🏆 Selos de Confiança
  trustBadges: [
    {
      icon: "shield",
      text: "Licenciado & Segurado",
    },
    {
      icon: "check",
      text: "100% Garantia de Satisfação",
    },
    {
      icon: "leaf",
      text: "Produtos Eco-Friendly",
    },
  ],
} as const;

// 📞 SEÇÃO DE CONTATO
export const CONTACT_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Solicite seu Orçamento Gratuito",

  // 📝 Descrição da Seção
  sectionDescription:
    "Entre em contato conosco e receba uma proposta personalizada para suas necessidades de limpeza.",

  // 📝 Labels do Formulário
  formLabels: {
    name: "Nome Completo",
    email: "E-mail",
    phone: "Telefone",
    service: "Tipo de Serviço",
    message: "Mensagem (Opcional)",
    submit: "Enviar pelo WhatsApp",
  },

  // 📍 Informações de Contato
  contactInfo: {
    title: "Informações de Contato",
    description:
      "Estamos prontos para atender você com excelência e pontualidade.",
    areas: "Atendimento em toda região metropolitana de Miami",
  },

  // 🕒 Horários
  schedule: {
    title: "Horário de Atendimento",
    hours: [
      "Segunda a Sexta: 7:00 - 19:00",
      "Sábado: 8:00 - 16:00",
      "Domingo: 9:00 - 15:00",
      "Emergências: 24/7",
    ],
  },
} as const;

// 🖼️ SEÇÃO GALERIA
export const GALLERY_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Nossos Trabalhos",

  // 📝 Descrição da Seção
  sectionDescription:
    "Veja a qualidade do nosso trabalho através dos resultados que entregamos para nossos clientes.",

  // 🎯 Call-to-Action
  cta: {
    text: "Gostou do que viu? Solicite seu orçamento personalizado agora mesmo!",
    buttonText: "Solicitar Orçamento Gratuito",
  },
} as const;

// 🔗 NAVEGAÇÃO DO SITE
export const NAVIGATION = {
  // 📱 Menu Principal
  menuItems: [
    { id: "home", label: "Início" },
    { id: "services", label: "Serviços" },
    { id: "gallery", label: "Galeria" },
    { id: "testimonials", label: "Depoimentos" },
    { id: "contact", label: "Contato" },
  ],

  // 📱 Menu Mobile (com ícones)
  mobileMenuItems: [
    { id: "home", label: "Início", icon: "home" },
    { id: "services", label: "Serviços", icon: "sparkles" },
    { id: "gallery", label: "Galeria", icon: "camera" },
    { id: "testimonials", label: "Depoimentos", icon: "star" },
    { id: "contact", label: "Contato", icon: "phone" },
  ],
} as const;

// 🦶 RODAPÉ
export const FOOTER_CONTENT = {
  // 📝 Descrição da Empresa
  companyDescription:
    "Sua parceira de confiança em limpeza residencial no sul da Flórida. Transformamos casas em lares brilhantes com atenção aos detalhes e carinho especial.",

  // 🔗 Links Rápidos
  quickLinks: {
    title: "Links Rápidos",
    links: [
      { label: "Início", id: "hero" },
      { label: "Nossos Serviços", id: "services" },
      { label: "Galeria", id: "gallery" },
      { label: "Depoimentos", id: "testimonials" },
      { label: "Solicitar Orçamento", id: "contact" },
    ],
  },

  // 🛠️ Serviços
  services: {
    title: "Nossos Serviços",
    list: [
      "Limpeza Regular",
      "Limpeza Profunda",
      "Limpeza Pós-Obra",
      "Limpeza para Airbnb",
      "Soluções Personalizadas",
    ],
  },

  // 📞 Informações de Contato
  contactInfo: {
    title: "Contato & Áreas",
  },

  // 🏘️ Áreas de Atendimento
  serviceAreas: {
    title: "Atendemos",
    areas: "E região metropolitana",
  },

  // 🕒 Horário de Funcionamento
  businessHours: {
    title: "Horário de Atendimento",
    hours: [
      "Segunda - Sábado: 7:00 - 19:00",
      "Sábado: 8:00 - 16:00",
      "Domingo: 9:00 - 15:00",
      "Emergências: 24/7",
    ],
  },

  // ⚖️ Copyright
  copyright: `© ${new Date().getFullYear()} ${
    COMPANY_INFO.name
  }. Todos os direitos reservados.`,

  // ✅ Features
  features: [
    { icon: "🛡️", text: "Licenciado & Segurado" },
    { icon: "✅", text: "Garantia de Satisfação" },
    { icon: "🌱", text: "Produtos Eco-Friendly" },
  ],

  // 🔗 Links Legais
  legalLinks: [
    { text: "Política de Privacidade", href: "/privacy" },
    { text: "Termos de Uso", href: "/terms" },
    { text: "Cookies", href: "/cookies" },
  ],
} as const;

// 💬 MENSAGENS PADRÃO WHATSAPP
export const WHATSAPP_MESSAGES = {
  // 🏠 Serviço Residencial
  residential:
    "Olá! Gostaria de solicitar um orçamento para limpeza residencial.",

  // 📅 Serviço Regular
  regular:
    "Olá! Tenho interesse em um serviço de limpeza regular para minha casa.",

  // 🏗️ Pós-Obras
  postConstruction:
    "Olá! Preciso de limpeza pós-obra/reforma. Gostaria de um orçamento.",

  // 🏨 Airbnb
  airbnb:
    "Olá! Tenho uma propriedade Airbnb e gostaria de orçar limpeza entre hóspedes.",

  // 🎯 Personalizada
  custom:
    "Olá! Gostaria de discutir uma solução personalizada de limpeza para minha necessidade específica.",

  // 📞 Contato Geral
  general:
    "Olá! Gostaria de saber mais sobre os serviços da TC Shine Cleaning.",
} as const;

// 🌐 SEO E METADADOS
export const SEO_CONTENT = {
  title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
  description:
    "Limpeza residencial premium em Miami, Fort Lauderdale e região. Serviços para casas, Airbnb e pós-obras. Orçamento gratuito!",
  keywords:
    "limpeza residencial, Miami, Fort Lauderdale, Boca Raton, Airbnb cleaning, house cleaning, pós-obra",
  author: COMPANY_INFO.name,
  robots: "index, follow",
  language: "pt-BR",
  region: "FL, US",
} as const;

/**
 *
 *
 * 🎯 EXPORTAÇÃO PRINCIPAL
 *
 * Use esta constante para acessar todo o conteúdo:
 * import { SITE_CONTENT } from '@/lib/content'
 */
export const SITE_CONTENT = {
  company: COMPANY_INFO,
  hero: HERO_CONTENT,
  services: SERVICES_CONTENT,
  testimonials: TESTIMONIALS_CONTENT,
  contact: CONTACT_CONTENT,
  gallery: GALLERY_CONTENT,
  navigation: NAVIGATION,
  footer: FOOTER_CONTENT,
  whatsapp: WHATSAPP_MESSAGES,
  seo: SEO_CONTENT,
} as const;

// 🎯 Tipo TypeScript para garantir consistência
export type SiteContent = typeof SITE_CONTENT;
