import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Sidebar({ darkMode, toggleDarkMode }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[60] p-3 bg-enterprise-primary text-white rounded-md lg:hidden shadow-lg"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-80 bg-enterprise-bg-light dark:bg-enterprise-bg-dark border-r border-gray-200 dark:border-gray-800 p-8 flex flex-col z-50 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-enterprise-primary dark:text-white mb-1">
              Beka Temesgen
            </h1>
            <p className="text-enterprise-secondary font-medium dark:text-teal-400">
              Full Stack Developer
            </p>
          </div>

          <div className="mb-10">
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Specializing in high-performance full-stack applications with a focus on enterprise scalability and user-centric design.
            </p>
          </div>

          <nav className="space-y-4 mb-10">
            {[
              { label: 'Introduction', href: '#hero' },
              { label: 'Case Studies', href: '#projects' },
              { label: 'Professional Experience', href: '#experience' },
              { label: 'Competencies', href: '#skills' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-enterprise-primary dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
              <FaEnvelope className="text-enterprise-secondary" />
              <span className="text-sm truncate">beka@x-prime.dev</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/bekasite" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-enterprise-primary dark:hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/beka-temesgen-170089403/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-enterprise-primary dark:hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-enterprise-primary dark:hover:text-white transition-colors"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          <a
            href="/Beka_Temesgen_CV.pdf"
            download
            className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-enterprise-primary text-white rounded-md hover:bg-opacity-90 transition-all font-medium text-sm shadow-sm"
          >
            <FaDownload size={14} />
            <span>Download CV</span>
          </a>
          
          <p className="text-[10px] text-gray-400 dark:text-gray-600 text-center uppercase tracking-widest font-bold">
            Available for contract
          </p>
        </div>
      </aside>
    </>
  );
}
