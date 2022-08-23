module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "800px",
      desktop: "1200px",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
