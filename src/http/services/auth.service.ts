"use server";
import { getAxiosInstance } from "../handlers/axios-handler";
import { SignPayload, SigninResponse } from "../models/signin";

export const signinService = async (
  payload: SignPayload
): Promise<SigninResponse> => {
  try {
    const http = await getAxiosInstance()
    const response = await http.post<SigninResponse>(
      "/auth/login",
      payload
    );
    return response.data;
  } catch (error: any) {
    console.log(">AuthService > signin", error?.message);
    throw error;
  }
};
export const logoutService = async (): Promise<void> => {
  try {
  } catch (error) {
    console.log(">AuthService > signin", error);
    throw error;
  }
};
