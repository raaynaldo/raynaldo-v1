/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      fontFamily: {
        primary: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#fdf3f3',
          100: '#fbe5e5',
          200: '#f8d0d0',
          300: '#f2afaf',
          400: '#e88181',
          500: '#D95050',
          600: '#c63c3c',
          700: '#a62f2f',
          800: '#8a2a2a',
          900: '#732929',
          950: '#3e1111',
        },
        black: '#363032',
        white: '#E7E7E7',
      },
    },
  },
  plugins: [],
};
