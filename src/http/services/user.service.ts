"use server";
import { User } from "@/types/User";
import { getAxiosInstance } from "../handlers/axios-handler";
import { UserProfileResponse } from "../models/user";

export const getUserProfile = async (): Promise<User> => {
  try {
    const http = await getAxiosInstance();
    const response = await http.get<UserProfileResponse>("/users/profile");
    return response.data;
  } catch (error: any) {
    console.log(">UserService > getUserProfile", error?.message);
    throw error;
  }
};
