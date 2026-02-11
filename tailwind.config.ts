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
        muted: "#64748B",
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
