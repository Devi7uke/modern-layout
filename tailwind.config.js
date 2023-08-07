const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        lora: ['var(--font-lora)'],
      },
      colors:{
        dark: "#1b1b1b",
        mid_dark: "#474747",
        alt_dark: "#27282e",
        light: "#f5f5f5",
        mid_light: "#eAeAeA",
        alt_light: "#a5a6aa",
        primary: "#b63e96",
        primary_alt: "#a60061",
        primaryDark: "#69003d",
        goodColor: "#c6e5b1",
        badColor: "#ff6f6f"

      },
      animation: {
        'spin-slow' : 'spin 8s linear infinite'
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
}