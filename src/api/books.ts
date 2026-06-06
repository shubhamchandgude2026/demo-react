import { createApi } from "./apiFactory";
import { Book, BooksApi } from "./generated";

export const booksApi = createApi(BooksApi);

export const getBooks = async (): Promise<Book[]> => {
  return (await booksApi.apiV1BooksGet()).data;
};
