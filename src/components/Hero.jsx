import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ExternalLink, PieChart, BarChart3, FileText, CheckCircle } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import profileImg from '../assets/profile.jpeg';
import resumePdf from '../assets/JESWIN_S_CV (2).pdf';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const nameVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.05, delayChildren: 0.2 } 
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const floatingIconVariants = {
  animate: (i) => ({
    y: ["0%", "20%", "0%"],
    x: ["0%", i % 2 === 0 ? "10%" : "-10%", "0%"],
    rotate: [0, 15, -15, 0],
    transition: {
      duration: 12 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5
    }
  })
};

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="pt-32 lg:pt-48 min-h-screen flex items-center relative z-0">
      {/* Background with floating abstract shapes and finance icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -ml-[400px] w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-900/5 rounded-full blur-[80px]"></div>
        
        <motion.div custom={0} variants={floatingIconVariants} initial="animate" animate="animate" className="absolute top-[20%] left-[10%] opacity-[0.03] text-primary-900">
          <PieChart size={120} />
        </motion.div>
        <motion.div custom={1} variants={floatingIconVariants} initial="animate" animate="animate" className="absolute top-[15%] right-[15%] opacity-[0.03] text-accent-500">
          <BarChart3 size={150} />
        </motion.div>
        <motion.div custom={2} variants={floatingIconVariants} initial="animate" animate="animate" className="absolute bottom-[20%] left-[15%] opacity-[0.03] text-primary-900">
          <FileText size={100} />
        </motion.div>
        <motion.div custom={3} variants={floatingIconVariants} initial="animate" animate="animate" className="absolute bottom-[25%] right-[10%] opacity-[0.03] text-accent-500">
          <CheckCircle size={80} />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div variants={itemVariants} className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-[#3b82f6] font-semibold tracking-wide uppercase text-sm">
            <span className="w-8 h-[2px] bg-[#3b82f6]"></span>
            Finance & Audit Professional
          </motion.div>
          
          <h1 
            className="text-[42px] lg:text-[64px] font-bold text-[#0f172a] tracking-wide leading-tight mb-3"
          >
            Jeswin Saju <span className="text-[#6b7280]">Samuel</span>
          </h1>
          
          <h2 
            className="text-[20px] text-[#6b7280] font-medium mb-4"
          >
            Audit Executive | Internal Auditor | Financial Compliance Specialist
          </h2>

          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "80px" }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="h-[3px] bg-[#3b82f6] rounded-full mb-8"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants} 
            className="text-secondary-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Detail-oriented Internal Auditor with experience in operational, financial, and inventory audits within the automobile sector. Skilled in evaluating internal controls and risk assessment while improving operational efficiency.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 group/buttons">
            <a 
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-primary-900 border border-primary-900 text-white font-semibold rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/20 hover:bg-white hover:text-primary-900 transition-all duration-300 inline-block w-full sm:w-auto"
            >
              View Resume
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-white text-primary-900 font-semibold rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent-500 hover:text-accent-500 transition-all duration-300 inline-block w-full sm:w-auto"
            >
              Contact
            </a>
            <a 
              href="https://www.linkedin.com/in/jeswin-saju-samuel-a340b21bb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3.5 bg-bg-light text-secondary-500 font-semibold rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/20 hover:border-accent-500 hover:bg-accent-500 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              LinkedIn <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
          
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-secondary-500 font-medium tracking-wide">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={18} className="text-accent-500 shrink-0" />
              <span>Alappuzha, Kerala, India</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={18} className="text-accent-500 shrink-0" />
              <span>+91 8078267051</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={18} className="text-accent-500 shrink-0" />
              <span className="break-all">jeswinsaju2002@gmail.com</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            {/* Abstract decorative shapes behind portrait */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-accent-500/20 to-primary-900/5 rounded-full blur-2xl transform -translate-x-4 translate-y-4"
            ></motion.div>
            <div className="absolute inset-0 border-[3px] border-dashed border-gray-200/80 rounded-full animate-[spin_60s_linear_infinite]"></div>
            
            {/* Portrait */}
            <div className="absolute inset-4 rounded-full bg-gray-100 overflow-hidden shadow-2xl border-8 border-white group z-10 transition-transform duration-700 hover:scale-[1.02] aspect-square flex items-center justify-center">
              <img 
                src={profileImg} 
                alt="Jeswin Saju Samuel" 
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
