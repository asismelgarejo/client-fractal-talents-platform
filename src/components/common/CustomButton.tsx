import { colors } from "@/utils/colors";
import { customColors, customVariants } from "@/utils/custom-styles";
import clsx from "clsx";
import React from "react";

type CustomStyles = {
  txtColor?: keyof typeof colors;
  fillColor?: keyof typeof colors;
  bgColor?: keyof typeof colors;
  borderColor?: keyof typeof colors;
};

type CustomButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  startIcon?: React.ReactNode;
  variant?: keyof typeof customVariants;
  color?: keyof typeof colors;
} & CustomStyles;

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const {
    startIcon,
    children,
    variant = "contained",
    type = "button",
    color = "primary",
    ...btnProps
  } = props;

  return (
    <button
      {...btnProps}
      type={type}
      className={clsx(
        "rounded-lg justify-center flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm",
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [customVariants[variant]]: true,
          [customColors[btnProps?.disabled ? "gray" : color]]: true,
        }
      )}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
