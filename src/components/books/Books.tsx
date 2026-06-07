import { Box, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { useGetBooks } from "../../queries/useGetBooks";
import BookCard from "../BookCard";
import SearchInput from "./SearchInput";
import { useGetAuthorById } from "../../queries/useGetAuthorById";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    background: {
      default: '#020617',
      paper: '#0f172a',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
          borderRadius: '12px',
          border: '1px solid #1e293b',
          padding: '10px 18px', // Added extra padding for input tag
          color: '#f8fafc',
          '&:before': {
            display: 'none',
          },
          '&:after': {
            display: 'none',
          },
          '&.Mui-focused': {
            borderColor: '#6366f1',
            boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.2)',
          },
        },
      },
    },
  },
});

const Books = React.memo(() => {
  const { data: books, isLoading } = useGetBooks();
  const { data: authorById } = useGetAuthorById(1);
  console.log(authorById);

  const [searchValue, setSearchValue] = useState<string>("");

  const filterBooks = books?.filter((book) =>
    book.title?.toLocaleLowerCase()?.includes(searchValue.toLocaleLowerCase()),
  );

  return (
    <ThemeProvider theme={muiDarkTheme}>
      <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
          
          {/* Header */}
          <header className="border-b border-slate-900 pb-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-4 group"
              >
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Dashboard
              </Link>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-white to-indigo-400 bg-clip-text text-transparent">
                Books Library
              </h1>
              <p className="text-sm text-slate-400 mt-2">
                Curated bookstore listing using async data endpoints powered by TanStack Query.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <SearchInput callback={setSearchValue} />
              {books && (
                <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-3 rounded-2xl">
                  <span className="text-xs font-semibold text-slate-300">
                    Total Books: <span className="font-mono text-indigo-400">{filterBooks?.length || 0}</span>
                  </span>
                </div>
              )}
            </div>
          </header>

          <main>
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
                <p className="text-xs text-slate-400 font-semibold font-mono">Syncing TanStack cache...</p>
              </div>
            ) : (
              <Grid
                container
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 3,
                }}
              >
                {filterBooks?.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </Grid>
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
});

export default Books;
