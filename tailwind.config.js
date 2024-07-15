/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6BB252",
        green_DDF6D5: "#DDF6D5",
        lightgray_999: "#999",
        lightgray_F1F1F1: "#F1F1F1",
        black_333: "#333"
      },
      borderColor: {
        'custom-gray': 'rgba(51, 51, 51, 0.30)',
      }
    },
  },
  plugins: [],
};
