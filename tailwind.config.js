/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#7C3AED",
        brandBlue: "#2563EB",
      },
    },
  },
  plugins: [],
}
