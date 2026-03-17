import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative glass-panel border-t border-white/10 pt-16 pb-8 overflow-hidden z-10">
      {/* Subtle moving gradient line */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent opacity-50"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        
        {/* Main Footer Content */}
        <div className="mb-6">
          <p className="font-semibold text-lg text-white mb-1">© 2026 Jeswin Saju Samuel</p>
          <p className="text-gray-400 font-medium tracking-wide">Audit & Finance Portfolio</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          <a href="https://www.linkedin.com/in/jeswin-saju-samuel-a340b21bb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#22d3ee] transition-colors duration-300 text-sm font-medium tracking-wide">
            LinkedIn
          </a>
          <a href="mailto:jeswinsaju2002@gmail.com" className="text-gray-400 hover:text-[#22d3ee] transition-colors duration-300 text-sm font-medium tracking-wide">
            Email
          </a>
          <a href="tel:+918078267051" className="text-gray-400 hover:text-[#22d3ee] transition-colors duration-300 text-sm font-medium tracking-wide">
            Phone
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-2xl h-[1px] bg-white/10 mb-8 relative">
        </div>

        {/* Developer Credits */}
        <div className="text-sm text-gray-400/70 font-medium">
          <div className="flex flex-col items-center gap-2">
            <p className="flex flex-wrap justify-center items-center gap-1">
              Designed & Developed by{' '}
              <a href="https://portfolio-lilac-seven-34.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold relative group cursor-pointer text-gray-300 hover:text-[#3b82f6] transition-colors duration-300 ml-1 inline-flex items-center gap-1">
                Jabaraj 
                <Code2 size={14} className="group-hover:text-[#22d3ee] transition-colors" />
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
