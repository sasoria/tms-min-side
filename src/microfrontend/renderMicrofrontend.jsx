import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";

export const renderMicrofrontend = (Microfrontend) => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ErrorBoundary>
        <Microfrontend />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default renderMicrofrontend;
