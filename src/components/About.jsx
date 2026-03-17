import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Target, TrendingUp, ShieldCheck, Search, Activity } from 'lucide-react';

const strengths = [
  { icon: <Search size={24} />, title: "Analytical thinking" },
  { icon: <Target size={24} />, title: "Detail oriented" },
  { icon: <ShieldCheck size={24} />, title: "Financial compliance knowledge" },
  { icon: <Activity size={24} />, title: "Risk assessment" },
  { icon: <TrendingUp size={24} />, title: "Operational improvement" },
];

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">About Me</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-secondary-500 leading-relaxed text-center">
          A finance and audit professional focused on internal control evaluation, financial process auditing, and risk assessment. Experienced in strengthening governance frameworks and identifying operational inefficiencies to improve organizational performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strengths.map((item, index) => (
          <div 
            key={index}
            className="p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
          >
            <div className="p-3 bg-white text-accent-500 rounded-xl shadow-sm group-hover:bg-primary-900 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-primary-900 text-lg mt-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
