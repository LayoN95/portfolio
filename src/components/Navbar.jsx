import React, { useState } from "react";

import { AiOutlineRocket } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import "./navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <AiOutlineRocket fontSize={64} color="#98b9f2" />
        {/* <p>Marcin Borowczyk</p> */}
      </div>
      <div className="navbar__links">
        <a className="navbar__link" href="#home">
          Home
        </a>
        <a className="navbar__link" href="#about">
          About Me
        </a>
        <a className="navbar__link" href="#projects">
          Projects
        </a>
        <a className="navbar__link" href="#contact">
          Contact
        </a>
      </div>
      <div className="navbar__smallscreen">
        <GiHamburgerMenu
          fontSize={40}
          color="#98b9f2"
          onClick={() => setToggleMenu(true)}
          cursor={"pointer"}
        />
        {toggleMenu && (
          <div className="navbar__smallscreen-overlay">
            <div className="navbar__smallscreen-links">
              <a
                className="navbar__link"
                onClick={() => setToggleMenu(false)}
                href="#home">
                Home
              </a>
              <a
                className="navbar__link"
                onClick={() => setToggleMenu(false)}
                href="#about">
                About Me
              </a>
              <a
                className="navbar__link"
                onClick={() => setToggleMenu(false)}
                href="#projects">
                Projects
              </a>
              <a
                className="navbar__link"
                onClick={() => setToggleMenu(false)}
                href="#contact">
                Contact
              </a>
            </div>
            <RxCross2
              fontSize={40}
              color="#98b9f2"
              className="navbar__smallscreen-overlay_close"
              onClick={() => setToggleMenu(false)}
              cursor={"pointer"}
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
