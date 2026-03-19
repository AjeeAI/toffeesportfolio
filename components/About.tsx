'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';

export default function About() {
  return (
    <motion.section 
      id="about" 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="scroll-mt-32 py-32 px-6 md:px-24 flex flex-col md:flex-row gap-16 border-t border-surfaceHighest"
    >
      <motion.div variants={fadeInLeft} className="w-full md:w-1/2 relative" data-cursor-text="Based in Ife">
        {/* FIX APPLIED HERE: 
          Added 'md:' before grayscale and hover:grayscale-0 
          So on mobile it stays colored, but on desktop it has the hover effect!
        */}
        <div className="aspect-[4/5] bg-surfaceHighest relative md:grayscale md:hover:grayscale-0 transition-all duration-700 rounded-lg overflow-hidden shadow-ambient">
          <Image src="/deborah.jpg" alt="Deborah Ojo" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          <div className="absolute bottom-6 right-6 bg-surfaceLow/80 backdrop-blur-md p-6 rounded text-center border border-primary/20 shadow-ambient">
            <span className="block text-headline-lg font-serif italic text-primary">08+</span>
            <span className="text-label-md text-onSurface mt-1 block">Years Design</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={fadeInRight} className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-display-lg font-serif mb-8 text-onSurface leading-tight">
          Crafting Digital<br/><span className="text-primary italic">Narratives.</span>
        </h2>
        <p className="text-body-lg text-gray-400 leading-relaxed mb-6">
          My approach is rooted in the belief that every brand has a soul. I don't just build websites; I curate digital environments that evoke emotion and drive purpose.
        </p>
        <p className="text-body-lg text-gray-400 leading-relaxed mb-10">
          By leveraging high-end typography and intentional asymmetry, I ensure your digital presence feels as bespoke as a tailor-made suit. Minimalist, functional, yet undeniably impactful.
        </p>
        <div className="flex flex-wrap gap-3">
          {['Creative Direction', 'UI/UX Strategy', 'No-Code Dev'].map((tag) => (
            <span key={tag} className="text-label-md border border-surfaceHighest rounded-full px-5 py-3 text-primary bg-surfaceLow shadow-ambient">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}