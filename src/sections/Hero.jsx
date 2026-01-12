import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import image from "../assests/img/landing.png";
import MagneticButton from "../components/animated/MagneticButton";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen pt-24 md:pt-10 self-center grid grid-cols-1 md:grid-cols-1 relative overflow-hidden">
      {!shouldReduceMotion && (
        <>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-orange/10 via-purple-500/5 to-blue-500/5 pointer-events-none"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(211, 233, 122, 0.1), rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(211, 233, 122, 0.1), rgba(147, 51, 234, 0.05))",
                "linear-gradient(to bottom right, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05), rgba(211, 233, 122, 0.1))",
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ willChange: 'background' }}
          />
          
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-orange/20 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}
      
      <motion.div 
        className="info justify-self-center self-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FadeInWhenVisible direction="right" delay={0.2}>
          <h1 className="title text-5xl md:text-8xl bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Hi, I am
          </h1>
        </FadeInWhenVisible>
        
        <FadeInWhenVisible direction="right" delay={0.3}>
          <h1 className="title text-5xl md:text-8xl text-orange drop-shadow-[0_0_30px_rgba(211,233,122,0.5)] font-bold">
            Aadil Shrestha
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="down" delay={0.4}>
          <div className="mt-6 space-y-2">
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Fullstack Developer
            </p>
            <p className="text-lg text-gray-300">
              Based in Nepal
            </p>
            <p className="text-base text-gray-400">
              React & Nest.js
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="down" delay={0.6}>
          <p className="text-l mt-6 max-w-lg">
            Passionate about building accessible and user-friendly web applications.
          </p>
        </FadeInWhenVisible>


      </motion.div>

      {/* <motion.div 
        className="mt-4 md:m-0 pfp grid relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ y: shouldReduceMotion ? 0 : y }}
      >
        <motion.div className="relative justify-self-center self-start md:self-center w-3/4">
          <motion.img
            src={image}
            className="relative z-10 drop-shadow-[0_20px_60px_rgba(211,233,122,0.3)]"
            alt="Aadil Shrestha"
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
            style={{ willChange: 'auto' }}
          />
          {!shouldReduceMotion && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange/20 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>
        
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute -bottom-4 -right-4 w-64 h-64 bg-orange/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1.15, 1, 1.15],
                opacity: [0.2, 0.35, 0.2]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </motion.div> */}
    </div>
  );
};

export default Hero;
