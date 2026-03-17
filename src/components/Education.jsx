import React from 'react';
import SectionWrapper from './SectionWrapper';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: "International Certification in Corporate Accounting",
    institution: "Association of International Certified Professional Accountants (IAAP UK)",
    year: "2023 – 2024",
    icon: <Award className="text-accent-500" size={32} />
  },
  {
    degree: "Bachelor of Commerce – Finance & Taxation",
    institution: "MG University",
    year: "2020 – 2023",
    icon: <GraduationCap className="text-accent-500" size={32} />
  }
];

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Education</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {educationData.map((item, index) => (
          <div 
            key={index} 
            className="group relative p-8 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              {item.icon}
            </div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">{item.degree}</h3>
            <p className="text-lg text-secondary-500 font-medium mb-4">{item.institution}</p>
            <div className="inline-block px-4 py-1.5 bg-white shadow-sm border border-gray-100 text-secondary-500 rounded-full text-sm font-semibold">
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
