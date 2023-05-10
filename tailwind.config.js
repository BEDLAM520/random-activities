/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#fafafa",
        black: "#121312",
        darkGrey: "#242424",
        lightGrey: "#b0b0b0",
        primary: "#6765db",
      },
    },
  },
  plugins: [],
};
