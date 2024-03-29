"use client";
import React from "react";
import { SnackbarProvider } from "notistack";

type LayoutProps = {
  children: React.ReactNode;
};
const template: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SnackbarProvider maxSnack={1}>{children}</SnackbarProvider>
    </>
  );
};

export default template;
