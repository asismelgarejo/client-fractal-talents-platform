import { clsx } from "clsx";
import React from "react";

type MenuItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  active?: boolean;
  cursor?: boolean;
  endIcon?: React.ReactNode;
};

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { active, cursor = false, endIcon, children, ...itemprops } = props;
  return (
    <span
      {...itemprops}
      className={clsx(
        props?.className ?? "",
        "px-4 py-3 hover:bg-gray-100 block flex justify-between items-center",
        {
          ["bg-primary-200"]: active,
          ["cursor-pointer"]: cursor,
        }
      )}
    >
      <span>{children}</span>
      {endIcon && endIcon}
    </span>
  );
};
