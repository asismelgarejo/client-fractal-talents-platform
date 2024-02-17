/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { forwardRef } from "react";

const variants = {
  primary: "bg-primary-100 text-primary-500",
  secondary: "bg-secondary-200 text-secondary-500",
  gray: "px-4 py-2 bg-gray-100 rounded rounded-3xl text-black",
};

type CustomChipProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  startIcon?: React.ReactNode;
  color?: keyof typeof variants;
  label: string;
};

const CustomChip = forwardRef<HTMLSpanElement, CustomChipProps>(
  (props, ref) => {
    const { startIcon, label, color = "primary", className, ...rest } = props;

    return (
      <span
        {...rest}
        ref={ref}
        className={clsx(
          variants[color],
          "rounded-2xl flex space-x-2 inline-block items-center px-4 py-1 font-medium text-sm w-fit select-none",
          className
        )}
      >
        {startIcon && <span>{startIcon}</span>}
        <span>{label}</span>
      </span>
    );
  }
);

export default CustomChip;
