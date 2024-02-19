"use client";
import React, { useState } from "react";
import { useRef } from "react";

import { useOnClickOutside } from "usehooks-ts";
import CardTwo from "./Cards/CardTwo";

type FloatMenuProps = {
  parent: React.ReactNode;
  children: React.ReactNode;
};

const FloatMenu: React.FC<FloatMenuProps> = ({ children, parent }) => {
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
      <div onClick={(e) => handleClickInside()} className="cursor-pointer">{parent}</div>
      {show && (
        <CardTwo className="absolute z-[100] px-0 py-2 min-w-[100px] min-h-[30px] w-full right-0 left-0">
          {children}
        </CardTwo>
      )}
    </div>
  );
};

export default FloatMenu;
