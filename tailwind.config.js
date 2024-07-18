/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'

  ],
  
  theme: {
    extend: {
        screens: {
          'sm': {'min': '640px'},
        'md': {'min': '768px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px'},
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
