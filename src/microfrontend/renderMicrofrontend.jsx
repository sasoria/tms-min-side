import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

export const renderMicrofrontend = (Microfrontend) => {
  return (
    <React.Suspense fallback="Loading...">
      <ErrorBoundary>
        <Microfrontend />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default renderMicrofrontend;
