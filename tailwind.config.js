/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "arrah-purple-light": "#7278E5",
        "arrah-purple-dark": "#6854D9",
        "arrah-blue-accent": "#9FDCFE",
        "arrah-blue-deep": "#6BABFB",
        "arrah-gray-light": "#EEEFFD",
        "arrah-gray-dark": "#BDC7E8",
        "arrah-text-gray": "#6B768E"
      }

    },

  },
  plugins: [],
}