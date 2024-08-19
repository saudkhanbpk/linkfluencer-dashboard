/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        content: ['Inter', 'sans-serif'],
        header: ['Manrope', 'sans-serif'],
      },
      imageRendering: {
        'crisp': 'crisp-edges',
        'pixel': 'pixelated',
      },
      colors:{
        primary: '#59FF93'
      },
      screens: {
        'xs': '480px', // Custom extra-small breakpoint
        'sm': '640px', // Default small breakpoint
        'md': '768px', // Default medium breakpoint
        'lg': '1024px', // Default large breakpoint
        'xl': '1280px', // Default extra-large breakpoint
        '2xl': '1536px', // Default 2xl breakpoint
        '3xl': '1600px', // Custom 3xl breakpoint
        '4xl': '1920px', // Custom 4xl breakpoint
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.image-rendering-crisp': {
          'image-rendering': 'crisp-edges',
        },
        '.image-rendering-pixel': {
          'image-rendering': 'pixelated',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}