"use client";
import React, { useRef, useState } from "react";
import styles from "./TalentDetail.module.css";
import clsx from "clsx";
import Image from "next/image";
import {
  EditIcon,
  GithubIcon,
  HeartContainedIcon,
  HeartOutlinedIcon,
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
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import DialogSocialNetworks from "@/components/dialogs/DialogSocialNetworks";
import { User } from "@/types/User";

type TalentProfileProps = {
  profileImage: string;
};
const TalentProfile: React.FC<TalentProfileProps> = ({ profileImage }) => {
  const [userAvatarSrc, setUserAvatarSrc] = useState(profileImage);
  const refProfileImage = useRef<RefObject>(null);

  return (
    <div className={clsx("relative", styles.TalentProfile)}>
      <div className="rounded rounded-full overflow-hidden">
        <Image
          alt="talent photo"
          width={96}
          height={96}
          src={userAvatarSrc}
          placeholder="blur"
          draggable={false}
          blurDataURL="/assets/fallback_avatar.jpg"
          onError={(e) => setUserAvatarSrc("/assets/fallback_avatar.jpg")}
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
      <DialogProfileImage
        ref={refProfileImage}
        closeModal={() => {
          refProfileImage.current && refProfileImage.current.showDialog();
        }}
      />
    </div>
  );
};

type TalentHeaderProps = {
  title: string;
};

const TalentHeader: React.FC<TalentHeaderProps> = ({ title }) => {
  const [heart, setHeart] = useState(false);
  return (
    <div className={clsx("flex space-x-2 items-center", styles.TalentHeader)}>
      <h3 className="font-bold text-lg">{title}</h3>
      <button type="button" onClick={() => setHeart((prev) => !prev)}>
        {heart ? (
          <HeartContainedIcon className="text-[20px]" />
        ) : (
          <HeartOutlinedIcon className="text-[20px]" />
        )}
      </button>
    </div>
  );
};

type TalentSubheaderProps = {
  profile: string;
  cityName: string;
  countryName: string;
  salaryMaximum: number;
  salaryMinimun: number;
  userData: User | null;
};
const TalentSubheader: React.FC<TalentSubheaderProps> = ({
  profile,
  cityName,
  countryName,
  salaryMaximum,
  salaryMinimun,
  userData,
}) => {
  const refMoney = useRef<RefObject>(null);

  return (
    <>
      <div
        className={clsx(
          "flex space-x-2 text-sm items-center text-gray-500",
          styles.TalentSubheader2
        )}
      >
        <span className="flex space-x-1">{profile}</span>
        <span className="flex space-x-1 items-center">
          <LocationIcon />
          <span>
            {countryName}, {cityName}
          </span>
        </span>
        <span className="flex space-x-1 items-center">
          <MoneyIcon />
          <span>
            {salaryMinimun}-{salaryMaximum}
          </span>
        </span>
        {userData && (
          <button
            className="p-1 rounded-full"
            type="button"
            onClick={() => {
              refMoney.current && refMoney.current.showDialog();
            }}
          >
            <EditIcon className="fill-gray-500 text-xl" />
          </button>
        )}
      </div>
      <DialogAddSalaryRange
        ref={refMoney}
        closeModal={() => {
          refMoney.current && refMoney.current.showDialog();
        }}
      />
    </>
  );
};

const TalentRating: React.FC<{}> = () => {
  return (
    <div className={clsx("space-y-1", styles.TalentRating)}>
      <div className="flex space-x-2 text-gray-500 items-center">
        <CustomRating />
        <span className="flex space-x-1 items-center text-sm">2 feedbacks</span>
      </div>
    </div>
  );
};

const TalentInputs: React.FC<{}> = () => {
  return (
    <div className={clsx("h-full flex flex-col", styles.TalentInputs)}>
      <div className="flex space-x-6 h-fit">
        <CustomSelect
          className="min-w-[150px]"
          value="Ver CV"
          change={(item) => {
            // setSkill(item);
          }}
          border={false}
          options={[
            {
              id: 1,
              name: "CV",
            },
            {
              id: 2,
              name: "CV FRACTAL",
            },
          ]}
        />
        <CustomButton
          variant="contained"
          startIcon={<PhoneIcon className="text-xl" />}
        >
          Contactar
        </CustomButton>
      </div>
    </div>
  );
};
const TalentSocialNetworks: React.FC<{}> = () => {
  const refSocialNet = useRef<RefObject>(null);
  return (
    <div
      className={clsx(
        "space-x-2 mt-auto h-fit flex justify-end",
        styles.TalentSocialNetworks
      )}
    >
      <button
        type="button"
        className=" h-fit"
        onClick={() => {
          refSocialNet?.current?.showDialog();
        }}
      >
        <GithubIcon className="text-[24px] fill-gray-400" />
      </button>
      <button
        type="button"
        className=""
        onClick={() => {
          refSocialNet?.current?.showDialog();
        }}
      >
        <LinkedInIcon className="text-[24px] fill-gray-400" />
      </button>
      <DialogSocialNetworks
        ref={refSocialNet}
        closeModal={() => {
          refSocialNet.current && refSocialNet.current.showDialog();
        }}
      />
    </div>
  );
};
const TalentDetailHeader = () => {
  const { talent: talentData, user: userData } = useSelector(
    (root: IRootState) => root
  );

  return (
    <>
      <div className={clsx(styles.TalentDetailHeader, "space-x-2 text-black")}>
        <TalentProfile profileImage={talentData.profileImage} />
        <TalentHeader title={`${talentData.name} ${talentData.lastName}`} />
        <TalentSubheader
          cityName={talentData.country.name}
          countryName={talentData.city.name}
          profile={talentData.profile}
          salaryMaximum={talentData.salary.maximum}
          salaryMinimun={talentData.salary.minimum}
          userData={userData}
        />
        <TalentRating />
        <TalentInputs />
        <TalentSocialNetworks />
      </div>
    </>
  );
};

export default TalentDetailHeader;
