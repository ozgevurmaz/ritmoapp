/** @type {import('tailwindcss').Config} */
const Colors = require('./constants/Colors');
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...Colors,
        primary: "#FF8A4D",
        secondary: "#F59E0B",
        success: "#34D399",
        info: "#3B82F6",
        warning: "#FBBF24",
        error: "#EF4444"
      },
    }
  },
  plugins: [],

}