import clsx from "clsx";
import React from "react";
import styles from "./home.module.css";
import TalentDetail from "@/components/Talent/TalentDetail/TalentDetail";
import FiltersBar from "@/components/FilterBar/FiltersBar";
import TalentsResults from "@/components/Talent/TalentsResults/TalentsResults";
import TalentDetailCertificates from "@/components/Talent/TalentDetail/TalentDetailCertificates";

const page = () => {
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

export default page;
