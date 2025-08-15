import React from "react";
import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "@/lib/content";

const AboutSection = () => {
  return (
    <section className="py-16 xs:py-20 sm:py-24 lg:py-28 bg-tc-background-50">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 xs:mb-16"
        >
          <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-tc-text-900 mb-3 xs:mb-4">
            {ABOUT_CONTENT.sectionTitle}
          </h2>
          <p className="font-secondary text-sm xs:text-base sm:text-lg text-tc-text-600 max-w-3xl mx-auto">
            {ABOUT_CONTENT.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-justify font-secondary font-normal">
              {ABOUT_CONTENT.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
