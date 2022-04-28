import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideOversiktUrl } from "../urls";

const MinSideOversikt = React.lazy(() => import(minSideOversiktUrl));

export const Oversikt = () => (
  <React.Suspense fallback={<ContentLoader />}>
    <ErrorBoundary>
      <MinSideOversikt />
    </ErrorBoundary>
  </React.Suspense>
);

export default Oversikt;
