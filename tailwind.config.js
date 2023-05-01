/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#f9e2e2',
          100: '#f2c5c5',
          200: '#eca7a7',
          300: '#e68a8a',
          400: '#df6d6d',
          500: '#D95050',
          600: '#cb2c2c',
          700: '#a32323',
          800: '#7a1a1a',
          900: '#511212',
          950: '#290909',
        },
        black: '#363032',
        white: '#E7E7E7',
      },
    },
  },
  plugins: [],
};
