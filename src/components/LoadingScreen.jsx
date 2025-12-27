import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }, 300);
      }
      setProgress(Math.floor(currentProgress));
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Large percentage */}
              <motion.div 
                className="text-7xl md:text-9xl font-bold text-orange"
                key={progress}
                initial={{ scale: 1.2, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                {progress}
                <span className="text-5xl md:text-7xl">%</span>
              </motion.div>

              {/* Progress bar */}
              <div className="w-80 md:w-96 mx-auto">
                <div className="h-2 bg-grey/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange via-yellow-300 to-orange rounded-full
                      shadow-[0_0_20px_rgba(211,233,122,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                    style={{
                      backgroundSize: "200% 100%",
                    }}
                  />
                </div>
                
                {/* Loading text */}
                <motion.p
                  className="text-gray-400 text-sm mt-4 font-mono"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {progress < 30 && "Initializing portfolio..."}
                  {progress >= 30 && progress < 60 && "Loading projects..."}
                  {progress >= 60 && progress < 90 && "Preparing experience..."}
                  {progress >= 90 && progress < 100 && "Almost there..."}
                  {progress === 100 && "Welcome!"}
                </motion.p>
              </div>
            </motion.div>

            {/* Particle effects */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + Math.random() * 40}%`
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
