/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700:"#146eb4"
        }
      },
      screens: {
        'med': '950px',
        'xs': '310px',
      },
    },
  },
  plugins: [],
}