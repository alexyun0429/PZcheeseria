import React, { useEffect, useState } from "react";
import axios from "axios";
import CheeseDetail from "./CheeseDetail";
import "../styles/CheeseList.css";

const CheeseList = () => {
  const [cheeses, setCheeses] = useState([]);
  const [weights, setWeights] = useState({});
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

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

  const handleWeightChange = (id, value) => {
    setWeights((prevWeights) => ({ ...prevWeights, [id]: value }));
  };

  const calculatePrice = (pricePerKilo, weight) =>
    (pricePerKilo * weight) / 1000;

  const openDetail = (cheese) => {
    setSelectedCheese(cheese);
    setIsDetailOpen(true);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
    setSelectedCheese(null);
  };

  return (
    <div className="cheese-list">
      <h2>Menu</h2>
      <ul>
        {cheeses.map((cheese) => (
          <li
            key={cheese.id}
            className="cheese-card"
            onClick={() => openDetail(cheese)}
          >
            <img
              src={`http://localhost:5050/images/${cheese.imageUrl}`}
              alt={cheese.name}
            />
            <h3>{cheese.name}</h3>
            <p>${cheese.pricePerKilo}/kg</p>
            <input
              type="number"
              placeholder="Weight (g)"
              value={weights[cheese.id] || ""}
              onChange={(e) => handleWeightChange(cheese.id, e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <p>
              Total Price: $
              {calculatePrice(
                cheese.pricePerKilo,
                weights[cheese.id] || 0
              ).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>

      <CheeseDetail
        isOpen={isDetailOpen}
        onClose={closeDetail}
        cheese={selectedCheese}
      />
    </div>
  );
};

export default CheeseList;

/*
### Potential Improvements ###
1. **Persistent Storage**: Implement persistent storage like MongoDB, PostgreSQL, or SQLite for cheese data instead of a static JSON file.
2. **Validation**: Add validation for weight input to prevent invalid or negative values.
3. **Admin Interface**: Create an admin interface for CRUD operations (add/edit/delete) on cheese data.
4. **Performance Optimization**: Implement memoization or React Query for efficient data fetching and caching.
*/
