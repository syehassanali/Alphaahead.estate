/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Italiana', 'serif'],
      },
      colors: {
        primary: '#0A0F2C',
        secondary: '#5AC8FA',
        accent: '#F5A623',
        background: '#1a1a1a',
        surface: '#2a2a2a',
        card: '#333333',
        white: '#FFFFFF',
        jet: '#121212',
        lightgray: '#F5F5F5',
        orange: '#FF8C42',
        coolgray: '#B0B3B8',
        skyblue: '#A0D2FF',
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#1a1a1a',
          950: '#0d1117',
        },
      },
    },
  },
  plugins: [],
}

