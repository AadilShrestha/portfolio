import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Footer from "./Footer";

const Pages = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 sm:px-10 lg:px-16">
      <section id="home" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="case-studies" className="scroll-mt-28">
        <Projects />
      </section>

      <section id="capabilities" className="scroll-mt-28">
        <Skills />
      </section>

      <section id="process" className="scroll-mt-28">
        <About />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Footer />
      </section>
    </div>
  );
};

export default Pages;
