// Animation Utilities for Framer Motion
// Reusable animation configurations for THE BEST PORTFOLIO EVER

// ============================================
// FADE IN ANIMATIONS
// ============================================

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -60 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 }
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const scaleUp = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
  transition: { duration: 0.4 }
};

// ============================================
// ROTATION ANIMATIONS
// ============================================

export const rotateIn = {
  initial: { opacity: 0, rotate: -10, scale: 0.95 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 10, scale: 0.95 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const flipIn = {
  initial: { opacity: 0, rotateX: -90 },
  animate: { opacity: 1, rotateX: 0 },
  exit: { opacity: 0, rotateX: 90 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerFastContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerSlowContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// ============================================
// SPECIALIZED ANIMATIONS
// ============================================

// Character-by-character reveal for text
export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const textRevealContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1
    }
  }
};

// Magnetic button effect (use with mouse tracking)
export const magneticButton = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.95 }
};

// Card hover with 3D tilt
export const cardHover = {
  rest: { 
    scale: 1,
    rotateX: 0,
    rotateY: 0
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Blur reveal effect
export const blurReveal = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
  transition: { duration: 0.8 }
};

// Slide in from different directions
export const slideInLeft = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const slideInRight = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

// ============================================
// SCROLL ANIMATIONS
// ============================================

// For use with react-intersection-observer
export const scrollFadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
};

export const scrollScaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

// ============================================
// BUTTON & INTERACTIVE ANIMATIONS
// ============================================

export const buttonTap = {
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const iconFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============================================
// LOADING & SPINNER ANIMATIONS
// ============================================

export const spinnerRotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a custom stagger animation
 * @param {number} staggerChildren - Delay between each child
 * @param {number} delayChildren - Initial delay before first child
 */
export const createStaggerContainer = (staggerChildren = 0.1, delayChildren = 0.2) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

/**
 * Create a custom fade animation with direction
 * @param {string} direction - 'up', 'down', 'left', 'right'
 * @param {number} distance - Distance to travel (default: 60)
 */
export const createFadeAnimation = (direction = 'up', distance = 60) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return {
    initial: { opacity: 0, ...directionMap[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, ...directionMap[direction] },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation or static version based on user preference
 * @param {object} animation - Framer Motion animation object
 */
export const getAccessibleAnimation = (animation) => {
  if (prefersReducedMotion()) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.01 }
    };
  }
  return animation;
};

// ============================================
// EASING FUNCTIONS
// ============================================

export const easings = {
  easeInOut: [0.6, -0.05, 0.01, 0.99],
  smooth: [0.43, 0.13, 0.23, 0.96],
  snappy: [0.6, 0.01, 0.05, 0.95],
  bouncy: [0.68, -0.55, 0.265, 1.55]
};
