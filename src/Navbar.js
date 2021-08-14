import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import  from "../node_modules/bootstrap"

import "./Navbar.css";

const Navbar = () => {
  const [show, setOpen] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container">
            <Link to="/">
              <a class="navbar-brand" href="#">
                Connect
              </a>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={(show) => setOpen(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class={'${show ? "show" : ""}' + "collapse navbar-collapse "}
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">
                    communities
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <Link to="/login">
                  <div>
                    <button
                      class="btn btn-outline-success btn-style btn-style-border"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
