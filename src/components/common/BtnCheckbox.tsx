/* eslint-disable react/display-name */
import { CheckIcon } from "@/utils/icons";
import clsx from "clsx";
import React, { forwardRef } from "react";
import ButtonWrapper, { ButtonWrapperProps } from "./ButtonWrapper";

type BtnCheckboxProps = ButtonWrapperProps & {
  checked?: boolean;
};

const BtnCheckbox = forwardRef<HTMLButtonElement, BtnCheckboxProps>(
  (props, ref) => {
    const {
      checked = false,
      children,
      txtColor,
      borderColor,
      ...btnProps
    } = props;

    return (
      <ButtonWrapper
        {...btnProps}
        ref={ref}
        className={clsx(
          "justify-between flex inline-block px-5 py-2 text-sm ",
          btnProps.className ?? "",
          { ["bg-primary-100"]: checked }
        )}
        txtColor={checked ? "primary" : txtColor}
        borderColor={checked ? "primary" : borderColor}
      >
        <span>{children}</span>
        {
          <span
            className={clsx(
              "border-gray-300 rounded w-[16px] h-[16px]  rounded-full border  flex items-center justify-center",
              {
                ["border-primary-500 bg-primary-500"]: checked,
                ["bg-primary-500"]: checked,
                ["bg-white"]: !checked,
              }
            )}
          >
            {checked && <CheckIcon className="text-[10px]" />}
          </span>
        }
      </ButtonWrapper>
    );
  }
);

export default BtnCheckbox;
