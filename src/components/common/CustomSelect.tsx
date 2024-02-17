import { ArrowIcon } from "@/utils/icons";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import CardTwo from "./Cards/CardTwo";
import { MenuItem } from "./MenuItem";
import CustomButton from "./CustomButton";
import { ButtonWrapperProps } from "./ButtonWrapper";

type CustomSelectProps = ButtonWrapperProps & {
  label?: string;
  border?: boolean;
  options: MenuItemProps[];
  change(item: MenuItemProps): void;
  value: string;
  placeholder?: string;
};

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
    change,
    className,
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
          className={clsx(
            {
              ["border-white"]: !border,
              "w-full justify-between py-2": true,
            },
            className
          )}
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
                change(item);
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
