/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)'
    },
    screens: {
      'sm': '375px',
      'lg': '1440px'
    },
    maxWidth: {
      'lg': '1440px'
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}