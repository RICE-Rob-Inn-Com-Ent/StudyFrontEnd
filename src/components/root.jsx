import React from "react";

import "./root.scss"

const Root = ({ children }) => {
  return (
    <>
      <header>
      </header>
      <main>{children}</main>
      <footer>
      </footer>
    </>
  );
};

export default Root;
