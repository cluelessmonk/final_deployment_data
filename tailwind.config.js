/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        billboard: {
          "0%": { transform: "translateX(-100%)", color: "#f00" },
          "25%": { color: "#0f0" },
          "50%": { transform: "translateX(100%)", color: "#00f" },
          "75%": { color: "#ff0" },
          "100%": { transform: "translateX(-100%)", color: "#f00" },
        },
      },
      animation: {
        gradient: "gradient 9s ease infinite",
        billboard: "billboard 5s linear infinite",
      },
      colors: {
        "light-yellow": "#eca63b",
        "dark-purple": "#2e2848",
        "cream-white": "#f8f5f2",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        subheading: ["Lora", "serif"],
        body: ["Open Sans", "sans-serif"],
        invitation: ['"Playwrite DK Uloopet"', "serif"],
      },
    },
  },
  plugins: [],
};
