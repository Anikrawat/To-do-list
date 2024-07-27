/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'backGround':'#FEFDFC',
      'Line':'#DCD9DB',
      'Signin':'#DE483A',
      'SigninHover': '#d34936'
    }},
    
  },
  plugins: [],
}

