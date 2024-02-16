/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import ButtonWrapper, { ButtonWrapperProps } from "./ButtonWrapper";

type CustomButtonProps = ButtonWrapperProps & {
  startIcon?: React.ReactNode;
};

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    const { startIcon, children, ...defaultProps } = props;

    return (
      <ButtonWrapper {...defaultProps} ref={ref}>
        {startIcon && <span>{startIcon}</span>}
        <span>{children}</span>
      </ButtonWrapper>
    );
  }
);

export default CustomButton;
