/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        green: '#66A060',
        yellow:'#CEB02C',
        blue: '#565F7E',
        grey: {
          100: '#F3F3F3',
          200: '#DADCE0',
          300: '#D3D6DA',
          400: '#56575E',
          DEFAULT: '#939B9F',
          600: '#818181',
          700:'#262B3C',
          800: '#202537'
        },
      }
    },
  },
  plugins: [],
}

