import React, { useState } from "react";
import "../styles/CheeseCard.css";

function CheeseCard({ cheese }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`cheese-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img src={cheese.imageUrl} alt={cheese.name} className="cheese-image" />
      <div className="cheese-info">
        <h3>{cheese.name}</h3>
        {isExpanded && (
          <div className="cheese-details">
            {/* <p>Made from: {cheese.milkType}</p> */}
            {/* <p>Country: {cheese.country}</p> */}
            {/* <p>Type: {cheese.type}</p> */}
            {/* <p>Texture: {cheese.texture}</p> */}
            <p>Colour: {cheese.colour}</p>
            {/* <p>Flavor: {cheese.flavor}</p> */}
            <p>Price: ${cheese.pricePerKilo}/kg</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheeseCard;
