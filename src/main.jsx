import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/query";
import "./main.css";

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
