// pages/index.tsx
import { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;

    const initialDarkMode = savedTheme
      ? savedTheme === "dark"
      : systemPrefersDark;

    setDarkMode(initialDarkMode);

    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Beka Temesgen | Enterprise Full Stack Developer</title>
        <meta name="description" content="Helping enterprises reduce backend latency by 40% and ship accessible full‑stack apps." />
      </Head>

      <div className="flex bg-enterprise-bg-light dark:bg-enterprise-bg-dark transition-colors duration-300">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-1 lg:ml-80 min-h-screen">
          <div className="max-w-enterprise mx-auto px-6 py-12 md:px-16 lg:px-24">
            <section id="hero" className="mb-24">
              <Hero />
            </section>
            
            <section id="projects" className="mb-24 pt-12">
              <Projects />
            </section>

            <section id="experience" className="mb-24 pt-12">
              <Experience />
            </section>

            <section id="skills" className="mb-24 pt-12">
              <Skills />
            </section>

            <section id="contact" className="mb-24 pt-12">
              <Contact />
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}