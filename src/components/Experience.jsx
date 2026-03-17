import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="relative z-0">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Professional Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative ml-3 md:ml-0 md:pl-8 py-4">
          
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[-1px] md:left-[1px] top-6 w-[2px] bg-gradient-to-b from-[#3b82f6] to-[#22d3ee]/20 origin-top"
          />
          <motion.div 
            initial={{ opacity: 0.5, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1.2, boxShadow: "0 0 20px #22d3ee" }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-6 h-6 bg-gradient-to-br from-[#3b82f6] to-[#22d3ee] rounded-full -left-[13px] md:-left-3 border-4 border-[#0f172a] top-6"
          ></motion.div>
          
          <div className="glass-card p-8 ml-6 md:ml-0 group transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-white/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#22d3ee] transition-colors duration-300">Audit Executive (Accounts)</h3>
                <div className="text-lg font-medium text-gray-400 flex items-center gap-2 mt-2">
                  <Briefcase size={18} className="text-[#3b82f6]" />
                  Luxon Tata Motors
                </div>
              </div>
              <div className="inline-block px-5 py-2 glass-panel text-[#22d3ee] rounded-full text-sm font-bold tracking-wide max-w-max border-[#22d3ee]/20">
                June 2024 – Present
              </div>
            </div>
            
            <ul className="space-y-4 mt-8">
              {[
                "Conduct internal audits across finance, procurement, and operations departments",
                "Evaluate internal control systems and recommend improvements",
                "Perform inventory verification and operational audits",
                "Prepare audit reports and communicate findings to management",
                "Identify financial discrepancies and operational risks",
                "Collaborate with teams to improve efficiency and governance"
              ].map((task, i) => (
                <li key={i} className="flex items-start text-gray-300 font-medium">
                  <span className="mr-4 text-[#22d3ee] text-xl font-bold mt-[-2px]">▹</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
