import React from "react";
import { minSideToppUrl, minSideBunnUrl } from "./urls";

const MinSideTopp = React.lazy(() =>
  import(minSideToppUrl)
);

const MinSideBunn = React.lazy(() =>
  import(minSideBunnUrl)
);

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      test234
    </React.Suspense>
  );
};

export default App;
