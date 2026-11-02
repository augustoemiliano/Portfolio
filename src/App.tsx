import { MotionConfig } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    // Respeita "reduzir movimento" do sistema operacional.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-surface">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-accent-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1} className="focus:outline-none">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
