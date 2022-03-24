import React from "react";
import useStore, { selectIsError } from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <React.Fragment>
      {isError ? <h1>Something went wrong...</h1> : null}
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
