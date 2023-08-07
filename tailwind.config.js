/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-fade-in': {
          '0%': { transform: 'translate(-500px, 0);', opacity: '0%' },
          '100%': { transform: 'translate(0, 0);', opacity: '100%' },
        },
        'rotate-360': {
          '0%': { transform: 'rotateX(0deg)', opacity: '0%' },
          '100%': { transform: 'rotateX(360deg)', opacity: '100%' },
        },
        'rotate-360-alt': {
          '0%': { transform: 'rotateX(360deg)', opacity: '0%' },
          '100%': { transform: 'rotateX(0deg)', opacity: '100%' },
        },
      },
      animation: {
        'slide-fade-in': 'slide-fade-in 1.5s linear 1',
        'rotate-360': 'rotate-360 0.5s linear 1',
        'rotate-360-alt': 'rotate-360-alt 0.5s linear reverse',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        orbit: ['var(--font-orbitron)'],
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
