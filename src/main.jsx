import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // Data stays fresh for 1 minute
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
