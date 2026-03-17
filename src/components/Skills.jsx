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
    <SectionWrapper id="skills" className="bg-bg-light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Core Competencies</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full text-center mb-4"></div>
        <p className="text-secondary-500 text-lg">Technical skills mapping to operational success</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {skillsData.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-accent-500/30 transition-all duration-300 group cursor-default"
          >
            <div className="p-3 bg-blue-50 text-accent-500 rounded-lg group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
              {skill.icon}
            </div>
            <span className="font-semibold text-primary-900">{skill.name}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
