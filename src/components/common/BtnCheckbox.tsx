import { colors } from "@/utils/colors";
import { customColors, customVariants } from "@/utils/custom-styles";
import { CheckIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";

type BtnCheckboxProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: keyof typeof customVariants;
  checked?: boolean;
  color?: keyof typeof colors;
};

const BtnCheckbox: React.FC<BtnCheckboxProps> = (props) => {
  const {
    checked = false,
    color = "primary",
    children,
    variant = "outline",
    ...btnProps
  } = props;

  return (
    <button
      {...btnProps}
      type="button"
      className={clsx(
        "rounded-lg justify-between flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm",
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [customVariants[variant]]: true,
          [customColors[btnProps?.disabled ? "gray" : color]]: true,
        }
      )}
    >
      <span>{children}</span>
      {
        <span
          className={clsx(
            "border-gray-300  rounded w-[16px] h-[16px] rounded-full border  flex items-center justify-center",
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
    </button>
  );
};

export default BtnCheckbox;
