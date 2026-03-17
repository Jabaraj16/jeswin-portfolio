import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 lg:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
          }
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
