/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { forwardRef } from "react";

export const customVariants = {
  outline:
    " bg-transparent border-primary-500 text-primary-500 fill-primary-500",
  gray_2: "border-gray-400 text-gray-500 fill-gray-500",
  outline_2: " bg-primary-100 border-primary-500 text-primary-500",
  text: "border-none text-gray-500 fill-gray-500",
};

export type InputBaseProps = {
  variant?: keyof typeof customVariants;
  label?: string;
  error?: boolean;
  errorMsg?: string;
  className?: string;
  children: React.ReactNode;
};

const InputBase: React.FC<InputBaseProps> = (props) => {
  const {
    label,
    error = false,
    className,
    variant = "outline",
    children,
  } = props;
  return (
    <div className="w-full text-black space-y-1">
      {label && <div className="text-start text-sm">{label}</div>}
      <div
        className={clsx(
          "rounded-3xl overflow-hidden w-full flex bg-white items-center px-3 border",
          {
            [customVariants[variant]]: true,
            ["border-gray-300"]: !error,
            ["border-error-200"]: error,
          },
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default InputBase;
