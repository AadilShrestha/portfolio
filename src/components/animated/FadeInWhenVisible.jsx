import { motion, useReducedMotion } from 'framer-motion';

const FadeInWhenVisible = ({ 
  children, 
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 60,
  once = true,
  amount = 0.3,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance }
  };

  // Reduced motion: instant fade only
  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount: 0.1 }}
        transition={{ duration: 0.01 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directionMap[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount, margin: "0px 0px -100px 0px" }}
      transition={{ 
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
