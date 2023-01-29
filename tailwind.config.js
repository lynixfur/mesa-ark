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
        "mesa-blue": "#02a1a0",
        "mesa-dropdown": "#3e3e3e",
        'bgray-bg': '#121317',
        'bgray-secondary': '#1A1C23',
        'bgray-overlay': '#272a35',
        'bgray-forward':'#393D4C',
        'bgray-dropdown':'#191a20',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
