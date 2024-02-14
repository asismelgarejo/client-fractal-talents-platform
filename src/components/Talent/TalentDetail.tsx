"use client";
import React from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";
import Image from "next/image";
import { UploadIcon } from "@/utils/icons";
import CardOne from "../common/Cards/CardOne";
import TalentDetailSkills from "./TalentDetail/TalentDetailSkills";
import TalentDetailDescription from "./TalentDetail/TalentDetailDescription";
import TalentDetailHeader from "./TalentDetail/TalentDetailHeader";

const TalentDetailCertificates = () => {
  return (
    <section className="space-x-4 flex">
      <TalentDetailCertificateCard />
      <TalentDetailCertificateCard />
      <TalentDetailCertificateCardUpload />
    </section>
  );
};
const TalentDetailCertificateCard = () => {
  return (
    <CardOne>
      <div className="space-y-2">
        <div className="max-h-[100px] overflow-hidden">
          <Image
            src={"/assets/certificate.jpg"}
            alt="certificate"
            className="w-full"
            width={200}
            height={200}
          />
        </div>
        <div>
          <h4 className="text-gray-400 text-sm">Certificado en Frontend</h4>
          <span className="text-gray-400 text-xs">PDF</span>
        </div>
      </div>
    </CardOne>
  );
};
const TalentDetailCertificateCardUpload = () => {
  return (
    <CardOne className="flex">
      <div className="flex flex-col items-center m-auto">
        <span className="rounded bg-gray-200 rounded-full p-1">
          <UploadIcon className="text-[18.5px]" />
        </span>
        <p className="text-primary-500 text-sm font-semibold">
          Sube un archivo
        </p>
      </div>
    </CardOne>
  );
};

const TalentDetail = () => {
  return (
    <div
      className={clsx(
        styles.TalentDetailContainer,
        "drop-shadow-md w-full border rounded rounded-lg border-gray-200 min-h-[100px] p-4"
      )}
    >
      <div className={clsx(styles.TalentDetail, "space-y-4")}>
        <TalentDetailHeader />
        <TalentDetailCertificates />
        <TalentDetailSkills />
        <TalentDetailDescription />
      </div>
    </div>
  );
};

export default TalentDetail;

// <div className="flex flex-col gap-1 pt-2">
// <div className="flex gap-2">
//   <h2>Juan Lopez Martinez</h2>
//   <Image
//     src={"assets/favorite-icon.svg"}
//     alt="favorite icon"
//     width={20}
//     height={20}
//   />
// </div>
// <div className="flex gap-2 items-center">
//   <h3>Full stack developer</h3>
//   <div className="flex gap-3">
//     {/* <TalentDetail
//       type="location"
//       firstParameter="Lima"
//       secondParameter="Peru"
//     />
//     <TalentDetail
//       type="salary"
//       firstParameter="2500"
//       secondParameter="3000"
//       currency="USD"
//     /> */}
//   </div>
//   <Image src={EditIcon} alt="edit icon" width={20} height={20} />
// </div>
// <div className="flex gap-2 items-center">
//   <TalentRating />
//   <h3>Full stack developer</h3>
// </div>
// </div>
