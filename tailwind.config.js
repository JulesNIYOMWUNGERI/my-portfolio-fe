/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './assets/**/*.{png,jpg,svg}'
  ],
  theme: {
    extend: {
      fontFamily: {
        host: ['"Host Grotesk"', 'sans-serif'], 
        urbanist: ['"Urbanist"', 'sans-serif'],
      },
      boxShadow: {
        'custom': '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
      letterSpacing: {
        'extra-wide': '0.3em',
        'wide': '0.1em',
      },
      screens: {
        'cl': { max: '380px' },
        'cs': { max: '365px' },
        'cxl': { min: '530px', max: '545px' },
        'cxs': { max: '345px' },
        'xlg': { min: '1030px' },
        'xxlg': { min: '1450px' },
      },
    },
  },
  plugins: [],
}