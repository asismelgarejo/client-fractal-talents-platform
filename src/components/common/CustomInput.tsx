import clsx from "clsx";
import React from "react";

type CustomInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  startIcon?: React.ReactNode;
};

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { startIcon, ...inputProps } = props;
  return (
    <div
      className={clsx(
        "rounded-3xl overflow-hidden w-fit flex bg-white items-center drop-shadow-md px-2 border border-gray-300",
        {
          [inputProps?.className ?? ""]: !!inputProps?.className,
        }
      )}
    >
      {startIcon}
      <input
        {...inputProps}
        className={"min-h-[10px] min-w-[100px] px-2 py-2 outline-none bg-transparent"}
      />
    </div>
  );
};

export default CustomInput;
