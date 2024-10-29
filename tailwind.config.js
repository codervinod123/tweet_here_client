/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        "black-rgb": "rgb(161, 161, 161)",
        "font-rgb": "rgb(182, 192, 219)",
      },
      backgroundImage: {
        "feature-img": "url('./src/assets/feature_bg.jpg')",
        "auth-img": "url('./src/assets/auth_bg.jpg')",
        "quote-1-img": "url('./src/assets/quote1.jpg')",
        "quote-2-img": "url('./src/assets/quote2.jpg')",
        "quote-3-img": "url('./src/assets/quote3.jpg')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
  },
  plugins: [],
};



