import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

export const renderMicrofrontends = (microfrontends) => {
  return (
    <React.Suspense fallback="Loading...">
      <ErrorBoundary>
        {microfrontends.map((Microfrontend) => {
          return <Microfrontend />;
        })}
      </ErrorBoundary>
    </React.Suspense>
  );
};
