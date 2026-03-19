'use client'; // 👈 Required for framer-motion

import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportSettings } from '@/lib/animations';

const projects = [
  { id: 1, title: 'Fragrancerie', industry: 'E-Commerce', image: '/fragrance.png' },
  { id: 2, title: 'Melina', industry: 'Editorial', image: '/melina.png' },
  { id: 3, title: 'Camshot', industry: 'Product Landing', image: '/camshot.png' },
];

export default function SelectedWorks() {
  return (
    // 1. Convert to motion.section to stagger the children when scrolled into view
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="bg-surfaceLow py-32 px-6 md:px-24"
    >
      {/* 2. Animate the header */}
      <motion.div variants={fadeInUp} className="flex justify-between items-end mb-24">
        <h2 className="text-display-lg font-serif italic text-onSurface">
          Selected <span className="text-primary font-light">Works</span>
        </h2>
        <span className="text-label-md text-primary">2023 — Present</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-32">
        
        {/* Project 1 - FRAGRANCERIE */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-7 group relative cursor-pointer" data-cursor-text="View Case Study">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-surfaceHighest shadow-ambient">
             <Image src={projects[0].image} alt={projects[0].title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="absolute -bottom-8 left-8 z-10 drop-shadow-lg">
            <span className="text-label-md text-primary mb-2 block">{projects[0].industry}</span>
            <h3 className="text-headline-lg font-serif text-onSurface group-hover:italic transition-all duration-300">
              {projects[0].title}
            </h3>
          </div>
        </motion.div>

        {/* Project 2 - MELINA */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-4 md:col-start-9 group relative cursor-pointer mt-12 md:mt-48" data-cursor-text="View Case Study">
           <div className="relative aspect-square rounded-lg overflow-hidden bg-surfaceHighest shadow-ambient">
             <Image src={projects[1].image} alt={projects[1].title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="absolute -bottom-8 left-8 z-10 drop-shadow-lg">
            <span className="text-label-md text-primary mb-2 block">{projects[1].industry}</span>
            <h3 className="text-headline-lg font-serif text-onSurface group-hover:italic transition-all duration-300">
              {projects[1].title}
            </h3>
          </div>
        </motion.div>

        {/* Project 3 - CAMSHOT */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-10 md:col-start-2 group relative cursor-pointer mt-12" data-cursor-text="View Case Study">
           <div className="relative aspect-video rounded-lg overflow-hidden bg-surfaceHighest shadow-ambient">
             <Image src={projects[2].image} alt={projects[2].title} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="absolute -bottom-8 left-8 z-10 drop-shadow-lg">
            <span className="text-label-md text-primary mb-2 block">{projects[2].industry}</span>
            <h3 className="text-headline-lg font-serif text-onSurface group-hover:italic transition-all duration-300">
              {projects[2].title}
            </h3>
          </div>
        </motion.div>

        {/* Glass CTA */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-12 mt-16 p-12 md:p-20 rounded-lg bg-surfaceHighest/60 backdrop-blur-[20px] shadow-ambient border border-primary/15 flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-display-lg font-serif text-primary leading-tight">
              Your project could<br/>be the next masterpiece.
            </h3>
            <button className="mt-8 md:mt-0 px-8 py-4 rounded-md bg-button-gradient text-white font-medium hover:opacity-90 transition-opacity shadow-ambient">
              View All Projects ↗
            </button>
        </motion.div>
      </div>
    </motion.section>
  );
}