module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
