import React from "react";
import eGov from "../assets/eGov-Foundation.png";

function Navbar() {

    const menuItems = [
    "About Us",
    "Areas of work",
    "Products & Solution",
    "Our Platform",
    "Ecosystem",
    "Resources",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm menu">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={eGov} alt="Logo" height="40" />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              {menuItems.map((item, i) => (
                <li className="nav-item" key={i}>
                  <a className="nav-link" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
