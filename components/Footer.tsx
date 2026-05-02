// components/Footer.tsx
export default function Footer() {
  const lastUpdated = "April 2026"; // Or use dynamic logic if preferred

  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Beka Temesgen. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, TypeScript, and Professional Integrity.</p>
        </div>
        <div className="flex items-center space-x-2 text-xs font-medium text-gray-400 dark:text-gray-600 uppercase tracking-widest">
          <span>Last updated:</span>
          <span className="text-enterprise-secondary">{lastUpdated}</span>
        </div>
      </div>
    </footer>
  );
}