"use server";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { cookies } from "next/headers";
import { ErrorResponse } from "../models/common";

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  const http = axios.create({ baseURL: process.env.BACKEND_SERVICE });
  http.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const access_token = cookies().get("auth");
    config.headers["Authorization"] = `Bearer ${access_token}`;
    return config;
  });
  http.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response;
    },
    (error: AxiosError<ErrorResponse>) => {
      if (error.response) throw error.response.data.message;
      throw error;
    }
  );
  return http;
};
