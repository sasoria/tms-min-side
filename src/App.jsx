import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import useStore, { selectIsError } from "./store/store";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";
import Layout from "./components/layout/Layout";
import { renderMicrofrontends } from "./utils/render";

const MinSideTopp = React.lazy(() => import(minSideToppUrl));
const MinSideBunn = React.lazy(() => import(minSideBunnUrl));

const App = () => {
  const isError = useStore(selectIsError);

  return (
    <Router>
      <Layout isError={isError}>
        <Switch>
          <Route path="/" exact render={() => renderMicrofrontends([MinSideTopp, MinSideBunn])} />
          <Route path="/topp" render={() => renderMicrofrontends([MinSideTopp])} />
          <Route path="/bunn" render={() => renderMicrofrontends([MinSideBunn])} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
