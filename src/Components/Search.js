import React from "react";
import { Button, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function Search({ search, setter }) {
  // create a search function - CONSOLE.LOG WORKS
  function renderResortSearch(event) {
    console.log(event.target.value);
    setter(event.target.value);
  }

  return (
    <Container>
      <div className="input-group pt-5 col-8">
        <input
          type="text"
          class="form-control rounded"
          aria-label="Search"
          aria-describedby="search-addon"
          value={search}
          placeholder="Search For Mountain Resorts Here..."
          onChange={renderResortSearch}
        />
        <button type="button" class="btn btn-outline-primary">
          search
        </button>
      </div>
      {/* <div>
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Search For Mountain Resorts Here..."
          onChange={renderResortSearch}
        ></input>
      </div> */}
    </Container>
  );
}

export default Search;
