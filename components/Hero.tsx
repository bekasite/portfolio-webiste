// components/Hero.tsx
import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const toRotate = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, currentIndex - 1)
        : fullText.substring(0, currentIndex + 1)
      );

      if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
      
      setCurrentIndex(isDeleting ? currentIndex - 1 : currentIndex + 1);
    };

    const ticker = setTimeout(tick, isDeleting ? 75 : 150);
    return () => clearTimeout(ticker);
  }, [currentIndex, isDeleting, loopNum, toRotate]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-28 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Beka</span>
          </h1>
         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12">
            {displayText}<span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I build exceptional digital experiences focused on performance, accessibility, and clean design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-600 dark:bg-blue-700 rounded-full overflow-hidden shadow-xl">
            {/* Updated profile picture with proper styling */}
            <img 
              src="/profile.png" 
              alt="Beka - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}