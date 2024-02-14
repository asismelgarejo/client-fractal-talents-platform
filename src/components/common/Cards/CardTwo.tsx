import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type CardTwoProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const CardTwo: React.FC<CardTwoProps> = (props) => {
  return (
    <div
      {...props}
      className={clsx(
        "bg-white p-2 min-w-[100px] rounded rounded-sm shadow-md",
        props?.className ?? ""
      )}
    />
  );
};

export default CardTwo;
