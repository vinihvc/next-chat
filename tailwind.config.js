/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        bg: '#1d1e24',
        input: '#16171b',
        header: '#181920',
        chat: '#20232b',
      },
    },
  },
  variants: {},
  plugins: [],
}
