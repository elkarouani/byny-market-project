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
        'dark-primary': '#161B33',
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
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          }
        },
        fadeOutLeft: {
          "0%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(-100%)",
          }
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-out': 'fadeOut 0.5s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-in',
        'fade-out-left': 'fadeOutLeft 0.5s ease-in',
      }
    },
  },
  plugins: [],
};
