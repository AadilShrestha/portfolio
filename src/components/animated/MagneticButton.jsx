import { motion, useReducedMotion } from 'framer-motion';
import { useState, useCallback, useRef } from 'react';

const MagneticButton = ({ 
  children, 
  className = '',
  onClick,
  magneticStrength = 0.3
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (shouldReduceMotion) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * magneticStrength;
      const deltaY = (e.clientY - centerY) * magneticStrength;
      
      setPosition({ x: deltaX, y: deltaY });
    });
  }, [magneticStrength, shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  return (
    <motion.button
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
      style={{
        willChange: position.x !== 0 || position.y !== 0 ? 'transform' : 'auto'
      }}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
