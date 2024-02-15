"use client";
import store from "@/store";
import React from "react";
import { Provider } from "react-redux";
import MainHeader from "@/components/common/MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <MainHeader />
        {children}
      </Provider>
      ;
    </>
  );
};

export default layout;
