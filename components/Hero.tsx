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
    <section id="home" className="min-h-screen flex items-center pt-16 pb-28 bg-gradient-to-br from-brand-primary-50 to-brand-primary-100 dark:from-brand-primary-900 dark:to-brand-primary-800 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary-900 dark:text-white mb-4">
            Hi, I&apos;m <span className="text-brand-secondary-600 dark:text-brand-secondary-300">Beka</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-primary-700 dark:text-gray-200 mb-6 h-12">
            {displayText}<span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-brand-primary-600 dark:text-gray-300 mb-8 max-w-lg">
            I build exceptional digital experiences focused on performance, accessibility, and clean design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="btn-primary"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border-2 border-brand-secondary-500 text-brand-secondary-700 dark:text-brand-secondary-300 hover:bg-brand-secondary-50 dark:hover:bg-brand-primary-800 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          {/* Enhanced profile picture with cool animations and shadows */}
          <div className="relative group">
            {/* Outer glowing ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary-600 to-brand-secondary-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 animate-pulse"></div>
            
            {/* Animated border gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary-700 via-brand-secondary-500 to-brand-primary-700 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow">
              <div className="absolute inset-[3px] bg-white dark:bg-brand-primary-800 rounded-full"></div>
            </div>
            
            {/* Main profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w- lg:h-90 bg-gradient-to-br from-brand-primary-700 to-brand-primary-600 rounded-full overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105">
              <img 
                src="/profile.png" 
                alt="Beka - Full Stack Developer"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Shine overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-secondary-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-200"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brand-secondary-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}