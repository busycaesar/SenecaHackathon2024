/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-red': '#ff0000',
      },
    },
    
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
