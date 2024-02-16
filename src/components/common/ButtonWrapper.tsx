/* eslint-disable react/display-name */
import { colors } from "@/utils/colors";
import { customVariants } from "@/utils/custom-styles";
import clsx from "clsx";
import React, { forwardRef } from "react";

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

type CustomStyles = {
  txtColor?: keyof typeof colors;
  fillColor?: keyof typeof colors;
  bgColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
};

export type ButtonWrapperProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: keyof typeof customVariants;
} & CustomStyles;

const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  (props, ref) => {
    const {
      children,
      variant = "contained",
      type = "button",

      txtColor,
      fillColor,
      bgColor,
      borderColor,

      ...btnProps
    } = props;

    const defaultStyle: Record<string, boolean> = {};

    if (variant === "contained") {
      defaultStyle[
        customTextColors[
          txtColor ? txtColor : btnProps.disabled ? "white" : "white"
        ]
      ] = true;
      defaultStyle[
        customBorderColors[
          borderColor ? borderColor : btnProps.disabled ? "gray" : "tertiary"
        ]
      ] = true;
      defaultStyle[
        customBgColors[
          bgColor ? bgColor : btnProps.disabled ? "gray" : "tertiary"
        ]
      ] = true;
      defaultStyle[
        customFillColors[
          fillColor ? fillColor : btnProps.disabled ? "gray" : "white"
        ]
      ] = true;
    } else {
      defaultStyle[
        customTextColors[
          txtColor ? txtColor : btnProps.disabled ? "gray" : "primary"
        ]
      ] = true;
      defaultStyle[
        customBorderColors[
          borderColor ? borderColor : btnProps.disabled ? "gray" : "primary"
        ]
      ] = true;
      defaultStyle[customBgColors[bgColor ? bgColor : "white"]] = true;
      defaultStyle[
        customFillColors[
          fillColor ? fillColor : btnProps.disabled ? "gray" : "primary"
        ]
      ] = true;
    }

    return (
      <button
        {...btnProps}
        ref={ref}
        type={type}
        className={clsx(
          "rounded-lg justify-center flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm",
          {
            ...defaultStyle,
            [btnProps?.className ?? ""]: !!btnProps?.className,
            [customVariants[variant]]: true,
          }
        )}
      >
        {children}
      </button>
    );
  }
);

export default ButtonWrapper;
