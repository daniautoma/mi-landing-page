import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816", // Deep Navy
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#3B82F6", // Electric Blue
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#A855F7", // Neon Purple
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#0F172A", // Dark Slate for cards
          foreground: "#E2E8F0",
        },
        muted: {
          DEFAULT: "#64748B",
          foreground: "#94a3b8",
        },
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.1)",
        ring: "#3B82F6",
        card: {
          DEFAULT: "rgba(15, 23, 42, 0.6)",
          foreground: "#f8fafc",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
