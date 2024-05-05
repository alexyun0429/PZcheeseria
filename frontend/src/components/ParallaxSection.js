import React from "react";
import "../styles/ParallaxSection.css";

const ParallaxSection = ({ backgroundImage, title, children }) => {
  return (
    <section
      className="parallax-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h2>{title}</h2>
        <div className="parallax-content">{children}</div>
      </div>
    </section>
  );
};

export default ParallaxSection;
