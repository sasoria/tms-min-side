import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import { injectDecoratorClientSide } from "@navikt/nav-dekoratoren-moduler/csr";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/query";
import "./main.css";

if (process.env.NODE_ENV === "development") {
  await injectDecoratorClientSide({
    env: "dev",
  });
}

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
