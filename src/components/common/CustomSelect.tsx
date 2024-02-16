import { ArrowIcon } from "@/utils/icons";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import CardTwo from "./Cards/CardTwo";
import { MenuItem } from "./MenuItem";
import CustomButton from "./CustomButton";
import { CustomStyles } from "./ButtonWrapper";
const variants = {
  outline:
    "border border-primary-500 text-primary-500 bg-transparent fill-primary-500",
  contained: "border-tertiary text-white fill-white bg-tertiary",
};
type CustomSelectProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<Omit<HTMLElement, "onChange">>,
  Omit<HTMLElement, "onChange">
> & {
  variant?: keyof typeof variants;
  label?: string;
  border?: boolean;
  options: MenuItemProps[];
  onChange(item: MenuItemProps): void;
  value: string;
  placeholder?: string;
} & CustomStyles;

export type MenuItemProps = {
  name: string;
  id: number;
};

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const {
    label,
    variant = "outline",
    border = true,
    placeholder,
    options,
    value,
    onChange,
    borderColor,
    txtColor,
    fillColor,
  } = props;

  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setShow(false);
  };

  const handleClickInside = () => {
    setShow((prev) => !prev);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className="relative">
      <div className="w-full text-black space-y-1">
        {label && <div className="text-start text-sm">{label}</div>}
        <CustomButton
          onClick={(e) => handleClickInside()}
          variant={variant}
          className={clsx({
            ["!border-white"]: !border,
            "w-full justify-between py-2": true,
          })}
          borderColor={borderColor ?? "gray"}
          txtColor={txtColor ?? "gray"}
          fillColor={fillColor ?? "gray"}
          endIcon={<ArrowIcon style={{ fill: "inherit" }} />}
        >
          {value !== "" ? value : placeholder}
        </CustomButton>
      </div>

      {show && (
        <CardTwo className="absolute z-[100] px-0 py-2 min-w-[100px] min-h-[30px] w-full right-0 left-0">
          {options.length === 0 && (
            <MenuItem className="text-xs">Sin opciones</MenuItem>
          )}
          {options.map((item) => (
            <MenuItem
              className="text-start"
              key={item.id}
              active={false}
              onClick={() => {
                onChange(item);
                setShow(false);
              }}
              cursor
            >
              {item.name}
            </MenuItem>
          ))}
        </CardTwo>
      )}
    </div>
  );
};

export default CustomSelect;
