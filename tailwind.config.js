/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        "roxinho": "#634AAC",
        "clarinho": "#BFB2E5"
      }
    }
    
  },
  plugins: [],
}