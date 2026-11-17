import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MarqueeBand from "./components/MarqueeBand.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import MoreAbout from "./components/MoreAbout.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { marqueeItems } from "./content.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBand items={marqueeItems} />
        <Projects />
        <MarqueeBand items={marqueeItems} />
        <About />
        <Experience />
        <Skills />
        <MoreAbout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
