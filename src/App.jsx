import React from "react";
import useStore, { selectIsError } from "./store/store";
import ErrorBoundary from "./components/ErrorBoundary";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";
import "./App.css";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <div className="app">
      <main>
        {isError ? <h1>Something went wrong...</h1> : null}
        <React.Suspense fallback="Loading...">
          <section>
            <ErrorBoundary>
              <MinSideTopp />
            </ErrorBoundary>
          </section>
          <section>
            <ErrorBoundary>
              <MinSideBunn />
            </ErrorBoundary>
          </section>
        </React.Suspense>
      </main>
    </div>
  );
};

export default App;
