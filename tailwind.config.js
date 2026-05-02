/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        enterprise: {
          primary: '#0A2B4E',
          secondary: '#2C7A7B',
          bg: {
            light: '#F8FAFC',
            dark: '#111827',
          },
          status: {
            live: '#10B981',
            mvp: '#F59E0B',
            archived: '#6B7280',
          }
        },
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
      },
      lineHeight: {
        'tight': '1.2',
        'relaxed': '1.5',
      },
      maxWidth: {
        'enterprise': '1280px',
      }
    },
  },
  plugins: [],
}