import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cheeses, setCheeses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cheeses")
      .then((response) => {
        setCheeses(response.data);
      })
      .catch((error) => console.error("Error fetching cheeses:", error));
  }, []);

  return (
    <div>
      {cheeses.map((cheese) => (
        <div key={cheese.id}>
          <h2>{cheese.name}</h2>
          <p>{cheese.pricePerKilo}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
