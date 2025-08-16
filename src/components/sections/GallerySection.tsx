"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGalleryContent } from "@/lib/useContent";
import { useOptimizedImageProps } from "@/hooks/useOptimizedImage";

// � LIGHTHOUSE OPTIMIZATION: Função para gerar srcset responsivo
const generateSrcSet = (imageSrc: string) => {
  const basePath = imageSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  const extension = imageSrc.match(/\.(jpg|jpeg|png|webp)$/i)?.[1] || 'jpg';
  
  // Para otimização futura com diferentes tamanhos
  return `${imageSrc} 1x, ${imageSrc} 2x`;
};

// �🔥 FUNÇÃO PARA GERAR METADADOS INTELIGENTES
const getImageMetadata = (
  filename: string,
  index: number,
  galleryContent: any
) => {
  const nameWithoutExt = filename
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp)$/i, "");

  // Busca por palavras-chave no nome do arquivo
  for (const [key, metadata] of Object.entries(
    galleryContent.imageDescriptions
  )) {
    if (nameWithoutExt.includes(key)) {
      return {
        id: index + 1,
        src: `/images/gallery/${filename}`,
        title: (metadata as any).title,
        description: (metadata as any).description,
        alt: (metadata as any).alt,
      };
    }
  }

  // Fallback genérico baseado no índice
  const fallbackTitles = galleryContent.fallbackTitles;
  const fallbackDescriptions = galleryContent.fallbackDescriptions;

  return {
    id: index + 1,
    src: `/images/gallery/${filename}`,
    title: fallbackTitles[index % fallbackTitles.length],
    description: fallbackDescriptions[index % fallbackDescriptions.length],
    alt: `Trabalho de limpeza profissional ${index + 1} - ${filename}`,
  };
};

// 🔥 CARREGAMENTO DINÂMICO DAS IMAGENS
const loadGalleryImages = (galleryContent: any) => {
  // 🚨 TODAS AS 16 FOTOS REAIS NA PASTA - Lista atualizada:
  const realImages = [
    "imagem_lading_page (1).jpg",
    "imagem_ladind_page (2).JPG",
    "imagem_ladind_page (3).jpg",
    "imagem_ladind_page (4).jpg",
    "imagem_ladind_page (5).jpg",
    "imagem_ladind_page (6).jpg",
    "imagem_ladind_page (7).jpg",
    "imagem_ladind_page (8).JPG",
    "imagem_ladind_page (9).jpg",
    "imagem_ladind_page (10).JPG",
    "imagem_ladind_page (11).jpg",
    "imagem_ladind_page (12).jpg",
    "imagem_ladind_page (13).jpg",
    "imagem_ladind_page (14).jpg",
    "imagem_ladind_page (15).jpg",
    "imagem_ladind_page (16).jpg",
  ];

  // 🚨 USAR APENAS AS 16 FOTOS REAIS - Sem fallbacks que não existem
  return realImages.map((filename, index) =>
    getImageMetadata(filename, index, galleryContent)
  );
};

