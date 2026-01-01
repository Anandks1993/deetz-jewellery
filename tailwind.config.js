/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        brand: {
          gold: "#9A6B1B",
          goldSoft: "#FEE6C0",
        },
        surface: {
          background: "#FAF9F7",
          card: "#FFFFFF",
        },
        text: {
          primary: "#1C1C1E",
          secondary: "#6B7280",
        },
        border: {
          subtle: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
};
