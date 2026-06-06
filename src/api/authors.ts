import { createApi } from "./apiFactory";
import { Author, AuthorsApi } from "./generated";

export const authorsApi = createApi(AuthorsApi);

export const getAuthors = async (): Promise<Author[]> => {
  return (await authorsApi.apiV1AuthorsGet()).data;
};
export const getAuthorbyId =async (id:number):Promise<Author>=>{
  return (await authorsApi.apiV1AuthorsIdGet(id)).data;
}
export const updateAuthor= async (id:number,author:Author)=>{
  return (await authorsApi.apiV1AuthorsIdPut(id)).data;
}