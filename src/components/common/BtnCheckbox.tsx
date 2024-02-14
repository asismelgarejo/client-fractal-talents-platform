import { CheckIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";
const variants = {
  outline: "border  border-[#0B85C3] text-[#0B85C3] fill-[#0B85C3]",
  contained: "border border-[#009688] text-[#fff] fill-[#fff] bg-[#009688]",
};

type BtnCheckboxProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: keyof typeof variants;
  checked?: boolean;
};

const BtnCheckbox: React.FC<BtnCheckboxProps> = (props) => {
  const { checked = false, children, variant = "outline", ...btnProps } = props;

  return (
    <button
      {...btnProps}
      type="button"
      className={clsx(
        "rounded-lg justify-between flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm",
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [variants[variant]]: true,
          ["border-gray-300 text-gray-500"]: !checked,
        }
      )}
    >
      <span>{children}</span>
      {
        <span
          className={clsx(
            "border-gray-300 bg-white rounded w-[16px] h-[16px] rounded-full border  flex items-center justify-center",
            {
              ["border-primary-500 bg-primary-500"]: checked,
            }
          )}
        >
          {checked && <CheckIcon className="text-[10px]"/>}
        </span>
      }
    </button>
  );
};

export default BtnCheckbox;
