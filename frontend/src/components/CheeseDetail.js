import React from "react";
import "../styles/CheeseDetail.css";

const CheeseDetail = ({ isOpen, onClose, cheese }) => {
  if (!isOpen || !cheese) return null;

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-content" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close-button" onClick={onClose}>
          &times;
        </button>
        <img
          src={`http://localhost:5050/images/${cheese.imageUrl}`}
          alt={cheese.name}
          className="detail-cheese-image"
        />
        <h3>{cheese.name}</h3>
        <p>Colour: {cheese.colour}</p>
        <p>Price per kilo: ${cheese.pricePerKilo}</p>
        <p>Description: A premium {cheese.colour} cheese.</p>
      </div>
    </div>
  );
};

export default CheeseDetail;
