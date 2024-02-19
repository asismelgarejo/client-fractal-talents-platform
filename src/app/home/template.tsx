"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import MainHeader from "@/components/common/MainHeader/MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};
const template: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <MainHeader />
        {children}
      </Provider>
    </>
  );
};

export default template;
