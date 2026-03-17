import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen relative font-inter selection:bg-[#3b82f6]/30 selection:text-white overflow-hidden scroll-smooth transition-opacity duration-1000 ease-in-out">
      <BackgroundAnimation />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
