const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rancho: ['Rancho', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [require('daisyui'), flowbite.plugin(),],
}

