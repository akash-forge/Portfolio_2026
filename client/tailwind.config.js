/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#63b3ed',
          DEFAULT: '#3182ce',
          dark: '#2b6cb0',
        },
        secondary: {
          light: '#f6ad55',
          DEFAULT: '#dd6b20',
        },
        dark: '#1a202c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
