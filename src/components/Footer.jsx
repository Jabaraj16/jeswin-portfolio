import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 border-t border-primary-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center text-center">
        
        {/* Main Footer Content */}
        <div className="mb-6">
          <p className="font-semibold text-lg text-white mb-1">© 2026 Jeswin Saju Samuel</p>
          <p className="text-secondary-500 font-medium">Audit & Finance Portfolio</p>
        </div>

        {/* Links */}
        <div className="flex gap-6 mb-10">
          <a href="https://www.linkedin.com/in/jeswin-saju-samuel-a340b21bb" target="_blank" rel="noopener noreferrer" className="text-secondary-500 hover:text-white transition-colors duration-300 text-sm font-medium">
            LinkedIn
          </a>
          <a href="mailto:jeswinsaju2002@gmail.com" className="text-secondary-500 hover:text-white transition-colors duration-300 text-sm font-medium">
            Email
          </a>
          <a href="tel:+918078267051" className="text-secondary-500 hover:text-white transition-colors duration-300 text-sm font-medium">
            Phone
          </a>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-primary-800/50 mb-8 max-w-2xl"></div>

        {/* Credits Section */}
        <div className="flex flex-col items-center justify-center gap-3 text-sm text-secondary-500/70 font-medium">
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-secondary-500/70" />
            <p className="flex flex-wrap justify-center items-center gap-1">
              Designed & Developed by{' '}
              <a href="https://portfolio-lilac-seven-34.vercel.app/"><span className="font-bold relative group cursor-default text-secondary-500 hover:text-accent-500 transition-colors duration-300 ml-1">
                Jabaraj
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </span></a>
              
            </p>
          </div>
         
        </div>

      </div>
    </footer>
  );
};

export default Footer;
