'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportSettings } from '@/lib/animations';

const testimonials = [
  {
    quote: "Deborah's eye for detail is unmatched. She turned our complex vision into a seamless, high-end digital journey.",
    author: "SARAH J. — VOGUE STUDIO"
  },
  {
    quote: "The asymmetrical layout she designed for us broke the industry mold. Truly a digital curator.",
    author: "MARCUS L. — ZENITH TECH"
  },
  {
    quote: "Professional, intuitive, and remarkably talented. The best investment our brand has made this year.",
    author: "ELENA N. — FRAGRANCERIE"
  },
  {
    quote: "A rare talent who understands that white space is just as important as the content itself.",
    author: "DAVID K. — MINIMALIST CO."
  }
];

export default function Testimonials() {
  return (
    // 1. Convert to motion.section for the scrollspy wrapper
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="py-32 px-6 md:px-24 bg-surfaceLowest border-t border-surfaceHighest"
    >
      {/* 2. Animate the header */}
      <motion.h2 variants={fadeInUp} className="text-display-lg font-serif text-onSurface mb-24 text-center">
        Kind <span className="italic text-primary font-light">Words</span>
      </motion.h2>

      {/* Masonry Layout using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
        {testimonials.map((test, index) => (
          // 3. Animate each individual testimonial card
          <motion.div 
            variants={fadeInUp}
            key={index} 
            className="break-inside-avoid bg-surfaceLow p-10 md:p-12 rounded-lg border border-surfaceHighest/50 hover:border-primary/30 transition-colors shadow-ambient group"
            data-cursor-text="Client Review"
          >
            {/* The Purple Quotation Mark */}
            <span className="text-primary font-serif text-4xl leading-none block mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              "
            </span>
            <p className="text-title-lg text-onSurface font-serif italic leading-relaxed mb-10">
              {test.quote}
            </p>
            <p className="text-label-md text-gray-500 tracking-widest">
              {test.author}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}