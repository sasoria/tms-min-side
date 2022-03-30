import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

export const renderMinSide = (MinSideTopp, MinSideBunn) => {
  return (
    <React.Suspense fallback="Loading...">
      <ErrorBoundary>
        <MinSideTopp />
      </ErrorBoundary>
      <ErrorBoundary>
        <MinSideBunn />
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default renderMinSide;
