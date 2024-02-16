import clsx from "clsx";
import React from "react";
const variants = {
  outline: "border  border-primary-500 text-primary-500 fill-primary-500",
  contained: "border border-tertiary-500 text-white fill-white bg-tertiary-500",
};
// const bRadius = {
//   sx: "rounded-",
//   sm: "rounded-lg",
//   md: "rounded-lg",
//   lg: "rounded-lg",
//   xl: "rounded-lg",
//   "2xl": "rounded-lg",
// };
type CustomButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  startIcon?: React.ReactNode;
  variant?: keyof typeof variants;
};

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { startIcon, children, variant = "contained", ...btnProps } = props;

  return (
    <button
      {...btnProps}
      className={clsx(
        "rounded-lg justify-center flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm",
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [variants[variant]]: true,
          ["border-gray-500 bg-gray-300"]: !!btnProps?.disabled,
        }
      )}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
