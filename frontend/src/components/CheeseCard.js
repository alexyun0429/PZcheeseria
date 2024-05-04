import React, { useState } from "react";
import "../styles/CheeseCard.css";

function CheeseCard({ cheese }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = (e) => {
    e.stopPropagation(); // Prevents the click from bubbling up to the card itself
    setIsExpanded(false);
  };

  return (
    <div
      className={`cheese-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(true)}
    >
      {isExpanded && (
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      )}
      <img
        src={`http://localhost:3001/images/${cheese.imageUrl}`}
        alt={cheese.name}
        className="cheese-image"
      />
      <div className="cheese-info">
        <h3>{cheese.name}</h3>
        {isExpanded && (
          <div className="cheese-details">
            <p>Made from: {cheese.type} milk</p>
            <p>Country of origin: {cheese.origin}</p>
            <p>Type: {cheese.type}</p>
            <p>Texture: {cheese.texture}</p>
            <p>Colour: {cheese.colour}</p>
            <p>Flavour: {cheese.flavour}</p>
            <p>Cost per KG: ${cheese.pricePerKilo}</p>
            {/* Additional UI for user input and calculated cost */}
          </div>
        )}
      </div>
    </div>
  );
}

export default CheeseCard;
