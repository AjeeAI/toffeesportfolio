import { Variants } from 'framer-motion';

// "as const" tells TypeScript this is strictly a tuple of 4 exact numbers, not a generic array!
const customEase = [0.16, 1, 0.3, 1] as const; 

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: customEase } 
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: customEase } 
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 1, ease: customEase } 
  },
};

// Reusable viewport settings
export const viewportSettings = { once: true, margin: "-100px" };