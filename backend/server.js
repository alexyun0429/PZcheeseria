const express = require("express");
const app = express();
const path = require("path");

// Correctly point to the directory where images are stored
app.use("/images", express.static(path.join(__dirname, "data/images")));

// Existing setup for body-parser, cors, etc.
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

// Import your routes
const cheeseRoutes = require("./routes/cheeseRoutes");

// Use routes
app.use("/api", cheeseRoutes);

// Serve API documentation set up via Swagger, if you have it configured
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swaggerConfig");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Home route or health check route
app.get("/", (req, res) => {
  console.log("server get.");
  res.send("Cheeseria API is running...");
});

// Listen on the configured port
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
