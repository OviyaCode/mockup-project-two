/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      colors:{
        "neutral-one":"#f5f7fa",
        "neutral-two":"#4d4d4d",
        "primary-brand":"#32CD32",
        "neutral-grey":"#717171",        
        "grey-900":"#18191f",
        "secondary-brand":"#48cf1c",        
        "ternary-brand":"#4CBB17",      
        "green-base":"#98FB98",
        "green-base-transparent":"#E6F6EE",
        "primary-text":"#A9A9A9"  
      }
    },
  },
  plugins: [],
}