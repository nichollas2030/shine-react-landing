"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  useContactContent,
  useCompanyInfo,
  openWhatsApp,
} from "@/lib/useContent";

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message?: string;
}

export default function ContactForm() {
  // 🎯 CONTEÚDO DINÂMICO - Centralizado em /lib/content.ts
  const contactContent = useContactContent();
  const companyInfo = useCompanyInfo();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = contactContent.errorMessages.name;
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = contactContent.errorMessages.email;
    }

    if (!formData.service) {
      newErrors.service = contactContent.errorMessages.service;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create WhatsApp message
      const message = `
${contactContent.whatsappTemplate.header}

${contactContent.whatsappTemplate.fields.name} ${formData.name}
${contactContent.whatsappTemplate.fields.email} ${formData.email}
${contactContent.whatsappTemplate.fields.service} ${formData.service}
${
  formData.message
    ? `${contactContent.whatsappTemplate.fields.message} ${formData.message}`
    : ""
}

${contactContent.whatsappTemplate.footer}
      `.trim();

      // Open WhatsApp with the message
      window.open(
        `https://wa.me/15615231300?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      // Reset form
      setFormData({ name: "", email: "", service: "", message: "" });
      setErrors({});

      console.log(contactContent.loadingStates.success);
    } catch (error) {
      console.error(contactContent.loadingStates.error, error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSmsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Create SMS message
      const message = `
${contactContent.whatsappTemplate.header}

${contactContent.whatsappTemplate.fields.name} ${formData.name}
${contactContent.whatsappTemplate.fields.email} ${formData.email}
${contactContent.whatsappTemplate.fields.service} ${formData.service}
${
  formData.message
    ? `${contactContent.whatsappTemplate.fields.message} ${formData.message}`
    : ""
}

${contactContent.whatsappTemplate.footer}
      `.trim();

      // Open SMS with the message
      window.open(
        `sms:+15615231300?body=${encodeURIComponent(message)}`,
        "_blank"
      );

      // Reset form
      setFormData({ name: "", email: "", service: "", message: "" });
      setErrors({});

      console.log(contactContent.loadingStates.success);
    } catch (error) {
      console.error(contactContent.loadingStates.error, error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-tc-text-900 text-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 sm:gap-16 items-center">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4">
              {contactContent.sectionTitle}
            </h2>
            <p className="font-secondary text-sm xs:text-base sm:text-lg text-white/80 mb-6 xs:mb-8">
              {contactContent.sectionDescription}
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 xs:space-y-6"
              noValidate
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="font-secondary block text-xs xs:text-sm font-medium mb-2"
                >
                  {contactContent.formLabels.name}
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base rounded-lg bg-tc-text-800 border border-tc-text-700 text-white placeholder-tc-text-400 focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300 min-h-touch"
                  placeholder={contactContent.formPlaceholders.name}
                />
                {errors.name && (
                  <p className="font-secondary text-red-400 text-xs xs:text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="font-secondary block text-xs xs:text-sm font-medium mb-2"
                >
                  {contactContent.formLabels.email}
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white placeholder-tc-neutral-400 focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300 min-h-touch"
                  placeholder={contactContent.formPlaceholders.email}
                />
                {errors.email && (
                  <p className="font-secondary text-red-400 text-xs xs:text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label
                  htmlFor="service"
                  className="font-secondary block text-xs xs:text-sm font-medium mb-2"
                >
                  {contactContent.formLabels.service}
                </label>
                <select
                  name="service"
                  id="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300 min-h-touch"
                >
                  <option value="">
                    {contactContent.formPlaceholders.service}
                  </option>
                  {contactContent.serviceOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="font-secondary text-red-400 text-xs xs:text-sm mt-1">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="font-secondary block text-xs xs:text-sm font-medium mb-2"
                >
                  {contactContent.formLabels.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base rounded-lg bg-tc-neutral-800 border border-tc-neutral-700 text-white placeholder-tc-neutral-400 focus:border-tc-primary-400 focus:ring-1 focus:ring-tc-primary-400 focus:outline-none transition-colors duration-300 resize-vertical min-h-24"
                  placeholder={contactContent.formPlaceholders.message}
                />
                {errors.message && (
                  <p className="font-secondary text-red-400 text-xs xs:text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  type="submit"
                  variant="whatsapp"
                  size="full"
                  disabled={isSubmitting}
                  className="justify-center min-h-touch text-sm xs:text-base flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 xs:h-5 xs:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {contactContent.loadingStates.submitting}
                    </>
                  ) : (
                    contactContent.formLabels.submit
                  )}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  size="full"
                  disabled={isSubmitting}
                  onClick={handleSmsSubmit}
                  className="justify-center min-h-touch text-sm xs:text-base flex-1 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 xs:h-5 xs:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send SMS"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 xs:space-y-8"
          >
            {/* Service Areas */}
            <div className="bg-tc-neutral-800 rounded-xl p-4 xs:p-6 sm:p-8 border border-tc-neutral-700">
              <h3 className="font-heading text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 flex items-center gap-2 xs:gap-3">
                <svg
                  className="w-5 h-5 xs:w-6 xs:h-6 text-tc-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {contactContent.serviceAreas.title}
              </h3>
              <p className="text-tc-neutral-400 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">
                {contactContent.serviceAreas.description}
              </p>
              <div className="grid grid-cols-2 gap-1 xs:gap-2 text-xs xs:text-sm text-tc-neutral-300">
                {contactContent.serviceAreas.areas.map((area, index) => (
                  <div key={index}>• {area}</div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-tc-neutral-800 rounded-xl p-4 xs:p-6 sm:p-8 border border-tc-neutral-700">
              <h3 className="font-heading text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 flex items-center gap-2 xs:gap-3">
                <svg
                  className="w-5 h-5 xs:w-6 xs:h-6 text-tc-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {contactContent.businessHours.title}
              </h3>
              <div className="space-y-1 xs:space-y-2 text-tc-neutral-300 text-xs xs:text-sm sm:text-base">
                {contactContent.businessHours.schedule.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
