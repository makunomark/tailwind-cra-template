const tailwindcss = require("tailwindcss");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        serif: ["Nunito", ...defaultTheme.fontFamily.serif]
      }
    }
  }
};
