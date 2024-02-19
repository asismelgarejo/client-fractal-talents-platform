"use server";
import { cookies } from "next/headers";
import { SignPayload } from "../models/signin";
import { logoutService, signinService } from "../services/auth.service";

export const signinRepo = async (payload: SignPayload): Promise<void> => {
  try {
    const response = await signinService(payload);
    const cookie = cookies();
    cookie.set("auth", response.access_token);
  } catch (error: any) {
    console.log(">AuthRepository > signin",  error?.message);
    throw error;
  }
};
export const logout = async (): Promise<void> => {
  try {
    await logoutService();
    const cookie = cookies();
    cookie.delete("auth");
    console.log(">>cookkie", cookie.get("auth"));
  } catch (err) {
    console.log(">AuthRepository > logout", err);
    throw err;
  }
};
