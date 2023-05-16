import React from "react";

import "./about.css";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function About() {
  return (
    <div className="app__about app__wrapper">
      <div className="app__about__heading">
        <div className="heading-text">
          <h1>My skills:</h1>
        </div>
      </div>
      <div className="app__about-info">
        <FaHtml5 color="#ffffff" fontSize={64} />
        <SiCss3 color="#ffffff" fontSize={64} />
        <SiJavascript color="#ffffff" fontSize={64} />
        <FaReact color="#ffffff" fontSize={64} />
        <SiMongodb color="#ffffff" fontSize={64} />
      </div>
    </div>
  );
}

export default About;
