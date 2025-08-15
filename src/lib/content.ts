/**
 * 🎯 SISTEMA DE CONTEÚDO DINÂMICO CENTRALIZADO - BACKUP
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
  tagline: "Confidence and Brilliance for Your Home",
  phone: "(561) 523-1300",
  whatsappNumber: "15615231300",
  email: "contato@tcshine.com",

  // 📍 Áreas de Atendimento
  serviceAreas: [
    "Miami",
    "Miami Beach",
    "North Miami",
    "North Miami Beach",
    "Aventura",
    "Sunny Isles Beach",
    "Bal Harbour",
    "Surfside",
    "Hollywood",
    "Hallandale Beach",
    "Dania Beach",
    "Fort Lauderdale",
    "Lauderdale-by-the-Sea",
    "Oakland Park",
    "Wilton Manors",
    "Pompano Beach",
    "Lighthouse Point",
    "Deerfield Beach",
    "Boca Raton",
    "Highland Beach",
    "Delray Beach",
    "Gulf Stream",
    "Boynton Beach",
    "Lake Worth",
    "Lantana",
    "Palm Beach",
    "West Palm Beach",
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
    "Reliable service, impeccable results: from Miami to West Palm Beach",

  // 📝 Subtítulo - Descrição do serviço
  subheadline:
    "Premium residential cleaning for busy families and Airbnb properties - We serve Miami to West Palm Beach with punctuality and attention to detail",

  // 🔘 Texto do Botão Principal
  ctaText: "Schedule Now",

  // 🔘 Texto do Botão Secundário
  secondaryCtaText: "See services",
} as const;

// 👥 SEÇÃO ABOUT US
export const ABOUT_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "About TC Shine Cleaning",

  // 📝 Descrição Principal
  sectionDescription:
    "Your trusted cleaning partner in South Florida, delivering excellence since day one.",

  // 📖 Descrição Completa sobre a Empresa
  description:
    "Hi there! I'm Thaiz, and I started TC Shine because I believe cleaning is so much more than just making things sparkle. It's about trust - knowing you can leave your home in the hands of someone who genuinely cares. I've always been a bit obsessed with clean, organized spaces that just feel good to be in. You know that feeling when you come home after a long day and everything is exactly how you want it? That's what drives me every single day. My day always starts and ends at home, and there's honestly nothing better than being somewhere that truly feels like your sanctuary. Over the past three years, I've been caring for homes from Miami all the way to West Palm Beach. What makes me most proud isn't just the spaces I've transformed, but the genuine friendships I've built along the way. Some of my clients have become like family - that's just how it happens when you really connect with people. My goal was never just to clean houses. I want you to fall in love with your space all over again. Because at the end of the day, your home isn't just clean - it's the place where you actually want to spend your time, where you feel completely yourself.",
} as const;

// 🛠️ SEÇÃO DE SERVIÇOS
export const SERVICES_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Our Services",

  // 📝 Descrição da Seção
  sectionDescription:
    "Complete cleaning solutions for all your needs, with professional quality and attention to detail.",

  // 🏠 Lista de Serviços
  services: [
    {
      icon: "home",
      title: "Deep Cleaning",
      description: "Complete and detailed cleaning for all rooms.",
    },
    {
      icon: "calendar",
      title: "Regular Cleaning",
      description: "Light cleaning to keep the house tidy.",
    },
    {
      icon: "sparkles",
      title: "Post-Construction",
      description:
        "Removal of dust and debris after renovations or construction.",
    },
    {
      icon: "hammer",
      title: "Airbnb cleaning",
      description: "Quick and thorough cleaning between reservations.",
    },
    {
      icon: "truck",
      title: "Moving Cleaning",
      description:
        "Ideal for those who are moving — before delivery or moving into the property.",
    },
    {
      icon: "briefcase",
      title: "Office Cleaning",
      description:
        "Detailed office cleaning to keep your space always organized and sanitized.",
    },
  ],

  // 🎯 Call-to-Action Final da Seção
  bottomCta: {
    text: "Can't find exactly what you need? We offer customized solutions.",
    buttonText: "Talking About Special Needs",
  },

  // 🔘 Textos dos Botões
  buttons: {
    requestQuote: "Request a Quote",
    requestQuoteMessage:
      "Hello! I am interested in the {serviceName} service. I would like to request a quote.",
  },
} as const;

// 💬 SEÇÃO DE DEPOIMENTOS
export const TESTIMONIALS_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Testimonials from Our Customers",

  // 📝 Descrição da Seção
  sectionDescription:
    "Trust built through years of exceptional service and lasting relationships with our customers.",

  // ⭐ Lista de Depoimentos
  testimonials: [
    {
      author: "Priyanka S.",
      date: "Dezembro, 2023",
      quote:
        "Josie arrived on time; she brought her own supplies and did an amazing job. The house looks neat and smells great! Thanks.",
      rating: 5,
    },
    {
      author: "Alex r.",
      date: "Novembro, 2023",
      quote: "Great experience! Will be using from now on!",
      rating: 5,
    },
    {
      author: "Sam M.",
      date: "Novembro, 2023",
      quote:
        "Thaiz did a great an amazing cleaning my home. Definitely, recommend her work to others seeking a professional cleaning person. She was friendly, did a complete and thorough job and brought her own supplies. Look forward to working with her again.",
      rating: 5,
    },
    {
      author: "Christopher C.",
      date: "Outubro, 2023",
      quote:
        "Thaiz is great! She was right on time, well prepared and did a very thorough and professional job. My place looks and smells amazing! Highly recommended!!",
      rating: 5,
    },
    {
      author: "Alfredo M.",
      date: "Outubro, 2023",
      quote:
        "Thaiz provides white glove cleaning services that make my home feel like new every time. She is thorough, detail oriented and dedicated. Thaiz is very self aware and always tries to do her work without causing too much intrusions or getting in the way. This is perfect because I work from home and constantly on calls. Even with my home's busy schedule, Thaiz is very accommodating, punctual and responsive to cleaning requests.",
      rating: 5,
    },
    {
      author: "Krystal D.",
      date: "Outubro, 2023",
      quote:
        "Thaiz is amazing! Her work is exceptional- both with cleaning and organization. I appreciate her so much and highly recommend her!",
      rating: 5,
    },
    {
      author: "Craig W.",
      date: "Outubro, 2023",
      quote:
        "She is a perfectionist with a keen eye for making the cleaning experience special. Making the beds look beautiful and doing fun designs with toilet paper and paper towels are just a few. Most important, she is a joy to have around.",
      rating: 5,
    },
    {
      author: "Kay Muller-Thym",
      date: "Junho, 2025",
      quote:
        "If you're searching for a reliable and trustworthy cleaning service, I highly recommend Thaiz Costa! She was referred to me by my neighbor, and I couldn't be happier. Thaiz is very accommodating and professional.",
      rating: 5,
    },
    {
      author: "Pri Ks",
      date: "Junho, 2025",
      quote:
        "Highly recommend this cleaning service!! Very efficient, trustworthy and great work ethic. We've had a great experience with them consistently.",
      rating: 5,
    },
    {
      author: "Sam Mathew",
      date: "Junho, 2025",
      quote:
        "I can't say enough wonderful things about Thaiz! She is hands-down the best house cleaner I've ever worked with. Not only is she incredibly thorough and detail-oriented, but she brings such a positive energy into our home every time she visits. Every corner sparkles, and she always finds the little things others miss — baseboards, under furniture, even organizing spaces I didn't think of. She is professional, punctual, trustworthy, and goes above and beyond with every visit. Whether it's a routine clean or a deep refresh, I know I can count on her to make our home look and feel amazing. If you're looking for someone who truly takes pride in their work and treats your home with care and respect, look no further. Thaiz is a great cleaner and I'm so grateful to have found her!",
      rating: 5,
    },
  ],

  // 🏆 Selos de Confiança
  trustBadges: [
    {
      icon: "shield",
      text: "Licensed & Insured",
    },
    {
      icon: "check",
      text: "100% Satisfaction Guarantee",
    },
    {
      icon: "leaf",
      text: "Eco-Friendly Products",
    },
  ],
} as const;

// 📞 SEÇÃO DE CONTATO
export const CONTACT_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Request your free quote",

  // 📝 Descrição da Seção
  sectionDescription:
    "Contact us and receive a personalized proposal for your cleaning needs.",

  // 📝 Labels do Formulário
  formLabels: {
    name: "Full Name",
    email: "E-mail",
    phone: "Phone",
    service: "Type of Service",
    message: "Message (Optional)",
    submit: "Send via WhatsApp",
  },

  // 🏷️ Placeholders do Formulário
  formPlaceholders: {
    name: "Your full name",
    email: "your@email.com",
    service: "Select a service...",
    message:
      "E.g.: 3-bedroom house, 2 bathrooms. I need cleaning every two weeks. I have pets at home.",
  },

  // 🧹 Opções de Serviços
  serviceOptions: [
    "Regular Cleaning (Weekly/Biweekly)",
    "Deep Cleaning",
    "Post-Construction Cleaning",
    "Cleaning for Airbnb",
    "Customized Solution",
  ],

  // ⚠️ Mensagens de Erro
  errorMessages: {
    name: "Name must be at least 2 characters long",
    email: "Please enter a valid email address",
    service: "Please select a service",
  },

  // 🔄 Estados de Loading
  loadingStates: {
    submitting: "Sending...",
    success: "Form submitted successfully!",
    error: "Error sending form:",
  },

  // 💬 Template da Mensagem WhatsApp
  whatsappTemplate: {
    header: "🏠 *New Quote Request - TC Shine Cleaning*",
    fields: {
      name: "👤 *Name:*",
      email: "📧 *Email:*",
      service: "🧹 *Service:*",
      message: "📝 *Details:*",
    },
    footer: "_Sent via tcshine.com website_",
  },

  // 📍 Informações de Contato
  contactInfo: {
    title: "Contact Information",
    description: "We are ready to serve you with excellence and punctuality",
    areas: "Service throughout the Miami metropolitan area",
  },

  // 🗺️ Áreas de Atendimento
  serviceAreas: {
    title: "Areas of Service",
    description: "Serving Miami to West Palm Beach",
    areas: COMPANY_INFO.serviceAreas,
  },

  // 🕒 Horários de Funcionamento
  businessHours: {
    title: "Office Hours",
    schedule: [
      { day: "Monday - Saturday:", hours: "7:00 AM - 7:00 PM" },
      { day: "Sunday:", hours: "Emergency Service 24/7" },
    ],
  },

  // 🕒 Horários (formato original mantido para compatibilidade)
  schedule: {
    title: "Office Hours",
    hours: [
      "Monday - Saturday: 7:00 a.m. - 7:00 p.m.",
      "Sunday: Emergency Service 24/7",
    ],
  },
} as const;

// 🖼️ SEÇÃO GALERIA
export const GALLERY_CONTENT = {
  // 📋 Título da Seção
  sectionTitle: "Our Completed Projects",

  // 📝 Descrição da Seção
  sectionDescription:
    "See the quality and excellence of our services through real photos of our professional cleaning work.",

  // 🔄 Estados de Carregamento
  loading: {
    text: "Loading image...",
    placeholder: {
      title: "Add Your Photos",
      description: "Paste your photos into the public/images/gallery/ folder. ",
      alt: "Placeholder for photo gallery",
    },
  },

  // 🎯 Call-to-Action
  cta: {
    text: "Like what you see? Request your personalized quote now!",
    buttonText: "Request a Free Quote",
  },

  // 🎛️ Controles de Navegação
  navigation: {
    previousLabel: "Ver foto anterior",
    nextLabel: "Ver próxima foto",
    galleryLabel: "Navegação de galeria",
    photoCounter: "Ver foto {current} de {total}",
  },

  // 📊 Estatísticas da Galeria
  stats: [
    {
      icon: "camera",
      text: "Real Photos of the Work",
    },
    {
      icon: "check",
      text: "Proven Results",
    },
    {
      icon: "star",
      text: "Standard of Excellence",
    },
  ],

  // 🖼️ Metadados das Imagens
  imageDescriptions: {
    // Imagens reais da pasta
    "imagem_ladind_page (2)": {
      title: "Exceptional Quality",
      description: "Standard of excellence in every detail",
      alt: "Demonstration of exceptional quality TC Shine",
    },
    "imagem_ladind_page (5)": {
      title: "Flawless Results",
      description: "Satisfaction guaranteed on all services",
      alt: "Impeccable cleaning results with TC Shine",
    },
    "imagem_ladind_page (8)": {
      title: "Complete Sanitization",
      description: "Completely sanitized and safe environment",
      alt: "HComplete cleaning performed by TC Shine",
    },
    "imagem_ladind_page (10)": {
      title: "Professional Standard",
      description: "Professional standard cleaning",
      alt: "TC Shine professional cleaning standard",
    },
    "imagem_ladind_page (47)": {
      title: "Renovated Environment",
      description: "Complete renovation of the environment",
      alt: "Refreshed environment after professional cleaning by TC Shine",
    },
    "imagem_lading_page (1)": {
      title: "Proven Excellence",
      description: "Proven excellence in every project",
      alt: "Proven excellence of TC Shine services",
    },
    "imagem_lading_page (3)": {
      title: "Total Satisfaction",
      description: "Total customer satisfaction",
      alt: "Total satisfaction demonstrated by TC Shine customers",
    },
    // Fallbacks genéricos
    "before-after": {
      title: "Complete Transformation",
      description: "Before and after our professional service",
      alt: "Comparison before and after professional cleaning",
    },
    cozinha: {
      title: "Impeccable Cuisine",
      description: "Clean and organized kitchen",
      alt: "Kitchen after professional cleaning - Clean countertops and appliances",
    },
    banheiro: {
      title: "Professional Bathroom",
      description: "Sanitized and disinfected bathroom",
      alt: "Bathroom after professional cleaning - Sparkling tiles and fixtures",
    },
    sala: {
      title: "Living Room",
      description: "Cozy and clean environment",
      alt: "Living room after cleaning - Clean furniture and floor",
    },
    quarto: {
      title: "Organized Room",
      description: "Clean and airy room",
      alt: "Room after professional cleaning - Organized and clean",
    },
    escritorio: {
      title: "Professional Office",
      description: "Clean and organized work environment",
      alt: "Office after professional cleaning",
    },
    varanda: {
      title: "Outdoor Area",
      description: "Sanitized outdoor spaces",
      alt: "Outdoor area after cleaning - Clean balcony or yard",
    },
    casa: {
      title: "Complete House",
      description: "Impeccable results in residential cleaning",
      alt: "Professional residential cleaning - Clean house after service",
    },
    apartamento: {
      title: "Clean Apartment",
      description: "Apartment completely sanitized",
      alt: "Apartment after thorough professional cleaning",
    },
    comercial: {
      title: "Commercial Cleaning",
      description: "Professionally cleaned commercial environment",
      alt: "Commercial space after professional cleaning",
    },
  },

  // 🏷️ Títulos e Descrições Fallback
  fallbackTitles: [
    "Complete Residential Cleaning",
    "Professionally Clean Kitchen",
    "Impeccable Bathroom",
    "Clean Living Room",
    "Organized Room",
    "Clean Outdoor Area",
    "Professional Office",
    "Complete House",
    "Clean Apartment",
    "Commercial Environment",
  ],

  fallbackDescriptions: [
    "Impeccable results in residential cleaning",
    "Clean and organized kitchen",
    "Sanitized and disinfected bathroom",
    "Cozy and clean environment",
    "Clean and airy room",
    "Sanitized outdoor spaces",
    "Organized work environment",
    "House completely sanitized",
    "Clean and airy apartment",
    "Professional commercial space",
  ],
} as const;

// 🔗 NAVEGAÇÃO DO SITE
export const NAVIGATION = {
  // 📱 Menu Principal
  menuItems: [
    { id: "home", label: "Home" },
    { id: "about", label: "About us" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ],

  // 📱 Menu Mobile (com ícones)
  mobileMenuItems: [
    { id: "home", label: "Home", icon: "home" },
    { id: "about", label: "About us", icon: "users" },
    { id: "services", label: "Services", icon: "sparkles" },
    { id: "gallery", label: "Gallery", icon: "camera" },
    { id: "testimonials", label: "Testimonials", icon: "star" },
    { id: "contact", label: "Contact", icon: "phone" },
  ],
} as const;

// 🦶 RODAPÉ
export const FOOTER_CONTENT = {
  // 📝 Descrição da Empresa
  companyDescription:
    "Your trusted partner in residential cleaning in South Florida. We transform houses into sparkling homes with attention to detail and special care.",

  // 🔗 Links Rápidos
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Home", id: "hero" },
      { label: "Our Services", id: "services" },
      { label: "Gallery", id: "gallery" },
      { label: "Testimonials", id: "testimonials" },
      { label: "Request a Quote", id: "contact" },
    ],
  },

  // 🛠️ Serviços
  services: {
    title: "Our Services",
    list: [
      "Regular Cleaning",
      "Deep Cleaning",
      "Post-Construction Cleaning",
      "Airbnb Cleaning",
      "Custom Solutions",
      "Office Cleaning",
    ],
  },

  // 📞 Informações de Contato
  contactInfo: {
    title: "Contact & Areas",
  },

  // 🏘️ Áreas de Atendimento
  serviceAreas: {
    title: "We serve",
    coverage: "Serving Miami to West Palm Beach",
    areas: COMPANY_INFO.serviceAreas.slice(0, 8).join(", ") + " and more",
  },

  // 🕒 Horário de Funcionamento
  businessHours: {
    title: "Office Hours",
    hours: [
      "Monday - Saturday: 7:00 AM - 7:00 PM",
      "Sunday: Emergency Service 24/7",
    ],
  },

  // ⚖️ Copyright
  copyright: `© ${new Date().getFullYear()} ${
    COMPANY_INFO.name
  }. All rights reserved.`,

  // ✅ Features
  features: [
    { icon: "🛡️", text: "Licensed & Insured" },
    { icon: "✅", text: "Satisfaction Guarantee" },
    { icon: "🌱", text: "Eco-Friendly Products" },
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
    "Hello! I would like to request a quote for residential cleaning.",

  // 📅 Serviço Regular
  regular: "Hello! I am interested in a regular cleaning service for my home.",

  // 🏗️ Pós-Obras
  postConstruction:
    "Hello! I need post-construction/renovation cleaning. I would like a quote.",

  // 🏨 Airbnb
  airbnb:
    "Hello! I have an Airbnb property and would like to get a quote for cleaning between guests.",

  // 🎯 Personalizada
  custom:
    "Hello! I would like to discuss a customized cleaning solution for my specific needs.",

  // 📞 Contato Geral
  general:
    "Hello! I would like to know more about TC Shine Cleaning's services.",
} as const;

// 🌐 SEO E METADADOS
export const SEO_CONTENT = {
  title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
  description:
    "Expert home, Airbnb, and post-construction cleaning services in Miami, Fort Lauderdale, and Boca Raton. Trusted, reliable, and premium quality. Get your free estimate today!",
  keywords:
    "house cleaning Miami, maid service Fort Lauderdale, residential cleaning Boca Raton, Airbnb cleaning service, post-construction cleanup, deep cleaning Florida, home cleaning services",
  author: COMPANY_INFO.name,
  robots: "index, follow",
  language: "en-US",
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
  about: ABOUT_CONTENT,
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
