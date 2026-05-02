// components/Experience.tsx
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Solutions Architect / Lead Developer",
      company: "HDMXperts",
      period: "2024 – Present",
      bullets: [
        "Architected end-to-end managed service workflow reducing procurement latency by 90%",
        "Implemented secure RBAC system for 3 distinct user tiers (Admin, Expert, Service Lead)",
        "Integrated multi-stage SME engagement pipeline with 7-factor matching algorithm"
      ],
    },
    {
      id: 2,
      role: "Full-Stack Developer (Contract)",
      company: "Code Alpha Inc.",
      period: "2023 – 2024",
      bullets: [
        "Delivered 3 full‑stack features ahead of schedule (REST APIs + React frontend)",
        "Reduced API response time by 30% through query optimization and Redis caching",
        "Scaled document upload system to handle 10k+ requests/day with 99.9% uptime"
      ],
    },
    {
      id: 3,
      role: "Lead Frontend Developer",
      company: "Addis TeenCode Hackathon",
      period: "2024",
      bullets: [
        "Led a team of 4 to build a winning rapid prototype in 48 hours",
        "Optimized React component tree reducing initial bundle size by 45%",
        "Implemented accessible UI components following WCAG 2.1 guidelines"
      ],
    }
  ];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-enterprise-primary dark:text-white mb-2">Professional Experience</h2>
        <div className="h-1 w-20 bg-enterprise-secondary"></div>
      </div>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white dark:bg-enterprise-bg-dark border-2 border-enterprise-secondary"></div>
            
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-enterprise-primary dark:text-white">{exp.role}</h3>
                <p className="text-enterprise-secondary font-medium dark:text-teal-400">{exp.company}</p>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="text-enterprise-secondary mr-3 mt-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
