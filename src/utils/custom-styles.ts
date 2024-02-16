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

export const customTextColors: Record<keyof typeof colors, string> = {
  primary: "text-primary-500",
  secondary: "",
  black: "",
  error: "",
  gray: "text-gray-500",
  white: "text-white",
  tertiary: "text-tertiary-500",
};
export const customBorderColors: Record<keyof typeof colors, string> = {
  primary: "border-primary-500",
  secondary: "",
  black: "",
  error: "",
  gray: "border-gray-500",
  white: "",
  tertiary: "border-tertiary-500",
};
export const customBgColors: Record<keyof typeof colors, string> = {
  primary: "bg-primary-500",
  secondary: "",
  black: "",
  error: "",
  gray: "bg-gray-500",
  white: "",
  tertiary: "bg-tertiary-500",
};
export const customFillColors: Record<keyof typeof colors, string> = {
  primary: "fill-primary-500",
  secondary: "",
  black: "",
  error: "",
  gray: "fill-gray-500",
  white: "fill-white",
  tertiary: "fill-tertiary-500",
};
