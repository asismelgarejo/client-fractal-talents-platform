"use server";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { cookies } from "next/headers";

export const getAxiosInstance = async (): Promise<AxiosInstance> => {
  const http = axios.create({ baseURL: process.env.BACKEND_SERVICE });
  http.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const access_token = cookies().get("auth");
    config.headers["Authorization"] = `Bearer ${access_token}`;
    return config;
  });
  // http.interceptors.response.use(
  //   (response: AxiosResponse<any>) => {
  //     return response; // Return all responses, including non-2xx responses
  //   },
  //   (error: AxiosError) => {
  //     // Handle error response
  //     if (error.response) {
  //       throw error.response.data; // Throw the error response data
  //     } else if (error.request) {
  //       throw new Error("Request made but no response received");
  //     } else {
  //       throw new Error("Error setting up request: " + error.message);
  //     }
  //   }
  // );
  return http;
};
