"use server";
import React from "react";
import MainHeader from "@/components/common/MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default layout;
