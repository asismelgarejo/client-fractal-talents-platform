"use server";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { cookies } from "next/headers";

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  const http = axios.create({ baseURL: "" });
  http.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const access_token = cookies().get("auth");
    config.headers["Authorization"] = `"Bearer ${access_token}`;
    return config;
  });
  return http;
};
