"use client";
import React, { useRef } from "react";
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
import CustomRating from "@/components/common/CustomRating";
import CustomSelect from "@/components/common/CustomSelect";
import CustomButton from "@/components/common/CustomButton";
import { RefObject } from "@/components/common/CustomDialog";
import DialogAddSalaryRange from "@/components/dialogs/DialogAddSalaryRange";
import DialogProfileImage from "@/components/dialogs/DialogProfileImage";

const TalentDetailHeader = () => {
  const refMoney = useRef<RefObject>(null);
  const refProfileImage = useRef<RefObject>(null);

  return (
    <div className={clsx(styles.TalentDetailHeader, "space-x-2 text-black")}>
      <div className="">
        <div className="relative">
          <div className="rounded rounded-full overflow-hidden">
            <Image
              src={"/assets/user1.jpg"}
              alt="talent photo"
              width={96}
              height={96}
            />
          </div>
          <div className="absolute right-0 bottom-0">
            <button
              className="p-2.5 rounded-full bg-white shadow-lg"
              type="button"
              onClick={() => {
                refProfileImage.current && refProfileImage.current.showDialog();
              }}
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
          <button
            className="p-1 rounded-full"
            type="button"
            onClick={() => {
              refMoney.current && refMoney.current.showDialog();
            }}
          >
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
      <div className=" h-full flex flex-col">
        <div className="flex space-x-6 h-fit">
          <CustomSelect label="Ver CV" variant="outline" border={false} />
          <CustomButton
            variant="contained"
            startIcon={<PhoneIcon className="text-xl" />}
          >
            Contactar
          </CustomButton>
        </div>
        <div className="space-x-2 mt-auto h-fit flex justify-end">
          <button type="button" className=" h-fit">
            <GithubIcon className="text-[24px] fill-gray-400" />
          </button>
          <button type="button" className="">
            <LinkedInIcon className="text-[24px] fill-gray-400" />
          </button>
        </div>
      </div>
      <DialogAddSalaryRange
        ref={refMoney}
        closeModal={() => {
          refMoney.current && refMoney.current.showDialog();
        }}
      />
      <DialogProfileImage
        ref={refProfileImage}
        closeModal={() => {
          refProfileImage.current && refProfileImage.current.showDialog();
        }}
      />

    </div>
  );
};

export default TalentDetailHeader;
