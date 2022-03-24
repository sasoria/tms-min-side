import React from "react";
import { selectIsError } from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  return (
    <React.Fragment>
      {selectIsError() ? <h1>Something went wrong...</h1> : null}
      <React.Suspense fallback="Loading...">
        <ErrorBoundary>
          <MinSideTopp />
        </ErrorBoundary>
        <ErrorBoundary>
          <MinSideBunn />
        </ErrorBoundary>
      </React.Suspense>
    </React.Fragment>
  );
};

export default App;
