/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        rotate: 'rotate 9s infinite',
      }
    },
  },
  plugins: [],
}
