import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          TheSlapp
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/blogs">
            BlogPosts
          </NavLink>
          <NavLink className="link" to="/add">
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
