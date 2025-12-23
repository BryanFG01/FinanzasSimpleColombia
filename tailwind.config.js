/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#10b981',
        accent: '#f59e0b',
        background: '#ffffff',
        text: '#1f2937',
        muted: '#6b7280',
      }
    },
  },
  plugins: [],
}
