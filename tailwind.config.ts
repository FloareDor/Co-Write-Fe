import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#f2aa84",
        secondary: {
          100: "#ffeee8",
          200: "#ffddd2",
          300: "#ffcbb9",
          400: "#ffb799",
          500: "#ffa27a",
          600: "#ff8c5a",
          700: "#ff763a",
          800: "#ff601a",
          900: "#ff4900",
        },
        peach: {
          100: "#FFFFFF",
          200: "#FEFBF9",
          300: "#FDF7F3",
          400: "#FCF2ED",
          500: "#FBE3D6", // Toolbar color
          600: "#F9D4BF",
          700: "#F7C5A8",
          800: "#F5B691",
          900: "#F3A77A",
        },
        bgmain: "#FFFCFB",
      },
    },
  },
  plugins: [],
};



export default config;