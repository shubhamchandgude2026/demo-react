import { createApi } from "./apiFactory";
import { CoverPhoto, CoverPhotosApi } from "./generated";

export const coverPhoto = createApi(CoverPhotosApi);

export const getCoverPhotos = async (): Promise<CoverPhoto[]> => {
  return (await coverPhoto.apiV1CoverPhotosGet()).data;
};
