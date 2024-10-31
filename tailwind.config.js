const theme = require('./src/styles/theme');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Jost', 'sans-serif'],
        heading: ['Jost', 'sans-serif'],
      },
      colors: theme.colors,
    },
  },
  plugins: [],
}
