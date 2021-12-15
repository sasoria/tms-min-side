import React from "react";

const MinSide = React.lazy(() =>
  import("http://localhost:7100/build/dist/index.js")
);

const Veientilarbeid = React.lazy(() =>
  import("http://localhost:7200/build/dist/index.js")
);

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <MinSide />
      <Veientilarbeid />
    </React.Suspense>
  );
};

export default App;
