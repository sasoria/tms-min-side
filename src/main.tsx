import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import App from "./App";
import Authentication from "./components/authentication/Authentication";
import { getEnvironment } from "./api/environment";
import "./main.css";

if (getEnvironment() === "production") {
  Sentry.init({
    dsn: "https://06300e573bfb494a8241395dc8d43c0d@sentry.gc.nav.no/129",
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 0.1,
  });
}

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Authentication>
      <App />
    </Authentication>
  </React.StrictMode>
);
