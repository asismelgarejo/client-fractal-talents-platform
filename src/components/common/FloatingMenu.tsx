"use client";
import React, { useState } from "react";
import CustomChip from "./CustomChip";

import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";
import CardTwo from "./Cards/CardTwo";
import { MenuItem } from "./MenuItem";

type MenuItemProps = {
  label: string;
  id: number;
};

type FloatingMenuProps = {
  label: string;
  items: MenuItemProps[];
  onChange(item: MenuItemProps): void;
};

const FloatingMenu: React.FC<FloatingMenuProps> = ({
  label,
  items,
  onChange,
}) => {
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
    <div ref={ref}>
      <CustomChip
        label={label}
        color="gray"
        className="cursor-pointer"
        onClick={(e) => handleClickInside()}
      />
      {show && (
        <CardTwo className="absolute z-[100] px-0 py-2 min-w-[100px] min-h-[30px]">
          {items.length === 0 && (
            <MenuItem className="text-xs">Sin opciones</MenuItem>
          )}
          {items.map((item) => (
            <MenuItem
              key={item.id}
              active={false}
              onClick={() => {
                onChange(item);
                setShow(false);
              }}
              cursor
            >
              {item.label}
            </MenuItem>
          ))}
        </CardTwo>
      )}
    </div>
  );
};

export default FloatingMenu;
