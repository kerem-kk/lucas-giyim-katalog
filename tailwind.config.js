/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-accent': '#C5A065', // Tuned to be a bit more muted/luxury
        'grey-bar': '#F8F8F8',    // Very light grey
        'beige-btn': '#F5F0E6',   // Light beige for buttons
        'soft-red': '#FAECEC',    // Pastel red background
        'soft-beige': '#F7F3EB',  // Pastel beige background
        'soft-pink': '#FBEFF4',   // Pastel pinkish background
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
