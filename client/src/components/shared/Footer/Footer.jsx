import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink className="footer-logo" to="/">
        TheSlapp <span>2021</span>
      </NavLink>
    </div>
  );
};

export default Footer;
