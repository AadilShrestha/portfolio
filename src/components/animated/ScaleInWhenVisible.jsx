import { motion, useReducedMotion } from 'framer-motion';

const ScaleInWhenVisible = ({ 
  children, 
  delay = 0,
  duration = 0.5,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleInWhenVisible;
