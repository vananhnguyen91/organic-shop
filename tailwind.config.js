/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
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
      xs: { max: "991px" },
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      open_sans: ['"Open Sans"', "sans-serif"],
      khand: ['"Khand"', "sans-serif"],
      roboto: ['"Roboto"', "sans-serif"],
    },
    boxShadow: {
      product_item: " 0px 4px 25px 0px rgba(0, 0, 0, 0.15)",
      social_item: "0px 6px 20px 0px rgba(0, 0, 0, 0.1);",
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("hotive", ["&:hover", "&:active"]);
    }),
  ],
};
