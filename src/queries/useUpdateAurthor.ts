import { useMutation, useQuery } from "@tanstack/react-query"
import { updateAuthor } from "../api/authors"
import { Author } from "../api/generated"

export const useUpdateAuthor= (author:Author)=>{
  return useMutation({
    mutationKey:['update-author',author.id],
    mutationFn:()=>updateAuthor(author.id as number,author)
  })
}