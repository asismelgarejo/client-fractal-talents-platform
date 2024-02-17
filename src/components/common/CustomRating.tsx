import { StartIcon, StartOulinedIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";

type CustomRatingProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};
const CustomRating: React.FC<CustomRatingProps> = (props) => {
  const { className, ...divProps } = props;
  return (
    <div {...divProps} className={clsx("flex space-x-1", className)}>
      <StartIcon />
      <StartIcon />
      <StartIcon />
      <StartOulinedIcon />
      <StartOulinedIcon />
    </div>
  );
};

export default CustomRating;
