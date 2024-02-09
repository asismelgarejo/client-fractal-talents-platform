import React from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";
import Image from "next/image";
import { EditIcon } from "@/utils/icons";

const TalentDetail = () => {
  return (
    <div
      className={clsx(
        styles.TalentDetailContainer,
        "drop-shadow-md w-full border rounded rounded-lg border-gray-300 min-h-[100px] p-4"
      )}
    >
      <div className={clsx(styles.TalentDetailInfo, "")}>
        <div className="relative">
          <Image
            src={"/assets/mock-talent.svg"}
            alt="talent photo"
            width={96}
            height={96}
          />
          <div className="absolute right-0 bottom-0">
            <button className="p-2.5 rounded-full bg-white shadow-md">
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDetail;
