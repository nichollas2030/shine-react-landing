"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button, WhatsAppButton } from '@/components/ui/button'
import { contactContent } from '@/components/content'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().email('Email inválido'),
  service: z.string().min(1, 'Selecione um serviço'),
  message: z.string().max(500, 'Máximo 500 caracteres').optional()
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create WhatsApp message
      const message = `
🏠 *Nova Solicitação de Orçamento - TC Shine Cleaning*

👤 *Nome:* ${data.name}
📧 *Email:* ${data.email}
🧹 *Serviço:* ${data.service}
${data.message ? `📝 *Detalhes:* ${data.message}` : ''}

_Enviado através do site tcshine.com_
      `.trim()
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/15615231300?text=${encodeURIComponent(message)}`, '_blank')
      
      // Reset form
      reset()
      
      // You could add a toast notification here
      console.log('Formulário enviado com sucesso!')
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-tc-neutral-900 text-white">
      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-responsive-h2 font-bold mb-4">
              {contactContent.title}
            </h2>
            <p className="text-lg text-tc-neutral-300 mb-8">
              {contactContent.subtitle}
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {contactContent.formLabels.name}
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white placeholder-tc-neutral-400 focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {contactContent.formLabels.email}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white placeholder-tc-neutral-400 focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  {contactContent.formLabels.service}
                </label>
                <select
                  {...register('service')}
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300"
                >
                  <option value="">Selecione um serviço...</option>
                  <option value="Limpeza Regular">Limpeza Regular (Semanal/Quinzenal)</option>
                  <option value="Limpeza Profunda">Limpeza Profunda</option>
                  <option value="Pós-Obra">Limpeza Pós-Obra</option>
                  <option value="Limpeza Airbnb">Limpeza para Airbnb</option>
                  <option value="Personalizada">Solução Personalizada</option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>
                )}
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {contactContent.formLabels.message}
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white placeholder-tc-neutral-400 focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Ex: Casa de 3 quartos, 2 banheiros. Preciso de limpeza quinzenal. Tenho pets em casa."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              {/* Submit Button */}
              <Button
                type="submit"
                variant="whatsapp"
                size="full"
                disabled={isSubmitting}
                className="justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  contactContent.formLabels.submit
                )}
              </Button>
            </form>
          </motion.div>
          
          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* WhatsApp Direct Contact */}
            <div className="bg-tc-neutral-800 rounded-xl p-8 border border-tc-neutral-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tc-whatsapp-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">Contato Direto</h3>
                  <p className="text-tc-neutral-400">Resposta imediata garantida</p>
                </div>
              </div>
              
              <p className="text-tc-neutral-300 mb-6">
                {contactContent.whatsappText}
              </p>
              
              <WhatsAppButton 
                size="lg" 
                className="w-full justify-center"
                message="Olá! Gostaria de solicitar um orçamento para limpeza residencial."
              >
                Chamar no WhatsApp
              </WhatsAppButton>
            </div>
            
            {/* Service Areas */}
            <div className="bg-tc-neutral-800 rounded-xl p-8 border border-tc-neutral-700">
              <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-tc-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Áreas de Atendimento
              </h3>
              <p className="text-tc-neutral-400 mb-4">
                Atendemos todo o sul da Flórida:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-tc-neutral-300">
                <div>• Miami</div>
                <div>• Miami Beach</div>
                <div>• Fort Lauderdale</div>
                <div>• Boca Raton</div>
                <div>• Coral Gables</div>
                <div>• Aventura</div>
                <div>• West Palm Beach</div>
                <div>• Hollywood</div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-tc-neutral-800 rounded-xl p-8 border border-tc-neutral-700">
              <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-tc-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horário de Atendimento
              </h3>
              <div className="space-y-2 text-tc-neutral-300">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>7:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Emergências 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}