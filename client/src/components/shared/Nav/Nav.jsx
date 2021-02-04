import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Search from "../../Search/Search";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          TheSlapp
        </NavLink>
        <Search></Search>
        <div className="links">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/blogs/add">
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
