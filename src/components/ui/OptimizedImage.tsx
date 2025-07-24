import React, { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  quality?: number;
}

// 🚀 LIGHTHOUSE OPTIMIZATION: Componente de imagem otimizada
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  placeholder = 'empty',
  quality = 85,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  // 🚀 LIGHTHOUSE: Gerar srcset para diferentes resoluções
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('placeholder.svg')) return baseSrc;
    
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');
    
    return [
      `${baseName}-480w.${ext} 480w`,
      `${baseName}-768w.${ext} 768w`,
      `${baseName}-1024w.${ext} 1024w`,
      `${baseName}-1280w.${ext} 1280w`,
      `${baseName}-1920w.${ext} 1920w`,
    ].join(', ');
  };

  // 🚀 LIGHTHOUSE: Classes para loading state
  const imageClasses = [
    className,
    'transition-opacity duration-300',
    isLoaded ? 'opacity-100' : 'opacity-0',
    placeholder === 'blur' && !isLoaded ? 'blur-sm' : '',
  ].filter(Boolean).join(' ');

  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500`}
        style={{ width, height }}
      >
        <span className="text-sm">Imagem não disponível</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* 🚀 LIGHTHOUSE: Placeholder durante loading */}
      {!isLoaded && placeholder === 'blur' && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse`}
          style={{ width, height }}
        />
      )}
      
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // 🚀 LIGHTHOUSE: Otimizações de performance
        fetchPriority={priority ? 'high' : 'auto'}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
};

export default OptimizedImage;
