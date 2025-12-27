import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";
import { 
  SiReact, 
  SiTypescript, 
  SiNestjs, 
  SiPostgresql, 
  SiDocker
} from "react-icons/si";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const coreSkills = [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" }
  ];

  return (
    <div className="py-20 relative" id="skills">
      {!shouldReduceMotion && (
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <div className="mb-16 relative z-10">
        <FadeInWhenVisible direction="right">
          <h2 className="title text-5xl md:text-7xl bg-gradient-to-r from-white via-orange to-white bg-clip-text text-transparent">
            Core Skills
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="down" delay={0.2}>
          <p className="mt-4 text-gray-300">
            The technologies I use most frequently for fullstack development.
          </p>
        </FadeInWhenVisible>
      </div>

      <div className="relative z-10">
        <FadeInWhenVisible delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {coreSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="relative bg-gradient-to-br from-grey to-grey/80 rounded-2xl p-8 
                    border-2 border-transparent transition-all duration-300 
                    shadow-xl shadow-black/30 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <Icon 
                      className="text-6xl transition-colors duration-300" 
                      style={{ color: skill.color }}
                    />
                    <span className="text-base font-semibold text-white text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Additional note */}
      <FadeInWhenVisible delay={0.6}>
        <motion.div 
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Constantly learning and exploring new technologies to build better solutions.
          </p>
        </motion.div>
      </FadeInWhenVisible>
    </div>
  );
};

export default Skills;
