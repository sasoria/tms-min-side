import React from "react";

const MinSideTopp = React.lazy(() =>
  import("http://localhost:7200/build/dist/index.js")
);

const Veientilarbeid = React.lazy(() =>
  import("http://localhost:7300/build/dist/index.js")
);

const MinSideBunn = React.lazy(() =>
  import("http://localhost:7400/build/dist/index.js")
);

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <MinSideTopp />
      <Veientilarbeid />
      <MinSideBunn />
    </React.Suspense>
  );
};

export default App;
