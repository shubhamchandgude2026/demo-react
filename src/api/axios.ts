import axios from "axios";
import { config } from "../config";

export const axiosInstance = axios.create({
  baseURL: config.APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error.response || error.message);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  },
);
