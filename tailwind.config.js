/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
      },
      fontFamily:{
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 15px -10px rgba(0,0,0,0.5)",
      },
      colors: {
        bodyColor: "#333333",
        contratsColor: "#46494c",
        buttonBlack: "#202020",
        textViolet: "#9d4edd",
        textLight: "#fcfaf9",
        textPink:"#f72585",
        pinkLight:"#fb6f92",
        iceBlue: "#4cc9f0",
        yellow: "#ffb703",
        hoverColor:"rgba(100,255,218,0.1)",
      },
    },
  },
  plugins: [],
}

