import { useQuery } from "@tanstack/react-query"
import { getAuthorbyId } from "../api/authors"

export const useGetAuthorById = (id:number)=>{
  return useQuery({
    queryKey:['author',id],
    queryFn: ()=> getAuthorbyId(id),
  })
}