import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone, LineChart, BarChart3, ClipboardCheck, FileText, FileSpreadsheet } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import profileImg from '../assets/profile.jpeg';
import resumePdf from '../assets/JESWIN_S_CV (2).pdf';

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// 3D Parallax Hero Component
const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <SectionWrapper id="hero" className="pt-32 lg:pt-40 min-h-screen flex items-center relative z-0 overflow-hidden">
      
      {/* Background Animated Grid & Glows (Layer 3) */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <motion.div 
          className="absolute top-[20%] right-[30%] w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[120px]"
          animate={{ x: mousePos.x * -30, y: mousePos.y * -30 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div 
          className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#22d3ee]/10 rounded-full blur-[100px]"
          animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10 max-w-7xl mx-auto">
        
        {/* Left Column: Content */}
        <motion.div variants={itemVariants} className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-[#22d3ee] font-semibold tracking-wider uppercase text-sm">
            <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#22d3ee] lg:hidden"></span>
            Finance & Audit Professional
            <span className="w-8 h-[2px] bg-gradient-to-l from-[#22d3ee] to-transparent"></span>
          </motion.div>
          
          <h1 className="text-[42px] md:text-[54px] lg:text-[72px] font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            Jeswin Saju Samuel
          </h1>
          
          <h2 className="text-[18px] md:text-[22px] text-[#94a3b8] font-medium mb-4 leading-relaxed">
            Audit Executive <span className="text-[#3b82f6] opacity-70 mx-2">|</span> Internal Auditor <span className="text-[#3b82f6] opacity-70 mx-2">|</span> Financial Compliance Specialist
          </h2>

          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "80px" }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] rounded-full mb-6"
          ></motion.div>

          {/* Short Description */}
          <p className="text-gray-300 text-lg mb-10 max-w-xl leading-relaxed font-light">
            Professional auditor experienced in financial analysis, internal controls, and operational efficiency improvements.
          </p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            {/* Primary Button */}
            <a 
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden px-8 py-3.5 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group inline-block w-full sm:w-auto text-sm tracking-wide border border-transparent"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">View Resume</span>
            </a>

            {/* Secondary Button 1 */}
            <a 
              href="#contact" 
              className="relative overflow-hidden px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-white/10 transition-all duration-300 group inline-block w-full sm:w-auto text-sm tracking-wide"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Contact</span>
            </a>

            {/* Secondary Button 2 */}
            <a 
              href="https://www.linkedin.com/in/jeswin-saju-samuel-a340b21bb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 relative overflow-hidden px-8 py-3.5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:border-[#22d3ee]/50 transition-all duration-300 group w-full sm:w-auto text-sm tracking-wide"
            >
              <div className="absolute inset-0 bg-[#22d3ee]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                LinkedIn <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 md:gap-10 text-sm text-gray-400 font-medium tracking-wider w-full pt-4 border-t border-white/10 lg:border-none lg:pt-0">
            <div className="flex items-center justify-center gap-2 group cursor-default">
              <MapPin size={18} className="text-[#22d3ee]" />
              <span className="group-hover:text-white transition-colors">Kerala, India</span>
            </div>
            <div className="flex items-center justify-center gap-2 group cursor-default">
              <Phone size={18} className="text-[#3b82f6]" />
              <span className="group-hover:text-white transition-colors">+91 8078267051</span>
            </div>
            <div className="flex items-center justify-center gap-2 group cursor-default">
              <Mail size={18} className="text-[#22d3ee]" />
              <span className="group-hover:text-white transition-colors break-all">jeswinsaju2002@gmail.com</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Apple-style 3D Floating Scene */}
        <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center relative items-center w-full h-full min-h-[400px] lg:min-h-[600px] perspective-[1000px]">
          
          {/* Main Floating Container (Layer 2) */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotateX: mousePos.y * 10,
              rotateY: mousePos.x * 10
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateX: { type: "spring", stiffness: 100, damping: 30 },
              rotateY: { type: "spring", stiffness: 100, damping: 30 }
            }}
            className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] z-20"
          >
            {/* Profile Frame */}
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 group backdrop-blur-[20px] bg-white/5 flex items-center justify-center p-3">
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
                <img 
                  src={profileImg} 
                  alt="Jeswin Saju Samuel" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/30 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

          {/* Floating 3D Objects (Layer 1) */}
          {/* 1. Financial Chart */}
          <motion.div 
            className="absolute top-[10%] left-[10%] z-30 opacity-70 glass-panel p-3 rounded-2xl border border-white/10 text-[#22d3ee] shadow-lg backdrop-blur-md bg-white/5"
            animate={{ 
              y: [-12, 12, -12], 
              rotate: [4, -4, 4],
              x: mousePos.x * -40, // Parallax shift
            }}
            transition={{ y: { duration: 8, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }, x: { type: "spring", stiffness: 40 } }}
          >
            <LineChart size={32} />
          </motion.div>

          {/* 2. Analytics Graph */}
          <motion.div 
            className="absolute bottom-[20%] right-[5%] z-30 opacity-70 glass-panel p-4 rounded-2xl border border-white/10 text-[#3b82f6] shadow-lg backdrop-blur-md bg-white/5"
            animate={{ 
              y: [-8, 8, -8], 
              rotate: [-3, 3, -3],
              x: mousePos.x * 50, // Parallax shift
            }}
            transition={{ y: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }, x: { type: "spring", stiffness: 35 } }}
          >
            <BarChart3 size={40} />
          </motion.div>

          {/* 3. Audit Checklist */}
          <motion.div 
            className="absolute top-[40%] -right-[5%] lg:-right-[10%] z-10 opacity-70 glass-panel p-3 rounded-2xl border border-white/10 text-white shadow-lg backdrop-blur-md bg-white/5"
            animate={{ 
              y: [-10, 10, -10], 
              rotate: [5, -5, 5],
              x: mousePos.x * 30, // Parallax shift
            }}
            transition={{ y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }, rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }, x: { type: "spring", stiffness: 45 } }}
          >
            <ClipboardCheck size={28} />
          </motion.div>

          {/* 4. Document Folder */}
          <motion.div 
            className="absolute bottom-[10%] left-[15%] z-30 opacity-70 glass-panel p-3 rounded-2xl border border-white/10 text-[#22d3ee] shadow-lg backdrop-blur-md bg-white/5"
            animate={{ 
              y: [-15, 15, -15], 
              rotate: [-6, 6, -6],
              x: mousePos.x * -20, // Parallax shift
            }}
            transition={{ y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, rotate: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, x: { type: "spring", stiffness: 50 } }}
          >
            <FileText size={24} />
          </motion.div>

          {/* 5. Excel Sheet Icon */}
          <motion.div 
            className="absolute top-[20%] right-[15%] z-10 opacity-70 glass-panel p-3 rounded-2xl border border-white/10 text-[#3b82f6] shadow-lg backdrop-blur-md bg-white/5 text-center flex flex-col items-center justify-center"
            animate={{ 
              y: [-9, 9, -9], 
              rotate: [2, -2, 2],
              x: mousePos.x * 60, // Parallax shift
            }}
            transition={{ y: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }, rotate: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }, x: { type: "spring", stiffness: 30 } }}
          >
            <FileSpreadsheet size={30} />
          </motion.div>

        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
