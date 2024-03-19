/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tona-blue': '#2662fa',
        'tona-gray-100': '#747681',
        'tona-dark-200': '#121b30',
        'tona-dark-250': '#091530',
        'tona-dark-300': '#050f25',
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/bg/BG.png')",
      }
    },
  },
  plugins: [],
}