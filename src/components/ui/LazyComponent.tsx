import React, { Suspense } from 'react';

interface LazyComponentProps {
  fallback?: React.ComponentType;
  children?: React.ReactNode;
}

// Componente para intersection observer lazy loading
interface IntersectionLazyProps extends LazyComponentProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

export const IntersectionLazy: React.FC<IntersectionLazyProps> = ({
  children,
  fallback: Fallback = () => <div className="h-32" />,
  rootMargin = '50px',
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [wasVisible, setWasVisible] = React.useState(false);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible) {
          setIsVisible(true);
          setWasVisible(true);
        }
      },
      { rootMargin, threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [rootMargin, threshold, wasVisible]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : <Fallback />}
    </div>
  );
};

export default IntersectionLazy;
