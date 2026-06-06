/// <reference types="vite/client" />

type AppConfig = {
  APP_BASE_URL: string;
  APP_NAME: string;
  ENV: "development" | "production" | "test";
};
export const config: AppConfig = {
  APP_BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://fakerestapi.azurewebsites.net/",
  APP_NAME: import.meta.env.VITE_APP_NAME,
  ENV: "development",
};
