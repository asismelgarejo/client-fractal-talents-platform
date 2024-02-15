import { clsx } from "clsx";
import React from "react";

type MenuItemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  active?: boolean;
  cursor?: boolean;
};

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { active, cursor = false,...itemprops } = props;
  return (
    <span
      {...itemprops}
      className={clsx(
        "px-4 py-2 hover:bg-primary-200 block",
        props?.className ?? "",
        {
          ["bg-primary-200"]: active,
          ["cursor-pointer"]: cursor,
        }
      )}
    />
  );
};