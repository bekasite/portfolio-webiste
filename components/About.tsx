// components/About.tsx
export default function About() {
    return (
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience building web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new frameworks 
                and technologies. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="mr-3 text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Responsive Design</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">API Development</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Database Design</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Approach</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I believe in creating solutions that are not only functional but also provide exceptional user experiences. 
                  My development process focuses on:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-600 dark:text-blue-400 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Clean, maintainable code with best practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-600 dark:text-blue-400 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Performance optimization and fast loading times</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-600 dark:text-blue-400 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Responsive design that works on all devices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-blue-600 dark:text-blue-400 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Thorough testing and debugging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }