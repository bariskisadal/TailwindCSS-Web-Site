/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {

      spacing:{
        '15': '3.75rem'
      }, 
      colors:{
        twitter:'#1da1f2'
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
}
