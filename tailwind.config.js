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
        '500' : '500px',
        '100' : '100vh',
        '800' : '800px',
        '379' : '379px',
        '300' : '300px'
      },
      height:{
        '800': '800px',
        '550': '550px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '900': '900px'
      },
      borderRadius:{
        '43': '43px',
      },
      backgroundColor:{
        'col':'#475569',
        'bg' : '#64748b',
        'swip':'#1e293b',
        'footer': '#383e54',
        'button': '#3898ec'
      },
      margin:{
        '450' : '450px'
      },
      fontSize:{
        '50' : '50px',
        '35' : '35px',
        '45' : '45px',
        '40' : '40px'
      },
      
    },
  },
  plugins: [],
}

