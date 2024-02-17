/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { forwardRef } from "react";

export const customVariants = {
  outline:
    " bg-transparent border-primary-500 text-primary-500 fill-primary-500",
  contained: "fill-white text-white bg-tertiary-500 border-tertiary-500",
  gray_1: "bg-gray-400 border-gray-400 text-white",
  gray_2: "border-gray-400 text-gray-500 fill-gray-500",
  outline_2: " bg-primary-100 border-primary-500 text-primary-500",
  text: "border-none text-gray-500 fill-gray-500",
};

export type ButtonWrapperProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: keyof typeof customVariants;
};

const ButtonWrapper = forwardRef<HTMLButtonElement, ButtonWrapperProps>(
  (props, ref) => {
    const {
      children,
      variant = "contained",
      type = "button",
      ...btnProps
    } = props;

    return (
      <button
        {...btnProps}
        ref={ref}
        type={type}
        className={clsx(
          {
            [customVariants[variant]]: true,
          },
          "border select-none rounded-lg justify-center flex space-x-2 inline-block items-center px-5 py-2 font-medium text-sm ",
          btnProps?.className ?? ""
        )}
      >
        {children}
      </button>
    );
  }
);

export default ButtonWrapper;
