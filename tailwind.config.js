/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", 
          light: "#3B82F6", 
          dark: "#1D4ED8", 
        },
        secondary: {
          DEFAULT: "#14B8A6", 
          dark: "#0F766E",
        },
        background: {
          DEFAULT: "#F8FAFC", 
        },
        surface: "#ffffff",
        accent: "#0EA5E9", 
        success: "#22C55E", 
        warning: "#F59E0B", 
        text: {
          DEFAULT: "#1E293B", 
          light: "#F1F5F9",
        },
      },
    },
  },
  plugins: [],
};
