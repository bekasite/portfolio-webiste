import { useState } from "react";

// components/Skills.tsx
interface Skill {
    name: string;
    level: number;
    category: string;
  }
  
  export default function Skills() {
    const skills: Skill[] = [
      { name: 'JavaScript', level: 90, category: 'frontend' },
      { name: 'TypeScript', level: 85, category: 'frontend' },
      { name: 'React', level: 88, category: 'frontend' },
      { name: 'Next.js', level: 85, category: 'frontend' },
      { name: 'Node.js', level: 82, category: 'backend' },
      { name: 'Express', level: 80, category: 'backend' },
      { name: 'Python', level: 75, category: 'backend' },
      { name: 'MongoDB', level: 78, category: 'database' },
      { name: 'PostgreSQL', level: 75, category: 'database' },
      { name: 'AWS', level: 70, category: 'devops' },
      { name: 'Docker', level: 72, category: 'devops' },
      { name: 'Git', level: 85, category: 'tools' },
    ];
  
    const categories = [
      { id: 'all', name: 'All Skills' },
      { id: 'frontend', name: 'Frontend' },
      { id: 'backend', name: 'Backend' },
      { id: 'database', name: 'Database' },
      { id: 'devops', name: 'DevOps' },
      { id: 'tools', name: 'Tools' },
    ];
  
    const [activeFilter, setActiveFilter] = useState('all');
  
    const filteredSkills = activeFilter === 'all' 
      ? skills 
      : skills.filter(skill => skill.category === activeFilter);
  
    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and continue to expand my skill set.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-800 dark:text-white font-medium">{skill.name}</span>
                  <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }