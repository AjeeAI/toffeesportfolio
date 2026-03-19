'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, viewportSettings } from '@/lib/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); 
    setStatus('submitting');
    
    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ name: '', email: '', inquiry: '' }); 
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus('error');
    }
  }

  return (
    // 1. Wrapped the main section in motion.section and applied stagger & viewport settings
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportSettings}
      className="py-32 px-6 md:px-24 flex flex-col md:flex-row justify-between items-start gap-16 border-t border-surfaceHighest"
    >
      {/* 2. Left side slides in from the left */}
      <motion.div variants={fadeInLeft} className="w-full md:w-1/2">
        <h2 className="text-display-lg font-serif text-onSurface mb-4">
          Let's <br/><span className="italic text-primary">talk.</span>
        </h2>
        <p className="text-title-lg text-onSurface mt-8">deborahowix9@gmail.com</p>
        <p className="text-label-md text-primary mt-2">Available for new opportunities</p>
      </motion.div>

      {/* 3. Right side form box slides in from the right */}
      <motion.div variants={fadeInRight} className="w-full md:w-1/2 bg-surfaceLow p-8 md:p-12 rounded-lg shadow-ambient">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 relative">
            <label className="text-label-md text-primary">Your Name</label>
            <input 
              name="name"
              type="text" 
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-surfaceHighest py-3 text-onSurface focus:outline-none focus:border-primary focus:border-b-2 transition-all"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2 relative">
            <label className="text-label-md text-primary">Email Address</label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-surfaceHighest py-3 text-onSurface focus:outline-none focus:border-primary focus:border-b-2 transition-all"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-label-md text-primary">Project / Inquiry</label>
            <textarea 
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              rows={4}
              className="bg-transparent border-b border-surfaceHighest py-3 text-onSurface focus:outline-none focus:border-primary focus:border-b-2 transition-all resize-none"
              placeholder="Tell me about your vision..."
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="bg-button-gradient hover:opacity-90 text-white font-medium py-4 rounded transition-opacity disabled:opacity-50 mt-4 shadow-ambient"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>}
        </form>
      </motion.div>
    </motion.section>
  );
}