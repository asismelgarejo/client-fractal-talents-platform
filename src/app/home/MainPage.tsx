"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import styles from "./home.module.css";
import TalentDetail from "@/components/Talent/TalentDetail/TalentDetail";
import FiltersBar from "@/components/FilterBar/FiltersBar";
import TalentsResults from "@/components/Talent/TalentsResults/TalentsResults";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";

type MainPageProps = {
  userProfile?: User;
};

const MainPage: React.FC<MainPageProps> = ({ userProfile }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(userProfile) dispatch.user.LOAD_USER(userProfile);
  }, [dispatch.user, userProfile]);
  return (
    <div
      className={clsx("max-w-screen-2xl w-full m-auto py-5 px-10  grow flex")}
      style={{
        height: "calc(100vh - 91px)",
      }}
    >
      <div className={clsx(styles.Container, "")}>
        <FiltersBar />
        <TalentsResults />
        <TalentDetail />
      </div>
    </div>
  );
};

export default MainPage;
