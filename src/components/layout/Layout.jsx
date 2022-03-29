import React from "react";
import "./Layout.css";

const Layout = ({ children, isError }) => {
  return (
    <div className="layout">
      <main>
        <section>
          {isError ? <h1>Something went wrong...</h1> : null}
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
