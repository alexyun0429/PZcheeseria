const cheeses = require("../data/cheeseData");

exports.getCheeses = (req, res) => {
  try {
    console.log("Fetching cheeses 1:", cheeses);
    res.json(cheeses);
  } catch (error) {
    console.log(cheeses);
    console.error("Error fetching cheeses 2:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createCheese = (req, res) => {
  const newCheese = {
    id: cheeses.length + 1,
    name: req.body.name,
    pricePerKilo: req.body.pricePerKilo,
    colour: req.body.colour,
    imageUrl: req.body.imageUrl,
  };
  cheeses.push(newCheese);
  res.status(201).json(newCheese);
};

exports.updateCheese = (req, res) => {
  const index = cheeses.findIndex(
    (cheese) => cheese.id === parseInt(req.params.id)
  );
  if (index === -1) {
    return res.status(404).send("Cheese not found.");
  }
  cheeses[index] = { ...cheeses[index], ...req.body };
  res.json(cheeses[index]);
};

exports.deleteCheese = (req, res) => {
  const index = cheeses.findIndex(
    (cheese) => cheese.id === parseInt(req.params.id)
  );
  if (index === -1) {
    return res.status(404).send("Cheese not found.");
  }
  cheeses.splice(index, 1);
  res.status(204).send();
};
