/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        beige: {
          50: '#FDFBF7',
          100: '#F9F6ED',
          200: '#F3ECD9',
          300: '#E9DEC1',
          400: '#DFD0A9',
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};