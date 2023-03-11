const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merienda: ["var(--font-merienda)", ...fontFamily.sans],
      },
      keyframes: {
        "anime-jump": {
          "0%": { transform: "scale(1,1)  translateY(0)" },
          "10%": { transform: "scale(1.1,.9)  translateY(0)" },
          "30%": { transform: "scale(.9,1.1)  translateY(-100px)" },
          "50%": { transform: "scale(1.05,.95)  translateY(0)" },
          "57%": { transform: "scale(1,1)  translateY(-7px)" },
          "64%": { transform: "scale(1,1)  translateY(0)" },
          "100%": { transform: "scale(1,1) translateY(0)" },
        },
      },
      animation: {
        "anime-jump": "anime-jump 1.5s cubic-bezier(0.280, 0.840, 0.420, 1)",
      },
    },
  },
  plugins: [],
};
