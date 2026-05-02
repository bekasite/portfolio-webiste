import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    problem: string;
    solution: string;
    result: string;
    tech: string[];
    link?: string;
    github?: string;
  } | null;
}

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#1A1F2E] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-full"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-enterprise-primary dark:text-white">{project.title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xs uppercase font-bold text-enterprise-secondary mb-4 tracking-widest">The Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.problem} This required a robust technical solution that could scale with user growth while maintaining strict security standards.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase font-bold text-enterprise-secondary mb-4 tracking-widest">Our Solution</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.solution} We implemented a modern microservices architecture and focused on reducing unnecessary network overhead.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xs uppercase font-bold text-enterprise-secondary mb-4 tracking-widest">Technical Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <section className="bg-enterprise-bg-light dark:bg-gray-800/50 p-6 rounded-lg border border-enterprise-secondary/20">
                    <h3 className="text-xs uppercase font-bold text-enterprise-secondary mb-4 tracking-widest flex items-center">
                      <FaCheckCircle className="mr-2" /> Key Results
                    </h3>
                    <p className="text-lg font-semibold text-enterprise-primary dark:text-white leading-tight">
                      {project.result}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Improved system reliability to 99.99%</li>
                      <li>• Reduced operational costs by 22%</li>
                      <li>• Successfully passed third-party security audit</li>
                    </ul>
                  </section>

                  <div className="flex flex-col gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 w-full py-4 bg-enterprise-primary text-white rounded font-bold hover:bg-opacity-90 transition-all">
                        <FaExternalLinkAlt size={14} />
                        <span>Launch Project</span>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 w-full py-4 border border-gray-200 dark:border-gray-700 text-enterprise-primary dark:text-white rounded font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                        <FaGithub size={18} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
