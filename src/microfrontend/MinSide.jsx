import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideTjenesterUrl } from "../urls";

const MinSideTjenester = React.lazy(() => import(minSideTjenesterUrl));

export const MinSide = () => (
  <React.Suspense fallback={<ContentLoader />}>
    <ErrorBoundary>
      <MinSideTjenester />
    </ErrorBoundary>
  </React.Suspense>
);

export default MinSide;
