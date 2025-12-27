import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiNestjs, 
  SiPostgresql, 
  SiMongodb, 
  SiSocketdotio, 
  SiDocker, 
  SiGithubactions,
  SiNginx,
  SiRedux,
  SiVite,
  SiGit
} from "react-icons/si";

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Vite", icon: SiVite, color: "#646CFF" }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" }
      ]
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "GitHub CI/CD", icon: SiGithubactions, color: "#2088FF" },
        { name: "Nginx", icon: SiNginx, color: "#009639" },
        { name: "Git", icon: SiGit, color: "#F05032" }
      ]
    }
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
            Skills & Expertise
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="down" delay={0.2}>
          <p className="mt-4 text-gray-300">
            Core technologies I use to build scalable, modern applications.
          </p>
        </FadeInWhenVisible>
      </div>

      <div className="space-y-16 relative z-10">
        {skillCategories.map((category, categoryIndex) => (
          <FadeInWhenVisible key={category.name} delay={categoryIndex * 0.2}>
            <div>
              <motion.h3 
                className="text-2xl font-bold text-orange mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-2 h-8 bg-gradient-to-b from-orange to-yellow-300 rounded-full" />
                {category.name}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="group relative bg-gradient-to-br from-grey to-grey/80 rounded-2xl p-6 
                        border-2 border-transparent hover:border-orange/30 transition-all duration-300 
                        shadow-xl shadow-black/30 hover:shadow-[0_0_40px_rgba(211,233,122,0.3)] 
                        overflow-hidden cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: shouldReduceMotion ? 1 : 1.05,
                        y: shouldReduceMotion ? 0 : -5
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 
                          group-hover:from-orange/10 group-hover:to-purple-500/5 transition-all duration-300"
                      />
                      
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <motion.div
                          whileHover={shouldReduceMotion ? {} : { rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon 
                            className="text-5xl transition-colors duration-300" 
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        <span className="text-sm font-semibold text-white group-hover:text-orange 
                          transition-colors text-center">
                          {skill.name}
                        </span>
                      </div>

                      {/* Glassmorphism overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
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
