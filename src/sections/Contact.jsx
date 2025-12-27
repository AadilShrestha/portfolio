import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import FadeInWhenVisible from "../components/animated/FadeInWhenVisible";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setFormStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  return (
    <div className="py-20 relative" id="contact">
      {!shouldReduceMotion && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <div className="mb-16 relative z-10">
        <FadeInWhenVisible direction="right">
          <h2 className="title text-5xl md:text-7xl bg-gradient-to-r from-white via-orange to-white bg-clip-text text-transparent">Get In Touch</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible direction="down" delay={0.2}>
          <p className="mt-4 max-w-2xl text-gray-300">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </FadeInWhenVisible>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <FadeInWhenVisible direction="right" delay={0.3}>
          <div className="space-y-8">
            <motion.div
              className="bg-gradient-to-br from-grey to-grey/80 rounded-2xl p-6 border-2 border-transparent hover:border-orange/30 shadow-xl shadow-black/30 hover:shadow-[0_0_40px_rgba(211,233,122,0.3)] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-orange transition-colors">Email</h3>
              <a 
                href="mailto:aadil@example.com"
                className="text-orange hover:underline relative z-10 font-medium"
              >
                aadil@example.com
              </a>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-grey to-grey/80 rounded-2xl p-6 border-2 border-transparent hover:border-orange/30 shadow-xl shadow-black/30 hover:shadow-[0_0_40px_rgba(211,233,122,0.3)] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-orange transition-colors">Location</h3>
              <p className="text-orange relative z-10 font-medium">Kathmandu, Nepal</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-grey to-grey/80 rounded-2xl p-6 border-2 border-transparent hover:border-orange/30 shadow-xl shadow-black/30 hover:shadow-[0_0_40px_rgba(211,233,122,0.3)] transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-orange transition-colors">Social Links</h3>
              <div className="flex gap-4 relative z-10">
                {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-gradient-to-r from-orange to-yellow-300 text-black rounded-lg font-semibold shadow-lg shadow-orange/30 hover:shadow-orange/50 transition-all"
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.1, 
                      boxShadow: "0 0 30px rgba(211, 233, 122, 0.6)" 
                    }}
                    whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible direction="left" delay={0.4}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 bg-gradient-to-br from-grey to-grey/80 rounded-2xl border-2 border-transparent focus:border-orange outline-none transition-all text-white placeholder-gray-400 shadow-lg shadow-black/20 focus:shadow-[0_0_30px_rgba(211,233,122,0.3)]"
                whileFocus={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              />
            </div>

            <div>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 bg-gradient-to-br from-grey to-grey/80 rounded-2xl border-2 border-transparent focus:border-orange outline-none transition-all text-white placeholder-gray-400 shadow-lg shadow-black/20 focus:shadow-[0_0_30px_rgba(211,233,122,0.3)]"
                whileFocus={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              />
            </div>

            <div>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="6"
                className="w-full px-6 py-4 bg-gradient-to-br from-grey to-grey/80 rounded-2xl border-2 border-transparent focus:border-orange outline-none transition-all resize-none text-white placeholder-gray-400 shadow-lg shadow-black/20 focus:shadow-[0_0_30px_rgba(211,233,122,0.3)]"
                whileFocus={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange via-yellow-300 to-orange text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(211,233,122,0.6)] transition-all duration-300 disabled:opacity-50 shadow-lg shadow-orange/30 relative overflow-hidden group"
              whileHover={{ scale: (isSubmitting || shouldReduceMotion) ? 1 : 1.02 }}
              whileTap={{ scale: (isSubmitting || shouldReduceMotion) ? 1 : 0.98 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-2 border-black border-t-transparent rounded-full relative z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <FaPaperPlane className="relative z-10" />
                </>
              )}
            </motion.button>

            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border-2 border-green-500 rounded-2xl p-4 text-center font-semibold shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Contact;
