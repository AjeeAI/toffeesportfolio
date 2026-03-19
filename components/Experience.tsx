'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, fadeInLeft, viewportSettings } from '@/lib/animations';

const experiences = [
  {
    year: '2024 — 2025',
    role: 'Lead Digital Curator',
    description: 'Leading design systems for high-growth tech startups, focusing on immersive storytelling through Webflow and Framer.',
    isActive: true,
  },
  {
    year: '2023',
    role: 'Senior UI Designer',
    description: 'Specialized in e-commerce luxury brands, optimizing conversion through high-end aesthetic interventions.',
    isActive: false,
  },
  {
    year: '2022',
    role: 'Independent Creative',
    description: 'Launched bespoke web experiences for boutique agencies and global fashion photographers.',
    isActive: false,
  }
];

export default function Experience() {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="py-32 px-6 md:px-24 flex flex-col items-center"
    >
      {/* Centered Editorial Header slides up */}
      <motion.h2 variants={fadeInUp} className="text-display-lg font-serif text-onSurface mb-24 text-center">
        The <span className="italic text-primary font-light">Trajectory</span>
      </motion.h2>

      {/* Timeline Container */}
      <div className="w-full max-w-3xl">
        {experiences.map((exp, index) => (
          // Each timeline node slides in from the left sequentially
          <motion.div 
            variants={fadeInLeft} 
            key={index} 
            className="relative pl-12 md:pl-20 pb-20 last:pb-0 group" 
            data-cursor-text={exp.role}
          >
            {/* The Vertical Line */}
            {/* It stops before the last item so the line doesn't trail off into nothing */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[5px] top-2 bottom-[-2rem] w-[1px] bg-surfaceHighest" />
            )}

            {/* The Timeline Node / Dot */}
            <div className={`absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 bg-background transition-colors duration-500 ${exp.isActive ? 'border-primary shadow-ambient' : 'border-surfaceHighest group-hover:border-primary/50'}`} />

            {/* Content */}
            <div className="flex flex-col gap-2">
              <span className="text-label-md text-primary">{exp.year}</span>
              <h3 className="text-headline-lg font-serif text-onSurface mt-2 mb-4 group-hover:italic transition-all duration-300">
                {exp.role}
              </h3>
              <p className="text-body-lg text-gray-400 leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}