import React, { useRef } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navBarRef = useRef();

  function toggleHamburger(evt) {
    evt.target.classList.toggle('is-active');
    navBarRef.current.classList.toggle('is-active');
  } // This is the proper place for the function closing brace.

  return (
    <nav className="navbar custom-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src="./public/jounral-logo.svg" alt="Journal" />
        </Link>

        <a role="button" onClick={toggleHamburger} className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" onClick={toggleHamburger} ref={navBarRef} className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/category" className="navbar-item">Select Category</Link>
          <Link to="/entry/new" className="navbar-item">New Entry</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
