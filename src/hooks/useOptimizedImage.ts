import { ImgHTMLAttributes } from 'react';

/**
 * 🚀 LIGHTHOUSE: Hook para fetchpriority sem warnings do React
 * Solução type-safe para usar fetchpriority em componentes React
 */
export interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'fetchPriority'> {
  fetchPriority?: 'high' | 'low' | 'auto';
  priority?: boolean;
}

/**
 * Função utilitária para adicionar fetchpriority de forma type-safe
 * Evita warnings do React sobre propriedades não reconhecidas
 */
export function getOptimizedImageProps(props: OptimizedImageProps): ImgHTMLAttributes<HTMLImageElement> {
  const { fetchPriority, priority, ...restProps } = props;
  
  // Se priority ou fetchPriority estiver definido, adiciona a propriedade
  if (fetchPriority || priority) {
    const priorityValue = fetchPriority || (priority ? 'high' : 'auto');
    return {
      ...restProps,
      ...({ fetchpriority: priorityValue } as any), // Type assertion necessária
    };
  }
  
  return restProps;
}

/**
 * Hook personalizado para otimização de imagens com Lighthouse
 */
export function useOptimizedImageProps(priority: boolean = false, fetchPriority?: 'high' | 'low' | 'auto') {
  const optimizedProps = {
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    ...({ fetchpriority: fetchPriority || (priority ? 'high' : 'auto') } as any),
  };
  
  return optimizedProps;
}
