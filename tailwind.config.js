/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "jakarta-sans": ['"Font Plus Jakarta Sans"', "sans-serif"],
    },
    screens: {
      "12pro": "390px",
      md: "768px",
    },
  },
  plugins: [],
};
