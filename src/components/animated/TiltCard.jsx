import { motion, useReducedMotion } from 'framer-motion';
import { useState, useCallback, useRef } from 'react';

const TiltCard = ({ 
  children, 
  className = '',
  tiltStrength = 10,
  scaleOnHover = true
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (shouldReduceMotion) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateYValue = ((e.clientX - centerX) / (rect.width / 2)) * tiltStrength;
      const rotateXValue = -((e.clientY - centerY) / (rect.height / 2)) * tiltStrength;
      
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    });
  }, [tiltStrength, shouldReduceMotion]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: scaleOnHover && isHovered ? 1.02 : 1
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        willChange: isHovered ? 'transform' : 'auto'
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
