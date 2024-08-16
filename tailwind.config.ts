import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        card: "0px 0px 2px 0px rgba(145,158,171,0.2), 0px 12px 24px -4px rgba(145,158,171,0.12)",
        dark: "0px 0px 2px 0px rgba(0,0,0,0.7), 0px 12px 24px -4px rgba(0,0,0,0.4)",
      },
      colors: {
        "primary-dark": "#00a76f",
        "primary-light": "#00a76f14",
        light1: "#f8fafc",
        light2: "#f1f5f9",
        light3: "#e2e8f0",
        dark1: "#090a0b",
        dark2: "#121517",
        dark3: "#202427",
      },
      fontSize: {
        "x-small": "10px",
        small: "13px",
        base: "15px",
        large: "24px",
        " x-large": "30px",
        icon: "18px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
