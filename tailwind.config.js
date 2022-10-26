/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#8bc540',
        'dark-accent-color': '#6f973b',
        'company-gray': '#6d6e70',
        'company-dark-gray': '#3f3f3f',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
