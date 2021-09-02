import React from "react";
import "./Navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__left">
          <span className="logo">Admin</span>
        </div>
        <div className="navbar__right">
          <div className="iconContainer">
            <NotificationsNone />
            <span className="icon__badge">2</span>
          </div>
          <div className="iconContainer">
            <Language />
            <span className="icon__badge">2</span>
          </div>
          <div className="iconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
