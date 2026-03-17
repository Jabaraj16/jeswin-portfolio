import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Award } from 'lucide-react';

const certifications = [
  "Tally ERP",
  "QuickBooks Accounting Software",
  "SAP Finance and Controlling (SAP FICO)",
  "Advanced Microsoft Excel",
  "GCC VAT Compliance"
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="relative z-0">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Certifications</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto relative z-10">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            animate={{ boxShadow: ["0 0 0px transparent", "0 0 15px rgba(34,211,238,0.4)", "0 0 0px transparent"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }}
            className="flex items-center gap-3 px-6 py-4 glass-panel border border-white/10 rounded-full cursor-default hover:-translate-y-1 hover:border-[#22d3ee]/50 transition-transform duration-300 group"
          >
            <Award className="text-[#3b82f6] group-hover:text-[#22d3ee] transition-colors" size={20} />
            <span className="font-semibold text-gray-200 tracking-wide">{cert}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
