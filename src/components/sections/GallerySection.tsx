"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 🔥 CARREGAMENTO DINÂMICO: Títulos e descrições baseados no nome do arquivo
const imageDescriptions: Record<string, { title: string; description: string; alt: string }> = {
  // 🚨 FOTOS ATUALIZADAS - Todas as 11 imagens na pasta:
  'imagem_ladind_page (2)': { 
    title: 'Qualidade Excepcional', 
    description: 'Padrão de excelência em cada detalhe',
    alt: 'Demonstração da qualidade excepcional TC Shine'
  },
  'imagem_ladind_page (5)': { 
    title: 'Resultado Impecável', 
    description: 'Satisfação garantida em todos os serviços',
    alt: 'Resultado impecável da limpeza TC Shine'
  },
  'imagem_ladind_page (8)': { 
    title: 'Higienização Completa', 
    description: 'Ambiente totalmente higienizado e seguro',
    alt: 'Higienização completa realizada pela TC Shine'
  },
  'imagem_ladind_page (10)': { 
    title: 'Padrão Profissional', 
    description: 'Limpeza com padrão profissional de qualidade',
    alt: 'Padrão profissional de limpeza TC Shine'
  },
  'imagem_ladind_page (47)': { 
    title: 'Ambiente Renovado', 
    description: 'Renovação completa do ambiente',
    alt: 'Ambiente renovado após limpeza profissional TC Shine'
  },
  'imagem_ladind_page (48)': { 
    title: 'Limpeza Especializada', 
    description: 'Técnicas especializadas de limpeza',
    alt: 'Limpeza especializada realizada pela TC Shine'
  },
  'imagem_ladind_page (51)': { 
    title: 'Cuidado Premium', 
    description: 'Cuidado premium em cada detalhe',
    alt: 'Cuidado premium demonstrado pela TC Shine'
  },
  'imagem_ladind_page (52)': { 
    title: 'Resultado Profissional', 
    description: 'Resultado profissional garantido',
    alt: 'Resultado profissional da limpeza TC Shine'
  },
  'imagem_ladind_page (55)': { 
    title: 'Perfeição em Limpeza', 
    description: 'A perfeição que você merece',
    alt: 'Perfeição em limpeza demonstrada pela TC Shine'
  },
  'imagem_lading_page (1)': { 
    title: 'Excelência Comprovada', 
    description: 'Excelência comprovada em cada projeto',
    alt: 'Excelência comprovada dos serviços TC Shine'
  },
  'imagem_lading_page (3)': { 
    title: 'Satisfação Total', 
    description: 'Satisfação total dos nossos clientes',
    alt: 'Satisfação total demonstrada pelos clientes TC Shine'
  },
  
  // Exemplos baseados em nomes comuns de arquivos
  'antes-depois': { 
    title: 'Transformação Completa', 
    description: 'Antes e depois do nosso serviço profissional',
    alt: 'Comparação antes e depois da limpeza profissional'
  },
  'cozinha': { 
    title: 'Cozinha Impecável', 
    description: 'Cozinha higienizada e organizada',
    alt: 'Cozinha após limpeza profissional - Bancadas e eletrodomésticos limpos'
  },
  'banheiro': { 
    title: 'Banheiro Profissional', 
    description: 'Banheiro higienizado e desinfetado',
    alt: 'Banheiro após limpeza profissional - Azulejos e louças brilhando'
  },
  'sala': { 
    title: 'Sala de Estar', 
    description: 'Ambiente aconchegante e limpo',
    alt: 'Sala de estar após limpeza - Móveis e piso limpos'
  },
  'quarto': { 
    title: 'Quarto Organizado', 
    description: 'Quarto limpo e arejado',
    alt: 'Quarto após limpeza profissional - Organizado e limpo'
  },
  'escritorio': { 
    title: 'Escritório Profissional', 
    description: 'Ambiente de trabalho limpo e organizado',
    alt: 'Escritório após limpeza profissional'
  },
  'varanda': { 
    title: 'Área Externa', 
    description: 'Espaços externos higienizados',
    alt: 'Área externa após limpeza - Varanda ou quintal limpo'
  },
  'casa': { 
    title: 'Casa Completa', 
    description: 'Resultado impecável em limpeza residencial',
    alt: 'Limpeza residencial profissional - Casa limpa após serviço'
  },
  'apartamento': { 
    title: 'Apartamento Limpo', 
    description: 'Apartamento higienizado completamente',
    alt: 'Apartamento após limpeza profissional completa'
  },
  'comercial': { 
    title: 'Limpeza Comercial', 
    description: 'Ambiente comercial profissionalmente limpo',
    alt: 'Espaço comercial após limpeza profissional'
  }
}

