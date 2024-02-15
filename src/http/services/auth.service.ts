"use server";

import { getAxiosInstance } from "../handlers/axios-handler";
import { SignPayload, SigninResponse } from "../models/signin";
// import AxiosHandler from "../handlers/axios-handler";

const externalService = async (): Promise<{ access_token: string }> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        access_token:
          "asdadlñdnkvwjqnq42384u23894u234jnuh48293u4'283h12u5bu2n582534u2042903423412834",
      });
    }, 2000);
  });
};

export const signinService = async (
  payload: SignPayload
): Promise<SigninResponse> => {
  try {
    const response = { data: await externalService() };
    // const http = getAxiosInstance()
    // const response = await this.http.post<SigninResponse>(
    //   "/auth/signin",
    //   payload
    // );
    return response.data;
  } catch (error) {
    console.log(">AuthService > signin", error);
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
