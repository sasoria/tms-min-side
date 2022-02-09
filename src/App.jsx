import React from "react";
import { minSideToppUrl, minSideBunnUrl } from "./api/urls";

const MinSideTopp = React.lazy(() =>
  import(minSideToppUrl)
);

const MinSideBunn = React.lazy(() =>
  import(minSideBunnUrl)
);

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <MinSideTopp />
      <MinSideBunn />
    </React.Suspense>
  );
};

export default App;
