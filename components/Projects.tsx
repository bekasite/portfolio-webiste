// components/Projects.tsx
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import CaseStudyModal from "./CaseStudyModal";

interface CaseStudy {
  id: number;
  title: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  status: 'live' | 'mvp' | 'archived';
  link?: string;
  github?: string;
  image?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "HDMXperts – Managed Services",
      problem: "Enterprises struggled with procurement friction when hiring niche consultants",
      solution: "End-to-end managed service platform with zero-bidding model",
      result: "Reduced consultant onboarding time from 3 weeks to 48 hours",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      status: 'mvp',
      link: "https://hdmxperts.com",
      image: "/hdm.png"
    },
    {
      id: 2,
      title: "SRMS – Student Result Management",
      problem: "Paper-based result distribution caused delays and errors in academic record tracking",
      solution: "Developed a centralized digital portal for secure grade entry and real-time student access",
      result: "100% reduction in paper waste and 70% faster result dissemination",
      tech: ["React", "Node.js", "MySQL", "Tailwind"],
      status: 'live',
      link: "https://student-record-managment-system.vercel.app",
      github: "https://github.com/bekasite",
      image: "/srms.png"
    },
    {
      id: 3,
      title: "Bisho – Food Delivery Platform",
      problem: "Local restaurants struggled to reach customers and manage deliveries efficiently across multiple channels",
      solution: "Built a multi-platform delivery ecosystem with real-time tracking, admin dashboard, and customer/rider mobile apps",
      result: "Deployed as a full-stack monorepo serving customers, riders, and admin via web and mobile",
      tech: ["Next.js", "Express", "MongoDB", "Socket.io", "Flutter", "Docker"],
      status: 'mvp',
      github: "https://github.com/bekasite"
    },
    {
      id: 4,
      title: "X-Prime Mail – Serverless Email",
      problem: "Google Workspace and Zoho wanted a recurring monthly subscription just to give my small team a branded @domain email system. Mail servers like Postfix required endless operational maintenance.",
      solution: "Built a serverless alternative from scratch providing internal email with custom domain, strict admin approval flows, and consistent branded templates—all without running a traditional mail server",
      result: "Eliminated subscription costs and operational overhead while maintaining full control over team email with custom domain and admin approval routing",
      tech: ["Next.js", "Prisma", "MySQL", "NextAuth", "Resend"],
      status: 'live',
      github: "https://github.com/bekasite"
    },
    {
      id: 5,
      title: "AAU Bazar – Student E-commerce",
      problem: "AAU students paid 25% above market due to lack of student‑verified vendors",
      solution: "Built vendor verification + student email domain check",
      result: "1,200 users in 3 months, avg 18% savings",
      tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
      status: 'live',
      link: "https://aau-bazar.vercel.app",
      image: "/aau-bazar.png"
    },
    {
      id: 6,
      title: "LinkedIn Rental SaaS",
      problem: "Manual management of shared corporate accounts led to security risks and payout delays",
      solution: "Automated encryption layer + real-time earnings dashboard",
      result: "Reduced manual overhead by 80%, 0% security breaches in 12 months",
      tech: ["Next.js", "Express", "Encryption API", "Redux"],
      status: 'live',
      link: "https://linkedin-rental.vercel.app/",
      image: "/linkedin.png"
    },
    {
      id: 7,
      title: "Chapa Payment Library",
      problem: "Developers lacked a simplified way to integrate Ethiopia's Chapa payment gateway into modern apps",
      solution: "Created an open-source wrapper and SDK for seamless API integration",
      result: "Used by 10+ local startups and simplified payment onboarding for developers",
      tech: ["TypeScript", "Axios", "Jest"],
      status: 'live',
      github: "https://github.com/bekasite",
      image: "/chapa.png"
    },
    {
      id: 8,
      title: "Vendrop – Delivery Ecosystem",
      problem: "Local vendors struggled to track deliveries and manage couriers efficiently",
      solution: "Built a real-time tracking dashboard with automated courier assignment",
      result: "Increased delivery completion rate by 25% for pilot vendors",
      tech: ["Next.js", "Socket.io", "MongoDB"],
      status: 'mvp',
      github: "https://github.com/bekasite",
      image: "/vendrop.png"
    },
    {
      id: 9,
      title: "Amazon Full-Stack Clone",
      problem: "Demonstrating proficiency in complex e-commerce flows including cart and checkout",
      solution: "Built a high-fidelity replica with Stripe integration and Firebase authentication",
      result: "Successfully handled real-time cart updates and secure payment processing",
      tech: ["React", "Firebase", "Stripe API"],
      status: 'live',
      github: "https://github.com/bekasite",
      image: "/amazon.png"
    },
    {
      id: 10,
      title: "Netflix UI Prototype",
      problem: "Visualizing large datasets of movies with a premium, smooth user experience",
      solution: "Integrated TMDB API with Framer Motion for high-performance animations",
      result: "Achieved sub-200ms transitions between movie categories",
      tech: ["React", "TMDB API", "Framer Motion"],
      status: 'live',
      github: "https://github.com/bekasite",
      image: "/netlfix.jpg"
    }
  ];

  const openModal = (project: CaseStudy) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const statusColors = {
    live: 'bg-enterprise-status-live',
    mvp: 'bg-enterprise-status-mvp',
    archived: 'bg-enterprise-status-archived'
  };

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-enterprise-primary dark:text-white mb-2">Featured Case Studies</h2>
        <div className="h-1 w-20 bg-enterprise-secondary"></div>
      </div>

      <div className="space-y-16">
        {caseStudies.map((project) => (
          <div key={project.id} className="group relative bg-white dark:bg-[#1A1F2E] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden transition-all hover:border-enterprise-secondary hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              {project.image && (
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              <div className={`p-8 ${project.image ? 'lg:w-3/5' : 'w-full'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${statusColors[project.status]}`}></span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400">
                        {project.status} Project
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-enterprise-primary dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-enterprise-primary dark:hover:text-white transition-colors" title="View Code">
                        <FaGithub size={22} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-enterprise-primary dark:hover:text-white transition-colors" title="Launch App">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-enterprise-secondary mb-2 tracking-widest">Problem</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-enterprise-secondary mb-2 tracking-widest">Solution</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-enterprise-secondary mb-2 tracking-widest">Result</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold leading-relaxed">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => openModal(project)}
                    className="text-sm font-bold text-enterprise-primary dark:text-teal-400 hover:underline inline-flex items-center group/btn"
                  >
                    Deep Dive
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </div>
  );
}