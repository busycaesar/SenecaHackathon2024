/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
