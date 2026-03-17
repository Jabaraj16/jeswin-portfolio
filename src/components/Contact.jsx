import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="relative z-0">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-400 font-medium max-w-2xl mx-auto">
          "I am open to opportunities in auditing, finance, and compliance roles."
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* Contact Information */}
        <div className="space-y-8 p-8 glass-card h-full flex flex-col justify-center transform transition-transform duration-500 hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
          <p className="text-gray-400 mb-8">Feel free to reach out to me for any professional queries or job opportunities.</p>
          
          <div className="space-y-6">
            <a href="tel:+918078267051" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-[#22d3ee] border border-white/10 group-hover:border-[#22d3ee] group-hover:bg-[#22d3ee]/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">Phone</p>
                <p className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">+91 8078267051</p>
              </div>
            </a>
            
            <a href="mailto:jeswinsaju2002@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 shrink-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-[#22d3ee] border border-white/10 group-hover:border-[#22d3ee] group-hover:bg-[#22d3ee]/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-400">Email</p>
                <p className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors break-all">jeswinsaju2002@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/jeswin-saju-samuel-a340b21bb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-[#22d3ee] border border-white/10 group-hover:border-[#22d3ee] group-hover:bg-[#22d3ee]/10 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                <ExternalLink size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">LinkedIn</p>
                <p className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">Jeswin Saju Samuel</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="p-8 glass-card relative group">
          <div className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide">FULL NAME</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-[#22d3ee]/50 text-white placeholder-gray-500 transition-all backdrop-blur-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide">EMAIL ADDRESS</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-[#22d3ee]/50 text-white placeholder-gray-500 transition-all backdrop-blur-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide">MESSAGE</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#22d3ee]/50 focus:border-[#22d3ee]/50 text-white placeholder-gray-500 transition-all backdrop-blur-sm resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full py-4 bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] text-white font-bold rounded-xl hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-[#22d3ee] relative overflow-hidden submit-button-glow"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <Send size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
