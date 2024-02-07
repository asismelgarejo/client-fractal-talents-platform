import React from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";


const TalentDetail = () => {
  return (
    <div className={clsx(styles.TalentDetailContainer)}>
      <div className="drop-shadow-md w-full min-h-[100px] border rounded rounded-lg border-gray-300"></div>
    </div>
  );
};

export default TalentDetail;
