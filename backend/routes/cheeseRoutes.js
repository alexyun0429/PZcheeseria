const express = require("express");
const router = express.Router();
const {
  getCheeses,
  getCheeseById,
  addCheese,
  updateCheese,
  deleteCheese,
} = require("../controllers/cheeseController");

/**
 * @swagger
 * /cheeses:
 *   get:
 *     summary: Get all cheeses
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", getCheeses);

/**
 * @swagger
 * /cheeses/{id}:
 *   get:
 *     summary: Get cheese by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 */
router.get("/:id", getCheeseById);

/**
 * @swagger
 * /cheeses:
 *   post:
 *     summary: Add a new cheese
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               pricePerKilo:
 *                 type: number
 *               color:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", addCheese);

/**
 * @swagger
 * /cheeses/{id}:
 *   put:
 *     summary: Update a cheese
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               pricePerKilo:
 *                 type: number
 *               color:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.put("/:id", updateCheese);

/**
 * @swagger
 * /cheeses/{id}:
 *   delete:
 *     summary: Delete a cheese
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Not found
 */
router.delete("/:id", deleteCheese);

module.exports = router;
