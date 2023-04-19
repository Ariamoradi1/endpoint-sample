const { height } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '600': '600px',
        '550': '550px',
        '1100': '1100px',
        '500' : '500px'
      },
      height:{
        '800': '800px',
        '550': '550px',
        '500': '500px',
        '600': '600px'
      },
      borderRadius:{
        '43': '43px',
      }
    },
  },
  plugins: [],
}
