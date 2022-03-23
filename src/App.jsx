import React from "react";
import { selectIsError } from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  if (selectIsError() === true) {
    return <h1>Something went wrong...</h1>;
  }

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

export default App;
