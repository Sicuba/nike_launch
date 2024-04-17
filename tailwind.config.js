/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "nike":'url("/src/assets/bg.png")',
      }
    },
  },
  plugins: [],
}

