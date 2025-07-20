import { useEffect } from 'react';

// 📊 MONITORAMENTO BÁSICO DE PERFORMANCE - TC SHINE CLEANING

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Função para calcular rating baseado nos valores
const getRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  switch (name) {
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'FID':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    default:
      return 'good';
  }
};

// Função para enviar métricas
const logMetric = (metric: PerformanceMetric) => {
  console.log(`🚀 Performance - ${metric.name}:`, {
    value: metric.value,
    rating: metric.rating
  });
};

// Componente para monitoramento básico
const WebVitalsMonitor = () => {
  useEffect(() => {
    const measureBasicMetrics = () => {
      if (typeof window === 'undefined') return;

      // Usar Performance API nativa
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            const metric: PerformanceMetric = {
              name: 'FCP',
              value: entry.startTime,
              rating: getRating('FCP', entry.startTime)
            };
            logMetric(metric);
          }
        }
      });

      observer.observe({ entryTypes: ['paint'] });

      // Cleanup
      return () => observer.disconnect();
    };

    measureBasicMetrics();
  }, []);

  return null;
};

export default WebVitalsMonitor;
