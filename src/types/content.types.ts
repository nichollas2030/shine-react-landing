// TC Shine Cleaning Services - Content Types
export interface HeroContent {
  headline: string
  subheadline: string
  ctaText: string
  backgroundAlt: string
}

export interface ServiceContent {
  title: string
  description: string
  icon: string
  features: string[]
  pricing?: string
}

export interface TestimonialContent {
  quote: string
  author: string
  location: string
  rating: number
  date?: string
}

export interface ContactContent {
  title: string
  subtitle: string
  formLabels: {
    name: string
    email: string
    service: string
    message: string
    submit: string
  }
  whatsappText: string
}

export interface CompanyContent {
  name: string
  tagline: string
  phone: string
  whatsappNumber: string
  serviceAreas: string[]
  socialProof: {
    yearsExperience: number
    happyClients: number
    cleaningsCompleted: number
  }
}

export interface FeatureContent {
  title: string
  description: string
  icon: string
}