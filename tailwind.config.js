/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#FFF8DB", // Example custom color
        anotherColor: "#EAF4FF", // Another custom color
        textColor: "#4A4A4A",
        performanceColor: "#FFF7EE",
        boxbackground: "#F1F1F1",
        divcolor: "#956F00",
        kyalikhu: "#FFFDF4",
      },
    },
  },
  plugins: [],
};
