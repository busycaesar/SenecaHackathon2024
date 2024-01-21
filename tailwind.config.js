/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-red': '#D92D27',
      },
      fontFamily: {
        'gotham': ['"Gotham"', "sans-serif"],
      },
     
    },
    
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
