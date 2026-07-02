import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // UoA brand palette, lifted from resources/rp_v4/main.tex
        uoa: {
          blue: "#0052A3",
          navy: "#003270",
          steel: "#3D7AB0",
          slate: "#9ABCD4",
          accent: "#6699BB",
          pale: "#E5EFF7",
          graybox: "#F4F6FA",
          ink: "#0C1B2E", // near-black with a blue cast, for body text
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,50,112,0.04), 0 12px 32px -16px rgba(0,50,112,0.18)",
        lift: "0 8px 24px -8px rgba(0,50,112,0.28)",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
