import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CheeseCalculator.css";

const CheeseCalculator = () => {
  const [cheeses, setCheeses] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [weight, setWeight] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    const fetchCheeses = async () => {
      try {
        const response = await axios.get("http://localhost:5050/cheeses");
        setCheeses(response.data);
      } catch (error) {
        console.error("Error fetching cheeses", error);
      }
    };

    fetchCheeses();
  }, []);

  const calculatePrice = () => {
    if (selectedCheese && weight > 0) {
      const cheese = cheeses.find(
        (cheese) => cheese.id === parseInt(selectedCheese)
      );
      if (cheese) {
        const pricePerGram = cheese.pricePerKilo / 1000;
        setTotalPrice((pricePerGram * weight).toFixed(2));
      }
    }
  };

  return (
    <div className="cheese-calculator">
      <h2>Cheese Calculator</h2>
      <select
        onChange={(e) => setSelectedCheese(e.target.value)}
        value={selectedCheese || ""}
      >
        <option value="">Select a Cheese</option>
        {cheeses.map((cheese) => (
          <option key={cheese.id} value={cheese.id}>
            {cheese.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Enter weight (grams)"
        value={weight}
        onChange={(e) =>
          setWeight(e.target.value ? parseFloat(e.target.value) : "")
        }
      />
      <button onClick={calculatePrice}>Calculate</button>
      {totalPrice && <p>Total Price: ${totalPrice}</p>}
    </div>
  );
};

export default CheeseCalculator;
