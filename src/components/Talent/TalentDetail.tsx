"use client";
import React from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";
import Image from "next/image";
import {
  EditIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  MoneyIcon,
  PhoneIcon,
} from "@/utils/icons";
import CustomRating from "../common/CustomRating";
import CustomSelect from "../common/CustomSelect";
import CustomButton from "../common/CustomButton";

const TalentDetailHeader = () => {
  return (
    <div
      className={clsx(
        styles.TalentDetailHeader,
        "bg-green-300 space-x-2 text-black"
      )}
    >
      <div className="">
        <div className="relative bg-red-200">
          <Image
            src={"/assets/mock-talent.svg"}
            alt="talent photo"
            width={96}
            height={96}
          />
          <div className="absolute right-0 bottom-0">
            <button
              className="p-2.5 rounded-full bg-white shadow-md"
              type="button"
            >
              <EditIcon className="fill-gray-500 text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-bold text-lg">Juan Lopez Martinez</h3>
        <div className="flex space-x-2 text-sm items-center text-gray-500">
          <span className="flex space-x-1">Full-stack developer</span>
          <span className="flex space-x-1 items-center">
            <LocationIcon />
            <span>Lima, Peru</span>
          </span>
          <span className="flex space-x-1 items-center">
            <MoneyIcon />
            <span>2500-3000</span>
          </span>
          <button className="p-1 rounded-full bg-red-200" type="button">
            <EditIcon className="fill-gray-500 text-xl" />
          </button>
        </div>
        <div className="flex space-x-2 text-gray-500 items-center">
          <CustomRating />
          <span className="flex space-x-1 items-center text-sm">
            2 feedbacks
          </span>
        </div>
      </div>
      <div className="bg-red-200 h-full flex flex-col">
        <div className="bg-red-500 flex space-x-6 h-fit">
          <CustomSelect label="Ver CV" variant="noborder" />
          <CustomButton
            variant="contained"
            startIcon={<PhoneIcon className="text-xl" />}
          >
            Contactar
          </CustomButton>
        </div>
        <div className="space-x-2 bg-green-200 mt-auto h-fit flex justify-end">
          <button type="button" className="bg-green-400 h-fit">
            <GithubIcon className="text-[24px] fill-gray-200" />
          </button>
          <button type="button" className="bg-green-400">
            <LinkedInIcon className="text-[24px] fill-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

const TalentDetailCertificateCard = () => {
  return (
    <section>
      <TalentDetailCertificates />
      <TalentDetailCertificates />
    </section>
  );
};
const TalentDetailCertificates = () => {
  return (
    <article className="bg-gray-100 p-2">
      <div>
        <div>
          <Image
            src={"/assets/certificate.jpg"}
            alt="certificate"
            width={200}
            height={200}
          />
        </div>
      </div>
    </article>
  );
};

const TalentDetail = () => {
  return (
    <div
      className={clsx(
        styles.TalentDetailContainer,
        "drop-shadow-md w-full border rounded rounded-lg border-gray-300 min-h-[100px] p-4"
      )}
    >
      <div className={clsx(styles.TalentDetail, "")}>
        <TalentDetailHeader />
        <TalentDetailCertificates />
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
