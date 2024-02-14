import clsx from "clsx";

type CardOneProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
const CardOne: React.FC<CardOneProps> = (props) => {
  return (
    <article
      {...props}
      className={clsx(
        props?.className ?? "",
        "bg-gray-100 p-2 w-fit rounded rounded-md w-full"
      )}
    />
  );
};

export default CardOne;
