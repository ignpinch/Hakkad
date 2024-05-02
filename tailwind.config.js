/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xsm": "200px",
      },
    },
    fontFamily:{
      inter:["Inter","Sans-serif"],
      poppins:["Poppins","Sans-serif"]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

