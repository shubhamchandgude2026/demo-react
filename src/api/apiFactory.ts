import { axiosInstance } from "./axios";

export const createApi = <T>(ApiClass: new (...args: any[]) => T): T => {
  return new ApiClass(undefined, undefined, axiosInstance);
};