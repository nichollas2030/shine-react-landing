import React, { Suspense, lazy } from 'react';

// 🚀 LAZY LOADING OTIMIZADO - Componentes carregados sob demanda

// Lazy load dos componentes pesados
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const ServicesGrid = lazy(() => import('@/components/sections/ServicesGrid'));
const ContactForm = lazy(() => import('@/components/sections/ContactForm'));

// Loading fallback otimizado
const SectionSkeleton = ({ height = "400px" }: { height?: string }) => (
  <div className="animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg" style={{ height }}>
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-500 text-sm">Carregando...</div>
    </div>
  </div>
);

// Wrapper para lazy loading com error boundary
interface LazyWrapperProps {
  children: React.ReactNode;
  fallbackHeight?: string;
  errorFallback?: React.ReactNode;
}

const LazyWrapper = ({ children, fallbackHeight = "400px", errorFallback }: LazyWrapperProps) => {
  return (
    <Suspense 
      fallback={<SectionSkeleton height={fallbackHeight} />}
    >
      {children}
    </Suspense>
  );
};

// Componentes exportados com lazy loading
export const LazyTestimonialsSection = () => (
  <LazyWrapper fallbackHeight="500px">
    <TestimonialsSection />
  </LazyWrapper>
);

export const LazyServicesGrid = () => (
  <LazyWrapper fallbackHeight="600px">
    <ServicesGrid />
  </LazyWrapper>
);

export const LazyContactForm = () => (
  <LazyWrapper fallbackHeight="400px">
    <ContactForm />
  </LazyWrapper>
);

export default LazyWrapper;
