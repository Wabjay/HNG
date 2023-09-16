/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        greyBlur: "rgba(243, 244, 246, 0.50)",
        'rose-700': '#BE123C',
        'rose-400': '#F8E7EB',
        'light-rose': 'rgba(190, 18, 60, 0.10)',
        'blur': 'rgba(18, 18, 18, 0.50)'
      },
      colors: {
        'grey-400': '#9CA3AF',
        'grey-900': '#111827',
        'rose-700': '#BE123C',
        'dark': '#404040',
        'light-dark': '#333',
      }
    },
  },
  plugins: [],
}