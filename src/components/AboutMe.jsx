import React from "react";
import "../css/AboutMe.css";

const AboutMe = () => {
  return (
    // <div id="about-me">
    //   <div id="name-container"></div>
    //   <p id="myname">JORDAN THEISEN</p>
    //   <h2 id="postion-title">Computer Wizard</h2>
    // </div>
    <div className="about-me-container">
      <div className="about-me-child-container">
        <p className="first-name name">JORDAN</p>
        <p className="last-name name">THEISEN</p>

        {/* <span className="first-name">JORDAN</span>
          <span className="last-name">THEISEN</span> */}
        {/* <div className="last-name">THEISEN</div> */}
      </div>


      <div className="about-me-child-container right">
        <p className="quote">Let's build something together.</p>
        <p className="trademark">Computer Wizard</p>
      </div>


      <div className="down"></div>
    </div>
  );
};

export default AboutMe;
