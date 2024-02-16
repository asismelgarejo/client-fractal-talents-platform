import type { Config } from "tailwindcss";

const colors = {
  // ...defaultColors,
  primary: { "500": "#0B85C3", "200": "#F0F9FF", "100": "#F0F9FF" },
  tertiary: { "500": "#009688",  },
  secondary: { "500": "#C11574", "200": "#FDF2FA" },
  error: {
    "100": "red",
    "200": "red",
    "300": "red",
    "400": "red",
    "500": "red",
    "600": "red",
    "700": "red",
    "800": "red",
  },
  white: "#fff",
  black: "#000",
  gray: {
    100: "#F9FAFB",
    200: "#F2F4F7",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
  },
};
const fontSize = {
  xs: "10px",
  sm: "14px",
  md: "16px", 
  lg: "18px", 
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
      fontSize,
    },
    colors,
  },
  plugins: [],
};

export default config;
