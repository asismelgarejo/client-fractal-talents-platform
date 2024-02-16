import type { Config } from "tailwindcss";
import { colors } from "./src/utils/colors";

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
