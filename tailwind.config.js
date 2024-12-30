/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#78B3CE',
          light: '#C9E6F0',
        },
        text: {
          DEFAULT: '#000000',
          light: '#4A4A4A',
        },
        background: {
          DEFAULT: '#FFFFFF',
          accent: '#F8FBFD',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};