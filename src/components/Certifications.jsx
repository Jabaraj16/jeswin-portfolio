import React from 'react';
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
    <SectionWrapper id="certifications" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Certifications</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-6 py-4 bg-bg-light border border-gray-100 rounded-full hover:border-accent-500 hover:shadow-md transition-all duration-300 group cursor-default"
          >
            <Award className="text-secondary-500 group-hover:text-accent-500 transition-colors" size={20} />
            <span className="font-semibold text-primary-900">{cert}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
