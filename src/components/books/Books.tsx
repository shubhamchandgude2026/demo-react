import { Box, Grid, Input } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useGetBooks } from "../../queries/useGetBooks";
import BookCard from "../BookCard";
import { useDebounce } from "../utils/debounce";
import SearchInput from "./SearchInput";
import { useGetAuthorById } from "../../queries/useGetAuthorById";

const Books = React.memo(() => {
  const { data: books, isLoading } = useGetBooks();
  const { data: authorById } = useGetAuthorById(1);
  console.log(authorById);
  // const filteredBooks = useMemo(() =>
  //   books?.filter(book =>
  //     book.title?.toLowerCase().includes(debounceValue.toLowerCase()) ||
  //     book.description?.toLowerCase().includes(debounceValue.toLowerCase())
  //   ) || [],
  //   [books, debounceValue]
  // );
  const [searchValue, setSearchValue] = useState<string>("");
  // const searchvalue = (value: any) => {
  //   console.log(value);
  //   setSearchValue(value);
  //   return value;
  // };
  const filterBooks = books?.filter((book) =>
    book.title?.toLocaleLowerCase()?.includes(searchValue.toLocaleLowerCase()),
  );
  // const res = use
  return (
    <Box>
      <SearchInput callback={setSearchValue} />
      {}
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 equal columns
          gap: 2,
        }}
      >
        {isLoading
          ? "loading..."
          : filterBooks?.map((book) => <BookCard key={book.id} book={book} />)}
      </Grid>
    </Box>
  );
});

export default Books;
