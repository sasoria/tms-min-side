import React from "react";

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      Content
    </React.Suspense>
  );
};

export default App;
