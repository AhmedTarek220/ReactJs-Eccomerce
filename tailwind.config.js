/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C907E',
        secondary: '#6c757d',
        black: '#111',
        light: '#F1F1F0',
      },
      fontFamily: {
        marcellus: ['"Marcellus"', 'serif'],
      },
    },
  },
  plugins: [],
} 
