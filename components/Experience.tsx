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
    {
      id: 1,
      role: "Full-Stack Developer(intern)",
      company: "Code Alpha Inc.",
      period: "October 1-30, 2025",
      description: "Completing Given Tasks as Full-stack Developer",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    },
      {
        id: 2,
        role: 'Frontend Dev',
        company: 'Addis TeenCode Hackathon',
        period: 'June 8-9, 2024',
        description: 'Collaborated with a dynamic team to develop innovative solutions during an intensive 48-hour hackathon, showcasing rapid prototyping and creative problem-solving skills.',
        technologies: ['React']
      },
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
    <section
      id="experience"
      className="py-20 bg-brand-primary-50 dark:bg-brand-primary-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary-900 dark:text-white mb-16">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-brand-secondary-200 dark:bg-brand-primary-700 transform -translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-10">
                  <div className="card-brand p-6">
                    <span className="text-brand-secondary-600 dark:text-brand-secondary-300 font-semibold">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-brand-primary-800 dark:text-white mt-2 mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-brand-primary-700 dark:text-gray-300 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-brand-primary-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-brand-primary-100 dark:bg-brand-primary-700 text-brand-primary-800 dark:text-brand-secondary-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex items-center justify-center md:w1/2 relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-brand-secondary-500 dark:bg-brand-secondary-300 border-4 border-white dark:border-brand-primary-900 z-10"></div>
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
