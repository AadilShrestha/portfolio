import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/Aadil-Shrestha",
      color: "hover:text-purple-400"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/aadil-shrestha",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:aadilshrestha4@gmail.com",
      color: "hover:text-orange"
    }
  ];

  const SocialLinks = () => (
    <motion.div 
      className="flex gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            className={`text-3xl text-gray-400 ${link.color} transition-colors duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.2, 
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            aria-label={link.name}
          >
            <Icon />
          </motion.a>
        );
      })}
    </motion.div>
  );

  const Copyright = () => (
    <motion.div 
      className="text-center space-y-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-gray-400 font-medium">
        © 2025 Aadil Shrestha
      </p>
      <p className="text-gray-500 text-sm">
        Built with React & Tailwind
      </p>
    </motion.div>
  );

  return (
    <footer className="py-12 border-t-2 border-grey/30 mt-20">
      <div className="flex flex-col items-center gap-6">
        <SocialLinks />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
