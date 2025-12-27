import { motion, useReducedMotion } from 'framer-motion';

const TextReveal = ({ 
  text = '',
  delay = 0,
  className = '',
  staggerDelay = 0.02,
  once = true
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delay
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      variants={containerVariants}
      style={{ display: 'inline-block' }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={childVariants}
          style={{ display: 'inline-block', willChange: shouldReduceMotion ? 'auto' : 'opacity, transform' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
