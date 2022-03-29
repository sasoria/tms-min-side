import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

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
