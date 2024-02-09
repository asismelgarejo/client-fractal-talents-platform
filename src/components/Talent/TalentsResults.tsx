import clsx from "clsx";
import React from "react";

import styles from "./TalentResults.module.css";
import TalentCard from "./TalentCard";

const TalentsResults = () => {
  return (
    <div className={clsx(styles.ResultsContainer, "space-y-3")}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <TalentCard key={idx} active={idx !== 0} />
      ))}
    </div>
  );
};

export default TalentsResults;
