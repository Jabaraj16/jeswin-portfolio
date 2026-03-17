import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Mail, Phone, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Get in Touch</h2>
        <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-secondary-500 font-medium max-w-2xl mx-auto">
          "I am open to opportunities in auditing, finance, and compliance roles."
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8 p-8 bg-bg-light rounded-3xl border border-gray-100 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-2">Let's Connect</h3>
          <p className="text-secondary-500 mb-8">Feel free to reach out to me for any professional queries or job opportunities.</p>
          
          <div className="space-y-6">
            <a href="tel:+918078267051" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 border border-gray-200 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary-500">Phone</p>
                <p className="text-lg font-bold text-primary-900">+91 8078267051</p>
              </div>
            </a>
            
            <a href="mailto:jeswinsaju2002@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 border border-gray-200 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-sm">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary-500">Email</p>
                <p className="text-lg font-bold text-primary-900">jeswinsaju2002@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/jeswin-saju-samuel-a340b21bb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent-500 border border-gray-200 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white transition-all shadow-sm">
                <ExternalLink size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-secondary-500">LinkedIn</p>
                <p className="text-lg font-bold text-primary-900">Jeswin Saju Samuel</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 relative">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-3 bg-bg-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full py-4 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-colors flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
