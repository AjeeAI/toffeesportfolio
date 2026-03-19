'use client';

import { motion } from 'framer-motion';
import { useScrollspy } from '@/hooks/useScrollspy';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const activeSection = useScrollspy(navLinks.map(link => link.id));

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md flex justify-between items-center py-6 px-6 md:px-24 border-b border-surfaceHighest"
    >
      <div className="font-bold text-title-lg tracking-tight text-onSurface">Deborah Ojo</div>
      
      <ul className="hidden md:flex gap-8 text-body-lg text-gray-400">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`}
              className={`cursor-pointer transition-colors duration-300 pb-1 ${
                activeSection === link.id 
                  ? 'text-primary border-b border-primary' 
                  : 'hover:text-onSurface' 
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      
      <a href="#contact" className="bg-surfaceHighest text-primary px-6 py-2 rounded text-sm font-medium hover:bg-surfaceLow border border-primary/20 transition-colors shadow-ambient">
        Hire Me
      </a>
    </motion.nav>
  );
}