import React from "react";

const App = () => {
  return (
    <React.Suspense fallback="Loading...">
      <p>Topp</p>
      Content
      <p>Bunn</p>
    </React.Suspense>
  );
};

export default App;
