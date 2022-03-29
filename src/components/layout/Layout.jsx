import React from "react";
import FeilMelding from "../feilmelding/Feilmelding";
import "./Layout.css";

const Layout = ({ children, isError }) => {
  return (
    <div className="layout">
      <main>
        <section>
          {isError ? <FeilMelding /> : null}
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
