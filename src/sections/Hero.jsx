import React, { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import image from "../assests/img/landing.png";
import MagneticButton from "../components/animated/MagneticButton";
import TextReveal from "../components/animated/TextReveal";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Aadil Shrestha";
  const [isTyping, setIsTyping] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    if (isTyping && text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (text.length === fullText.length) {
      setIsTyping(false);
    }
  }, [text, isTyping]);

  return (
    <div className="min-h-screen pt-24 md:pt-10 self-center grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
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
        
        <div className="title text-5xl md:text-8xl min-h-[1.2em]">
          <span className="text-orange drop-shadow-[0_0_30px_rgba(211,233,122,0.5)] font-bold">{text}</span>
          {!shouldReduceMotion && (
            <motion.span
              className="inline-block w-1 h-[0.8em] bg-orange ml-1 shadow-[0_0_20px_rgba(211,233,122,0.8)]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          )}
        </div>

        <FadeInWhenVisible direction="down" delay={0.6}>
          <p className="text-l mt-4 max-w-lg">
            A Nepal based Web developer passionate about building accessible and
            user friendly websites.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="up" delay={0.8}>
          <div className="mt-8 links">
            <MagneticButton
              className="bg-gradient-to-r from-orange via-orange to-orange bg-[length:200%_auto] text-black flex gap-6 items-center p-3 px-7 rounded-2xl hover:bg-gradient-to-r hover:from-orange hover:via-yellow-300 hover:to-orange hover:shadow-[0_0_40px_rgba(211,233,122,0.6)] font-bold transition-all duration-300 shadow-[0_8px_30px_rgba(211,233,122,0.3)] hover:shadow-[0_8px_50px_rgba(211,233,122,0.5)] hover:scale-105"
              magneticStrength={0.2}
            >
              Contact Me
              {!shouldReduceMotion && (
                <motion.span 
                  className="h-2 w-2 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </MagneticButton>
          </div>
        </FadeInWhenVisible>
      </motion.div>

      <motion.div 
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
      </motion.div>
    </div>
  );
};

export default Hero;
