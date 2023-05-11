import React from "react";

import "./header.css";

import headerImg from "../assets/header-img.jpg";

function Header() {
  return (
    <div className="app__header app__wrapper" id="home">
      <div className="app__header-img">
        <img src={headerImg} />
      </div>
      <div className="app__header-text">
        <p>Hi, my name is</p>
        <h1>Marcin Borowczyk.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quam
          saepe necessitatibus aliquid, repudiandae ad nemo consequatur ullam
          praesentium porro sit, possimus velit quas cupiditate deserunt
          recusandae corporis expedita perferendis.
        </p>
        <button>See my projects</button>
      </div>
    </div>
  );
}

export default Header;
