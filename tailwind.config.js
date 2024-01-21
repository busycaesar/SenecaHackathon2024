/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'my-red': '#b91c1c',
      },
    },
    
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
