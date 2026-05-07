/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#080B12",
          elevated: "#0D121C",
          muted: "#121A28",
        },
        accent: {
          cyan: "#22D3EE",
          blue: "#38BDF8",
          violet: "#A78BFA",
          mint: "#34D399",
        },
      },
      fontFamily: {
        sans: ["\"DM Sans\"", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(34, 211, 238, 0.35)",
        card: "0 0 0 1px rgba(148, 163, 184, 0.08), 0 18px 50px -24px rgba(0, 0, 0, 0.65)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(8, 11, 18, 0) 0%, #080B12 100%), linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
