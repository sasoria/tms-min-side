import React from 'react';
import ReactDOM from 'react-dom';
import AppDevelopment from './AppDevelopment';
import Authentication from "./components/Authentication"
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Authentication>
        <AppDevelopment />
      </Authentication>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
 