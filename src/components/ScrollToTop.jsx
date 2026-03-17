import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-3 md:p-4 glass-card border border-white/20 text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:border-[#22d3ee]/50 transition-all duration-300 focus:outline-none group overflow-hidden flex items-center justify-center cursor-pointer"
          aria-label="Scroll to top"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-[#22d3ee]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <ArrowUp size={24} className="relative z-10 text-white group-hover:text-[#22d3ee] group-hover:scale-110 transition-all duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
