/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'solar-blue-primary': '#1a9cd9',
        'solar-green-primary': '#bccf00',
        'solar-orange-primary': '#f9b233',
        'solar-blue-secundary': '#0d3b85',
        'solar-green-secundary': '#fcee21',
        'solar-orange-secundary': '#e54757',
        'solar-red-primary': '#c1478a',
        'solar-red-secundary': '#7d5496',
        'solar-violet': '#5d71af',
      }
    },
  },
  plugins: [],
}