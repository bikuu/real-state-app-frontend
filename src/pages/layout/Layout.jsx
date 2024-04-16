import React from "react";
import "./layout.scss";
import { Outlet } from "react-router-dom";
import { Navbar } from "./../../components/navBar/Navbar";
const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
