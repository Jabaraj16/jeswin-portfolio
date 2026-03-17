import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Zap } from 'lucide-react';

const strengthsList = [
  "Strong analytical and problem-solving ability",
  "Excellent attention to detail",
  "Effective communication and reporting skills",
  "Ability to identify operational inefficiencies",
  "Adaptability in fast-paced environments"
];

const Strengths = () => {
  return (
    <SectionWrapper id="strengths" className="bg-bg-light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Key Strengths</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-4"></div>
        <p className="text-secondary-500 text-lg">Personal attributes driving professional excellence</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {strengthsList.map((strength, index) => (
          <div 
            key={index}
            className={`flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${index === strengthsList.length - 1 ? 'md:col-span-2 md:mx-auto md:w-1/2' : ''}`}
          >
            <div className="p-3 bg-accent-500/10 text-accent-500 rounded-xl shrink-0">
              <Zap size={24} />
            </div>
            <p className="font-semibold text-primary-900 text-lg mt-1">{strength}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Strengths;
