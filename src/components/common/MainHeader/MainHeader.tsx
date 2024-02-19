"use client";
import Image from "next/image";
import Link from "next/link";
import CustomInput from "../CustomInput";

import styles from "./MainHeader.module.css";
import clsx from "clsx";
import { EyesIcon } from "@/utils/icons";
import ProfileContainer from "./ProfileContainer";

type MainHeaderProps = {};

const MainHeader: React.FC<MainHeaderProps> = ({}) => {
  return (
    <header className="w-full bg-white text-black border-b border-gray-300">
      <div
        className={clsx(
          "max-w-screen-2xl min-h-[90px] m-auto px-10",
          styles.MainHeader
        )}
      >
        <Link href={"/home"} className={clsx(styles.LogoContainer, "flex")}>
          <Image
            src={"/assets/fractal_logo.svg"}
            placeholder="blur"
            draggable={false}
            blurDataURL="/assets/fractal_logo.svg"
            style={{}}
            height={21}
            width={120}
            className="w-[121px] h-auto m-auto"
            alt="fractal logo"
          />
        </Link>
        <div className={clsx(styles.InputContainer, "flex w-fit")}>
          <CustomInput
            startIcon={<EyesIcon />}
            className="my-auto"
            placeholder="Buscar talento o puesto"
          />
        </div>
        <ProfileContainer />
      </div>
    </header>
  );
};

export default MainHeader;
