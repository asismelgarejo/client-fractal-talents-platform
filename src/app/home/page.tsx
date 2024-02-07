import CustomButton from "@/components/common/CustomButton";
import { AddIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";
import styles from "./home.module.css";
import TalentCard from "./TalentCard";
import TalentDetail from "./TalentDetail";
import Filters from "./Filters";

const page = () => {
  return (
    <div
      className={clsx(
        "max-w-[1300px] w-full m-auto py-5 px-4 bg-red-300 grow flex"
      )}
      style={{
        height: "calc(100vh - 131px)",
      }}
    >
      <div className={clsx(styles.Container, "bg-lime-700")}>
        <div style={{ gridArea: "button" }}>
          <CustomButton
            btnVariant="outline"
            className="shrink"
            startIcon={<AddIcon />}
          >
            Nuevo Talento
          </CustomButton>
        </div>
        <div className={clsx(styles.ResultsContainer, "bg-lime-400 space-y-3")}>
          {Array.from({ length: 10 }).map((_, idx) => (
            <TalentCard key={idx} active={idx !== 0} />
          ))}
        </div>
        <Filters />
        <TalentDetail />
      </div>
    </div>
  );
};

export default page;
