/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        Red: 'hsl(4, 100%, 67%)',
        Blue800: 'hsl(234, 29%, 20%)',
        Blu700: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(0, 0%,58%)',
        White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

