import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgb(147, 51, 234)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(147, 51, 234, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        shimmer: "shimmer 3s infinite",
        "size-change": "size-change 8s infinite ease-in-out",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-medium": "float-medium 6s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        "size-change": {
          "0%": {
            width: "8rem",
          },
          "15%": {
            width: "4rem",
          },
          "30%": {
            width: "8rem",
          },
          "45%": {
            width: "10rem",
          },
          "60%": {
            width: "8rem",
          },
          "75%": {
            width: "4rem",
          },
          "90%": {
            width: "10rem",
          },
          "100%": {
            width: "8rem",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0.3",
          },
          "25%": {
            transform: "translateY(-5px) translateX(3px)",
            opacity: "0.9",
          },
          "50%": {
            transform: "translateY(-8px) translateX(-2px)",
            opacity: "0.5",
          },
          "75%": {
            transform: "translateY(-3px) translateX(-5px)",
            opacity: "0.7",
          },
        },
        "float-medium": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0.4",
          },
          "33%": {
            transform: "translateY(-7px) translateX(4px)",
            opacity: "0.8",
          },
          "66%": {
            transform: "translateY(-4px) translateX(-6px)",
            opacity: "0.6",
          },
        },
        "float-fast": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translateY(-10px) translateX(5px)",
            opacity: "0.9",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
