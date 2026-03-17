import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Activity } from 'lucide-react';

const BackgroundAnimation = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#020617]">
      {/* Floating Gradient Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, -100, 0], 
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#3b82f6]/15 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -150, 150, 0], 
          y: [0, 150, -150, 0],
          scale: [1, 1.5, 0.9, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-[#22d3ee]/10 rounded-full blur-[150px]"
      />

      {/* Moving Finance Graphs */}
      <motion.div
        animate={{ y: ["0%", "15%", "0%"], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[20%] text-[#3b82f6]"
      >
        <LineChart size={400} strokeWidth={0.5} />
      </motion.div>
      
      <motion.div
        animate={{ y: ["0%", "-15%", "0%"], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[15%] left-[10%] text-[#22d3ee]"
      >
        <Activity size={350} strokeWidth={0.5} />
      </motion.div>

      {/* Tiny up-floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * dimensions.width,
            y: dimensions.height + 100,
            opacity: Math.random() * 0.4 + 0.1
          }}
          animate={{
            y: -100,
            x: `+=${Math.random() * 100 - 50}`,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
