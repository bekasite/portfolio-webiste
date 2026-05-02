// components/Hero.tsx
export default function Hero() {
  return (
    <div className="pt-20">
      <h2 className="text-enterprise-secondary font-semibold tracking-wider uppercase text-sm mb-4">
        Enterprise Solutions Architect
      </h2>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-enterprise-primary dark:text-white leading-tight mb-8">
        I help enterprises reduce backend latency by 40% and ship accessible full‑stack apps.
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
        With 3 years of experience in high-traffic systems, I specialize in building scalable, secure, and performant web applications using modern technology stacks.
      </p>
      <div className="flex items-center space-x-6">
        <a 
          href="#projects" 
          className="px-8 py-4 bg-enterprise-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-all"
        >
          View Case Studies
        </a>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-enterprise-status-live opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-enterprise-status-live"></span>
          </span>
          <span>Available for contract or full-time</span>
        </div>
      </div>
    </div>
  );
}