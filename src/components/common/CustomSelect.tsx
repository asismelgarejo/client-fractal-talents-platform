import { ArrowIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";
const variants = {
  outline:
    "border border-primary-500 text-primary-500 bg-transparent fill-primary-500",
  contained: "border-tertiary text-white fill-white bg-tertiary",
};
type CustomSelectProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  arrowIcon?: React.ReactNode;
  variant?: keyof typeof variants;
  label: string;
  border?: boolean;
};

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const {
    arrowIcon,
    children,
    label,
    variant = "contained",
    border = true,
    ...btnProps
  } = props;

  return (
    <button
      {...btnProps}
      className={clsx(
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [variants[variant]]: true,
          ["border-none"]: !border,
        },
        "rounded-lg flex space-x-2 inline-block items-center px-5 py-2 font-semibold text-sm"
      )}
    >
      <span>{label}</span>
      {arrowIcon ? <>{arrowIcon}</> : <ArrowIcon style={{ fill: "inherit" }} />}
    </button>
  );
};

export default CustomSelect;
