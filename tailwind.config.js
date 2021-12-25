module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: '#0E4D80',
        'worm-primary': '#4A90E2',
        error: '#FB7C7C',
        success: '#A2CE38',
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      }
    },
  },
  plugins: [],
};
