const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const cheeseRoutes = require("./routes/cheeseRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", cheeseRoutes);

app.get("/", (req, res) => {
  res.send("Cheeseria backend is running...");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
