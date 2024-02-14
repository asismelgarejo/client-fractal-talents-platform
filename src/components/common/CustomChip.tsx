import clsx from "clsx";
import React from "react";
const variants = {
  primary: "bg-primary-200 text-primary-500",
  secondary: "bg-secondary-200 text-secondary-500",
};
type CustomChipProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  startIcon?: React.ReactNode;
  color?: keyof typeof variants;

  // avatar
  // children
  // classes
  // clickable
  // component
  // deleteIcon
  // disabled
  // icon
  label: string;
  // onDelete
  // size
  // skipFocusWhenDisabled
};

const CustomChip: React.FC<CustomChipProps> = (props) => {
  const {
    startIcon,
    children,
    label,
    color = "primary",
    ...btnProps
  } = props;

  return (
    <span
      {...btnProps}
      className={clsx(
        {
          [btnProps?.className ?? ""]: !!btnProps?.className,
          [variants[color]]: true,
        },
        "rounded-2xl flex space-x-2 inline-block items-center px-4 py-1 font-medium text-sm w-fit"
      )}
    >
      {startIcon && <span>{startIcon}</span>}
      <span>{label}</span>
    </span>
  );
};

export default CustomChip;
