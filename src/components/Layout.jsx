import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex px-7">
        <Sidebar />
        <aside className="grow m-5 ml-0 rounded-xl" aria-label="Sidebar">
        <div className="overflow-y-auto scrollbar-hide py-4 px-3 bg-gray-300  h-screen m-3 rounded-xl">
          {children}
        </div>
        </aside>
      </div>
    </>
  );
};

export default Layout;
