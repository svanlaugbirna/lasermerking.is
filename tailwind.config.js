/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,tsx}",
    "./src/components/**/*.{html,js,tsx}",
    "./src/slices/**/*.{js,ts,tsx}",
    "./src/app/**/*.{js,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-nunito-sans)"],
        display: ["var(--font-nunito)"],
      },
      colors: {
        Red: '#8E3737',
        Gray: '#737373',
        Green: '#013328',
        Black: '#100C0D',
        Beis: '#E3DCD2',
      }
    },
  },
  plugins: [],
}

