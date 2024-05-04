import React from "react";
import "../styles/CheeseDetails";

function CheeseDetails({ cheese, onClose }) {
  return (
    <div className="cheese-details">
      <h2>{cheese.name}</h2>
      <p>Made from: {cheese.type} milk</p>
      <p>Origin: {cheese.origin}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CheeseDetails;
