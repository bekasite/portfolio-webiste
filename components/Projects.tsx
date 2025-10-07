// components/Projects.tsx
import { useState } from "react";
import { FaGithub, FaGlobe, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link1: string;
  link2: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Amazon Clone",
      description: "A full-stack e-commerce clone with React, Stripe, and FakeStoreAPI. This project includes user authentication, product catalog, shopping cart, and secure payment processing with Stripe integration. Built with modern React patterns and Firebase for backend services.",
      image: "/amazon.png",
      tags: ["react", "firebase", "node", "FakeStoreAPI", "stripe"],
      category: "fullstack",
      link1: "https://bt-amazon.netlify.app/",
      link2: "https://github.com/bekasite/amazon-clone-full-stack-",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "A full-stack web application to watch movie trailers using API from The Movie DB. Features include user authentication, movie browsing by categories, search functionality, and trailer playback. Implemented with Next.js for optimal performance and SEO.",
      image: "../netlfix.jpg",
      tags: ["next.js", "next-auth", "tailwind", "the-movieDB"],
      category: "fullstack",
      link1: "https://bt-netflix-clone.vercel.app/",
      link2: "https://github.com/bekasite/netflix-clone",
    },
    {
      id: 3,
      title: "SRMS",
      description: "A comprehensive student record management system that generates certificates for each student and provides detailed yearly statistical reports. Features include admin dashboard, student profiling, automated certificate generation, and data analytics with visual charts.",
      image: "../srms.png",
      tags: ["node", "express", "jwt", "MongoDB"],
      category: "fullstack",
      link1: "#",
      link2: "https://github.com/bekasite/"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A fully responsive portfolio website with dark mode toggle and smooth animations. Built with modern design principles featuring gradient backgrounds, interactive elements, and optimized performance. Includes contact forms and project showcases.",
      image: "../portfolio.png",
      tags: ["nextjs", "tailwind", "framer"],
      category: "frontend",
      link1: "https://beka-temesgen.netlify.app",
      link2: "https://github.com/bekasite/portfolio-webiste",
    },
    {
      id: 5,
      title: "Chapa Payment E-commerce",
      description: "A fully functional e-commerce website with Chapa payment integration. Features include product management, user cart, wishlist, order tracking, and secure payment processing. Built with Next.js for server-side rendering and optimized performance.",
      image: "../chapa.png",
      tags: ["nextjs", "chapa api", "tailwind"],
      category: "fullstack",
      link1: "https://ecommerce-chapa-integration.vercel.app/",
      link2: "https://github.com/bekasite/ecommerce-chapa-integration",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent works. Each project represents my passion
            for creating innovative solutions.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-100 dark:border-gray-700 cursor-pointer group"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                      <p className="text-gray-800 dark:text-white font-semibold text-sm">
                        Click to view details
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform scale-95 animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Project Image */}
              <div className="h-64 md:h-80 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Full Tags */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={selectedProject.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex-1 ${
                      selectedProject.link1 !== "#" 
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transform hover:scale-105"
                        : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <FaGlobe className="w-5 h-5" />
                    <span>Live Demo</span>
                    {selectedProject.link1 !== "#" && (
                      <FaExternalLinkAlt className="w-4 h-4" />
                    )}
                  </a>

                  <a
                    href={selectedProject.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex-1 transform hover:scale-105"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}