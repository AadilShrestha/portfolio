import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TiltCard from "../components/animated/TiltCard";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";
import img from "../assests/img/projects/1.png";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const [visibleProjects, setVisibleProjects] = useState(4);
  const INITIAL_DISPLAY = 4;

  const projects = [
      {
      id: 7,
      title: "Bus Booking System",
      description: "Online bus ticket booking platform with interactive seat selection, trip management, real-time availability updates, and booking form validation. Integrated payment gateway and MongoDB for data persistence.",
      year: "2024",
      role: "Fullstack Developer",
      image: img,
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React", "TypeScript", "NestJS", "MongoDB"]
    },
    {
      id: 1,
      title: "Clean for Cash",
      description: "Enterprise waste management platform with household tracking, violation reporting system, and interactive Leaflet maps. Microservices architecture with separate frontend, backend API, and analytics dashboard components.",
      year: "2024",
      role: "Fullstack Developer",
      image: img,
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React", "TypeScript", "NestJS", "MongoDB", "Redux", "Leaflet Maps", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "RCCI Platform",
      description: "Microservices-based Chamber of Commerce platform with 8+ services for member management, event coordination, and business networking. Features TanStack Query for optimized server state, PDF viewing capabilities, and Nepali localization.",
      year: "2024-2025",
      role: "Fullstack Developer",
      image: img,
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React", "TypeScript", "NestJS Microservices", "Redux", "TanStack Query", "Socket.io"]
    },

    {
      id: 4,
      title: "Clean Cash Reports",
      description: "Data visualization dashboard with interactive Recharts graphs, advanced date range filtering, command palette (⌘K), theme switching, and real-time data updates via TanStack Query. Features 20+ Radix UI components for enterprise-grade UX.",
      year: "2024",
      role: "Frontend Developer",
      image: img,
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React", "TypeScript", "Recharts", "Redux", "Tailwind", "shadcn/ui"]
    },
    {
      id: 5,
      title: "Tole Bikas Samiti",
      description: "Community committee management system with PostgreSQL database, TypeORM migrations, JWT authentication, and NestJS backend. Manages community development initiatives, member records, and project tracking.",
      year: "2024",
      role: "Fullstack Developer",
      image: img,
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "JWT"]
    },
    {
      id: 6,
      title: "Hospital Public Portal",
      description: "Modern hospital information portal built with React 19 and Vite 7. Features patient management system, donation tracking, department information, and responsive design with Tailwind CSS 4.",
      year: "2025",
      role: "Frontend Developer",
      image: img,
      liveUrl: "#",
      githubUrl: "#",
      tags: ["React 19", "TypeScript", "Vite 7", "Tailwind CSS 4"]
    },
 
  ];

  const [filter, setFilter] = useState("all");

  const displayedProjects = projects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projects.length;
  const remainingCount = projects.length - visibleProjects;

  return (
    <div className="mx-auto py-20 relative" id="projects">
      {!shouldReduceMotion && (
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <div className="md:w-1/2 col-span-2 mb-20 relative z-10">
        <FadeInWhenVisible direction="right">
          <h2 className="title text-5xl md:text-7xl bg-gradient-to-r from-white via-orange to-white bg-clip-text text-transparent">Featured Projects</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="down" delay={0.2}>
          <p className="mt-4 text-gray-300">
            Here are some of the selected projects that showcase my passion for
            Web development.
          </p>
        </FadeInWhenVisible>
      </div>

      <div className="grid grid-cols-1 gap-y-20 gap-x-10 md:grid-cols-2 relative z-10">
        {displayedProjects.map((project, index) => (
          <React.Fragment key={project.id}>
            <FadeInWhenVisible 
              direction="right" 
              delay={index >= INITIAL_DISPLAY ? (index - INITIAL_DISPLAY) * 0.1 : index * 0.1}
            >
              <TiltCard 
                className="justify-self-center box rounded-3xl py-10 w-full flex justify-center items-center px-12 bg-gradient-to-br from-grey to-grey/80 overflow-hidden border-2 border-transparent hover:border-orange/30 shadow-xl shadow-black/30 hover:shadow-[0_0_50px_rgba(211,233,122,0.3)] transition-all duration-300 relative group"
                tiltStrength={5}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange/0 to-orange/0 group-hover:from-orange/10 group-hover:to-purple-500/10 transition-all duration-500"
                />
                <motion.img 
                  className="object-fill relative z-10 rounded-xl shadow-2xl"
                  src={project.image} 
                  alt={project.title}
                  whileHover={shouldReduceMotion ? {} : { 
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </TiltCard>
            </FadeInWhenVisible>

            <FadeInWhenVisible 
              direction="left" 
              delay={index >= INITIAL_DISPLAY ? (index - INITIAL_DISPLAY) * 0.1 : index * 0.1}
              className="flex flex-col justify-self-start self-center"
            >
              <motion.h1 
                className="text-3xl text-white font-bold bg-gradient-to-r from-white to-orange bg-clip-text hover:text-transparent transition-all duration-300"
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h1>
              
              <p className="py-6 text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags?.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-grey to-grey/80 rounded-full text-orange border border-orange/20 shadow-lg shadow-orange/10 hover:shadow-orange/30 font-medium"
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.1,
                      borderColor: "#D3E97A",
                      boxShadow: "0 0 20px rgba(211, 233, 122, 0.4)",
                      backgroundColor: "rgba(211, 233, 122, 0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <p className="uppercase border-b-2 pb-5 border-grey text-orange/70 font-semibold tracking-wider">
                Project Info
              </p>
              
              <div className="border-b-2 pb-5 mt-2 border-grey flex justify-between hover:border-orange/30 transition-colors">
                <p className="text-gray-400">Year</p>
                <p className="text-orange font-semibold">{project.year}</p>
              </div>
              
              <div className="border-b-2 pb-5 mt-2 border-grey flex justify-between hover:border-orange/30 transition-colors">
                <p className="text-gray-400">Role</p>
                <p className="text-orange font-semibold">{project.role}</p>
              </div>

              <div className="flex gap-5 mt-8">
                <motion.button 
                  className="underline-btn relative group overflow-hidden px-4 py-2 rounded-lg"
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/20 to-orange/0"
                    initial={{ x: "-100%" }}
                    whileHover={shouldReduceMotion ? {} : { x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <a href={project.liveUrl} className="relative z-10">
                    Live demo
                  </a>
                </motion.button>
                <motion.button 
                  className="underline-btn relative group overflow-hidden px-4 py-2 rounded-lg"
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                  whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                >
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/20 to-orange/0"
                    initial={{ x: "-100%" }}
                    whileHover={shouldReduceMotion ? {} : { x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <a href={project.githubUrl} className="relative z-10">See on Github</a>
                </motion.button>
              </div>
            </FadeInWhenVisible>
          </React.Fragment>
        ))}
      </div>

      {hasMoreProjects && (
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setVisibleProjects(projects.length)}
            className="group relative px-10 py-4 bg-gradient-to-r from-orange to-yellow-300 
              text-black font-bold text-lg rounded-full overflow-hidden 
              shadow-[0_0_30px_rgba(211,233,122,0.3)] hover:shadow-[0_0_50px_rgba(211,233,122,0.6)]"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <span className="relative z-10 flex items-center gap-2">
              View {remainingCount} More Project{remainingCount !== 1 ? 's' : ''}
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={shouldReduceMotion ? {} : { y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M19 9l-7 7-7-7" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
