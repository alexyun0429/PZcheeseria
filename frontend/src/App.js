import React, { useState, useEffect } from "react";
import axios from "axios";
import CheeseCard from "./components/CheeseCard";

function App() {
  const [cheeses, setCheeses] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/cheeses")
      .then((response) => {
        setCheeses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cheeses:", error);
        console.log(error.response ?? error);
      });
  }, []);

  return (
    <div>
      <h1>Cheeseria</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {cheeses.map((cheese) => (
          <CheeseCard
            key={cheese.id}
            cheese={cheese}
            onClick={setSelectedCheese}
          />
        ))}
      </div>
      {selectedCheese && (
        <CheeseDetails
          cheese={selectedCheese}
          onClose={() => setSelectedCheese(null)}
        />
      )}
    </div>
  );
}

export default App;
