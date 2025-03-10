/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red: 'hsl(4, 100%, 67%)',
        blue800: 'hsl(234, 29%, 20%)',
        blue700: 'hsl(235, 18%, 26%)',
        grey: 'hsl(0, 0%,58%)',
        white: 'hsl(0, 0%, 100%)',
      },
      backgroundImage:{
        'custom-gradient': "linear-gradient(90deg, rgba(255,103,103,1) 43%, rgba(255,158,38,1) 72%, rgba(255,161,60,1) 100%)",
      },
      fontFamily:{
        roboto:["Roboto", "sens-serif"]
      }
    },
  },
  plugins: [],
}

