import React from "react";
import FeilMelding from "../feilmelding/Feilmelding";
import "./Layout.css";

const Layout = ({ children, isError }) => {
  return (
    <div className="layout">
      <main>
        {isError ? <FeilMelding /> : null}
        {children}
      </main>
    </div>
  );
};

export default Layout;
