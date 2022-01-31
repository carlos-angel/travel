module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9',
      }),
      textColor: {
        primary: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
