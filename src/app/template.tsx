"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import { SnackbarProvider } from "notistack";

type LayoutProps = {
  children: React.ReactNode;
};
const template: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <SnackbarProvider maxSnack={1}>{children}</SnackbarProvider>
      </Provider>
    </>
  );
};

export default template;
