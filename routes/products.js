const express = require("express");
const router = express.Router();

const Product = require("../schemas/products");

router.get("/products", (req, res) => {
  res.send("hello products");
});
