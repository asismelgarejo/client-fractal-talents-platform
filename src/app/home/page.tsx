"use server";
import React from "react";
import { getUserProfileRepo } from "@/http/repositories/user.repository";
import MainPage from "./MainPage";
import { cookies } from "next/headers";

const page = async () => {
  const cookie = cookies();
  const auth = cookie.get("auth");

  console.log("auth", auth);
  if (!auth?.value) return <MainPage />;


  const userProfileData = await getUserProfileRepo();
  return <MainPage userProfile={userProfileData} />;
};

export default page;
