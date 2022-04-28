import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import { QueryClient, QueryClientProvider } from "react-query";
import "./main.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authentication>
        <App />
      </Authentication>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
