import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type CardTreeProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const CardTree: React.FC<CardTreeProps> = (props) => {
  return (
    <div
      {...props}
      className={clsx(
        props?.className ?? "",
        "bg-white p-2 min-w-[100px] rounded rounded-2xl shadow-md"
      )}
    />
  );
};

export default CardTree;
