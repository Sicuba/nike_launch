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
      }
    },
  },
  plugins: [],
}

