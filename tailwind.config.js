/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir tus archivos fuente
  ],
  theme: {
    extend: {
      width: {
        "vw-minus-15": "calc(100vw - 15%)",
      },
    },
  },
  plugins: [],
};
