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

/*
### Potential Improvements ###
1. **Accessibility**: Add proper ARIA roles and attributes for better accessibility.
2. **Parallax Optimization**: Optimize parallax effect for better performance across devices.
3. **Customizable Overlay**: Make the overlay color and opacity customizable via props.
*/
