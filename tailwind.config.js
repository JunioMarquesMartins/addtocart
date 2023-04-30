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
        pink: {
          100: '#feb5c6',
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
