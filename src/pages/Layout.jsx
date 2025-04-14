import React from "react";
import Navbar from "../component/Navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div
        className="p-0 flex "
        style={{ minHeight: "100vh" }}
      >
        <div className="">
          <div className="flex fixed z-10">

          </div>
        </div>
        <div className="flex-1 mt-0 pt-0">
          <main className="min-h-screen relative">
            <Navbar />
            <div className="px-20 pt-32">{children}</div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
