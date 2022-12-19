/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mesa-gray": "#242424",
        "mesa-black": "#141414",
        "mesa-orange":"#fc3d10",
        "mesa-blue": "#02a1a0"
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
