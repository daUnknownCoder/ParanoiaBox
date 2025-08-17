/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00f0ff",
        neonPink: "#ff00f5",
        neonPurple: "#a020f0",
        neonGreen: "#39ff14",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 240, 255, 0.7), 0 0 20px rgba(255, 0, 245, 0.7)",
      },
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"], // add a nice cyber font if you like
      },
    },
  },
  plugins: [],
}
