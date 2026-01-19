// components/Projects.tsx
import { useState } from "react";
import { FaGithub, FaGlobe, FaExternalLinkAlt, FaTimes, FaChevronDown, FaChevronUp, FaStar, FaCode, FaLayerGroup } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link1: string;
  link2: string;
  featured?: boolean;
  complexity?: number; // 1-5 rating
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "AAU-BAZAR",
      description: "E-commerce platform specifically designed for Addis Ababa University students to purchase products at discounted prices. Features include user authentication, product browsing by categories, shopping cart functionality, and special student discounts. Built with a focus on accessibility and student-friendly pricing.",
      image: "/aau-bazar.png",
      tags: ["Next.js", "node.js", "framer-motion","carousel", "tailwind", "cloudinary","express", "mongodb", "jwt", "e-commerce"],
      category: "fullstack",
      link1: "https://aau-bazar.vercel.app",
      link2: "https://github.com/bekasite/",
      featured: true,
      complexity: 4
    },
    {
      id: 2,
      title: "Amazon Clone",
      description: "A full-stack e-commerce clone with React, Stripe, and FakeStoreAPI. This project includes user authentication, product catalog, shopping cart, and secure payment processing with Stripe integration. Built with modern React patterns and Firebase for backend services.",
      image: "/amazon.png",
      tags: ["react", "firebase", "node", "FakeStoreAPI", "stripe"],
      category: "fullstack",
      link1: "https://bt-amazon.netlify.app/",
      link2: "https://github.com/bekasite/amazon-clone-full-stack-",
      featured: true,
      complexity: 4
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: "A full-stack web application to watch movie trailers using API from The Movie DB. Features include user authentication, movie browsing by categories, search functionality, and trailer playback. Implemented with Next.js for optimal performance and SEO.",
      image: "/netlfix.jpg",
      tags: ["next.js", "next-auth", "tailwind", "the-movieDB"],
      category: "fullstack",
      link1: "https://bt-netflix-clone.vercel.app/",
      link2: "https://github.com/bekasite/netflix-clone",
      featured: true,
      complexity: 3
    },
    {
      id: 4,
      title: "LinkedIn Rental Platform",
      description: "A Next.js SaaS platform for monetizing LinkedIn accounts with bank-level security, real-time earnings dashboard, and verified partner system. Features include encryption, payout processing, and admin analytics.",
      image: "/linkedin\.png", // Add this image
      tags: ["next.js", "node.js", "express", "mongodb", "jwt", "encryption", "SaaS"],
      category: "fullstack",
      link1: "https://linkedin-rental.vercel.app/",
      link2: "https://github.com/bekasite/",
      featured: true,
      complexity: 5
    },
    {
      id: 5,
      title: "Vendrop Marketplace",
      description: "Full-stack mobile marketplace connecting verified traders with buyers. Features include ID verification, product management, real-time chat, and order tracking.",
      image: "/vendrop.png", // Add this image
      tags: ["flutter", "node.js", "express", "mongodb", "ID verification", "real-time"],
      category: "fullstack",
      link1: "#",
      link2: "https://github.com/bekasite/",
      complexity: 4
    },
    {
      id: 6,
      title: "SRMS",
      description: "A comprehensive student record management system that generates certificates for each student and provides detailed yearly statistical reports. Features include admin dashboard, student profiling, automated certificate generation, and data analytics with visual charts.",
      image: "/srms.png",
      tags: ["node", "express", "jwt", "MongoDB"],
      category: "fullstack",
      link1: "#",
      link2: "https://github.com/bekasite/"
    },
    {
      id: 7,
      title: "Portfolio Website",
      description: "A fully responsive portfolio website with dark mode toggle and smooth animations. Built with modern design principles featuring gradient backgrounds, interactive elements, and optimized performance.",
      image: "/portfolio.png",
      tags: ["nextjs", "tailwind", "framer"],
      category: "frontend",
      link1: "https://beka-temesgen.netlify.app",
      link2: "https://github.com/bekasite/portfolio-webiste",
    },
    {
      id: 8,
      title: "Chapa Payment E-commerce",
      description: "A fully functional e-commerce website with Chapa payment integration. Features include product management, user cart, wishlist, order tracking, and secure payment processing.",
      image: "/chapa.png",
      tags: ["nextjs", "chapa api", "tailwind"],
      category: "fullstack",
      link1: "https://ecommerce-chapa-integration.vercel.app/",
      link2: "https://github.com/bekasite/ecommerce-chapa-integration",
    },
    {
      id: 9,
      title: "Vendrop",
      description: "Developing a full-stack mobile marketplace connecting verified traders with buyers (launching soon)\n•Implemented secure ID verification for traders using document upload and backend validation",
      image: "/vendrop.png",
      tags: ["flutter", "nextjs", "mongodb", "cloudinary"],
      category: "apps",
      link1: "#",
      link2: "#",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "apps",  name: "Mobile Apps" }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  const filteredFeatured = activeFilter === "all" 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);
  
  const filteredOther = activeFilter === "all" 
    ? otherProjects 
    : otherProjects.filter(project => project.category === activeFilter);

  const allFilteredProjects = [...filteredFeatured, ...filteredOther];
  
  const displayedProjects = showAll 
    ? allFilteredProjects 
    : filteredFeatured.slice(0, 4);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              Featured Projects
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are my top projects showcasing full-stack expertise. Click on any project to explore details.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{projects.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{featuredProjects.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Featured</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{otherProjects.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Other Projects</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {projects.filter(p => p.category === 'fullstack').length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Full-Stack</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                <FaLayerGroup className="w-4 h-4" />
                {filter.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-y-[-8px] border border-gray-100 dark:border-gray-700 cursor-pointer h-full"
                    onClick={() => openModal(project)}
                  >
                    {/* Project Header with Badge */}
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                            <FaStar className="w-3 h-3" /> Featured
                          </span>
                        </div>
                      )}
                      {project.complexity && (
                        <div className="absolute top-4 right-4 flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaCode
                              key={i}
                              className={`w-3 h-3 ${
                                i < project.complexity!
                                  ? "text-blue-500"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View Details Button */}
                      <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                        <span>View Details</span>
                        <FaExternalLinkAlt className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More/Less Button */}
          {allFilteredProjects.length > 4 && (
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                {showAll ? (
                  <>
                    <FaChevronUp className="w-4 h-4" />
                    Show Less Projects
                  </>
                ) : (
                  <>
                    <FaChevronDown className="w-4 h-4" />
                    View All Projects ({allFilteredProjects.length - 4} more)
                  </>
                )}
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Background Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-3 bg-white dark:bg-gray-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200"
            >
              <FaTimes className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Project Image */}
              <div className="h-64 md:h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {selectedProject.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full flex items-center gap-1">
                        <FaStar className="w-3 h-3" /> Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Full Tags */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <FaCode className="w-5 h-5 text-blue-500" />
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-800 dark:text-blue-300 rounded-lg font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.link1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex-1 ${
                      selectedProject.link1 !== "#" 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <FaGlobe className="w-5 h-5" />
                    <span>Live Demo</span>
                    {selectedProject.link1 !== "#" && (
                      <FaExternalLinkAlt className="w-4 h-4" />
                    )}
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.link2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-100 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 flex-1 border border-gray-200 dark:border-gray-600"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}