import React from "react";
import ParallaxSection from "./components/ParallaxSection";
import CheeseList from "./components/CheeseList";
import AboutSection from "./components/AboutSection";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <ParallaxSection
        backgroundImage="/images/cheese-shop.jpeg"
        title="Welcome to PZ Cheeseria"
      >
        <p>Your one-stop destination for premium cheeses</p>
      </ParallaxSection>

      <CheeseList />

      <ParallaxSection
        backgroundImage="/images/cheese-selection.jpeg"
        title="Our Premium Cheeses"
      >
        <p>Discover our world of fine cheeses</p>
      </ParallaxSection>

      <AboutSection />

      <ParallaxSection
        backgroundImage="/images/catering.jpeg"
        title="Catering Services"
      >
        <p>Get in touch to learn more about our catering options</p>
      </ParallaxSection>
    </div>
  );
};

export default App;
