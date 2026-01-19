// pages/index.tsx
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CVViewer from "../components/CVViewer";

// Add type for component props if needed
// interface HomeProps {
//   // Add any props you might need in the future
// }

export default function Home(/* props: HomeProps */) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    
    // Safely check system preference
    const systemPrefersDark = window.matchMedia 
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;

    const initialDarkMode = savedTheme
      ? savedTheme === "dark"
      : systemPrefersDark;

    setDarkMode(initialDarkMode);

    // Apply the theme class to the document element
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#111827"; // gray-900
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffffff"; // white
    }
  }, []);

  const toggleDarkMode = (): void => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#111827"; // gray-900
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffffff"; // white
      localStorage.setItem("theme", "light");
    }
  };

  // Loading state
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Beka Temesgen - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in modern web technologies. Experienced in React, Next.js, Node.js, and more." />
        <meta name="keywords" content="Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript" />
        <meta name="author" content="Beka Temesgen" />
        <link rel="icon" href="/logo.png" />
        <meta name="google-adsense-account" content="ca-pub-7194352745925271" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Beka Temesgen - Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer Portfolio" />
        <meta property="og:type" content="website" />
        
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Add AdSense Script */}
      <script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7194352745925271"
        crossOrigin="anonymous"
      />

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CVViewer />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}