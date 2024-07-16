/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6BB252",
        green_100: "#DDF6D5",
        lightgray_999: "#999",
        lightgray_F1F1F1: "#F1F1F1",
        black_100: "#131313",
        black_200: "#222",
        black_300: "#333",
        orange_100: "#f95f09",
        gray_100: "#364127",
        white_100: "#fff",
      },
      borderColor: {
        "custom-gray": "rgba(51, 51, 51, 0.30)",
      },
    },
    screens: {
      "2xl": { min: "1600px" },
      xl: { min: "1200px" },
      lg: { min: "992px" },
      md: { min: "768px" },
      xs: { max: "767px" },
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      open_sans: ['"Open Sans"', "sans-serif"],
      khand: ['"Khand"', "sans-serif"],
      roboto: ['"Roboto"', "sans-serif"],
    },
  },

  plugins: [],
};
