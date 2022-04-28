import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import useStore, { selectIsError } from "./store/store";
import Layout from "./components/layout/Layout";
import MinSide from "./micro-frontend/MinSide";
import ContentLoader from "./components/loader/ContentLoader";
import ErrorBoundary from "./components/errorboundary/ErrorBoundary";
import { minSideVarslingerUrl } from "./urls";

const MinSideVarslinger = React.lazy(() => import(minSideVarslingerUrl));

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <Router>
      <Layout isError={isError}>
        <Routes>
          <Route path="/minside" exact element={<MinSide />} />
          <Route
            path="/minside/varslinger"
            element={
              <React.Suspense fallback={<ContentLoader />}>
                <ErrorBoundary>
                  <MinSideVarslinger />
                </ErrorBoundary>
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
