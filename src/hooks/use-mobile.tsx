import * as React from "react"

const MOBILE_BREAKPOINT = 768

// 🔧 CORREÇÃO CRÍTICA: Previne layout shift durante hydration
function getInitialMobileState(): boolean {
  // Server-side safe: assume desktop como padrão conservador
  if (typeof window === 'undefined') return false
  
  // Client-side: detecção imediata e precisa
  return window.innerWidth < MOBILE_BREAKPOINT
}

export function useIsMobile() {
  // ✅ CORRIGIDO: Estado inicial estável, sem undefined
  const [isMobile, setIsMobile] = React.useState<boolean>(getInitialMobileState)

  React.useEffect(() => {
    // Garantir que o estado está sincronizado após hydration
    const updateMobileState = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Verificação imediata para corrigir qualquer discrepância SSR/Client
    updateMobileState()
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener("change", updateMobileState)
    
    return () => mql.removeEventListener("change", updateMobileState)
  }, [])

  return isMobile
}
