import React, { useState, useEffect } from "react";
import axios from "axios";
import CheeseCard from "../components/CheeseCard";
import "../styles/HomePage.css";

function HomePage() {
  const [cheeses, setCheeses] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cheeses")
      .then((response) => setCheeses(response.data))
      .catch((error) => console.error("Failed to fetch cheeses:", error));
  }, []);

  return (
    <div className="home-page">
      <h1>The PZ Cheeseria</h1>
      <div className="cheese-grid">
        {cheeses.map((cheese) => (
          <CheeseCard
            key={cheese.id}
            cheese={cheese}
            onSelect={() => setSelectedCheese(cheese)}
          />
        ))}
      </div>
      {selectedCheese && (
        <div className="cheese-details-popup">
          <div className="cheese-details-content">
            <button
              className="close-button"
              onClick={() => setSelectedCheese(null)}
            >
              X
            </button>
            <CheeseCard cheese={selectedCheese} expanded={true} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