// 🔥 FUNÇÃO PARA GERAR METADADOS INTELIGENTES
const getImageMetadata = (filename: string, index: number) => {
  const nameWithoutExt = filename.toLowerCase().replace(/\.(jpg|jpeg|png|webp)$/i, '')
  
  // Busca por palavras-chave no nome do arquivo
  for (const [key, metadata] of Object.entries(imageDescriptions)) {
    if (nameWithoutExt.includes(key)) {
      return {
        id: index + 1,
        src: `/images/gallery/${filename}`,
        title: metadata.title,
        description: metadata.description,
        alt: metadata.alt
      }
    }
  }
  
  // Fallback genérico baseado no índice
  const fallbackTitles = [
    'Limpeza Residencial Completa',
    'Cozinha Profissionalmente Limpa', 
    'Banheiro Impecável',
    'Sala de Estar Limpa',
    'Quarto Organizado',
    'Área Externa Limpa',
    'Escritório Profissional',
    'Casa Completa',
    'Apartamento Limpo',
    'Ambiente Comercial'
  ]
  
  const fallbackDescriptions = [
    'Resultado impecável em limpeza residencial',
    'Cozinha higienizada e organizada',
    'Banheiro higienizado e desinfetado', 
    'Ambiente aconchegante e limpo',
    'Quarto limpo e arejado',
    'Espaços externos higienizados',
    'Ambiente de trabalho organizado',
    'Casa completamente higienizada',
    'Apartamento limpo e arejado',
    'Espaço comercial profissional'
  ]
  
  return {
    id: index + 1,
    src: `/images/gallery/${filename}`,
    title: fallbackTitles[index % fallbackTitles.length],
    description: fallbackDescriptions[index % fallbackDescriptions.length],
    alt: `Trabalho de limpeza profissional ${index + 1} - ${filename}`
  }
}

