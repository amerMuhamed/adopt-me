/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#FFE66D",
        accent: "#4ECDC4",
        neutral: "#1A535C",
        background: "#F7fff7",
      },
    },
  },
  plugins: [],
};
