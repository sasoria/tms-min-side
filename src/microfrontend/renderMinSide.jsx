import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";

export const renderMinSide = (MinSideTopp, MinSideBunn) => {
  return (
    <React.Suspense fallback={<ContentLoader />}>
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
