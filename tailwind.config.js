module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1600px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
