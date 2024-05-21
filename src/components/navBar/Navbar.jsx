import React, { useContext, useState } from "react";
import "./navbar.scss";
import { FaBars, FaUser } from "react-icons/fa";
import { userData } from "./../../lib/dummyData";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notifications";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.fetch);
  if (currentUser) {
    fetch();
  }
  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="/logo.png" alt="" />
          <span>BibekEstate</span>
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Agents</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            {currentUser.avatar ? (
              <img src={currentUser.avatar} alt="" className="imgIcon" />
            ) : (
              <FaUser className="imgIcon" />
            )}
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to={"/login"}>Sign In</Link>
            <Link to={"/register"} className="signup">
              Sign Up
            </Link>
          </>
        )}
        <div className="menuIcon" onClick={() => setOpen((prev) => !prev)}>
          <FaBars />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
          <Link to={"/"}>Agents</Link>
          <Link to={"/login"}>Sign In</Link>
          <Link to={"/register"}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};
