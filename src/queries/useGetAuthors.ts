import { useQuery } from "@tanstack/react-query";
import { getAuthors } from "../api/authors";

const useGetAuthors = () => {
  return useQuery({
    queryKey: ['authors'],
    queryFn: getAuthors,
  });
};

export default useGetAuthors;