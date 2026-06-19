/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F0E8",
        secondary: "#3E2723",
        "text-dark": "#1A1612",
      },
      fontFamily: {
        body: ["Hanken Grotesk", "sans-serif"],
        heading: ["Hanken Grotesk", "sans-serif"],
        hanken: ["Hanken Grotesk", "sans-serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInScale: "fadeInScale 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      spacing: {
        21: "5.25rem",
        100: "25rem",
        125: "31.25rem",
        150: "37.5rem",
        175: "43.75rem",
      },
    },
  },
  plugins: [],
};
