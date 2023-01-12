/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        bg: '#1d1e24',
        input: '#16171b',
        header: '#20232b',
        chat: '#20232b',
      },
    },
  },
  variants: {},
  plugins: [],
}
