import React, { useState } from "react";
import "./navbar.scss";
import { FaBars, FaUser } from "react-icons/fa";
import { userData } from "./../../lib/dummyData";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>BibekEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <FaUser className="imgIcon" />
            <span>Bibek Lama</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="signup">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <FaBars />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};
