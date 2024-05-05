import React from "react";
import "../styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>About</h2>
      <p>
        PZ Cheeseria is your one-stop cheese destination! We offer top-notch,
        quality cheeses with unique tastes. Come and explore our selection
        today!
      </p>
      <div className="location-hours">
        <div className="location">
          <h3>Location</h3>
          <p>Level 4/260 Queen St, Some City ZZZ 4000</p>
        </div>
        <div className="hours">
          <h3>Working hours</h3>
          <p>Monday - Sunday 10:00 AM - 10:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
