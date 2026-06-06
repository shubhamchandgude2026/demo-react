import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../api/books";


export const useGetBooks = () => {
  return useQuery({
    queryKey: ["book"],
    queryFn: getBooks,
  });
};
