import React from "react";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";
import ContentLoader from "../components/loader/ContentLoader";
import { minSideVarslingerUrl } from "../urls";

const Varslinger = React.lazy(() => import(minSideVarslingerUrl));

const MinSideVarslinger = () => (
  <React.Suspense fallback={<ContentLoader />}>
    <ErrorBoundary>
      <Varslinger />
    </ErrorBoundary>
  </React.Suspense>
);

export default MinSideVarslinger;
