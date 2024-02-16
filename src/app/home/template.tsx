"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";

type LayoutProps = {
  children: React.ReactNode;
};
const template: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children} </Provider>
    </>
  );
};

export default template;
