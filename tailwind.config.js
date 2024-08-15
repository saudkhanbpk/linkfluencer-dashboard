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
      }
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