// 🔥 CARREGAMENTO DINÂMICO DAS IMAGENS
const loadGalleryImages = () => {
  // 🚨 TODAS AS 11 FOTOS REAIS NA PASTA - Lista atualizada:
  const realImages = [
    'imagem_ladind_page (2).JPG',
    'imagem_ladind_page (5).jpg',
    'imagem_ladind_page (8).JPG',
    'imagem_ladind_page (10).JPG',
    'imagem_ladind_page (47).jpg',
    'imagem_ladind_page (48).jpg',
    'imagem_ladind_page (51).jpg',
    'imagem_ladind_page (52).jpg',
    'imagem_ladind_page (55).jpg',
    'imagem_lading_page (1).jpg',
    'imagem_lading_page (3).jpg'
  ]
  
  // Fallback para nomes comuns caso as fotos sejam renomeadas
  const commonNames = [
    'foto-1.jpg', 'foto-2.jpg', 'foto-3.jpg', 'foto-4.jpg', 'foto-5.jpg', 'foto-6.jpg',
    'foto-7.jpg', 'foto-8.jpg', 'foto-9.jpg', 'foto-10.jpg',
    'image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg',
    'cozinha.jpg', 'banheiro.jpg', 'sala.jpg', 'quarto.jpg', 'varanda.jpg',
    'antes-depois.jpg', 'casa.jpg', 'apartamento.jpg', 'comercial.jpg', 'escritorio.jpg'
  ]
  
  // Usar apenas as fotos reais primeiro
  const allPotentialImages = [...realImages, ...commonNames]
  
  return allPotentialImages.map((filename, index) => getImageMetadata(filename, index))
}

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [galleryImages, setGalleryImages] = useState<Array<{
    id: number;
    src: string;
    title: string;
    description: string;
    alt: string;
  }>>([])
  const [availableImages, setAvailableImages] = useState<Array<{
    id: number;
    src: string;
    title: string;
    description: string;
    alt: string;
  }>>([])

  // 🔥 CARREGAMENTO DINÂMICO: Detectar imagens disponíveis
  useEffect(() => {
    const detectAvailableImages = async () => {
      const potentialImages = loadGalleryImages()
      const validImages: typeof potentialImages = []
      
      // Testar cada imagem para ver se existe
      for (const imageData of potentialImages) {
        try {
          await new Promise<void>((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => reject()
            img.src = imageData.src
          })
          validImages.push(imageData)
        } catch {
          // Imagem não existe, pular
          continue
        }
      }
      
      // Se não encontrou nenhuma imagem, usar placeholders
      if (validImages.length === 0) {
        const placeholders = [
          {
            id: 1,
            src: '/placeholder.svg',
            title: 'Adicione suas Fotos',
            description: 'Cole suas fotos na pasta public/images/gallery/',
            alt: 'Placeholder para galeria de fotos'
          }
        ]
        setGalleryImages(placeholders)
        setAvailableImages(placeholders)
      } else {
        setGalleryImages(validImages)
        setAvailableImages(validImages)
      }
    }
    
    detectAvailableImages()
  }, [])

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (galleryImages.length <= 1) return
    
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [galleryImages.length])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  }
  
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }
  
  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      }
    })
    setIsImageLoading(true)
  }
  
  const handleImageLoad = () => {
    setIsImageLoading(false)
  }
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    // Fallback para placeholder se a imagem não carregar
    target.src = '/placeholder.svg'
    setIsImageLoading(false)
  }

  // Não renderizar se não há imagens
  if (galleryImages.length === 0) {
    return (
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-tc-neutral-200 rounded-lg w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-tc-neutral-200 rounded-lg w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-12 xs:py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#ffffff' }}>
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
            Nossos Trabalhos Realizados
          </h2>
          <p className="font-secondary text-sm xs:text-base sm:text-lg text-tc-text-600 max-w-3xl mx-auto">
            Veja a qualidade e excelência dos nossos serviços através de 
            fotos reais dos nossos trabalhos de limpeza profissional.
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
                  scale: { duration: 0.3 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full h-full">
                  {/* Loading Skeleton */}
                  {isImageLoading && (
                    <div className="absolute inset-0 bg-tc-neutral-200 animate-pulse rounded-2xl flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3">
                        <svg className="w-12 h-12 text-tc-text-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-secondary text-tc-text-500 text-sm">Carregando imagem...</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Main Image */}
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].alt}
                    className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
                      isImageLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                  />
                  
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
            aria-label="Ver foto anterior"
            type="button"
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-2 xs:right-4 top-1/2 transform -translate-y-1/2 min-w-touch min-h-touch w-10 h-10 xs:w-12 xs:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-tc-primary-600 hover:text-tc-primary-700 hover:bg-white hover:shadow-xl transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2"
            onClick={() => paginate(1)}
            aria-label="Ver próxima foto"
            type="button"
          >
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator - MOBILE FIRST: Tamanho adequado para touch e melhor contraste */}
          <div className="flex justify-center mt-6 xs:mt-8 gap-3 xs:gap-4" role="tablist" aria-label="Navegação de galeria">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`relative min-w-[44px] min-h-[44px] p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tc-primary-500 focus:ring-offset-2 ${
                  index === currentIndex 
                    ? 'bg-tc-primary-100' 
                    : 'hover:bg-tc-neutral-100'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                aria-label={`Ver foto ${index + 1} de ${galleryImages.length}`}
                aria-selected={index === currentIndex}
                role="tab"
                type="button"
              >
                <span 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 xs:w-4 xs:h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'scale-110 shadow-md' 
                      : 'scale-100'
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex ? '#1c1c1c' : '#94a3b8',
                  }}
                  aria-hidden="true"
                />
              </button>
            ))}
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
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1c1c1c' }}>
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
            <span className="font-secondary font-medium text-xs xs:text-sm sm:text-base">Fotos Reais dos Trabalhos</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1c1c1c' }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-secondary font-medium text-xs xs:text-sm sm:text-base">Resultados Comprovados</span>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#1c1c1c' }}>
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-secondary font-medium text-xs xs:text-sm sm:text-base">Padrão de Excelência</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
