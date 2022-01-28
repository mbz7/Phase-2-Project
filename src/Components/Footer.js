import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="d-flex flex-column">
      <footer className="mt-auto">
        <div
          className=" d-flex align-items-center justify-content-center jumbotron mx-auto bg-dark text-light text-center pt-3 pb-3"
          style={{ height: "10rem" }}
        >
          <div className="align-items-center justify-content-center mx-auto">
            <Link activeClassName="logo-active" className="logo mb-5" to="/">
              <img
                src="/skier 2_logo.png"
                width="auto"
                height="60px"
                className="d-inline-block align-top"
                alt="SkiBum logo"
              />
            </Link>
            <br />
            <div className="mt-3">
              <h6>All Rights Reserved © 2022</h6>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
