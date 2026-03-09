/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#dceefb',
          200: '#b6e0fe',
          300: '#84c5f4',
          400: '#62b0e8',
          500: '#4098d7',
          600: '#2680c2',
          700: '#186faf',
          800: '#0f609b',
          900: '#0b4f82',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 96, 155, 0.12)',
      },
    },
  },
  plugins: [],
}

