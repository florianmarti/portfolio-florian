/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Importante para el toggle de tema claro/oscuro
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Azul profesional
        secondary: '#1F2937', // Gris oscuro
        accent: '#8B5CF6', // Violeta para detalles
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Usaremos esto en el logo de React/Skills
      }
    },
  },
  plugins: [],
}