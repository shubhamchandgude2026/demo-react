import { useQuery } from "@tanstack/react-query";
import { getCoverPhotos } from "../api/coverPhotos";

export const useGetCoverPhotos = () => {
  return useQuery({
    queryKey: ["get-cover-photos"],
    queryFn: getCoverPhotos,
  });
};
