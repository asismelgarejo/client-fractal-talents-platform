/* eslint-disable react/display-name */
import { CheckIcon } from "@/utils/icons";
import clsx from "clsx";
import React, { forwardRef } from "react";

type CustomCheckboxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  checked: boolean;
  label?: string;
};

const CustomCheckbox = forwardRef<HTMLDivElement, CustomCheckboxProps>(
  (props, ref) => {
    const { checked, label, className, ...divprops } = props;
    return (
      <div
        ref={ref}
        {...divprops}
        className={clsx(
          "flex items-center text-black text-sm space-x-2 font-medium cursor-pointer select-none",
          className
        )}
      >
        <button
          type="button"
          className={clsx(
            "w-[16px] h-[16px] rounded rounded-sm border border-gray-400",
            {
              ["bg-gray-400"]: checked,
            }
          )}
        >
          {checked && <CheckIcon />}
        </button>
        {label && <span>{label}</span>}
      </div>
    );
  }
);

export default CustomCheckbox;
