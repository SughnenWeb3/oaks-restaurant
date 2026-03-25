/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-display': ['Playfair Display', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jost': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
