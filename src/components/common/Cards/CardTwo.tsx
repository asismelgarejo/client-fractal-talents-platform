/* eslint-disable react/display-name */

import { Sizes } from "@/types/Sizes";
import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

type CardTwoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  rd?: keyof typeof roundedSizes;
};

const roundedSizes: Record<Sizes, string> = {
  sm: "rounded-sm",
  md: "rounded-[14px]",
  lg: "rounded-sm",
  xl: "rounded-sm",
  "2xl": "rounded-sm",
};

const CardTwo = forwardRef<HTMLDivElement, CardTwoProps>((props, ref) => {
  const { rd = "sm", ...divProps } = props;
  return (
    <div
      {...divProps}
      className={clsx(
        "bg-white p-2 min-w-[100px] rounded shadow-md",
        divProps?.className ?? "",
        { [roundedSizes[rd]]: true }
      )}
    />
  );
});

export default CardTwo;
