"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import Image from "next/image";
import { logout } from "@/http/repositories/auth.repository";
import styles from "./MainHeader.module.css";
import Link from "next/link";
import FloatMenu from "../FloatMenu";
import { MenuItem } from "../MenuItem";

type WrapperProps = {
  children: React.ReactNode;
};
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className={clsx(styles.ProfileContainer, "")}>
      <div className={clsx(styles.Profile)}>{children}</div>
    </div>
  );
};
const Placeholder = () => {
  return (
    <>
      <Image
        className={clsx(styles.ProfileImage, "rounded-full overflow")}
        draggable={false}
        src={"/assets/fallback_avatar.jpg"}
        placeholder="blur"
        blurDataURL="/assets/fallback_avatar.jpg"
        height={48}
        width={48}
        alt="user 1"
      />
      <h4 className={clsx(styles.ProfileName, "text-basis font-bold")}>
        Usuario
      </h4>
      <span className={clsx(styles.ProfilePosition, "text-sm text-gray-800")}>
        Iniciar sesión
      </span>
    </>
  );
};

const ProfileContainer = () => {
  const [userAvatarSrc, setUserAvatarSrc] = useState(
    "https://asml-golang-and-s3.s3.sa-east-1.amazonaws.com/ellie.jpg"
  );
  const userData = useSelector((root: IRootState) => root.user);
  const dispatch = useDispatch();

  if (!userData) {
    return (
      <Link href={"/login"} className="flex">
        <Wrapper>
          <Placeholder />
        </Wrapper>
      </Link>
    );
  }

  return (
    <FloatMenu
      parent={
        <Wrapper>
          <div className={clsx(styles.Profile)}>
            <Image
              className={clsx(styles.ProfileImage, "rounded-full overflow")}
              draggable={false}
              src={userAvatarSrc}
              placeholder="blur"
              blurDataURL="/assets/fallback_avatar.jpg"
              onError={(e) => setUserAvatarSrc("/assets/fallback_avatar.jpg")}
              height={48}
              width={48}
              alt="user 1"
            />
            <h4 className={clsx(styles.ProfileName, "text-basis font-bold")}>
              {userData?.firstName} {userData?.lastName}
            </h4>
            <span
              className={clsx(styles.ProfilePosition, "text-sm text-gray-800")}
            >
              Reclutador
            </span>
          </div>
        </Wrapper>
      }
    >
      <MenuItem
        onClick={async () => {
          await logout();
          dispatch.user.LOAD_USER(null);
        }}
      >
        LOGOUT
      </MenuItem>
    </FloatMenu>
  );
};

export default ProfileContainer;
