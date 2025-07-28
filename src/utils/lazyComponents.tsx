import { lazy, Suspense } from 'react';

// 🚀 LIGHTHOUSE FIX: Lazy loading agressivo para reduzir bundle inicial
export const LazyServicesGrid = lazy(() => 
  import('@/components/sections/ServicesGrid').then(module => ({
    default: module.default
  }))
);

export const LazyTestimonialsSection = lazy(() => 
  import('@/components/sections/TestimonialsSection').then(module => ({
    default: module.default
  }))
);

export const LazyContactForm = lazy(() => 
  import('@/components/sections/ContactForm').then(module => ({
    default: module.default
  }))
);

export const LazyWhatsAppFloat = lazy(() => 
  import('@/components/ui/WhatsAppFloat').then(module => ({
    default: module.default
  }))
);

export const LazyFooter = lazy(() => 
  import('@/components/layout/Footer').then(module => ({
    default: module.default
  }))
);

export const LazyGallerySection = lazy(() => 
  import('@/components/sections/GallerySection').then(module => ({
    default: module.default
  }))
);

// 🚀 LIGHTHOUSE FIX: Loading fallbacks otimizados
export const SectionSkeleton = () => (
  <div className="w-full h-96 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse rounded-lg" />
);

export const ComponentSkeleton = () => (
  <div className="w-full h-32 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse rounded-lg" />
);

// 🚀 LIGHTHOUSE FIX: Wrapper com Suspense otimizado
export const LazySection = ({ 
  children, 
  fallback = <SectionSkeleton /> 
}: { 
  children: React.ReactNode; 
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);
