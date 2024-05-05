// components/ParallaxSection.js
import React from "react";
import "../styles/ParallaxSection.css";

const ParallaxSection = ({ backgroundImage, title, children }) => {
  return (
    <div
      className="parallax-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
