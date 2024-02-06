import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomInput from "./CustomInput";

import styles from "./MainHeader.module.css";
import clsx from "clsx";
import { EyesIcon } from "@/utils/icons";

type MainHeaderProps = {};

const MainHeader: React.FC<MainHeaderProps> = ({}) => {
  return (
    <header className="w-full bg-white text-black border-b border-gray-300">
      <div
        className={clsx(
          "max-w-[1300px] min-h-[90px] m-auto px-4",
          styles.MainHeader
        )}
      >
        <Link href={"/home"} className={clsx(styles.LogoContainer, "flex")}>
          <Image
            src={"/assets/fractal_logo.svg"}
            style={{}}
            height={21}
            width={120}
            className="w-[121px] h-auto m-auto"
            alt="fractal logo"
          />
        </Link>
        <div className={clsx(styles.InputContainer, "flex")}>
          <CustomInput
            startIcon={<EyesIcon />}
            className="my-auto"
            placeholder="Buscar talento o puesto"
          />
        </div>
        <div className={clsx(styles.ProfileContainer, "")}>
          <div className={clsx(styles.Profile)}>
            <Image
              className={clsx(styles.ProfileImage, "rounded-full overflow")}
              src="/assets/avatar.png"
              height={48}
              width={48}
              alt="user 1"
            />
            <h4 className={clsx(styles.ProfileName, "text-basis font-bold")}>
              Claudia Vazquez
            </h4>
            <span className={clsx(styles.ProfilePosition, "text-sm text-gray-800")}>
              Reclutador
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
