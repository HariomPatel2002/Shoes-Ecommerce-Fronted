/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      cream: '#FFFDF7',
      gray: {
        100: '#f5f5f5',
        200: '#e5e4e7',
        300: '#CCCCCC',
        500: '#888888',
        600: '#666666',
        700: '#555555',
        800: '#333333',
        900: '#111111',
      },
      'primary-yellow': '#FDB913',
      'dark-yellow': '#F4A500',
      'light-yellow': '#FFF8DC',
      accent: '#aa3bff',
      'accent-light': 'rgba(170, 59, 255, 0.1)',
      'accent-border': 'rgba(170, 59, 255, 0.5)',
      red: {
        600: '#dc2626',
      },
    },
    backgroundImage: {
      'gradient-purple': 'linear-gradient(135deg, #eff0f3 0%, #764ba2 100%)',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
    },
    extend: {
      boxShadow: {
        'custom': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

