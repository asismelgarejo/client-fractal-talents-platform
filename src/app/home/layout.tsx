"use client";
import store from "@/store";
import React from "react";
import { Provider } from "react-redux";
type LayoutProps = {
  children: React.ReactNode;
};
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default layout;
