const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swaggerConfig");
const cheeseRoutes = require("./routes/cheeseRoutes");

const app = express();

app.use(cors({ origin: "*" }));
// app.use(cors());

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/cheeses", cheeseRoutes);

// Serve static images
app.use("/images", express.static(path.join(__dirname, "data/images")));

const PORT = 5050;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () =>
    console.log(`Backend server running on http://localhost:${PORT}`)
  );
}

module.exports = app;
