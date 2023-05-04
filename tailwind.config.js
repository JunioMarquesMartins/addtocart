/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: 'Space Grotesk, sans-serif',
        rooboto: 'Roboto, sans-serif',
      },

      colors: {
        greenDroid: {
          100: '#a4c639',
          200: '#839e2d',
        },
        gray: {
          100: '#181818',
          200: '#343333',
        },
      },
    },
  },
  plugins: [],
}
