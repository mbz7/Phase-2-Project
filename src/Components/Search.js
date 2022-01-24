import React from "react";

function Search({ search, setter }) {

// create a search function - CONSOLE.LOG WORKS
function renderResortSearch(event) {
    console.log(event.target.value)
    setter(event.target.value)
}

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        placeholder="Search For Mountain Resorts Here..."
        onChange={renderResortSearch}
      ></input>
    </div>
  );
}

export default Search;
