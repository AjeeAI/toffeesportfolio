'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Hero() {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      animate="show" 
      // relative and overflow-hidden ensures the gradient stays contained
      className="relative overflow-hidden pt-48 pb-32 px-6 md:px-24 flex flex-col items-start bg-background"
    >
      {/* 🔮 Background Glow/Gradient */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20 blur-[120px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)'
        }}
      />

      <div className="relative z-10 w-full">
        <motion.span variants={fadeInUp} className="text-label-md text-primary mb-6 block uppercase tracking-widest">
          Portfolio 2024
        </motion.span>
        
        <motion.h1 
          variants={fadeInUp} 
          className="text-[4.5rem] md:text-[8rem] font-serif font-light leading-[0.9] mb-12 text-onSurface"
        >
          I'M <span className="italic font-normal">DEBORAH</span><br/>OJO.
        </motion.h1>
        
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between w-full items-end gap-8">
          <p className="max-w-md text-body-lg text-gray-400 leading-relaxed">
            Seasoned Website Designer specializing in bespoke <span className="italic text-primary">no-code experiences</span> that bridge the gap between art and functionality.
          </p>
          
          <a 
            href="#contact" 
            className="group flex items-center gap-2 text-body-lg font-medium border-b border-surfaceHighest pb-1 hover:border-primary transition-colors text-onSurface"
          >
            Let's Collaborate 
            <span className="group-hover:translate-x-1 transition-transform text-primary">→</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}