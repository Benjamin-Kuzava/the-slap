import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form">
      <input
        className="search-input"
        value={props.value}
        // onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="Out of Order. See P3 for a working boi"
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Search;
