"use client";
import clsx from "clsx";
import styles from "./TalentCard.module.css";
import {
  HeartOutlinedIcon,
  HeartContainedIcon,
  LocationIcon,
  MoneyIcon,
} from "@/utils/icons";
import Image from "next/image";
import CustomRating from "../../common/CustomRating";
import { useState } from "react";

type TalentCardProps = {
  active?: boolean;
};
const TalentCard: React.FC<TalentCardProps> = ({ active = false }) => {
  const Icon = true ? HeartContainedIcon : HeartOutlinedIcon;

  const [userAvatarSrc, setUserAvatarSrc] = useState("/assets/avatar.png");

  return (
    <div
      className={clsx(
        " w-full min-h-[100px] rounded rounded-xl p-4 text-black hover:bg-primary-100",
        {
          ["bg-primary-100"]: active,
          ["bg-white"]: !active,
        }
      )}
    >
      <div className={clsx("w-full h-full relative", styles.InnerContainer)}>
        <button className="absolute top-0 right-0">
          <Icon className="" />
        </button>

        <div className="rounded rounded-full overflow-hidden h-fit">
          <Image
            src={userAvatarSrc}
            width={64}
            height={64}
            draggable={false}
            alt=""
            placeholder="blur"
            blurDataURL="/assets/fallback_avatar.jpg"
            onError={(e) => setUserAvatarSrc("/assets/fallback_avatar.jpg")}
          />
        </div>

        <div className="space-y-2">
          <div>
            <h4 className="font-semibold text-md ">José Lopez Martinez</h4>
            <h6 className="text-sm text-gray-500">Full Stack Developer</h6>
          </div>
          <CustomRating />
          <div className="flex space-x-2 text-sm">
            <span className="flex space-x-1 items-center text-gray-500">
              <LocationIcon />
              <span>Lima, Peru</span>
            </span>
            <span className="flex space-x-1 items-center text-gray-500">
              <MoneyIcon />
              <span>2500-3000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentCard;
