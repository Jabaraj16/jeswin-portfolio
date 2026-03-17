import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      const isClickable = target.closest('a') !== null || target.closest('button') !== null || window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
      style={{
        background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, rgba(59,130,246,0.05) 50%, rgba(0,0,0,0) 80%)',
      }}
      animate={{
        x: mousePosition.x - (isHovering ? 250 : 200),
        y: mousePosition.y - (isHovering ? 250 : 200),
        width: isHovering ? 500 : 400,
        height: isHovering ? 500 : 400,
        opacity: isHovering ? 0.6 : 0.3
      }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
    />
  );
};

export default CursorGlow;
