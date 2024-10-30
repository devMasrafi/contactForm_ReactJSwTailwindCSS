/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "karla": ['"Karla", sans-serif'],
    },
    extend: {
      
      colors: {
        'lightGreen': 'hsl(148, 38%, 91%)',
        'darkGreen': 'hsl(169, 82%, 27%)',
        'red': 'hsl(0, 66%, 54%)',
        'greyMed': 'hsl(186, 15%, 59%)',
        'greyDark': 'hsl(187, 24%, 22%)',
      },
    },
  },
  plugins: [],
}