/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        example: {
          main: '#0E91C4',
          gray: '#434447',
        },
      },
      fontSize: {
        h1: ['36px', { lineHeight: '46.8px' }],
        h2: ['24px', { lineHeight: '31.2px' }],
        h3: ['20px', { lineHeight: '26px' }],
        title: ['28px', { lineHeight: '36.4px' }],
        'social-icon-size': ['24px'],
        '16-24': ['16px', { lineHeight: '24px' }],
        'footer-text': ['14px', { lineHeight: '23.8px' }],
      },
    },
  },
  plugins: [],
};
