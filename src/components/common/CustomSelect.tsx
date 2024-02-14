import { ArrowIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";
const variants = {
  outline: "border  border-main text-main fill-main",
  contained: "border border-secondary text-white fill-white bg-secondary",
  noborder: " text-white bg-transparent fill-main",
};
type CustomSelectProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  arrowIcon?: React.ReactNode;
  variant?: keyof typeof variants;
  label: string;
};

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const {
    arrowIcon,
    children,
    label,
    variant = "contained",
    ...btnProps
  } = props;

  return (
    <button
      {...btnProps}
      className={clsx(
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [variants[variant]]: true,
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
