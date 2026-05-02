// components/Contact.tsx
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-enterprise-primary dark:text-white mb-2">Get in Touch</h2>
        <div className="h-1 w-20 bg-enterprise-secondary"></div>
      </div>

      <div className="max-w-2xl">
        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
          I am currently available for selective contract opportunities and full-time senior roles. If you have a project that requires scalable architecture or full-stack expertise, let&apos;s connect.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase font-bold text-gray-500 dark:text-gray-400 mb-2 tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded focus:ring-1 focus:ring-enterprise-secondary focus:border-enterprise-secondary outline-none transition-all text-gray-900 dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase font-bold text-gray-500 dark:text-gray-400 mb-2 tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded focus:ring-1 focus:ring-enterprise-secondary focus:border-enterprise-secondary outline-none transition-all text-gray-900 dark:text-white"
                placeholder="john@enterprise.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase font-bold text-gray-500 dark:text-gray-400 mb-2 tracking-widest">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded focus:ring-1 focus:ring-enterprise-secondary focus:border-enterprise-secondary outline-none transition-all text-gray-900 dark:text-white resize-none"
              placeholder="Tell me about your project or role..."
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full sm:w-auto px-10 py-4 bg-enterprise-primary text-white rounded font-bold transition-all ${
                status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 shadow-sm hover:shadow-md'
              }`}
            >
              {status === 'submitting' ? 'Sending...' : status === 'submitted' ? 'Message Sent' : 'Send Inquiry'}
            </button>
            <p className="text-[10px] text-gray-400 dark:text-gray-500 italic">
              Protected by enterprise-grade spam filtering. No CAPTCHA required.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}