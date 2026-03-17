import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { ClipboardCheck, PieChart, FileText } from 'lucide-react';

const floatingIconAnimation = {
  animate: (i) => ({
    y: ["-15px", "15px", "-15px"],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i
    }
  })
};

const About = () => {
  return (
    <SectionWrapper id="about" className="relative z-0">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] mx-auto rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated Icons Floating Around the Card */}
        <motion.div custom={0} variants={floatingIconAnimation} animate="animate" className="absolute -top-16 -left-4 md:-left-12 text-[#22d3ee]/80 glass-panel p-4 rounded-2xl z-20 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
          <ClipboardCheck size={40} />
        </motion.div>
        
        <motion.div custom={1} variants={floatingIconAnimation} animate="animate" className="absolute top-1/2 -right-4 md:-right-16 text-[#3b82f6]/80 glass-panel p-4 rounded-2xl z-20 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <PieChart size={48} />
        </motion.div>
        
        <motion.div custom={2} variants={floatingIconAnimation} animate="animate" className="absolute -bottom-12 left-10 md:left-20 text-white/80 glass-panel p-4 rounded-2xl z-20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <FileText size={36} />
        </motion.div>

        {/* Central Glass Card */}
        <div className="glass-card p-10 md:p-16 relative z-10 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-[#22d3ee]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center font-medium relative z-10">
            Professional internal auditor experienced in financial audits, operational evaluation, and internal control frameworks. Focused on improving compliance and identifying efficiency improvements.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
