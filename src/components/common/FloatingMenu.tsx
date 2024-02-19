"use client";
import React, { useState } from "react";
import CustomChip from "./CustomChip";

import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";
import CardTwo from "./Cards/CardTwo";
import { MenuItem } from "./MenuItem";
import { ArrowOutlineIcon, CancelIcon } from "@/utils/icons";
import clsx from "clsx";

export type MenuItemProps = {
  label: string;
  id: number;
};

type FloatingMenuProps = {
  label: string;
  items: MenuItemProps[];
  value: MenuItemProps | null | MenuItemProps[];
  onChange(item: MenuItemProps | null | MenuItemProps[]): void;
  multiple?: boolean;
};

const FloatingMenu: React.FC<FloatingMenuProps> = ({
  label,
  items,
  value,
  multiple,
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

  const showCounter = () => {
    if (value instanceof Array) return value.length > 0;
    return !!value;
  };

  const getSelected = (item: MenuItemProps): boolean => {
    if (value instanceof Array)
      return value.map((item) => item.id).includes(item.id);
    return value?.id === item.id;
  };

  const getCount = (): number => {
    if (value instanceof Array) {
      return value.length;
    } else {
      if (value) return 1;
      return 0;
    }
  };
  return (
    <div ref={ref} className="relative">
      <CustomChip
        label={label}
        color="gray"
        className="cursor-pointer"
        onClick={(e) => handleClickInside()}
        endIcon={
          showCounter() ? (
            <span className="rounded-full bg-primary-500 w-[15px] h-[15px] text-xs items-center justify-center flex font-bold text-white">
              {getCount()}
            </span>
          ) : null
        }
      />
      {show && (
        <div className="absolute z-[100] left-0 w-fit">
          {showCounter() && multiple && value instanceof Array && (
            <CardTwo
              className={clsx(
                "px-4 py-2 border rounded-lg flex space-x-1 space-y-1 grow flex-wrap overflow-y-scroll w-auto",
                {
                  ["min-w-[200px]"]: true,
                  ["max-w-[720px]"]: true,
                  ["min-h-[30px]"]: true,
                  ["max-h-[150px]"]: true,
                }
              )}
            >
              {value.map((val) => (
                <CustomChip
                  key={val.id}
                  label={val.label}
                  color="gray"
                  className="text-sm"
                  onClick={(e) => {
                    onChange(value.filter((i) => i.id !== val.id));
                  }}
                  endIcon={
                    <button type="button">
                      <CancelIcon className="fill-black" />
                    </button>
                  }
                />
              ))}
            </CardTwo>
          )}

          <CardTwo
            className={clsx("px-0 py-1 border rounded-lg overflow-y-scroll", {
              ["min-w-[200px]"]: true,
              ["max-w-[320px]"]: true,
              ["min-h-[30px]"]: true,
              ["max-h-[220px]"]: true,
            })}
          >
            {items.length === 0 && (
              <MenuItem className="text-xs">Sin opciones</MenuItem>
            )}
            {items.map((item) => {
              const isSelected = getSelected(item);
              return (
                <MenuItem
                  key={item.id}
                  active={false}
                  className={clsx({
                    ["!bg-gray-100"]: isSelected,
                  })}
                  onClick={() => {
                    if (value instanceof Array) {
                      if (value.map((item) => item.id).includes(item.id)) {
                        onChange(value.filter((i) => i.id !== item.id));
                      } else {
                        onChange([...value, item]);
                      }
                    } else {
                      if (value) {
                        if (value.id === item.id) {
                          onChange(null);
                        } else {
                          onChange(item);
                        }
                      } else {
                        onChange(item);
                      }
                    }
                    if (!multiple) setShow(false);
                  }}
                  cursor
                  endIcon={isSelected ? <ArrowOutlineIcon /> : null}
                >
                  {item.label}
                </MenuItem>
              );
            })}
          </CardTwo>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;
