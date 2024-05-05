// controllers/cheeseController.js
let cheeses = require("../data/cheeseData");

const getCheeses = (req, res) => {
  res.json(cheeses);
};

const getCheeseById = (req, res) => {
  const cheese = cheeses.find((c) => c.id === parseInt(req.params.id));
  if (!cheese) return res.status(404).json({ message: "Cheese not found" });
  res.json(cheese);
};

const addCheese = (req, res) => {
  const newCheese = {
    id: cheeses.length + 1,
    ...req.body,
  };
  cheeses.push(newCheese);
  res.status(201).json(newCheese);
};

const updateCheese = (req, res) => {
  const index = cheeses.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Cheese not found" });

  cheeses[index] = { id: parseInt(req.params.id), ...req.body };
  res.json(cheeses[index]);
};

const deleteCheese = (req, res) => {
  const index = cheeses.findIndex((c) => c.id === parseInt(req.params.id));
  if (index === -1)
    return res.status(404).json({ message: "Cheese not found" });

  cheeses.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getCheeses,
  getCheeseById,
  addCheese,
  updateCheese,
  deleteCheese,
};
