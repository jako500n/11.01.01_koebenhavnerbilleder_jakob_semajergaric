/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E38B29",
        "main-light": "#FDEEDC",
        "main-medium": "#FFD8A9",
        "accent-blight": "#60CBF7",
        "accent-bdark": "#2082AB",
        "accent-glight": "#786753",
        "accent-gdark": "#78562F",
      },
    },
    fontFamily: {
      londrina1: "Londrina Shadow, cursive",
      londrina2: "Londrina Solid, cursive",
      radio: "Radio Canada, sans-serif",
      rubikdirt: "Rubik Dirt, cursive",
      rubikdis: "Rubik Distressed, cursive",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
