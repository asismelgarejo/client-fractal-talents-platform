"use server";
import { User } from "@/types/User";
import { getUserProfile } from "../services/user.service";

export const getUserProfileRepo = async (): Promise<User> => {
  try {
    return await getUserProfile();
  } catch (error: any) {
    console.log(error);
    console.log(">UserRepository > getUserProfileRepo", error?.message);
    throw error;
  }
};
