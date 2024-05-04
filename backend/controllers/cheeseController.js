const cheeses = require("../data/cheeseData");

exports.getCheeses = (req, res) => {
  res.json(cheeses);
};
