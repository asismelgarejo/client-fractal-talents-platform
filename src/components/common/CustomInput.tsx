import clsx from "clsx";
import React from "react";

type CustomInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  startIcon?: React.ReactNode;
  label?: string;
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, startIcon, ...inputProps } = props;
  return (
    <div className="w-full text-black space-y-1">
      {label && <div className="text-start text-sm">{label}</div>}
      <div
        className={clsx(
          "rounded-3xl overflow-hidden w-full flex bg-white items-center px-2 border border-gray-300",
          {
            [inputProps?.className ?? ""]: !!inputProps?.className,
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
      </div>
    </div>
  );
};

export default CustomInput;
