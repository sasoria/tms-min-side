import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import useStore, { selectIsError } from "./store/store";
import { minSideToppUrl, minSideBunnUrl } from "./urls";
import Layout from "./components/layout/Layout";
import renderMinSide from "./microfrontend/renderMinSide";
import renderMicrofrontend from "./microfrontend/renderMicrofrontend";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <Router>
      <Layout isError={isError}>
        <Routes>
          <Route path="/minside" exact element={renderMinSide(MinSideTopp, MinSideBunn)} />
          <Route path="/minside/topp" element={renderMicrofrontend(MinSideTopp)} />
          <Route path="/minside/bunn" element={renderMicrofrontend(MinSideBunn)} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
