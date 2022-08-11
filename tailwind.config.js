/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Damion:["Damion"],
        Piano:["Piano"],
        Staisfy:["Satisfy"],
        DS:["Dancing Script"]
      } , 
    },
  },
  plugins: [ require('flowbite/plugin')],
}