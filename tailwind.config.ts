import type { Config } from "tailwindcss";

const colors = {
  // ...defaultColors,
  main: "#0B85C3",
  secondary: "#009688",
  white: "#fff",
  black: "#000",
  gray: {
    "100": "#F9FAFB",
    "200": "#98A2B3",
  },
};
const fontSize = {
  xs: "10px",
  sm: "14px",
  md: "16px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mainComponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/themes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors,
      fontSize
    },
  },
  plugins: [],
};

export default config;
