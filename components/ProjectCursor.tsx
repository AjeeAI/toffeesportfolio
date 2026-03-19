'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function ProjectCursor() {
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // 1. High-performance motion values (bypasses React state re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Add spring physics for a smooth, high-end trailing effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values directly (adding +20 offset so it floats bottom-right)
      cursorX.set(e.clientX + 20);
      cursorY.set(e.clientY + 20);
      
      const target = e.target as HTMLElement;
      const projectCard = target.closest('[data-cursor-text]');
      
      if (projectCard) {
        setCursorText(projectCard.getAttribute('data-cursor-text') || '');
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    // 3. Swapped to motion.div and applied the spring styles and animations
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-50 px-4 py-2 rounded-full bg-surfaceHighest/90 backdrop-blur-md text-onSurface text-label-md shadow-ambient border border-primary/20"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8 
      }}
      transition={{ duration: 0.2 }}
    >
      {cursorText}
    </motion.div>
  );
}