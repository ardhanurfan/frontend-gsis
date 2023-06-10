/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Monserrat", "sans-serif"],
      },
      textColor: {
        primaryText: "#015CBA",
        seccondaryText: "#4B3979",
      },
      colors: {
        primaryGreen: "#A7CD3A",
        primaryYellow: "#FFC500",
        primaryOrange: "#ED6010",
        primaryBlue: "#005CBA",
        seccondaryGreen: "#BBD578",
        seccondaryYellow: "#F8DB25",
        seccondaryOrange: "#F87837",
        seccondaryBlue: "#4F9BFD",
        error: "#BD1B1B",
        link: "#060B81",
        warning: "#FFC806",
        success: "#1B8E27",
      },
    },
  },
  plugins: [],
};
