// components/Experience.tsx
interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
  }
  
  export default function Experience() {
    const experiences: ExperienceItem[] = [
    //   {
    //     id: 1,
    //     role: 'Senior Full-Stack Developer',
    //     company: 'Tech Innovations Inc.',
    //     period: '2020 - Present',
    //     description: 'Led a team of developers in building scalable web applications. Implemented CI/CD pipelines and improved performance by 40%.',
    //     technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    //   },
    //   {
    //     id: 2,
    //     role: 'Frontend Developer',
    //     company: 'Digital Solutions LLC',
    //     period: '2018 - 2020',
    //     description: 'Developed responsive user interfaces for client projects. Collaborated with designers to implement pixel-perfect designs.',
    //     technologies: ['JavaScript', 'React', 'SASS', 'Webpack']
    //   },
    //   {
    //     id: 3,
    //     role: 'Web Developer Intern',
    //     company: 'StartUp Ventures',
    //     period: '2017 - 2018',
    //     description: 'Built and maintained company website. Assisted in developing internal tools and applications.',
    //     technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
    //   },
    ];
  
    return (
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Work Experience
          </h2> */}
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="md:w-1/2 mb-8 md:mb-0 md:px-10">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2 mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center md:w-1/2 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900 z-10"></div>
                  </div>
                  
                  {/* Empty spacer */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }