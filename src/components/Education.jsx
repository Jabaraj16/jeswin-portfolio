import React from 'react';
import SectionWrapper from './SectionWrapper';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: "International Certification in Corporate Accounting",
    institution: "Association of International Certified Professional Accountants (IAAP UK)",
    year: "2023 – 2024",
    icon: <Award className="text-[#3b82f6]" size={36} />
  },
  {
    degree: "Bachelor of Commerce – Finance & Taxation",
    institution: "MG University",
    year: "2020 – 2023",
    icon: <GraduationCap className="text-[#3b82f6]" size={36} />
  }
];

const Education = () => {
  return (
    <SectionWrapper id="education" className="relative z-0">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Education</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="group relative p-8 glass-card hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-white/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              {React.cloneElement(item.icon, { size: 100 })}
            </div>
            <div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#22d3ee] transition-colors duration-300">{item.degree}</h3>
            <p className="text-lg text-gray-400 font-medium mb-6 leading-relaxed">{item.institution}</p>
            <div className="inline-block px-5 py-2 glass-panel border border-[#3b82f6]/20 text-[#22d3ee] rounded-full text-sm font-bold tracking-wide">
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
