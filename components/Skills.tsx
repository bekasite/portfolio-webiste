// components/Skills.tsx
export default function Skills() {
  const skillCategories = [
    {
      title: "Core Stack",
      skills: ["JavaScript (ES6+)", "TypeScript", "Node.js", "Next.js", "React"]
    },
    {
      title: "Backend & Systems",
      skills: ["Express.js", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Infrastructure & DevOps",
      skills: ["AWS", "Docker", "CI/CD Pipelines", "Nginx", "GitHub Actions", "Vercel"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "Agile/Scrum", "Unit Testing (Jest)", "Design Patterns", "Figma"]
    }
  ];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-enterprise-primary dark:text-white mb-2">Technical Competencies</h2>
        <div className="h-1 w-20 bg-enterprise-secondary"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-[#1A1F2E] p-8 border border-gray-100 dark:border-gray-800 rounded-lg">
            <h3 className="text-lg font-bold text-enterprise-primary dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-enterprise-primary dark:text-gray-300 text-sm font-medium rounded-md border border-gray-100 dark:border-gray-700 transition-colors hover:border-enterprise-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}