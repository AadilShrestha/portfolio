import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";
import CountUpAnimation from "../components/animated/CountUpAnimation";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const experiences = [
    {
      year: "2024 - Present",
      title: "Fullstack Developer",
      company: "Deeyosoft",
      description: "Led development of 12+ enterprise applications using React, TypeScript, NestJS, and MongoDB. Architected microservices systems, implemented JWT authentication, and built interactive dashboards with real-time data visualization."
    },
    {
      year: "2023 - 2024",
      title: "Junior Developer",
      company: "Deeyosoft",
      description: "Developed fullstack applications with React and NestJS. Built RESTful APIs, implemented form validation systems, and integrated third-party services including maps and payment gateways."
    },
    {
      year: "2023",
      title: "Development Intern",
      company: "College Development Platform",
      description: "4-month internship learning modern web development practices. Contributed to frontend development with React and gained experience in version control and collaborative development."
    }
  ];

  const stats = [
    { number: 12, label: "Projects Completed", suffix: "+" },
    { number: 5, label: "Happy Clients", suffix: "+" },
    { number: 1, label: "Years Experience", suffix: "+" },
    { number: 100, label: "Client Satisfaction", suffix: "%" }
  ];

  return (
    <div className="py-20 relative" id="about">
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <div className="mb-16 relative z-10">
        <FadeInWhenVisible direction="right">
          <h2 className="title text-5xl md:text-7xl bg-gradient-to-r from-white via-orange to-white bg-clip-text text-transparent">About Me</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="down" delay={0.2}>
          <p className="mt-4 max-w-3xl text-gray-300">
            Fullstack Developer with 1.5 years of experience building enterprise web applications. 
            Specialized in React, TypeScript, and NestJS with expertise in microservices architecture, 
            real-time systems, and complex data visualization. Delivered 12+ production applications 
            including waste management platforms, government portals, and healthcare systems.
          </p>
        </FadeInWhenVisible>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 relative z-10">
        {stats.map((stat, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1}>
            <motion.div 
              className="bg-gradient-to-br from-grey to-grey/80 rounded-2xl p-6 text-center border-2 border-transparent shadow-lg shadow-black/20 relative overflow-hidden group"
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.05,
                borderColor: "#D3E97A",
                boxShadow: "0 0 40px rgba(211, 233, 122, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/10 group-hover:to-orange/20 transition-all duration-300"
              />
              <div className="text-4xl font-bold text-orange mb-2 relative z-10 drop-shadow-[0_0_10px_rgba(211,233,122,0.5)]">
                <CountUpAnimation 
                  end={stat.number}
                  duration={2}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm relative z-10 group-hover:text-white transition-colors">{stat.label}</p>
            </motion.div>
          </FadeInWhenVisible>
        ))}
      </div>

      <div className="relative z-10">
        <FadeInWhenVisible direction="right">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-orange to-yellow-300 bg-clip-text text-transparent">Experience Timeline</h3>
        </FadeInWhenVisible>

        <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange before:via-orange/50 before:to-transparent">
          {experiences.map((exp, index) => (
            <FadeInWhenVisible key={index} direction="left" delay={index * 0.1}>
              <motion.div 
                className="relative pl-8"
                whileHover={shouldReduceMotion ? {} : { x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute left-0 top-2 w-4 h-4 rounded-full bg-orange shadow-[0_0_20px_rgba(211,233,122,0.8)]"
                  whileHover={shouldReduceMotion ? {} : { 
                    scale: 1.8, 
                    boxShadow: "0 0 30px rgba(211, 233, 122, 1)" 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="bg-gradient-to-br from-grey to-grey/70 rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(211,233,122,0.2)] transition-all duration-300 border-2 border-transparent hover:border-orange/30 relative overflow-hidden group"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 relative z-10">
                    <h4 className="text-xl font-bold text-white group-hover:text-orange transition-colors">{exp.title}</h4>
                    <span className="text-orange text-sm font-semibold bg-orange/10 px-3 py-1 rounded-full mt-2 md:mt-0">{exp.year}</span>
                  </div>
                  <p className="text-orange/80 mb-2 relative z-10 font-medium">{exp.company}</p>
                  <p className="text-sm relative z-10 text-gray-300">{exp.description}</p>
                </motion.div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
