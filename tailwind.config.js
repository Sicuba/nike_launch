/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "sans":["Poppins"]
      },
      backgroundImage:{
        "nike":'url("/src/assets/bg.png")',
      },
      keyframes:{
        floatRight:{
          "0%": { transform: "translateX(0px)"},
          "50%": { transform: "translateX(8px)"},
          "100%": { transform: "translateX(0px)"},
        },
        opacityPulse:{
          "0%":{opacity: 1},
          "50%":{opacity: 0.2},
          "100%":{opacity: 1},
        }
      },
      animation:{
        floatRight: "floatRight 2.5s infinite",
        opacityPulse: "opacityPulse 2.5s infinite",
      }
    },
  },
  plugins: [],
}

