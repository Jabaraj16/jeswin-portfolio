import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Database, TrendingUp, ShieldCheck, ClipboardCheck, Box, Settings, Lock, FileSpreadsheet, LayoutGrid } from 'lucide-react';

const skillsData = [
  { name: "Internal Auditing", icon: <ClipboardCheck size={20} /> },
  { name: "Risk Assessment", icon: <TrendingUp size={20} /> },
  { name: "Financial Analysis", icon: <Database size={20} /> },
  { name: "Compliance Monitoring", icon: <ShieldCheck size={20} /> },
  { name: "Inventory Auditing", icon: <Box size={20} /> },
  { name: "Internal Control Systems", icon: <Settings size={20} /> },
  { name: "Governance Frameworks", icon: <Lock size={20} /> },
  { name: "Advanced Microsoft Excel", icon: <FileSpreadsheet size={20} /> },
  { name: "Accounting ERP Systems", icon: <LayoutGrid size={20} /> },
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="relative z-0">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Core Competencies</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 text-lg">Technical skills mapping to operational success</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
        {skillsData.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 p-5 glass-card hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:border-[#22d3ee]/40 transition-all duration-300 group cursor-default"
          >
            <div className="p-3 glass-panel text-[#3b82f6] rounded-xl group-hover:text-[#22d3ee] group-hover:bg-white/10 transition-colors duration-300 border border-white/5">
              {skill.icon}
            </div>
            <span className="font-semibold text-gray-200 tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
