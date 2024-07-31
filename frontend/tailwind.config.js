/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-lite': '#121212',
        'grey-lite-2': '#2a2a2a',
        'white-80': '#FFFFFFd0'
      }
    },
  },
  plugins: [],
}

