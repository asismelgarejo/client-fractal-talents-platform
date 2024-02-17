"use client";
import React, { useRef } from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";
import TalentDetailSkills from "./TalentDetailSkills";
import TalentDetailDescription from "./TalentDetailDescription";
import TalentDetailHeader from "./TalentDetailHeader";
import TalentDetailCertificates from "./TalentDetailCertificates";
import TalentDetailExperience from "./TalentDetailExperience";
import TalentDetailEducation from "./TalentDetailEducation";
import TalentDetailLanguages from "./TalentDetailLanguages";
import TalentDetailFeedback from "./TalentDetailFeedback";

const TalentDetail = () => {
  return (
    <div
      className={clsx(
        styles.TalentDetailContainer,
        "w-full shadow-md  border rounded rounded-lg border-gray-300 min-h-[100px] p-4 overflow-y-scroll"
      )}
    >
      <div className={clsx(styles.TalentDetail, "space-y-4")}>
        <TalentDetailHeader />
        <TalentDetailCertificates />
        <TalentDetailSkills />
        <TalentDetailDescription />
        <TalentDetailExperience />
        <TalentDetailEducation />
        <TalentDetailLanguages />
        <TalentDetailFeedback />
      </div>

    </div>
  );
};

export default TalentDetail;
