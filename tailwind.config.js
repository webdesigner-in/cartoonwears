/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#3AF36F",
        background: "#121212",
        card: "#1E1E1E",
        text: "#E0E0E0",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 10px rgba(74, 144, 226, 0.8)",
      },
    },
  },
  plugins: [],
};
