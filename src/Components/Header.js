import React from "react";
import Search from "./Search";

function Header({ isDarkMode, search, setter }) {
  return (
    <header>
      <button onClick={isDarkMode}>
        {isDarkMode ? "App Light" : "App Dark"}
      </button>

      <Search search={search} setter={setter} />
    </header>
  );
}

export default Header;
