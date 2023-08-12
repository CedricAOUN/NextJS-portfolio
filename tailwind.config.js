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
          '0%': {  opacity: '0%' },
          '100%': {  opacity: '100%' },
        },
        'rotate-360': {
          '0%': { transform: 'rotateX(0deg)', opacity: '0%' },
          '100%': { transform: 'rotateX(360deg)', opacity: '100%' },
        },
        'rotate-360-alt': {
          '0%': { transform: 'rotateX(360deg)', opacity: '0%' },
          '100%': { transform: 'rotateX(0deg)', opacity: '100%' },
        },
        'inf-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'holo-open': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'slide-fade-in': 'slide-fade-in 3s linear 1',
        'rotate-360': 'rotate-360 0.5s linear 1',
        'rotate-360-alt': 'rotate-360-alt 0.5s linear reverse',
        'inf-spin': 'inf-spin 1s linear infinite',
        'holo-open': 'holo-open 0.5s ease-in 1',
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
      fontSize: {
        clamp: "clamp(0.3rem, 3.5vw, 1rem)",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
