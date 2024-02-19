"use server";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default layout;
