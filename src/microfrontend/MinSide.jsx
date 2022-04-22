import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideBunnUrl, minSideToppUrl } from "../urls";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

export const MinSide = () => (
  <React.Suspense fallback={<ContentLoader />}>
    <ErrorBoundary>
      <MinSideTopp />
    </ErrorBoundary>
    <ErrorBoundary>
      <MinSideBunn />
    </ErrorBoundary>
  </React.Suspense>
);

export default MinSide;
