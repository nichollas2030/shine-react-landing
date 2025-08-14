import { SITE_CONTENT } from './content'

/**
 * 🎯 HOOK PARA CONTEÚDO DINÂMICO
 * 
 * ✅ USO SIMPLES: const content = useContent()
 * ✅ TYPESCRIPT: Autocomplete e tipos seguros
 * ✅ PERFORMANCE: Não faz re-renders desnecessários
 * 
 * 📝 EXEMPLO DE USO:
 * ```tsx
 * import { useContent } from '@/lib/useContent'
 * 
 * function MyComponent() {
 *   const content = useContent()
 *   
 *   return (
 *     <h1>{content.hero.headline}</h1>
 *     <p>{content.hero.subheadline}</p>
 *     <button>{content.hero.ctaText}</button>
 *   )
 * }
 * ```
 */

export function useContent() {
  return SITE_CONTENT
}

// 🎯 Helpers específicos para seções
export function useHeroContent() {
  return SITE_CONTENT.hero
}

export function useServicesContent() {
  return SITE_CONTENT.services
}

export function useTestimonialsContent() {
  return SITE_CONTENT.testimonials
}

export function useContactContent() {
  return SITE_CONTENT.contact
}

export function useGalleryContent() {
  return SITE_CONTENT.gallery
}

export function useNavigationContent() {
  return SITE_CONTENT.navigation
}

export function useFooterContent() {
  return SITE_CONTENT.footer
}

export function useCompanyInfo() {
  return SITE_CONTENT.company
}

export function useWhatsAppMessages() {
  return SITE_CONTENT.whatsapp
}

// 🎯 Helper para mensagens específicas do WhatsApp
export function getWhatsAppUrl(messageKey: keyof typeof SITE_CONTENT.whatsapp, customMessage?: string) {
  const message = customMessage || SITE_CONTENT.whatsapp[messageKey]
  const phoneNumber = SITE_CONTENT.company.whatsappNumber
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

// 🎯 Helper para abrir WhatsApp
export function openWhatsApp(messageKey: keyof typeof SITE_CONTENT.whatsapp, customMessage?: string) {
  const url = getWhatsAppUrl(messageKey, customMessage)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default useContent

