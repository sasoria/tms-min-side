import React from "react";
import { selectIsError } from "./store/store";
import ErrorBoundry from "./components/ErrorBoundry";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  if (selectIsError() === true) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <React.Suspense fallback="Loading...">
      <ErrorBoundry>
        <MinSideTopp />
      </ErrorBoundry>
      <ErrorBoundry>
        <MinSideBunn />
      </ErrorBoundry>
    </React.Suspense>
  );
};

export default App;
