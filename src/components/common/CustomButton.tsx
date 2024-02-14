import clsx from "clsx";
import React from "react";
const variants = {
  outline: "border  border-[#0B85C3] text-[#0B85C3] fill-[#0B85C3]",
  contained: "border border-[#009688] text-[#fff] fill-[#fff] bg-[#009688]",
};
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
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [variants[variant]]: true,
        },
        "rounded-lg flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm"
      )}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
