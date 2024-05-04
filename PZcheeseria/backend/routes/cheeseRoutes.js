const express = require("express");
const router = express.Router();
const { getCheeses } = require("../controllers/cheeseController");

router.get("/cheeses", getCheeses);

module.exports = router;
