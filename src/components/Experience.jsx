import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-bg-light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Professional Experience</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-0 md:pl-8 py-4">
          
          <div className="absolute w-6 h-6 bg-accent-500 rounded-full -left-[13px] md:-left-3 border-4 border-bg-light top-6"></div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ml-6 md:ml-0 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-primary-900 group-hover:text-accent-500 transition-colors">Audit Executive (Accounts)</h3>
                <div className="text-lg font-medium text-secondary-500 flex items-center gap-2 mt-1">
                  <Briefcase size={18} />
                  Luxon Tata Motors
                </div>
              </div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-accent-500 rounded-full text-sm font-semibold max-w-max">
                June 2024 – Present
              </div>
            </div>
            
            <ul className="space-y-3 mt-6">
              {[
                "Conduct internal audits across finance, procurement, and operations departments",
                "Evaluate internal control systems and recommend improvements",
                "Perform inventory verification and operational audits",
                "Prepare audit reports and communicate findings to management",
                "Identify financial discrepancies and operational risks",
                "Collaborate with teams to improve efficiency and governance"
              ].map((task, i) => (
                <li key={i} className="flex items-start text-secondary-500">
                  <span className="mr-3 text-accent-500 text-xl font-bold mt-[-2px]">•</span>
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
