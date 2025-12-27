import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-yellow-300 to-orange origin-left z-50 shadow-[0_0_20px_rgba(211,233,122,0.8)] ${className}`}
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
