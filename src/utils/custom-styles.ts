import { colors } from "./colors";

export const customColors: Record<keyof typeof colors, string> = {
  primary: "border-primary-500 fill-primary-500 text-primary-500",
  secondary: "",
  black: "",
  error: "",
  gray: "border-gray-300 text-gray-500",
  white: "",
  tertiary: "border-tertiary-500 text-white fill-white bg-tertiary-500",
};
export const customVariants = {
  outline: "border bg-transparent",
  contained: "border",
};
