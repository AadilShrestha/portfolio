import { motion, useReducedMotion } from 'framer-motion';

const StaggerContainer = ({ 
  children, 
  staggerChildren = 0.1,
  delayChildren = 0.2,
  className = '',
  once = true
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: shouldReduceMotion ? 0 : delayChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
