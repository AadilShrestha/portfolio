import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const CountUpAnimation = ({ 
  end = 100,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    if (shouldReduceMotion) {
      setCount(end);
      return;
    }

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, isVisible, shouldReduceMotion]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
      className={className}
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </motion.span>
  );
};

export default CountUpAnimation;
