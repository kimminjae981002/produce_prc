const express = require("express");
const router = express.Router();

const Product = require("../schemas/products");

// router.get("/posts", (req, res) => {
//   res.render("../views/posts/index");
// });

router.get("/products", (req, res) => {
  res.send("hello products");
});
