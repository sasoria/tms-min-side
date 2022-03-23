import React from "react";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";
import ErrorBoundry from "./components/ErrorBoundry";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));

const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
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
