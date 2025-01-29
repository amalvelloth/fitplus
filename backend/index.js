const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const CardRouter = require("./Routes/CardRouter");
const ProductRouter = require("./Routes/ProductRouter");

require("dotenv").config();
require("./Models/db");
const PORT = process.env.PORT || 8000;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(express.json()); // Built-in JSON parser
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/api/cards", CardRouter);
app.use("/products", ProductRouter);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
