import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import useScrollDirection from "../hooks/useScrollDirection";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" }
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === "down" && scrolled ? -100 : 0,
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.9)" : "rgba(10, 10, 10, 1)"
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 w-full top-0 z-50 px-6 py-6 sm:px-16 sm:py-4 flex justify-between items-center backdrop-blur-md border-b-2 border-transparent hover:border-orange/10 shadow-lg shadow-black/20"
      style={{
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.3)" : "none"
      }}
    >
      <div className="hidden sm:flex gap-8 items-center">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            className="nav-links relative group font-medium"
            href={link.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="group-hover:text-orange transition-colors duration-300">{link.name}</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-yellow-300 group-hover:w-full shadow-[0_0_10px_rgba(211,233,122,0.5)]"
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </div>

      <div className="hidden sm:flex gap-6 items-center">
        <motion.a
          href="https://github.com/Aadil-Shrestha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-orange transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/aadil-shrestha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-orange transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
      </div>

      <div className="sm:hidden flex">
        <motion.button
          onClick={navOpen}
          whileTap={{ scale: 0.9 }}
          className="text-2xl text-orange hover:text-yellow-300 transition-colors relative"
        >
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed h-screen w-full top-0 left-0 bg-gradient-to-br from-[#0A0A0A] via-grey/20 to-[#0A0A0A] backdrop-blur-md"
            >
              <div className="px-6 py-6 flex justify-end">
                <motion.button
                  onClick={navOpen}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl text-orange hover:text-yellow-300 transition-colors"
                >
                  <FaTimes />
                </motion.button>
              </div>

              <motion.div
                className="flex flex-col items-center justify-center gap-8 h-full"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    className="text-3xl nav-links font-bold relative group"
                    href={link.href}
                    onClick={handleLinkClick}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      textShadow: "0 0 20px rgba(211, 233, 122, 0.8)"
                    }}
                  >
                    <span className="bg-gradient-to-r from-white to-orange bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
