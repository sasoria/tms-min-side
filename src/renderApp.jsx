import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Authentication from "./components/Authentication"
import { QueryClient, QueryClientProvider } from "react-query";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Authentication>
        <App />
      </Authentication>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);