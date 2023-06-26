/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blue: "0px -5px 15px 5px rgba(0, 92, 186, 0.25)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
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
      animation: {
        enter: 'fadeInTop 300ms ease-out',
        leave: 'fadeOut 300ms ease-in forwards',
      },
      keyframes: {
        fadeInTop: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(0)',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
