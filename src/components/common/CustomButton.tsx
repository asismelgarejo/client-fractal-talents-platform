/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import ButtonWrapper, { ButtonWrapperProps } from "./ButtonWrapper";

type CustomButtonProps = ButtonWrapperProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const { startIcon, variant = "contained", endIcon, children, ...defaultProps } = props;

    return (
      <ButtonWrapper
        {...defaultProps}
        variant={
          props?.disabled
            ? variant === "contained"
              ? "gray_1"
              : "gray_2"
            : variant
        }
        ref={ref}
      >
        {startIcon && <span>{startIcon}</span>}
        <span>{children}</span>
        {endIcon && <span>{endIcon}</span>}
      </ButtonWrapper>
    );
  }
);

export default CustomButton;