export default function GallerySection() {
  // 🎯 CONTEÚDO DINÂMICO - Centralizado em /lib/content.ts
  const galleryContent = useGalleryContent();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState<
    Array<{
      id: number;
      src: string;
      title: string;
      description: string;
      alt: string;
    }>
  >([]);

  // 🚀 LIGHTHOUSE OPTIMIZATION: Props otimizadas para imagens
  const firstImageProps = useOptimizedImageProps(true, 'high'); // Primeira imagem com prioridade alta
  const lazyImageProps = useOptimizedImageProps(false, 'low'); // Demais com lazy loading

  // 🚀 LIGHTHOUSE OPTIMIZATION: Intersection Observer para lazy loading inteligente
  const [isVisible, setIsVisible] = useState(true); // Iniciando como true para garantir carregamento
  const galleryRef = React.useRef<HTMLDivElement>(null);

  // 🎯 NAVEGAÇÃO INTELIGENTE: Paginação de bolinhas para evitar overflow
  const maxVisibleDots = 8; // Máximo de bolinhas visíveis
  const getVisibleDotRange = () => {
    if (galleryImages.length <= maxVisibleDots) {
      return { start: 0, end: galleryImages.length };
    }
    
    const half = Math.floor(maxVisibleDots / 2);
    let start = Math.max(0, currentIndex - half);
    let end = Math.min(galleryImages.length, start + maxVisibleDots);
    
    // Ajustar se estamos no final
    if (end - start < maxVisibleDots) {
      start = Math.max(0, end - maxVisibleDots);
    }
    
    return { start, end };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const [availableImages, setAvailableImages] = useState<
    Array<{
      id: number;
      src: string;
      title: string;
      description: string;
      alt: string;
    }>
  >([]);

  // � Carregamento das imagens disponíveis
  useEffect(() => {
    const detectAvailableImages = async () => {
      const potentialImages = loadGalleryImages(galleryContent);
      
      // 🚀 SIMPLIFICADO: Usar todas as imagens definidas sem verificação assíncrona
      // A verificação de existência será feita pelo onError da tag img
      if (potentialImages.length > 0) {
        setGalleryImages(potentialImages);
        setAvailableImages(potentialImages);
      } else {
        // Fallback para placeholder apenas se não há imagens configuradas
        const placeholders = [
          {
            id: 1,
            src: "/placeholder.svg",
            title: galleryContent.loading.placeholder.title,
            description: galleryContent.loading.placeholder.description,
            alt: galleryContent.loading.placeholder.alt,
          },
        ];
        setGalleryImages(placeholders);
        setAvailableImages(placeholders);
      }
    };

    detectAvailableImages();
  }, [galleryContent]);  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (galleryImages.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1;
      }
    });
    setIsImageLoading(true);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    // Fallback para placeholder se a imagem não carregar
    target.src = "/placeholder.svg";
    setIsImageLoading(false);
  };

  // Não renderizar se não há imagens
  if (galleryImages.length === 0) {
    return (
      <section
        className="py-12 xs:py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-tc-neutral-200 rounded-lg w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-tc-neutral-200 rounded-lg w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={galleryRef}
      className="py-12 xs:py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 xs:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-tc-neutral-900 mb-3 xs:mb-4">
            {galleryContent.sectionTitle}
          </h2>
          <p className="font-secondary text-sm xs:text-base sm:text-lg text-tc-text-600 max-w-3xl mx-auto">
            {galleryContent.sectionDescription}
          </p>
        </motion.div>

        {/* Gallery Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-80 xs:h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] overflow-hidden rounded-2xl shadow-2xl bg-tc-neutral-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full h-full">
                  {/* Loading Skeleton */}
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-tc-neutral-200 animate-pulse rounded-2xl flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3">
                        <svg
                          className="w-12 h-12 text-tc-text-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-secondary text-tc-text-500 text-sm">
                          {galleryContent.loading.text}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Main Image */}
                  <img
                    src={isVisible ? galleryImages[currentIndex].src : ''}
                    srcSet={isVisible ? generateSrcSet(galleryImages[currentIndex].src) : ''}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                    alt={galleryImages[currentIndex].alt}
                    className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
                      isImageLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    {...(currentIndex === 0 ? firstImageProps : lazyImageProps)}
                  />

                  {/* Photo Counter */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-sm font-medium">
                    {currentIndex + 1} / {galleryImages.length}
                  </div>

                  {/* Image Overlay with Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 xs:p-6 rounded-b-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      <h3 className="font-heading text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2">
                        {galleryImages[currentIndex].title}
                      </h3>
                      <p className="font-secondary text-sm xs:text-base text-white/90">
                        {galleryImages[currentIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-2 xs:left-4 top-1/2 transform -translate-y-1/2 min-w-touch min-h-touch w-10 h-10 xs:w-12 xs:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-tc-primary-600 hover:text-tc-primary-700 hover:bg-white hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2"
            onClick={() => paginate(-1)}
            aria-label={galleryContent.navigation.previousLabel}
            type="button"
          >
            <svg
              className="w-5 h-5 xs:w-6 xs:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute right-2 xs:right-4 top-1/2 transform -translate-y-1/2 min-w-touch min-h-touch w-10 h-10 xs:w-12 xs:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-tc-primary-600 hover:text-tc-primary-700 hover:bg-white hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2"
            onClick={() => paginate(1)}
            aria-label={galleryContent.navigation.nextLabel}
            type="button"
          >
            <svg
              className="w-5 h-5 xs:w-6 xs:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator - MOBILE FIRST: Tamanho adequado para touch e melhor contraste */}
          <div
            className="flex justify-center mt-6 xs:mt-8 gap-1 xs:gap-2 sm:gap-3 px-2"
            role="tablist"
            aria-label={galleryContent.navigation.galleryLabel}
          >
            {/* Indicador de mais fotos à esquerda */}
            {getVisibleDotRange().start > 0 && (
              <div className="flex items-center mr-2">
                <span className="text-tc-text-400 text-sm">•••</span>
              </div>
            )}
            
            {galleryImages.slice(getVisibleDotRange().start, getVisibleDotRange().end).map((_, relativeIndex) => {
              const actualIndex = getVisibleDotRange().start + relativeIndex;
              return (
                <button
                  key={actualIndex}
                  className={`relative min-w-[32px] min-h-[32px] xs:min-w-[36px] xs:min-h-[36px] sm:min-w-[44px] sm:min-h-[44px] p-1 xs:p-1.5 sm:p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2 ${
                    actualIndex === currentIndex
                      ? "bg-tc-primary-100"
                      : "hover:bg-tc-neutral-100"
                  }`}
                  onClick={() => {
                    setDirection(actualIndex > currentIndex ? 1 : -1);
                    setCurrentIndex(actualIndex);
                  }}
                  aria-label={galleryContent.navigation.photoCounter
                    .replace("{current}", (actualIndex + 1).toString())
                    .replace("{total}", galleryImages.length.toString())}
                  aria-selected={actualIndex === currentIndex}
                  role="tab"
                  type="button"
                >
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      actualIndex === currentIndex ? "scale-110 shadow-md" : "scale-100"
                    }`}
                    style={{
                      backgroundColor:
                        actualIndex === currentIndex ? "#1c1c1c" : "#94a3b8",
                    }}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
            
            {/* Indicador de mais fotos à direita */}
            {getVisibleDotRange().end < galleryImages.length && (
              <div className="flex items-center ml-2">
                <span className="text-tc-text-400 text-sm">•••</span>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Stats */}
        <motion.div
          className="flex flex-col xs:flex-row flex-wrap justify-center items-center gap-4 xs:gap-6 sm:gap-8 mt-12 xs:mt-16 text-tc-text-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {galleryContent.stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              {stat.icon === "camera" && (
                <svg
                  className="w-5 h-5 xs:w-6 xs:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#1c1c1c" }}
                >
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              )}
              {stat.icon === "check" && (
                <svg
                  className="w-5 h-5 xs:w-6 xs:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#1c1c1c" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {stat.icon === "star" && (
                <svg
                  className="w-5 h-5 xs:w-6 xs:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#1c1c1c" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span className="font-secondary font-medium text-xs xs:text-sm sm:text-base">
                {stat.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
