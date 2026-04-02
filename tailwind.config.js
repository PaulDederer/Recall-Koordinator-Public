/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
          light: '#c4b5fd',
        },
        'brand-secondary': {
          DEFAULT: '#3b82f6',
          light: '#93c5fd',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
