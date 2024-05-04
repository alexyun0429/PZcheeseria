const express = require("express");
const router = express.Router();
const {
  getCheeses,
  createCheese,
  updateCheese,
  deleteCheese,
} = require("../controllers/cheeseController");

router.get("/cheeses", getCheeses);
router.post("/cheeses", createCheese);
router.put("/cheeses/:id", updateCheese);
router.delete("/cheeses/:id", deleteCheese);

module.exports = router;
