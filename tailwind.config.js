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
        black: '#202537',
        green: '#66A060',
        yellow:'#CEB02C',
        blue: '#565F7E',
        grey: {
          100: '#F3F3F3',
          150: '#939B9F',
          200: '#DADCE04D',
          250: '#DADCE008',
          300: '#939B9F4D',
          350: '#DADCE0',
          400: '#D3D6DA',
          450: '#56575E',
          DEFAULT: '#939B9F',
          600: '#818181',
          700:'#262B3CE3',
          800: '#262B3C'
        },
      }
    },
  },
  plugins: [],
}

