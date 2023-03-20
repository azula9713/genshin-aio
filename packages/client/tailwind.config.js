/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      algoindeEnka: ["AlgoindeEnka"],
    },
    screens: {
      xs: "340px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      transitionProperty: {
        all: "all",
      },
    },
  },
  plugins: [],
};
