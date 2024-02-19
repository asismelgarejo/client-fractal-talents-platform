/* eslint-disable react/display-name */

import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

type CardTwoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
};

const CardTwo = forwardRef<HTMLDivElement, CardTwoProps>((props, ref) => {
  const { ...divProps } = props;
  return (
    <div
      {...divProps}
      className={clsx(
        "bg-white p-2 min-w-[100px] rounded shadow-md",
        divProps?.className ?? ""
      )}
    />
  );
});

export default CardTwo;
