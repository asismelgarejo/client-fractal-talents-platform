"use client";
import React from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";
import TalentDetailSkills from "./TalentDetailSkills";
import TalentDetailDescription from "./TalentDetailDescription";
import TalentDetailHeader from "./TalentDetailHeader";
import TalentDetailCertificates from "./TalentDetailCertificates";
import TalentDetailExperience from "./TalentDetailExperience";
import TalentDetailEducation from "./TalentDetailEducation";

const TalentDetail = () => {
  return (
    <div
      className={clsx(
        styles.TalentDetailContainer,
        "drop-shadow-md w-full border rounded rounded-lg border-gray-300 min-h-[100px] p-4 overflow-y-scroll"
      )}
    >
      <div className={clsx(styles.TalentDetail, "space-y-4")}>
        <TalentDetailHeader />
        <TalentDetailCertificates />
        <TalentDetailSkills />
        <TalentDetailDescription />
        <TalentDetailExperience/>
        <TalentDetailEducation/>
      </div>
    </div>
  );
};

export default TalentDetail;