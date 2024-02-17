import clsx from "clsx";
import React from "react";
import styles from "./TalentResults.module.css";
import TalentCard from "./TalentCard";
import Link from "next/link";

const TalentsResults = () => {
  return (
    <div className={clsx(styles.ResultsContainer, "space-y-3")}>
      {Array.from({ length: 5  }).map((_, idx) => (
        <Link key={idx} href={"/"} className="inline-block w-full">
          <TalentCard active={idx === 0} />
        </Link>
      ))}
    </div>
  );
};

export default TalentsResults;
