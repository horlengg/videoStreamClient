/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lora:['Lora'],
        roboto:['Roboto'],
        SG:['Schibsted Grotesk']
      },
      keyframes:{
        'text-animate':{
          '40%,60%':{
            left: '100%'
          },
          '80%,100%':{
              left: '0%'
          }
        }
      },
      animation:{
        'text-animation':'text-animate 4s steps(10) infinite;'
      }
    },
  },
  plugins: [],
}