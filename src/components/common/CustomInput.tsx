/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { forwardRef } from "react";

type CustomInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  error?: boolean;
  errorMsg?: string;
};

const CustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
  (props, ref) => {
    const { label, startIcon, endIcon, error = false, ...inputProps } = props;
    return (
      <div className="w-full text-black space-y-1">
        {label && <div className="text-start text-sm">{label}</div>}
        <div
          className={clsx(
            "rounded-3xl overflow-hidden w-full flex bg-white items-center px-2 border",
            {
              [inputProps?.className ?? ""]: !!inputProps?.className,
              ["border-gray-300"]: !error,
              ["border-error-200"]: error,
            }
          )}
        >
          {startIcon ? startIcon : null}
          <input
            {...inputProps}
            className={
              "min-h-[10px] min-w-[100px] w-full px-2 py-2 outline-none bg-transparent"
            }
            />
            {endIcon ? endIcon : null}
        </div>
      </div>
    );
  }
);

export default CustomInput;
