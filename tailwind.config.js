// tailwind.config.js
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
        brand: {
          primary: {
            50: "#eef3fa",
            100: "#d9e4f2",
            200: "#b8cbe5",
            300: "#8faacf",
            400: "#5f81b4",
            500: "#3f649a",
            600: "#2f4d7d",
            700: "#20385f",
            800: "#162946",
            900: "#0f1d33",
          },
          secondary: {
            50: "#fff9eb",
            100: "#fef0c7",
            200: "#fde08a",
            300: "#facc4b",
            400: "#f4b721",
            500: "#e59f11",
            600: "#c97d0d",
            700: "#a35c10",
            800: "#864914",
            900: "#703c14",
          },
        },
      },
    },
  },
  plugins: [],
}