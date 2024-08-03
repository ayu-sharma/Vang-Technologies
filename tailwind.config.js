/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'

  ],
  
  theme: {
    extend: {
      keyframes: {
        openTop: {
          '0%': { transform: 'rotate(0) translate(0, 0)' },
          '50%': { transform: 'rotate(45deg) translate(0,0)' },
          '100%': { transform: 'rotate(45deg) translateY(0.375rem)' },
        },
        openMiddle: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0'},
          '100%': { opacity: '0' },
        },
        openBottom: {
          '0%': { transform: 'rotate(0) translate(0, 0)' },
          '50%': { transform: 'rotate(-45deg) translate(0,0)' },
          '100%': { transform: 'rotate(-45deg) translateY(-0.375rem)' },
        },
        closeTop: {
          '0%': { transform: 'rotate(45deg) translate(0.75em, 1.25em)' },
          '50%': { transform: 'rotate(0) translate(0, 0)' },
          '100%': { transform: 'rotate(0) translate(0, 0)' },
        },
        closeMiddle: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0'},
          '100%': { opacity: '1' },
        },
        closeBottom: {
          '0%': { transform: 'rotate(135) translate(-0.5em, 1em)' },
          '50%': { transform: 'rotate(0) translate(0, 0)' },
          '100%': { transform: 'rotate(0) translate(0, 0)' },
        },
        smNav: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        smNavClose: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        openTop: 'openTop 0.3s ease-out forwards',
        openMiddle: 'openMiddle 0.3s ease-out forwards',
        openBottom: 'openBottom 0.3s ease-out forwards',
        closeTop: 'closeTop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        closeMiddle: 'closeMiddle 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        closeBottom: 'closeBottom 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        smNav: 'smNav 0.3s ease-in-out forwards',
        smNavClose: 'smNavClose 0.3s ease-in-out forwards',
      },

        screens: {
        //   'sm': {'min': '640px'},
        // 'md': {'min': '768px'},
        // 'lg': {'min': '1024px'},
        // 'xl': {'min': '1280px'},
         'cs': {'max': '1200px'}
        },
  },
  plugins: [
    require('flowbite/plugin'),
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Safari and Chrome */
        },
      }

      addUtilities(newUtilities, ['responsive'])
    }
  ],
}
}
