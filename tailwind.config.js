/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 2px 4px rgba(0, 0, 0, 0.0562443)',
      },
      boxShadow: {
        'custom-dark': '0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)',
      },
      boxShadow: {
        'shadow-custom-gray': '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
      },
      boxShadow:{
        'shadow-custom-border':'0px 0px 4px 1px rgba(0, 0, 0, 0.104931)'
      }
    },
  },
  plugins: [],
};
