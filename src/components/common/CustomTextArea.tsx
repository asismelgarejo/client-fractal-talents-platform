/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import InputBase, { InputBaseProps } from "./InputBase";

type CustomTextAreaProps =  Omit<InputBaseProps, "children">  & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

const CustomTextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
  (props, ref) => {
    const {
      startIcon,
      endIcon,
      label,
      variant = "gray_2",
      error,
      errorMsg,
      className,
      ...inputProps
    } = props;
    return (
      <InputBase
        label={label}
        variant={variant}
        error={error}
        errorMsg={errorMsg}
        className={className}
      >
        <textarea
          ref={ref}
          {...inputProps}
          className={
            "min-h-[10px] min-w-[100px] w-full px-2 py-2 outline-none bg-transparent"
          }
        />
      </InputBase>
    );
  }
);

export default CustomTextArea;
