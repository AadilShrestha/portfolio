import React from "react";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Footer from "./Footer";

const Pages = () => {
  return (
    <div className="px-10 py-10 md:px-16 max-w-7xl mx-auto sm:px-24">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Footer />
    </div>
  );
};

export default Pages;
